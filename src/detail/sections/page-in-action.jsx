// src/detail/sections/page-in-action.jsx — full-page preview section.
// Renders the same SaaS product landing page, with all 8 core blocks
// stacked vertically: Hero / Logos / Features / Screenshots / Stats /
// Testimonials / Pricing / FAQ / CTA. The hero block IS included here
// (unlike the designer demo) so the section stands alone and is
// recognisable as a product landing page.

function DetailPageInAction({ item, kind, chrome }) {
  const p = window.PRODUCT;
  const B = window.ProductBlocks;
  const sectionHdr = (idx, title) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: chrome.accent, fontVariantNumeric: 'tabular-nums' }}>0{idx}</div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: chrome.text, textTransform: 'uppercase' }}>{title}</div>
      <div style={{ flex: 1, height: 1, background: chrome.border }} />
    </div>
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: '8px 0' }}>
      <div>
        {sectionHdr(1, 'Hero')}
        <B.HeroBlock p={p} chrome={chrome} />
        <div style={{ marginTop: 18 }}>
          <B.HeroScreenshot p={p} chrome={chrome} idx={0} />
        </div>
      </div>

      <div>
        {sectionHdr(2, 'Trusted by')}
        <B.LogosBlock p={p} chrome={chrome} />
      </div>

      <div>
        {sectionHdr(3, 'Features')}
        <B.FeaturesBlock p={p} chrome={chrome} count={6} />
      </div>

      <div>
        {sectionHdr(4, 'Screenshots')}
        <B.ScreenshotsBlock p={p} chrome={chrome} count={4} />
      </div>

      <div>
        {sectionHdr(5, 'Numbers')}
        <B.StatsBlock p={p} chrome={chrome} />
      </div>

      <div>
        {sectionHdr(6, 'Testimonials')}
        <B.TestimonialsBlock p={p} chrome={chrome} count={3} />
      </div>

      <div>
        {sectionHdr(7, 'Pricing')}
        <B.PricingBlock p={p} chrome={chrome} />
      </div>

      <div>
        {sectionHdr(8, 'FAQ')}
        <B.FAQBlock p={p} chrome={chrome} />
      </div>

      <div>
        {sectionHdr(9, 'Get started')}
        <B.CTABlock p={p} chrome={chrome} />
        <div style={{ marginTop: 16 }}>
          <B.SocialRow p={p} chrome={chrome} />
        </div>
      </div>
    </div>
  );
}

window.DetailPageInAction = DetailPageInAction;
