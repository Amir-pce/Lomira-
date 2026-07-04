# Lumira Beauty Booking

یک وب‌سایت استاتیک، چندصفحه‌ای و RTL برای سیستم رزرو نوبت سالن‌های زیبایی با هویت بصری مینیمال، لوکس و مدرن.

## ویژگی‌های تکمیل‌شده

- طراحی چندصفحه‌ای شامل خانه، درباره ما، خدمات، متخصصان، رزرو، قیمت‌ها، گالری، نظرات، بلاگ، FAQ، تماس، ورود/ثبت‌نام و پنل کاربری نمونه.
- هدر sticky با Navbar، فوتر حرفه‌ای، دکمه CTA و تغییر تم Dark/Light.
- طراحی Mobile First با Bootstrap RTL، CSS Variables، گوشه‌های گرد، سایه‌های ملایم و پالت رزگلد/کرم/مشکی/طلایی.
- انیمیشن‌های سبک مبتنی بر `opacity` و `transform` با IntersectionObserver.
- جستجو و فیلتر خدمات در `services.html`.
- فرم رزرو با اعتبارسنجی سمت کاربر، تقویم تعاملی، انتخاب ساعت و نمایش اسلات‌های آزاد/پرشده در `booking.html`.
- Lazy Loading برای تصاویر گالری، بلاگ و کارت‌ها.
- ساختار معنایی HTML، متن جایگزین تصاویر، skip link و رعایت پایه‌های Accessibility و SEO.
- استفاده از CDNهای Bootstrap، jQuery، Font Awesome و Google Fonts.

## مسیرهای فعلی

- `/index.html` — صفحه اصلی و Hero Section.
- `/about.html` — معرفی برند و ارزش‌ها.
- `/services.html` — لیست خدمات با پارامترهای تعاملی جستجو و فیلتر سمت کاربر.
- `/specialists.html` — کارت متخصصان و دکمه رزرو.
- `/booking.html` — تقویم و فرم رزرو نمونه.
- `/pricing.html` — بسته‌ها و قیمت‌ها.
- `/gallery.html` — گالری نمونه‌کار با تصاویر Placeholder و Lazy Loading.
- `/testimonials.html` — نظرات مشتریان.
- `/blog.html` — مقالات نمونه.
- `/faq.html` — پرسش‌های متداول با Bootstrap Accordion.
- `/contact.html` — اطلاعات تماس و فرم اعتبارسنجی‌شده.
- `/login.html` — فرم نمایشی ورود و ثبت‌نام.
- `/dashboard.html` — پنل کاربری نمونه.

## ساختار پروژه

```text
index.html
about.html
services.html
specialists.html
booking.html
pricing.html
gallery.html
testimonials.html
blog.html
faq.html
contact.html
login.html
dashboard.html
css/
  style.css
js/
  main.js
images/
  logo.svg
```

## داده‌ها، مدل‌ها و سرویس‌های ذخیره‌سازی

- این نسخه کاملاً استاتیک است و از دیتابیس یا Table API استفاده نمی‌کند.
- وضعیت تم در `localStorage` با کلید `lumira-theme` ذخیره می‌شود.
- اسلات‌های رزرو نمونه در آرایه/آبجکت داخل `js/main.js` تعریف شده‌اند و پایدار نیستند.

## URLهای عمومی و API

- Production URL: پس از انتشار از تب **Publish** تولید می‌شود.
- API endpoint فعال: ندارد.
- CDNها: Bootstrap RTL، Bootstrap Bundle، jQuery، Font Awesome، Google Fonts.

## ویژگی‌های هنوز پیاده‌سازی‌نشده

- احراز هویت واقعی، پرداخت آنلاین و ذخیره رزرو در سرور.
- پنل مدیریت سالن برای تعریف خدمات، متخصصان و ظرفیت‌ها.
- ارسال پیامک/ایمیل یادآوری نوبت.
- اتصال به تقویم واقعی شمسی/میلادی با تعطیلات پویا.

## پیشنهاد گام‌های بعدی

1. اتصال فرم رزرو به RESTful Table API یا بک‌اند واقعی برای ذخیره نوبت‌ها.
2. افزودن پنل مدیریت برای CRUD خدمات، متخصصان و قیمت‌ها.
3. اضافه کردن پرداخت آنلاین و سیاست لغو رزرو.
4. بهینه‌سازی محتوای SEO برای صفحات خدمات و مقالات.
5. جایگزینی تصاویر Placeholder با عکس‌های اختصاصی برند.
