import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Target, Eye, Heart } from 'lucide-react';
import styles from '../styles/About.module.css';

const milestones = [
  { year:'2015', title:'Company Founded',         desc:'Nityan Exports Pvt Ltd was established in Gurugram by Pawan Tripathi with a vision to connect Indian produce with global buyers.' },
  { year:'2017', title:'First International Export', desc:'Successfully completed first international shipment of dehydrated spice powders to Middle Eastern markets.' },
  { year:'2019', title:'Expanded Product Range',  desc:'Launched leather goods and handicraft export verticals, partnering with artisan communities across India.' },
  { year:'2021', title:'Bio Fertilizer Manufacturing', desc:'Added in-house manufacturing of Bio Fertilizer and Vermicompost, expanding into sustainable agriculture products.' },
  { year:'2023', title:'Global Growth',            desc:'Serving buyers across 20+ countries with established direct sourcing networks with Indian manufacturers and farmers.' },
];

const values = [
  { icon:<Target size={26}/>, title:'Our Mission', desc:'To be the most trusted Indian export partner — connecting quality Indian products to global markets with transparency and reliability.' },
  { icon:<Eye size={26}/>,    title:'Our Vision',  desc:'A world where Indian quality is recognised as the global benchmark — powered by ethical trade and genuine partnerships.' },
  { icon:<Heart size={26}/>,  title:'Our Values',  desc:'Integrity in every deal. Respect for every farmer, artisan, and buyer. Commitment to quality at every step of the supply chain.' },
];

export default function About() {
  return (
    <>
      <Head><title>About Us | Nityan Exports Pvt Ltd</title></Head>
      <div className="page-top">

        {/* Hero */}
        <section className={styles.pageHero}>
         <img src="/about-banner.png" alt="About Nityan Exports" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span className="eyebrow light fade-up d1">About Us</span>
            <h1 className="fade-up d2">Our Story, Our Purpose</h1>
            <p className="fade-up d3">A Gurugram-based export company driven by quality, integrity, and a passion for Indian excellence.</p>
          </div>
        </section>

        {/* Story */}
        <section className={styles.story}>
          <div className={styles.storyInner}>
            <div className={styles.storyText}>
              <span className="eyebrow fade-up d1">Our Story</span>
              <h2 className={`${styles.title} fade-up d2`}>Built on Trust, Powered by Purpose</h2>
              <p className={`${styles.body} fade-up d3`}>Nityan Exports Pvt Ltd was founded with a singular vision — to bring the richness of India's agricultural heritage and artisanal craftsmanship to global markets. Headquartered in Gurugram, Haryana, we operate at the intersection of quality sourcing and international trade.</p>
              <p className={`${styles.body} fade-up d3`}>Led by <strong>Pawan Tripathi</strong>, Founder &amp; CEO, our company has grown from a focused agricultural exporter to a multi-category trade partner serving buyers across Asia, Europe, the Middle East, and beyond.</p>
              <ul className={`${styles.checks} fade-up d4`}>
                {['Direct Manufacturer Sourcing','End-to-End Logistics','Quality Assurance at Every Stage','Transparent Documentation & Compliance'].map(c => (
                  <li key={c}><CheckCircle size={17} /><span>{c}</span></li>
                ))}
              </ul>
            </div>
            <div className={`${styles.storyImgs} fade-in d2`}>
              <div className="img-ph" style={{ width:'100%', height:400 }}>
                <span>Founder / Office</span><small>560×400px</small>
              </div>
              <div className="img-ph" style={{ width:'100%', height:220, marginTop:16 }}>
                <span>Warehouse / Products</span><small>560×220px</small>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className={styles.values}>
          <div className={styles.valuesInner}>
            <div className={`${styles.secHeader} fade-up`}>
              <span className="eyebrow">What Drives Us</span>
              <h2 className={styles.title}>Mission, Vision &amp; Values</h2>
            </div>
            <div className={styles.valGrid}>
              {values.map((v, i) => (
                <div className={`${styles.valCard} fade-up d${i + 1}`} key={i}>
                  <div className={styles.valIcon}>{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className={styles.timeline}>
          <div className={styles.timelineInner}>
            <div className={`${styles.secHeader} fade-up`}>
              <span className="eyebrow light">Our Journey</span>
              <h2 className={`${styles.title} ${styles.white}`}>Milestones That Define Us</h2>
            </div>
            <div className={styles.track}>
              <div className={styles.line} />
              {milestones.map((m, i) => (
                <div className={`${styles.item} ${i % 2 === 0 ? styles.left : styles.right} fade-up d${(i % 3) + 1}`} key={i}>
                  <div className={styles.year}>{m.year}</div>
                  <div className={styles.dot} />
                  <div className={styles.card}>
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className={styles.leader}>
          <div className={styles.leaderInner}>
            <div className={`${styles.secHeader} fade-up`}>
              <span className="eyebrow">Leadership</span>
              <h2 className={styles.title}>Meet the Founder</h2>
            </div>
            <div className={`${styles.leaderCard} fade-up d2`}>
              <div className={styles.leaderPhoto}>
                <div className="img-ph" style={{ width:'100%', height:'100%', minHeight:400, borderRadius:0 }}>
                  <span>Pawan Tripathi</span><small>400×440px — professional portrait</small>
                </div>
              </div>
              <div className={styles.leaderInfo}>
                <h3>Pawan Tripathi</h3>
                <span className={styles.role}>Founder &amp; CEO</span>
                <p>With deep roots in trade and a passion for showcasing Indian excellence, Pawan founded Nityan Exports to build a world-class export business from India, serving global buyers with integrity and commitment.</p>
                <div className={styles.leaderContact}>
                  <a href="tel:+919118985119">+91-9118985119</a>
                  <span>·</span>
                  <a href="mailto:pawan@nityanexports.com">pawan@nityanexports.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={`${styles.ctaInner} fade-up`}>
            <h2>Partner With Us</h2>
            <p>Looking for a reliable Indian export partner? Let's talk about how Nityan Exports can serve your sourcing needs.</p>
            <Link href="/contact" className="btn-gold">Start a Conversation <ArrowRight size={16} /></Link>
          </div>
        </section>

      </div>
    </>
  );
}
