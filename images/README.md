# /images — Asset Guide

## Required images (add these before going live)

| File | Size | Description |
|---|---|---|
| `justin.jpg` | ~800×1000px | Your headshot/photo for the About section. Portrait orientation, top-aligned. Use remove.bg to cut out background if desired. |
| `og-image.jpg` | 1200×630px | Social share image shown when someone links to aiwithjt.com on Twitter, LinkedIn, etc. Should show your face + channel name on a dark background. |
| `favicon.svg` | — | Already created — the "J" icon in the browser tab. |

## How to add your photo to the website

1. Export your photo as `justin.jpg` and place it in this folder
2. Open `../index.html`
3. Find the comment `DROP YOUR PHOTO` in the about section
4. Replace the placeholder div with:
   ```html
   <img src="images/justin.jpg" alt="Justin" style="width:100%;height:100%;object-fit:cover;object-position:top;">
   ```

## OG Image tips
- Use Canva or your thumbnail templates as a base
- 1200×630px is the required size
- Include your face, "AI with Justin", and aiwithjt.com
- Export as JPG (keep under 300KB for fast loading)
