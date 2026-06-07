// src/data/product.js — unified content for the SaaS product landing page
// demo. All 44 palettes and 36 styles render the SAME product (Folio)
// in their own visual language, so users can compare apples-to-apples.
//
// No external images — screenshots are CSS gradient tiles, avatars are
// CSS initials+gradient circles.

var PRODUCT = {
  brand: 'Folio',
  brandMark: 'F',       // single-letter logo mark
  tagline: 'From brief to invoice, in one place.',
  subhead: 'The client portal for independent design studios \u2014 send briefs, collect feedback, track time, and invoice under your own branded portal.',
  ctaPrimary: 'Start free trial',
  ctaSecondary: 'Watch demo',

  stats: [
    { value: '12k+',  label: 'Studios'      },
    { value: '4.9\u2605', label: 'Rating'    },
    { value: '\$2M',  label: 'Invoiced'     },
  ],

  features: [
    { icon: '\u2726', tag: 'ONBOARDING',  name: 'Smart Briefs',     desc: 'Guided intake forms that turn vague asks into clear scopes' },
    { icon: '\u25C8', tag: 'REVIEW',      name: 'Visual Approvals', desc: 'Pin comments on pixels \u2014 never lose a thread in email again' },
    { icon: '\u25CE', tag: 'TRACK',       name: 'Time Tracking',    desc: 'Automatic activity timeline from Figma, Slack, and the web' },
    { icon: '\u25C7', tag: 'MONEY',       name: 'One-click Invoicing', desc: 'Polished invoices, multi-currency, Stripe & Wise built-in' },
    { icon: '\u25C6', tag: 'BRAND',       name: 'Branded Portal',   desc: 'Custom domain, colors, and logo \u2014 clients see you, not us' },
    { icon: '\u25C9', tag: 'INTEGRATE',   name: 'Integrations',     desc: 'Figma, Slack, Notion, Linear, Loom \u2014 we play well with others' },
  ],

  screenshots: [
    { id: 's1', label: 'Dashboard',  desc: 'All projects at a glance',  hue: 220 },
    { id: 's2', label: 'Inbox',      desc: 'Approvals & feedback',      hue: 280 },
    { id: 's3', label: 'Reports',    desc: 'Time & invoice analytics',  hue: 30  },
    { id: 's4', label: 'Portal',     desc: 'Branded client view',       hue: 150 },
  ],

  logos: ['Northwind', 'Lumen', 'SoundGarden', 'PaperTrail', 'Cobalt', 'Ember'],

  testimonials: [
    { quote: "Replaced 4 tools with Folio. My clients think I\u2019m a larger studio now.", author: 'Maya Lin',     role: 'Lead Designer, Northwind',   avatar: { initials: 'ML', hue: 200 } },
    { quote: 'The invoicing alone pays for itself in saved admin time.',                 author: 'Daniel Park',  role: 'Founder, SoundGarden',        avatar: { initials: 'DP', hue: 30  } },
    { quote: 'Brief collection went from 2 weeks of email back-and-forth to 2 days.',   author: 'Priya Singh',  role: 'Creative Director, PaperTrail', avatar: { initials: 'PS', hue: 320 } },
  ],

  pricing: [
    { name: 'Solo',    price: 'Free',   period: 'forever', highlight: false,
      features: ['1 active client', '1 GB storage', 'Basic brief forms', 'Email support', 'Folio branding'],
      cta: 'Start free' },
    { name: 'Studio',  price: '\$19',   period: '/ mo',    highlight: true,
      features: ['20 active clients', '100 GB storage', 'Visual approvals', 'Time tracking', 'Custom domain'],
      cta: 'Start 14-day trial' },
    { name: 'Agency',  price: '\$49',   period: '/ mo',    highlight: false,
      features: ['Unlimited clients', '1 TB storage', 'White-label portal', 'Priority support', 'Team roles', 'API access'],
      cta: 'Contact sales' },
  ],

  faq: [
    { q: 'How long is the free trial?',          a: '14 days, full Studio features, no credit card required.' },
    { q: 'Can I bring my own domain?',           a: 'Yes \u2014 Studio and Agency plans include a custom domain (CNAME setup takes ~5 minutes).' },
    { q: 'Do my clients need an account?',       a: 'No. They get a magic-link access to your branded portal \u2014 no signup, no password.' },
    { q: 'What about annual billing?',           a: 'Save 20% on annual plans. All plans auto-renew, cancel any time.' },
  ],

  social: [
    { label: 'Twitter',  handle: '@foliostudio' },
    { label: 'Email',    handle: 'hello@folio.app' },
    { label: 'GitHub',   handle: 'github.com/folio' },
    { label: 'Dribbble', handle: 'dribbble.com/folio' },
  ],
};

window.PRODUCT = PRODUCT;
