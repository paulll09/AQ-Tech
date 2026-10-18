# Product screenshots

Place the files in `public/portfolio/` (create the folder).

`src/components/Portfolio.astro` expects these three files. Each card renders
without its screenshot when the file is missing, so nothing breaks while they
are pending — the card simply goes back to being text only.

| File | Project | What the shot should show |
|---|---|---|
| `bulgaria.webp` | Bar Bulgaria | The digital menu on a phone, cart open |
| `burgers-boss.webp` | Burgers Boss | The admin panel on the daily cash close |
| `club-del-bosque.webp` | Club del Bosque Pádel | The court booking calendar, slots taken and free |

## Requirements

- **Format:** WebP. Export at quality 80–85; these are UI screenshots, not photos,
  so text stays crisp well below maximum quality.
- **Dimensions:** 1280×800 (2x of the 640×400 the markup declares). The card
  crops to a 16:10 box, anchored to the top.
- **Weight:** aim under 150 KB each. Anything over 250 KB should be re-exported
  before it ships.
- **Content:** real data, not lorem. Blur or replace customer names, phone
  numbers and addresses if any appear — a screenshot is a privacy surface.
- **Framing:** capture the browser viewport only, no OS chrome, no desktop
  wallpaper, no browser tab bar.

## After adding a file

Check the `alt` text in `src/components/Portfolio.astro` still describes what the
screenshot actually shows. The current strings were written before the images
existed, so they are a specification, not a caption — if your shot shows
something else, the `alt` is now wrong and a screen-reader user gets a lie.
