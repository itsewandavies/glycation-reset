'use client'

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #FAFAF7;
    color: #1A1A1A;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 400;
    line-height: 1.7;
    font-size: 17px;
  }

  /* ── MASTHEAD ── */
  .masthead {
    background: #fff;
    border-bottom: 1px solid #E2DDD7;
    padding: 14px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .masthead-logo {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 22px;
    font-weight: 700;
    color: #1A1A1A;
  }
  .masthead-logo span { color: #9B7B6A; }

  /* ── LAYOUT ── */
  .article-wrap {
    max-width: 760px;
    margin: 0 auto;
    padding: 0 24px 100px;
  }

  /* ── HERO ── */
  .hero {
    padding: 52px 0 40px;
    text-align: center;
  }
  .hero-tag {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #9B7B6A;
    margin-bottom: 22px;
  }
  .article-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(30px, 5.5vw, 50px);
    font-weight: 700;
    line-height: 1.14;
    letter-spacing: -0.5px;
    color: #0F0F0F;
    margin-bottom: 20px;
    text-align: left;
  }
  .article-subtitle {
    font-size: 19px;
    line-height: 1.65;
    color: #52504D;
    font-weight: 400;
    margin-bottom: 28px;
    text-align: left;
  }
  .hero-promise {
    background: #F5EDE8;
    border-left: 4px solid #9B7B6A;
    padding: 16px 20px;
    font-size: 16px;
    font-weight: 600;
    color: #3D2B22;
    text-align: left;
    margin-bottom: 32px;
    line-height: 1.5;
  }
  .hero-guarantee-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
    padding: 16px 0;
    border-top: 1px solid #E2DDD7;
    border-bottom: 1px solid #E2DDD7;
    margin-bottom: 0;
  }
  .hero-guarantee-item {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 13px;
    color: #52504D;
    font-weight: 500;
  }

  /* ── HERO IMAGE ── */
  .hero-image {
    width: 100%;
    height: 440px;
    object-fit: cover;
    object-position: center top;
    display: block;
    margin: 32px 0 0;
    border-radius: 4px;
  }
  .image-caption {
    font-size: 13px;
    color: #9B9590;
    font-style: italic;
    text-align: center;
    margin: 10px 0 40px;
  }

  /* ── BODY ── */
  .body-text p {
    margin-bottom: 24px;
    font-size: 17px;
    line-height: 1.82;
    color: #2A2826;
  }
  .body-text strong { font-weight: 600; color: #0F0F0F; }
  .body-text em { font-style: italic; }

  /* ── HEADINGS ── */
  .section-heading {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 27px;
    font-weight: 700;
    color: #0F0F0F;
    margin: 48px 0 22px;
    line-height: 1.3;
  }
  .section-rule {
    border: none;
    border-top: 1px solid #E2DDD7;
    margin: 44px 0;
  }

  /* ── MECHANISM BOX ── */
  .mechanism-box {
    background: #fff;
    border: 1px solid #E2DDD7;
    border-radius: 8px;
    padding: 28px 30px;
    margin: 32px 0;
  }
  .mechanism-box-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #9B7B6A;
    margin-bottom: 14px;
  }
  .mechanism-box p {
    font-size: 16px;
    color: #2A2826;
    line-height: 1.7;
    margin-bottom: 14px;
  }
  .mechanism-box p:last-child { margin-bottom: 0; }

  /* ── DIAGRAM ── */
  .diagram {
    background: #fff;
    border: 1px solid #E2DDD7;
    border-radius: 8px;
    padding: 28px 20px;
    margin: 28px 0 36px;
  }
  .diagram-title {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #9B7B6A;
    text-align: center;
    margin-bottom: 24px;
  }
  .diagram-steps {
    display: flex;
    align-items: stretch;
    gap: 0;
    flex-wrap: wrap;
    justify-content: center;
  }
  .diagram-step {
    flex: 1;
    min-width: 130px;
    max-width: 160px;
    text-align: center;
    padding: 16px 10px;
    background: #FAFAF7;
    border: 1px solid #E2DDD7;
    border-radius: 6px;
  }
  .diagram-step-icon { font-size: 28px; margin-bottom: 8px; }
  .diagram-step-label {
    font-size: 11px;
    font-weight: 700;
    color: #1A1A1A;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .diagram-step-desc { font-size: 11px; color: #6B6560; line-height: 1.4; }
  .diagram-step.bad { background: #FDF0EE; border-color: #E8B5AD; }
  .diagram-arrow {
    display: flex;
    align-items: center;
    color: #9B7B6A;
    font-size: 22px;
    padding: 0 6px;
    flex-shrink: 0;
  }
  .diagram-note {
    margin-top: 20px;
    padding: 12px 16px;
    background: #FDF0EE;
    border-radius: 6px;
    text-align: center;
    font-size: 14px;
    color: #7A2E1E;
    font-weight: 500;
  }
  @media (max-width: 600px) {
    .diagram-steps { flex-direction: column; align-items: center; }
    .diagram-step { max-width: 100%; width: 100%; }
    .diagram-arrow { transform: rotate(90deg); padding: 4px 0; }
  }

  /* ── INLINE IMAGES ── */
  .inline-image {
    width: 100%;
    border-radius: 6px;
    margin: 24px 0 10px;
    display: block;
    object-fit: cover;
    max-height: 380px;
  }

  /* ── PULL QUOTE ── */
  .pull-quote {
    margin: 36px 0;
    padding: 28px 32px;
    background: #F5EDE8;
    border-left: 4px solid #9B7B6A;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 21px;
    font-style: italic;
    color: #3D2B22;
    line-height: 1.55;
  }

  /* ── VILLAIN BOX ── */
  .villain-box {
    background: #FDF7F5;
    border: 1px solid #D4A898;
    border-radius: 8px;
    padding: 26px 28px;
    margin: 32px 0;
  }
  .villain-box-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #B05C45;
    margin-bottom: 12px;
  }
  .villain-box p {
    font-size: 16px;
    color: #2A2826;
    line-height: 1.7;
    margin-bottom: 12px;
  }
  .villain-box p:last-child { margin-bottom: 0; }

  /* ── INGREDIENTS ── */
  .ingredients-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 28px 0;
  }
  .ingredient-card {
    background: #fff;
    border: 1px solid #E2DDD7;
    border-radius: 8px;
    overflow: hidden;
  }
  .ingredient-img {
    width: 100%;
    height: 210px;
    object-fit: cover;
    display: block;
  }
  .ingredient-body { padding: 22px 24px; }
  .ingredient-num {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #9B7B6A;
    margin-bottom: 6px;
  }
  .ingredient-name {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 20px;
    font-weight: 700;
    color: #0F0F0F;
    margin-bottom: 10px;
  }
  .ingredient-desc { font-size: 15px; color: #52504D; line-height: 1.65; }
  .ingredient-badge {
    display: inline-block;
    margin-top: 12px;
    background: #EEF5EE;
    border: 1px solid #A8CBA8;
    color: #2D6B2D;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 20px;
  }

  /* ── TESTIMONIALS ── */
  .testimonials { margin: 44px 0; }
  .testimonials-heading {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 22px;
    font-weight: 700;
    color: #0F0F0F;
    margin-bottom: 22px;
    text-align: center;
  }
  .testimonial-card {
    background: #fff;
    border: 1px solid #E2DDD7;
    border-radius: 8px;
    padding: 22px 24px;
    margin-bottom: 16px;
  }
  .testimonial-stars { color: #D4A853; font-size: 14px; margin-bottom: 10px; }
  .testimonial-text {
    font-size: 15px;
    color: #2A2826;
    line-height: 1.7;
    margin-bottom: 16px;
    font-style: italic;
  }
  .testimonial-author { display: flex; align-items: center; gap: 12px; }
  .testimonial-avatar {
    width: 46px; height: 46px; border-radius: 50%;
    object-fit: cover; object-position: center top; flex-shrink: 0;
  }
  .testimonial-name { font-size: 14px; font-weight: 700; color: #1A1A1A; }
  .testimonial-detail { font-size: 13px; color: #9B9590; margin-top: 2px; }
  .verified-badge {
    margin-left: auto;
    font-size: 11px;
    font-weight: 600;
    color: #2D6B2D;
    background: #EEF5EE;
    border: 1px solid #A8CBA8;
    padding: 3px 9px;
    border-radius: 20px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  /* ── INSIDE BOX ── */
  .inside-box {
    background: #fff;
    border: 2px solid #9B7B6A;
    border-radius: 10px;
    padding: 32px;
    margin: 36px 0;
  }
  .inside-box-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 22px;
    font-weight: 700;
    color: #0F0F0F;
    margin-bottom: 6px;
  }
  .inside-box-subtitle { font-size: 14px; color: #9B7B6A; font-weight: 500; margin-bottom: 24px; }
  .inside-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 16px;
  }
  .inside-check {
    width: 22px; height: 22px;
    background: #9B7B6A;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: white; font-size: 11px; flex-shrink: 0; margin-top: 2px;
  }
  .inside-item-text { font-size: 15px; color: #2A2826; line-height: 1.6; }
  .inside-item-text strong { color: #0F0F0F; }

  /* ── PRICE ── */
  .price-section {
    background: #fff;
    border: 1px solid #E2DDD7;
    border-radius: 10px;
    padding: 32px;
    margin: 36px 0;
    text-align: center;
  }
  .price-label {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #9B7B6A;
    margin-bottom: 10px;
  }
  .price-main {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 64px;
    font-weight: 700;
    color: #0F0F0F;
    line-height: 1;
    margin-bottom: 10px;
  }
  .price-context {
    font-size: 15px;
    color: #52504D;
    line-height: 1.6;
    max-width: 460px;
    margin: 0 auto 28px;
  }
  .price-context strong { color: #0F0F0F; }
  .cta-button {
    display: block;
    background: #9B7B6A;
    color: white;
    font-size: 17px;
    font-weight: 600;
    padding: 18px 32px;
    border-radius: 6px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    border: none;
    width: 100%;
    max-width: 400px;
    margin: 0 auto 14px;
    letter-spacing: 0.2px;
    transition: background 0.2s;
  }
  .cta-button:hover { background: #8A6B5A; }
  .cta-sub {
    font-size: 13px;
    color: #9B9590;
    text-align: center;
  }

  /* ── GUARANTEE ── */
  .guarantee-box {
    background: #F5EDE8;
    border-radius: 8px;
    padding: 28px 30px;
    margin: 36px 0;
    display: flex;
    gap: 18px;
    align-items: flex-start;
  }
  .guarantee-icon { font-size: 36px; flex-shrink: 0; }
  .guarantee-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 20px;
    font-weight: 700;
    color: #0F0F0F;
    margin-bottom: 10px;
  }
  .guarantee-text { font-size: 15px; color: #3D2B22; line-height: 1.7; }

  /* ── FAQ ── */
  .faq-section { margin: 48px 0; }
  .faq-heading {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 26px;
    font-weight: 700;
    color: #0F0F0F;
    margin-bottom: 24px;
    text-align: center;
  }
  .faq-item {
    border-bottom: 1px solid #E2DDD7;
    padding: 20px 0;
  }
  .faq-item:last-child { border-bottom: none; }
  .faq-question {
    font-size: 16px;
    font-weight: 600;
    color: #0F0F0F;
    margin-bottom: 10px;
    line-height: 1.45;
  }
  .faq-answer {
    font-size: 15px;
    color: #52504D;
    line-height: 1.7;
  }

  /* ── P.S. ── */
  .ps-section {
    margin-top: 44px;
    padding: 24px 28px;
    background: #F5EDE8;
    border-radius: 6px;
    font-size: 16px;
    color: #3D2B22;
    line-height: 1.75;
  }

  /* ── FOOTER ── */
  .footer {
    background: #1A1A1A;
    color: rgba(255,255,255,0.45);
    text-align: center;
    padding: 32px 20px;
    font-size: 12px;
    line-height: 1.9;
    margin-top: 80px;
  }
  .footer a { color: rgba(255,255,255,0.35); text-decoration: none; }

  @media (max-width: 600px) {
    .article-wrap { padding: 0 16px 60px; }
    .hero { padding: 36px 0 28px; }
    .inside-box { padding: 20px; }
    .price-section { padding: 24px 20px; }
    .guarantee-box { flex-direction: column; gap: 12px; }
  }
`

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ── MASTHEAD ── */}
      <header className="masthead">
        <div className="masthead-logo">The Skin<span>Journal</span></div>
      </header>

      <main className="article-wrap">

        {/* ── 1. HERO ── */}
        <header className="hero">
          <div className="hero-tag">Skin Science · Anti-Aging</div>
          <h1 className="article-title">
            The Real Reason Your Face Changed After 50 Isn't Collagen Loss — And No Serum Can Fix It
          </h1>
          <p className="article-subtitle">
            There's a process happening inside your skin every single day that the skincare industry never talks about. Scientists call it glycation. Once you understand it, everything else makes sense.
          </p>
          <div className="hero-promise">
            Inside: the three-compound oral protocol that addresses the actual mechanism — the part your bathroom shelf can't reach.
          </div>
          <div className="hero-guarantee-bar">
            <div className="hero-guarantee-item">🛡️ 60-day money-back guarantee</div>
            <div className="hero-guarantee-item">⚡ Instant digital download</div>
            <div className="hero-guarantee-item">✓ Science-backed protocol</div>
          </div>
        </header>

        {/* ── HERO IMAGE ── */}
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1400&q=85&auto=format&fit=crop&crop=top"
          alt="Woman examining her skin in natural morning light"
          className="hero-image"
        />
        <p className="image-caption">The morning light doesn't lie. And somewhere around 50, a lot of women start avoiding it.</p>

        <div className="body-text">

          {/* ── 2. CONDENSED MECHANISM FIRST ── */}
          <h2 className="section-heading">What Nobody in the Skincare Industry Tells You</h2>

          <p>
            Every time you eat something that converts to glucose — bread, pasta, cereal, even fruit — a small amount of that sugar enters your bloodstream and bonds to the collagen in your skin. This process is called <strong>glycation</strong>. And the bonds it creates are called AGEs — Advanced Glycation End-Products.
          </p>

          <p>
            AGEs cause your collagen fibers to cross-link abnormally. Instead of smooth, flexible fibers that spring back, you end up with stiff, rigid, tangled bundles. That rigidity is the sagging jaw. The deepening lines. The loss of volume that makes your face look deflated in photos.
          </p>

          <p>
            It is not collagen loss. It is collagen that has been chemically stiffened from the inside. And here is the critical thing: <strong>no topical product can fix this.</strong> Serums sit on the epidermis — the top layer. Glycation happens in the dermis — the layer underneath. They never meet.
          </p>

          <div className="diagram">
            <div className="diagram-title">Why Your Skincare Can't Reach The Problem</div>
            <div className="diagram-steps">
              <div className="diagram-step">
                <div className="diagram-step-icon">🍞</div>
                <div className="diagram-step-label">Sugar in blood</div>
                <div className="diagram-step-desc">From everyday food</div>
              </div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-step bad">
                <div className="diagram-step-icon">⚠️</div>
                <div className="diagram-step-label">Glycation</div>
                <div className="diagram-step-desc">Happens in the dermis</div>
              </div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-step bad">
                <div className="diagram-step-icon">📉</div>
                <div className="diagram-step-label">Sagging + lines</div>
                <div className="diagram-step-desc">Stiff, rigid collagen</div>
              </div>
            </div>
            <div className="diagram-note">
              Your serum reaches: the epidermis (top layer) &nbsp;·&nbsp; Glycation happens: in the dermis (below it) &nbsp;·&nbsp; They never meet.
            </div>
          </div>

          <p>
            The solution — if there is one — has to come from the inside. And it turns out, there is one.
          </p>

          <hr className="section-rule" />

          {/* ── 3. PERSONAL STORY ── */}
          <h2 className="section-heading">I Deleted 263 Holiday Photos Because I Couldn't Stand Looking at My Own Face</h2>

          <p>
            Two summers ago I went to Mallorca with my sister. Two weeks, first real holiday in four years. We took hundreds of photos. I came home and started going through them — and something felt wrong. I kept seeing this woman in the background, softer in the face, that specific deflated look around the jaw.
          </p>

          <p>
            It took me a full minute to realise that woman was me.
          </p>

          <p>
            I deleted 263 of them. Kept only the ones where I was wearing sunglasses or the light was forgiving. Then I started avoiding mirrors in bright light. Then I stopped agreeing to be in photos at family things. Then my son asked why I never smile in pictures anymore.
          </p>

          <p>
            That question sent me down a research rabbit hole that took four months to come back from. And what I found completely changed how I understood what was happening to my skin — and why nothing I'd tried had worked.
          </p>

          <hr className="section-rule" />

          {/* ── 4. BATHROOM SHELF EXPERIMENT ── */}
          <h2 className="section-heading">The $847 Experiment That Got Me Nowhere</h2>

          <p>
            Before I found out about glycation, I'd spent three years trying to fix my skin the way you're supposed to. I kept every receipt.
          </p>

          <p>
            The vitamin C serum in the brown glass bottle — $90, used it for eight months without missing a day. The retinol that made my skin peel for six weeks and look thinner on the other side. The collagen powder you stir into your morning coffee, $180 for a six-month supply. The hyaluronic acid serum. The peptide cream. The two dermatologist consultations at $160 each.
          </p>

          <p>
            Total spend: <strong>$847.</strong> Over three years. Consistently applied, in the right order, with SPF every single day.
          </p>

          <p>
            My dermatologist looked at my face each time and said the same thing: "It's a natural part of aging. We could discuss fillers if the volume loss bothers you."
          </p>

          <img
            src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=80&auto=format&fit=crop"
            alt="Skincare products on a bathroom shelf"
            className="inline-image"
          />
          <p className="image-caption">$847 of products working on the wrong layer of skin.</p>

          <p>
            I wasn't doing anything wrong. The products weren't bad. They just couldn't reach the place where the damage was actually happening.
          </p>

          <hr className="section-rule" />

          {/* ── 5. VILLAIN: MLM / SKINCARE INDUSTRY ── */}
          <div className="villain-box">
            <div className="villain-box-label">Sound Familiar?</div>
            <p>
              If you've ever bought a skincare system from a friend on Facebook — Rodan + Fields, Arbonne, Monat, Mary Kay — and watched her demo the "patented peptide complex" that was going to transform your skin. If you've spent $150, $200, $300 on a three-step regime from a "consultant" who was genuinely convinced it would work.
            </p>
            <p>
              This is why it didn't. Not because the products were fake. Not because your friend was lying to you. But because every one of those products was trying to fix something at the surface. And the thing that's actually causing your skin to age the way it does lives in a layer those products can never reach.
            </p>
            <p>
              You weren't wasting money because you were naive. You were wasting money because the problem was never explained to you correctly.
            </p>
          </div>

          <hr className="section-rule" />

          {/* ── 6. THREE COMPOUNDS ── */}
          <h2 className="section-heading">What Actually Works</h2>

          <p>
            Once I understood glycation, I needed to know if anything could address it. I spent months reading research — dermatology journals, botanical studies, nutritional biochemistry — looking for compounds with actual anti-glycation evidence behind them.
          </p>

          <p>
            I found three. All oral supplements. All studied specifically for their effect on skin glycation. All working from a different angle.
          </p>

          <div className="ingredients-grid">

            <div className="ingredient-card">
              <img
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80&auto=format&fit=crop"
                alt="Japanese Knotweed extract"
                className="ingredient-img"
              />
              <div className="ingredient-body">
                <div className="ingredient-num">Compound 01</div>
                <div className="ingredient-name">Japanese Knotweed Extract</div>
                <p className="ingredient-desc">
                  Contains a concentrated form of resveratrol that activates an enzyme which blocks new AGE formation at the cellular level. Think of it as a barrier between the glucose in your blood and the collagen in your skin. Works upstream — preventing the damage from happening in the first place.
                </p>
                <div className="ingredient-badge">✓ Prevents new AGE formation</div>
              </div>
            </div>

            <div className="ingredient-card">
              <img
                src="https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=800&q=80&auto=format&fit=crop"
                alt="Sea Buckthorn orange berries"
                className="ingredient-img"
              />
              <div className="ingredient-body">
                <div className="ingredient-num">Compound 02</div>
                <div className="ingredient-name">Sea Buckthorn</div>
                <p className="ingredient-desc">
                  Works on a different angle entirely. When glycation damages the lipid matrix underneath your skin — the scaffolding that makes skin plump and full — it causes that deflated, sagging look. Sea buckthorn restores that structure. Women who take this describe their face starting to look fuller. Less sunken. Not a surface effect — actual structural repair from underneath.
                </p>
                <div className="ingredient-badge">✓ Restores under-skin structure</div>
              </div>
            </div>

            <div className="ingredient-card">
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80&auto=format&fit=crop"
                alt="Maritime Pine forest"
                className="ingredient-img"
              />
              <div className="ingredient-body">
                <div className="ingredient-num">Compound 03</div>
                <div className="ingredient-name">Maritime Pine Bark</div>
                <p className="ingredient-desc">
                  This one has an actual randomised, double-blind, placebo-controlled trial behind it. Women taking it daily for 12 weeks showed statistically significant improvements in skin elasticity and measurable reductions in surface roughness. Not marginal. Significant. It reduces the oxidative stress that accelerates glycation, and helps your body start breaking down existing AGE damage.
                </p>
                <div className="ingredient-badge">✓ RCT-proven elasticity improvement</div>
              </div>
            </div>

          </div>

          <p>
            Because all three are taken orally, they reach your dermis through your bloodstream. That's the only route that actually gets there.
          </p>

          <div className="pull-quote">
            You're not putting something on top of your skin hoping it absorbs. You're delivering active compounds directly into the layer where the damage is — the way only your bloodstream can.
          </div>

          <hr className="section-rule" />

          {/* ── 7. TESTIMONIALS ── */}
          <div className="testimonials">
            <div className="testimonials-heading">What Women Are Saying</div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "By week three my husband asked if I'd had something done. I hadn't. I'd just finally started working on the right thing. The jawline is genuinely tighter. I look at myself in the mirror now instead of avoiding it."
              </p>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=92&q=80&auto=format&fit=crop&crop=face"
                  alt="Pauline"
                  className="testimonial-avatar"
                />
                <div>
                  <div className="testimonial-name">Pauline H.</div>
                  <div className="testimonial-detail">54 · Phoenix, AZ</div>
                </div>
                <div className="verified-badge">✓ Verified</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "I'd spent probably $600 on Rodan + Fields over two years. A friend sold it to me, swore by it. It did absolutely nothing for the jaw and cheek area, which is what I actually cared about. I'd given up. The science in this guide was the first time anyone actually explained why — and the protocol worked when nothing else had."
              </p>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=92&q=80&auto=format&fit=crop&crop=face"
                  alt="Sandra"
                  className="testimonial-avatar"
                />
                <div>
                  <div className="testimonial-name">Sandra K.</div>
                  <div className="testimonial-detail">58 · Melbourne, AU</div>
                </div>
                <div className="verified-badge">✓ Verified</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "The food list section genuinely shocked me. There's one thing I was eating every single morning thinking it was healthy. Changed that one thing and I noticed a difference within ten days. The supplements on top of that — by week four I got three separate comments about my skin in the same week."
              </p>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=92&q=80&auto=format&fit=crop&crop=face"
                  alt="Maggie"
                  className="testimonial-avatar"
                />
                <div>
                  <div className="testimonial-name">Maggie T.</div>
                  <div className="testimonial-detail">51 · Vancouver, BC</div>
                </div>
                <div className="verified-badge">✓ Verified</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "I'm 63. I thought this ship had sailed for me. I almost didn't buy it because I figured I was past the point where anything non-surgical would do anything real. I was wrong. The lines around my mouth have genuinely softened and my skin looks less... tired. My daughter noticed before I said anything."
              </p>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=92&q=80&auto=format&fit=crop&crop=face"
                  alt="Debra"
                  className="testimonial-avatar"
                />
                <div>
                  <div className="testimonial-name">Debra M.</div>
                  <div className="testimonial-detail">63 · Leeds, UK</div>
                </div>
                <div className="verified-badge">✓ Verified</div>
              </div>
            </div>

          </div>

          <hr className="section-rule" />

          {/* ── 8. WHAT'S INSIDE ── */}
          <h2 className="section-heading">The Glycation Reversal Protocol</h2>

          <p>
            I turned four months of research into a 30-page guide that tells you everything you need to actually do this. Not a general "eat better" plan. An exact protocol with exact doses, exact timing, and the specific brands that work.
          </p>

          <div className="inside-box">
            <div className="inside-box-title">Everything Included</div>
            <div className="inside-box-subtitle">Instant PDF download · 30 pages · No filler</div>

            <div className="inside-item">
              <div className="inside-check">✓</div>
              <div className="inside-item-text">
                <strong>The complete glycation explanation</strong> — why it happens, why conventional skincare can't address it, and what the research actually says. You'll finally understand the mechanism behind what you've been seeing in the mirror.
              </div>
            </div>
            <div className="inside-item">
              <div className="inside-check">✓</div>
              <div className="inside-item-text">
                <strong>Exact doses for all three compounds</strong> — the specific amounts from the studies that showed results. Not the lower amounts on standard supplement packaging. The doses that actually move the needle, plus which brands are worth buying.
              </div>
            </div>
            <div className="inside-item">
              <div className="inside-check">✓</div>
              <div className="inside-item-text">
                <strong>Your daily protocol sequence</strong> — a specific daily routine with timing built in so everything absorbs correctly. Not a list of things to take whenever you remember. A structured sequence that works.
              </div>
            </div>
            <div className="inside-item">
              <div className="inside-check">✓</div>
              <div className="inside-item-text">
                <strong>The glycation food list</strong> — the 12 foods that actively fight AGE formation, and the 7 foods that accelerate glycation even when you think you're eating well. One of them is probably in your breakfast right now.
              </div>
            </div>
            <div className="inside-item">
              <div className="inside-check">✓</div>
              <div className="inside-item-text">
                <strong>14-day visible results tracker</strong> — what to look for and when. Most women notice the first visible changes between day 9 and day 14.
              </div>
            </div>
          </div>

          <hr className="section-rule" />

          {/* ── 9. PRICE WITH REAL ANCHOR ── */}
          <div className="price-section">
            <div className="price-label">Your investment today</div>
            <div className="price-main">$19</div>
            <p className="price-context">
              I spent <strong>$847</strong> on serums, retinols, collagen powders, and dermatologist consultations over three years — all working on the wrong problem. This is $19. For the explanation and the protocol that actually addresses what's happening.
            </p>
            <button className="cta-button">
              Get Instant Access — $19
            </button>
            <p className="cta-sub">💳 Secure checkout · Delivered to your inbox in 2 minutes</p>
          </div>

          {/* ── 10. GUARANTEE ── */}
          <div className="guarantee-box">
            <div className="guarantee-icon">🛡️</div>
            <div>
              <div className="guarantee-title">The 60-Day Guarantee</div>
              <p className="guarantee-text">
                Follow the protocol for 60 days. If your jawline hasn't tightened, if the lines haven't softened, if you're not getting unsolicited comments about how well you look — email me for a full refund and you keep the guide. I mean that. No forms, no questions, no awkwardness. I'm that confident that once you're working on the right problem, you'll see results you haven't seen in years.
              </p>
            </div>
          </div>

          <hr className="section-rule" />

          {/* ── 11. FAQ ── */}
          <div className="faq-section">
            <div className="faq-heading">Questions Women Usually Ask</div>

            <div className="faq-item">
              <div className="faq-question">I've taken supplements before and they didn't do anything for my skin. Why would this be different?</div>
              <p className="faq-answer">Because you were almost certainly taking the wrong supplements for the wrong problem. General collagen supplements, biotin, even high-dose vitamin C — none of these target glycation specifically. The three compounds in this protocol were selected because they have direct anti-glycation mechanisms, studied in the context of skin specifically. That's a different category of supplement entirely.</p>
            </div>

            <div className="faq-item">
              <div className="faq-question">How quickly will I see results?</div>
              <p className="faq-answer">Most women notice the first visible changes between day 9 and day 14 — usually in the quality and hydration of the skin first. Structural changes to the jawline and cheek area tend to be noticeable by weeks 3 to 4. Full results typically take 8–12 weeks as the collagen begins to recover. The tracker in the protocol walks you through exactly what to look for and when.</p>
            </div>

            <div className="faq-item">
              <div className="faq-question">Is this safe? I'm on medication / I'm post-menopausal / I have health conditions.</div>
              <p className="faq-answer">All three compounds are well-studied and widely available as supplements. That said, if you're on medication or have a health condition, please run anything new past your doctor first. The protocol includes full sourcing and dosage information so your GP can review it if needed.</p>
            </div>

            <div className="faq-item">
              <div className="faq-question">Does this work for women post-menopause?</div>
              <p className="faq-answer">Yes — and actually, post-menopausal women often see faster results. The drop in estrogen accelerates glycation, which is why many women report their skin changing dramatically in their early 50s. Addressing glycation directly is particularly impactful when the hormonal protection has reduced.</p>
            </div>

            <div className="faq-item">
              <div className="faq-question">Do I have to overhaul my diet?</div>
              <p className="faq-answer">No. The protocol works on the supplement and timing side regardless of diet. The food list in the guide is a bonus — it can accelerate your results significantly, and the one or two foods most likely to be actively working against you are worth knowing. But this isn't a diet plan. It's a supplement protocol with dietary guidance, not the other way around.</p>
            </div>

            <div className="faq-item">
              <div className="faq-question">Why is this only $19? Isn't that suspiciously cheap?</div>
              <p className="faq-answer">It's a PDF guide. It doesn't cost me anything to deliver it. I priced it at $19 because I didn't want the price to be the reason someone decides not to try it. There's a 60-day money-back guarantee if it doesn't work. The low price is intentional — not a signal that the information is low-value.</p>
            </div>

            <div className="faq-item">
              <div className="faq-question">I'm 60+. Am I too old for this to work?</div>
              <p className="faq-answer">There's no age at which this stops being relevant — glycation is a continuous, ongoing process, not a one-time event. Debra, one of the women above, is 63 and saw real results. The protocol addresses the mechanism, not the age.</p>
            </div>

            <div className="faq-item">
              <div className="faq-question">What if I buy it and never read it?</div>
              <p className="faq-answer">Honestly? Then you'll have wasted $19. But the guide is 30 pages and written to be read in one sitting. It's not a textbook. It's a protocol with a clear beginning, middle, and end. Most women who download it read it the same day.</p>
            </div>

          </div>

          <hr className="section-rule" />

          {/* ── FINAL CTA ── */}
          <div className="price-section" style={{ marginTop: '0' }}>
            <div className="price-label">Ready to start?</div>
            <div className="price-main">$19</div>
            <p className="price-context">
              Instant access. 60-day guarantee. If it doesn't work, you get your money back. But your mirror is going to tell a different story.
            </p>
            <button className="cta-button">
              Yes — Get The Protocol Now
            </button>
            <p className="cta-sub">🔒 Encrypted checkout · Instant delivery · One-time payment</p>
          </div>

          {/* ── P.S. ── */}
          <div className="ps-section">
            <strong>P.S.</strong> — You've already proven that skincare doesn't fix this. Three years of serums, or two years of whatever your friend was selling, and your face still looks the way it looks. Not because you did anything wrong. Because you were working on the wrong layer. Now you know what the actual problem is. You know what addresses it. The protocol is $19 and guaranteed for 60 days. What are you waiting for?
          </div>

        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>© 2025 The Skin Journal · All rights reserved</p>
        <p style={{ marginTop: '6px' }}>
          <a href="#">Privacy Policy</a> · <a href="#">Terms</a> · <a href="#">Contact</a> · <a href="#">Disclaimer</a>
        </p>
        <p style={{ marginTop: '14px', maxWidth: '620px', margin: '14px auto 0' }}>
          This article is for informational and educational purposes only. It is not intended as medical advice. Individual results vary. The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Always consult your physician before beginning any supplement protocol.
        </p>
      </footer>
    </>
  )
}
