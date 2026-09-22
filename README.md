# Sri Suryadeva Nursery — Next.js Frontend

A colorful, responsive nursery frontend built with Next.js, JSX and Tailwind CSS.

## Pages
- Home
- About
- Gallery
- Services
- Contact Us

## Included
- Uploaded Sri Suryadeva Nursery logo in `public/branding/logo.jpg`
- 4 local home slider images in `public/home/`
- 30 local gallery placeholder images in `public/gallery/`
- Home slider auto-advances every 2 seconds
- Left/right slider buttons
- Plant of the Week banner
- Responsive navigation
- Colorful emerald / yellow / orange theme
- Bouncy hover effects and blob shapes
- Floating WhatsApp button

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Replace images

### Home slider
Replace:
- `public/home/home-01.svg`
- `public/home/home-02.svg`
- `public/home/home-03.svg`
- `public/home/home-04.svg`

The filenames are referenced in `components/HomeCarousel.jsx`.

### Gallery
Replace the 30 files:
- `public/gallery/plant-01.svg`
- ...
- `public/gallery/plant-30.svg`

If you want JPG/PNG/WebP files instead, update the `src` values in `app/gallery/page.jsx`.

### Logo
Replace `public/branding/logo.jpg` with your actual logo image while keeping the same filename.

## Slider speed

The Home slider is controlled in:
`components/HomeCarousel.jsx`

Change:
```js
setInterval(next, 2000)
```

For example, `3000` means 3 seconds.
