'use client'

const css = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #fff;
    color: #1a1a1a;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    font-size: 18px;
    line-height: 1.75;
    font-weight: 400;
  }

  /* TRENDING BAR */
  .trending-bar {
    background: #c0392b;
    color: #fff;
    text-align: center;
    padding: 11px 16px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.4px;
  }

  /* BREADCRUMB */
  .breadcrumb {
    max-width: 800px;
    margin: 0 auto;
    padding: 11px 20px;
    font-size: 13px;
    color: #888;
  }

  .breadcrumb a { color: #888; text-decoration: none; }

  /* ARTICLE WRAP */
  .article-wrap {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px 100px;
  }

  /* HEADLINES */
  .expert-h {
    font-size: clamp(22px, 4vw, 32px);
    font-weight: 800;
    color: #1a1a1a;
    line-height: 1.22;
    margin-bottom: 18px;
    font-family: Georgia, 'Times New Roman', serif;
  }

  .sub-h {
    font-size: clamp(17px, 2.8vw, 22px);
    font-weight: 600;
    color: #222;
    line-height: 1.4;
    margin-bottom: 20px;
    font-family: Georgia, 'Times New Roman', serif;
  }

  /* RATING + BYLINE */
  .meta-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .stars { color: #f0a500; font-size: 17px; letter-spacing: 1px; }
  .rating-count { font-size: 14px; color: #555; font-weight: 600; }

  .byline {
    font-size: 14px;
    color: #777;
    margin-bottom: 28px;
    padding-bottom: 18px;
    border-bottom: 2px solid #e8e8e8;
  }

  /* BODY TEXT */
  .body p {
    margin-bottom: 22px;
    font-size: 18px;
    line-height: 1.78;
    color: #1e1e1e;
  }

  .body strong { font-weight: 700; color: #111; }
  .body em { font-style: italic; }

  /* SECTION HEADINGS */
  .sh {
    font-size: clamp(17px, 2.5vw, 21px);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: #1a1a1a;
    margin: 44px 0 20px;
    padding-top: 20px;
    border-top: 3px solid #c0392b;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  /* HERO IMAGE */
  .hero-img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    display: block;
    margin: 26px 0 10px;
  }

  .img-cap {
    font-size: 13px;
    color: #999;
    font-style: italic;
    text-align: center;
    margin-bottom: 34px;
  }

  /* INLINE IMG */
  .inline-img {
    width: 100%;
    max-height: 320px;
    object-fit: cover;
    display: block;
    margin: 22px 0 10px;
  }

  /* YELLOW CALLOUT */
  .callout-y {
    background: #fff9e6;
    border-left: 5px solid #f0a500;
    padding: 18px 22px;
    margin: 28px 0;
    font-size: 17px;
    line-height: 1.68;
    color: #333;
  }

  .callout-y strong { color: #111; }

  /* RED CALLOUT */
  .callout-r {
    background: #fff2f2;
    border-left: 5px solid #c0392b;
    padding: 18px 22px;
    margin: 28px 0;
    font-size: 17px;
    line-height: 1.68;
    color: #333;
  }

  /* DIVIDER */
  .divider { border: none; border-top: 1px solid #ebebeb; margin: 38px 0; }

  /* SIMPLE LIST */
  .x-list { list-style: none; padding: 0; margin: 0 0 24px; }
  .x-list li {
    padding: 10px 0 10px 30px;
    position: relative;
    border-bottom: 1px solid #f2f2f2;
    font-size: 17px;
    color: #222;
    line-height: 1.6;
  }
  .x-list li:before { content: '✗'; position: absolute; left: 0; color: #c0392b; font-weight: 700; }

  /* COMPOUND BLOCKS */
  .compound {
    background: #f9f9f9;
    border: 1px solid #e8e8e8;
    border-radius: 6px;
    padding: 22px 24px;
    margin-bottom: 18px;
  }
  .compound-num { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #c0392b; margin-bottom: 6px; }
  .compound-name { font-size: 20px; font-weight: 800; color: #1a1a1a; margin-bottom: 10px; }
  .compound-text { font-size: 16px; color: #333; line-height: 1.7; margin-bottom: 12px; }
  .compound-badge {
    display: inline-block;
    background: #eaf6ea;
    border: 1px solid #8dc88d;
    color: #1e6b1e;
    font-size: 12px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 20px;
  }

  /* TESTIMONIALS */
  .testimonial {
    background: #fafafa;
    border: 1px solid #e8e8e8;
    border-radius: 6px;
    padding: 22px 24px;
    margin-bottom: 16px;
  }
  .t-stars { color: #f0a500; font-size: 16px; margin-bottom: 10px; }
  .t-text { font-size: 16px; color: #333; line-height: 1.72; margin-bottom: 14px; font-style: italic; }
  .t-name { font-size: 14px; font-weight: 800; color: #111; }
  .t-detail { font-size: 13px; color: #999; margin-top: 3px; }
  .t-verified { font-size: 12px; color: #1e6b1e; font-weight: 700; margin-top: 5px; }

  /* INSIDE BOX */
  .inside-box {
    background: #f9f9f9;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    padding: 28px 28px;
    margin: 28px 0;
  }
  .inside-title { font-size: 20px; font-weight: 800; color: #1a1a1a; margin-bottom: 5px; }
  .inside-sub { font-size: 14px; color: #999; margin-bottom: 20px; }
  .inside-item { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px; font-size: 16px; color: #333; line-height: 1.65; }
  .i-check { color: #1e6b1e; font-weight: 900; font-size: 17px; flex-shrink: 0; margin-top: 1px; }

  /* PRODUCT BOX */
  .product-box {
    border: 2px solid #1a1a1a;
    border-radius: 8px;
    padding: 36px 32px;
    margin: 40px 0;
    text-align: center;
  }
  .product-title { font-size: 28px; font-weight: 900; color: #1a1a1a; margin-bottom: 6px; font-family: Georgia, serif; }
  .product-sub { font-size: 16px; color: #666; margin-bottom: 24px; }
  .price-red {
    display: inline-block;
    background: #c0392b;
    color: #fff;
    font-size: 40px;
    font-weight: 900;
    padding: 10px 32px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .price-was { font-size: 15px; color: #aaa; text-decoration: line-through; margin-bottom: 22px; }

  .cta-btn {
    display: block;
    background: #27ae60;
    color: #fff;
    font-size: 19px;
    font-weight: 800;
    padding: 19px 32px;
    border-radius: 5px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    width: 100%;
    max-width: 460px;
    margin: 0 auto 14px;
    text-align: center;
    letter-spacing: 0.3px;
    transition: background 0.2s;
  }
  .cta-btn:hover { background: #219a53; }

  .cta-sub { font-size: 13px; color: #aaa; text-align: center; }

  /* URGENCY */
  .urgency {
    background: #fffbea;
    border: 1px solid #f0c040;
    border-radius: 5px;
    padding: 13px 18px;
    margin: 18px 0;
    font-size: 14px;
    color: #7a5a00;
    font-weight: 700;
    text-align: center;
  }

  /* GUARANTEE */
  .guarantee {
    background: #f0faf0;
    border: 1px solid #8dc88d;
    border-radius: 6px;
    padding: 26px 28px;
    margin: 32px 0;
    display: flex;
    gap: 18px;
    align-items: flex-start;
  }
  .g-icon { font-size: 44px; flex-shrink: 0; }
  .g-title { font-size: 19px; font-weight: 800; color: #1a1a1a; margin-bottom: 10px; }
  .g-text { font-size: 16px; color: #333; line-height: 1.72; }

  /* FOOTER */
  .footer {
    background: #111;
    color: rgba(255,255,255,0.38);
    text-align: center;
    padding: 32px 20px;
    font-size: 12px;
    line-height: 1.95;
    margin-top: 70px;
  }
  .footer a { color: rgba(255,255,255,0.28); text-decoration: none; }

  @media (max-width: 600px) {
    body { font-size: 17px; }
    .article-wrap { padding: 0 16px 60px; }
    .product-box { padding: 22px 16px; }
    .guarantee { flex-direction: column; gap: 12px; }
    .inside-box { padding: 20px 18px; }
  }
`

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* TRENDING BAR */}
      <div className="trending-bar">
        ⚡ Trending in &apos;Anti-Aging&apos;
      </div>

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        Home &gt; Anti-Aging &gt; Skin Health
      </div>

      <main className="article-wrap">

        {/* HEADLINE */}
        <h1 className="expert-h">
          Top Dermatologist: &quot;This Is The Real Reason Your Skin Ages Faster After 50 — And Every Serum You&apos;ve Ever Bought Has Been Working On The Wrong Layer&quot;
        </h1>

        <h2 className="sub-h">
          Former skeptic exposes the $89 billion skincare conspiracy — and the silent skin-aging process costing women thousands on products that literally cannot reach the problem
        </h2>

        <div className="meta-row">
          <span className="stars">★★★★★</span>
          <span className="rating-count">4,203 Ratings</span>
        </div>

        <div className="byline">
          Written by Dr. Rachel Kim, MD, FAAD — Board-Certified Dermatologist &nbsp;|&nbsp; Published April 14, 2025 · 9:12 AM EST
        </div>

        <div className="body">

          <p>I&apos;m about to say something that&apos;s going to make the $89 billion skincare industry extremely uncomfortable.</p>

          <p>Because what I&apos;m about to share could cost them billions in lost revenue.</p>

          <p>But I don&apos;t care.</p>

          <p>After 22 years in clinical dermatology — after watching thousands of women spend fortunes on serums, creams, and &quot;revolutionary&quot; treatments that did absolutely nothing for the thing they actually cared about — I&apos;ve had enough.</p>

          <p>If you&apos;re avoiding the mirror because the woman looking back at you doesn&apos;t feel like you anymore...</p>

          <p>If you&apos;ve spent hundreds — maybe thousands — on products promising to turn back the clock, and you&apos;re still seeing that sagging jaw, those deepening lines, that deflated look that crept in somewhere after 50...</p>

          <p><strong>The next 5 minutes could change everything you think you know about your skin.</strong></p>

          <p>My name is Dr. Rachel Kim.</p>

          <p>I&apos;ve been a board-certified dermatologist for 22 years.</p>

          <p>I&apos;ve treated everyone from Hollywood actresses to ordinary women in their 50s and 60s who&apos;ve been quietly suffering — not from disease, but from the crushing disappointment of watching their face change and feeling powerless to stop it.</p>

          <p>And I&apos;m about to expose the dirty secret that keeps women trapped in a cycle of buying products that literally cannot work.</p>

          <p>But first, let me tell you about the moment that changed everything for me...</p>

          <img
            src="https://images.unsplash.com/photo-1527799820374-87091a0df2f6?w=900&q=80&auto=format&fit=crop"
            alt="Woman looking in mirror, concerned about skin"
            className="hero-img"
          />
          <p className="img-cap">The skincare industry doesn&apos;t want you to read this.</p>

          <div className="sh">THE MOMENT THAT CHANGED EVERYTHING</div>

          <p>It was a Sunday morning.</p>

          <p>My mother called me, upset. Not crying — worse than that. That quiet, defeated tone that&apos;s harder to hear than tears.</p>

          <p>&quot;Rachel,&quot; she said, &quot;I think I&apos;ve spent $4,000 trying to fix my skin. Nothing works. I don&apos;t even recognise myself anymore.&quot;</p>

          <p>She was 58. She&apos;d used every product I&apos;d ever recommended. The vitamin C serums. The retinols. The collagen supplements. She&apos;d even done two rounds of microneedling at my clinic — at cost.</p>

          <p>And sitting there on the phone with her, I suddenly realised something that made my stomach drop.</p>

          <p>She wasn&apos;t wrong.</p>

          <p>Nothing <em>had</em> worked.</p>

          <p>Not because I&apos;d given her bad advice. Not because she&apos;d done anything wrong. But because every single thing I&apos;d recommended was working on the wrong part of her skin.</p>

          <p>I hung up. Sat down with three years of dermatology journals I&apos;d been meaning to read. And stayed up until 4am.</p>

          <p>What I found made me want to throw 22 years of training out the window.</p>

          <div className="sh">THE MIND-BLOWING DISCOVERY</div>

          <p>For the next two months, I read everything.</p>

          <p>Every study on skin aging I could find. Called researchers at Harvard and UCL. Dug through biochemistry papers I hadn&apos;t seen since med school.</p>

          <p>And what I found made me genuinely angry.</p>

          <p>The entire $89 billion skincare industry is built on a fundamental lie.</p>

          <p>Not a malicious lie. But a lie by omission that has been costing women thousands of dollars and decades of confidence.</p>

          <p>Here&apos;s what they don&apos;t want you to know:</p>

          <p><strong>The real reason your face changes after 50 has nothing to do with what&apos;s happening at the surface of your skin.</strong></p>

          <p>It&apos;s not collagen loss in the way you&apos;ve been told.</p>

          <p>It&apos;s not dehydration. It&apos;s not sun damage.</p>

          <p>The REAL cause happens deep inside the dermis — the layer <em>underneath</em> your skin — in a process called <strong>glycation</strong>.</p>

          <p>And here&apos;s the part that should make you furious:</p>

          <p><strong>No serum, cream, or topical product can physically reach it.</strong></p>

          <p>Not the $90 vitamin C serum. Not the $180 retinol. Not the £300 &quot;revolutionary peptide complex&quot; your friend sells on Instagram.</p>

          <p>They sit on your epidermis — the top layer of your skin.</p>

          <p>Glycation happens in the dermis — the layer <em>below</em> it.</p>

          <p>These two layers don&apos;t connect. They never meet.</p>

          <div className="callout-y">
            <strong>Let that sink in.</strong> Every topical skincare product you&apos;ve ever bought works on the top layer of your skin. The aging process that&apos;s changing your face happens in the layer below it. They literally cannot meet. This is why nothing has worked — not because you did anything wrong, but because the problem was never explained to you correctly.
          </div>

          <div className="sh">THE REAL ROOT CAUSE OF AGING SKIN</div>

          <p>Think of your skin like a mattress.</p>

          <p>When it&apos;s new, the springs inside are flexible and bouncy. The surface looks smooth and full.</p>

          <p>Now imagine those springs slowly getting coated in a sticky, rigid substance. They stop bouncing back. They lose their shape. And from the outside, the mattress starts to sag.</p>

          <p>That&apos;s exactly what happens to your collagen.</p>

          <p>Every time glucose from food enters your bloodstream, a small amount bonds to your collagen fibers. Scientists call this <strong>glycation</strong>, and the bonds it creates are called <strong>AGEs — Advanced Glycation End-products.</strong></p>

          <p>These AGEs cause your collagen fibers to cross-link abnormally. Instead of flexible, springy fibers that hold their shape, you end up with stiff, rigid, tangled bundles.</p>

          <p>That stiffness is the jaw that&apos;s lost its definition.</p>

          <p>The cheeks that have gone flat.</p>

          <p>The lines that weren&apos;t there five years ago.</p>

          <p>The medical industry has known about this since the 1980s.</p>

          <p><strong>Known about it. And done absolutely nothing with it.</strong></p>

          <p>Why? Because the solution is too simple. Too cheap. And it would put every overpriced skincare brand on earth out of business overnight.</p>

          <p>You can&apos;t sell a $19 glycation fix at Sephora. There&apos;s no margin in it.</p>

          <p>So instead, they keep you on the hamster wheel:</p>

          <p><strong>$90 serum that doesn&apos;t work → Different $90 serum → Upgrade to the &quot;medical-grade&quot; $180 version → Dermatologist consultation → Fillers → Repeat until broke or exhausted.</strong></p>

          <p>It&apos;s genius — if you&apos;re a skincare executive who sees women&apos;s insecurities as a revenue stream.</p>

          <div className="callout-r">
            Sound familiar? If you&apos;ve ever spent $200 on a skincare system from a friend — Rodan + Fields, Arbonne, Monat — and watched it do absolutely nothing for your jaw and cheekbones. This is exactly why. Your friend wasn&apos;t lying. The products weren&apos;t fake. They just can&apos;t physically reach the place where your skin is aging. Nobody told you that. Because nobody who profits from selling you those products wants you to know it.
          </div>

          <div className="sh">THIS BREAKTHROUGH IS PISSING OFF AN ENTIRE INDUSTRY</div>

          <p>Once I understood glycation, I had one question: is there <em>anything</em> that can actually address it?</p>

          <p>I spent six months in the research literature. Biochemistry journals. Botanical studies. Nutritional science papers from Japan and Sweden that had never made it into mainstream dermatology.</p>

          <p>I found three compounds. All oral. All studied specifically for their effect on skin glycation. All reaching the dermis through the only route that works — your bloodstream.</p>

          <p>Because here&apos;s the thing: you can&apos;t put something on top of your skin and hope it reaches the dermis. But take something orally, and it goes straight there through your circulatory system.</p>

          <p>That&apos;s the only delivery method that actually works.</p>

          <div className="compound">
            <div className="compound-num">Compound 01</div>
            <div className="compound-name">Japanese Knotweed Extract</div>
            <p className="compound-text">Contains a concentrated form of resveratrol that activates a specific enzyme documented to block new AGE formation at the cellular level. Works upstream — preventing the damage from happening in the first place, rather than trying to manage the symptoms at the surface. Think of it as a barrier between the glucose in your blood and the collagen in your skin.</p>
            <span className="compound-badge">✓ Blocks new AGE formation</span>
          </div>

          <div className="compound">
            <div className="compound-num">Compound 02</div>
            <div className="compound-name">Sea Buckthorn</div>
            <p className="compound-text">When glycation damages the lipid matrix beneath your skin — the scaffolding that keeps your face looking full — it causes that deflated, hollowed look that no serum can fix. Sea buckthorn restores that structure from within. Women who take it describe their face starting to look fuller. Less sunken. Not a surface effect — actual structural repair from the inside.</p>
            <span className="compound-badge">✓ Restores under-skin structure</span>
          </div>

          <div className="compound">
            <div className="compound-num">Compound 03</div>
            <div className="compound-name">Maritime Pine Bark (Pycnogenol)</div>
            <p className="compound-text">This one has a randomised, double-blind, placebo-controlled trial behind it — the gold standard in clinical research. Women taking it daily for 12 weeks showed <em>statistically significant</em> improvements in skin elasticity and measurable reductions in surface roughness. Not marginal. Significant. The kind of results that are impossible from anything applied topically.</p>
            <span className="compound-badge">✓ RCT-proven elasticity improvement</span>
          </div>

          <img
            src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=80&auto=format&fit=crop"
            alt="Natural supplement compounds"
            className="inline-img"
          />
          <p className="img-cap">All three compounds work orally — the only delivery method that reaches the dermis.</p>

          <div className="sh">THREE WEEKS LATER...</div>

          <p>My mother was my first test case.</p>

          <p>I put her on the protocol in November.</p>

          <p>She called me at Christmas.</p>

          <p>&quot;People keep asking if I&apos;ve had something done,&quot; she said. &quot;My friend thinks I had fillers.&quot;</p>

          <p>She hadn&apos;t.</p>

          <p>She&apos;d just finally been working on the right problem.</p>

          <p>By week 3, her skin felt different — more hydrated, less tight. By week 5, her jawline had visibly improved. By week 12, she looked like a different — better — version of herself.</p>

          <p>I started quietly recommending the protocol to patients.</p>

          <p>The results were consistent enough that I wrote it up as a full clinical guide — every compound, every dose, every brand that delivers therapeutic amounts, and the specific daily sequence that makes all three absorb correctly.</p>

          <p>I&apos;m releasing it to the public at $19. Not $300. Not $89. Nineteen dollars.</p>

          <p>Because this information is too important to sit behind a paywall.</p>

          <hr className="divider" />

          <div className="sh">WHAT WOMEN ARE SAYING</div>

          <div className="testimonial">
            <div className="t-stars">★★★★★</div>
            <p className="t-text">&quot;By week three my husband asked if I&apos;d had something done. I hadn&apos;t. The jawline is genuinely tighter. I avoided mirrors for two years. Now I actually stop to look.&quot;</p>
            <div className="t-name">Pauline H.</div>
            <div className="t-detail">54 · Phoenix, AZ</div>
            <div className="t-verified">✓ Verified Purchase · Reviewed in the United States on March 4, 2025</div>
          </div>

          <div className="testimonial">
            <div className="t-stars">★★★★★</div>
            <p className="t-text">&quot;I&apos;d spent £600 on skincare in the past year. Genuinely nothing moved the needle. A friend recommended this — I was sceptical at $19 but thought why not. By week 4 I got three separate comments about my skin in the same week. Three. I&apos;ve never had that before in my life.&quot;</p>
            <div className="t-name">Sandra K.</div>
            <div className="t-detail">58 · Manchester, UK</div>
            <div className="t-verified">✓ Verified Purchase · Reviewed in the United Kingdom on February 18, 2025</div>
          </div>

          <div className="testimonial">
            <div className="t-stars">★★★★★</div>
            <p className="t-text">&quot;The food list section shocked me. There&apos;s one thing I was eating every morning convinced it was healthy. Changed that one thing plus the protocol and the difference in 10 days was visible. 10 days. I&apos;ve been telling everyone I know.&quot;</p>
            <div className="t-name">Maggie T.</div>
            <div className="t-detail">51 · Vancouver, BC</div>
            <div className="t-verified">✓ Verified Purchase · Reviewed in Canada on January 29, 2025</div>
          </div>

          <div className="testimonial">
            <div className="t-stars">★★★★★</div>
            <p className="t-text">&quot;I&apos;m 63. I genuinely thought I was past the point where anything non-surgical would make a real difference. I almost didn&apos;t buy this. My daughter noticed before I even told her I&apos;d started anything. The lines around my mouth have softened. I don&apos;t know what else to say.&quot;</p>
            <div className="t-name">Debra M.</div>
            <div className="t-detail">63 · Leeds, UK</div>
            <div className="t-verified">✓ Verified Purchase · Reviewed in the United Kingdom on March 11, 2025</div>
          </div>

          <hr className="divider" />

          <div className="sh">WHAT&apos;S INSIDE THE PROTOCOL</div>

          <p>I turned six months of research into a 30-page guide that tells you everything you need to actually do this. Not a general &quot;eat better&quot; plan. An exact protocol with exact doses, exact timing, and the specific brands that deliver therapeutic amounts.</p>

          <div className="inside-box">
            <div className="inside-title">The Glycation Reversal Protocol</div>
            <div className="inside-sub">Instant PDF download · 30 pages · No filler · Written for women 45–65</div>

            <div className="inside-item">
              <span className="i-check">✓</span>
              <span><strong>The complete glycation explanation</strong> — why it happens, why conventional skincare can&apos;t address it, and what the research actually says. Written in plain English, not medical jargon.</span>
            </div>
            <div className="inside-item">
              <span className="i-check">✓</span>
              <span><strong>Exact therapeutic doses for all three compounds</strong> — not the lower amounts on standard supplement packaging. The specific amounts from the studies that showed results, plus the exact brands worth buying.</span>
            </div>
            <div className="inside-item">
              <span className="i-check">✓</span>
              <span><strong>Your daily protocol sequence</strong> — a structured daily routine with timing built in so everything absorbs correctly. Not a list of things to take whenever you remember.</span>
            </div>
            <div className="inside-item">
              <span className="i-check">✓</span>
              <span><strong>The glycation food list</strong> — the 12 foods that actively fight AGE formation and the 7 that accelerate glycation even when you think you&apos;re eating well. One of them is probably in your breakfast right now.</span>
            </div>
            <div className="inside-item">
              <span className="i-check">✓</span>
              <span><strong>14-day visible results tracker</strong> — what to look for and when. Most women notice the first visible changes between day 9 and day 14.</span>
            </div>
          </div>

          <div className="sh">GET THE PROTOCOL NOW</div>

          <div className="product-box">
            <div className="product-title">The Glycation Reversal Protocol</div>
            <div className="product-sub">30-page clinical guide · Instant digital download</div>
            <div className="price-red">$19</div>
            <div className="price-was">Compared to the average $847/year women spend on skincare that can&apos;t reach the problem</div>
            <button className="cta-btn">
              Yes — Get Instant Access Now →
            </button>
            <div className="cta-sub">🔒 Secure checkout · Delivered to your inbox in under 2 minutes · One-time payment</div>
          </div>

          <div className="urgency">
            ⚠️ Due to high demand from this article, we may limit access at this price. The $19 price is not guaranteed beyond today.
          </div>

          <div className="guarantee">
            <div className="g-icon">🛡️</div>
            <div>
              <div className="g-title">The 60-Day Money-Back Guarantee</div>
              <div className="g-text">Follow the protocol for 60 days. If your jawline hasn&apos;t tightened, if the lines haven&apos;t softened, if you&apos;re not getting unsolicited comments about how well you look — email me for a full refund and you keep the guide. No forms. No questions. No awkwardness. I&apos;m that confident that once you&apos;re working on the right problem, you&apos;ll see results you haven&apos;t seen in years.</div>
            </div>
          </div>

          <hr className="divider" />

          <p><strong>P.S.</strong> — You already know that skincare doesn&apos;t fix this. However many serums you&apos;ve tried, however much you&apos;ve spent, your face hasn&apos;t changed the way you wanted. Not because you did anything wrong. Because you were working on the wrong layer. Now you know what the actual problem is. Now you know what addresses it. The protocol is $19 and guaranteed for 60 days. What are you waiting for?</p>

          <div style={{ marginTop: '32px' }}>
            <button className="cta-btn" style={{ maxWidth: '100%' }}>
              Get The Protocol — $19 →
            </button>
          </div>

        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Dr. Rachel Kim MD · All rights reserved</p>
        <p style={{ marginTop: '6px' }}>
          <a href="#">Privacy Policy</a> · <a href="#">Terms</a> · <a href="#">Contact</a> · <a href="#">Disclaimer</a>
        </p>
        <p style={{ marginTop: '14px', maxWidth: '660px', margin: '14px auto 0' }}>
          This article is for informational and educational purposes only and does not constitute medical advice. Individual results vary. The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Always consult your physician before beginning any supplement protocol. Dr. Rachel Kim is a composite persona created for illustrative purposes.
        </p>
      </footer>
    </>
  )
}
