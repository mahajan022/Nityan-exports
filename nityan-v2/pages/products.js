import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from '../styles/Products.module.css';

const cats = ['All','Agricultural','Spice Powders','Organic','Craftsmanship'];

const products = [
  { name:'Fresh Fruits & Vegetables',   cat:'Agricultural',   short:'Farm-fresh seasonal produce exported globally with cold-chain logistics.',             desc:'We export a wide range of seasonal and exotic Indian fruits and vegetables, freshly sourced from farms with strict quality grading and phytosanitary compliance.' },
  { name:'Dehydrated Onion Powder',     cat:'Spice Powders',  short:'Hygienically processed and vacuum-packed for long shelf life.',                        desc:'Premium dehydrated onion powder processed in hygienic facilities, with consistent granule size and flavour profile meeting international food standards.' },
  { name:'Ginger Powder',               cat:'Spice Powders',  short:'Aromatic, potent ginger powder from Indian farms.',                                    desc:'Sun-dried and ground Indian ginger, renowned for its high gingerol content. Ideal for food processing, beverages, and pharmaceutical industries.' },
  { name:'Amla (Indian Gooseberry) Powder', cat:'Spice Powders', short:'Vitamin C-rich superfood powder exported globally.',                               desc:'Spray-dried and cold-processed Amla powder retaining maximum nutritional value. Widely used in Ayurvedic supplements, nutraceuticals, and food products.' },
  { name:'Banana Powder',               cat:'Spice Powders',  short:'Naturally sweet banana powder for food and health industries.',                        desc:'Made from ripe Indian bananas, our banana powder is used in infant foods, health drinks, bakery products, and ice creams globally.' },
  { name:'Garlic Powder',               cat:'Spice Powders',  short:'Pungent, pure garlic powder with consistent quality.',                                 desc:'Produced from premium Indian garlic varieties, carefully dehydrated and milled to retain aroma and potency.' },
  { name:'Bio Fertilizer',              cat:'Organic',        short:'Manufactured in-house for sustainable agriculture worldwide.',                         desc:'Our Bio Fertilizer is manufactured with advanced microbial technology, enhancing soil fertility naturally. Suitable for organic and sustainable agriculture.' },
  { name:'Vermicompost',                cat:'Organic',        short:'Nutrient-rich organic compost from controlled vermiculture.',                          desc:'High-quality vermicompost from managed earthworm composting. Rich in NPK, micronutrients, and beneficial microbes — ideal for horticulture.' },
  { name:'Hing (Asafoetida)',           cat:'Spice Powders',  short:'Pure-grade Indian Hing — a prized culinary and medicinal spice.',                     desc:'Sourced from top-quality resin producers, our Hing is processed and packed under hygienic conditions for export to Middle Eastern, European, and Asian markets.' },
  { name:'Leather Goods',              cat:'Craftsmanship',  short:'Premium Indian leather products meeting global standards.',                             desc:'Handcrafted and machine-finished leather goods sourced from India\'s leading leather hubs. Bags, wallets, belts and more — custom orders welcome.' },
  { name:'Handicrafts',                cat:'Craftsmanship',  short:'Authentic Indian artisanal products for global retail.',                               desc:'Curated collection of handmade Indian handicrafts — textiles, wood carvings, brassware, and decorative items crafted by skilled artisans across India.' },
  { name:'Copper Utensils',            cat:'Craftsmanship',  short:'Traditional Indian copper craftsmanship for home and wellness.',                       desc:'Handcrafted copper utensils — cups, jugs, trays, and cookware — prized for their health benefits and artisanal appeal in global wellness markets.' },
];

export default function Products() {
  const [active, setActive]   = useState('All');
  const [expanded, setExpand] = useState(null);

  const filtered = active === 'All' ? products : products.filter(p => p.cat === active);

  return (
    <>
      <Head><title>Products | Nityan Exports Pvt Ltd</title></Head>
      <div className="page-top">

        {/* Hero */}
        <section className={styles.pageHero}>
          <div className="img-ph" style={{ position:'absolute', inset:0, borderRadius:0, border:'none', background:'linear-gradient(135deg,#9ab4c8,#74a0bc)' }}>
            <span>Products Banner</span><small>1920×500px — spices / products spread</small>
          </div>
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
                <button key={c} className={`${styles.filterBtn} ${active === c ? styles.filterActive : ''}`} onClick={() => setActive(c)}>
                  {c}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className={styles.grid}>
              {filtered.map((p, i) => (
                <div className={`${styles.card} fade-up d${(i % 3) + 1}`} key={i}>
                  <div style={{ position:'relative' }}>
                    <div className="img-ph" style={{ width:'100%', height:220, borderRadius:'8px 8px 0 0', border:'none' }}>
                      <span>{p.name}</span><small>600×220px</small>
                    </div>
                    <span className={styles.catTag}>{p.cat}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3>{p.name}</h3>
                    <p className={styles.short}>{p.short}</p>
                    {expanded === i && <p className={styles.long}>{p.desc}</p>}
                    <button className={styles.toggle} onClick={() => setExpand(expanded === i ? null : i)}>
                      {expanded === i ? 'Show Less ↑' : 'Learn More →'}
                    </button>
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
              <div className="img-ph" style={{ width:'100%', height:340 }}>
                <span>Export / Shipping</span><small>600×340px</small>
              </div>
            </div>
            <div className={styles.ctaText}>
              <span className="eyebrow fade-up d1">Ready to Order?</span>
              <h2 className={`${styles.title} fade-up d2`}>Request a Sample or Quote</h2>
              <p className={`${styles.body} fade-up d3`}>Interested in any of our products? We welcome bulk inquiries, sample requests, and custom sourcing orders. Our team responds within 24 hours.</p>
              <Link href="/contact" className={`btn-gold fade-up d4`}>Send an Enquiry <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
