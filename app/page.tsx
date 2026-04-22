'use client'
import React, { useState, useEffect, useCallback } from 'react'

const BASE = 'https://assets.checkoutchamp.com/Funnel/assets/images/fadfad32-3aee-484f-859c-b3ac63a4a1f3/9cb704f3-ec9c-4b35-b540-d2faa38624c8/'
const CDN  = 'https://assets.cdn.filesafe.space/fveUHPreYRqiA1APSbJt/media/'

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
  brenda:    BASE + '9_1.jpg?versionId=_NrFzoGUnndioDAABcjz6al86X0letnS',
  donna:     BASE + '2_1.jpg?versionId=Ps8uA8c4eOsFnAGmwbXvUtms08ikqERx',
  marcia:    BASE + '4_1.jpg?versionId=utFzlkNYBuPmzPsNyUk5cd75NcnOK7kV',
  ruth:      BASE + '8_1.jpg?versionId=.DWIe9uvM1jKnKNpaJgMDPHBteBX19sc',
  barbara:   BASE + '1_1.jpg?versionId=VSs1LgTNfG_zeSLPSFqQAmgq.ba1VlfH',
  margaret:  BASE + '6_1.jpg?versionId=E406lm8rbQZcPseNyqqGMeECrTJ9LR2k',
  eleanor:   BASE + '4.jpg?versionId=EEpo4rQl.5.gWGqPWQZT2CGKNlirgFLZ',
  gladys:    BASE + '1.jpg?versionId=0NUAWrBI2VRSuyISbojxI79d82WYU1NQ',
  admin:     BASE + '2.jpg?versionId=xU3ZcPP7DJric56PFRy8jrDu0xHei3Je',
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
  line-height: 1.78;
}

.progress-bar {
  position: fixed;
  top: 0; left: 0;
  height: 3px;
  background: #E07856;
  z-index: 9999;
  transition: width 0.15s linear;
  pointer-events: none;
}

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
  color: #555;
  text-decoration: none;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

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
  gap: 14px;
  padding: 18px 0;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 28px;
}

.byline-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid #e8e4de;
}

.byline-info { flex: 1; }

.byline-name {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 800;
  color: #111;
  margin-bottom: 3px;
}

.byline-creds {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #666;
  margin-bottom: 4px;
}

.byline-meta {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #888;
}

.hero-gif {
  width: 100%;
  border-radius: 8px;
  display: block;
  margin-bottom: 32px;
}

.article-img {
  width: 100%;
  border-radius: 8px;
  display: block;
  margin: 24px 0 8px;
}

.img-caption {
  font-family: 'Inter', sans-serif;
  font-style: italic;
  color: #888;
  font-size: 13px;
  text-align: center;
  margin-bottom: 28px;
}

.testimonial-grid-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  margin: 20px 0 8px;
}

.body-copy {
  font-family: 'Lora', Georgia, serif;
  font-size: 21px;
  color: #111;
  line-height: 1.78;
}

