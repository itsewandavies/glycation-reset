'use client'

const BASE = 'https://assets.checkoutchamp.com/Funnel/assets/images/fadfad32-3aee-484f-859c-b3ac63a4a1f3/9cb704f3-ec9c-4b35-b540-d2faa38624c8/'
const BASE2 = 'https://assets.checkoutchamp.com/9db753a0-5b0b-11ef-8422-a5e3860e605f/'

const PIC = {
  wilma:    BASE + '1.jpg?versionId=0NUAWrBI2VRSuyISbojxI79d82WYU1NQ',
  mary:     BASE + '2.jpg?versionId=xU3ZcPP7DJric56PFRy8jrDu0xHei3Je',
  doris:    BASE + '9_1.jpg?versionId=_NrFzoGUnndioDAABcjz6al86X0letnS',
  marie:    BASE + '5.jpg?versionId=yi_8gXzTticpY4GWx61Ns2pxVDxlW19w',
  edith:    BASE + '1_1.jpg?versionId=VSs1LgTNfG_zeSLPSFqQAmgq.ba1VlfH',
  debra:    BASE + '2_1.jpg?versionId=Ps8uA8c4eOsFnAGmwbXvUtms08ikqERx',
  paula:    BASE + '4_1.jpg?versionId=utFzlkNYBuPmzPsNyUk5cd75NcnOK7kV',
  sarah:    BASE + '13.jpg?versionId=4.bXr2hz.qgqlXPKz3TwP0GCfTGAc4Lf',
  agnes:    BASE + '3_1.jpg?versionId=yYhKj_Q9YvaS3G5ogBwiUHGr9ZDoZb1z',
  barbara:  BASE + '5_1.jpg?versionId=gUygReqwqy7tyqXINzU3VrHaum6CS9o0',
  ethel:    BASE + '16.jpg?versionId=6MhQD1eXNxDWGeHiJXqepbkDZL3cNtMz',
  clara:    BASE + '6_1.jpg?versionId=E406lm8rbQZcPseNyqqGMeECrTJ9LR2k',
  emma:     BASE + '18.jpg?versionId=RdtH5isqAbkYtVrNWFWk.IQUx4zKOzSO',
  bridget:  BASE + '20.jpg?versionId=BiTW.sBNC0_v0wKGDHoBfztp5oe.ABlb',
  kate:     BASE + '7_1.jpg?versionId=ln1INfx.XveCvSdbpONkswXQaIEVfV4R',
  isabella: BASE + '8_1.jpg?versionId=.DWIe9uvM1jKnKNpaJgMDPHBteBX19sc',
  anna:     BASE2 + '1731516814824_download_3_.jpg',
}

