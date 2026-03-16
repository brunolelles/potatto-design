# Token Architecture

## Level 1 — Root

Raw values. No semantic meaning. Maps directly to the color system palettes.

### Root Colors

| Group | Sub-groups | Notes |
|---|---|---|
| Roots Neutral | Lights (L0–L9), Mediums (M1–M8), Darks (D1–D8) | |
| Core | Primary, Success, Highlight, Warning, Danger | Steps 01–20 each |
| Brand | Main, Accent | Steps 01–20 each |
| Deco | Deco 1, Deco 2, Deco 3, … | Steps 01–20 each |

## Level 2 — Pre Semantic

Groups root tokens into functional roles before component-specific usage.

### Display (Static)

| Category | Roles |
|---|---|
| Standard | Neutral, Brand (Main), Brand (Accent) |
| Feedback | Success, Highlight, Warning, Danger |

Properties per role: **Surface** (Foreground, Surface, Layer, Container) · **Content** (On Foreground, Default, Accent, Muted) · **Border** (Default, Accent)

### Interactive States (Dynamic)

| Category | Roles |
|---|---|
| Boolean | Danger, Neutral, Primary |
| Action (Interactive) | Primary, Neutral, Danger |

Properties per role:
- **Foreground** — Default, Hovered, Pressed, Disabled
- **Surface** — Default, Hovered, Pressed, Disabled
- **Content** — On Foreground (Default, Disabled), On Surface (Default, Accent, Disabled)
- **Border** — Default, Accent, Disabled

Boolean adds Enabled/Selected columns per state.

## Level 3 — Semantic

Final consumer layer. Used directly in components.

| Group | Purpose |
|---|---|
| Globals | Cross-cutting tokens (radius, shadows, motion, etc.) |
| Interactive | Tokens for actionable elements (buttons, links, inputs) |
| Boolean Selection | Tokens for checkboxes, radios, toggles |
| Display | Tokens for static content (text, surfaces, borders) |
