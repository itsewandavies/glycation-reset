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
    letter-spacing: -0.3px;
    color: #1A1A1A;
  }
  .masthead-logo span { color: #9B7B6A; }

  .article-wrap {
    max-width: 780px;
    margin: 0 auto;
    padding: 0 24px 100px;
  }

  .article-header { padding: 48px 0 32px; }

  .article-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(32px, 6vw, 52px);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.6px;
    color: #0F0F0F;
    margin-bottom: 20px;
  }

  .article-subtitle {
    font-size: 19px;
    line-height: 1.65;
    color: #52504D;
    font-weight: 400;
    margin-bottom: 32px;
  }

  .body-text p {
    margin-bottom: 24px;
    font-size: 17px;
    line-height: 1.8;
    color: #2A2826;
  }

  .body-text p:first-letter {
    font-size: 17px;
  }

  .body-text em {
    font-style: italic;
    color: #2A2826;
  }

  .body-text strong {
    font-weight: 600;
    color: #0F0F0F;
  }

  .section-heading {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 28px;
    font-weight: 700;
    color: #0F0F0F;
    margin: 48px 0 24px;
    line-height: 1.3;
  }

  .section-rule {
    border: none;
    border-top: 1px solid #E2DDD7;
    margin: 44px 0;
  }

  .pull-quote {
    margin: 36px 0;
    padding: 28px 32px;
    background: #F5EDE8;
    border-left: 4px solid #9B7B6A;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 20px;
    font-style: italic;
    color: #3D2B22;
    line-height: 1.6;
  }

  .hero-image {
    width: 100%;
    height: 480px;
    object-fit: cover;
    display: block;
    margin: 32px 0;
    border-radius: 4px;
  }

  .image-caption {
    font-size: 14px;
    color: #9B9590;
    font-style: italic;
    text-align: center;
    margin: 12px 0 36px;
  }

  .inline-image {
    width: 100%;
    border-radius: 6px;
    margin: 24px 0 12px;
    display: block;
    object-fit: cover;
    max-height: 380px;
  }

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
    min-width: 140px;
    max-width: 180px;
    text-align: center;
    padding: 16px 12px;
    background: #FAFAF7;
    border: 1px solid #E2DDD7;
    border-radius: 6px;
  }

  .diagram-step-icon { font-size: 32px; margin-bottom: 8px; }

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

  .diagram-arrow {
    display: flex;
    align-items: center;
    color: #9B7B6A;
    font-size: 24px;
    padding: 0 8px;
    flex-shrink: 0;
  }

  @media (max-width: 600px) {
    .diagram-steps { flex-direction: column; align-items: center; }
    .diagram-step { max-width: 100%; width: 100%; }
    .diagram-arrow { transform: rotate(90deg); padding: 4px 0; }
  }

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
    height: 220px;
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

  .inside-box {
    background: #fff;
    border: 2px solid #9B7B6A;
    border-radius: 10px;
    padding: 32px;
    margin: 32px 0;
  }

  .inside-box-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 22px;
    font-weight: 700;
    color: #0F0F0F;
    margin-bottom: 8px;
  }

  .inside-box-subtitle { font-size: 14px; color: #9B7B6A; font-weight: 500; margin-bottom: 22px; }

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
    margin-top: 2px;
  }

  .inside-item-text { font-size: 15px; color: #2A2826; line-height: 1.6; }

  .inside-item-text strong { color: #0F0F0F; }

  .inside-price-row {
    margin-top: 28px;
    padding-top: 22px;
    border-top: 1px solid #E2DDD7;
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
  }

  .price-main {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 40px;
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
    padding: 5px 14px;
    border-radius: 20px;
  }

  .checkout-section {
    background: #fff;
    border: 1px solid #E2DDD7;
    border-radius: 10px;
    overflow: hidden;
    margin: 44px 0;
  }

  .checkout-header {
    background: #9B7B6A;
    padding: 24px 28px;
    text-align: center;
  }

  .checkout-header-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 4px;
  }

  .checkout-header-sub { font-size: 14px; color: rgba(255,255,255,0.85); }

  .checkout-body { padding: 32px; }

  .checkout-guarantee {
    display: flex;
    align-items: center;
    gap: 14px;
    background: #F5EDE8;
    border-radius: 6px;
    padding: 18px 22px;
    margin-bottom: 28px;
  }

  .guarantee-icon { font-size: 32px; flex-shrink: 0; }

  .guarantee-text { font-size: 14px; color: #3D2B22; line-height: 1.6; }

  .guarantee-text strong { display: block; font-size: 15px; color: #0F0F0F; margin-bottom: 3px; }

  .checkout-trust {
    display: flex;
    justify-content: center;
    gap: 18px;
    flex-wrap: wrap;
    margin-bottom: 28px;
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
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checkout-placeholder {
    text-align: center;
    padding: 40px;
    color: #9B9590;
  }

  .checkout-placeholder .placeholder-icon { font-size: 44px; margin-bottom: 12px; }

  .checkout-placeholder p { font-size: 14px; }

  .order-bump {
    background: #FFFDF4;
    border: 2px dashed #D4A853;
    border-radius: 8px;
    padding: 20px 22px;
    margin: 20px 0 0;
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

  .bump-desc { font-size: 14px; color: #52504D; line-height: 1.55; margin-bottom: 10px; }

  .bump-price { font-size: 16px; font-weight: 700; color: #0F0F0F; }

  .bump-price span { color: #9B9590; font-size: 13px; font-weight: 400; margin-left: 4px; }

  .ps-section {
    margin-top: 44px;
    padding: 24px 28px;
    background: #F5EDE8;
    border-radius: 6px;
    font-size: 15px;
    color: #3D2B22;
    line-height: 1.7;
  }

  .footer {
    background: #1A1A1A;
    color: rgba(255,255,255,0.5);
    text-align: center;
    padding: 32px 20px;
    font-size: 12px;
    line-height: 1.8;
    margin-top: 80px;
  }

  .footer a { color: rgba(255,255,255,0.4); text-decoration: none; }

  @media (max-width: 600px) {
    .article-wrap { padding: 0 16px 60px; }
    .inside-box { padding: 24px; }
    .checkout-body { padding: 20px; }
  }
`

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <header className="masthead">
        <div className="masthead-logo">The Skin<span>Journal</span></div>
      </header>

      <main className="article-wrap">
        <header className="article-header">
          <h1 className="article-title">
            I Deleted 263 Holiday Photos Because I Couldn't Stand Looking at My Own Face
          </h1>
          <p className="article-subtitle">
            And then I found out why my skin changed so dramatically — and what actually fixes it (spoiler: it's not what you've been buying)
          </p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=85&auto=format&fit=crop&crop=faces"
          alt="Woman looking in mirror with morning light"
          className="hero-image"
        />

        <div className="body-text">

          <p>
            Two years ago I went to Mallorca with my sister for two weeks. First proper holiday in four years. The kind where you actually relax and forget about life for a moment. We took photos constantly. Sun, wine, stupid faces, all of it.
          </p>

          <p>
            I got home and started scrolling through them. And something felt wrong. I kept seeing this woman in the photos. Older. Softer in the face. Specifically in the jawline. That weird deflated look that happens when everything starts to drop a little.
          </p>

          <p>
            It took me a full minute to realize that woman was me.
          </p>

          <p>
            I was 51 in those photos. I'd been 51 when I left. But somewhere between the airport security and coming home, I'd aged five years in my own head. And not in a "I'm maturing gracefully" kind of way. In a "when did my face stop being recognizable to me" kind of way.
          </p>

          <p>
            So I did what any normal person does. I deleted them. Most of them. All except the ones where I was wearing sunglasses or my face wasn't visible. It made me feel slightly better in the moment, which is a terrible way to feel about your own holiday.
          </p>

          <p>
            Then I started avoiding mirrors in bright light. Then I started saying no to social things because I couldn't stand the thought of being photographed. Then one afternoon my son asked why I never smiled in pictures anymore, and I realized I'd somehow slipped into this life where I was just... hiding.
          </p>

          <p>
            Which is not how I'd imagined 51 would feel.
          </p>

          <hr className="section-rule" />

          <h2 className="section-heading">The Three-Year Bathroom Shelf Experiment</h2>

          <p>
            So I started trying to fix it. And I mean *trying*. I wasn't some passive person waiting for things to improve.
          </p>

          <p>
            I bought the fancy vitamin C serum. The one in the brown glass bottle that costs $90 and you use three drops and feel like you're doing something. I did my research. I got the one that's supposedly the most bioavailable version. Used it every single morning without missing a day for eight months.
          </p>

          <p>
            Nothing moved.
          </p>

          <p>
            Then I tried the retinol cream that everyone talks about. Started slow, worked my way up. Got the peeling phase, waited it out, kept going. Six weeks in, my skin looked more fragile, not less. Thinner in the cheeks. Angrier. So I stopped.
          </p>

          <p>
            Then came the collagen supplements. The ones with the peptides you're supposed to drink every morning with water. I did that for six months straight. Cost me about $180. My skin looked exactly the same.
          </p>

          <p>
            My dermatologist — who I was seeing every four months at this point because I was absolutely obsessed with fixing this — kept saying the same thing: "It's a natural part of aging. We can talk about fillers if the volume loss bothers you."
          </p>

          <p>
            Fillers. Like I needed someone to inject my face with... something... to look recognizable to myself.
          </p>

          <p>
            So I did what I always do when I'm frustrated and have internet access at midnight. I went down a research rabbit hole.
          </p>

          <hr className="section-rule" />

          <h2 className="section-heading">The Thing Nobody Tells You</h2>

          <p>
            I found a paper. Just one, initially. A 2019 dermatology study from Japan about why women in certain rural areas seemed to age visibly slower than expected. And it wasn't about genetics or lifestyle or any of the usual suspects.
          </p>

          <p>
            It was about something called glycation.
          </p>

          <p>
            I'd heard the word before. Fancy skincare brands mention it sometimes. But I'd never seen it explained in a way that made me actually understand what was happening.
          </p>

          <p>
            So I kept reading.
          </p>

          <p>
            And the more I read, the more pissed off I got. Because the entire skincare industry was talking about the wrong thing.
          </p>

          <div className="callout">
            <div className="callout-label">Here's What They Don't Tell You</div>
            <p>
              Every wrinkle cream, every serum, every expensive collagen product is trying to fix something at the surface. But the real damage is happening *underneath*, where no topical product can reach. That's not a product failure. That's basic skin biology.
            </p>
          </div>

          <h2 className="section-heading">What Glycation Actually Is</h2>

          <p>
            Every time you eat something that turns into sugar — and this includes bread, pasta, cereal, even fruit — some of that glucose enters your bloodstream. Your body uses most of it for energy. But some of it latches onto the collagen in your skin.
          </p>

          <p>
            When glucose binds to collagen, it creates something called AGEs. Advanced Glycation End-Products. Which is exactly what they sound like — things that make you look aged.
          </p>

          <p>
            Here's what they do: they make collagen fibers stick together in the wrong ways. Instead of smooth, flexible fibers that can move and bounce back, you get tangled, rigid, brittle bundles. Think of the difference between a fresh elastic band and one that's been sitting in a drawer for five years. The structure looks the same. The function is completely different.
          </p>

          <p>
            That's the sagging jaw. That's the lines that get deeper. That's that specific softness that makes you look ten years older.
          </p>

          <p>
            And here's the part that made me want to flip a table: <strong>no topical skincare can fix this.</strong> Not serums. Not retinol. Not collagen creams. Because the collagen in your skin lives in the dermis — the layer under the epidermis. And topical products don't penetrate that far. They can't reach the damage.
          </p>

          <p>
            Which means every single product I'd been faithfully applying was doing... something. But not addressing the actual problem.
          </p>

          <div className="diagram">
            <div className="diagram-title">Why Your Serums Can't Fix This</div>
            <div className="diagram-steps">
              <div className="diagram-step">
                <div className="diagram-step-icon">🍞</div>
                <div className="diagram-step-label">You Eat Sugar</div>
                <div className="diagram-step-desc">Glucose in bloodstream</div>
              </div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-step bad">
                <div className="diagram-step-icon">⚠️</div>
                <div className="diagram-step-label">Glycation Happens</div>
                <div className="diagram-step-desc">In the dermis, deep layer</div>
              </div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-step bad">
                <div className="diagram-step-icon">📉</div>
                <div className="diagram-step-label">You Look Older</div>
                <div className="diagram-step-desc">Sagging, lines, loss of firmness</div>
              </div>
            </div>
          </div>

          <p>
            Your serum reaches: the epidermis (top layer)
          </p>

          <p>
            Glycation happens: in the dermis (middle layer)
          </p>

          <p>
            The math doesn't work.
          </p>

          <hr className="section-rule" />

          <h2 className="section-heading">So What Actually Fixes This</h2>

          <p>
            Once I understood that glycation was the real problem, I had to find out if anything could actually address it.
          </p>

          <p>
            I started reading everything. Studies from Japan, Korea, Europe. Botanical research. Nutritional biochemistry. Anything that looked at compounds that could either prevent glycation from happening or help your body break down the damage that's already there.
          </p>

          <p>
            And I found three.
          </p>

          <p>
            Three specific compounds that, when taken together, address glycation from three different angles. Prevention. Structural repair. Oxidative protection.
          </p>

          <p>
            All three are things you take orally. Which means they actually reach the dermis. Where the problem is.
          </p>

          <div className="ingredients-grid">

            <div className="ingredient-card">
              <img
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80&auto=format&fit=crop"
                alt="Japanese Knotweed"
                className="ingredient-img"
              />
              <div className="ingredient-body">
                <div className="ingredient-num">Compound 01</div>
                <div className="ingredient-name">Japanese Knotweed Extract</div>
                <p className="ingredient-desc">
                  Contains a specific form of resveratrol that works at the cellular level. It activates an enzyme that literally stops new AGEs from forming. Think of it as putting a barrier between the glucose and your collagen. It works upstream, before the damage even happens.
                </p>
                <div className="ingredient-badge">✓ Prevents new glycation</div>
              </div>
            </div>

            <div className="ingredient-card">
              <img
                src="https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=800&q=80&auto=format&fit=crop"
                alt="Sea Buckthorn berries"
                className="ingredient-img"
              />
              <div className="ingredient-body">
                <div className="ingredient-num">Compound 02</div>
                <div className="ingredient-name">Sea Buckthorn</div>
                <p className="ingredient-desc">
                  This one works differently. It restores the lipid structure underneath your skin — the scaffolding that makes skin plump and soft. When the matrix breaks down (which glycation does), your skin loses volume and starts sagging. This rebuilds that. It's why women who take this report that their face starts looking... fuller. Less deflated.
                </p>
                <div className="ingredient-badge">✓ Restores skin structure</div>
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
                  There's an actual clinical trial on this one. Double-blind, placebo-controlled. Women took this for 12 weeks and showed real improvements in skin elasticity. Not marginal. Measurable. It works by reducing the oxidative stress that speeds up glycation, and it helps your body break down existing AGE damage.
                </p>
                <div className="ingredient-badge">✓ Clinically proven elasticity improvement</div>
              </div>
            </div>

          </div>

          <p>
            The reason these three work together is that they're hitting the problem from three different directions at once. You're not just preventing new damage. You're repairing old damage. And you're protecting your skin from future damage.
          </p>

          <p>
            And because you're taking them orally, they're reaching your dermis through your bloodstream. Not sitting on the surface hoping they can penetrate seven layers of skin like your serums are.
          </p>

          <hr className="section-rule" />

          <h2 className="section-heading">What I Actually Built</h2>

          <p>
            I spent four months working out the protocol. Exact doses — not the weak amounts you see on random supplements, but the actual amounts from the studies that showed results. The timing that matters. The foods that help and the ones that make it worse (and trust me, there are some "healthy" foods that are absolutely sabotaging you).
          </p>

          <p>
            I turned everything into a guide. The Glycation Reversal Protocol. 30 pages. Everything you need to actually do this. Nothing vague. Nothing left out.
          </p>

          <div className="inside-box">
            <div className="inside-box-title">What You're Getting</div>
            <div className="inside-box-subtitle">Instant PDF download · Everything included</div>

            <div className="inside-item">
              <div className="inside-check">✓</div>
              <div className="inside-item-text">
                <strong>The actual science explained clearly</strong> — not dumbed down, not overly technical. You'll understand exactly what's happening and why conventional skincare doesn't touch it.
              </div>
            </div>

            <div className="inside-item">
              <div className="inside-check">✓</div>
              <div className="inside-item-text">
                <strong>Exact doses for all three compounds</strong> — the specific amounts that match the studies, plus which brands actually work and where to find them.
              </div>
            </div>

            <div className="inside-item">
              <div className="inside-check">✓</div>
              <div className="inside-item-text">
                <strong>Your daily protocol</strong> — not a list of things to take whenever. A specific daily routine with timing built in so everything absorbs properly.
              </div>
            </div>

            <div className="inside-item">
              <div className="inside-check">✓</div>
              <div className="inside-item-text">
                <strong>The food list that actually matters</strong> — which 12 foods fight glycation and which 7 "healthy" foods you've probably been eating daily that make it worse.
              </div>
            </div>

            <div className="inside-item">
              <div className="inside-check">✓</div>
              <div className="inside-item-text">
                <strong>The 14-day results tracker</strong> — exactly what to look for and when. Most women see the first visible changes between day 9 and day 14.
              </div>
            </div>

            <div className="inside-price-row">
              <div className="price-main">$19</div>
              <div className="price-was">$49</div>
              <div className="price-saving">Early access price</div>
            </div>
          </div>

          <p>
            Nineteen dollars. I'm not making this expensive. I'm not turning it into a course with upsells and email funnels. Nineteen dollars because I don't want the price to be the reason you're still standing in front of a mirror in three months wondering what the hell happened to your face.
          </p>

          <p>
            That's one fancy coffee. Less than you'd spend on a single sheet mask from Sephora.
          </p>

          <hr className="section-rule" />

          <h2 className="section-heading">The Reality Check</h2>

          <p>
            I know what you're thinking. You've bought things like this before. Supplements, protocols, guides. You've probably spent more than nineteen dollars on things that promised to fix your skin and did absolutely nothing.
          </p>

          <p>
            I get it. I did too. So here's the difference.
          </p>

          <p>
            You weren't working on the wrong thing because the product was bad. You were working on the wrong thing because you were trying to fix glycation by applying stuff to the surface. That doesn't work. It's not your fault. The entire skincare industry is built on this lie.
          </p>

          <p>
            But now you know what's actually happening. And you know what actually fixes it. So you're not guessing anymore. You're addressing the mechanism.
          </p>

          <p>
            That changes everything.
          </p>

          <div className="pull-quote">
            You're not buying skincare. You're buying an actual explanation for why your face changed, and the protocol to reverse it.
          </div>

          <hr className="section-rule" />

          {/* CHECKOUT */}
          <div className="checkout-section">
            <div className="checkout-header">
              <div className="checkout-header-title">Get Instant Access</div>
              <div className="checkout-header-sub">You'll have it in your inbox in 2 minutes</div>
            </div>
            <div className="checkout-body">

              <div className="checkout-guarantee">
                <div className="guarantee-icon">🛡️</div>
                <div className="guarantee-text">
                  <strong>60-Day Money-Back Guarantee</strong>
                  Follow the protocol for 60 days. If your skin doesn't visibly improve — if your jawline hasn't tightened, if the lines haven't softened, if you're not getting comments about how well you look — email for a full refund. I mean it. No questions. No shame.
                </div>
              </div>

              <div className="checkout-trust">
                <div className="trust-item">✓ Instant access</div>
                <div className="trust-item">✓ One-time payment</div>
                <div className="trust-item">✓ 60-day guarantee</div>
                <div className="trust-item">✓ Encrypted checkout</div>
              </div>

              <div className="checkout-iframe-wrap">
                <div className="checkout-placeholder">
                  <div className="placeholder-icon">🛒</div>
                  <p><strong>Whop checkout loads here</strong></p>
                  <p>Your secure payment form</p>
                </div>
              </div>

              <div className="order-bump">
                <div className="bump-checkbox">✓</div>
                <div className="bump-content">
                  <div className="bump-label">One-time offer — add this to your order</div>
                  <div className="bump-title">7-Day Glycation Reset Meal Plan</div>
                  <p className="bump-desc">
                    Every meal mapped for the first week to put your body into full anti-glycation mode. All the macros balanced. Shopping list included. UK, US, AU, and Canadian ingredient swaps. Women who combine this with the protocol see results faster.
                  </p>
                  <div className="bump-price">+ $27 <span>Add to order above</span></div>
                </div>
              </div>

            </div>
          </div>

          {/* P.S. */}
          <div className="ps-section">
            <strong>P.S.</strong> — I get that you're skeptical. You should be. But here's what I want you to consider: you've already proven that skincare doesn't work. You've spent the money. You've done the steps. You've applied the serums. And your face still looks the way it looks. So what do you actually have to lose by trying something that addresses the actual problem instead of the symptom? Sixty days. If it doesn't work, you get your money back. But I'm betting your mirror is going to tell a different story.
          </div>

        </div>
      </main>

      <footer className="footer">
        <p>© 2025 The Skin Journal</p>
        <p style={{ marginTop: '8px' }}>
          <a href="#">Disclaimer</a> · <a href="#">Privacy</a> · <a href="#">Contact</a>
        </p>
      </footer>
    </>
  )
}
