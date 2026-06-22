# Product Colors Archive

## Traces of color left by time

**Product Colors Archive** is an interactive web artwork that collects the color histories of products and turns them into visual archives.

The title and subtitle are the center of the project:

- **Product Colors Archive** means that the project treats product colors as something worth collecting, arranging, and reading like an archive.
- **Traces of color left by time** means that every color is not only a design choice, but also a trace of the time when it appeared.

This project asks a simple question:

> What would time look like if it were remembered through product colors?

Instead of showing products through photos, specifications, prices, or advertisements, this archive shows them through color. Each product line becomes a row. Each year or model becomes a block. Each released color becomes part of a longer visual record.

Over time, these rows become more than data. They become an image.

## Inspiration

This project was inspired by the **repeated color bands on bollards** in the reference photo.

The bollards showed how simple repeated stripes of color can become visual rhythm. That observation became the starting point for this web project: product colors could also be arranged as repeated bands, and those bands could become an archive of time.

## Concept

Product colors are often treated as small details. They appear in launch pages, product catalogs, advertisements, and store pages, then disappear when the next generation arrives.

This project gives those colors a different role.

Here, color becomes the main subject.

The archive is built around three ideas:

1. **Color as time**

   A color belongs to a specific release, generation, or design moment. When those colors are placed in order, they form a timeline.

2. **Color as memory**

   Some colors immediately remind us of a product era: translucent iMac colors, iPod nano colors, PlayStation gray, Galaxy Phantom colors, iPhone colors, Polaroid colors, and many others.

3. **Color as composition**

   When product rows are merged together, the archive stops looking like a chart and starts becoming a visual work.

## How To Read The Archive

Read the archive from left to right.

- Each row is one product line.
- Each block is a year, model, or major product moment.
- Each color inside a block represents a palette released at that moment.
- The archive moves from past to present.

When **Guides** are on, the work behaves like an archive or timeline.

When **Guides** are off, the rows merge into a framed color composition.

## Interaction

The project is designed as an interactive canvas experience.

### Zoom

Use the mouse wheel or trackpad scroll to zoom in and out.

Zooming is centered on the cursor position, so the viewer can move closer to a specific color area without losing their place.

### Pan

Drag the canvas to move around the archive.

The movement is bounded so the archive stays connected to the viewing area instead of feeling like an infinite empty background.

### Reorder Product Lines

When **Guides** are on, each product row has a handle on the left side.

Dragging this handle changes the vertical order of product lines. This allows the viewer to compose a different visual relationship between products.

The product history inside each row remains in chronological order.

### Bands And Dots

The archive can be viewed in two visual modes:

- **Bands**: the original idea of color strips.
- **Dots**: a dot-based view inspired by Ben-Day-style visual texture.

In dot mode, the archive can be read from far away as a whole image, while close viewing reveals the repeated circular structure.

### Guides

Guides change the meaning of the canvas.

- **Guides on**: the archive is readable as product history.
- **Guides off**: the archive becomes a unified framed artwork.

### Light And Dark Mode

Light and Dark mode change the way the same archive is perceived.

The colors do not change, but the surrounding atmosphere changes. This makes the same product archive feel different depending on the viewing mode.

## Current Product Lines

The archive currently includes 36 product lines:

- Galaxy S Series
- iPhone
- PlayStation
- Galaxy Z Fold
- Galaxy Z Flip
- Galaxy Tab S
- iPad
- Apple Watch
- Nintendo Switch
- Lamborghini
- iMac
- Xbox
- Tesla Model 3
- Dyson Supersonic
- Google Pixel
- Polaroid Now
- MacBook Air
- MacBook Pro
- AirPods Max
- AirPods
- Galaxy Buds
- Surface Pro
- Surface Laptop
- Nintendo Switch Lite
- Tesla Model Y
- Porsche 911
- Dyson Airwrap
- Beats Solo
- Amazon Kindle
- GoPro HERO
- Nothing Phone
- Sony WH-1000X
- Canon EOS R
- Instax Mini
- iPod
- Toyota Prius

## Data Approach

The color data is built as a representative visual archive.

The project uses public product color names and translates them into approximate hex values for visual display.

Important note:

- The hex values are not official manufacturer color specifications.
- They are visual approximations made for the artwork.
- The goal is not technical color accuracy, but visual memory and historical rhythm.

## Design Direction

The interface is intentionally simple.

The archive should be the main subject, not the controls.

The visual system uses:

- a canvas-based drawing surface
- a right-side controller
- light and dark viewing modes
- a framed composition mode
- reorderable rows
- zoom and pan interaction

The project avoids turning the interface into a landing page. The first screen is the artwork itself.

## Built With

- HTML
- CSS
- JavaScript
- Canvas API

No large frontend framework is required.

## Run Locally

You can open `index.html` directly in a browser.

You can also run the included local server:

```bash
npm start
```

Then open:

```text
http://127.0.0.1:5177/
```

To check the JavaScript syntax:

```bash
npm run check
```

## Project Structure

```text
.
|-- index.html
|-- style.css
|-- script.js
|-- server.cjs
|-- package.json
|-- .gitignore
`-- README.md
```

## GitHub Pages

This is a static web project.

To publish with GitHub Pages:

1. Push this project to a GitHub repository.
2. Open the repository settings.
3. Go to **Pages**.
4. Choose the branch and root folder.
5. Publish the site.

The entry file is:

```text
index.html
```

## Future Ideas

Possible future improvements:

- Add more product lines.
- Add source notes for each product palette.
- Add a screenshot export feature.
- Add saved custom row orders.
- Add a way to compare two product lines.
- Add a timeline overview.
- Add a curated exhibition mode.

## Project Summary

**Product Colors Archive** is a visual archive of product colors over time.

It began from the repeated color bands on bollards and grew into an interactive canvas work about memory, products, and time.

**Traces of color left by time** is the core idea: colors remain as small visual traces of the moments that produced them.
