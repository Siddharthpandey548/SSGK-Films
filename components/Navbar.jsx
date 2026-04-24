'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import styles from './Navbar.module.css';
import FullscreenMenu from './FullscreenMenu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    setHidden((prevHidden) => {
      const shouldHide = latest > previous && latest > 150;
      return prevHidden === shouldHide ? prevHidden : shouldHide;
    });

    setScrolled((prevScrolled) => {
      const shouldBeScrolled = latest > 40;
      return prevScrolled === shouldBeScrolled ? prevScrolled : shouldBeScrolled;
    });
  });

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} 
        id="main-nav"
      >
        {/* Left: Logo */}
        <Link href="/" className={styles.logo} id="nav-logo">
          <span className={styles.logoIcon}>✦</span>
          <span className={styles.logoText}>SSGK Films</span>
        </Link>

        {/* Center: Desktop Nav Links */}
        <ul className={styles.navLinks} id="nav-links">
          <li><Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>Home</Link></li>
          <li><Link href="/portfolio" className={`${styles.navLink} ${pathname === '/portfolio' ? styles.active : ''}`}>Portfolio</Link></li>
          <li><Link href="/films" className={`${styles.navLink} ${pathname === '/films' ? styles.active : ''}`}>Films</Link></li>
          <li><Link href="/our-craft" className={`${styles.navLink} ${pathname === '/our-craft' ? styles.active : ''}`}>Our Craft</Link></li>
          <li><Link href="/journal" className={`${styles.navLink} ${pathname === '/journal' ? styles.active : ''}`}>Journal</Link></li>
          <li><Link href="/contact" className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}>Contact</Link></li>
        </ul>

        {/* Right: CTA Button + Mobile Hamburger */}
        <div className={styles.rightNav}>
          <Link href="/contact" className={styles.ctaButton}>
            BOOK A CONSULTATION
          </Link>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            id="nav-hamburger"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Overlay Menu */}
      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
