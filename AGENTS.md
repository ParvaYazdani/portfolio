# Agent notes: portfolio site

Plain HTML/CSS/JS, no build step. Every user-facing string exists twice: as the
default EN text in the HTML file, and as `en` / `de` in `js/i18n.js` keyed by the
element's `data-i18n` attribute. Always update both together.

## Conventions

- **No em dashes (—) in the portfolio.** Never use them in page copy, card text,
  or the `en`/`de` strings in `js/i18n.js`. Use commas, colons or parentheses
  instead.
- Project cards use the shared field pattern **Context / Outcome** (plus optional
  Technologies, Solution, Status, etc. via the `dt.*` keys). Avoid one-off field
  labels such as Role.
- Role/contribution and submission/consortium facts belong on the Project
  Management page (`pm.card1.*`); other pages link there instead of repeating them.
- **Outcome fields state results, not role labels.** Write what was delivered or
  submitted (and credit the team where relevant); avoid "Responsible lead" /
  "Initiator" style wording. Leadership shows in the card title.
- Placeholder copy is marked with `class="placeholder"` or "coming soon" /
  "folgt in Kürze". Remove the class when real content is filled in.
- New dictionary keys must be added for both languages, and unused keys deleted.

## Git workflow

- `main` is live: GitHub Pages deploys every push, so only push finished work to it.
  Small fixes (typos, wording) can go straight onto `main`.
- Bigger changes (a new card, page or redesign) go on a short-lived branch, e.g.
  `add-vansim-diagram`, merged into `main` when done and then deleted.
- Commit messages are imperative and cover one change each ("Add …", "Refine …").
- Never commit files listed in `.git/info/exclude`: they are private and stay local.

## Checks

```bash
node --check js/i18n.js   # syntax of the translation dictionary
```
