# Lumira Beauty Booking

A fourteen-page static site for a beauty salon, built around the one thing that actually
matters to that business: taking a booking. Right-to-left, Persian interface, mobile first.

**[Live demo](https://amir-pce.github.io/Lomira-/)** · [Persian documentation](README.fa.md)

## The booking flow

`booking.html` is the centre of the site. An interactive calendar, time selection, and
slots shown as free or taken, with the form validated before anything is submitted. The
rest of the site exists to get a visitor there.

## Pages

Home · About · Services · Specialists · **Booking** · Pricing · Gallery · Testimonials ·
Blog · FAQ · Contact · Sign in / register · Sample user panel

`services.html` has client-side search and filtering, so a visitor who knows what they
want does not have to read the list.

## Worth noting

- **Mobile first**, with Bootstrap's RTL build, CSS custom properties, and a rose-gold,
  cream, black and gold palette carried through every page.
- **Lazy loading** on gallery, blog and card images — the gallery is the heaviest page
  and it is the one most likely to be opened on a phone.
- **Animation on `opacity` and `transform` only**, triggered by `IntersectionObserver`.
  Those two properties are the ones a browser can animate without reflowing the page.
- **Accessibility basics done rather than claimed**: semantic structure, image alt text,
  and a skip link.
- Dark and light themes, sticky header, professional footer.

## Built with

HTML · CSS · JavaScript · jQuery · Bootstrap RTL · Font Awesome · Google Fonts

Static. No build step — open `index.html`.
