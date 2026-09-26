# Elevate IB Maths

A static marketing site for an IB Math Analysis & Approaches (AA) SL/HL
tutoring business, built around three offers: 1:1 tutoring, small-group
cohort classes, and a self-paced video course + question bank.

## Structure

- `index.html` — homepage (offers, results, lead magnet, FAQ)
- `group-tutoring.html` — group cohort classes, schedule, pricing
- `courses.html` — self-paced course & question bank (the digital product)
- `pricing.html` — full pricing comparison across all three formats
- `about.html` — tutor bio / credibility (placeholder content — fill in)
- `contact.html` — booking / contact form
- `resources.html` — free content hub (SEO/lead-gen funnel)
- `css/styles.css`, `js/main.js` — shared styling and small interactions
  (mobile nav, FAQ accordion, local form-submit confirmation)
- `STRATEGY.md` — competitive research and the revenue model behind the
  pricing/positioning choices on this site

## Running locally

No build step — open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Before launching

Search the codebase for `placeholder-note` (CSS class) and `[Placeholder`
text — every real name, stat, testimonial, and price shown as a placeholder
needs to be replaced with real data. Forms are not yet wired to a backend;
see `STRATEGY.md` §5 for what's still needed (checkout, email/CRM, legal
pages).
