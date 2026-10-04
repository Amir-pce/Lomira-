/* Lumira shared UI scripts: lightweight interactions with jQuery + vanilla JS. */
(function () {
  'use strict';

  const $doc = $(document);
  const body = document.body;
  const savedTheme = localStorage.getItem('lumira-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme) {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('lumira-theme', theme);
    $('.theme-toggle i').attr('class', theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon');
    $('.theme-toggle').attr('aria-label', theme === 'dark' ? 'تغییر به حالت روشن' : 'تغییر به حالت تاریک');
  }

  applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

  $doc.on('click', '.theme-toggle', function () {
    applyTheme(body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  // Active navigation link based on current file.
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $('.nav-link, .footer-link').each(function () {
    const href = ($(this).attr('href') || '').split('#')[0];
    if (href === currentPage) $(this).addClass('active').attr('aria-current', 'page');
  });

  // Smooth reveal on scroll using IntersectionObserver for performance.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // Service search and category filtering.
  function filterServices() {
    const query = ($('#service-search').val() || '').toString().trim().toLowerCase();
    const category = $('.filter-btn.active').data('filter') || 'all';
    $('.service-card-wrap').each(function () {
      const text = $(this).text().toLowerCase();
      const itemCategory = $(this).data('category');
      const matchesText = text.indexOf(query) !== -1;
      const matchesCategory = category === 'all' || category === itemCategory;
      $(this).toggle(matchesText && matchesCategory);
    });
  }
  $doc.on('input', '#service-search', filterServices);
  $doc.on('click', '.filter-btn', function () {
    $('.filter-btn').removeClass('active').attr('aria-pressed', 'false');
    $(this).addClass('active').attr('aria-pressed', 'true');
    filterServices();
  });

  // Booking calendar and time slots.
  const bookedSlots = {
    '2026-06-23': ['10:00', '16:00'],
    '2026-06-24': ['12:00', '18:00'],
    '2026-06-25': ['09:00', '15:00'],
    '2026-06-26': ['11:00', '17:00']
  };
  const times = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  let selectedDate = '';
  let selectedTime = '';

  function toIsoDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function renderCalendar() {
    const container = document.getElementById('booking-calendar');
    if (!container) return;
    const today = new Date('2026-06-22T09:00:00');
    const labels = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
    container.innerHTML = labels.map(label => `<div class="text-center fw-bold text-muted-lux" aria-hidden="true">${label}</div>`).join('');
    for (let i = 0; i < 21; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const iso = toIsoDate(date);
      const isWeekend = date.getDay() === 5;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `calendar-day ${isWeekend ? 'disabled' : ''}`;
      btn.disabled = isWeekend;
      btn.dataset.date = iso;
      btn.setAttribute('aria-label', `انتخاب تاریخ ${iso}`);
      btn.innerHTML = `<strong>${date.getDate()}</strong><small class="d-block">${date.toLocaleDateString('fa-IR', { month: 'short' })}</small>`;
      container.appendChild(btn);
    }
  }

  function renderSlots(date) {
    const container = document.getElementById('time-slots');
    if (!container) return;
    const booked = bookedSlots[date] || [];
    container.innerHTML = times.map(time => {
      const isBooked = booked.includes(time);
      return `<button type="button" class="time-slot ${isBooked ? 'booked' : ''}" ${isBooked ? 'disabled' : ''} data-time="${time}" aria-label="${isBooked ? 'پر شده' : 'آزاد'} ساعت ${time}">
        <span class="slot-status ${isBooked ? 'slot-booked' : 'slot-free'}"></span>${time}
      </button>`;
    }).join('');
  }

  renderCalendar();
  $doc.on('click', '.calendar-day:not(.disabled)', function () {
    selectedDate = $(this).data('date');
    selectedTime = '';
    $('.calendar-day').removeClass('selected');
    $(this).addClass('selected');
    $('#selected-date').val(selectedDate);
    $('#selected-time').val('');
    renderSlots(selectedDate);
  });
  $doc.on('click', '.time-slot:not(.booked)', function () {
    selectedTime = $(this).data('time');
    $('.time-slot').removeClass('selected');
    $(this).addClass('selected');
    $('#selected-time').val(selectedTime);
  });

  // Client-side booking form validation.
  $doc.on('submit', '#booking-form', function (event) {
    event.preventDefault();
    const form = this;
    if (!selectedDate) $('#selected-date').val('');
    if (!selectedTime) $('#selected-time').val('');
    if (!form.checkValidity()) {
      event.stopPropagation();
      $(form).addClass('was-validated');
      return;
    }
    $('#booking-success').removeClass('d-none').attr('tabindex', '-1').focus();
    form.reset();
    $(form).removeClass('was-validated');
    $('.calendar-day, .time-slot').removeClass('selected');
    selectedDate = '';
    selectedTime = '';
  });

  // Demo auth forms.
  $doc.on('submit', '.demo-auth-form, #contact-form', function (event) {
    event.preventDefault();
    if (!this.checkValidity()) {
      event.stopPropagation();
      $(this).addClass('was-validated');
      return;
    }
    const alert = $(this).find('.form-alert');
    alert.removeClass('d-none').attr('tabindex', '-1').focus();
  });
})();
