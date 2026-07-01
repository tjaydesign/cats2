# Aviasales / Salo Design System

A working port of **Salo** — the in-house design system used across **Aviasales** (flight meta-search) and its sibling travel brands. This project is the home base for design exploration: every colour token, type ramp, component spec, brand device and bit of voice lives here so any other project can read from it and produce on-brand Aviasales work.

Target surfaces: **iOS app, Android app, mobile web, desktop web.** Many components have per-platform variants (iOS Segmented vs. Android Tabs, different modal chrome). Use the platform appropriate to the screen you're designing.

> **Sources.** This system was ported from the brand's own assets: the production web frontend (`frontend/packages/ui/src/styles/`), the Salo Figma libraries, and the Russian-language brand guides shipped as `visual_language/*.pdf` (accent text, composition, eyes, shapes, stickers, text lines). Where this doc disagrees with those PDFs, **the PDFs win** — they are the source of truth for the visual language. The reader is not assumed to have access to the originals; everything needed is reproduced here.

---

## 1. Product context — what Aviasales *is*

Aviasales is a **meta-search** for flights (and hotels via Hotellook). It does **not sell tickets itself** — it scans 700+ airlines and OTAs, shows the cheapest options, and hands the user off to the provider to book. That single fact shapes everything downstream:

- **Price is the hero.** Users come to find the *cheapest* flight. Prices render in bold brand blue, in Stapel, bigger than almost everything else on a results card. Never bury it.
- **Trust through transparency.** Because users book elsewhere, we over-communicate: exact airline, cabin class, baggage rules, transfer times, price freshness, "cheaper than average" badges, price graphs. There's a whole informer / badge vocabulary for this.
- **Speed-feel matters.** Meta-search is slow under the hood (we poll dozens of providers). Loading shimmer, progress bars, and the "searching 100+ airlines" spinner are part of the brand — we make waiting feel like work being done.
- **Transactional, not aspirational.** Aviasales is a tool, not a travel magazine. No "inspire me" beach heroes on the search screen. Imagery is informational: destination cards, airline logos, seat maps. The marketing site is the one place cover art and illustration come out.
- **Russian-speaking core audience, global second.** Cyrillic parity in type is non-negotiable — both Inter and Stapel ship with full Cyrillic coverage. Copy is warm and informal in Russian ("Давайте подберём билет") and drier in English translation.

### Sibling products
- **Hotellook** — hotel meta-search. Same system, same brand blue, hotel-specific informers (breakfast, refundability, map pins).
- **Jetradar** — older English-market brand.
- **Explore / Anywhere** — "cheapest destination" discovery; more illustration, gradient headers.

---

## 2. Files in this project (index / manifest)

Root foundations — **import `colors_and_type.css` first in any design you build.**

| Path | What it is |
|---|---|
| `colors_and_type.css` | All colour tokens, `@font-face` (Stapel + Inter + Roboto + SF Pro, all with Cyrillic), the type scale, spacing, shadows, radii. Has `.light` (default) and `.night` (dark) modes. |
| `fonts/` | Stapel (brand display), Inter (web UI), Roboto (Android), SF Pro Display (iOS). All self-hosted, all Cyrillic-capable. |
| `assets/logo/` | Master logo SVGs — sign + wordmark, colour + white, EN + RU wordmark. |
| `assets/icons/{16,24,36}/` | The icon set. Three hand-tuned sizes, `currentColor`-driven. |
| `assets/visual_language/` | Brand devices as SVG: `eyes/`, `shapes/`, `lines/` (text lines). |
| `visual_language/*.pdf` + `_all.txt` | The original Russian brand guides + an extracted-text concatenation. |
| `preview/` | Compact spec cards that populate the Design System review tab. |
| `reference/` | The full, long-form spec pages (colours, type, components, icons, spacing, brand) — browse these for depth. |
| `ui_kits/` | High-fidelity, interactive recreations of real product surfaces. One folder per surface. |
| `SKILL.md` | Agent-Skill manifest so this folder can be dropped into Claude Code. |

**UI kits**
- `ui_kits/aviasales-web/` — the desktop meta-search website: search hero, results list with filters, ticket detail.
- `ui_kits/aviasales-app/` — the iOS app: search form, results, ticket card, profile — inside a device frame.

---

## 3. Brand voice & content fundamentals

### Voice
- **Confident and plain.** "Найти билет", not "Discover your perfect journey." Never flowery.
- **Numbers first.** Where a choice exists between an adjective and a number, use the number. "Дешевле на 23%" > "a great deal."
- **Friendly, not chummy.** Informers speak like a knowledgeable colleague. Avoid exclamation marks outside genuine surprises (a price drop, an error).
- **Imperative for actions.** Buttons are verbs: "Найти", "Показать 47 билетов", "Выбрать".
- **Cyrillic is the source of truth.** English is usually translated from Russian — keep it tight, don't pad.
- **No emoji in product UI.** Emoji are reserved for user-generated content (reviews) and the occasional marketing sticker.

