# RJKSpace

RJKSpace is a minimal, static homepage for the studio brand.

## Stack

- HTML
- CSS
- Vanilla JavaScript

## Project Structure

```text
.
|-- index.html
|-- assets
|   |-- css
|   |   `-- styles.css
|   |-- js
|   |   `-- main.js
|   `-- img
|       `-- .gitkeep
|-- .editorconfig
|-- .gitignore
`-- LICENSE
```

## Local Preview

1. Open `index.html` directly in your browser.
2. Optional static server:
   - `npx serve .`
   - Then open the local URL shown in terminal.

## Customize Contact Info

Edit `SITE_CONFIG` in `assets/js/main.js`:

- `email`
- `domainLabel` / `domainUrl`
- `githubLabel` / `githubUrl`

## GitHub Push (Later)

After you log in to your own GitHub account and create a repo (suggested name: `RJKSpace`):

```bash
git remote add origin https://github.com/<your-username>/RJKSpace.git
git branch -M main
git push -u origin main
```
