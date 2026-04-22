'use client'
import React, { useState, useEffect } from 'react'

const BASE = 'https://assets.checkoutchamp.com/Funnel/assets/images/fadfad32-3aee-484f-859c-b3ac63a4a1f3/9cb704f3-ec9c-4b35-b540-d2faa38624c8/'
const CDN = 'https://assets.cdn.filesafe.space/fveUHPreYRqiA1APSbJt/media/'

const IMGS = {
  heroGif:         CDN + '69e88f32a1636a6c651bfda1.gif',
  emotionalAnchor: CDN + '69e88f60a1636a6c651c0897.png',
  mechanismGif:    CDN + '69e88f88a1636a6c651c1055.gif',
  mattressGif:     CDN + '69e89005b0e5e2bb7fbd808d.gif',
  researchImg:     CDN + '69e8901c168febbdc22551c6.png',
  bloodstreamGif:  CDN + '69e890a206d54209df923088.gif',
  compoundsImg:    CDN + '69e89041b0e5e2bb7fbd8ecd.png',
  weddingPhoto:    CDN + '69e890c3b0e5e2bb7fbdae2e.png',
  productMockup:   CDN + '69e890ec717d5dd4e1f91384.png',
  testimonialGrid: CDN + '69e891bd717d5dd4e1f94797.png',
  guaranteeBadge:  CDN + '69e8916006d54209df925c4f.png',
  drKim:           CDN + '69e891d98313fff52bb06955.png',
  brenda:  BASE + '9_1.jpg?versionId=_NrFzoGUnndioDAABcjz6al86X0letnS',
  donna:   BASE + '2_1.jpg?versionId=Ps8uA8c4eOsFnAGmwbXvUtms08ikqERx',
  marcia:  BASE + '4_1.jpg?versionId=utFzlkNYBuPmzPsNyUk5cd75NcnOK7kV',
  ruth:    BASE + '8_1.jpg?versionId=.DWIe9uvM1jKnKNpaJgMDPHBteBX19sc',
  barbara: BASE + '1_1.jpg?versionId=VSs1LgTNfG_zeSLPSFqQAmgq.ba1VlfH',
  eleanor: BASE + '4.jpg?versionId=EEpo4rQl.5.gWGqPWQZT2CGKNlirgFLZ',
  gladys:  BASE + '1.jpg?versionId=0NUAWrBI2VRSuyISbojxI79d82WYU1NQ',
  admin:   BASE + '2.jpg?versionId=xU3ZcPP7DJric56PFRy8jrDu0xHei3Je',
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;600;700;800;900&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  background: #FAF8F5;
  color: #111;
  font-family: 'Lora', Georgia, serif;
  font-size: 21px;
  line-height: 1.75;
}

