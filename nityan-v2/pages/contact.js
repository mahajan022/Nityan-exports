import Head from 'next/head';
import { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Clock, Send } from 'lucide-react';
import styles from '../styles/Contact.module.css';

const info = [
  { icon: <Phone size={18} />, label: 'Phone', content: <a href="tel:+919118985119">+91-9118985119</a> },
  { icon: <Mail size={18} />, label: 'Email', content: <><a href="mailto:pawan@nityanexports.com">pawan@nityanexports.com</a><a href="mailto:Pawantripathi45@gmail.com" style={{ fontSize: '.8rem', opacity: .7 }}>Pawantripathi45@gmail.com</a></> },
  { icon: <Globe size={18} />, label: 'Website', content: <a href="http://www.nityanexports.com" target="_blank" rel="noreferrer">www.nityanexports.com</a> },
  { icon: <MapPin size={18} />, label: 'Address', content: <span>1201, Tower A7, Signature Global Solera,<br />Sector 107, Gurugram,<br />Haryana – 122006, India</span> },
  { icon: <Clock size={18} />, label: 'Business Hours', content: <span>Monday – Saturday: 9:00 AM – 6:00 PM IST</span> },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', product: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => { e.preventDefault(); setSent(true); };

  return (
    <>
      <Head><title>Contact Us | Nityan Exports Pvt Ltd</title></Head>
      <div className="page-top">

        {/* Hero */}
        <section className={styles.pageHero}>
          <img src="/contact-banner.png" alt="Contact Banner" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span className="eyebrow light fade-up d1">Get In Touch</span>
            <h1 className="fade-up d2">Contact Nityan Exports</h1>
            <p className="fade-up d3">Reach out to discuss your sourcing needs, request a sample, or get a quote.</p>
          </div>
        </section>

        {/* Main */}
        <section className={styles.main}>
          <div className={styles.mainInner}>

            {/* Info */}
            <div className={styles.info}>
              <span className="eyebrow fade-up d1">Our Contact</span>
              <h2 className={`${styles.title} fade-up d2`}>Let's Start a Conversation</h2>
              <p className={`${styles.body} fade-up d3`}>Whether you're a first-time buyer or an established importer — we're here to help. Our team responds to all enquiries within 24 hours.</p>

              <div className={`${styles.infoBlocks} fade-up d3`}>
                {info.map((it, i) => (
                  <div className={styles.infoBlock} key={i}>
                    <div className={styles.infoIcon}>{it.icon}</div>
                    <div className={styles.infoText}>
                      <strong>{it.label}</strong>
                      {it.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Person card — photo + details unified */}
              <div className={`${styles.person} fade-up d4`}>
                <div className={styles.personPhoto}>
                  <img src="/pawanji.jpeg" alt="Pawan Tripathi" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div className={styles.personDetails}>
                  <strong>Pawan Tripathi</strong>
                  <span>Founder &amp; CEO</span>
                  <p>Direct inquiries are always welcome.</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={`${styles.formWrap} fade-up d2`}>
              <div className={styles.formCard}>
                <h3>Send an Enquiry</h3>
                <p>Fill the form below and we'll get back to you within 24 hours.</p>

                {sent ? (
                  <div className={styles.success}>
                    <Send size={34} />
                    <h4>Message Sent!</h4>
                    <p>Thank you for reaching out. We'll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={submit} className={styles.form}>
                    <div className={styles.row}>
                      <div className={styles.group}>
                        <label>Full Name *</label>
                        <input name="name" value={form.name} onChange={handle} required placeholder="Your full name" />
                      </div>
                      <div className={styles.group}>
                        <label>Company Name</label>
                        <input name="company" value={form.company} onChange={handle} placeholder="Your company" />
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.group}>
                        <label>Email Address *</label>
                        <input type="email" name="email" value={form.email} onChange={handle} required placeholder="your@email.com" />
                      </div>
                      <div className={styles.group}>
                        <label>Phone / WhatsApp</label>
                        <input name="phone" value={form.phone} onChange={handle} placeholder="+1 234 567 8900" />
                      </div>
                    </div>
                    <div className={styles.group}>
                      <label>Product / Category of Interest</label>
                      <select name="product" value={form.product} onChange={handle}>
                        <option value="">— Select a product category —</option>
                        <option>Fruits &amp; Vegetables</option>
                        <option>Spice Powders (Onion, Ginger, Garlic etc.)</option>
                        <option>Amla / Banana Powder</option>
                        <option>Leather Goods</option>
                        <option>Handicrafts</option>
                        <option>Copper Utensils</option>
                        <option>Bio Fertilizer &amp; Vermicompost</option>
                        <option>Hing (Asafoetida)</option>
                        <option>Other / Custom Request</option>
                      </select>
                    </div>
                    <div className={styles.group}>
                      <label>Your Message / Requirements *</label>
                      <textarea name="message" value={form.message} onChange={handle} required rows={5} placeholder="Please describe your requirements — quantity, destination, packaging preferences, etc." />
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                      Send Enquiry <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* Map */}
        <section className={styles.map}>
          <div className="img-ph" style={{ width: '100%', height: '100%', borderRadius: 0, border: 'none', background: 'linear-gradient(135deg,#c8d8e4,#a8c0d0)' }}>
            <span>Google Maps Embed</span>
            <small>Embed: Signature Global Solera, Sector 107, Gurugram</small>
          </div>
          <div className={styles.mapCard}>
            <MapPin size={20} />
            <div>
              <strong>Nityan Exports Pvt Ltd</strong>
              <span>1201, Tower A7, Signature Global Solera,<br />Sector 107, Gurugram – 122006</span>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}