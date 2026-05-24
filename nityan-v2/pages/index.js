import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Globe, Shield, TrendingUp, Award, ChevronDown, CheckCircle, Leaf, Package, Clock, Users } from 'lucide-react';
import styles from '../styles/Home.module.css';

const tickerItems = ['Fruits & Vegetables','Dehydrated Onion Powder','Ginger Powder','Garlic Powder','Amla Powder','Banana Powder','Leather Goods','Handicrafts','Copper Utensils','Bio Fertilizer','Vermicompost','Hing (Asafoetida)'];

const stats = [
  { n: '50+',  l: 'Export Products' },
  { n: '20+',  l: 'Countries Served' },
  { n: '100%', l: 'Quality Assured' },
  { n: '10+',  l: 'Years Experience' },
];

const products = [
  { name: 'Fruits & Vegetables',     cat: 'Agricultural',  desc: 'Farm-fresh, handpicked produce with cold-chain logistics to international markets.' },
  { name: 'Spice & Herb Powders',    cat: 'Spice Powders', desc: 'Dehydrated Onion, Ginger, Garlic, Amla & Banana Powder — hygienically processed.' },
  { name: 'Leather Goods',           cat: 'Craftsmanship', desc: 'Premium Indian leather craftsmanship meeting global quality and finishing standards.' },
  { name: 'Handicrafts & Copper',    cat: 'Craftsmanship', desc: 'Authentic Indian artistry — copper utensils, décor, and handmade ethnic creations.' },
  { name: 'Bio Fertilizer',          cat: 'Organic',       desc: 'Organic Bio Fertilizer and Vermicompost for sustainable agriculture worldwide.' },
  { name: 'Hing (Asafoetida)',       cat: 'Spice Powders', desc: 'Pure, high-grade Hing sourced and exported with strict quality control.' },
];

const why = [
  { icon: <Globe size={24} />,      title: 'Global Network',      desc: 'Established trade relationships across Asia, Europe, the Middle East, and beyond.' },
  { icon: <Shield size={24} />,     title: 'Quality Assured',     desc: 'Strict quality checks at every stage — from source to shipment destination.' },
  { icon: <TrendingUp size={24} />, title: 'Competitive Pricing', desc: 'Direct sourcing from Indian manufacturers ensures best-in-class pricing.' },
  { icon: <Award size={24} />,      title: 'Trusted Brand',       desc: 'Built on integrity and transparency — a partner you can count on.' },
];

const process = [
  { n: '01', t: 'Enquiry',    d: 'Send us your product requirement, quantity and destination country.' },
  { n: '02', t: 'Sourcing',   d: 'We identify the best Indian manufacturer or supplier for you.' },
  { n: '03', t: 'Sample',     d: 'A product sample is dispatched for your approval before bulk order.' },
  { n: '04', t: 'Shipment',   d: 'We handle all documentation, logistics and shipping to destination.' },
];

const countries = ['UAE', 'USA', 'UK', 'Germany', 'Australia', 'Canada', 'Saudi Arabia', 'Netherlands', 'Singapore', 'France', 'Japan', 'Italy'];

const trust = [
  { icon: <Package size={18} />, label: 'FSSAI Compliant' },
  { icon: <Shield size={18} />,  label: 'ISO Standards' },
  { icon: <Leaf size={18} />,    label: 'Organic Certified' },
  { icon: <Globe size={18} />,   label: 'Phyto Certified' },
  { icon: <Clock size={18} />,   label: '24-Hr Response' },
];

