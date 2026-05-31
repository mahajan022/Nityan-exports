import Link from 'next/link';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import styles from './Footer.module.css';

const WhatsAppIcon = ({ size = 14 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

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
              <a href="https://wa.me/919118985119" target="_blank" rel="noreferrer" className={styles.contactRow}>
                <WhatsAppIcon size={14} /><span>WhatsApp: +91-9118985119</span>
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