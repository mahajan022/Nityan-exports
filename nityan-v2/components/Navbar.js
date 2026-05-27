import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const links = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { pathname }              = useRouter();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="Nityan Exports" className={styles.logoImg} />
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={pathname === href ? styles.active : ''}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className={styles.cta}>Get a Quote</Link>
          </li>
        </ul>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>
    </nav>
  );
}