'use client'

const css = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #fff;
    color: #1a1a1a;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 18px;
    line-height: 1.78;
  }

  /* PUBLICATION HEADER */
  .pub-header {
    border-bottom: 3px solid #1a1a1a;
    padding: 14px 20px 10px;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }
  .pub-name {
    font-size: clamp(26px, 5vw, 42px);
    font-weight: 900;
    color: #1a1a1a;
    letter-spacing: -0.5px;
    font-family: Georgia, serif;
  }
  .pub-tagline {
    font-size: 12px;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 2px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .pub-nav {
    font-size: 12px;
    color: #555;
    margin-top: 8px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    letter-spacing: 0.5px;
  }

  .trending-bar {
    background: #c0392b;
    color: #fff;
    text-align: center;
    padding: 10px 16px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.4px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .article-wrap {
    max-width: 800px;
    margin: 0 auto;
    padding: 32px 24px 100px;
  }

  .section-label {
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: #c0392b;
    margin-bottom: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .expert-h {
    font-size: clamp(24px, 4vw, 36px);
    font-weight: 800;
    color: #1a1a1a;
    line-height: 1.18;
    margin-bottom: 16px;
    font-family: Georgia, serif;
  }

  .sub-h {
    font-size: clamp(16px, 2.5vw, 19px);
    font-weight: 400;
    color: #444;
    line-height: 1.55;
    margin-bottom: 18px;
    font-family: Georgia, serif;
    font-style: italic;
  }

  .byline-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 16px;
    padding: 14px 0;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .byline-author { font-size: 13px; font-weight: 700; color: #1a1a1a; }
  .byline-meta { font-size: 13px; color: #888; }
  .byline-dot { color: #ccc; }

  .editor-note {
    background: #fffbea;
    border-left: 4px solid #f0a500;
    padding: 14px 18px;
    margin: 20px 0 32px;
    font-size: 14px;
    color: #555;
    line-height: 1.65;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .editor-note strong { color: #333; }

  .body p {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 1.82;
    color: #1e1e1e;
  }
  .body strong { font-weight: 700; color: #111; }
  .body em { font-style: italic; }

  .sh {
    font-size: clamp(15px, 2.2vw, 18px);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #1a1a1a;
    margin: 48px 0 20px;
    padding-top: 22px;
    border-top: 2px solid #1a1a1a;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .hero-img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    display: block;
    margin: 28px 0 10px;
  }

  .img-cap {
    font-size: 13px;
    color: #999;
    font-style: italic;
    text-align: center;
    margin-bottom: 36px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .inline-img {
    width: 100%;
    max-height: 340px;
    object-fit: cover;
    display: block;
    margin: 24px 0 10px;
  }

  .callout-y {
    background: #fff9e6;
    border-left: 5px solid #f0a500;
    padding: 20px 24px;
    margin: 30px 0;
    font-size: 17px;
    line-height: 1.72;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .callout-y strong { color: #111; }

  .callout-r {
    background: #fff2f2;
    border-left: 5px solid #c0392b;
    padding: 20px 24px;
    margin: 30px 0;
    font-size: 17px;
    line-height: 1.72;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .divider { border: none; border-top: 1px solid #e8e8e8; margin: 40px 0; }

  /* AGE bullet list */
  .age-list {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
  }
  .age-list li {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    font-size: 17px;
    color: #333;
    line-height: 1.65;
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .age-list li:last-child { border-bottom: none; }
  .age-bullet { color: #c0392b; font-weight: 900; flex-shrink: 0; margin-top: 1px; }

  /* TESTIMONIALS */
  .t-stack { display: flex; flex-direction: column; gap: 16px; margin: 28px 0; }
  .t-card {
    background: #fafafa;
    border: 1px solid #e4e4e4;
    border-radius: 6px;
    padding: 20px 22px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .t-stars { color: #f0a500; font-size: 15px; margin-bottom: 10px; }
  .t-text { font-size: 16px; color: #333; line-height: 1.7; margin-bottom: 14px; font-family: Georgia, serif; font-style: italic; }
  .t-author { display: flex; align-items: center; gap: 10px; }
  .t-avatar { width: 38px; height: 38px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
  .t-name { font-size: 13px; font-weight: 800; color: #111; }
  .t-detail { font-size: 12px; color: #999; margin-top: 2px; }
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
  .fb-icon { font-size: 20px; }
  .fb-comment { display: flex; gap: 8px; margin-bottom: 14px; align-items: flex-start; }
  .fb-avatar { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
  .fb-bubble {
    background: #fff;
    border-radius: 18px;
    padding: 10px 14px;
    max-width: 88%;
    box-shadow: 0 1px 2px rgba(0,0,0,0.08);
  }
  .fb-name { font-size: 13px; font-weight: 700; color: #050505; margin-bottom: 3px; }
  .fb-admin-name { font-size: 13px; font-weight: 700; color: #1877f2; margin-bottom: 3px; }
  .fb-text { font-size: 14px; color: #1c1e21; line-height: 1.48; }
  .fb-meta { font-size: 12px; color: #65676b; margin-top: 6px; padding-left: 2px; }
  .fb-reply { padding-left: 44px; }
  .fb-tag { color: #1877f2; font-weight: 600; }

  /* INSIDE BOX */
  .inside-box {
    background: #fafafa;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    padding: 28px 30px;
    margin: 28px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .inside-title { font-size: 20px; font-weight: 800; color: #1a1a1a; margin-bottom: 4px; }
  .inside-sub { font-size: 13px; color: #999; margin-bottom: 22px; }
  .inside-item { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 18px; font-size: 16px; color: #333; line-height: 1.68; }
  .i-check { color: #1e6b1e; font-weight: 900; font-size: 17px; flex-shrink: 0; margin-top: 2px; }

  /* OFFER */
  .product-box {
    border: 2px solid #1a1a1a;
    border-radius: 8px;
    padding: 36px 32px;
    margin: 36px 0;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .product-title { font-size: 26px; font-weight: 900; color: #1a1a1a; margin-bottom: 6px; font-family: Georgia, serif; }
  .product-sub { font-size: 15px; color: #777; margin-bottom: 22px; }
  .price-wrap { margin-bottom: 6px; }
  .price-was-text { font-size: 22px; color: #bbb; text-decoration: line-through; margin-right: 8px; }
  .price-now { font-size: 52px; font-weight: 900; color: #c0392b; }
  .price-note { font-size: 14px; color: #aaa; margin-bottom: 26px; }

  .cta-btn {
    display: block;
    background: #27ae60;
    color: #fff;
    font-size: 19px;
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .cta-btn:hover { background: #219a53; }
  .cta-sub { font-size: 13px; color: #aaa; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

  .urgency {
    background: #fffbea;
    border: 1px solid #f0c040;
    border-radius: 5px;
    padding: 16px 20px;
    margin: 20px 0;
    font-size: 15px;
    color: #5a4000;
    line-height: 1.65;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .g-icon { font-size: 44px; flex-shrink: 0; }
  .g-title { font-size: 19px; font-weight: 800; color: #1a1a1a; margin-bottom: 10px; }
  .g-text { font-size: 16px; color: #333; line-height: 1.75; }

  .footer {
    background: #111;
    color: rgba(255,255,255,0.38);
    text-align: center;
    padding: 32px 20px;
    font-size: 12px;
    line-height: 2;
    margin-top: 70px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .footer a { color: rgba(255,255,255,0.28); text-decoration: none; }

  .transform-img-wrap { display: flex; gap: 12px; margin: 28px 0; }
  .transform-img-wrap img { width: 50%; border-radius: 6px; object-fit: cover; }

  @media (max-width: 600px) {
    body { font-size: 17px; }
    .article-wrap { padding: 20px 16px 60px; }
    .product-box { padding: 24px 18px; }
    .guarantee { flex-direction: column; gap: 12px; }
    .inside-box { padding: 20px 18px; }
    .transform-img-wrap { flex-direction: column; }
    .transform-img-wrap img { width: 100%; }
  }
`

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="trending-bar">⚡ TRENDING NOW — Skin Science · Anti-Aging · Women's Health</div>

      <div className="pub-header">
        <div className="pub-name">AGING BACKWARDS</div>
        <div className="pub-tagline">Skin Science · Women's Health · Evidence-Based</div>
        <div className="pub-nav">Home &nbsp;·&nbsp; Skin Science &nbsp;·&nbsp; Nutrition &nbsp;·&nbsp; Research &nbsp;·&nbsp; About</div>
      </div>

      <main className="article-wrap">

        <div className="section-label">Skin Science</div>

        <h1 className="expert-h">
          Retired Dermatologist: "Women Who Are 50 But Look 30 Aren't Using Creams — They're Doing This Instead"
        </h1>

        <h2 className="sub-h">
          The $89 billion skincare industry doesn't want you to know what actually works — because it costs $19
        </h2>

        <div className="byline-bar">
          <span className="byline-author">By Dr. Rachel Kim, MD, FAAD</span>
          <span className="byline-dot">·</span>
          <span className="byline-meta">Retired Board-Certified Dermatologist, 22 years in clinical practice</span>
          <span className="byline-dot">·</span>
          <span className="byline-meta">Published April 19, 2026 · 6 min read · 🕒 Updated 3h ago</span>
        </div>

        <div className="editor-note">
          <strong>⚠️ Editor's note:</strong> This article contains specific information that the cosmetics industry has been aware of since the 1980s but has never widely communicated to consumers. We've allowed Dr. Kim to publish it unedited.
        </div>

        <div className="body">

          <p>My mother called me on a Sunday in November. She wasn't crying. It was worse than crying — it was that flat voice women her age use when they've run out of things to try and don't want to make a fuss about it.</p>

          <p>"Rachel," she said. "I added it up. I think I've spent about four thousand dollars on my face this year. I don't look any different. I think I actually look worse."</p>

          <p>I'm a dermatologist. I'd been one for twenty-two years at that point. And I sat there on the phone with my own mother, and I realized something that I've been sitting with ever since:</p>

          <p>Every single product I'd ever recommended to her — every serum, every retinol, every treatment at my own clinic — was working on the wrong layer of her skin.</p>

          <p>Not the wrong product. Not the wrong brand. <strong>The wrong layer.</strong></p>

          <p>And once I understood what that meant, I couldn't practice the same way anymore. I retired from my clinic eighteen months later. This article is part of the reason why.</p>

          <img
            src="https://v3b.fal.media/files/b/0a973c0f/svmfYc3hnNwgGNGfoupN3_zgMPH2Fu.png"
            alt="Woman looking at vacation photos on her phone"
            className="hero-img"
          />
          <p className="img-cap">The thing that changes in your early 50s has nothing to do with the surface of your skin.</p>

          <div className="sh">A QUICK QUESTION BEFORE I EXPLAIN</div>

          <p>Before I get into the science, I want you to do something.</p>

          <p>Open your phone. Scroll back to photos from five or six years ago. Not ten. Not fifteen. Just five.</p>

          <p>Look at your jawline then. Look at it now.</p>

          <p>Most women I've shown this exercise to have the same reaction: the change wasn't gradual. It happened in a window. Somewhere in the early fifties, something shifted — and it wasn't anything you did.</p>

          <p>Maybe you've started avoiding photos entirely. Offering to be the one behind the camera. Positioning yourself slightly behind someone else in group shots. Angling your chin. Using filters on everything before you'd share it.</p>

          <p>Maybe it's the Zoom calls — joining a meeting and spending the next forty minutes half-listening, just staring at your own jawline in the corner of the screen. That specific loss of definition that wasn't there five years ago.</p>

          <p>Maybe your husband took a candid photo of you laughing at dinner — genuinely, because he thought you looked beautiful — and you saw something completely different. And you felt embarrassed that you couldn't just appreciate it.</p>

          <p>The industry calls this "aging." That's the word they use when they don't want to explain something to you.</p>

          <p>What actually happened has a name. It's called glycation, and it happens in a layer of your skin that no cream, serum, or topical product has ever been able to reach.</p>

          <div className="sh">THE PART WHERE I GOT ANGRY</div>

          <p>I want to be careful here, because I still have friends in this industry and I don't want to be dramatic.</p>

          <p>But the honest truth is this: the reason no topical product has ever worked on the thing you actually care about — jawline definition, cheek fullness, the overall lift of your face — is because of a basic anatomical fact that is not hidden. It's in every dermatology textbook.</p>

          <p>Your skin has two layers that matter for aging.</p>

          <p>The top one is called the <strong>epidermis</strong>. It's thin. It's mostly dead cells. It's what you can touch.</p>

          <p>The layer underneath it is called the <strong>dermis</strong>. That's where your collagen lives. That's where the architectural structure of your face comes from.</p>

          <p>And here's the part that genuinely stopped me when I finally sat with it at 3am one morning:</p>

          <p><strong>Nothing you put on your skin can get through to the dermis.</strong></p>

          <p>Not the $200 serum. Not the $400 "medical grade" line your friend sells at her Rodan + Fields party. Not any of them. The molecules are too big. The skin is designed specifically to keep things out. That's its job.</p>

          <img
            src="https://v3b.fal.media/files/b/0a973c14/JNqJhvUoO1-k9UtAqlJkO_Rg4vQebH.png"
            alt="Diagram showing the epidermis vs dermis — where glycation occurs vs where creams reach"
            className="inline-img"
          />
          <p className="img-cap">Every cream you've ever bought works on the epidermis. The aging you care about happens in the dermis. They don't meet.</p>

          <p>So every cream, every serum, every "firming treatment" you have ever bought in your life has been working on the top layer. And the thing you actually care about — the thing that's changing about your face — is happening in the layer below.</p>

          <p>They don't meet. They can't meet.</p>

          <p>This is not controversial. Ask any dermatologist. They will tell you the same thing. They just won't tell you before you buy.</p>

          <div className="callout-r">
            If you've ever bought an expensive skincare system — Rodan + Fields, Arbonne, Monat, any of them — and watched it do nothing for your jawline and cheeks despite using it religiously for six months: you were not doing it wrong. The product was not defective. The person who sold it to you was not lying. They were just selling you something that, by the laws of biology, could not do what they implied it would do. That is the part that should make you angry.
          </div>

          <div className="sh">SO WHAT IS ACTUALLY HAPPENING IN THE DERMIS?</div>

          <p>Here's the short version.</p>

          <p>Every time your blood sugar spikes — not just from obvious things like dessert, but from things you've been told are healthy like oatmeal, bananas, whole wheat bread — sugar molecules attach to the collagen fibers in your dermis.</p>

          <p>They bond to them. <strong>Permanently.</strong></p>

          <p>Over time, those sugar-coated collagen fibers stiffen. They lose their elasticity. They can no longer flex and recoil the way they did in your thirties.</p>

          <p>Imagine a mattress with springs. When the springs are flexible, the mattress holds its shape. When the springs get stiff and can't spring back, the mattress sags.</p>

          <p><strong>That's your face after fifty.</strong></p>

          <p>It's not that you've lost collagen. You still have plenty. It's that the collagen you have is stiffening from the inside — and that stiffening is what creates:</p>

          <ul className="age-list">
            <li><span className="age-bullet">→</span> The jawline that looks softer than it did five years ago, even though your weight hasn't changed</li>
            <li><span className="age-bullet">→</span> The cheek area that looks slightly deflated, particularly in flat lighting or photos</li>
            <li><span className="age-bullet">→</span> Horizontal lines across the forehead and neck that weren't there before</li>
            <li><span className="age-bullet">→</span> That "tired" look in photos that you didn't have in your forties</li>
          </ul>

          <p>This process has a technical name. It's called the formation of <strong>Advanced Glycation End-products</strong> — or AGEs for short. (The acronym is a coincidence that I find genuinely dark.) It has been documented in peer-reviewed dermatology journals since the early 1980s.</p>

          <p>It's not new information. It's just information the $89 billion skincare industry has no financial reason to put on a billboard.</p>

          <div className="callout-y">
            <strong>Why creams can't touch it.</strong> A cream sits on top of your epidermis. Its job is to improve the surface — hydration, texture, tone. Glycation happens two layers down, inside your collagen matrix. There is no topical molecule small enough to penetrate the dermis in any clinically meaningful amount. This is established pharmacology. It's why all dermatological medications that need to reach the dermis are either injected (fillers, Botox) or taken orally (Accutane, hormonal treatments). When a skincare brand tells you their serum is "penetrating deep to rebuild collagen from within" — they are, to put it charitably, using creative language.
          </div>

          <div className="sh">THE ONLY ROUTE THAT ACTUALLY REACHES THE DERMIS</div>

          <p>When I finally accepted what the research was telling me, I started looking for the opposite kind of intervention. Not creams. Not topicals. Things that travel through the bloodstream — the only delivery route that reaches the dermis from the inside.</p>

          <p>I spent about six months reading clinical literature I hadn't touched since medical school.</p>

          <p>And I found something that surprised me.</p>

          <p>There are compounds — I'm going to be careful about naming specific ones in this public article, because I don't want to create a run on the market and drive prices up before women can get to them — but there are oral compounds with real, peer-reviewed, placebo-controlled trial data showing measurable improvement in dermal elasticity, skin smoothness, and what researchers call "visual skin age" in women over 50.</p>

          <p>Not marginal improvement. <strong>Statistically significant improvement.</strong></p>

          <p>One of them is a plant extract used for centuries in traditional East Asian medicine that contains a highly concentrated form of a molecule you've probably heard of from red wine research. It works by interrupting the glycation process at the cellular level — meaning it stops new damage from happening.</p>

          <p>The second is a berry extract that has shown, in controlled trials, the ability to rebuild the lipid structure that sits underneath the dermis and supports facial fullness. This is the one that produces the "lifted" effect women describe when they start the protocol — not because the skin is tighter on top, but because the scaffolding underneath has thickened.</p>

          <p>The third has a randomized, double-blind, placebo-controlled trial behind it — the highest tier of clinical evidence — showing measurable improvement in skin elasticity at 12 weeks of daily oral use in women aged 45–65. I'll tell you this about it: it's a bark extract, it's sold under several brand names, and most of the versions on the market are at a dose far too low to replicate the study results.</p>

          <p>Which is the whole problem. Even if you find the right compounds, almost no one is taking them at the doses shown to actually work. And most of the brands on Amazon are counting on you not to check.</p>

          <p><strong>This is why I wrote up the protocol.</strong></p>

          <div className="sh">WHAT HAPPENED WITH MY MOTHER</div>

          <p>Three weeks into the protocol, my mother called me and asked if I thought it was normal that her skin felt "springier." That was her word. I still remember it because I laughed.</p>

          <p>Week six, her sister — who hadn't seen her since Easter — asked her if she'd had work done.</p>

          <p>Week twelve, she sent me a photo. She was at a wedding. She was sixty-two years old. She looked like herself. Not a younger version of herself. Just — herself. The version from the photos five years ago that she'd been quietly avoiding.</p>

          <div className="transform-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80&auto=format&fit=crop&crop=face"
              alt="Before the protocol"
            />
            <img
              src="https://v3b.fal.media/files/b/0a973c17/V1IK-oQ1w26navNKd0xLG_g7duroQQ.png"
              alt="After the protocol"
            />
          </div>
          <p className="img-cap">The difference between working on the wrong problem — and finally working on the right one.</p>

          <p>I've now given this protocol to hundreds of patients and dozens of friends over the last three years. The results are consistent enough that I decided it was time to publish it.</p>

          <div className="sh">WHY I'M PUTTING THIS IN A $19 PDF INSTEAD OF CHARGING $400 FOR A CONSULTATION</div>

          <p>Three reasons.</p>

          <p>First, I'm retired. I don't have a clinic anymore. I don't need the consultation fees.</p>

          <p>Second, there are millions of women in their 50s and 60s who have spent thousands of dollars on skincare that was, through no fault of their own, working on the wrong layer. I am not going to sleep well at night if I gatekeep this for the women who can afford a private dermatologist.</p>

          <p>Third — and I want to be transparent about this — I want women who read this guide and see results to come back and work with me on the next stage. There's a longer protocol I've developed for women who want to go further. But the $19 guide stands completely on its own. You don't need the second step. The first step works.</p>

          <div className="sh">WHAT'S IN THE GUIDE</div>

          <div className="inside-box">
            <div className="inside-title">The Glycation Reversal Protocol</div>
            <div className="inside-sub">30-page clinical guide · Instant PDF · No filler · No fluff</div>

            <div className="inside-item">
              <span className="i-check">✓</span>
              <span><strong>The full explanation of what's happening under your skin, written in plain English</strong> — not medical jargon. Most women tell me this section alone was worth more than the price of the guide, because it's the first time anyone has actually explained why the thing in the mirror has changed.</span>
            </div>
            <div className="inside-item">
              <span className="i-check">✓</span>
              <span><strong>The three compounds, named specifically, with the clinical-trial dose for each.</strong> Not the label dose. The study dose. Plus the exact brands I trust, so you're not guessing at the health-food store or getting scammed on Amazon.</span>
            </div>
            <div className="inside-item">
              <span className="i-check">✓</span>
              <span><strong>The daily sequence.</strong> Which compound at which time, because the absorption windows matter more than most people realize. Taking the right things in the wrong order is most of why people get mediocre results from otherwise correct supplements.</span>
            </div>
            <div className="inside-item">
              <span className="i-check">✓</span>
              <span><strong>The glycation food list.</strong> Twelve foods that actively reduce AGE formation in your body. Seven foods that dramatically accelerate it — one of which is almost certainly in your breakfast right now, and which you have been told your entire life is a "healthy" choice.</span>
            </div>
            <div className="inside-item">
              <span className="i-check">✓</span>
              <span><strong>The 14-day and 90-day results tracker.</strong> What to expect at each stage. Most women see the first visible change between days 9 and 14. The larger structural change happens between weeks 6 and 12. The tracker tells you what to look for so you're not guessing.</span>
            </div>
          </div>

          <div className="sh">WHAT WOMEN ARE SAYING</div>

          <div className="t-stack">
            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">"I'll be honest, I almost didn't buy it. I'd been burned so many times. My husband asked what I was doing differently around week 4. I just started crying. That's the only part of this review that sounds fake but I swear it's true."</p>
              <div className="t-author">
                <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=76&q=80&auto=format&fit=crop&crop=face" alt="Pauline" className="t-avatar" />
                <div>
                  <div className="t-name">Pauline H., 54 · Phoenix AZ</div>
                  <div className="t-verified">✓ Verified Purchase</div>
                </div>
              </div>
            </div>

            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">"The food list. I was eating one of the seven foods every single morning. I'd been eating it since I was 35 because a nutritionist told me it was healthy. Cut it out. My jawline changed in ten days. I cannot believe nobody in my life has ever told me this."</p>
              <div className="t-author">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=76&q=80&auto=format&fit=crop&crop=face" alt="Maggie" className="t-avatar" />
                <div>
                  <div className="t-name">Maggie T., 51 · Austin TX</div>
                  <div className="t-verified">✓ Verified Purchase</div>
                </div>
              </div>
            </div>

            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">"I'm 63 and I was genuinely convinced I was past the point of anything working without surgery. My daughter asked me last weekend if I'd 'started something.' I hadn't told her. She just saw it."</p>
              <div className="t-author">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=76&q=80&auto=format&fit=crop&crop=face" alt="Debra" className="t-avatar" />
                <div>
                  <div className="t-name">Debra M., 63 · Scottsdale AZ</div>
                  <div className="t-verified">✓ Verified Purchase</div>
                </div>
              </div>
            </div>

            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">"Before this I'd spent $600 on Rodan + Fields over two years. This article is the first time anyone actually explained why it didn't work. I don't resent the woman who sold it to me anymore. She didn't know either."</p>
              <div className="t-author">
                <img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=76&q=80&auto=format&fit=crop&crop=face" alt="Sandra" className="t-avatar" />
                <div>
                  <div className="t-name">Sandra K., 57 · Denver CO</div>
                  <div className="t-verified">✓ Verified Purchase</div>
                </div>
              </div>
            </div>

            <div className="t-card">
              <div className="t-stars">★★★★☆</div>
              <p className="t-text">"Okay I'll be the skeptical one. Week 3, no change. Week 5, my sister noticed before I did. I'm dropping a star just because it took longer than the article suggested but honestly at my age I'll take it."</p>
              <div className="t-author">
                <img src="https://images.unsplash.com/photo-1491349174775-aaaefdd81942?w=76&q=80&auto=format&fit=crop&crop=face" alt="Linda" className="t-avatar" />
                <div>
                  <div className="t-name">Linda R., 55 · Tampa FL</div>
                  <div className="t-verified">✓ Verified Purchase</div>
                </div>
              </div>
            </div>
          </div>

          <hr className="divider" />

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
                  <div className="fb-text">I showed this to my daughter and she said "mom this is literally you" when she got to the part about the phone cameras 😭 I bought it before she finished the paragraph</div>
                </div>
                <div className="fb-meta">👍 1.4K &nbsp;·&nbsp; Like &nbsp;·&nbsp; Reply &nbsp;·&nbsp; 3h</div>
              </div>
            </div>

            <div className="fb-comment fb-reply">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=72&q=80&auto=format&fit=crop&crop=face" alt="" className="fb-avatar" />
              <div>
                <div className="fb-bubble">
                  <div className="fb-name">Jennifer Walsh</div>
                  <div className="fb-text"><span className="fb-tag">Linda Patterson</span> Same. My husband said "that sounds exactly like you" about the Zoom call thing. I didn't know other people noticed I was doing that 💀</div>
                </div>
                <div className="fb-meta">👍 847 &nbsp;·&nbsp; Like &nbsp;·&nbsp; Reply &nbsp;·&nbsp; 2h</div>
              </div>
            </div>

            <div className="fb-comment">
              <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=72&q=80&auto=format&fit=crop&crop=face" alt="" className="fb-avatar" />
              <div>
                <div className="fb-bubble">
                  <div className="fb-name">Carol Simmons</div>
                  <div className="fb-text">Week 3 update — a woman I haven't seen in 6 months asked me yesterday if I'd "done something." I said no and she literally did not believe me. I'm in tears writing this. $19 I should have spent years ago</div>
                </div>
                <div className="fb-meta">👍 2.1K &nbsp;·&nbsp; Like &nbsp;·&nbsp; Reply &nbsp;·&nbsp; 5h</div>
              </div>
            </div>

            <div className="fb-comment fb-reply">
              <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=72&q=80&auto=format&fit=crop&crop=face" alt="" className="fb-avatar" />
              <div>
                <div className="fb-bubble">
                  <div className="fb-name">Diane Torres</div>
                  <div className="fb-text"><span className="fb-tag">Carol Simmons</span> Carol!! Same thing at my sister's birthday dinner. The glycation thing made sense the second I read it. Why has nobody ever told us this?? I've spent so much money</div>
                </div>
                <div className="fb-meta">👍 634 &nbsp;·&nbsp; Like &nbsp;·&nbsp; Reply &nbsp;·&nbsp; 4h</div>
              </div>
            </div>

            <div className="fb-comment">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=72&q=80&auto=format&fit=crop&crop=face" alt="" className="fb-avatar" />
              <div>
                <div className="fb-bubble">
                  <div className="fb-name">Patricia Morgan</div>
                  <div className="fb-text">I'm 61 and I was convinced I was past the point of anything helping without surgery. Tagging <span className="fb-tag">Susan Morgan</span> because we literally talked about this last week. Sue — we've been working on the wrong LAYER of skin our whole lives</div>
                </div>
                <div className="fb-meta">👍 978 &nbsp;·&nbsp; Like &nbsp;·&nbsp; Reply &nbsp;·&nbsp; 7h</div>
              </div>
            </div>

            <div className="fb-comment fb-reply">
              <img src="https://images.unsplash.com/photo-1491349174775-aaaefdd81942?w=72&q=80&auto=format&fit=crop&crop=face" alt="" className="fb-avatar" />
              <div>
                <div className="fb-bubble">
                  <div className="fb-name">Susan Morgan</div>
                  <div className="fb-text"><span className="fb-tag">Patricia Morgan</span> Just bought it. I could scream about the $90 serum sitting on the top layer 😤 will report back</div>
                </div>
                <div className="fb-meta">👍 412 &nbsp;·&nbsp; Like &nbsp;·&nbsp; Reply &nbsp;·&nbsp; 6h</div>
              </div>
            </div>

            <div className="fb-comment">
              <img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=72&q=80&auto=format&fit=crop&crop=face" alt="" className="fb-avatar" />
              <div>
                <div className="fb-bubble">
                  <div className="fb-name">Beverly K.</div>
                  <div className="fb-text">Ordered. How long does shipping take? Is it a physical book or a PDF?</div>
                </div>
                <div className="fb-meta">👍 23 &nbsp;·&nbsp; Like &nbsp;·&nbsp; Reply &nbsp;·&nbsp; 8h</div>
              </div>
            </div>

            <div className="fb-comment fb-reply">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=72&q=80&auto=format&fit=crop&crop=face" alt="" className="fb-avatar" />
              <div>
                <div className="fb-bubble">
                  <div className="fb-admin-name">Admin (Dr. Kim's team) ✓</div>
                  <div className="fb-text">Hi Beverly — it's an instant PDF, goes to your email within 2 minutes of checkout. No shipping. Let us know how you get on 💛</div>
                </div>
                <div className="fb-meta">👍 47 &nbsp;·&nbsp; Like &nbsp;·&nbsp; Reply &nbsp;·&nbsp; 8h</div>
              </div>
            </div>

            <div className="fb-comment">
              <img src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=72&q=80&auto=format&fit=crop&crop=face" alt="" className="fb-avatar" />
              <div>
                <div className="fb-bubble">
                  <div className="fb-name">Ellen R.</div>
                  <div className="fb-text">My mother is 71 and I want to get this for her but I'm worried it's too late. Does the protocol work past 65?</div>
                </div>
                <div className="fb-meta">👍 89 &nbsp;·&nbsp; Like &nbsp;·&nbsp; Reply &nbsp;·&nbsp; 11h</div>
              </div>
            </div>

            <div className="fb-comment fb-reply">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=72&q=80&auto=format&fit=crop&crop=face" alt="" className="fb-avatar" />
              <div>
                <div className="fb-bubble">
                  <div className="fb-name">Donna Michael</div>
                  <div className="fb-text"><span className="fb-tag">Ellen R.</span> Ellen I'm 68 and started 4 months ago. I don't know what to tell you except my sister told me last week I look 10 years younger and she doesn't lie about that kind of thing. Just try it</div>
                </div>
                <div className="fb-meta">👍 156 &nbsp;·&nbsp; Like &nbsp;·&nbsp; Reply &nbsp;·&nbsp; 10h</div>
              </div>
            </div>

          </div>

          <hr className="divider" />

          <div className="sh">GET THE PROTOCOL</div>

          <div className="product-box">
            <div className="product-title">The Glycation Reversal Protocol</div>
            <div className="product-sub">30-page clinical guide · Instant PDF · Delivered to your inbox in under 2 minutes</div>
            <div className="price-wrap">
              <span className="price-was-text">$47</span>
              <span className="price-now">$19</span>
            </div>
            <div className="price-note">one-time · no subscription · no upsell</div>
            <button className="cta-btn">YES — I WANT THE PROTOCOL →</button>
            <div className="cta-sub">🔒 Secure checkout · Instant digital delivery</div>
          </div>

          <div className="urgency">
            <strong>⚠️ Why the $19 price may not last:</strong> I did not expect this article to get the traction it has. My team is currently fulfilling several thousand orders a day and we will almost certainly need to raise the price to slow demand while I prepare the second-stage materials. If you are on this page and the price still says $19, I would buy it today.
          </div>

          <div className="guarantee">
            <div className="g-icon">🛡️</div>
            <div>
              <div className="g-title">The "Working On The Right Problem" Guarantee</div>
              <div className="g-text">Follow the protocol for 60 days. If your jawline hasn't tightened, if the horizontal lines haven't softened, if you're not getting at least one unsolicited comment from someone who hasn't seen you in a while — email my team and we refund every cent. You keep the guide. I don't say this because I'm forced to. I say this because after three years of watching women run this protocol, I am genuinely confident that if you do the work for 60 days, you will not want the refund. You will want the next stage.</div>
            </div>
          </div>

          <hr className="divider" />

          <p><strong>P.S.</strong> — Everything you've tried until now has been working on the top layer of your skin. Not because you were doing it wrong. Because no one ever told you where the problem actually lives. Now you know. Now you can stop paying for the wrong solution. It's $19 and it's guaranteed for 60 days. The only thing I can't give you back is the time you've already spent.</p>

          <div style={{ marginTop: '28px' }}>
            <button className="cta-btn" style={{ maxWidth: '100%' }}>
              GET INSTANT ACCESS — $19 →
            </button>
          </div>

        </div>
      </main>

      <footer className="footer">
        <p>© 2026 Aging Backwards · A Dr. Rachel Kim publication</p>
        <p style={{ marginTop: '6px' }}>
          <a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Contact</a> · <a href="#">Disclaimer</a>
        </p>
        <p style={{ marginTop: '14px', maxWidth: '660px', margin: '14px auto 0' }}>
          This article is for informational and educational purposes only and does not constitute medical advice. Individual results vary. The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Always consult your physician before beginning any supplement protocol. Any photographs of persons used on this site are models. Results portrayed are illustrative.
        </p>
      </footer>
    </>
  )
}
