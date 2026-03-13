# Ordinis Multi-Vertical Website Template System

This workspace turns the original clinic template into a config-driven website generator for Ordinis Digital Services.

## Structure

```text
/starter
  Shared Astro starter with reusable components, sections, layout, config, and pages

/vertical-presets
  /medical-practice
  /restaurant
  /local-small-business
  /contractor-home-services
  /professional-services

/scripts
  new-template-site.ps1
```

## Shared architecture

The shared starter separates:

- `src/config`
  `business.ts`, `theme.ts`, `navigation.ts`, `site.ts`
- `src/content`
  `services`, `menu`, `team`, `testimonials`, `gallery`, `case-studies`, `credentials`
- `src/components`
  common UI, cards, navigation, footer
- `src/sections`
  hero, services, testimonials, CTA, location, hours, gallery, menu, team, trust badges, expertise, case studies
- `src/layouts`
  `BaseLayout.astro`

## Presets included

### 1. Medical Practice

- Services
- Team profiles
- Testimonials
- Hours
- Location / service area
- Appointment CTA

### 2. Restaurant

- Menu section
- Menu category content files
- Reservation CTA
- Food / dining gallery
- Hours and map
- Chef / team section

### 3. Local Small Business

- Services grid
- Before / after gallery
- Testimonials
- Quote request CTA
- Service area focus

### 4. Contractor / Home Services

- Services grid
- Trust badges
- Project gallery
- Reviews
- Free estimate CTA
- Service areas

### 5. Professional Services

- Expertise areas
- Case studies
- Team profiles
- Consultation CTA
- Office / service area details

## Create a new client repo

Run:

```powershell
.\scripts\new-template-site.ps1 -Preset medical-practice -Destination "E:\AIApps\Ordinis Digital Services\Client Sites\new-client-site"
```

Valid preset names:

- `medical-practice`
- `restaurant`
- `local-small-business`
- `contractor-home-services`
- `professional-services`

The script copies the shared `starter` into the destination and overlays the selected preset's config and content files.

## Developer workflow

After generating a new repo:

1. Update `src/config/business.ts`.
2. Update `src/config/theme.ts`.
3. Update `src/config/navigation.ts`.
4. Adjust homepage section order and CTA copy in `src/config/site.ts`.
5. Replace content files in `src/content`.
6. Run `npm install`.
7. Run `npm run dev` or `npm run build`.

## Deployment

The shared starter builds as a static Astro site and is suitable for:

- Cloudflare Pages
- Netlify
- Vercel

## Notes

- Components do not hardcode business details.
- Vertical changes are expected to happen in config and content files.
- The system is intended to let an Ordinis developer launch a polished client site in under 30 minutes.