export default function Home() {
  return (
    <>
      <Head><title>Nityan Exports Pvt Ltd | Premium Indian Export Company</title></Head>
      <div className="page-top">

        {/* ── HERO ── */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <img src="/hero.png" alt="Nityan Exports Hero" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center' }} />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <span className="eyebrow light fade-up d1">India's Premier Export Company</span>
            <h1 className={`${styles.heroTitle} fade-up d2`}>
              Connecting India's<br /><em>Finest Quality</em><br />to the World
            </h1>
            <p className={`${styles.heroDesc} fade-up d3`}>
              Nityan Exports Pvt Ltd specialises in sourcing and exporting premium agricultural products, spices, leather goods, handicrafts, and organic inputs from India to global markets.
            </p>
            <div className={`${styles.heroActions} fade-up d4`}>
              <Link href="/products" className="btn-gold">Explore Products <ArrowRight size={15} /></Link>
              <Link href="/contact" className="btn-outline-white">Request a Quote</Link>
            </div>
          </div>
          <a href="#stats" className={styles.scrollHint}>
            <span>Scroll</span><ChevronDown size={18} />
          </a>
        </section>

        {/* ── TICKER ── */}
        <div className={styles.ticker} aria-hidden>
          <div className={styles.tickerTrack}>
            {[...tickerItems, ...tickerItems].map((t, i) => (
              <span className={styles.tickerItem} key={i}><span className={styles.tickerDot}/>{t}</span>
            ))}
          </div>
        </div>

        {/* ── STATS ── */}
        <section className={styles.statsBar} id="stats">
          <div className={styles.statsInner}>
            {stats.map((s, i) => (
              <div className={`${styles.statItem} fade-up d${i + 1}`} key={i}>
                <span className={styles.statNum}>{s.n}</span>
                <span className={styles.statLabel}>{s.l}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── ABOUT INTRO ── */}
        <section className={styles.about}>
          <div className={styles.aboutInner}>
            {/* FIX: accentBadge is now correctly inside aboutImgWrap */}
            <div className={`${styles.aboutImgWrap} fade-in d1`}>
              <div className={styles.aboutImgMain}>
                <img src="/about-main.png" alt="About Nityan Exports" style={{ width:'100%', height:440, objectFit:'cover', borderRadius:0, display:'block' }} />
              </div>
              <div className={styles.aboutImgAccent}>
                <img src="/about-accent.png" alt="Nityan Products" style={{ width:'100%', height:220, objectFit:'cover', borderRadius:0, display:'block' }} />
              </div>
              <div className={styles.accentBadge}>
                <Globe size={22} />
                <div>
                  <strong>Global Reach</strong>
                  <span>20+ Countries</span>
                </div>
              </div>
            </div>

            <div className={styles.aboutText}>
              <span className="eyebrow fade-up d1">Who We Are</span>
              <h2 className={`${styles.sectionTitle} fade-up d2`}>A Trusted Bridge Between India and the World</h2>
              <p className={`${styles.body} fade-up d3`}>
                Nityan Exports Pvt Ltd is a Gurugram-based export company founded by <strong>Pawan Tripathi</strong> with a clear mission — to bring India's finest agricultural products, traditional craftsmanship, and organic produce to international buyers with unmatched quality and reliability.
              </p>
              <p className={`${styles.body} fade-up d3`}>
                We work directly with Indian manufacturers and farmers, ensuring competitive pricing, consistent quality, and timely delivery across all product categories.
              </p>
              <ul className={`${styles.pillars} fade-up d4`}>
                {['Farm-to-Export Quality Control', 'Transparent Trade Practices', 'End-to-End Logistics Support', 'Dedicated Post-Sale Support'].map(p => (
                  <li key={p}>
                    <span className={styles.checkIcon}><CheckCircle size={12} /></span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link href="/about" className={`btn-gold fade-up d5`}>Learn More <ArrowRight size={15} /></Link>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section className={styles.products}>
          <div className={styles.productsInner}>
            <div className={`${styles.secHeader} fade-up`}>
              <span className="eyebrow">What We Export</span>
              <h2 className={`${styles.sectionTitle} sec-title`}>Our Product Range</h2>
              <p className={styles.subtitle}>From organic farm produce to handcrafted goods — we export the best of India.</p>
            </div>
            <div className={styles.prodGrid}>
              {products.map((p, i) => (
                <div className={`${styles.prodCard} fade-up d${(i % 3) + 1}`} key={i}>
                  <div className={styles.prodImgWrap}>
                    <img src={`/product${i+1}.png`} alt={p.name} style={{ width:'100%', height:200, objectFit:'cover', display:'block' }} />
                    <div className={styles.prodOverlay} />
                  </div>
                  <div className={styles.prodBody}>
                    <span className={styles.prodCatTag}>{p.cat}</span>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${styles.prodCta} fade-up`}>
              <Link href="/products" className="btn-navy">View All Products <ArrowRight size={15} /></Link>
            </div>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className={styles.why}>
          <div className={styles.whyInner}>
            <div className={`${styles.secHeader} fade-up`}>
              <span className="eyebrow light">Why Choose Us</span>
              <h2 className={`${styles.sectionTitle} sec-title-white`}>The Nityan Advantage</h2>
            </div>
            <div className={styles.whyGrid}>
              {why.map((w, i) => (
                <div className={`${styles.whyCard} fade-up d${i + 1}`} key={i}>
                  <div className={styles.whyIconWrap}>{w.icon}</div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REACH ── */}
        <section className={styles.reach}>
          <div className={styles.reachInner}>
            <div className={`${styles.secHeader} fade-up`}>
              <span className="eyebrow">Our Global Presence</span>
              <h2 className="sec-title fade-up">Serving Buyers Across the Globe</h2>
            </div>
            <div className={styles.reachGrid}>
              <div className={`${styles.reachText} fade-up d1`}>
                <p>Our export network spans 20+ countries across Asia, Europe, the Middle East, North America, and Oceania. We partner with importers, distributors, and retailers who value quality, consistency, and transparent trade.</p>
                <p>Every shipment is backed by our full documentation support — from Certificate of Origin to Phytosanitary Certificates — ensuring smooth customs clearance at every destination.</p>
                <div className={styles.countryTags}>
                  {countries.map(c => <span className={styles.countryTag} key={c}><Globe size={11}/>{c}</span>)}
                </div>
              </div>
              <div className={`${styles.reachMap} fade-in d2`}>
                <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto',borderRadius:2}}>
  <rect width="800" height="420" fill="#eef4f8"/>
  <path d="M80,80 L180,70 L220,100 L200,160 L160,180 L120,170 L80,140 Z" fill="#0b1d35" opacity="0.65"/>
  <path d="M150,200 L200,190 L220,250 L210,320 L170,340 L140,300 L130,240 Z" fill="#0b1d35" opacity="0.65"/>
  <path d="M340,60 L410,55 L430,90 L400,110 L360,105 L330,85 Z" fill="#c8870a" opacity="0.85"/>
  <path d="M340,130 L400,120 L420,180 L410,270 L370,290 L330,260 L320,190 Z" fill="#0b1d35" opacity="0.65"/>
  <path d="M430,55 L580,50 L620,90 L610,150 L560,170 L480,160 L440,130 L420,90 Z" fill="#c8870a" opacity="0.8"/>
  <path d="M500,130 L530,125 L545,160 L530,200 L505,195 L490,165 Z" fill="#e8a020" opacity="1"/>
  <path d="M580,240 L660,230 L680,290 L650,330 L590,320 L565,275 Z" fill="#0b1d35" opacity="0.65"/>
  <line x1="515" y1="162" x2="155" y2="105" stroke="#c8870a" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.6"/>
  <line x1="515" y1="162" x2="375" y2="78" stroke="#c8870a" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.6"/>
  <line x1="515" y1="162" x2="450" y2="145" stroke="#c8870a" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.6"/>
  <line x1="515" y1="162" x2="630" y2="275" stroke="#c8870a" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.6"/>
  <line x1="515" y1="162" x2="175" y2="230" stroke="#c8870a" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.6"/>
  <circle cx="155" cy="105" r="5" fill="#c8870a"/>
  <circle cx="375" cy="78" r="5" fill="#c8870a"/>
  <circle cx="450" cy="145" r="5" fill="#c8870a"/>
  <circle cx="630" cy="275" r="5" fill="#c8870a"/>
  <circle cx="175" cy="230" r="5" fill="#c8870a"/>
  <circle cx="515" cy="162" r="12" fill="#c8870a" opacity="0.25">
    <animate attributeName="r" values="8;18;8" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="515" cy="162" r="7" fill="#c8870a"/>
  <text x="515" y="178" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="sans-serif" fontWeight="bold">INDIA</text>
  <text x="400" y="408" textAnchor="middle" fill="#8a9ab0" fontSize="12" fontFamily="sans-serif">Nityan Exports — Serving 20+ Countries Worldwide</text>
</svg>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className={styles.process}>
          <div className={styles.processInner}>
            <div className={`${styles.secHeader} fade-up`}>
              <span className="eyebrow">How It Works</span>
              <h2 className="sec-title fade-up">Simple 4-Step Export Process</h2>
              <p className={`${styles.subtitle} fade-up`}>From enquiry to delivery — we handle everything.</p>
            </div>
            <div className={styles.processSteps}>
              {process.map((s, i) => (
                <div className={`${styles.processStep} fade-up d${i + 1}`} key={i}>
                  <div className={styles.stepCircle}>{s.n}</div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BANNER CTA ── */}
        <section className={styles.banner}>
          <div className={styles.bannerBg}>
            <img src="/banner.png" alt="Banner" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
          </div>
          <div className={`${styles.bannerContent} fade-up`}>
            <span className="eyebrow light">Partner With Us</span>
            <h2>Ready to Source from India?</h2>
            <p>Let us manage your entire sourcing and export logistics from India to your destination. Sample requests, bulk orders, custom packaging — we do it all.</p>
            <div className={styles.bannerActions}>
              <Link href="/contact" className="btn-gold">Get in Touch <ArrowRight size={15} /></Link>
              <Link href="/products" className="btn-outline-white">View Products</Link>
            </div>
          </div>
        </section>

        {/* ── TRUST BADGES ── */}
        <section className={styles.trust}>
          <div className={styles.trustInner}>
            <p className={styles.trustLabel}>Compliance & Certifications</p>
            <div className={styles.trustBadges}>
              {trust.map((t, i) => (
                <div className={styles.trustBadge} key={i}>{t.icon}{t.label}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUOTE ── */}
        <section className={styles.quote}>
          <div className={`${styles.quoteInner} fade-up`}>
            <span className={styles.quoteMark}>"</span>
            <p>Quality is not an act — it is a habit. Every product we ship reflects the pride and heritage of India.</p>
            <strong>— Pawan Tripathi, Founder & CEO, Nityan Exports Pvt Ltd</strong>
          </div>
        </section>

      </div>
    </>
  );
}