import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Search, Package, FileText, Truck, Headphones, BarChart2 } from 'lucide-react';
import styles from '../styles/Services.module.css';

const services = [
  { icon: <Search size={30} />, title: 'Product Sourcing', sub: 'Direct from Indian Manufacturers', desc: 'We identify, vet, and source the exact products you need from trusted Indian manufacturers and farmer cooperatives.', pts: ['Manufacturer verification', 'Sample procurement', 'Price negotiation', 'Quality benchmarking'] },
  { icon: <Package size={30} />, title: 'Packaging & Labelling', sub: 'Market-Ready Presentation', desc: 'We arrange custom packaging and labelling as per your destination market requirements — food-grade, retail, or bulk.', pts: ['Custom retail packaging', 'Bulk industrial packaging', 'Country-specific labelling', 'Food-safe materials'] },
  { icon: <FileText size={30} />, title: 'Export Documentation', sub: 'Hassle-Free Compliance', desc: 'We handle all export paperwork — from Certificate of Origin to Phytosanitary Certificates — ensuring smooth clearance.', pts: ['Certificate of Origin', 'Phytosanitary Certificates', 'Quality Inspection Reports', 'Commercial Invoices & Packing Lists'] },
  { icon: <Truck size={30} />, title: 'Logistics & Shipping', sub: 'End-to-End Freight Management', desc: 'We coordinate freight forwarders, shipping lines, and customs brokers to ensure timely and safe delivery.', pts: ['FCL & LCL shipping', 'Air freight for perishables', 'Cold-chain logistics', 'Real-time shipment tracking'] },
  { icon: <Headphones size={30} />, title: 'Buyer Consultation', sub: 'Expert Trade Advisory', desc: 'New to importing from India? Our team provides end-to-end consultation on regulations, MOQ, payment terms, and more.', pts: ['Import regulation guidance', 'MOQ & pricing consultation', 'Payment terms advisory', 'Market entry support'] },
  { icon: <BarChart2 size={30} />, title: 'Quality Assurance', sub: 'Consistent Standards You Can Trust', desc: 'We implement a rigorous multi-stage quality control process — from raw material inspection to final pre-shipment checks.', pts: ['Pre-shipment inspection', 'Third-party lab testing', 'Specification compliance', 'Defect reporting & resolution'] },
];

const steps = [
  { n: '01', t: 'Enquiry', d: 'You send us your product requirement, quantity, and destination.' },
  { n: '02', t: 'Sourcing', d: 'We identify the best Indian manufacturer or supplier for your requirement.' },
  { n: '03', t: 'Sample', d: 'A product sample is prepared and dispatched for your approval.' },
  { n: '04', t: 'Order Confirmed', d: 'Once the sample is approved, we confirm pricing, packaging, and timeline.' },
  { n: '05', t: 'Production & QC', d: 'Your order is processed with quality checks at every stage.' },
  { n: '06', t: 'Shipment', d: 'We handle all documentation, logistics, and shipping to your destination.' },
];

export default function Services() {
  return (
    <>
      <Head><title>Services | Nityan Exports Pvt Ltd</title></Head>
      <div className="page-top">

        {/* Hero */}
        <section className={styles.pageHero}>
          <img src="/services-banner.png" alt="Services Banner" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span className="eyebrow light fade-up d1">What We Do</span>
            <h1 className="fade-up d2">End-to-End Export Services</h1>
            <p className="fade-up d3">From sourcing and packaging to shipping and documentation — we manage the entire export process.</p>
          </div>
        </section>

        {/* Intro */}
        <section className={styles.intro}>
          <div className={styles.introInner}>
            <div className={styles.introText}>
              <span className="eyebrow fade-up d1">Our Expertise</span>
              <h2 className={`${styles.title} fade-up d2`}>Your Complete Export Partner from India</h2>
              <p className={`${styles.body} fade-up d3`}>Nityan Exports is more than a supplier — we are a full-service export partner. Whether you're looking for a one-time shipment or a long-term supply relationship, we bring expertise, network, and commitment to every transaction.</p>
              <p className={`${styles.body} fade-up d3`}>Our services span the entire export value chain — from product sourcing and quality control to packaging, documentation, and international logistics.</p>
            </div>
            <div className={`${styles.introImg} fade-in d2`}>
              <img src="/services-overview.png" alt="Services Overview" style={{ width: '100%', height: 380, objectFit: 'cover', borderRadius: 2, display: 'block' }} />
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className={styles.svcSection}>
          <div className={styles.svcInner}>
            <div className={`${styles.secHeader} fade-up`}>
              <span className="eyebrow">Our Services</span>
              <h2 className={styles.title}>How We Help You Source from India</h2>
            </div>
            <div className={styles.svcGrid}>
              {services.map((s, i) => (
                <div className={`${styles.svcCard} fade-up d${(i % 3) + 1}`} key={i}>
                  <div className={styles.svcIcon}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <span className={styles.svcSub}>{s.sub}</span>
                  <p>{s.desc}</p>
                  <ul className={styles.pts}>
                    {s.pts.map(pt => <li key={pt}><span className={styles.bullet} />{pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className={styles.process}>
          <div className={styles.processInner}>
            <div className={`${styles.secHeader} fade-up`}>
              <span className="eyebrow light">How It Works</span>
              <h2 className={`${styles.title} ${styles.white}`}>Our Export Process</h2>
              <p className={styles.processSub}>A transparent, step-by-step journey from your first enquiry to successful delivery.</p>
            </div>
            <div className={styles.steps}>
              {steps.map((s, i) => (
                <div className={`${styles.step} fade-up d${(i % 3) + 1}`} key={i}>
                  <span className={styles.stepNum}>{s.n}</span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <div className={`${styles.ctaImg} fade-in d1`}>
              <img src="/cta-products.png" alt="Export" style={{ width: '100%', height: 340, objectFit: 'cover', borderRadius: 2, display: 'block' }} />
            </div>
            <div className={styles.ctaText}>
              <span className="eyebrow fade-up d1">Get Started</span>
              <h2 className={`${styles.title} fade-up d2`}>Ready to Import from India?</h2>
              <p className={`${styles.body} fade-up d3`}>Tell us what you're looking for — product, quantity, destination — and our team will put together a tailored proposal within 24 hours.</p>
              <Link href="/contact" className={`btn-gold fade-up d4`}>Contact Us Today <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