/* ── PUB HEADER ── */
.trending-bar {
  background: #C0392B;
  color: #fff;
  text-align: center;
  padding: 10px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.pub-header {
  border-bottom: 2px solid #1A1A1A;
  padding: 12px 24px 10px;
  text-align: center;
  background: #FAF8F5;
}

.pub-section-label {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #C0392B;
  margin-bottom: 6px;
}

.pub-title {
  font-family: Georgia, serif;
  font-size: 38px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #1A1A1A;
  line-height: 1.1;
}

.pub-nav {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.pub-nav a {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #1A1A1A;
  text-decoration: none;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* ── ARTICLE ── */
.article-wrap {
  max-width: 680px;
  margin: 0 auto;
  padding: 32px 24px 0;
}

.section-label {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #C0392B;
  margin-bottom: 12px;
}

h1 {
  font-family: 'Inter', sans-serif;
  font-size: 34px;
  font-weight: 900;
  line-height: 1.22;
  color: #111;
  margin-bottom: 16px;
}

.deck {
  font-family: 'Lora', Georgia, serif;
  font-style: italic;
  font-size: 21px;
  color: #222;
  line-height: 1.65;
  margin-bottom: 20px;
}

.byline-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding: 16px 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin-bottom: 28px;
}

.byline-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.byline-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.byline-name {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #111;
  line-height: 1.4;
}

.byline-title {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #555;
}

.byline-right {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #555;
  line-height: 1.7;
  text-align: right;
}

/* ── IMAGES ── */
.hero-gif {
  width: 100%;
  border-radius: 8px;
  display: block;
  margin-bottom: 32px;
}

.emotional-img, .mechanism-gif, .research-img, .compounds-img, .wedding-photo {
  width: 100%;
  border-radius: 8px;
  display: block;
  margin: 24px 0;
}

.gif-caption, .wedding-caption {
  font-family: 'Inter', sans-serif;
  font-style: italic;
  color: #777;
  font-size: 14px;
  text-align: center;
  margin-top: -16px;
  margin-bottom: 32px;
}

.testimonial-grid-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  margin: 20px 0;
}

.testimonial-caption {
  font-family: 'Inter', sans-serif;
  font-style: italic;
  color: #777;
  font-size: 14px;
  text-align: center;
  margin-top: -16px;
  margin-bottom: 28px;
}

/* ── BODY COPY ── */
.body-copy {
  font-family: 'Lora', Georgia, serif;
  font-size: 21px;
  color: #111;
  line-height: 1.75;
}

.body-copy p {
  margin-bottom: 28px;
  color: #111;
}

.body-copy strong { font-weight: 700; color: #000; }

.sh {
  font-family: 'Inter', sans-serif;
  font-size: 26px;
  font-weight: 800;
  color: #111;
  margin-top: 48px;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
  line-height: 1.25;
}

/* ── PULL QUOTE ── */
.pull-quote {
  background: #FFF7F2;
  border-left: 4px solid #E07856;
  border-radius: 0 6px 6px 0;
  padding: 24px 28px;
  margin: 32px 0;
  font-style: italic;
  font-size: 20px;
  color: #222;
  line-height: 1.72;
}

/* ── SOFT CTA ── */
.soft-cta {
  background: #F0F4F9;
  border: 1.5px solid #1F3A5F;
  border-radius: 8px;
  padding: 20px 24px;
  margin: 36px 0;
  font-family: 'Inter', sans-serif;
  font-size: 17px;
  color: #111;
  line-height: 1.6;
}

.soft-cta a {
  color: #1F3A5F;
  font-weight: 700;
  text-decoration: underline;
}

/* ── ICON + COMPOUND LISTS ── */
.icon-list { list-style: none; padding: 0; margin: 24px 0 28px; }

.icon-list li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 20px;
  color: #111;
  line-height: 1.65;
  margin-bottom: 14px;
}

.compound-list { list-style: none; padding: 0; margin: 24px 0 28px; }

.compound-list li {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  font-size: 20px;
  color: #111;
  line-height: 1.65;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e8e8e8;
}

.compound-list li:last-child { border-bottom: none; }

.compound-num {
  color: #E07856;
  font-weight: 800;
  font-size: 13px;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.05em;
  flex-shrink: 0;
  margin-top: 4px;
}

/* ── INSIDE BOX ── */
.inside-box {
  background: #FFFDF9;
  border: 1.5px solid #E0D8CE;
  border-radius: 8px;
  padding: 28px;
  margin: 28px 0;
}

.inside-title {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: #111;
  margin-bottom: 4px;
}

.inside-sub {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #777;
  margin-bottom: 22px;
}

.inside-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  margin-bottom: 18px;
  font-size: 18px;
  color: #111;
  line-height: 1.65;
}

.i-check {
  color: #1a7a1a;
  font-weight: 900;
  font-size: 18px;
  flex-shrink: 0;
  margin-top: 2px;
}