### Casing & person
Sentence case almost everywhere — titles, buttons, labels. `caption-allcaps` (uppercase) exists only for tiny status pips ("HOT DEAL", "ДЁШЕВО", "NEW"). Address the user as "you" / "вы" in help and policy copy; product chrome is impersonal and imperative.

### Prices
- Always show currency. RUB (₽), EUR (€), USD ($). For ₽ a space sits between digits and symbol: `12 450 ₽`. No space for $ and €: `$245`, `€198`.
- Thousands separator is a **non-breaking space** in Russian (`12 450`), a comma in English (`12,450`) — never a comma in Russian.
- Stapel for the headline price on results cards. Tabular numerals (Inter has them) for price lists.
- "от 12 450 ₽" / "from $245" — the "from" prefix is `text_secondary`, the price is `text_price` (brand blue).

### Dates & times
- Russian: `23 нояб, пт` (abbreviated month, lowercase, day-of-week last). English: `Thu, 23 Nov`.
- Times 24h in Russian (`14:30`), 12h am/pm in English (`2:30 PM`).
- Durations: `2 ч 15 мин` / `2h 15m`. Transfer warnings go orange if ≥8h or overnight.

### Airports & cities
- Primary label: full city name. Secondary: IATA + airport name (`SVO · Шереметьево`). Always disambiguate multi-airport cities.

### Copy length
- Buttons: 1–3 words. Informers: one sentence + an optional short action link. Error titles stay in voice — "Что-то сломалось", not "An error has occurred."

---

## 4. Visual foundations

### Colour — the shape of it
The palette is organised in **scale families** running 25 → 1000:
- **25 / 50** — whisper-soft backgrounds (informer tints, selected states).
- **100 / 300** — tints for chips, borders, stickers.
- **500** — the **canonical** colour. Reach for it first.
- **800** — pressed / hover on bright surfaces; also text-on-light.
- **1000** — deepest value, used rarely (hero gradients, on-pressed text).

Families: **Brand primary (blue)** `#0C73FE` — the hero, used for CTAs, prices, links, brand moments. **Ink** — warm-cool greys for text/dividers/soft fills. **Graphite** — pure darks for night mode. **Fog** — slate-blue muted neutral for informers ("transfer", "duration"). **Green / Red / Yellow / Orange** — semantic (positive / danger / warning / hot-deal). **Blue / Purple / Pink** — accents (Purple = Premium, Pink = More/discovery). **Shading** — pre-baked translucent tints (`*_shading`) that layer cleanly over any surface incl. photos; card informers use these exclusively.

**Don't recolour.** If you reach for a hex outside the palette, it's usually the wrong hex. Brand consistency comes from restraint.

### Identity gradients
The **More gradient** (pink → violet → blue) is the signature marketing asset. Use sparingly — covers, splash, onboarding. Don't sprinkle it on cards. Lilac (Premium/loyalty) and Green (promo) gradients exist too.

### Type
Two families, one token system. **Stapel** is the brand display face — hero prices, splash titles, covers, onboarding, marketing. Used in one or two places per screen, *never* for body, labels, inputs, nav, or paragraphs. Everything functional uses the **UI face**, which is a per-platform variable: SF Pro on iOS, Roboto on Android, Inter on web — so the same token renders natively everywhere. Nine UI sizes × three weights (Regular/Semi/Bold); don't invent new sizes.

### Spacing
Strict **4px grid**. Component internal paddings live at `12 / 16 / 20`; section gaps at `24 / 32`; results-list card gutters at `8`.

### Corner radii
Generous, consistent rounding is a brand signature. `4 / 8 / 12 / 16 / 20 / 24 / 32 / 999`. Buttons = 12, cards = 16–20, sheets = 24, pills for chips & avatars.

### Elevation & depth
The system leans **flat**: a 1px `line_default` border does most of the work. Shadows are soft and cool (`rgba(0,0,0, .06–.10)`), in four steps `xs / s / m / l`, reserved for genuinely floating things (modals, FABs, dropdowns, snackbars). If a thing sits on the page, it gets `xs` or nothing.

### Backgrounds, imagery & texture
- **Solid over outline.** Big flat colour shapes are the default expressive device; outline only when a solid genuinely won't do. This applies from UI icons up to banners.
- **Photo over drawing.** Prefer photos to illustration — they carry more emotion. **We don't draw people, anywhere.** Cut-out (RemoveBG) photos are encouraged as heroes or stickers; graphic elements may overlap into a photo's space.
- **Realistic 3D only**, and never of a person. No cartoon mascots, no "sausage fingers".
- **Don't write on photos** in product — the image underneath is unpredictable; put text on the page background instead. (Marketing may, with hand-picked static imagery.)
- **"Squish" — tactility.** Friendliness comes through light translucent textures and rounder forms.
- Photo crops favour a **4:5** (taller-than-square) ratio rather than squares.

### Animation, hover & press
- Transitions are short and functional — `0.15s` on background/opacity for buttons, `0.2s` on chips, `0.2s` morph on floating input labels. No bounces, no decorative looping animations on content.
- **Hover** = a translucent `black_alpha_8` overlay laid over the element (works on any fill, including transparent tertiary buttons); inputs/chips deepen their border to `ink_300` / brand.
- **Press / selected** = swap to the brand-tinted state (`brand_primary_25` fill + `brand_primary_500` border for chips/inputs) rather than a scale-down.
- **Focus** = border goes `brand_primary_500`. **Error** = border `red_500`.

