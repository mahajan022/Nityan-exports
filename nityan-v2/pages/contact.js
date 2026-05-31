import Head from 'next/head';
import { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Clock, Send } from 'lucide-react';
import styles from '../styles/Contact.module.css';

const WhatsAppIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const info = [
  { icon: <Phone size={18} />, label: 'Phone', content: <><a href="tel:+919311443912">+91-9311443912</a><a href="tel:+919118985119">+91-9118985119</a></> },
  { icon: <WhatsAppIcon size={18} />, label: 'WhatsApp', content: <a href="https://wa.me/919311443912" target="_blank" rel="noreferrer">+91-9311443912</a> },
  { icon: <Mail size={18} />, label: 'Email', content: <><a href="mailto:pawan@nityanexports.com">pawan@nityanexports.com</a><a href="mailto:hello@nityanexports.com">hello@nityanexports.com</a></> },
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
                        <option>Indian Pulses (Chickpeas, Lentils, Peas etc.)</option>
                        <option>Spice Powders (Onion, Ginger, Garlic etc.)</option>
                        <option>Amla / Banana Powder</option>
                        <option>Leather Goods</option>
                        <option>Handicrafts</option>
                        <option>Copper Utensils</option>
                        <option>Organic Fertilizer &amp; Vermicompost</option>
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.9431222487694!2d76.97191648861975!3d28.51307004393258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1178ef8028e7%3A0xc5ea44116c327c2f!2sSignature%20Global%20Solera%20Apartment%20Sector-107%20Gurugram!5e0!3m2!1sen!2sin!4v1779785944579!5m2!1sen!2sin"
            width="100%"
            height="380"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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