.body-copy p { margin-bottom: 28px; color: #111; }
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

.soft-cta {
  background: #FFF7F2;
  border-left: 4px solid #E07856;
  border-radius: 0 8px 8px 0;
  padding: 20px 22px;
  margin: 36px 0;
}

.soft-cta-inner {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.soft-cta-icon { font-size: 22px; flex-shrink: 0; margin-top: 1px; }

.soft-cta-bold {
  font-family: 'Inter', sans-serif;
  font-size: 17px;
  font-weight: 800;
  color: #111;
  margin-bottom: 6px;
}

.soft-cta-body {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #333;
  margin-bottom: 14px;
  line-height: 1.6;
}

.soft-cta-btn {
  background: #E07856;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 700;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}

.soft-cta-btn:hover { background: #d06540; }

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

.compound-cards { margin: 24px 0 28px; display: flex; flex-direction: column; gap: 16px; }

.compound-card {
  background: #FFF7F2;
  border-radius: 8px;
  padding: 20px 22px;
  display: flex;
  gap: 18px;
  align-items: flex-start;
}

.compound-badge {
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 900;
  color: #E07856;
  line-height: 1;
  flex-shrink: 0;
  min-width: 44px;
}

.compound-headline {
  font-family: 'Inter', sans-serif;
  font-size: 17px;
  font-weight: 800;
  color: #111;
  display: block;
  margin-bottom: 6px;
}

.compound-desc {
  font-family: 'Lora', Georgia, serif;
  font-size: 17px;
  color: #333;
  line-height: 1.6;
}

.guide-card {
  background: #FFF7F2;
  border-radius: 8px;
  padding: 28px 28px 12px;
  margin: 28px 0;
}

.guide-card-title {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 800;
  color: #111;
  margin-bottom: 4px;
}

.guide-card-sub {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #888;
  margin-bottom: 20px;
}

.guide-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  margin-bottom: 18px;
}

.guide-check {
  width: 24px;
  height: 24px;
  background: #1a7a1a;
  border-radius: 50%;
  color: white;
  font-size: 13px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.guide-text {
  font-size: 18px;
  color: #111;
  line-height: 1.65;
}

.guide-text strong { font-weight: 700; color: #000; }

.fb-wrap {
  margin: 32px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.fb-comment-block { margin-bottom: 4px; }

.fbc {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.fbc-av {
  width: 40px; height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.fbc-av-sm {
  width: 32px; height: 32px;
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

.fbc-name { font-size: 13px; font-weight: 700; color: #050505; line-height: 1.2; margin-bottom: 3px; }
.fbc-name-admin { font-size: 13px; font-weight: 700; color: #1877f2; line-height: 1.2; margin-bottom: 3px; }
.fbc-text { font-size: 15px; color: #050505; line-height: 1.4; }
.fbc-tag { color: #1877f2; font-weight: 600; }

.fbc-actions {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 5px 0 16px 48px;
  font-size: 12px;
  font-weight: 600;
  color: #65676b;
}

.fbc-actions-sm { padding-left: 40px; }
.fbc-action { color: #65676b; font-weight: 600; cursor: pointer; }
.fbc-action:hover { text-decoration: underline; }
.fbc-dot { margin: 0 5px; color: #bcc0c4; font-weight: 400; font-size: 11px; }
.fbc-time { font-weight: 400; color: #65676b; }
.fbc-replies { padding-left: 48px; }

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

.cta-subtitle { font-family: 'Inter', sans-serif; font-size: 15px; color: #777; margin-bottom: 18px; }

.price-line { margin-bottom: 18px; }

.price-was { text-decoration: line-through; color: #bbb; font-size: 20px; margin-right: 8px; font-family: 'Inter', sans-serif; }
.price-now { color: #E07856; font-size: 48px; font-weight: 800; font-family: 'Inter', sans-serif; }

.checklist { list-style: none; padding: 0; margin: 0 auto 22px; text-align: left; display: inline-block; }

.checklist li {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #222;
  line-height: 1.9;
  padding-left: 4px;
}

.checklist li::before { content: '✓ '; color: #1a7a1a; font-weight: 700; }

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
  transition: background 0.2s, transform 0.1s;
}

.cta-btn:hover { background: #d06540; }
.cta-btn:active { transform: scale(0.99); }

.cta-trust { font-family: 'Inter', sans-serif; font-size: 13px; color: #999; }

.urgency-banner {
  background: #FEF2F2;
  border: 1.5px solid #DC2626;
  border-left: 5px solid #DC2626;
  border-radius: 8px;
  padding: 24px;
  margin: 28px 0;
}

.urgency-icon { font-size: 32px; margin-bottom: 10px; display: block; }

.urgency-title {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  color: #991B1B;
  font-size: 20px;
  margin-bottom: 12px;
}

.urgency-body {
  font-family: 'Lora', Georgia, serif;
  font-size: 17px;
  color: #111;
  line-height: 1.7;
  margin-bottom: 16px;
}

.urgency-counter {
  font-family: 'Inter', sans-serif;
  color: #059669;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
}

@keyframes pulse-green {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.85); }
}

.pulse-dot {
  display: inline-block;
  width: 9px;
  height: 9px;
  background: #059669;
  border-radius: 50%;
  animation: pulse-green 2s ease-in-out infinite;
  flex-shrink: 0;
}

.guarantee-section {
  background: #F0FAF0;
  border: 1px solid #8dc88d;
  border-radius: 8px;
  padding: 24px;
  margin: 28px 0;
  overflow: hidden;
}

.guarantee-badge-img {
  float: left;
  width: 150px;
  height: auto;
  margin: 0 22px 10px 0;
  border-radius: 4px;
}

.guarantee-title {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  color: #1F3A5F;
  margin-bottom: 10px;
  font-size: 18px;
}

.guarantee-body {
  font-family: 'Lora', Georgia, serif;
  font-size: 17px;
  color: #222;
  line-height: 1.74;
}

.sticky-bar {
  display: none;
  position: fixed;
  bottom: 0; left: 0; right: 0;
  z-index: 9998;
  transform: translateY(100%);
  transition: transform 0.25s ease;
  box-shadow: 0 -4px 20px rgba(0,0,0,0.15);
}

.sticky-bar.show { transform: translateY(0); }

.sticky-btn {
  display: block;
  width: 100%;
  background: #E07856;
  color: white;
  border: none;
  height: 60px;
  font-family: 'Inter', sans-serif;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: 0.02em;
  cursor: pointer;
  text-align: center;
}

.sticky-btn:hover { background: #d06540; }

.divider { border: none; border-top: 1px solid #e4e0da; margin: 44px 0; }

.footer {
  background: #1A1A1A;
  color: rgba(255,255,255,0.5);
  text-align: center;
  padding: 48px 20px 32px;
  margin-top: 70px;
  font-family: 'Inter', sans-serif;
}

.footer-logo {
  font-family: Georgia, serif;
  font-size: 24px;
  font-weight: 700;
  color: white;
  letter-spacing: -0.02em;
  margin-bottom: 6px;
}

.footer-tagline {
  font-size: 13px;
  color: rgba(255,255,255,0.45);
  margin-bottom: 24px;
  font-style: italic;
}

.footer-links {
  font-size: 12px;
  color: rgba(255,255,255,0.45);
  margin-bottom: 16px;
  line-height: 2;
}

.footer-links a {
  color: rgba(255,255,255,0.45);
  text-decoration: none;
  margin: 0 6px;
}

.footer-links a:hover { color: rgba(255,255,255,0.7); }

.footer-social {
  font-size: 12px;
  color: rgba(255,255,255,0.35);
  margin-bottom: 24px;
  letter-spacing: 1px;
}

.footer-legal {
  max-width: 600px;
  margin: 0 auto;
  font-size: 11px;
  color: rgba(255,255,255,0.3);
  line-height: 1.9;
}

@media (max-width: 680px) {
  .sticky-bar { display: block; }
  body { font-size: 19px; }
  .article-wrap { padding: 20px 18px 0; }
  h1 { font-size: 26px; }
  .sh { font-size: 22px; margin-top: 40px; }
  .deck { font-size: 19px; }
  .body-copy { font-size: 19px; }
  .pull-quote { font-size: 18px; padding: 20px; }
  .icon-list li { font-size: 18px; }
  .guide-text { font-size: 17px; }
  .compound-desc { font-size: 16px; }
  .cta-block { padding: 22px 18px; }
  .cta-title { font-size: 22px; }
  .price-now { font-size: 40px; }
  .cta-btn { font-size: 18px; }
  .pub-title { font-size: 28px; }
  .guarantee-badge-img { float: none; display: block; width: 120px; margin: 0 auto 16px; }
  .byline-avatar { width: 48px; height: 48px; }
}
`

type FbComment = {
  av: string; avSm?: boolean; name: string; admin?: boolean
  text: React.ReactNode; ts: string; replies?: FbComment[]
}

function FbBubble({ c }: { c: FbComment }) {
  return (
    <div className="fb-comment-block">
      <div className="fbc">
        <img src={c.av} alt={c.name} className={c.avSm ? 'fbc-av-sm' : 'fbc-av'} loading="lazy" />
        <div className="fbc-bubble">
          {c.admin
            ? <div className="fbc-name-admin">{c.name}</div>
            : <div className="fbc-name">{c.name}</div>}
          <div className="fbc-text">{c.text}</div>
        </div>
      </div>
      <div className={`fbc-actions${c.avSm ? ' fbc-actions-sm' : ''}`}>
        <span className="fbc-action">Like</span>
        <span className="fbc-dot">·</span>
        <span className="fbc-action">Reply</span>
        <span className="fbc-dot">·</span>
        <span className="fbc-time">{c.ts}</span>
      </div>
      {c.replies && (
        <div className="fbc-replies">
          {c.replies.map((r, i) => <FbBubble key={i} c={{ ...r, avSm: true }} />)}
        </div>
      )}
    </div>
  )
}

function CtaBlock({ trustSuffix = 'this week' }: { trustSuffix?: string }) {
  return (
    <div className="cta-block">
      <img src={IMGS.productMockup} alt="The Kitchen Protocol — 42-page PDF guide" loading="lazy" className="cta-mockup" />
      <div className="cta-title">The Kitchen Protocol</div>
      <div className="cta-subtitle">The 90-day system that reverses facial glycation using ingredients already in your kitchen.</div>
      <div className="price-line">
        <span className="price-was">$47</span>
        <span className="price-now">$27</span>
      </div>
      <ul className="checklist">
        <li>60-day money-back guarantee</li>
        <li>No subscription. No upsell. One-time.</li>
        <li>Works on women 45–75</li>
        <li>Ingredients cost less than $20 total from any grocery store</li>
      </ul>
      <button className="cta-btn">👉 YES — GET THE PROTOCOL FOR $27</button>
      <div className="cta-trust">🔒 Secure checkout · Instant delivery · 2,847 women ordered {trustSuffix}</div>
    </div>
  )
}

export default function Page() {
  const [showSticky, setShowSticky] = useState(false)
  const [progress,   setProgress]   = useState(0)
  const [views,      setViews]       = useState(1284991)
  const [buyCount,   setBuyCount]    = useState(184)

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    const totalH  = document.documentElement.scrollHeight - window.innerHeight
    const pct     = totalH > 0 ? (scrollY / totalH) * 100 : 0
    setProgress(pct)
    setShowSticky(scrollY > window.innerHeight * 0.25)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    let tid: ReturnType<typeof setTimeout>
    const tick = () => { setViews(v => v + 1); tid = setTimeout(tick, 4000 + Math.random() * 2000) }
    tid = setTimeout(tick, 4000 + Math.random() * 2000)
    return () => clearTimeout(tid)
  }, [])

  useEffect(() => {
    let tid: ReturnType<typeof setTimeout>
    const tick = () => { setBuyCount(c => c + 1); tid = setTimeout(tick, 20000 + Math.random() * 10000) }
    tid = setTimeout(tick, 20000 + Math.random() * 10000)
    return () => clearTimeout(tid)
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
      text: <>Okay I&apos;ll be the skeptic. I&apos;ve bought every single thing. Olay. Rodan. Arbonne. Prevage. That $400 La Mer cream my daughter got me. NONE of it worked. Willing to try $27. I&apos;ll report back.</>,
      replies: [{
        av: IMGS.marcia, name: 'Marcia L.', ts: '22m',
        text: <>UPDATE week 4 — getting comments at church. Not deleting my original comment because I want other skeptical women to see the before</>
      }]
    },
    {
      av: IMGS.ruth, name: 'Ruth V.', ts: '6h',
      text: <>Is this going to be 500 weird ingredients I have to order online? I&apos;m not doing that. I want to use what I have.</>,
      replies: [{
        av: IMGS.admin, name: "The Women's Daily · Dr. Kim's Team ✓", admin: true, ts: '5h',
        text: <>Hi Ruth — genuinely no. Everything in the core protocol is available in a normal grocery store. If you have cinnamon, green tea, and a few berries, you have 70% of it. The guide tells you exactly what to get and how to prepare it. 💛</>
      }]
    },
    {
      av: IMGS.barbara, name: 'Barbara M.', ts: '8h',
      text: <>My husband just walked past the screen and said &quot;who is that&quot; and I said &quot;me&quot; and he said &quot;no the other picture&quot; and it WAS me. From 4 years ago. I&apos;m buying it tonight.</>
    },
    {
      av: IMGS.margaret, name: 'Margaret T.', ts: '3h',
      text: <>I was skeptical because I thought this would be some expensive supplement list. It&apos;s not. I already had everything except one spice which was $3 at the grocery store. Started Monday. It&apos;s Friday. My husband just asked me if I&apos;d slept more this week. This is crazy.</>
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

  const fmtViews = views.toLocaleString('en-US')

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {progress > 5 && (
        <div className="progress-bar" style={{ width: `${Math.min(progress, 100)}%` }} />
      )}

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

        <p className="deck">She spent 22 years telling women to buy the wrong thing. Then she discovered her own grandmother had been doing it right all along — with ingredients from the kitchen.</p>

        <div className="byline-row">
          <img src={IMGS.drKim} alt="Dr. Rachel Kim, MD — Retired Board-Certified Dermatologist" className="byline-avatar" loading="eager" />
          <div className="byline-info">
            <div className="byline-name">By Dr. Rachel Kim, MD</div>
            <div className="byline-creds">Retired Board-Certified Dermatologist · 22 years</div>
            <div className="byline-meta">📅 Updated April 2026 · ⏱ 5 min read · 👁 {fmtViews} views</div>
          </div>
        </div>

        <img src={IMGS.heroGif} alt="Woman looking in mirror and noticing her skin has visibly improved" className="hero-gif" loading="eager" />

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

          <img src={IMGS.emotionalAnchor} alt="Woman sitting quietly scrolling through old photos on her phone, comparing how her face looked 5 years ago" className="article-img" loading="lazy" />

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

          <img src={IMGS.mechanismGif} alt="Scientific animation showing a skincare cream sitting on the epidermis surface while glycation damage occurs in the dermis below" className="article-img" loading="lazy" />
          <p className="img-caption">Your serum sits on top. Glycation happens underneath. They never meet.</p>

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

          <img src={IMGS.mattressGif} alt="Animation of a mattress cross-section showing springs becoming stiff and losing their bounce — a metaphor for glycated collagen" className="article-img" loading="lazy" />

          <p><strong>That is your face after 50.</strong></p>

          <div className="soft-cta">
            <div className="soft-cta-inner">
              <div className="soft-cta-icon">🔒</div>
              <div>
                <div className="soft-cta-bold">Want to skip ahead?</div>
                <div className="soft-cta-body">I put the full protocol — kitchen ingredients, morning ritual, tea preparation, food list — in a 42-page guide.</div>
                <a href="#cta" className="soft-cta-btn">Get It For $27 →</a>
              </div>
            </div>
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

          <img src={IMGS.bloodstreamGif} alt="Medical animation showing a compound being absorbed into the bloodstream and traveling to reach the dermis layer of skin from the inside" className="article-img" loading="lazy" />

          <p>That's the only delivery route that reaches the dermis from the inside.</p>
          <p>It's why Botox is injected. It's why Accutane is swallowed. Because the dermis doesn't accept topicals.</p>
          <p>After my mother's phone call, I spent six months reading clinical literature I hadn't touched since medical school.</p>

          <img src={IMGS.researchImg} alt="Dr. Rachel Kim at a research desk surrounded by open medical journals and clinical papers" className="article-img" loading="lazy" />

          <p>I expected to find some exotic compound. A patented peptide. A cutting-edge molecule locked behind a prescription.</p>
          <p>What I found instead changed everything.</p>

          <h2 className="sh">The Answer Was In My Grandmother's Kitchen</h2>

          <p>My Korean grandmother lived to 94. Sharp-minded, walking, laughing, and — I realize now looking at photos — with skin that stayed firm and lifted into her eighties.</p>
          <p>Growing up, she drank the same tea every morning. She kept a jar of cinnamon sticks and dried berries in the kitchen. She soaked her rice in a specific way before cooking it. She always had bone broth simmering on the stove.</p>
          <p>I thought it was just her culture.</p>
          <p>It turns out nearly every one of her daily habits had been independently documented in peer-reviewed Western research as powerful inhibitors of glycation — the exact process destroying your face after 50.</p>
          <p>The foods and teas she used are all in a normal US grocery store.</p>
          <p>Most of them are probably in your kitchen right now.</p>

          <h2 className="sh">What The Research Actually Shows</h2>

          <p>When I sat down with the glycation literature, a pattern emerged.</p>
          <p>Certain kitchen ingredients have been shown in peer-reviewed studies to directly inhibit the formation of AGEs — the sugar-bonded collagen that stiffens your face.</p>
          <p>I'm not going to list every study. But here's what's documented:</p>

          <div className="compound-cards">
            <div className="compound-card">
              <div className="compound-badge">01</div>
              <div>
                <span className="compound-headline">A common spice sitting unused in your cabinet.</span>
                <span className="compound-desc">Shown to reduce AGE formation by up to 50% in laboratory conditions when consumed daily. Most women have it. Almost nobody uses enough of it, or uses it at the right time.</span>
              </div>
            </div>
            <div className="compound-card">
              <div className="compound-badge">02</div>
              <div>
                <span className="compound-headline">A specific tea, prepared a specific way.</span>
                <span className="compound-desc">A direct AGE inhibitor. Most women in the West drink it wrong — the way most recipes tell you to brew it actually destroys the compound that matters. The difference between 90% effectiveness and 20% is one preparation step.</span>
              </div>
            </div>
            <div className="compound-card">
              <div className="compound-badge">03</div>
              <div>
                <span className="compound-headline">An everyday kitchen acid you already have.</span>
                <span className="compound-desc">Blunts the blood sugar spike after meals by up to 30%. Less spike = less glycation. Taken before the right meals, it's the single highest-leverage habit change you can make this week.</span>
              </div>
            </div>
            <div className="compound-card">
              <div className="compound-badge">04</div>
              <div>
                <span className="compound-headline">Three common berries from the freezer section.</span>
                <span className="compound-desc">More AGE-inhibiting power per gram than any expensive "anti-aging" product on the market. One of them is almost certainly in your grocery store's freezer section for $4.</span>
              </div>
            </div>
            <div className="compound-card">
              <div className="compound-badge">05</div>
              <div>
                <span className="compound-headline">A specific morning ritual — two minutes, before breakfast.</span>
                <span className="compound-desc">Compounds the effect of everything else. My mother calls it the "two-minute ritual." Done in a specific order, it sets your whole day's glycation metabolism. Done in the wrong order, it does almost nothing.</span>
              </div>
            </div>
          </div>

          <img src={IMGS.compoundsImg} alt="Natural kitchen ingredients — spices, teas, berries — arranged on a clean surface" className="article-img" loading="lazy" />

          <p>These aren't secrets. They're just not profitable to tell you about, because you can't put a trademark on cinnamon.</p>

          <h2 className="sh">Why I Won't Just Give You A List</h2>

          <p>The mistake I made when I first told patients about this was just giving them a list.</p>
          <p>"Drink green tea. Eat berries. Use cinnamon."</p>
          <p>Nobody got results. Not because the science was wrong — but because the protocol matters more than the ingredients.</p>
          <p>Here's what actually determines whether this works:</p>

          <div className="compound-cards">
            <div className="compound-card">
              <div className="compound-badge">→</div>
              <div>
                <span className="compound-headline">Timing.</span>
                <span className="compound-desc">When you consume each ingredient relative to meals matters enormously. The same food at 7am vs 7pm has opposite effects on your glycation levels.</span>
              </div>
            </div>
            <div className="compound-card">
              <div className="compound-badge">→</div>
              <div>
                <span className="compound-headline">Preparation.</span>
                <span className="compound-desc">How you prepare green tea determines whether you get 90% of its AGE-inhibiting power or 20%. Most people ruin it without knowing, following normal brewing instructions.</span>
              </div>
            </div>
            <div className="compound-card">
              <div className="compound-badge">→</div>
              <div>
                <span className="compound-headline">Combination.</span>
                <span className="compound-desc">Two ingredients paired together multiply each other's effect. The same two ingredients taken 6 hours apart do almost nothing. Order and pairing are everything.</span>
              </div>
            </div>
            <div className="compound-card">
              <div className="compound-badge">→</div>
              <div>
                <span className="compound-headline">Sequence.</span>
                <span className="compound-desc">What you drink before your first meal of the day either sets your whole day's glycation clock to "off" or "on." This is the most important thing in the guide.</span>
              </div>
            </div>
          </div>

          <p>Without the exact sequence, you're eating healthy foods and hoping. With the sequence, you're running a 90-day protocol that has a predictable, measurable effect.</p>
          <p>That's what's in the guide.</p>

          <h2 className="sh">First, Let Me Tell You What Happened To My Mother</h2>

          <p>Week 3: She called me and said her skin felt "springy." I laughed. It was such a grandmother word.</p>
          <p>Week 6: Her sister — who hadn't seen her since Easter — asked her if she'd had work done.</p>
          <p>Week 12: She sent me a photo from a wedding.</p>
          <p>She was 62.</p>

          <img src={IMGS.weddingPhoto} alt="Dr. Kim's mother standing at a wedding looking radiant and youthful at age 62, 12 weeks after starting the protocol" className="article-img" loading="lazy" />
          <p className="img-caption">My mother at my cousin's wedding, 12 weeks into the protocol. She was 62.</p>

          <p>She looked like herself. Not a younger version of herself. Just the version from the photos 5 years ago she'd stopped looking at.</p>
          <p>That was three years ago. Since then I've given the protocol to hundreds of women.</p>

          <CtaBlock trustSuffix="this week" />

          <h2 className="sh">Why $27 And Not $400?</h2>

          <p>I want to be honest with you about this.</p>
          <p>I'm retired. I don't have a clinic. I don't need consultation fees.</p>
          <p>But more than that — there are millions of women who have spent thousands of dollars on creams that couldn't reach their skin, through no fault of their own.</p>
          <p>I cannot in good conscience hide this behind a consultation price.</p>
          <p>$27 is roughly my cost to publish and process the order.</p>
          <p>If you do the protocol for 60 days and see what hundreds of other women have seen — there's more I can share. But the $27 guide is complete. You don't need anything else to start.</p>
          <p>And here's the part I love most:</p>
          <p>The ingredients in the protocol cost almost nothing. Most of them are already in your kitchen. If you had to buy every single one fresh from a grocery store, you'd spend less than $20 — total — for the entire 90-day protocol.</p>
          <p>That's less than one bottle of the serum that couldn't work.</p>

          <h2 className="sh">What's Actually In The Guide</h2>

          <div className="guide-card">
            <div className="guide-card-title">The Kitchen Protocol</div>
            <div className="guide-card-sub">42-page clinical guide · Instant PDF · No filler · No fluff</div>
            <div className="guide-item">
              <div className="guide-check">✓</div>
              <div className="guide-text"><strong>The 9 kitchen ingredients that inhibit glycation</strong> — with the specific forms and preparations that actually work (most women use the wrong form of #3 and waste months).</div>
            </div>
            <div className="guide-item">
              <div className="guide-check">✓</div>
              <div className="guide-text"><strong>The morning sequence</strong> — the exact 2-minute ritual to do before your first meal of the day. Sets your whole day's glycation metabolism.</div>
            </div>
            <div className="guide-item">
              <div className="guide-check">✓</div>
              <div className="guide-text"><strong>The tea protocol</strong> — how to prepare the primary AGE-inhibiting tea so you keep 90% of its power instead of destroying it.</div>
            </div>
            <div className="guide-item">
              <div className="guide-check">✓</div>
              <div className="guide-text"><strong>The 7 foods accelerating your aging</strong> — one is in your breakfast right now, and a nutritionist probably told you it was healthy.</div>
            </div>
            <div className="guide-item">
              <div className="guide-check">✓</div>
              <div className="guide-text"><strong>The 12 foods that slow glycation</strong> — most are already in your kitchen. I'll show you how to rotate them through your week.</div>
            </div>
            <div className="guide-item">
              <div className="guide-check">✓</div>
              <div className="guide-text"><strong>The meal sequencing method</strong> — the order in which you eat the foods on your plate changes how much glycation each meal causes. This alone has been shown to reduce post-meal blood sugar spikes by 30%.</div>
            </div>
            <div className="guide-item">
              <div className="guide-check">✓</div>
              <div className="guide-text"><strong>The 14-day + 90-day results tracker</strong> — what to look for and when, so you're not guessing.</div>
            </div>
            <div className="guide-item">
              <div className="guide-check">✓</div>
              <div className="guide-text"><strong>Bonus: The international ingredient guide</strong> — which UK, Canadian, Australian, and European versions of key ingredients match the clinical-grade versions. For my international readers — thank you for the emails. I finally wrote it up.</div>
            </div>
          </div>

          <h2 className="sh">What Women Have Said</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#666', marginBottom: '20px' }}>
            ⭐⭐⭐⭐⭐ &nbsp;2,847 verified buyers · 4.9/5 average rating
          </p>

          <img src={IMGS.testimonialGrid} alt="A grid of photos and quotes from real women who completed the Kitchen Protocol" className="testimonial-grid-img" loading="lazy" />
          <p className="img-caption">Real women. Real results. 2,847 verified buyers since launch.</p>

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

          <CtaBlock trustSuffix="this week" />

          <div className="urgency-banner">
            <span className="urgency-icon">⏳</span>
            <div className="urgency-title">Why The $27 Price Won't Last</div>
            <div className="urgency-body">
              When I first published this, I expected maybe a few hundred orders. We're now at several thousand a day.<br /><br />
              My team has told me the price needs to go up — both to slow the order volume and to match the value of what's inside.<br /><br />
              The next price is $47, and it's happening in the next few days.<br /><br />
              If you're on this page and the price still says $27, that's the price. I'd get it today.
            </div>
            <div className="urgency-counter">
              <span className="pulse-dot" />
              {buyCount} women bought in the last hour
            </div>
          </div>

          <div className="guarantee-section">
            <img src={IMGS.guaranteeBadge} alt="Official 60-day 100% money-back guarantee badge" loading="lazy" className="guarantee-badge-img" />
            <h3 className="guarantee-title">The "If It Doesn't Work, Don't Pay" Promise</h3>
            <p className="guarantee-body">Follow the protocol for 60 days. If your jawline hasn't tightened. If the lines haven't softened. If no one has commented. If you feel like you wasted $27 — email my team. We'll refund every cent. You keep the guide. I'm confident that after 60 days you won't want the refund. You'll want to know what comes next.</p>
          </div>

          <p><strong>P.S.</strong> — Let me say this one more time so it's clear.</p>
          <p>Everything you've tried has been working on the wrong layer of your skin.</p>
          <p>You didn't fail. The products failed you.</p>
          <p>The only real route to what you actually care about — the jawline, the cheeks, the lift — runs through your bloodstream. Not through a jar.</p>
          <p>And the ingredients that actually reach it aren't in a pharmacy. They're in your kitchen. You just need to know which ones, how to prepare them, and when to use them.</p>
          <p>It's $27. It's guaranteed for 60 days. The ingredients cost less than one bottle of serum.</p>
          <p><strong>The only thing I can't give you back is the next year.</strong></p>

          <h2 className="sh">Why This Works In Every Country</h2>

          <p>Before I published this, I tested it with women in 11 different countries.</p>
          <p>Women in the UK, Canada, Australia, Ireland, South Africa, the Philippines, Germany, France, Spain, Singapore, and the US all ran the protocol.</p>
          <p>The protocol worked the same in every single country — because every ingredient is globally available in any normal grocery store, under different brand names.</p>
          <p>The guide includes the international ingredient guide specifically for this. You don't need to import anything. You don't need to find an American health store. You don't need to order online.</p>
          <p>If you have a grocery store, you can do this.</p>

          <CtaBlock trustSuffix="this week" />

        </div>
      </div>

      <footer className="footer">
        <div className="footer-logo">THE WOMEN'S DAILY</div>
        <div className="footer-tagline">Independent women's health journalism since 2019</div>
        <div className="footer-links">
          <a href="#">About Us</a> ·
          <a href="#">Editorial Team</a> ·
          <a href="#">Contact</a> ·
          <a href="#">Advertise</a> ·
          <a href="#">Privacy</a> ·
          <a href="#">Terms</a> ·
          <a href="#">Disclaimer</a>
        </div>
        <div className="footer-social">f &nbsp;|&nbsp; Instagram &nbsp;|&nbsp; Pinterest</div>
        <div className="footer-legal">
          © 2026 The Women's Daily — Health &amp; Beauty Desk. Contributor column by Dr. Rachel Kim, MD (retired). Views are the author's own.<br />
          Any photos depicted are models. Results vary and are not guaranteed. Statements on this page have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Always consult your physician before beginning any dietary changes.
        </div>
      </footer>

      <div className={`sticky-bar${showSticky ? ' show' : ''}`}>
        <button
          className="sticky-btn"
          onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
        >
          GET THE PROTOCOL — $27 →
        </button>
      </div>
    </>
  )
}
