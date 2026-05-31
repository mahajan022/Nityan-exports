import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

function useScrollReveal() {
  useEffect(() => {
    const run = () => {
      document.querySelectorAll('.fade-up, .fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) el.classList.add('visible');
      });
    };
    run();
    window.addEventListener('scroll', run, { passive: true });
    return () => window.removeEventListener('scroll', run);
  });
}

function PageLoader({ hidden }) {
  return (
    <div className={`page-loader${hidden ? ' hidden' : ''}`}>
      <img src="/logo.png" alt="Nityan Exports" className="loader-logo" />
      <div className="loader-bar-wrap">
        <div className="loader-bar" />
      </div>
    </div>
  );
}

export default function Layout({ children }) {
  const [loaderHidden, setLoaderHidden] = useState(false);
  useScrollReveal();

  useEffect(() => {
    const t = setTimeout(() => setLoaderHidden(true), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <PageLoader hidden={loaderHidden} />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <a
        href="https://wa.me/919311443912"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
}