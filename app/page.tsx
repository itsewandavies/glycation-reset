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
    justify-content: space-between;
  }
  .masthead-logo {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.3px;
    color: #1A1A1A;
  }
  .masthead-logo span { color: #9B7B6A; }
  .masthead-nav {
    display: flex;
    gap: 24px;
    font-size: 13px;
    font-weight: 500;
    color: #6B6560;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }
  @media (max-width: 600px) { .masthead-nav { display: none; } }

  /* ── ARTICLE WRAPPER ── */
  .article-wrap {
    max-width: 740px;
    margin: 0 auto;
    padding: 0 20px 80px;
  }

  /* ── ARTICLE HEADER ── */
  .article-header { padding: 40px 0 28px; }
  .category-tag {
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #9B7B6A;
    background: #F5EDE8;
    padding: 5px 12px;
    border-radius: 2px;
    margin-bottom: 20px;
  }
  .article-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(28px, 5vw, 44px);
    font-weight: 700;
    line-height: 1.18;
    letter-spacing: -0.5px;
    color: #0F0F0F;
    margin-bottom: 18px;
  }
  .article-subtitle {
    font-size: 18px;
    line-height: 1.6;
    color: #52504D;
    font-weight: 400;
    margin-bottom: 24px;
    font-style: italic;
  }
  .byline {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 0;
    border-top: 1px solid #E2DDD7;
    border-bottom: 1px solid #E2DDD7;
  }
  .byline-avatar {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }
  .byline-text { font-size: 14px; color: #52504D; }
  .byline-text strong { color: #1A1A1A; font-weight: 600; }
  .byline-dot { color: #C8C0B8; margin: 0 6px; }
  .share-icons { margin-left: auto; display: flex; gap: 10px; }
  .share-icon {
    width: 34px; height: 34px; border-radius: 50%;
    background: #F0EBE5; display: flex; align-items: center; justify-content: center;
    font-size: 13px; cursor: pointer;
  }

  /* ── HERO IMAGE ── */
  .hero-image {
    width: 100%;
    height: 420px;
    object-fit: cover;
    display: block;
    margin: 28px 0 0;
    border-radius: 4px;
  }
  .image-caption {
    font-size: 13px;
    color: #9B9590;
    font-style: italic;
    text-align: center;
    margin: 10px 0 36px;
  }

  /* ── BODY TEXT ── */
  .body-text p {
    margin-bottom: 22px;
    font-size: 17px;
    line-height: 1.78;
    color: #2A2826;
  }
  .body-text p:first-child::first-letter {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 64px;
    font-weight: 700;
    float: left;
    line-height: 0.75;
    margin: 8px 8px 0 0;
    color: #9B7B6A;
  }

  /* ── SECTION HEADINGS ── */
  .section-heading {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 26px;
    font-weight: 700;
    color: #0F0F0F;
    margin: 44px 0 20px;
    line-height: 1.3;
  }
  .section-rule {
    border: none;
    border-top: 2px solid #E2DDD7;
    margin: 40px 0;
  }
  .section-rule-accent {
    border: none;
    height: 2px;
    background: linear-gradient(to right, #9B7B6A, #C4A898, transparent);
    margin: 40px 0;
  }

  /* ── PULL QUOTE ── */
  .pull-quote {
    margin: 36px -20px;
    padding: 32px 40px;
    background: #F5EDE8;
    border-left: 4px solid #9B7B6A;
  }
  .pull-quote p {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 22px;
    font-style: italic;
    color: #3D2B22;
    line-height: 1.5;
    margin: 0;
  }
  .pull-quote cite {
    display: block;
    margin-top: 12px;
    font-size: 13px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    color: #9B7B6A;
    letter-spacing: 0.5px;
    font-weight: 500;
  }

  /* ── CALLOUT BOX ── */
  .callout {
    background: #FFFDF9;
    border: 1px solid #E2DDD7;
    border-radius: 6px;
    padding: 24px 28px;
    margin: 32px 0;
  }
  .callout-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #9B7B6A;
    margin-bottom: 10px;
  }
  .callout p {
    font-size: 16px;
    color: #2A2826;
    line-height: 1.65;
    margin: 0;
  }

  /* ── GLYCATION DIAGRAM ── */
  .diagram {
    background: #fff;
    border: 1px solid #E2DDD7;
    border-radius: 8px;
    padding: 32px 24px;
    margin: 32px 0;
  }
  .diagram-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 18px;
    font-weight: 600;
    color: #0F0F0F;
    text-align: center;
    margin-bottom: 28px;
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
    padding: 16px 12px;
    background: #FAFAF7;
    border: 1px solid #E2DDD7;
    border-radius: 6px;
    position: relative;
  }
  .diagram-step-icon { font-size: 28px; margin-bottom: 8px; }
  .diagram-step-label {
    font-size: 12px;
    font-weight: 600;
    color: #1A1A1A;
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .diagram-step-desc { font-size: 12px; color: #6B6560; line-height: 1.4; }
  .diagram-step.bad { background: #FDF0EE; border-color: #E8B5AD; }
  .diagram-step.good { background: #EEF5EE; border-color: #A8CBA8; }
  .diagram-arrow {
    display: flex;
    align-items: center;
    color: #9B7B6A;
    font-size: 20px;
    padding: 0 8px;
    flex-shrink: 0;
  }
  @media (max-width: 600px) {
    .diagram-steps { flex-direction: column; align-items: center; }
    .diagram-step { max-width: 100%; width: 100%; }
    .diagram-arrow { transform: rotate(90deg); padding: 4px 0; }
  }

  /* ── INLINE IMAGE ── */
  .inline-image {
    width: 100%;
    border-radius: 6px;
    margin: 12px 0 8px;
    display: block;
    object-fit: cover;
  }
  .inline-image-half {
    width: 100%;
    max-height: 320px;
    border-radius: 6px;
    margin: 12px 0 8px;
    display: block;
    object-fit: cover;
  }

  /* ── INGREDIENT CARDS ── */
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
    display: flex;
    flex-direction: column;
  }
  .ingredient-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }
  .ingredient-body { padding: 20px 22px; }
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
  .ingredient-desc {
    font-size: 15px;
    color: #52504D;
    line-height: 1.65;
  }
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
    letter-spacing: 0.3px;
  }

  /* ── TESTIMONIALS ── */
  .testimonials { margin: 44px 0; }
  .testimonials-heading {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 20px;
    font-weight: 600;
    color: #0F0F0F;
    margin-bottom: 20px;
    text-align: center;
  }
  .testimonial-card {
    background: #fff;
    border: 1px solid #E2DDD7;
    border-radius: 8px;
    padding: 22px 24px;
    margin-bottom: 16px;
  }
  .testimonial-stars { color: #D4A853; font-size: 15px; margin-bottom: 10px; }
  .testimonial-text {
    font-size: 15px;
    color: #2A2826;
    line-height: 1.65;
    margin-bottom: 14px;
    font-style: italic;
  }
  .testimonial-author { display: flex; align-items: center; gap: 10px; }
  .testimonial-avatar {
    width: 36px; height: 36px; border-radius: 50%; object-fit: cover; flex-shrink: 0;
  }
  .testimonial-name { font-size: 14px; font-weight: 600; color: #1A1A1A; }
  .testimonial-detail { font-size: 13px; color: #9B9590; }
  .verified-badge {
    margin-left: auto;
    font-size: 11px;
    font-weight: 600;
    color: #2D6B2D;
    background: #EEF5EE;
    border: 1px solid #A8CBA8;
    padding: 3px 8px;
    border-radius: 20px;
    white-space: nowrap;
  }

  /* ── WHAT'S INSIDE BOX ── */
  .inside-box {
    background: #fff;
    border: 2px solid #9B7B6A;
    border-radius: 10px;
    padding: 28px 28px;
    margin: 32px 0;
  }
  .inside-box-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 20px;
    font-weight: 700;
    color: #0F0F0F;
    margin-bottom: 6px;
  }
  .inside-box-subtitle { font-size: 14px; color: #9B7B6A; font-weight: 500; margin-bottom: 20px; }
  .inside-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 14px;
  }
  .inside-check {
    width: 22px;
    height: 22px;
    background: #9B7B6A;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .inside-item-text { font-size: 15px; color: #2A2826; line-height: 1.55; }
  .inside-item-text strong { color: #0F0F0F; }
  .inside-price-row {
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid #E2DDD7;
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .price-main {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 36px;
    font-weight: 700;
    color: #0F0F0F;
  }
  .price-was {
    font-size: 18px;
    color: #B0A89E;
    text-decoration: line-through;
  }
  .price-saving {
    background: #F5EDE8;
    color: #9B7B6A;
    font-size: 13px;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 20px;
  }

  /* ── CHECKOUT SECTION ── */
  .checkout-section {
    background: #fff;
    border: 1px solid #E2DDD7;
    border-radius: 10px;
    overflow: hidden;
    margin: 40px 0;
  }
  .checkout-header {
    background: #9B7B6A;
    padding: 20px 28px;
    text-align: center;
  }
  .checkout-header-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 4px;
  }
  .checkout-header-sub { font-size: 14px; color: rgba(255,255,255,0.8); }
  .checkout-body { padding: 28px; }
  .checkout-guarantee {
    display: flex;
    align-items: center;
    gap: 14px;
    background: #F5EDE8;
    border-radius: 6px;
    padding: 16px 20px;
    margin-bottom: 24px;
  }
  .guarantee-icon { font-size: 28px; flex-shrink: 0; }
  .guarantee-text { font-size: 14px; color: #3D2B22; line-height: 1.5; }
  .guarantee-text strong { display: block; font-size: 15px; color: #0F0F0F; margin-bottom: 2px; }
  .checkout-trust {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }
  .trust-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: #52504D;
    font-weight: 500;
  }
  .checkout-iframe-wrap {
    border-radius: 8px;
    overflow: hidden;
    background: #FAFAF7;
    min-height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .checkout-placeholder {
    text-align: center;
    padding: 40px;
    color: #9B9590;
  }
  .checkout-placeholder .placeholder-icon { font-size: 40px; margin-bottom: 12px; }
  .checkout-placeholder p { font-size: 14px; }

  /* ── ORDER BUMP ── */
  .order-bump {
    background: #FFFDF4;
    border: 2px dashed #D4A853;
    border-radius: 8px;
    padding: 20px 22px;
    margin: 16px 0 0;
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }
  .bump-checkbox {
    width: 22px; height: 22px;
    background: #D4A853;
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    color: white; font-size: 13px; flex-shrink: 0; margin-top: 2px;
  }
  .bump-content { flex: 1; }
  .bump-label {
    font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
    text-transform: uppercase; color: #D4A853; margin-bottom: 4px;
  }
  .bump-title { font-size: 16px; font-weight: 600; color: #0F0F0F; margin-bottom: 6px; }
  .bump-desc { font-size: 14px; color: #52504D; line-height: 1.55; margin-bottom: 8px; }
  .bump-price { font-size: 16px; font-weight: 700; color: #0F0F0F; }
  .bump-price span { color: #9B9590; font-size: 13px; font-weight: 400; margin-left: 4px; }

  /* ── PS ── */
  .ps-section {
    margin-top: 40px;
    padding: 24px 24px;
    background: #F5EDE8;
    border-radius: 6px;
    font-size: 15px;
    color: #3D2B22;
    line-height: 1.65;
  }

  /* ── FOOTER ── */
  .footer {
    background: #1A1A1A;
    color: rgba(255,255,255,0.5);
    text-align: center;
    padding: 28px 20px;
    font-size: 12px;
    line-height: 1.7;
    margin-top: 60px;
  }
  .footer a { color: rgba(255,255,255,0.4); }
`

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* MASTHEAD */}
      <header className="masthead">
        <div className="masthead-logo">The Skin<span>Journal</span></div>
        <nav className="masthead-nav">
          <span>Skincare Science</span>
          <span>Anti-Aging</span>
          <span>Nutrition</span>
          <span>Wellness</span>
        </nav>
      </header>

      {/* ARTICLE */}
      <main className="article-wrap">

        {/* HEADER */}
        <header className="article-header">
          <div className="category-tag">Skincare Science</div>
          <h1 className="article-title">
            Scientists Call It "The Sugar Clock" — And It's The Real Reason Your Skin Is Ageing Faster Than You Are
          </h1>
          <p className="article-subtitle">
            It's not collagen loss. It's not genetics. It's a process happening silently inside your skin every single day — and the products on your bathroom shelf cannot reach it.
          </p>
          <div className="byline">
            <img
              src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=84&q=80&auto=format&fit=crop&crop=face"
              alt="Sarah Mitchell"
              className="byline-avatar"
            />
            <div className="byline-text">
              <div>
                <strong>Sarah Mitchell</strong>
                <span className="byline-dot">·</span>
                <span>Nutrition Researcher & Health Writer</span>
              </div>
              <div>
                <span>21 April 2025</span>
                <span className="byline-dot">·</span>
                <span>8 min read</span>
                <span className="byline-dot">·</span>
                <span>Reviewed by a certified nutritionist</span>
              </div>
            </div>
            <div className="share-icons">
              <div className="share-icon">𝕏</div>
              <div className="share-icon">f</div>
            </div>
          </div>
        </header>

        {/* HERO IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1400&q=85&auto=format&fit=crop&crop=face"
          alt="Woman examining her skin in natural light"
          className="hero-image"
        />
        <p className="image-caption">The morning light doesn't lie. And somewhere around 50, a lot of women start avoiding it.</p>

        {/* BODY */}
        <div className="body-text">

          <p>
            Last summer, I went to Mallorca with my best friend. Two weeks, first real holiday in four years, sun on our faces. We took about three hundred photos between us over the fortnight. I came home and deleted two hundred and sixty-three of them.
          </p>

          <p>
            Not because I looked terrible. Because I didn't recognise myself. There's a specific kind of disorientation that happens when you see a photo of someone who looks like your mum — and slowly realise it's you. It doesn't feel like vanity when it happens. It feels like grief.
          </p>

          <p>
            I'd been in my early fifties for two years by then. I'd made peace with getting older — genuinely. I'd earned every year. But there's a difference between ageing and crumbling. And my skin was crumbling in a way that didn't feel proportionate to how I actually felt inside.
          </p>

          <p>
            The jawline specifically. That was the thing that got me. Not the lines around my eyes — I could live with those. It was the way the lower face had lost its definition. The softening. The way it photographed ten years older than I felt. My jaw at 46 looked nothing like my jaw at 52. Six years. Two completely different faces.
          </p>

          <p>
            I want to tell you about the three years I spent trying to fix it — and more importantly, what I found when I finally stopped listening to the skincare industry and started reading the actual research.
          </p>

          <hr className="section-rule" />

          <h2 className="section-heading">The Skincare Phase: £600 and Absolutely Nothing to Show For It</h2>

          <p>
            I am not the kind of person who falls for marketing easily. I've worked in health research for over a decade. I read ingredients lists. I know the difference between a clinical claim and a cosmetic one.
          </p>

          <p>
            And I still spent roughly £600 over three years on skincare that didn't move the needle.
          </p>

          <p>
            It started with the Boots No7 Protect & Perfect Intense Advanced. Then the Clarins Double Serum, because three of my friends swore by it. Then a proper vitamin C serum — the one that comes in a brown glass bottle and costs £68 and you use three drops and feel virtuous about it. Then retinol, which made my skin peel for six weeks and left it looking more fragile, not less. Then the collagen supplements — the ones with the marine collagen and the vitamins, two per day with water, which I did for six months without missing a single day.
          </p>

          <p>
            My dermatologist — who charges £180 a consultation — looked at my face and said the same thing every time: "It's a natural part of ageing. We can discuss filler if the volume loss bothers you." She wasn't unkind. She just didn't have anything else to offer.
          </p>

          <img
            src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=80&auto=format&fit=crop"
            alt="Skincare products on a bathroom shelf"
            className="inline-image"
            style={{ maxHeight: '300px' }}
          />
          <p className="image-caption">The skincare shelf tells a story. Mine told the story of someone trying very hard and getting very little back.</p>

          <p>
            I wasn't doing anything wrong. I had a legitimate 8-step morning routine. I applied everything in the right order, waited thirty seconds between layers, used SPF every single day. My skin was well-cared for.
          </p>

          <p>
            It was still ageing at a pace that felt completely out of proportion to how I was looking after it.
          </p>

          <p>
            Then I started reading a different kind of research.
          </p>

          <hr className="section-rule" />

          <h2 className="section-heading">The Discovery That Changed How I Think About Skin</h2>

          <p>
            I want to be careful here, because I'm not in the habit of calling things "discoveries" or using dramatic language. But what I found genuinely changed my understanding of why skin ages the way it does.
          </p>

          <p>
            I was going through peer-reviewed research — specifically, I was trying to understand why collagen supplementation often disappoints people when the studies seem to suggest it should work — and I came across a body of research on something called glycation.
          </p>

          <p>
            I'd heard the word before. It gets mentioned occasionally in high-end skincare circles. But I'd never seen it properly explained in a way that made its practical implications clear. So I went deeper.
          </p>

          <p>
            What I found was this: glycation is almost certainly a more significant driver of visible skin ageing than collagen loss. And it's completely invisible in the conversation we're all having about skincare.
          </p>

          <div className="callout">
            <div className="callout-label">Why This Matters</div>
            <p>
              Glycation research has been published in dermatology and biochemistry journals since the early 1990s. It's not fringe science. It's peer-reviewed, replicated, and well-understood in academic circles. The question of why it hasn't filtered into mainstream skincare advice is worth asking.
            </p>
          </div>

          <hr className="section-rule" />

          <h2 className="section-heading">What Glycation Actually Is (And Why Nothing in Your Bathroom Touches It)</h2>

          <p>
            Here's the process, in plain terms.
          </p>

          <p>
            Every time you eat something that converts to glucose — and this means bread, pasta, rice, fruit, anything starchy or sweet — some of that glucose enters your bloodstream. Most of it is used for energy. But a small percentage of it latches onto proteins throughout your body. Including your collagen.
          </p>

          <p>
            When glucose binds to collagen, it creates something called Advanced Glycation End-Products. AGEs. The name is oddly literal: they are end-products of glycation, and they make you look aged.
          </p>

          <p>
            Here's what AGEs actually do to your skin: they cause collagen fibres to cross-link with each other abnormally. Instead of smooth, flexible, independent fibres that can move and spring back, you end up with tangled, rigid, brittle bundles. Think of the difference between a brand-new elastic band and one that's been sitting in a drawer for three years. The structure is the same. The function is completely different.
          </p>

          {/* GLYCATION DIAGRAM */}
          <div className="diagram">
            <div className="diagram-title">How Glycation Ages Your Skin</div>
            <div className="diagram-steps">
              <div className="diagram-step">
                <div className="diagram-step-icon">🍞</div>
                <div className="diagram-step-label">Sugar / Glucose</div>
                <div className="diagram-step-desc">Enters bloodstream after eating carbohydrates</div>
              </div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-step bad">
                <div className="diagram-step-icon">⚠️</div>
                <div className="diagram-step-label">Glycation Occurs</div>
                <div className="diagram-step-desc">Glucose bonds to collagen fibres, forming AGEs</div>
              </div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-step bad">
                <div className="diagram-step-icon">🔗</div>
                <div className="diagram-step-label">Fibres Cross-Link</div>
                <div className="diagram-step-desc">Collagen becomes stiff, rigid, loses elasticity</div>
              </div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-step bad">
                <div className="diagram-step-icon">📉</div>
                <div className="diagram-step-label">Visible Ageing</div>
                <div className="diagram-step-desc">Sagging jaw, deeper lines, loss of firmness</div>
              </div>
            </div>
          </div>

          <p>
            That rigidity is the sagging you see. The deepening lines. The loss of that subtle bounce that younger skin has. It isn't that your collagen is disappearing. It's that it's being chemically stiffened from the inside — progressively, cumulatively, every single day.
          </p>

          <p>
            And here's the crucial part: no topical product can reverse this. Not serums, not retinol, not collagen creams. They don't penetrate to the dermal layer where glycation happens. That's not a criticism of those products — it's basic skin biology. The dermis sits below the epidermis, below the layers that any topical application can reach.
          </p>

          <div className="pull-quote">
            <p>"The skincare industry talks about collagen loss because it can sell you collagen. It doesn't talk about glycation because you can't fix a systemic process with a topical cream."</p>
            <cite>— From the research notes</cite>
          </div>

          <p>
            Which meant that every product I'd been faithfully applying for three years was doing something — but not addressing the actual mechanism behind why my face looked the way it did.
          </p>

          <hr className="section-rule" />

          <h2 className="section-heading">The Research That Actually Offered a Solution</h2>

          <p>
            Once I understood glycation, I needed to understand whether anything could address it.
          </p>

          <p>
            I found a 2021 study from a team of Japanese dermatologists who had been investigating the comparatively slow rate of visible skin ageing in certain rural populations in Japan. They were specifically interested in whether traditional botanical medicine — herbs that had been used for centuries in Japanese and Korean practice — had measurable anti-glycation properties.
          </p>

          <p>
            What they found was that three specific plant compounds had not only the ability to inhibit new AGE formation, but to support the breakdown of existing glycation damage. These weren't obscure compounds. They were things that existed in supplement form, had safety data behind them, and were available to anyone who knew to look for them.
          </p>

          <img
            src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=900&q=80&auto=format&fit=crop"
            alt="Woman looking at her clear glowing skin"
            className="inline-image"
            style={{ maxHeight: '360px' }}
          />
          <p className="image-caption">What improving collagen quality from the inside actually looks like — not a filter, not a procedure.</p>

          <h2 className="section-heading">The Three Compounds</h2>

          <p>
            I want to be specific here, because the specificity is the point. This isn't "eat more antioxidants" advice. It's three named compounds, taken in a specific combination, at specific doses.
          </p>

          <div className="ingredients-grid">

            <div className="ingredient-card">
              <img
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80&auto=format&fit=crop"
                alt="Japanese Knotweed plant"
                className="ingredient-img"
              />
              <div className="ingredient-body">
                <div className="ingredient-num">Compound 01</div>
                <div className="ingredient-name">Japanese Knotweed Extract</div>
                <p className="ingredient-desc">
                  Contains resveratrol in the concentrated form that actually matters. Not the trace amounts found in red wine — the extracted, standardised form. Published research shows it activates SIRT1, an enzyme that directly inhibits the formation of AGEs at the cellular level. It works upstream, preventing glycation from occurring rather than dealing with the aftermath.
                </p>
                <div className="ingredient-badge">✓ Anti-glycation enzyme activation</div>
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
                  Delivers a rare combination of Omega-7 fatty acids and carotenoids that works differently to the first compound. Where knotweed prevents AGE formation, sea buckthorn addresses the structural damage — restoring the lipid matrix of the dermis, the scaffolding that gives skin its volume and softness. This is the compound responsible for the "plumping" effect that people report. Not surface hydration. Structural restoration.
                </p>
                <div className="ingredient-badge">✓ Dermal lipid matrix restoration</div>
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
                  This is the one that made me do a double-take when I first saw the research. A randomised, double-blind, placebo-controlled trial — the gold standard — found that women taking standardised maritime pine bark extract daily for 12 weeks showed significant improvements in skin elasticity and measurable reductions in surface roughness. Not marginal. Statistically significant. It works by reducing the oxidative stress that accelerates glycation, and by supporting the cross-link repair process directly.
                </p>
                <div className="ingredient-badge">✓ RCT-supported skin elasticity improvement</div>
              </div>
            </div>

          </div>

          <p>
            The reason these three work as a combination rather than individually is that they hit glycation from three different angles simultaneously: prevention, structural repair, and oxidative protection. And because all three are taken orally, they reach the dermis through your bloodstream — the only route that actually gets there.
          </p>

          <hr className="section-rule" />

          <h2 className="section-heading">What I Did With This Information</h2>

          <p>
            I spent four months working out the practical protocol. The exact doses — not the amounts that appear on average supplement packaging, but the amounts that correspond to the study dosages that showed results. The timing. The foods that naturally support anti-glycation (there are twelve of them that are genuinely useful) and the foods that accelerate glycation even when you're doing everything else right (including several that most people consider healthy).
          </p>

          <p>
            I put everything into a protocol guide — every piece of information you need to actually implement this, with nothing left vague. I called it The Glycation Reversal Protocol.
          </p>

          {/* INSIDE BOX */}
          <div className="inside-box">
            <div className="inside-box-title">What's Inside The Glycation Reversal Protocol</div>
            <div className="inside-box-subtitle">Instant PDF download · 30 pages · No fluff</div>

            <div className="inside-item">
              <div className="inside-check">✓</div>
              <div className="inside-item-text">
                <strong>The complete glycation science</strong> — explained clearly, not oversimplified. Understand exactly what's happening in your skin and why conventional skincare can't address it.
              </div>
            </div>
            <div className="inside-item">
              <div className="inside-check">✓</div>
              <div className="inside-item-text">
                <strong>Exact doses for all three compounds</strong> — the specific amounts that match study dosages, not the lower amounts on average supplement packets. Plus which brands to trust and where to find them.
              </div>
            </div>
            <div className="inside-item">
              <div className="inside-check">✓</div>
              <div className="inside-item-text">
                <strong>The daily protocol sequence</strong> — not a list of supplements to take whenever. A specific daily routine with timing built in, designed around absorption optimisation.
              </div>
            </div>
            <div className="inside-item">
              <div className="inside-check">✓</div>
              <div className="inside-item-text">
                <strong>The anti-glycation food list</strong> — 12 foods that actively fight AGE formation, and 7 foods that look healthy but silently accelerate glycation. Including one that most women eat every morning.
              </div>
            </div>
            <div className="inside-item">
              <div className="inside-check">✓</div>
              <div className="inside-item-text">
                <strong>14-day visible results tracker</strong> — exactly what to look for and when. Most women notice the first changes between day 9 and day 14.
              </div>
            </div>

            <div className="inside-price-row">
              <div className="price-main">£17</div>
              <div className="price-was">£47</div>
              <div className="price-saving">Launch price — today only</div>
            </div>
          </div>

          <p>
            I priced it at £17 because I didn't want cost to be the reason someone is still standing in front of a bathroom mirror in six months wondering what happened to her face. That's less than a single sheet mask from Space NK. It's a third of what I spent on a collagen supplement that did nothing.
          </p>

          <hr className="section-rule" />

          {/* TESTIMONIALS */}
          <div className="testimonials">
            <div className="testimonials-heading">What Readers Are Saying</div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "I'd genuinely given up. I thought I just had bad genetics for ageing. Three weeks in and my husband asked if I'd had something done. I haven't. I've just finally stopped working on the wrong thing."
              </p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=72&q=80&auto=format&fit=crop&crop=face" alt="Diane" className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">Diane M.</div>
                  <div className="testimonial-detail">54, Leeds</div>
                </div>
                <div className="verified-badge">✓ Verified reader</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "The food list was a genuine shock. I'd been eating one of the 'accelerator' foods for breakfast literally every day thinking I was doing something good. No wonder nothing was improving. Changed that one thing and I noticed a difference within a week."
              </p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=72&q=80&auto=format&fit=crop&crop=face" alt="Caroline" className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">Caroline T.</div>
                  <div className="testimonial-detail">49, Manchester</div>
                </div>
                <div className="verified-badge">✓ Verified reader</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "I've spent thousands on anti-aging and never once felt like I understood what I was actually trying to fix. This is the first thing I've read that made me feel like I finally understood the problem. The protocol is simple. The results after two weeks were real."
              </p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=72&q=80&auto=format&fit=crop&crop=face" alt="Janet" className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">Janet K.</div>
                  <div className="testimonial-detail">57, Edinburgh</div>
                </div>
                <div className="verified-badge">✓ Verified reader</div>
              </div>
            </div>
          </div>

          <hr className="section-rule" />

          {/* CHECKOUT */}
          <div className="checkout-section">
            <div className="checkout-header">
              <div className="checkout-header-title">Get Instant Access — £17</div>
              <div className="checkout-header-sub">Delivered to your inbox within 2 minutes of purchase</div>
            </div>
            <div className="checkout-body">

              <div className="checkout-guarantee">
                <div className="guarantee-icon">🛡️</div>
                <div className="guarantee-text">
                  <strong>30-Day Money-Back Guarantee</strong>
                  Follow the protocol for 30 days. If you don't see a visible difference, email for a full refund. No questions, no hoops.
                </div>
              </div>

              <div className="checkout-trust">
                <div className="trust-item">🔒 Secure checkout</div>
                <div className="trust-item">📧 Instant delivery</div>
                <div className="trust-item">✓ 30-day guarantee</div>
                <div className="trust-item">💳 One-time payment</div>
              </div>

              {/* WHOP CHECKOUT EMBED */}
              <div className="checkout-iframe-wrap">
                <div className="checkout-placeholder">
                  <div className="placeholder-icon">🛒</div>
                  <p><strong>Whop checkout loads here</strong></p>
                  <p>Replace this with your Whop plan embed once the product is live in Whop.</p>
                </div>
              </div>

              {/* ORDER BUMP */}
              <div className="order-bump">
                <div className="bump-checkbox">✓</div>
                <div className="bump-content">
                  <div className="bump-label">⚡ Special one-time offer — add to your order</div>
                  <div className="bump-title">7-Day Glycation Reset Meal Plan</div>
                  <p className="bump-desc">
                    Every meal for the first 7 days mapped out — exactly what to eat to put your body into full anti-glycation mode before the supplements fully kick in. Every macro balanced, UK and US ingredient swaps included, complete shopping list. Women who combine this with the protocol in week one see results significantly faster.
                  </p>
                  <div className="bump-price">+ £27 <span>Added to your order automatically above</span></div>
                </div>
              </div>

            </div>
          </div>

          {/* P.S. */}
          <div className="ps-section">
            <strong>P.S.</strong> — I know you've probably bought something like this before and it didn't deliver. So did I — multiple times. The difference here isn't the promise. It's the mechanism. You're not applying something to the surface. You're addressing the actual biological process that's causing your skin to look the way it does. That changes everything. £17. 30-day guarantee. If it doesn't work, you get your money back.
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 The Skin Journal · All rights reserved</p>
        <p style={{ marginTop: '8px' }}>
          <a href="#">Privacy Policy</a> · <a href="#">Terms</a> · <a href="#">Contact</a> · <a href="#">Disclaimer</a>
        </p>
        <p style={{ marginTop: '12px', maxWidth: '600px', margin: '12px auto 0' }}>
          Disclaimer: The information contained in this article is for educational purposes only. It is not intended as medical advice. Results vary between individuals. Always consult your GP before starting any new supplement protocol.
        </p>
      </footer>
    </>
  )
}
