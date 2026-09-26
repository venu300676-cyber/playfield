# Elevate IB Maths — business strategy notes

Research and revenue math behind the site in this repo. Read this alongside
the pages themselves — the copy on `pricing.html`, `group-tutoring.html`, and
`courses.html` implements the model described here.

## 1. What the market already proves works

A quick survey of established IB tutoring/exam-prep businesses:

- **[Revision Village](https://www.revisionvillage.com/)** — the dominant IB
  Math resource site. Sells "Gold" access as a **once-off payment** (1, 3, 6
  month or full-course windows), not a recurring subscription, with school
  licensing on top. This is the core evidence for a self-paced digital
  product: content produced once, sold indefinitely, no per-student marginal
  cost. ([pricing page](https://www.revisionvillage.com/revision-village-gold/), [FAQ](https://help.revisionvillage.com/en/how-much-does-revision-village-cost))
- **[RevisionDojo](https://www.revisiondojo.com/tutoring)** — a newer
  competitor running a tutor marketplace alongside content, with 1:1 rates
  starting around $29/hr — evidence that the 1:1 market has a low-cost
  segment; premium/specialist tutors price well above that.
- **[Lanterna Education](https://lanterna.com/)** and **IB Elite Tutor** —
  both sell tiered packages (hours bundles, "elite" positioning) rather than
  a flat hourly rate, and both explicitly offer **group sessions at a
  discount to 1:1** (industry pattern: 2–4 student groups cut the
  per-student price 30–40% vs. 1:1, per [plusplustutors' 2026 rate
  breakdown](https://www.plusplustutors.com/blog/how-much-does-an-ib-tutor-cost-real-2026-rates-explained)).
- **Cohort-based course research** ([educate-me.co](https://www.educate-me.co/blog/best-cohort-based-courses),
  [coachway.io](https://coachway.io/articles/online-coaching-business-models/)) —
  across coaching/education generally, the highest-earning operators run a
  **hybrid model**: a premium 1:1 tier for clients who want it, a group
  program in parallel for the price-sensitive segment, and a low-ticket
  digital product at the base. Group formats earn *less per client* but far
  *more per hour of your time* — one live session serves 6–8 students
  instead of 1.
- **Landing page conversion research** ([CXL](https://cxl.com/blog/how-to-build-a-high-converting-landing-page/),
  industry roundups on tutoring sites) — the pages that convert put
  measurable results and trust signals above the fold, use 3–5 short,
  specific testimonials, and minimize clicks between "landing" and
  "booking."

**Conclusion used for this site:** don't rebuild Revision Village or Lanterna
from scratch — copy the structure that already works (once-off digital
product + tiered group/1:1 + content funnel) and specialize hard on AA SL/HL,
where the big players are broader (all subjects, or AA+AI combined).

## 2. The core constraint: your time doesn't scale, formats do

10 hours/week of 1:1 at €50/hr = **~€2,000/week (~€8,600/month)**. That number
is capped by hours in the day. It cannot reach €100k/month on its own —
even at €100/hr and 40 hours/week, 1:1 alone tops out around €17k/month.

The only way to scale past that is to **stop trading hours for money on the
margin** and add formats where one hour of your time serves many students, or
where a product sells without any of your time at all:

| Format | Your time per "sale" | Revenue per hour of your time |
|---|---|---|
| 1:1 tutoring | 1 hour per student-hour | €50–€100/hr (ceiling: your calendar) |
| Group cohort (6–8 students) | 1 hour serves 6–8 students | €150–€200 × 6–8 students ÷ 1.5 hr ≈ €600–€1,000+/hr of teaching |
| Self-paced course | ~0 marginal time per sale after it's built | Effectively unbounded — limited by traffic and conversion, not hours |

This is why `pricing.html` and `group-tutoring.html` present the cohort as
the featured/recommended option, and why the course is positioned as a
one-time purchase rather than another hourly product.

## 3. A model that could plausibly reach €100k/month

This is a **model to work toward, not a guarantee** — it depends entirely on
building an audience (SEO content, short-form video, referrals, possibly
paid ads) large enough to convert at these volumes. A website alone does not
generate this; traffic and trust do.

Illustrative mix (numbers are targets to plan around, not promises):

- **1:1 (flagship/high-touch tier):** 10–15 hrs/week × €60–€80/hr (raise your
  rate as demand grows) ≈ **€2,600–€5,200/month**. Kept small and premium —
  it's your top-of-funnel credibility engine and referral source, not the
  growth lever.
- **Group cohorts:** 15 cohorts running at once (a mix of AA SL / AA HL /
  IA-crunch tracks), ~7 students each at €150–€200/month ≈ **€15,700–€21,000/month**,
  for roughly 20–25 hours/week of live teaching — the same hours you're
  already spending on 1:1 today, redirected.
- **Self-paced course + add-ons:** the lever that actually reaches €100k.
  At €249/course, **~300 sales/month ≈ €74,700/month**, with IA reviews
  (€79) and mock marking (€45) adding incremental revenue on top. 300
  sales/month is a real, achievable volume for a well-marketed IB resource
  once organic traffic and a mailing list are established (Revision Village
  operates at a materially larger scale than this).
- **Total at this mix:** roughly **€93k–€101k/month**, with the course
  carrying most of the weight and the cohorts/1:1 providing steady, more
  predictable income underneath it.

The lesson from the research: **the digital product is what makes €100k/month
mathematically possible.** 1:1 and even cohorts, alone, cannot get there on
one person's calendar — they're the credibility and cash-flow base while the
course/content engine grows.

## 4. The funnel this site is built around

1. **Free content** (`resources.html`, plus YouTube/TikTok/Instagram short
   videos solving real IB problems) → drives search and social traffic at
   near-zero cost. This is the single biggest lever for reaching course-sale
   volumes like "300/month" above — it has to be produced consistently.
2. **Lead magnet** (the formula booklet cheat sheet, embedded on the
   homepage and resources page) → converts anonymous traffic into an email
   list you actually own.
3. **Low-ticket entry: the course** (€249 one-time) → the highest-volume,
   most scalable revenue line.
4. **Mid-ticket: group cohort** (€150–€200/month) → for students who want
   live accountability; natural upsell from the course or from free content.
5. **High-ticket: 1:1** (€50–€80+/hr) → reserved for urgent/specific needs
   (IA deadlines, resits, final exam weeks); also your best source of
   testimonials and referrals.

## 5. What's still needed (not buildable from a website alone)

- **Real content production**: the resources/blog and short-form video
  content that actually drives traffic. This is the biggest single
  determinant of whether the course sells 20/month or 300/month.
- **Checkout & delivery infrastructure**: a payment processor (Stripe, Lemon
  Squeezy, etc.) and a place to host/deliver video content (Teachable,
  Thinkific, or a custom member area) — `courses.html` has a placeholder
  checkout button, not a working one.
- **Email/CRM tooling**: the lead-magnet and contact forms on this site
  submit nowhere yet — they need a real form backend or ESP integration.
- **Real credentials, testimonials, and numbers**: every stat, name, and
  quote in this build is a clearly labelled placeholder. Trust signals only
  work when they're real — do not launch with fabricated testimonials or
  invented statistics.
- **Legal basics**: refund policy (drafted here as 7 days), terms of
  service, privacy policy (required once you're collecting emails/payments),
  and — if operating in the EU — GDPR-compliant consent for the lead-magnet
  forms.

## Sources

- [Revision Village Gold pricing](https://www.revisionvillage.com/revision-village-gold/)
- [Revision Village FAQ](https://help.revisionvillage.com/en/how-much-does-revision-village-cost)
- [RevisionDojo tutoring](https://www.revisiondojo.com/tutoring)
- [How Much Does an IB Tutor Cost? Real 2026 Rates](https://www.plusplustutors.com/blog/how-much-does-an-ib-tutor-cost-real-2026-rates-explained)
- [Best Cohort Based Courses](https://www.educate-me.co/blog/best-cohort-based-courses)
- [Online coaching business models: 1:1, group, hybrid](https://coachway.io/articles/online-coaching-business-models/)
- [Online Course Business Models: 6 Models & Real Revenue Data](https://www.ruzuku.com/learn/articles/course-business-models)
- [How to Build a High-Converting Landing Page](https://cxl.com/blog/how-to-build-a-high-converting-landing-page/)
