## Lumière Nails — Premium Greek Nail Salon Demo

Build a single-page luxury site with all 10 sections + sticky nav + footer, per the detailed spec provided.

### Files to create/modify

1. **`src/routes/__root.tsx`** — Update `head()`:
   - Title: "Lumière Nails — Premium Nail Studio στην Αθήνα"
   - Meta description (Greek, <160 chars), og:title, og:description, og:type, twitter:card
   - Preconnect + `<link>` for Google Fonts: Cormorant Garamond (italic + weights 300/400/500) & DM Sans (400/500/700)

2. **`src/styles.css`** — Design tokens:
   - `--blush: #F2C4CE`, `--rose-gold: #B76E79`, `--ink: #080808`, `--pearl: #FAFAFA`, `--gold: #D4AF37`
   - `--font-display: "Cormorant Garamond"`, `--font-body: "DM Sans"`
   - Register in `@theme inline` → `bg-blush`, `bg-rose-gold`, `bg-ink`, `bg-pearl`, `bg-gold`, `font-display`, `font-body`
   - Body defaults to DM Sans; smooth scroll; marquee keyframes; animated underline keyframes

3. **`src/routes/index.tsx`** — Rewrite placeholder to render the full landing page composed of section components.

4. **`src/components/lumiere/`** — One file per section for readability:
   - `Nav.tsx` (sticky white, scroll shadow via scroll listener)
   - `Hero.tsx` (split black/blush, animated underline on "Τέχνη", stats row)
   - `Marquee.tsx` (CSS marquee, infinite scroll)
   - `About.tsx`
   - `Services.tsx` (6 cards grid)
   - `Stats.tsx` (4 stats with vertical dividers)
   - `Team.tsx` (3 cards)
   - `Booking.tsx` (form with state: service, artist, date, time-slot pills, name, phone; success message on submit — no backend)
   - `Gallery.tsx` (6-tile masonry with hover overlay)
   - `Reviews.tsx` (3 dark cards)
   - `FinalCTA.tsx` (rose-gold gradient)
   - `Footer.tsx`

### Technical notes

- Pure frontend, no backend/Cloud. Booking form is local state only; success message replaces form on submit.
- Icons via lucide-react (Instagram, MapPin, Phone, Mail, Plus, Star, ArrowRight, ArrowDown). Emoji used where spec calls for it (💅✨💎🌸👑🎨📌✅).
- Image placeholders: styled divs with blush-pink gradient + centered nail/sparkle icon + rose-gold border — no generated images (spec says "placeholder").
- Animated underline under "Τέχνη": CSS pseudo-element with keyframe drawing left→right, infinite ease-in-out.
- Marquee: single track duplicated, `animation: marquee 30s linear infinite`.
- Date picker: shadcn Calendar in Popover with `pointer-events-auto`.
- Time slots: toggle-style pill buttons, selected fills rose-gold.
- Mobile responsive: hero split stacks, grids collapse to 1 col, stats wrap 2x2.
- All colors via semantic tokens — no hardcoded hex in JSX.

### Out of scope

- No real booking backend, no image generation, no auth, no CMS.