/* ── FACEBOOK COMMENTS — exact 2026 UI ── */
.fb-wrap {
  margin: 32px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.fb-comment-block {
  margin-bottom: 4px;
}

.fbc {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.fbc-av {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.fbc-av-sm {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.fbc-bubble {
  background: #f0f2f5;
  border-radius: 18px;
  padding: 8px 14px;
  display: inline-block;
  max-width: calc(100% - 52px);
}

.fbc-name {
  font-size: 13px;
  font-weight: 700;
  color: #050505;
  line-height: 1.2;
  margin-bottom: 3px;
}

.fbc-name-admin {
  font-size: 13px;
  font-weight: 700;
  color: #1877f2;
  line-height: 1.2;
  margin-bottom: 3px;
}

.fbc-text {
  font-size: 15px;
  color: #050505;
  line-height: 1.4;
}

.fbc-tag { color: #1877f2; font-weight: 600; }

/* Action row — the ONLY thing below the bubble */
.fbc-actions {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 5px 0 16px 48px;
  font-size: 12px;
  font-weight: 600;
  color: #65676b;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.fbc-actions-sm {
  padding-left: 40px;
}

.fbc-action { color: #65676b; font-weight: 600; cursor: pointer; }
.fbc-action:hover { text-decoration: underline; }
.fbc-dot { margin: 0 5px; color: #bcc0c4; font-weight: 400; font-size: 11px; }
.fbc-time { font-weight: 400; color: #65676b; }

/* Reply threading */
.fbc-replies {
  padding-left: 48px;
  margin-top: 0;
}

/* ── CTA BLOCK ── */
.cta-block {
  background: #FFF7F2;
  border: 1.5px solid #1F3A5F;
  border-radius: 10px;
  padding: 28px;
  margin: 40px 0;
  text-align: center;
}

.cta-mockup {
  width: 100%;
  max-width: 340px;
  margin: 0 auto 22px;
  border-radius: 8px;
  display: block;
}

.cta-title {
  font-family: Georgia, serif;
  font-size: 26px;
  color: #1F3A5F;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1.25;
}

.cta-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #777;
  margin-bottom: 18px;
}

.price-line { margin-bottom: 18px; }

.price-was {
  text-decoration: line-through;
  color: #bbb;
  font-size: 20px;
  margin-right: 8px;
  font-family: 'Inter', sans-serif;
}

.price-now {
  color: #E07856;
  font-size: 48px;
  font-weight: 800;
  font-family: 'Inter', sans-serif;
}

.checklist {
  list-style: none;
  padding: 0;
  margin: 0 auto 22px;
  text-align: left;
  display: inline-block;
}

.checklist li {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #222;
  line-height: 1.9;
  padding-left: 4px;
}

.checklist li::before {
  content: '✓ ';
  color: #1a7a1a;
  font-weight: 700;
}

.cta-btn {
  background: #E07856;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 20px 28px;
  font-size: 20px;
  font-weight: 800;
  width: 100%;
  max-width: 480px;
  min-height: 60px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 4px 16px rgba(224,120,86,0.40);
  margin: 0 auto 14px;
  display: block;
  letter-spacing: 0.01em;
  transition: background 0.2s, transform 0.1s;
}

.cta-btn:hover { background: #d06540; }
.cta-btn:active { transform: scale(0.99); }

.cta-trust {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #999;
}

/* ── URGENCY ── */
.urgency-banner {
  background: #FEF2F2;
  border: 1.5px solid #DC2626;
  border-left: 5px solid #DC2626;
  border-radius: 8px;
  padding: 24px;
  margin: 28px 0;
}

.urgency-icon { font-size: 22px; margin-bottom: 10px; }

.urgency-title {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  color: #DC2626;
  font-size: 18px;
  margin-bottom: 12px;
}

.urgency-body {
  font-family: 'Lora', Georgia, serif;
  font-size: 17px;
  color: #111;
  line-height: 1.7;
  margin-bottom: 14px;
}

.urgency-counter {
  font-family: 'Inter', sans-serif;
  color: #059669;
  font-weight: 700;
  font-size: 14px;
}

/* ── GUARANTEE ── */
.guarantee-section {
  background: #F0FAF0;
  border: 1px solid #8dc88d;
  border-radius: 8px;
  padding: 24px;
  margin: 28px 0;
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.guarantee-badge { flex-shrink: 0; }
.guarantee-badge img { width: 130px; height: auto; }

.guarantee-text h3 {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  color: #1F3A5F;
  margin-bottom: 10px;
  font-size: 18px;
}

.guarantee-text p {
  font-size: 17px;
  color: #222;
  line-height: 1.72;
}

/* ── STICKY CTA BAR ── */
.sticky-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transform: translateY(100%);
  transition: transform 0.25s ease;
}

.sticky-bar.show { transform: translateY(0); }

.sticky-inner {
  background: #E07856;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  cursor: pointer;
  border: none;
  width: 100%;
  padding: 0;
  min-height: 58px;
}

.sticky-text {
  font-family: 'Inter', sans-serif;
  font-size: 17px;
  font-weight: 800;
  color: white;
  text-align: center;
  padding: 14px 20px;
  line-height: 1.3;
}

.sticky-sub {
  font-size: 12px;
  font-weight: 400;
  opacity: 0.85;
  display: block;
  margin-top: 2px;
}

/* ── DIVIDER ── */
.divider {
  border: none;
  border-top: 1px solid #e4e0da;
  margin: 44px 0;
}

/* ── FOOTER ── */
.footer {
  background: #111;
  color: rgba(255,255,255,0.38);
  text-align: center;
  padding: 40px 20px;
  margin-top: 70px;
  font-size: 12px;
  line-height: 2;
  font-family: 'Inter', sans-serif;
}

.footer a { color: rgba(255,255,255,0.28); text-decoration: none; }

/* ── MOBILE ── */
@media (max-width: 600px) {
  body { font-size: 19px; }
  .article-wrap { padding: 20px 18px 0; }
  h1 { font-size: 26px; }
  .sh { font-size: 22px; margin-top: 40px; }
  .deck { font-size: 19px; }
  .body-copy { font-size: 19px; }
  .pull-quote { font-size: 18px; padding: 20px; }
  .icon-list li { font-size: 18px; }
  .compound-list li { font-size: 18px; }
  .inside-item { font-size: 17px; }
  .guarantee-section { flex-direction: column; gap: 16px; }
  .guarantee-badge img { width: 100px; }
  .byline-right { text-align: left; }
  .byline-row { flex-direction: column; gap: 10px; }
  .cta-block { padding: 22px 18px; }
  .cta-title { font-size: 22px; }
  .price-now { font-size: 40px; }
  .cta-btn { font-size: 18px; }
  .sticky-text { font-size: 16px; }
  .pub-title { font-size: 28px; }
}
`

type FbComment = {
  av: string
  avSm?: boolean
  name: string
  admin?: boolean
  text: React.ReactNode
  ts: string
  replies?: FbComment[]
}

function FbBubble({ c }: { c: FbComment }) {
  const actionsClass = `fbc-actions${c.avSm ? ' fbc-actions-sm' : ''}`
  return (
    <div className="fb-comment-block">
      <div className="fbc">
        <img src={c.av} alt={c.name} className={c.avSm ? 'fbc-av-sm' : 'fbc-av'} />
        <div className="fbc-bubble">
          {c.admin
            ? <div className="fbc-name-admin">{c.name}</div>
            : <div className="fbc-name">{c.name}</div>
          }
          <div className="fbc-text">{c.text}</div>
        </div>
      </div>
      <div className={actionsClass}>
        <span className="fbc-action">Like</span>
        <span className="fbc-dot">·</span>
        <span className="fbc-action">Reply</span>
        <span className="fbc-dot">·</span>
        <span className="fbc-time">{c.ts}</span>
      </div>
      {c.replies && (
        <div className="fbc-replies">
          {c.replies.map((r, i) => (
            <FbBubble key={i} c={{ ...r, avSm: true }} />
          ))}
        </div>
      )}
    </div>
  )
}

function CtaBlock() {
  return (
    <div className="cta-block">
      <img
        src={IMGS.productMockup}
        alt="The Glycation Reversal Protocol — 30-page PDF guide"
        loading="lazy"
        className="cta-mockup"
      />
      <div className="cta-title">The Glycation Reversal Protocol</div>
      <div className="cta-subtitle">30-page clinical guide · Instant PDF · Delivered to your inbox in 2 minutes</div>
      <div className="price-line">
        <span className="price-was">$47</span>
        <span className="price-now">$19</span>
      </div>
      <ul className="checklist">
        <li>60-day money-back guarantee</li>
        <li>No subscription. No upsell. One-time.</li>
        <li>Works on women 45–75</li>
        <li>Compounds cost ~$35/month total</li>
      </ul>
      <button className="cta-btn">👉 YES — GET THE PROTOCOL FOR $19</button>
      <div className="cta-trust">🔒 Secure checkout · Instant delivery · 2,847 women ordered today</div>
    </div>
  )
}

export default function Page() {
  const [showSticky, setShowSticky] = useState(false)
  const [ctaAlt, setCtaAlt]       = useState(false)

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > window.innerHeight * 0.3)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setCtaAlt(p => !p), 8000)
    return () => clearInterval(t)
  }, [])

  const comments: FbComment[] = [
    {
      av: IMGS.brenda, name: 'Brenda Atkinson', ts: '2h',
      text: <>Scrolled past 3 times before I read it. Wish I&apos;d read it the first time. 6 weeks in. My sister won&apos;t stop asking what I did. I haven&apos;t told her because it&apos;s a little bit fun to watch her try to figure it out 😂</>,
      replies: [{
        av: IMGS.donna, name: 'Donna R.', ts: '1h',
        text: <><span className="fbc-tag">Brenda Atkinson</span> hahaha this is exactly me too. My book club is in my kitchen right now and every single one of them asked</>
      }]
    },
    {
      av: IMGS.marcia, name: 'Marcia L.', ts: '4h',
      text: <>Okay I&apos;ll be the skeptic. I&apos;ve bought every single thing. Olay. Rodan. Arbonne. Prevage. That $400 La Mer cream my daughter got me. NONE of it worked. Willing to try $19. I&apos;ll report back.</>,
      replies: [{
        av: IMGS.marcia, name: 'Marcia L.', ts: '22m',
        text: <>UPDATE week 4 — getting comments at church. Not deleting my original comment because I want other skeptical women to see the before</>
      }]
    },
    {
      av: IMGS.ruth, name: 'Ruth V.', ts: '6h',
      text: <>Is this safe with blood pressure medication? My doctor is old school and I don&apos;t want to ask him if he&apos;ll just say no.</>,
      replies: [{
        av: IMGS.admin, name: "The Women's Daily · Dr. Kim's Team ✓", admin: true, ts: '5h',
        text: <>Hi Ruth — the guide includes a section on medication interactions. Please do check with your physician — but the three compounds have no known interactions with common BP meds. 💛</>
      }]
    },
    {
      av: IMGS.barbara, name: 'Barbara M.', ts: '8h',
      text: <>My husband just walked past the screen and said &quot;who is that&quot; and I said &quot;me&quot; and he said &quot;no the other picture&quot; and it WAS me. From 4 years ago. I&apos;m buying it tonight.</>
    },
    {
      av: IMGS.eleanor, name: 'Eleanor F.', ts: '11h',
      text: <>I&apos;m 71. Is it too late? Will it still work?</>,
      replies: [{
        av: IMGS.gladys, name: 'Gladys P.', ts: '10h',
        text: <><span className="fbc-tag">Eleanor F.</span> Eleanor I&apos;m 73, started 5 months ago. My great granddaughter asked me if I dye my skin. I said no honey. She said it&apos;s very pretty. That is all I will say</>
      }]
    },
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="trending-bar">⚡ TRENDING — Health & Beauty · Women's Health · Skin Science</div>

      <div className="pub-header">
        <div className="pub-section-label">Health & Beauty Desk</div>
        <div className="pub-title">THE WOMEN'S DAILY</div>
        <div className="pub-nav">
          <a href="#">Home</a>
          <a href="#">Health</a>
          <a href="#">Beauty</a>
          <a href="#">Nutrition</a>
          <a href="#">About</a>
        </div>
      </div>

      <div className="article-wrap">
        <div className="section-label">Skin Science</div>
        <h1>Retired Dermatologist: "Women Who Are 50 But Look 30 Aren't Using Creams — They're Doing This Instead"</h1>
        <p className="deck">She spent 22 years telling women to buy the wrong thing. Her mother's phone call changed everything.</p>

        <div className="byline-row">
          <div className="byline-left">
            <img src={IMGS.drKim} alt="Dr. Rachel Kim" className="byline-avatar" loading="lazy" />
            <div>
              <div className="byline-name">By Dr. Rachel Kim, MD</div>
              <div className="byline-title">Retired Board-Certified Dermatologist</div>
            </div>
          </div>
          <div className="byline-right">
            📅 Updated April 2026<br />⏱ 5 min read · 👁 1,284,991 views
          </div>
        </div>

        <img src={IMGS.heroGif} alt="Woman looking at transformation results in mirror" className="hero-gif" loading="eager" />

        <div className="body-copy">

          <p>My mother called me on a Sunday.</p>
          <p>She'd just turned 58.</p>
          <p>"Rachel," she said. "I added it up. I spent four thousand dollars on my face this year. I look worse."</p>
          <p>I had to sit down.</p>
          <p>Because I was a dermatologist. I'd been one for 22 years.</p>
          <p>And I knew — in that exact second — that every single product I'd ever sold her was working on the wrong part of her skin.</p>
          <p>Not the wrong brand.</p>
          <p><strong>The wrong part.</strong></p>

          <h2 className="sh">I Retired 18 Months Later</h2>

          <p>This article is part of the reason why.</p>
          <p>I want to warn you before you keep reading: what I'm about to tell you is going to make you angry.</p>
          <p>Not at me.</p>
          <p>At the $89 billion industry that has taken your money for 40 years while hiding a simple anatomical fact that is in every dermatology textbook.</p>
          <p>It is the reason nothing has worked.</p>
          <p>Not the serums. Not the retinols. Not the "medical grade" line your friend sells at her Rodan + Fields parties.</p>
          <p>None of it was ever going to work.</p>
          <p>And it has nothing to do with you.</p>

          <h2 className="sh">Do This Before You Read Any Further</h2>

          <p>Pick up your phone.</p>
          <p>Open your camera roll.</p>
          <p>Scroll back 5 years.</p>
          <p>Look at your jawline then. Look at it now.</p>

          <img src={IMGS.emotionalAnchor} alt="Woman comparing old and new photos on her phone, noticing changes in her jawline" className="emotional-img" loading="lazy" />

          <p>Most women I show this exercise to have the same reaction.</p>
          <p>The change wasn't gradual.</p>
          <p>It happened in a window. Somewhere around 52 or 53.</p>
          <p>And nothing you bought — nothing you tried — has been able to touch it.</p>
          <p>Here's why.</p>

          <h2 className="sh">Your Skin Has Two Layers. You've Been Treating The Wrong One.</h2>

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

          <img src={IMGS.mechanismGif} alt="Animation showing skincare cream sitting on top epidermis layer while glycation damages the dermis underneath" className="mechanism-gif" loading="lazy" />
          <p className="gif-caption">Your serum sits on top. Glycation happens underneath. They never meet.</p>

          <p>Ask any dermatologist. They'll tell you the same thing.</p>
          <p>They just won't tell you before you buy.</p>

          <div className="pull-quote">
            If you've ever bought an expensive skincare system — Rodan + Fields, Arbonne, Monat, any of them — and watched it do nothing for your jawline and cheeks despite using it religiously: you were not doing it wrong. The product was not defective. The person who sold it to you was not lying. They were just selling you something that, by the laws of biology, could not do what they implied it would do.
          </div>

          <h2 className="sh">So What's Actually Happening In The Dermis?</h2>

          <p>Here's the simple version.</p>
          <p>Every time your blood sugar spikes — from bread, pasta, rice, oatmeal, fruit, anything — sugar molecules bond to the collagen in your dermis.</p>
          <p>They attach. Permanently.</p>
          <p>Over time, that sugar-coated collagen gets stiff.</p>
          <p>It can't flex. It can't bounce back. It just… sags.</p>
          <p>Think of a mattress with old, rusted springs.</p>
          <p>The springs are still there. They just don't work anymore.</p>

          <img src={IMGS.mattressGif} alt="Animation of mattress springs stiffening and losing their bounce — a metaphor for glycated collagen" className="mechanism-gif" loading="lazy" />

          <p><strong>That is your face after 50.</strong></p>

          <div className="soft-cta">
            🔒 Want to skip ahead? I put the full protocol — compounds, doses, brands, food list — in a 30-page guide. <a href="#cta">You can get it for $19 here →</a>
          </div>

          <h2 className="sh">That Is Why Your Jaw Changed</h2>

          <p>It's not that you lost collagen.</p>
          <p>You still have plenty.</p>
          <p>It's that the collagen you have is stiffening from the inside — and that stiffening creates:</p>

          <ul className="icon-list">
            <li>👉 The softer jawline you see in photos</li>
            <li>👉 Cheeks that look slightly deflated in flat light</li>
            <li>👉 Horizontal lines on your forehead and neck</li>
            <li>👉 That "tired" look you didn't have in your 40s</li>
          </ul>

          <p>This has been in medical journals since 1982.</p>
          <p>It's not hidden. It's just not profitable to tell you.</p>
          <p>A cream can't reach it. A serum can't reach it.</p>
          <p>Only one thing can.</p>

          <h2 className="sh">The One Route That Actually Works</h2>

          <p>If creams can't get there, what can?</p>
          <p>Your bloodstream.</p>

          <img src={IMGS.bloodstreamGif} alt="Animation showing an oral compound traveling through the bloodstream to reach the dermis from the inside" className="mechanism-gif" loading="lazy" />

          <p>That's the only delivery route that reaches the dermis from the inside.</p>
          <p>It's why Botox is injected. It's why Accutane is swallowed. Because the dermis doesn't accept topicals.</p>
          <p>After my mother's phone call, I spent six months reading clinical literature I hadn't touched since medical school.</p>

          <img src={IMGS.researchImg} alt="Dr. Rachel Kim studying clinical research papers at a desk surrounded by medical journals" className="research-img" loading="lazy" />

          <p>And I found three oral compounds.</p>
          <p>All three had real, peer-reviewed, placebo-controlled trials.</p>
          <p>One showed statistically significant improvement in skin elasticity at 12 weeks in women aged 45–65.</p>
          <p>Not marginal. <strong>Significant.</strong></p>
          <p>I'm not going to name them publicly on this page. I'll explain why in a second.</p>
          <p>But I will tell you this:</p>

          <ol className="compound-list">
            <li><span className="compound-num">01</span><span><strong>One stops new damage.</strong> It's a plant extract. You've heard of the active molecule from red wine research.</span></li>
            <li><span className="compound-num">02</span><span><strong>One rebuilds the structure underneath your skin.</strong> A berry oil. This is the one that creates the "lifted" look.</span></li>
            <li><span className="compound-num">03</span><span><strong>One has a double-blind trial behind it.</strong> A bark extract. Most brands sell it at a fraction of the study dose.</span></li>
          </ol>

          <img src={IMGS.compoundsImg} alt="Three natural supplements — plant extract, berry oil, bark extract — on a clean surface" className="compounds-img" loading="lazy" />

          <h2 className="sh">Why I Won't Name Them Here</h2>

          <p>Two reasons.</p>
          <p>One — if I name the exact brands on an article this size, they sell out within 48 hours and the price doubles. I've watched it happen.</p>
          <p>Two — the doses matter more than the compound. Most brands on Amazon sell these at 10–20% of the clinical dose. You'd be taking the right thing in the wrong amount and wondering why nothing's happening.</p>
          <p>I put the exact protocol — compound names, clinical doses, where to buy them, when to take them — in a short guide.</p>
          <p>It's 30 pages. It costs $19.</p>
          <p>More on that in a moment.</p>

          <h2 className="sh">First, Let Me Tell You What Happened To My Mother</h2>

          <p>Week 3: She called me and said her skin felt "springy." I laughed. It was such a grandmother word.</p>
          <p>Week 6: Her sister — who hadn't seen her since Easter — asked her if she'd had work done.</p>
          <p>Week 12: She sent me a photo from a wedding.</p>
          <p>She was 62.</p>

          <img src={IMGS.weddingPhoto} alt="Dr. Kim's mother at a wedding, looking radiant at age 62 after 12 weeks on the protocol" className="wedding-photo" loading="lazy" />
          <p className="wedding-caption">My mother at my cousin's wedding, 12 weeks into the protocol. She was 62.</p>

          <p>She looked like herself. Not a younger version of herself. Just the version from the photos 5 years ago she'd stopped looking at.</p>
          <p>That was three years ago. Since then I've given the protocol to hundreds of women.</p>

          <CtaBlock />

          <h2 className="sh">Why $19 And Not $400?</h2>

          <p>I want to be honest with you about this.</p>
          <p>I'm retired. I don't have a clinic. I don't need consultation fees.</p>
          <p>But more than that — there are millions of women who have spent thousands of dollars on the wrong thing through no fault of their own.</p>
          <p>I cannot in good conscience hide this behind a consultation price.</p>
          <p>$19 is roughly my cost to publish and process the order.</p>
          <p>If you do the protocol for 60 days and see what hundreds of other women have seen — and if you want to go further — there's a longer program you can ask me about later.</p>
          <p>But the $19 guide is complete. You don't need anything else. The first step works.</p>
          <p>Also worth knowing: the three compounds themselves cost about <strong>$35 a month total</strong>. Less than one bottle of the serum that isn't working.</p>

          <h2 className="sh">What's Actually In The Guide</h2>

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

          <h2 className="sh">What Women Have Said</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#555', marginBottom: '20px' }}>
            ⭐⭐⭐⭐⭐ &nbsp;2,847 verified buyers · 4.9/5 average rating
          </p>

          <img src={IMGS.testimonialGrid} alt="Grid showing real results from women who completed the Glycation Reversal Protocol" className="testimonial-grid-img" loading="lazy" />
          <p className="testimonial-caption">Real women. Real results. 2,193 verified buyers since launch.</p>

          <hr className="divider" />

          <div className="fb-wrap">
            {comments.map((c, i) => <FbBubble key={i} c={c} />)}
          </div>

          <hr className="divider" />

          <h2 className="sh">Here's The Thing</h2>

          <p>I don't know if you'll buy the guide.</p>
          <p>But I do want you to understand what's actually happening, because if you don't — you'll spend another year avoiding the camera.</p>
          <p>You'll spend another $400 on a cream that can't work.</p>
          <p>You'll look at a photo next Christmas and feel the same thing you felt this Christmas.</p>
          <p>Not because you did anything wrong.</p>
          <p>Because no one told you where the problem lives.</p>
          <p>Now you know.</p>

          <h2 className="sh" id="cta">Get The Protocol</h2>

          <CtaBlock />

          <div className="urgency-banner">
            <div className="urgency-icon">⏳</div>
            <div className="urgency-title">This offer may not last</div>
            <div className="urgency-body">
              When I first published this, I expected maybe a few hundred orders. We're now at several thousand a day.<br /><br />
              My concern isn't the price. My concern is the <strong>supply of the three compounds</strong>.<br /><br />
              If this article keeps being shared at the pace it's being shared, the three supplement brands I recommend in the guide will sell out. I've already had to update two of the recommendations because one brand temporarily halted orders.<br /><br />
              If you're on this page and the price still says $19, and the guide still includes my current brand recommendations, I'd buy it today. I genuinely cannot promise what this looks like next week.
            </div>
            <div className="urgency-counter">🟢 184 women bought in the last hour</div>
          </div>

          <div className="guarantee-section">
            <div className="guarantee-badge">
              <img src={IMGS.guaranteeBadge} alt="60-day money back guarantee badge" loading="lazy" />
            </div>
            <div className="guarantee-text">
              <h3>The "If It Doesn't Work, Don't Pay" Promise</h3>
              <p>Follow the protocol for 60 days. If your jawline hasn't tightened. If the lines haven't softened. If no one has commented. If you feel like you wasted $19 — email my team. We'll refund every cent. You keep the guide. I'm confident that after 60 days you won't want the refund. You'll want to know what comes next.</p>
            </div>
          </div>

          <p><strong>P.S.</strong> — Let me say this one more time so it's clear.</p>
          <p>Everything you've tried has been working on the wrong layer of your skin.</p>
          <p>You didn't fail. The products failed you.</p>
          <p>The only real route to what you actually care about — the jawline, the cheeks, the lift — runs through the bloodstream. Not through a jar.</p>
          <p>It's $19. It's guaranteed for 60 days. The compounds cost less than one bottle of serum.</p>
          <p><strong>The only thing I can't give you back is the next year.</strong></p>

          <CtaBlock />

        </div>
      </div>

      <footer className="footer">
        <p>© 2026 The Women's Daily — Health & Beauty Desk</p>
        <p>Contributor column by Dr. Rachel Kim, MD (retired). Views are the author's.</p>
        <p style={{ marginTop: '6px' }}>
          <a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Contact</a> · <a href="#">Disclaimer</a>
        </p>
        <p style={{ maxWidth: '600px', margin: '14px auto 0' }}>
          Any photos depicted are models. Results vary. Statements have not been evaluated by the FDA. This product does not diagnose, treat, cure, or prevent any disease. Consult your physician before any supplement protocol.
        </p>
      </footer>

      {/* ── STICKY CTA BAR ── */}
      <div className={`sticky-bar${showSticky ? ' show' : ''}`}>
        <button className="sticky-inner" onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="sticky-text">
            {ctaAlt ? '🟢 184 women bought today' : 'Get The Protocol — $19 →'}
            <span className="sticky-sub">
              {ctaAlt ? 'Tap to get yours for $19 →' : '60-day guarantee · Instant PDF delivery'}
            </span>
          </div>
        </button>
      </div>
    </>
  )
}
