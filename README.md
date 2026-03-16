# Potatto Design System

Multibrand, open-source UI kit built on a structured token architecture and an OKLCH-based color system.

---

## Status

| Area | Status |
|---|---|
| Color System (Foundations) | In Progress |
| Token Architecture (3 levels) | In Progress |
| Buttons | In Progress |
| Navigation | In Progress |
| Links | In Progress |
| Data Entry | Backlog |
| Data Display | Backlog |
| Feedback | Backlog |
| Themes | Backlog |

---

## Architecture

### Token Levels

```
Level 1 — Root
  Root Colors
    Roots Neutral (Lights / Mediums / Darks)
    Core (Primary / Success / Highlight / Warning / Danger)
    Brand (Main / Accent)
    Deco (1 / 2 / 3 …)

Level 2 — Pre Semantic
  Display
    Standard: Neutral, Brand (Main), Brand (Accent)
    Feedback: Success, Highlight, Warning, Danger
  Interactive States (Dynamic)
    Boolean: Danger, Neutral, Primary
    Action: Primary, Neutral, Danger

Level 3 — Semantic
  Globals / Interactive / Boolean Selection / Display
```

### Color System

Built in **OKLCH** for perceptual consistency.

**Chromatic** — 8 families, 66 palettes, steps 10→200, 5 saturation variations:
`Intense → Solid (-15%) → Soft (-20%) → Muted (-15%) → Pastels (-20%)`

| Family | Palettes | # |
|---|---|---|
| Reds | Berry, Cherry, Plum, Goji, Khaki, Tomato, Apricot, Peach | 8 |
| Oranges | Cayenne, Paprika, Habanero, Thai, Aji, Fatali, Datil | 7 |
| Yellows | Bronze, Copper, Clay, Silt, Ground, Gold, Sand, Amber | 8 |
| Greens | Maple, Spruce, Oak, Bamboo, Willow, Moss, Cedar, Pine, Olive, Fern | 10 |
| Cyans | Tiber, Geneva, Baikal, Mekong, Tahoe, Caspian, Danube, Amazon, Nile | 9 |
| Blues | Maldives, Baltic, Aegean, Arctic, Indian, Atlantic, Pacific, Marianas | 8 |
| Purples | Tanzanite, Lolite, Fluorite, Sugilite, Charoite, Lepidolite, Kunzite, Spinel | 8 |
| Pinks | Camellia, Petunia, Orchid, Azalea, Dahlia, Lily, Tulip, Rose | 8 |

**Token syntax** — `Variation/Family/Palette/Step` e.g. `Solid/Greens/Oak/40`

**Neutrals** — 5 families, 10 palettes, 3 stages × 8 steps each:

| Family | Palettes |
|---|---|
| Grey Air | Gust, Wind |
| Purple Veil | Nebula, Aura |
| Blue Charge | Spark, Bolt |
| Green Mist | Dew, Fog |
| Yellow Desert | Dune, Dust |

**Token syntax** — `Neutrals/Family/Palette/Stage/Step` e.g. `Neutrals/Grey-Air/Gust/Light/L1`

---

## Components

Categories tracked in Notion:

- **Button** — System, Action, Icon, Function, Social, Share
- **Navigation** — Menu/Drawer, Tabs, Breadcrumb, Pagination, Stepper/Wizard
- **Data Entry** — Text input, Input number, Select input, Search, Date picker, Time picker, Checkbox, Rate, Dropdown
- **Data Display** — Status indicators, Progress Indicator, Results/Empty states
- **Feedback** — Alert/Banners, Modal/Dialogs, Notification, Popover, Popconfirm, Tooltip, Message/Snackbar
- **Foundation** — Typography, Iconography, Sizes, Layout
- **Structure** — Grid, Spacing
- **Modules** — Complex composed patterns

---

## Repo Structure

```
potatto-design/
├── docs/
│   ├── foundations/    # Colors, Typography, Iconography, Sizes, Layout
│   ├── components/     # One file per component
│   ├── tokens/         # Token specs per level (L1, L2, L3)
│   └── themes/         # Brand themes
├── specs/              # PDF / diagrams / reference assets
└── assets/             # Exported icons, illustrations
```

---

## Links

- Figma: https://www.figma.com/design/KlUMCkw3AOmxghdSvYt3ZW/-C--Pottato---Theme-Maker
- Notion: https://www.notion.so/17d1992cfdc2811b8a0cf4a3979b9781
- Colors Figma: https://www.figma.com/design/5lS23fX4vlsyXSAPVOdWYC/Potatto-Repository---Color-NEW
