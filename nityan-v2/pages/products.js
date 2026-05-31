import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from '../styles/Products.module.css';

const cats = ['All','Agricultural','Pulses','Spice Powders','Organic','Craftsmanship'];

const products = [
  { name:'Fresh Fruits & Vegetables',      cat:'Agricultural',  img:'/product1.png', short:'Farm-fresh seasonal produce exported globally with cold-chain logistics.',        desc:'We export a wide range of seasonal and exotic Indian fruits and vegetables, freshly sourced from farms with strict quality grading and phytosanitary compliance. Our vegetable range includes Potatoes, Onion, Tomato, Green Chilli, Garlic, Ginger, Drumstick (Moringa), and Bhindi (Okra). Our fruit range includes Apple, Chiku (Sapota), Grapes, Pomegranate, Mango, Guava, and Orange. Every consignment is graded, cleaned, and packed to international standards with full phytosanitary compliance and cold-chain logistics for maximum freshness on arrival.' },
  { name:'Indian Pulses',                  cat:'Pulses',        img:'/product14.png', short:'Premium Indian pulses — Chickpeas, Lentils, Peas, Black Gram & Pigeon Peas.',  desc:'We export a premium range of Indian pulses including Chickpeas (Gram), Lentils, Peas, Black Gram, and Pigeon Peas. Sourced directly from major production hubs across Madhya Pradesh, Maharashtra, Rajasthan, Uttar Pradesh, and Karnataka, every lot is cleaned, sorted, and graded to international standards before being packed for export worldwide.' },
  { name:'Dehydrated Onion Powder',        cat:'Spice Powders', img:'/product7.png', short:'Hygienically processed and vacuum-packed for long shelf life.',                   desc:'Premium dehydrated onion powder processed in hygienic facilities, with consistent granule size and flavour profile meeting international food standards.' },
  { name:'Ginger Powder',                  cat:'Spice Powders', img:'/product8.png', short:'Aromatic, potent ginger powder from Indian farms.',                               desc:'Sun-dried and ground Indian ginger, renowned for its high gingerol content. Ideal for food processing, beverages, and pharmaceutical industries.' },
  { name:'Amla (Indian Gooseberry) Powder',cat:'Spice Powders', img:'/product9.png', short:'Vitamin C-rich superfood powder exported globally.',                              desc:'Spray-dried and cold-processed Amla powder retaining maximum nutritional value. Widely used in Ayurvedic supplements, nutraceuticals, and food products.' },
  { name:'Banana Powder',                  cat:'Spice Powders', img:'/product10.png', short:'Naturally sweet banana powder for food and health industries.',                   desc:'Made from ripe Indian bananas, our banana powder is used in infant foods, health drinks, bakery products, and ice creams globally.' },
  { name:'Garlic Powder',                  cat:'Spice Powders', img:'/product12.png', short:'Pungent, pure garlic powder with consistent quality.',                            desc:'Produced from premium Indian garlic varieties, carefully dehydrated and milled to retain aroma and potency.' },
  { name:'Organic Fertilizer',             cat:'Organic',       img:'/product5.png', short:'Manufactured in-house for sustainable agriculture worldwide.',                    desc:'Our Organic Fertilizer is manufactured with advanced microbial technology, enhancing soil fertility naturally. Suitable for organic and sustainable agriculture.' },
  { name:'Vermicompost',                   cat:'Organic',       img:'/product15.png', short:'Nutrient-rich organic compost from controlled vermiculture.',                     desc:'High-quality vermicompost from managed earthworm composting. Rich in NPK, micronutrients, and beneficial microbes — ideal for horticulture.' },
  { name:'Hing (Asafoetida)',              cat:'Spice Powders', img:'/product6.png', short:'Pure-grade Indian Hing — a prized culinary and medicinal spice.',                desc:'Sourced from top-quality resin producers, our Hing is processed and packed under hygienic conditions for export to Middle Eastern, European, and Asian markets.' },
  { name:'Leather Goods',                  cat:'Craftsmanship', img:'/product3.png', short:'Premium Indian leather products meeting global standards.',                       desc:'Handcrafted and machine-finished leather goods sourced from India\'s leading leather hubs. Bags, wallets, belts and more — custom orders welcome.' },
  { name:'Handicrafts',                    cat:'Craftsmanship', img:'/product13.png', short:'Authentic Indian artisanal products for global retail.',                          desc:'Curated collection of handmade Indian handicrafts — textiles, wood carvings, brassware, and decorative items crafted by skilled artisans across India.' },
  { name:'Copper Utensils',               cat:'Craftsmanship', img:'/product4.png', short:'Traditional Indian copper craftsmanship for home and wellness.',                  desc:'Handcrafted copper utensils — cups, jugs, trays, and cookware — prized for their health benefits and artisanal appeal in global wellness markets.' },
];

export default function Products() {
  const [active, setActive]   = useState('All');
  const [expanded, setExpand] = useState(null);

  const filtered = active === 'All' ? products : products.filter(p => p.cat === active);

  function handleFilter(cat) {
    setExpand(null);
    setActive(cat);
  }

  return (
    <>
      <Head><title>Products | Nityan Exports Pvt Ltd</title></Head>
      <div className="page-top">

        {/* Hero */}
        <section className={styles.pageHero}>
          <img src="/products-banner.jpeg" alt="Products Banner" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span className="eyebrow light fade-up d1">What We Export</span>
            <h1 className="fade-up d2">Our Product Range</h1>
            <p className="fade-up d3">From organic farm produce to fine handicrafts — every product reflects the best of India.</p>
          </div>
        </section>

        {/* Listing */}
        <section className={styles.listing}>
          <div className={styles.listingInner}>

            {/* Filter */}
            <div className={`${styles.filters} fade-up`}>
              {cats.map(c => (
                <button key={c} className={`${styles.filterBtn} ${active === c ? styles.filterActive : ''}`} onClick={() => handleFilter(c)}>
                  {c}
                </button>
              ))}
            </div>

            {/* Grid — key on active forces full remount so fade-up re-fires */}
            <div className={styles.grid} key={active}>
              {filtered.map((p, i) => (
                <div
                  className={`${styles.card} ${expanded === p.name ? styles.cardOpen : ''}`}
                  key={p.name}
                  onClick={() => setExpand(expanded === p.name ? null : p.name)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setExpand(expanded === p.name ? null : p.name); } }}
                  style={{ cursor:'pointer' }}
                >
                  <div style={{ position:'relative' }}>
                    <img src={p.img} alt={p.name} style={{ width:'100%', height:220, objectFit:'cover', borderRadius:'8px 8px 0 0', display:'block' }} />
                    <span className={styles.catTag}>{p.cat}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3>{p.name}</h3>
                    <p className={styles.short}>{p.short}</p>
                    {expanded === p.name && <p className={styles.long}>{p.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <div className={`${styles.ctaImg} fade-in d1`}>
              <img src="/cta-products.png" alt="Export" style={{ width:'100%', height:340, objectFit:'cover', borderRadius:2, display:'block' }} />
            </div>
            <div className={styles.ctaText}>
              <span className="eyebrow fade-up d1">Ready to Order?</span>
              <h2 className={`${styles.title} fade-up d2`}>Request a Sample or Quote</h2>
              <p className={`${styles.body} fade-up d3`}>Interested in any of our products? We welcome bulk inquiries, sample requests, and custom sourcing orders. Our team responds within 24 hours.</p>
              <Link href="/contact" className="btn-gold fade-up d4">Send an Enquiry <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}