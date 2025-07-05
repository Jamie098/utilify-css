# utilify-css

Tiny utility-first CSS library for rapid UI development.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage](#usage)

  - [Layout Utilities](#layout-utilities)
  - [Spacing Utilities](#spacing-utilities)
  - [Responsive Variants](#responsive-variants)

- [Configuration](#configuration)
- [Custom Builds](#custom-builds)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Utility-first**: Use single-purpose classes like `.p-4`, `.flex`, `.grid`.
- **Responsive**: Mobile-first breakpoints (`sm:`, `md:`, `lg:`).
- **Lightweight**: Minimal CSS footprint, only \~5KB gzipped.
- **Customizable**: Adjust your design tokens in `_design.scss`.

## Installation

Install via npm:

```bash
npm install utilify-css
```

Or with CDN (unpkg):

```html
<link rel="stylesheet" href="https://unpkg.com/utilify-css/dist/styles.css" />
```

## Quick Start

Import the CSS in your project:

```css
@import "utilify-css/dist/styles.css";
```

Then use utilities directly in your markup:

```html
<div class="flex flex-col md:flex-row md:gap-4 p-2">
  <aside class="md:w-1/4">Sidebar</aside>
  <main class="md:flex-1">Main content</main>
</div>
```

## Usage

### Layout Utilities

| Class          | CSS                       |
| -------------- | ------------------------- |
| `.flex`        | `display: flex;`          |
| `.flex-row`    | `flex-direction: row;`    |
| `.flex-col`    | `flex-direction: column;` |
| `.grid`        | `display: grid;`          |
| `.inline-flex` | `display: inline-flex;`   |

### Spacing Utilities

| Class   | Property                    |
| ------- | --------------------------- |
| `.p-1`  | `padding: 1rem;`            |
| `.m-1`  | `margin: 1rem;`             |
| `.g-1`  | `gap: 1rem;`                |
| `.px-2` | `padding-left/right: 2rem;` |
| `.py-4` | `padding-top/bottom: 4rem;` |

### Responsive Variants

Prefix utilities with breakpoints:

- `sm:` — ≥ 640px
- `md:` — ≥ 768px
- `lg:` — ≥ 1024px

```html
<div class="p-2 sm:p-4 md:p-8">Responsive padding</div>
```

Generates:

```css
.p-2 {
  padding: 0.5rem;
}
@media (min-width: 640px) {
  .sm\:p-4 {
    padding: 1rem;
  }
}
@media (min-width: 768px) {
  .md\:p-8 {
    padding: 2rem;
  }
}
```

## Configuration

Edit `src/_design.scss` to modify design tokens:

```scss
// src/_design.scss
$spacing: (
  05: 0.5rem,
  1: 1rem,
  2: 2rem,
  4: 4rem,
);

$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
);
```

Rebuild to regenerate `dist/styles.css`.

## Custom Builds

If you need only a subset of utilities, clone the repo and remove unwanted sections in `src/_utilities.scss`. Then run:

```bash
npm run build:css
```

## Contributing

Contributions welcome!

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/new-utility`).
3. Commit your changes (`git commit -am 'Add new utility'`).
4. Push to the branch (`git push origin feature/new-utility`).
5. Open a Pull Request.

Please follow the existing code style and add tests/examples where appropriate.

## License

MIT © \[Your Name]
