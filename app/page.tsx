'use client'

const css = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #fff;
    color: #1a1a1a;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    font-size: 18px;
    line-height: 1.75;
  }

  .trending-bar {
    background: #c0392b;
    color: #fff;
    text-align: center;
    padding: 11px 16px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.4px;
  }

  .breadcrumb {
    max-width: 800px;
    margin: 0 auto;
    padding: 11px 20px;
    font-size: 13px;
    color: #888;
  }

  .article-wrap {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px 100px;
  }

  .expert-h {
    font-size: clamp(22px, 4vw, 32px);
    font-weight: 800;
    color: #1a1a1a;
    line-height: 1.22;
    margin-bottom: 18px;
    font-family: Georgia, serif;
  }

  .sub-h {
    font-size: clamp(17px, 2.8vw, 22px);
    font-weight: 600;
    color: #222;
    line-height: 1.4;
    margin-bottom: 20px;
    font-family: Georgia, serif;
  }

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

  .body p {
    margin-bottom: 22px;
    font-size: 18px;
    line-height: 1.78;
    color: #1e1e1e;
  }

  .body strong { font-weight: 700; color: #111; }
  .body em { font-style: italic; }

  .sh {
    font-size: clamp(17px, 2.5vw, 21px);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: #1a1a1a;
    margin: 44px 0 20px;
    padding-top: 20px;
    border-top: 3px solid #c0392b;
  }

  .hero-img {
    width: 100%;
    max-height: 420px;
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

  .inline-img {
    width: 100%;
    max-height: 360px;
    object-fit: cover;
    display: block;
    margin: 22px 0 10px;
  }

  .callout-y {
    background: #fff9e6;
    border-left: 5px solid #f0a500;
    padding: 20px 24px;
    margin: 28px 0;
    font-size: 17px;
    line-height: 1.7;
    color: #333;
  }
  .callout-y strong { color: #111; }

  .callout-r {
    background: #fff2f2;
    border-left: 5px solid #c0392b;
    padding: 20px 24px;
    margin: 28px 0;
    font-size: 17px;
    line-height: 1.7;
    color: #333;
  }

  .divider { border: none; border-top: 1px solid #ebebeb; margin: 38px 0; }

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

  /* TESTIMONIAL GRID */
  .t-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin: 32px 0;
  }

  @media (max-width: 600px) {
    .t-grid { grid-template-columns: 1fr; }
  }

  .t-card {
    background: #fafafa;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    padding: 18px 20px;
  }
  .t-stars { color: #f0a500; font-size: 15px; margin-bottom: 8px; }
  .t-text { font-size: 15px; color: #333; line-height: 1.68; margin-bottom: 12px; font-style: italic; }
  .t-author { display: flex; align-items: center; gap: 10px; }
  .t-avatar { width: 38px; height: 38px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
  .t-name { font-size: 13px; font-weight: 800; color: #111; }
  .t-detail { font-size: 12px; color: #999; }
  .t-verified { font-size: 11px; color: #1e6b1e; font-weight: 700; margin-top: 3px; }

  /* FACEBOOK COMMENTS */
  .fb-section {
    background: #f0f2f5;
    border-radius: 10px;
    padding: 20px;
    margin: 36px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }
  .fb-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 18px;
    font-size: 15px;
    font-weight: 700;
    color: #1c1e21;
  }
  .fb-icon { font-size: 22px; }
  .fb-comment {
    display: flex;
    gap: 8px;
    margin-bottom: 14px;
    align-items: flex-start;
  }
  .fb-avatar { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; flex-shrink: 0; background: #d0d0d0; }
  .fb-bubble {
    background: #fff;
    border-radius: 18px;
    padding: 10px 14px;
    max-width: 88%;
    box-shadow: 0 1px 2px rgba(0,0,0,0.08);
  }
  .fb-name { font-size: 13px; font-weight: 700; color: #050505; margin-bottom: 3px; }
  .fb-text { font-size: 14px; color: #1c1e21; line-height: 1.45; }
  .fb-meta { font-size: 12px; color: #65676b; margin-top: 6px; padding-left: 2px; }
  .fb-likes {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    margin-top: 5px;
    font-size: 12px;
    color: #65676b;
    padding-left: 4px;
  }
  .fb-reply { padding-left: 44px; }
  .fb-tag { color: #1877f2; font-weight: 600; }

  /* INSIDE BOX */
  .inside-box {
    background: #f9f9f9;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    padding: 28px;
    margin: 28px 0;
  }
  .inside-title { font-size: 20px; font-weight: 800; color: #1a1a1a; margin-bottom: 5px; }
  .inside-sub { font-size: 14px; color: #999; margin-bottom: 20px; }
  .inside-item { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px; font-size: 16px; color: #333; line-height: 1.65; }
  .i-check { color: #1e6b1e; font-weight: 900; font-size: 17px; flex-shrink: 0; margin-top: 1px; }

  /* OFFER */
  .mini-close {
    background: #1a1a1a;
    color: #fff;
    border-radius: 8px;
    padding: 28px 30px;
    margin: 36px 0;
  }
  .mini-close-quote {
    font-size: 19px;
    line-height: 1.65;
    font-style: italic;
    color: #f5f5f5;
    margin-bottom: 14px;
    font-family: Georgia, serif;
  }
  .mini-close-attr { font-size: 13px; color: #aaa; font-weight: 600; }

  .price-anchor {
    background: #fff9e6;
    border: 1px solid #f0c040;
    border-radius: 8px;
    padding: 22px 26px;
    margin: 28px 0;
  }
  .pa-title { font-size: 17px; font-weight: 800; color: #1a1a1a; margin-bottom: 14px; }
  .pa-row { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #f0e8c0; font-size: 15px; color: #555; }
  .pa-row:last-child { border-bottom: none; }
  .pa-cost { font-weight: 700; color: #c0392b; }
  .pa-total { font-size: 16px; font-weight: 800; color: #1a1a1a; }
  .pa-vs { font-size: 22px; font-weight: 900; color: #27ae60; text-align: center; margin-top: 12px; }

  .product-box {
    border: 2px solid #1a1a1a;
    border-radius: 8px;
    padding: 36px 32px;
    margin: 32px 0;
    text-align: center;
  }
  .product-title { font-size: 28px; font-weight: 900; color: #1a1a1a; margin-bottom: 6px; font-family: Georgia, serif; }
  .product-sub { font-size: 16px; color: #666; margin-bottom: 24px; }
  .price-red {
    display: inline-block;
    background: #c0392b;
    color: #fff;
    font-size: 44px;
    font-weight: 900;
    padding: 10px 36px;
    border-radius: 5px;
    margin-bottom: 8px;
    display: block;
  }
  .price-was { font-size: 15px; color: #aaa; margin-bottom: 24px; }

  .cta-btn {
    display: block;
    background: #27ae60;
    color: #fff;
    font-size: 20px;
    font-weight: 800;
    padding: 20px 32px;
    border-radius: 5px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    width: 100%;
    max-width: 480px;
    margin: 0 auto 14px;
    text-align: center;
    letter-spacing: 0.3px;
    transition: background 0.2s;
    line-height: 1.3;
  }
  .cta-btn:hover { background: #219a53; }
  .cta-sub { font-size: 13px; color: #aaa; text-align: center; }

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

  .transform-img-wrap {
    display: flex;
    gap: 12px;
    margin: 28px 0;
    align-items: stretch;
  }
  .transform-img-wrap img {
    width: 50%;
    border-radius: 6px;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    body { font-size: 17px; }
    .article-wrap { padding: 0 16px 60px; }
    .product-box { padding: 22px 16px; }
    .guarantee { flex-direction: column; gap: 12px; }
    .inside-box { padding: 20px 18px; }
    .mini-close { padding: 20px; }
  }
`

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="trending-bar">⚡ Trending in &apos;Anti-Aging&apos;</div>

      <div className="breadcrumb">Home &gt; Anti-Aging &gt; Skin Health</div>

      <main className="article-wrap">

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

          <p>But I don&apos;t care anymore.</p>

          <p>After 22 years in clinical dermatology — after watching thousands of women spend fortunes on serums, creams, and &quot;revolutionary&quot; treatments that did absolutely nothing for the thing they actually cared about — I&apos;ve had enough.</p>

          <p><strong>The next 5 minutes could change everything you think you know about your skin.</strong></p>

          <img
            src="https://v3b.fal.media/files/b/0a973c0f/svmfYc3hnNwgGNGfoupN3_zgMPH2Fu.png"
            alt="Woman looking at holiday photos on her phone"
            className="hero-img"
          />
          <p className="img-cap">The skincare industry doesn&apos;t want you to read this.</p>

          <div className="sh">DO YOU RECOGNIZE YOURSELF IN ANY OF THESE?</div>

          <p>You went on a vacation. A birthday weekend. A family Christmas. Someone took a photo and showed you the screen, smiling — expecting you to smile back.</p>

          <p>And you felt your stomach drop.</p>

          <p>Because the woman in that photo didn&apos;t look like you. Or at least — didn&apos;t look like the version of you that still lives inside your own head.</p>

          <p>You asked them to retake it. Or you quietly deleted it from your phone later that night when no one was watching.</p>

          <p>Maybe you&apos;ve noticed you&apos;ve gotten very good at positioning yourself in group photos. You angle your chin. You step slightly behind someone. You&apos;ve started offering to be the one who takes the photo so you don&apos;t have to be in it.</p>

          <p>Maybe it&apos;s the Zoom calls. You join a meeting and there you are in the corner of the screen — and you spend the next 40 minutes half-listening, just staring at your own jawline. That specific loss of definition that wasn&apos;t there five years ago. You tried moving your laptop, adjusting the angle, buying a ring light.</p>

          <p>Maybe it was your husband taking a candid photo of you laughing at dinner — genuinely, because he thought you looked beautiful — and showing you the screen. And you saw something completely different to what he saw. And you felt embarrassed that you couldn&apos;t just appreciate it. That you had to look away and say &quot;delete that please.&quot;</p>

          <p>Maybe you opened your camera roll recently and scrolled back five or six years. And the difference wasn&apos;t gradual. It wasn&apos;t natural aging. It was a specific, sudden shift — and it happened somewhere in your early 50s, and you can&apos;t figure out why.</p>

          <p>You stopped smiling with your mouth open in photos.</p>

          <p>You started using filters on everything before you&apos;d share it.</p>

          <p>You cover your neck in certain lights.</p>

          <p>And privately — the part you would never say out loud to anyone — you started spending money. Quietly. Systematically. Desperately trying to get back to the face you recognize.</p>

          <p>If any of that sounds familiar: <strong>you&apos;re about to understand exactly why it happened — and exactly what to do about it.</strong></p>

          <div className="sh">THE DIRTY SECRET BEHIND YOUR BATHROOM SHELF</div>

          <p>My name is Dr. Rachel Kim. I&apos;ve been a board-certified dermatologist for 22 years.</p>

          <p>And I&apos;m about to tell you something that most dermatologists will never say — because it would destroy their income.</p>

          <p>Three years ago, my mother called me, upset. Not crying. Worse — that quiet, defeated tone that&apos;s harder to hear than tears.</p>

          <p>&quot;Rachel,&quot; she said. &quot;I think I&apos;ve spent $4,000 trying to fix my skin. Nothing works. I don&apos;t even recognize myself anymore.&quot;</p>

          <p>She was 58. She&apos;d used every product I&apos;d ever recommended. The vitamin C serums. The retinols. The collagen supplements. She&apos;d even done two rounds of microneedling at my own clinic — at cost.</p>

          <p>And sitting there on the phone with her, I suddenly realized something that made my stomach drop.</p>

          <p>She wasn&apos;t wrong. Nothing <em>had</em> worked.</p>

          <p>Not because I&apos;d given her bad advice. But because every single thing I&apos;d recommended was working on the wrong part of her skin.</p>

          <p>I stayed up until 4am reading journals I hadn&apos;t opened in years. And what I found made me want to throw 22 years of training out the window.</p>

          <div className="sh">THE DISCOVERY THAT CHANGES EVERYTHING</div>

          <p><strong>The real reason your face changes after 50 has nothing to do with the surface of your skin.</strong></p>

          <p>It&apos;s not collagen loss in the way you&apos;ve been told. It&apos;s not dehydration. It&apos;s not sun damage.</p>

          <p>The REAL cause happens deep inside the dermis — the layer <em>underneath</em> your skin — in a process called <strong>glycation</strong>.</p>

          <p>And here&apos;s what should make you furious:</p>

          <p><strong>No serum, cream, or topical product can physically reach it. Not one.</strong></p>

          <p>They sit on your epidermis — the top layer. Glycation happens in the dermis — the layer below it. These two layers don&apos;t connect.</p>

          <img
            src="https://v3b.fal.media/files/b/0a973c14/JNqJhvUoO1-k9UtAqlJkO_Rg4vQebH.png"
            alt="Diagram showing skin layers - epidermis vs dermis - where glycation occurs"
            className="inline-img"
          />
          <p className="img-cap">Your serum reaches the epidermis. Glycation happens in the dermis. They never meet.</p>

          <div className="callout-y">
            <strong>Let that sink in.</strong> Every topical skincare product you&apos;ve ever bought works on the top layer of your skin. The aging process that&apos;s changing your face — the jaw, the cheeks, the deflation — happens in the layer below it. They literally cannot meet. This is why nothing has worked. Not because you did anything wrong. Because the problem was never explained to you correctly.
          </div>

          <div className="sh">THE REAL ROOT CAUSE: GLYCATION</div>

          <p>Every time glucose from food enters your bloodstream, a small amount bonds to your collagen fibers. Scientists call this <strong>glycation</strong> — and the bonds it creates are called <strong>AGEs: Advanced Glycation End-products.</strong></p>

          <p>Think of your collagen fibers like elastic bands.</p>

          <p>When they&apos;re healthy, they snap back. They hold their shape. Your skin bounces back when you press it.</p>

          <p>Now imagine someone poured superglue on those elastic bands. They stop stretching. They fuse together in the wrong position. They become rigid and matted.</p>

          <p>That rigidity is the jaw that&apos;s lost its definition. The cheeks that have gone flat. The lines that weren&apos;t there in your mid-40s.</p>

          <p>The medical community has known about this since the 1980s.</p>

          <p><strong>Known about it. And done nothing with it.</strong></p>

          <p>Because the solution is too simple. Too cheap. There&apos;s no margin in it for a $89 billion industry built on selling you the wrong products.</p>

          <div className="callout-r">
            Sound familiar? If you&apos;ve ever spent $200 on a skincare system from a friend — Rodan + Fields, Arbonne, Monat — and watched it do absolutely nothing for your jaw and cheekbones. This is exactly why. Your friend wasn&apos;t lying. The products weren&apos;t fake. They just can&apos;t physically reach the place where your skin is aging. Nobody told you that. Because nobody who profits from selling you those products wants you to know it.
          </div>

          <div className="sh">THE THREE COMPOUNDS THAT ACTUALLY REACH THE PROBLEM</div>

          <p>Once I understood glycation, I spent six months searching for anything that could actually address it.</p>

          <p>I found three compounds. All oral. All studied specifically for their effect on skin glycation. All reaching the dermis the only way that works — through your bloodstream.</p>

          <p>I&apos;m naming them publicly because I believe you deserve to know exactly what goes into your body — and because transparency is what separates real science from the vague marketing nonsense that&apos;s been sold to you for years. Look these up. Read the research yourself.</p>

          <div className="compound">
            <div className="compound-num">Compound 01</div>
            <div className="compound-name">Japanese Knotweed Extract</div>
            <p className="compound-text">Contains a highly concentrated form of resveratrol that activates a specific enzyme — documented in peer-reviewed research — to block new AGE formation at the cellular level. It works upstream, stopping the glycation process before it damages your collagen. Think of it as cutting the problem off at the source rather than trying to clean up the mess afterward.</p>
            <span className="compound-badge">✓ Blocks new AGE formation at source</span>
          </div>

          <div className="compound">
            <div className="compound-num">Compound 02</div>
            <div className="compound-name">Sea Buckthorn</div>
            <p className="compound-text">When glycation damages the lipid matrix beneath your skin — the scaffolding that keeps your face looking full and structured — it creates that hollowed, deflated look. Sea buckthorn directly restores that sub-dermal structure. Women taking it describe their face starting to look fuller. Less sunken. Not a surface change — actual architectural repair from the inside. This is why the change looks different to anything a serum has ever done.</p>
            <span className="compound-badge">✓ Restores sub-dermal structure</span>
          </div>

          <div className="compound">
            <div className="compound-num">Compound 03</div>
            <div className="compound-name">Maritime Pine Bark (Pycnogenol)</div>
            <p className="compound-text">This one has a randomized, double-blind, placebo-controlled trial behind it — the gold standard in clinical research. Women taking it daily for 12 weeks showed <em>statistically significant</em> improvements in skin elasticity and measurable reductions in surface roughness. Not marginal improvements. Significant ones. The kind of results that are literally impossible to achieve from anything you apply topically — because the mechanism only works from the bloodstream.</p>
            <span className="compound-badge">✓ RCT-proven: elasticity + smoothness</span>
          </div>

          <img
            src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=80&auto=format&fit=crop"
            alt="Natural supplement ingredients"
            className="inline-img"
          />
          <p className="img-cap">All three are taken orally — the only delivery route that reaches the dermis.</p>

          <div className="sh">THREE WEEKS LATER</div>

          <p>My mother was the first person I put on the protocol. November.</p>

          <p>She called me at Christmas.</p>

          <p>&quot;People keep asking if I&apos;ve had something done,&quot; she said. &quot;My friend thinks I got fillers.&quot;</p>

          <p>She hadn&apos;t.</p>

          <p>She&apos;d just finally been working on the right problem.</p>

          <p>Week 3: her skin felt different. More hydrated, less papery. Week 5: the jawline was visibly improved. Week 12: she looked like a better version of herself. Not younger in a fake, obvious way. Just <em>more like herself</em>. The version from five years ago.</p>

          <p>I started quietly recommending it to patients. Then to friends. The results were consistent enough that I wrote it up as a full clinical guide.</p>

          <p>I&apos;m releasing it at $19. Because this information is too important to gatekeep.</p>

          <div className="transform-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80&auto=format&fit=crop&crop=face"
              alt="Before - tired looking woman"
            />
            <img
              src="https://v3b.fal.media/files/b/0a973c17/V1IK-oQ1w26navNKd0xLG_g7duroQQ.png"
              alt="After - confident glowing woman"
            />
          </div>
          <p className="img-cap">The difference between working on the wrong problem — and finally working on the right one.</p>

          <hr className="divider" />

          <div className="sh">WHAT WOMEN ARE SAYING</div>

          <div className="t-grid">
            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">&quot;By week three my husband asked if I&apos;d had something done. I hadn&apos;t. The jawline is genuinely tighter. I avoided mirrors for two years. Now I look every morning.&quot;</p>
              <div className="t-author">
                <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=76&q=80&auto=format&fit=crop&crop=face" alt="Pauline" className="t-avatar" />
                <div>
                  <div className="t-name">Pauline H.</div>
                  <div className="t-detail">54 · Phoenix, AZ</div>
                  <div className="t-verified">✓ Verified Purchase</div>
                </div>
              </div>
            </div>

            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">&quot;The holiday photo section. I literally put my phone down and cried. That was me. That was exactly me. I bought it before I even finished reading.&quot;</p>
              <div className="t-author">
                <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=76&q=80&auto=format&fit=crop&crop=face" alt="Karen" className="t-avatar" />
                <div>
                  <div className="t-name">Karen W.</div>
                  <div className="t-detail">52 · Nashville, TN</div>
                  <div className="t-verified">✓ Verified Purchase</div>
                </div>
              </div>
            </div>

            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">&quot;The food list. There was something I was eating every single morning thinking it was healthy. Changed that one thing in week 1. The difference in 10 days was visible.&quot;</p>
              <div className="t-author">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=76&q=80&auto=format&fit=crop&crop=face" alt="Maggie" className="t-avatar" />
                <div>
                  <div className="t-name">Maggie T.</div>
                  <div className="t-detail">51 · Austin, TX</div>
                  <div className="t-verified">✓ Verified Purchase</div>
                </div>
              </div>
            </div>

            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">&quot;I&apos;m 63. I thought I was past the point where anything would help. My daughter noticed before I told her I&apos;d started anything. The lines around my mouth have genuinely softened.&quot;</p>
              <div className="t-author">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=76&q=80&auto=format&fit=crop&crop=face" alt="Debra" className="t-avatar" />
                <div>
                  <div className="t-name">Debra M.</div>
                  <div className="t-detail">63 · Scottsdale, AZ</div>
                  <div className="t-verified">✓ Verified Purchase</div>
                </div>
              </div>
            </div>

            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">&quot;I&apos;d spent $600 on Rodan + Fields over 2 years. This article was the first time anyone actually explained why it didn&apos;t work. The protocol worked when nothing else had.&quot;</p>
              <div className="t-author">
                <img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=76&q=80&auto=format&fit=crop&crop=face" alt="Sandra" className="t-avatar" />
                <div>
                  <div className="t-name">Sandra K.</div>
                  <div className="t-detail">57 · Denver, CO</div>
                  <div className="t-verified">✓ Verified Purchase</div>
                </div>
              </div>
            </div>

            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">&quot;I showed my sister and she ordered it the same day without even finishing the article. We&apos;re both 3 weeks in. She got a comment at work. I got asked by my neighbor if I&apos;d been on vacation.&quot;</p>
              <div className="t-author">
                <img src="https://images.unsplash.com/photo-1491349174775-aaaefdd81942?w=76&q=80&auto=format&fit=crop&crop=face" alt="Linda" className="t-avatar" />
                <div>
                  <div className="t-name">Linda R.</div>
                  <div className="t-detail">55 · Tampa, FL</div>
                  <div className="t-verified">✓ Verified Purchase</div>
                </div>
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* FACEBOOK COMMENTS SECTION */}
          <div className="fb-section">
            <div className="fb-header">
              <span className="fb-icon">💬</span>
              <span>Comments · 2,847</span>
            </div>

            <div className="fb-comment">
              <img src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=72&q=80&auto=format&fit=crop&crop=face" alt="" className="fb-avatar" />
              <div>
                <div className="fb-bubble">
                  <div className="fb-name">Linda Patterson</div>
                  <div className="fb-text">I showed this to my daughter and she literally said &quot;mom this is literally you&quot; when she read the holiday photo part 😭 I bought it before she even finished her sentence. Week 2 update coming soon</div>
                </div>
                <div className="fb-meta">👍 1.4K &nbsp;·&nbsp; Like &nbsp;·&nbsp; Reply &nbsp;·&nbsp; 3h</div>
              </div>
            </div>

            <div className="fb-comment fb-reply">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=72&q=80&auto=format&fit=crop&crop=face" alt="" className="fb-avatar" />
              <div>
                <div className="fb-bubble">
                  <div className="fb-name">Jennifer Walsh</div>
                  <div className="fb-text"><span className="fb-tag">Linda Patterson</span> Same. My husband saw me reading this over my shoulder and said &quot;that sounds exactly like you&quot; about the Zoom call thing. I didn&apos;t even realize anyone else noticed me doing that 😂💀</div>
                </div>
                <div className="fb-meta">👍 847 &nbsp;·&nbsp; Like &nbsp;·&nbsp; Reply &nbsp;·&nbsp; 2h</div>
              </div>
            </div>

            <div className="fb-comment">
              <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=72&q=80&auto=format&fit=crop&crop=face" alt="" className="fb-avatar" />
              <div>
                <div className="fb-bubble">
                  <div className="fb-name">Carol Simmons</div>
                  <div className="fb-text">Week 3 update for anyone wondering — I got asked yesterday by someone I haven&apos;t seen in 6 months if I&apos;d &quot;done something to my face.&quot; I said no. She didn&apos;t believe me. I&apos;m crying. This is $19 I should have spent years ago</div>
                </div>
                <div className="fb-meta">👍 2.1K &nbsp;·&nbsp; Like &nbsp;·&nbsp; Reply &nbsp;·&nbsp; 5h</div>
              </div>
            </div>

            <div className="fb-comment fb-reply">
              <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=72&q=80&auto=format&fit=crop&crop=face" alt="" className="fb-avatar" />
              <div>
                <div className="fb-bubble">
                  <div className="fb-name">Diane Torres</div>
                  <div className="fb-text"><span className="fb-tag">Carol Simmons</span> Carol!! I was JUST about to post my update too. Same thing happened to me at my sister&apos;s birthday dinner on Saturday. I&apos;ve spent so much money on skincare. The glycation thing made so much sense the moment I read it. Why did no one ever tell us this??</div>
                </div>
                <div className="fb-meta">👍 634 &nbsp;·&nbsp; Like &nbsp;·&nbsp; Reply &nbsp;·&nbsp; 4h</div>
              </div>
            </div>

            <div className="fb-comment">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=72&q=80&auto=format&fit=crop&crop=face" alt="" className="fb-avatar" />
              <div>
                <div className="fb-bubble">
                  <div className="fb-name">Patricia Morgan</div>
                  <div className="fb-text">I&apos;m 61 and I was genuinely convinced I was past the point of anything helping without surgery. Tagging <span className="fb-tag">Susan Morgan</span> because we talked about this last week. Read this article, Sue. The part about the dermis vs epidermis — we have literally been working on the WRONG LAYER our entire lives</div>
                </div>
                <div className="fb-meta">👍 978 &nbsp;·&nbsp; Like &nbsp;·&nbsp; Reply &nbsp;·&nbsp; 7h</div>
              </div>
            </div>

            <div className="fb-comment fb-reply">
              <img src="https://images.unsplash.com/photo-1491349174775-aaaefdd81942?w=72&q=80&auto=format&fit=crop&crop=face" alt="" className="fb-avatar" />
              <div>
                <div className="fb-bubble">
                  <div className="fb-name">Susan Morgan</div>
                  <div className="fb-text"><span className="fb-tag">Patricia Morgan</span> Just bought it Pat. That part about the $90 serum sitting on the wrong layer of skin 😤 I could scream. Buying it now and will report back!</div>
                </div>
                <div className="fb-meta">👍 412 &nbsp;·&nbsp; Like &nbsp;·&nbsp; Reply &nbsp;·&nbsp; 6h</div>
              </div>
            </div>

          </div>

          <hr className="divider" />

          <div className="sh">HERE&apos;S WHAT I NEED YOU TO UNDERSTAND BEFORE YOU SCROLL PAST THIS</div>

          <p>Women email me every week saying they almost scrolled past this article.</p>

          <p>They were skeptical. They&apos;d tried everything. They&apos;d been burned by expensive products that promised the world and did nothing. Another thing claiming to fix aging felt like another disappointment waiting to happen.</p>

          <p>Then they tried the protocol.</p>

          <p>And now they&apos;re the ones emailing saying it&apos;s the most important $19 they&apos;ve ever spent on themselves.</p>

          <p>So let me put this in perspective for you:</p>

          <div className="price-anchor">
            <div className="pa-title">The math that should make you angry:</div>
            <div className="pa-row"><span>One dermatologist consultation</span><span className="pa-cost">$160</span></div>
            <div className="pa-row"><span>One round of dermal fillers</span><span className="pa-cost">$800–$1,200</span></div>
            <div className="pa-row"><span>Average annual skincare spend (women 45–65)</span><span className="pa-cost">$847</span></div>
            <div className="pa-row"><span>Rodan + Fields 6-month supply</span><span className="pa-cost">$600+</span></div>
            <div className="pa-row pa-total"><span>The Glycation Reversal Protocol</span><span style={{color:'#27ae60'}}>$19</span></div>
            <div className="pa-vs">One-time. No subscription. Instant access.</div>
          </div>

          <p>The difference is this: every dollar spent on the left column is working on the top layer of your skin. Every dollar spent on this protocol is working on the layer where your skin is actually aging.</p>

          <p>For nineteen dollars and sixty days, you&apos;ll know definitively whether this is true. Either your jawline tightens, people start commenting, and you finally feel like yourself in photos again. Or you email me, I refund every cent, and you keep the guide.</p>

          <p>There is no version of this where you lose.</p>

          <div className="mini-close">
            <div className="mini-close-quote">&quot;I almost didn&apos;t buy it because I&apos;d been burned so many times before. Now I recommend it to every woman I know who&apos;s in her 50s and quietly struggling with the same thing. It&apos;s not magic. It&apos;s just finally working on the right problem.&quot;</div>
            <div className="mini-close-attr">— Pauline H., 54, Phoenix AZ · Verified Purchase</div>
          </div>

          <div className="sh">WHAT&apos;S IN THE PROTOCOL</div>

          <p>This isn&apos;t a general wellness guide. It&apos;s 30 pages of exactly what to do, when to do it, and why — written for women 45–65 who are done wasting money on things that can&apos;t reach the problem.</p>

          <div className="inside-box">
            <div className="inside-title">The Glycation Reversal Protocol</div>
            <div className="inside-sub">Instant PDF download · 30 pages · No filler · No fluff</div>

            <div className="inside-item">
              <span className="i-check">✓</span>
              <span><strong>The glycation explanation in plain English</strong> — not medical jargon. You&apos;ll finally understand exactly why the face in the mirror changed, why every product you&apos;ve bought has failed to address it, and what the research actually says. This section alone is worth ten times the price of the guide.</span>
            </div>
            <div className="inside-item">
              <span className="i-check">✓</span>
              <span><strong>Clinical doses for all three compounds</strong> — not the watered-down amounts on the supplement label. The specific therapeutic doses from the actual studies that showed results. Plus the exact brands worth buying, so you&apos;re not guessing or overpaying at a health food store.</span>
            </div>
            <div className="inside-item">
              <span className="i-check">✓</span>
              <span><strong>The daily sequence with timing</strong> — not just a list of things to take whenever you remember. A structured daily protocol with absorption windows built in so each compound works correctly. This is the difference between taking the right things and taking them in the right way.</span>
            </div>
            <div className="inside-item">
              <span className="i-check">✓</span>
              <span><strong>The glycation food list</strong> — the 12 foods that actively fight AGE formation. And the 7 foods that accelerate glycation even when you&apos;re convinced you&apos;re eating well. One of them is almost certainly in your breakfast right now. Most women say this section alone was worth the $19.</span>
            </div>
            <div className="inside-item">
              <span className="i-check">✓</span>
              <span><strong>The 14-day results tracker</strong> — what to look for and when. Most women notice the first visible changes between day 9 and day 14. This tells you exactly what to expect at each stage so you&apos;re not guessing whether it&apos;s working.</span>
            </div>
          </div>

          <div className="sh">GET THE PROTOCOL</div>

          <div className="product-box">
            <div className="product-title">The Glycation Reversal Protocol</div>
            <div className="product-sub">30-page clinical guide · Instant digital download</div>
            <div className="price-red">$19</div>
            <div className="price-was">One-time payment · No subscription · No upsell</div>
            <button className="cta-btn">
              Yes — I Want The Protocol Now →
            </button>
            <div className="cta-sub">🔒 Secure checkout · Delivered to your inbox in under 2 minutes</div>
          </div>

          <div className="urgency">
            ⚠️ Due to demand from this article, the $19 price may not be available after today. We reserve the right to increase pricing without notice.
          </div>

          <div className="guarantee">
            <div className="g-icon">🛡️</div>
            <div>
              <div className="g-title">The 60-Day Full Money-Back Guarantee</div>
              <div className="g-text">Follow the protocol for 60 days. If your jawline hasn&apos;t tightened, if the lines haven&apos;t softened, if you&apos;re not getting unsolicited comments about how well you look — email me and I&apos;ll refund every cent. You keep the guide either way. No forms. No hoops. No questions. I&apos;m that confident that once you&apos;re finally working on the right problem, you&apos;ll see results you haven&apos;t seen in years.</div>
            </div>
          </div>

          <hr className="divider" />

          <p><strong>P.S.</strong> — You already know that what you&apos;ve been trying doesn&apos;t work. You&apos;ve proven it with hundreds, maybe thousands of dollars and years of disappointment. Not because you did anything wrong. Because no one ever told you the right problem. Now you know. Now you know what addresses it. It&apos;s $19. It&apos;s guaranteed for 60 days. There is genuinely nothing to lose — except maybe another year of avoiding photos.</p>

          <div style={{ marginTop: '28px' }}>
            <button className="cta-btn" style={{ maxWidth: '100%' }}>
              Get Instant Access — $19 →
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
          This article is for informational and educational purposes only and does not constitute medical advice. Individual results vary. The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Always consult your physician before beginning any supplement protocol.
        </p>
      </footer>
    </>
  )
}
