# Ta Chingón Taqueria

Official website for Ta Chingón Taqueria, a Mexican food truck based in Cherry
Hill, New Jersey and serving events across South Jersey.

## Pages

- Home
- Menu
- Catering
- Gallery with accessible lightbox
- Reviews
- Location and contact

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run check
npm run build
```

## Deployment

The project includes Netlify configuration and Netlify Forms support for the
general contact and catering inquiry forms.

After deployment, confirm all forms are detected in the Netlify dashboard and
submit one live test inquiry.

## Business content

Business-wide details are centralized in `src/config/site.ts`. Menu content,
reviews, gallery photos, and catering content are stored under `src/content`.
Food-truck hours and locations can change for events, so update the announcement
and hours whenever the regular schedule changes.