const css = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #fff;
    color: #1a1a1a;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    font-size: 18px;
    line-height: 1.72;
  }

  /* ── PUBLICATION HEADER ── */
  .pub-top {
    border-bottom: 1px solid #e0e0e0;
    padding: 0 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  .pub-flag {
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #c0392b;
    padding: 10px 0 4px;
  }
  .pub-name {
    font-size: clamp(22px, 4.5vw, 36px);
    font-weight: 900;
    color: #1a1a1a;
    letter-spacing: -0.5px;
    font-family: Georgia, serif;
    padding-bottom: 10px;
    border-bottom: 3px solid #1a1a1a;
    margin-bottom: 8px;
  }
  .pub-nav {
    font-size: 12px;
    color: #666;
    padding-bottom: 10px;
    letter-spacing: 0.3px;
  }

  .trending-bar {
    background: #c0392b;
    color: #fff;
    text-align: center;
    padding: 9px 16px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.3px;
  }

  /* ── ARTICLE ── */
  .article-wrap {
    max-width: 800px;
    margin: 0 auto;
    padding: 28px 24px 100px;
  }

  .section-label {
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: #c0392b;
    margin-bottom: 14px;
  }

  .expert-h {
    font-size: clamp(23px, 4vw, 34px);
    font-weight: 800;
    color: #1a1a1a;
    line-height: 1.16;
    margin-bottom: 14px;
    font-family: Georgia, serif;
  }

  .deck {
    font-size: clamp(15px, 2.2vw, 17px);
    color: #555;
    line-height: 1.5;
    margin-bottom: 18px;
    font-style: italic;
    font-family: Georgia, serif;
  }

  .byline-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px 14px;
    padding: 12px 0;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 28px;
    font-size: 13px;
    color: #888;
  }
  .byline-author { font-weight: 700; color: #1a1a1a; }
  .byline-dot { color: #ddd; }

  /* ── BODY COPY ── */
  .body p {
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.76;
    color: #1e1e1e;
  }
  .body strong { font-weight: 700; color: #111; }
  .body em { font-style: italic; }

  .sh {
    font-size: clamp(15px, 2.2vw, 18px);
    font-weight: 900;
    color: #1a1a1a;
    margin: 44px 0 18px;
    padding-top: 22px;
    border-top: 2px solid #1a1a1a;
    letter-spacing: 0.2px;
  }

  .hero-img { width: 100%; max-height: 380px; object-fit: cover; display: block; margin: 24px 0 8px; }
  .inline-img { width: 100%; max-height: 320px; object-fit: cover; display: block; margin: 22px 0 8px; }
  .img-cap { font-size: 13px; color: #999; font-style: italic; text-align: center; margin-bottom: 32px; }

  .callout-r {
    background: #fff2f2;
    border-left: 5px solid #c0392b;
    padding: 18px 22px;
    margin: 28px 0;
    font-size: 17px;
    line-height: 1.7;
    color: #333;
  }

  .divider { border: none; border-top: 1px solid #ebebeb; margin: 38px 0; }

  /* ── ICON LIST ── */
  .icon-list { list-style: none; padding: 0; margin: 0 0 24px; }
  .icon-list li {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    font-size: 17px;
    color: #222;
    line-height: 1.62;
    padding: 9px 0;
    border-bottom: 1px solid #f2f2f2;
  }
  .icon-list li:last-child { border-bottom: none; }
  .il-icon { flex-shrink: 0; margin-top: 1px; }

  /* ── COMPOUND TEASES ── */
  .compound-list { list-style: none; padding: 0; margin: 0 0 24px; }
  .compound-list li {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    font-size: 17px;
    color: #222;
    line-height: 1.65;
    padding: 12px 0;
    border-bottom: 1px solid #f2f2f2;
  }
  .compound-list li:last-child { border-bottom: none; }
  .c-num {
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #c0392b;
    flex-shrink: 0;
    margin-top: 3px;
    width: 18px;
  }

  /* ── MID-ARTICLE CTA ── */
  .mid-cta {
    background: #1a1a1a;
    color: #fff;
    border-radius: 6px;
    padding: 20px 24px;
    margin: 32px 0;
    font-size: 16px;
    line-height: 1.65;
  }
  .mid-cta p { font-size: 15px; color: #ccc; margin-bottom: 14px; line-height: 1.6; }
  .mid-cta p:last-child { margin-bottom: 0; }
  .mid-cta a, .mid-cta span.cta-inline {
    display: inline-block;
    background: #27ae60;
    color: #fff;
    font-size: 16px;
    font-weight: 800;
    padding: 12px 24px;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    letter-spacing: 0.2px;
  }

  /* ── TESTIMONIALS ── */
  .t-stack { display: flex; flex-direction: column; gap: 14px; margin: 28px 0; }
  .t-card {
    background: #fafafa;
    border: 1px solid #e8e8e8;
    border-radius: 6px;
    padding: 18px 20px;
  }
  .t-stars { color: #f0a500; font-size: 15px; margin-bottom: 10px; letter-spacing: 1px; }
  .t-text { font-size: 16px; color: #333; line-height: 1.72; margin-bottom: 12px; font-family: Georgia, serif; font-style: italic; }
  .t-author { display: flex; align-items: center; gap: 10px; }
  .t-avatar { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
  .t-name { font-size: 13px; font-weight: 700; color: #111; }
  .t-verified { font-size: 11px; color: #1e6b1e; font-weight: 700; margin-top: 2px; }

  /* ── EXACT FACEBOOK COMMENT UI ── */
  .fb-wrap { margin: 32px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
  .fbc { display: flex; gap: 8px; margin-bottom: 2px; align-items: flex-start; }
  .fbc-av { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
  .fbc-av-sm { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
  .fbc-bubble { background: #f0f2f5; border-radius: 18px; padding: 8px 12px; align-self: flex-start; max-width: calc(100% - 52px); }
  .fbc-name { font-size: 13px; font-weight: 700; color: #050505; line-height: 1.2; margin-bottom: 3px; }
  .fbc-name-admin { font-size: 13px; font-weight: 700; color: #1877f2; line-height: 1.2; margin-bottom: 3px; }
  .fbc-text { font-size: 15px; color: #050505; line-height: 1.36; }
  .fbc-tag { color: #1877f2; font-weight: 600; }
  .fbc-acts { display: flex; justify-content: space-between; align-items: center; padding: 3px 0 14px 48px; font-size: 12px; color: #65676b; }
  .fbc-acts-sm { padding-left: 40px; }
  .fbc-act-group { display: flex; align-items: center; }
  .fbc-act { font-weight: 700; color: #65676b; cursor: pointer; }
  .fbc-sep { margin: 0 4px; font-weight: 400; }
  .fbc-ts { font-weight: 400; }
  .fbc-lc { font-weight: 400; font-size: 13px; }
  .fbc-replies { padding-left: 48px; }

  /* ── INSIDE BOX ── */
  .inside-box { background: #fafafa; border: 1px solid #e0e0e0; border-radius: 6px; padding: 26px 28px; margin: 28px 0; }
  .inside-title { font-size: 19px; font-weight: 800; color: #1a1a1a; margin-bottom: 4px; }
  .inside-sub { font-size: 13px; color: #999; margin-bottom: 20px; }
  .inside-item { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 16px; font-size: 16px; color: #333; line-height: 1.65; }
  .i-check { color: #1e6b1e; font-weight: 900; font-size: 17px; flex-shrink: 0; margin-top: 2px; }

  /* ── PRODUCT BOX ── */
  .product-box {
    border: 2px solid #1a1a1a;
    border-radius: 8px;
    padding: 32px 28px;
    margin: 32px 0;
    text-align: center;
  }
  .product-title { font-size: 24px; font-weight: 900; color: #1a1a1a; margin-bottom: 4px; font-family: Georgia, serif; }
  .product-sub { font-size: 14px; color: #777; margin-bottom: 18px; }
  .price-wrap { margin-bottom: 4px; }
  .price-was-text { font-size: 20px; color: #bbb; text-decoration: line-through; margin-right: 8px; }
  .price-now { font-size: 52px; font-weight: 900; color: #c0392b; }
  .price-note { font-size: 13px; color: #aaa; margin-bottom: 22px; }

  .trust-list { list-style: none; padding: 0; margin: 0 0 22px; text-align: left; display: inline-block; }
  .trust-list li { font-size: 14px; color: #444; line-height: 1.8; }
  .trust-list li::before { content: "✅ "; }

  .cta-btn {
    display: block;
    background: #27ae60;
    color: #fff;
    font-size: 19px;
    font-weight: 800;
    padding: 20px 28px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    width: 100%;
    max-width: 480px;
    margin: 0 auto 12px;
    text-align: center;
    letter-spacing: 0.2px;
    transition: background 0.2s;
    line-height: 1.3;
  }
  .cta-btn:hover { background: #219a53; }
  .cta-sub { font-size: 13px; color: #aaa; text-align: center; }

  .urgency {
    background: #fffbea;
    border: 1px solid #f0c040;
    border-radius: 5px;
    padding: 16px 20px;
    margin: 20px 0;
    font-size: 15px;
    color: #5a4000;
    line-height: 1.68;
  }

  .guarantee {
    background: #f0faf0;
    border: 1px solid #8dc88d;
    border-radius: 6px;
    padding: 24px 26px;
    margin: 28px 0;
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }
  .g-icon { font-size: 40px; flex-shrink: 0; }
  .g-title { font-size: 18px; font-weight: 800; color: #1a1a1a; margin-bottom: 8px; }
  .g-text { font-size: 15px; color: #333; line-height: 1.74; }

  .footer {
    background: #111;
    color: rgba(255,255,255,0.36);
    text-align: center;
    padding: 30px 20px;
    font-size: 12px;
    line-height: 1.95;
    margin-top: 70px;
  }
  .footer a { color: rgba(255,255,255,0.26); text-decoration: none; }

  .transform-img-wrap { display: flex; gap: 12px; margin: 24px 0; }
  .transform-img-wrap img { width: 50%; border-radius: 6px; object-fit: cover; }

  @media (max-width: 600px) {
    body { font-size: 17px; }
    .article-wrap { padding: 20px 16px 60px; }
    .product-box { padding: 24px 18px; }
    .guarantee { flex-direction: column; gap: 12px; }
    .inside-box { padding: 20px 16px; }
    .transform-img-wrap { flex-direction: column; }
    .transform-img-wrap img { width: 100%; }
    .mid-cta { padding: 18px; }
  }
`

type FbComment = {
  av: string; avSm?: boolean; name: string; admin?: boolean
  text: React.ReactNode; ts: string; likes: string
  replies?: FbComment[]
}

function FbBubble({ c }: { c: FbComment }) {
  return (
    <>
      <div className="fbc">
        <img src={c.av} alt="" className={c.avSm ? 'fbc-av-sm' : 'fbc-av'} />
        <div className="fbc-bubble">
          {c.admin ? <div className="fbc-name-admin">{c.name}</div> : <div className="fbc-name">{c.name}</div>}
          <div className="fbc-text">{c.text}</div>
        </div>
      </div>
      <div className={`fbc-acts${c.avSm ? ' fbc-acts-sm' : ''}`}>
        <div className="fbc-act-group">
          <span className="fbc-act">Like</span><span className="fbc-sep">·</span>
          <span className="fbc-act">Reply</span><span className="fbc-sep">·</span>
          <span className="fbc-ts">{c.ts}</span>
        </div>
        <span className="fbc-lc">👍 {c.likes}</span>
      </div>
      {c.replies && (
        <div className="fbc-replies">
          {c.replies.map((r, i) => <FbBubble key={i} c={{ ...r, avSm: true }} />)}
        </div>
      )}
    </>
  )
}

export default function Home() {
  const comments: FbComment[] = [
    {
      av: PIC.clara, name: 'Brenda Atkinson', ts: '2h', likes: '1.9K',
      text: <>Scrolled past 3 times before I read it. Wish I&apos;d read it the first time. 6 weeks in. My sister won&apos;t stop asking what I did. I haven&apos;t told her because it&apos;s a little bit fun to watch her try to figure it out 😂</>,
      replies: [{
        av: PIC.bridget, name: 'Donna R.', ts: '1h', likes: '423',
        text: <><span className="fbc-tag">Brenda Atkinson</span> hahaha this is exactly me too. My book club is in my kitchen right now and every single one of them asked</>
      }]
    },
    {
      av: PIC.sarah, name: 'Marcia L.', ts: '4h', likes: '2.4K',
      text: <>Okay I&apos;ll be the skeptic. I&apos;ve bought every single thing. Olay. Rodan. Arbonne. Prevage. That $400 La Mer cream my daughter got me. NONE of it worked. Willing to try $19. I&apos;ll report back.</>,
      replies: [{
        av: PIC.sarah, name: 'Marcia L.', ts: '22m', likes: '1.1K',
        text: <>UPDATE week 4 — getting comments at church. Not deleting my original comment because I want other skeptical women to see the before</>
      }]
    },
    {
      av: PIC.emma, name: 'Ruth V.', ts: '6h', likes: '89',
      text: <>Is this safe with blood pressure medication? My doctor is old school and I don&apos;t want to ask him if he&apos;ll just say no.</>,
      replies: [{
        av: PIC.kate, name: 'The Women\'s Daily · Dr. Kim\'s Team ✓', admin: true, ts: '5h', likes: '156',
        text: <>Hi Ruth — the guide includes a section on medication interactions. Please do check with your physician — but the three compounds have no known interactions with common BP meds. 💛</>
      }]
    },
    {
      av: PIC.isabella, name: 'Barbara M.', ts: '8h', likes: '3.2K',
      text: <>My husband just walked past the screen and said &quot;who is that&quot; and I said &quot;me&quot; and he said &quot;no the other picture&quot; and it WAS me. From 4 years ago. I&apos;m buying it tonight.</>
    },
    {
      av: PIC.debra, name: 'Eleanor F.', ts: '11h', likes: '234',
      text: <>I&apos;m 71. Is it too late? Will it still work?</>,
      replies: [{
        av: PIC.anna, name: 'Gladys P.', ts: '10h', likes: '687',
        text: <><span className="fbc-tag">Eleanor F.</span> Eleanor I&apos;m 73, started 5 months ago. My great granddaughter asked me if I dye my skin. I said no honey. She said it&apos;s very pretty. That is all I will say</>
      }]
    },
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="trending-bar">⚡ TRENDING — Health &amp; Beauty · Women's Health · Skin Science</div>

      <div className="pub-top">
        <div className="pub-flag">Health &amp; Beauty Desk</div>
        <div className="pub-name">THE WOMEN'S DAILY</div>
        <div className="pub-nav">Home &nbsp;·&nbsp; Health &nbsp;·&nbsp; Beauty &nbsp;·&nbsp; Nutrition &nbsp;·&nbsp; About</div>
      </div>

      <main className="article-wrap">

        <div className="section-label">Skin Science</div>

        <h1 className="expert-h">
          Retired Dermatologist: "Women Who Are 50 But Look 30 Aren't Using Creams — They're Doing This Instead"
        </h1>

        <p className="deck">She spent 22 years telling women to buy the wrong thing. Her mother's phone call changed everything.</p>

        <div className="byline-bar">
          <span className="byline-author">By Dr. Rachel Kim, MD</span>
          <span className="byline-dot">·</span>
          <span>Retired Board-Certified Dermatologist</span>
          <span className="byline-dot">·</span>
          <span>📅 Updated April 2026 · ⏱ 5 min read · 👁 1,284,991 views</span>
        </div>

        <div className="body">

          <p>My mother called me on a Sunday.</p>

          <p>She'd just turned 58.</p>

          <p>"Rachel," she said. "I added it up. I spent four thousand dollars on my face this year. I look worse."</p>

          <p>I had to sit down.</p>

          <p>Because I was a dermatologist. I'd been one for 22 years.</p>

          <p>And I knew — in that exact second — that every single product I'd ever sold her was working on the wrong part of her skin.</p>

          <p>Not the wrong brand.</p>

          <p><strong>The wrong part.</strong></p>

          <div className="sh">I Retired 18 Months Later</div>

          <p>This article is part of the reason why.</p>

          <p>I want to warn you before you keep reading: what I'm about to tell you is going to make you angry.</p>

          <p>Not at me.</p>

          <p>At the $89 billion industry that has taken your money for 40 years while hiding a simple anatomical fact that is in every dermatology textbook.</p>

          <p>It is the reason nothing has worked.</p>

          <p>Not the serums. Not the retinols. Not the "medical grade" line your friend sells at her Rodan + Fields parties.</p>

          <p>None of it was ever going to work.</p>

          <p>And it has nothing to do with you.</p>

          <img
            src="https://v3b.fal.media/files/b/0a973c0f/svmfYc3hnNwgGNGfoupN3_zgMPH2Fu.png"
            alt="Woman looking at vacation photos on her phone"
            className="hero-img"
          />
          <p className="img-cap">The thing that changed in your early 50s had nothing to do with the products you bought.</p>

          <div className="sh">Do This Before You Read Any Further</div>

          <p>Pick up your phone.</p>

          <p>Open your camera roll.</p>

          <p>Scroll back 5 years.</p>

          <p>Look at your jawline then. Look at it now.</p>

          <p>Most women I show this exercise to have the same reaction.</p>

          <p>The change wasn't gradual.</p>

          <p>It happened in a window. Somewhere around 52 or 53.</p>

          <p>And nothing you bought — nothing you tried — has been able to touch it.</p>

          <p>Here's why.</p>

          <div className="sh">Your Skin Has Two Layers. You've Been Treating The Wrong One.</div>

          <p>Every cream. Every serum. Every $300 "firming treatment."</p>

          <p>They all work on the top layer of your skin.</p>

          <p>It's called the epidermis. It's thin. It's mostly dead cells. It's what you can touch.</p>

          <p>The thing that's actually changed about your face — the jawline, the cheeks, the lift — is happening in the layer below it.</p>

          <p>It's called the dermis.</p>

          <p>And here is the part that made me quit my clinic:</p>

          <p><strong>Nothing you put on your skin can reach it. Not one product. Not one.</strong></p>

          <p>The molecules are too big. Your skin is designed to keep things out. That is literally its job.</p>

          <p>So every cream you've ever bought — every single one — has been working on the wrong layer.</p>

          <p>The layer you care about is untouched.</p>

          <img
            src="https://v3b.fal.media/files/b/0a973c14/JNqJhvUoO1-k9UtAqlJkO_Rg4vQebH.png"
            alt="Diagram showing cream sits on epidermis. Aging happens in dermis underneath."
            className="inline-img"
          />
          <p className="img-cap">Your cream sits on the top layer. The aging you care about happens in the layer below. They never meet.</p>

          <p>Ask any dermatologist. They'll tell you the same thing.</p>

          <p>They just won't tell you before you buy.</p>

          <div className="callout-r">
            If you've ever bought a skincare system — Rodan + Fields, Arbonne, Monat, any of them — and watched it do nothing for your jawline and cheeks despite using it religiously: you were not doing it wrong. The product was not defective. The person who sold it to you was not lying. They were just selling you something that, by the laws of biology, could not do what they implied it would do.
          </div>

          {/* ── MID CTA #1 (≈40%) ── */}
          <div className="mid-cta">
            <p>🔒 I explain exactly what to do about it below. I also put together a short guide with the specific protocol my mother used.</p>
            <span className="cta-inline">You can get it here for $19 → skip ahead</span>
          </div>

          <div className="sh">So What's Actually Happening In The Dermis?</div>

          <p>Here's the simple version.</p>

          <p>Every time your blood sugar spikes — from bread, pasta, rice, oatmeal, fruit, anything — sugar molecules bond to the collagen in your dermis.</p>

          <p>They attach. Permanently.</p>

          <p>Over time, that sugar-coated collagen gets stiff.</p>

          <p>It can't flex. It can't bounce back. It just… sags.</p>

          <p>Think of a mattress with old, rusted springs.</p>

          <p>The springs are still there. They just don't work anymore.</p>

          <p><strong>That is your face after 50.</strong></p>

          <div className="sh">That Is Why Your Jaw Changed</div>

          <p>It's not that you lost collagen.</p>

          <p>You still have plenty.</p>

          <p>It's that the collagen you have is stiffening from the inside — and that stiffening creates:</p>

          <ul className="icon-list">
            <li><span className="il-icon">👉</span> The softer jawline you see in photos</li>
            <li><span className="il-icon">👉</span> Cheeks that look slightly deflated in flat light</li>
            <li><span className="il-icon">👉</span> Horizontal lines on your forehead and neck</li>
            <li><span className="il-icon">👉</span> That "tired" look you didn't have in your 40s</li>
          </ul>

          <p>This has been in medical journals since 1982.</p>

          <p>It's not hidden. It's just not profitable to tell you.</p>

          <p>A cream can't reach it. A serum can't reach it.</p>

          <p>Only one thing can.</p>

          <div className="sh">The One Route That Actually Works</div>

          <p>If creams can't get there, what can?</p>

          <p>Your bloodstream.</p>

          <p>That's the only delivery route that reaches the dermis from the inside.</p>

          <p>It's why Botox is injected. It's why Accutane is swallowed. Because the dermis doesn't accept topicals.</p>

          <p>After my mother's phone call, I spent six months reading clinical literature I hadn't touched since medical school.</p>

          <p>And I found three oral compounds.</p>

          <p>All three had real, peer-reviewed, placebo-controlled trials.</p>

          <p>One showed statistically significant improvement in skin elasticity at 12 weeks in women aged 45–65.</p>

          <p>Not marginal. <strong>Significant.</strong></p>

          <p>I'm not going to name them publicly on this page. I'll explain why in a second.</p>

          <p>But I will tell you this:</p>

          <ul className="compound-list">
            <li><span className="c-num">01</span><span><strong>One stops new damage.</strong> It's a plant extract. You've heard of the active molecule from red wine research.</span></li>
            <li><span className="c-num">02</span><span><strong>One rebuilds the structure underneath your skin.</strong> A berry oil. This is the one that creates the "lifted" look.</span></li>
            <li><span className="c-num">03</span><span><strong>One has a double-blind trial behind it.</strong> A bark extract. Most brands sell it at a fraction of the study dose.</span></li>
          </ul>

          <div className="sh">Why I Won't Name Them Here</div>

          <p>Two reasons.</p>

          <p>One — if I name the exact brands on an article this size, they sell out within 48 hours and the price doubles. I've watched it happen.</p>

          <p>Two — the doses matter more than the compound. Most brands on Amazon sell these at 10–20% of the clinical dose. You'd be taking the right thing in the wrong amount and wondering why nothing's happening.</p>

          <p>I put the exact protocol — compound names, clinical doses, where to buy them, when to take them — in a short guide.</p>

          <p>It's 30 pages. It costs $19.</p>

          <p>More on that in a moment.</p>

          <div className="sh">First, Let Me Tell You What Happened To My Mother</div>

          <p>Week 3: She called me and said her skin felt "springy." I laughed. It was such a grandmother word.</p>

          <p>Week 6: Her sister — who hadn't seen her since Easter — asked her if she'd had work done.</p>

          <p>Week 12: She sent me a photo from a wedding.</p>

          <p>She was 62.</p>

          <p>She looked like herself. Not a younger version of herself. Just the version from the photos 5 years ago she'd stopped looking at.</p>

          <p>That was three years ago. Since then I've given the protocol to hundreds of women.</p>

          <div className="transform-img-wrap">
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80&auto=format&fit=crop&crop=face" alt="Before" />
            <img src="https://v3b.fal.media/files/b/0a973c17/V1IK-oQ1w26navNKd0xLG_g7duroQQ.png" alt="After" />
          </div>
          <p className="img-cap">The difference between working on the wrong problem — and finally working on the right one.</p>

          {/* ── MID CTA #2 (≈70%) ── */}
          <div className="mid-cta">
            <p>🔒 GET THE FULL PROTOCOL — 30-page PDF · Delivered to your inbox in 2 minutes.</p>
            <span className="cta-inline">👉 YES — I WANT THE PROTOCOL FOR $19 →</span>
          </div>

          <div className="sh">Why $19 And Not $400?</div>

          <p>I want to be honest with you about this.</p>

          <p>I'm retired. I don't have a clinic. I don't need consultation fees.</p>

          <p>But more than that — there are millions of women who have spent thousands of dollars on the wrong thing through no fault of their own.</p>

          <p>I cannot in good conscience hide this behind a consultation price.</p>

          <p>$19 is roughly my cost to publish and process the order.</p>

          <p>If you do the protocol for 60 days and see what hundreds of other women have seen — and if you want to go further — there's a longer program you can ask me about later.</p>

          <p>But the $19 guide is complete. You don't need anything else. The first step works.</p>

          <p>Also worth knowing: the three compounds themselves cost about <strong>$35 a month total</strong>. Less than one bottle of the serum that isn't working.</p>

          <div className="sh">What's Actually In The Guide</div>

          <div className="inside-box">
            <div className="inside-title">The Glycation Reversal Protocol</div>
            <div className="inside-sub">30-page clinical guide · Instant PDF · No filler · No fluff</div>
            <div className="inside-item"><span className="i-check">✓</span><span><strong>The three compounds, named</strong> — with the clinical-trial doses. Not label doses. Study doses.</span></div>
            <div className="inside-item"><span className="i-check">✓</span><span><strong>Exactly which brands I trust</strong> — so you don't waste $60 at the health store on under-dosed versions.</span></div>
            <div className="inside-item"><span className="i-check">✓</span><span><strong>The daily sequence</strong> — which compound at which time. Absorption windows matter more than people realise.</span></div>
            <div className="inside-item"><span className="i-check">✓</span><span><strong>The 7 foods that accelerate the problem</strong> — one of them is almost certainly in your breakfast right now, and a nutritionist probably told you it was healthy.</span></div>
            <div className="inside-item"><span className="i-check">✓</span><span><strong>The 12 foods that slow it down</strong> — most are cheap and already in your kitchen.</span></div>
            <div className="inside-item"><span className="i-check">✓</span><span><strong>The 14-day + 90-day tracker</strong> — what to look for and when, so you're not guessing.</span></div>
          </div>

          <div className="sh">What Women Have Said</div>

          <div className="t-stack">
            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">"i'm 57. been using it 11 weeks. my daughter called me crying last sunday. she said mom what have you been doing you look like the pictures of you from when i was in high school. i wasn't going to write a review but that's why i'm writing one."</p>
              <div className="t-author">
                <img src={PIC.doris} alt="" className="t-avatar" />
                <div><div className="t-name">Brenda S., Ohio</div><div className="t-verified">✓ Verified Purchase</div></div>
              </div>
            </div>

            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">"The food list alone. I'd been eating the #3 food on the 'bad' list every morning of my life since I was 40. My nutritionist told me to. Cut it out week one. 10 days later my husband asked what I changed."</p>
              <div className="t-author">
                <img src={PIC.paula} alt="" className="t-avatar" />
                <div><div className="t-name">Kathy M., 54, Georgia</div><div className="t-verified">✓ Verified Purchase</div></div>
              </div>
            </div>

            <div className="t-card">
              <div className="t-stars">★★★★☆</div>
              <p className="t-text">"Took longer for me than the article said. I'm 63. Didn't see anything until week 7. Then it came on fast. Not taking away a star for the price, taking away a star for the timing. Still worth $19."</p>
              <div className="t-author">
                <img src={PIC.ethel} alt="" className="t-avatar" />
                <div><div className="t-name">Linda R., 63, Florida</div><div className="t-verified">✓ Verified Purchase</div></div>
              </div>
            </div>

            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">"I am honestly embarrassed that I spent what I spent on Rodan + Fields. My friend who sold it to me also bought this last week. Neither of us knew. Nobody knew. I don't blame her."</p>
              <div className="t-author">
                <img src={PIC.agnes} alt="" className="t-avatar" />
                <div><div className="t-name">Sandra K., 57, Colorado</div><div className="t-verified">✓ Verified Purchase</div></div>
              </div>
            </div>

            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">"Bought it for myself, bought it for my sister, bought it for my mother in law. Nobody has ever explained my own face to me before. That's what this is. Thank you Dr Kim."</p>
              <div className="t-author">
                <img src={PIC.wilma} alt="" className="t-avatar" />
                <div><div className="t-name">Pauline W., 55, Arizona</div><div className="t-verified">✓ Verified Purchase</div></div>
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* ── FACEBOOK COMMENTS ── */}
          <div className="fb-wrap">
            {comments.map((c, i) => <FbBubble key={i} c={c} />)}
          </div>

          <hr className="divider" />

          <div className="sh">Here's The Thing</div>

          <p>I don't know if you'll buy the guide.</p>

          <p>But I do want you to understand what's actually happening, because if you don't — you'll spend another year avoiding the camera.</p>

          <p>You'll spend another $400 on a cream that can't work.</p>

          <p>You'll look at a photo next Christmas and feel the same thing you felt this Christmas.</p>

          <p>Not because you did anything wrong.</p>

          <p>Because no one told you where the problem lives.</p>

          <p>Now you know.</p>

          <div className="sh">Get The Protocol</div>

          <div className="product-box">
            <div className="product-title">The Glycation Reversal Protocol</div>
            <div className="product-sub">30-page clinical guide · Instant PDF · Delivered to your inbox in 2 minutes</div>
            <div className="price-wrap">
              <span className="price-was-text">$47</span>
              <span className="price-now">$19</span>
            </div>
            <div className="price-note">one-time · no subscription · no upsell</div>
            <ul className="trust-list">
              <li>60-day money-back guarantee</li>
              <li>No subscription. No upsell. One-time.</li>
              <li>Works on women 45–75</li>
              <li>Compounds cost ~$35/month total (cheaper than one serum)</li>
            </ul>
            <button className="cta-btn">👉 YES — I WANT THE PROTOCOL FOR $19 →</button>
            <div className="cta-sub">🔒 Secure checkout · Instant delivery</div>
          </div>

          <div className="urgency">
            <strong>⏳ Why The $19 Price Won't Last</strong><br /><br />
            When I first published this, I expected maybe a few hundred orders. We're now at several thousand a day.<br /><br />
            My concern isn't the price. My concern is the <strong>supply of the three compounds</strong>.<br /><br />
            If this article keeps being shared at the pace it's being shared, the three supplement brands I recommend in the guide will sell out. I've already had to update two of the recommendations because one brand temporarily halted orders.<br /><br />
            If you're on this page and the price still says $19, and the guide still includes my current brand recommendations, I'd buy it today. I genuinely cannot promise what this looks like next week.
          </div>

          <div className="guarantee">
            <div className="g-icon">🛡️</div>
            <div>
              <div className="g-title">The "If It Doesn't Work, Don't Pay" Promise</div>
              <div className="g-text">Follow the protocol for 60 days. If your jawline hasn't tightened. If the lines haven't softened. If no one has commented. If you feel like you wasted $19 — email my team. We'll refund every cent. You keep the guide. I'm confident that after 60 days you won't want the refund. You'll want to know what comes next.</div>
            </div>
          </div>

          <div style={{ marginTop: '28px' }}>
            <button className="cta-btn" style={{ maxWidth: '100%' }}>
              GET THE PROTOCOL — $19 →
            </button>
          </div>

          <hr className="divider" />

          <p><strong>P.S.</strong> — Let me say this one more time so it's clear.</p>

          <p>Everything you've tried has been working on the wrong layer of your skin.</p>

          <p>You didn't fail. The products failed you.</p>

          <p>The only real route to what you actually care about — the jawline, the cheeks, the lift — runs through the bloodstream. Not through a jar.</p>

          <p>It's $19. It's guaranteed for 60 days. The compounds cost less than one bottle of serum.</p>

          <p><strong>The only thing I can't give you back is the next year.</strong></p>

          <div style={{ marginTop: '20px' }}>
            <button className="cta-btn" style={{ maxWidth: '100%' }}>
              👉 YES — I WANT THE PROTOCOL FOR $19 →
            </button>
          </div>

        </div>
      </main>

      <footer className="footer">
        <p>© 2026 The Women's Daily — Health &amp; Beauty Desk</p>
        <p>Contributor column by Dr. Rachel Kim, MD (retired). Views are the author's.</p>
        <p style={{ marginTop: '6px' }}>
          <a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Contact</a> · <a href="#">Disclaimer</a>
        </p>
        <p style={{ marginTop: '14px', maxWidth: '640px', margin: '14px auto 0' }}>
          Any photos depicted are models. Results vary. Statements have not been evaluated by the FDA. This product does not diagnose, treat, cure, or prevent any disease. Consult your physician before any supplement protocol.
        </p>
      </footer>
    </>
  )
}