### Cards, borders, transparency
A card is white (`card_on_screen`), `radius_l` (16px), `1px ink_150` border, usually no shadow or just `shadow_xs` on a grey canvas. Informers are tinted `*_shading` blocks at `radius_l`. Transparency + blur is used for scrims (`black_alpha_*`) and on-bright chrome (`white_alpha_*`), not as decoration. Imagery vibe is **warm, bright, real** — clear daytime travel photography, never desaturated or heavily filtered.

### Light vs. dark
Start in light mode. Dark comes "for free" via `.night` — test it, but don't design dark-first unless the screen ships dark-only.

---

## 5. Iconography

Three discrete grids — **16, 24, 36 px** — each a *separate* hand-drawn SVG. **Never scale one size into another** (`transform: scale()` on a 24 to fake a 16 is a review failure): stroke widths and corner radii are tuned per physical size.

- **24px is the default** — buttons, list items, nav, most controls. 16px is for dense/inline use (with body-2/body-3 text, chips, table cells). 36px is a tiny set reserved for hero/empty-state/status moments.
- **Style:** ~2px stroke on the 24-grid, 1.5px inner corners; a mix of stroke-only controls (search, chevron, cross) and subtle two-tone fills (transport icons). Don't invent new styles — pull from the set.
- **Colour is strict and `currentColor`-driven.** Set `color` on the parent; the SVG inherits. Standalone icons may only use `--icon_*` tokens (`icon_default`, `icon_dark`, `icon_brand`, `icon_on_grey`, `icon_on_bright`) or an accent scale for status (`green_500` / `yellow_500` / `red_500` — prefer the `_colored` variant when one exists). **`--text_*` tokens are forbidden on standalone icons** — they drift on the type-contrast curve and go off-tone in dark mode. The *one* exception: an icon sitting next to a label inside a control inherits the label's text colour so the pair reads as one unit.
- **Don't rotate chevrons** — there are four directional files for a reason.
- **Format:** all icons are SVG (no icon font, no PNG). Emoji and unicode glyphs are **not** used as icons in product UI.

**Transport vocabulary:** airplane, airplane_right (directional), train, bus, taxi, subway, boat, helicopter, transfer. Use `transfer` explicitly when a layover changes transport mode. Brand/partner marks (`aviasales`, `google`, `apple`, social) ship as their own icons; `_colored` suffix = the full-colour brand version.

---

## 6. Brand devices (the visual language)

A small kit of devices keeps every artefact recognisably Aviasales. All assets live in `assets/visual_language/` and are documented at length in `reference/brand.html` and `visual_language/*.pdf`.

- **Accent text** — headlines set in **Stapel only** (Latin/Cyrillic/Greek), left- or centre-aligned, line-height 0.9–1.05. Aim for 2–4 lines. One decoration per line; keep the composition balanced and tilted slightly *up*.
- **Stickers** — accent elements (redrawn icons, text bubbles, cut-out photos, Stapel glyphs). One fill colour; **stroke is always white on light / `*_dark_muted` on dark and never recoloured.** Tilt, overlap, bleed off the edge — never tile into a pattern, never let one just *graze* another object.
- **Eyes (Глазья)** — a character built from the logo's curves that looks at and reacts to the UI. Not a mascot. One pair per composition. White/no-stroke on colour or dark; outlined on light or photo backgrounds.
- **Text lines (Текстовые линии)** — Stapel Bold ridden along a curve, inspired by the landscape from a window seat. Colour follows the surface; lines exit through the format edge rather than running parallel to it.
- **Shapes (Шейпы)** — stylised silhouettes of nature seen from altitude: a square with specific forms cut out and corners chamfered. Recolour freely; never deform the cut-outs (edit path points, not the bounding box); one shape per surface, never patterned.

---

## 7. When designing with this system

1. **Start in light mode.** Test dark via `.night`.
2. **Platform-respect.** iOS → SF stack, Android → Roboto, web → Inter. Use the right navbar/modal chrome for the target.
3. **Don't recolour.** Outside-palette hex is almost always a mistake.
4. **Price ≥ everything on a results card.** Squint test: if the price doesn't jump out, fix it.
5. **Informers over toasts.** Prefer in-place tinted informers for context; reserve snackbars for undoable actions.

---

## 8. A note on fonts

All four faces are bundled and self-hosted with Cyrillic coverage — **Stapel, Inter, Roboto, SF Pro Display** — so no Google-Fonts substitution was needed. If you move this system somewhere the `fonts/` folder doesn't travel, the nearest public stand-ins are: Inter → Inter (Google Fonts), Roboto → Roboto (Google Fonts), SF Pro → system `-apple-system`, and **Stapel has no free equivalent** (it's a licensed brand face) — leave the `var(--font-brand)` stack to fall back to the UI face and flag it.
