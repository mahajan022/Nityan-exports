import Link from 'next/link';
import { Phone, Mail, MapPin, Globe, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.grid}>

          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logoWrap}>
              <img src="/logo.png" alt="Nityan Exports" className={styles.logo} />
            </div>
            <p className={styles.tagline}>
              Bridging India's finest produce and craftsmanship with global markets. Trusted quality, transparent trade, enduring partnerships.
            </p>
            <div className={styles.divider} />
            <div className={styles.contacts}>
              <a href="tel:+919311443912" className={styles.contactRow}>
                <Phone size={14} /><span>+91-9311443912</span>
              </a>
              <a href="tel:+919118985119" className={styles.contactRow}>
                <Phone size={14} /><span>+91-9118985119</span>
              </a>
              <a href="https://wa.me/919311443912" target="_blank" rel="noreferrer" className={styles.contactRow}>
                <MessageCircle size={14} /><span>WhatsApp: +91-9311443912</span>
              </a>
              <a href="mailto:pawan@nityanexports.com" className={styles.contactRow}>
                <Mail size={14} /><span>pawan@nityanexports.com</span>
              </a>
              <a href="mailto:hello@nityanexports.com" className={styles.contactRow}>
                <Mail size={14} /><span>hello@nityanexports.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4>Quick Links</h4>
            <ul>
              {[['/', 'Home'], ['/about', 'About Us'], ['/products', 'Products'], ['/services', 'Services'], ['/contact', 'Contact']].map(([h, l]) => (
                <li key={h}><Link href={h}>{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className={styles.col}>
            <h4>Export Products</h4>
            <ul>
              {['Fruits & Vegetables', 'Indian Pulses', 'Dehydrated Onion Powder', 'Ginger & Garlic Powder', 'Amla & Banana Powder', 'Leather Goods', 'Handicraft & Copper Utensils', 'Organic Fertilizer & Vermicompost'].map(p => (
                <li key={p}><span>{p}</span></li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className={styles.col}>
            <h4>Our Office</h4>
            <div className={styles.address}>
              <div className={styles.addrRow}>
                <MapPin size={15} />
                <p>1201, Tower A7, Signature Global Solera, Sector 107, Gurugram, Haryana – 122006, India</p>
              </div>
              <div className={styles.addrRow}>
                <Globe size={15} />
                <a href="http://www.nityanexports.com" target="_blank" rel="noreferrer">www.nityanexports.com</a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p>© {new Date().getFullYear()} Nityan Exports Pvt Ltd. All rights reserved.</p>
          <p>Designed for global trade excellence.</p>
        </div>
      </div>
    </footer>
  );
}