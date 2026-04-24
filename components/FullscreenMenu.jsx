'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './FullscreenMenu.module.css';

export default function FullscreenMenu({ isOpen, onClose }) {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Films', href: '/films' },
    { name: 'Our Craft', href: '/our-craft' },
    { name: 'Journal', href: '/journal' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {/* Floating Gold Petals Background */}
          <div className={styles.petalsContainer}>
            <div className={`${styles.petal} ${styles.petal1}`}></div>
            <div className={`${styles.petal} ${styles.petal2}`}></div>
            <div className={`${styles.petal} ${styles.petal3}`}></div>
            <div className={`${styles.petal} ${styles.petal4}`}></div>
          </div>

          {/* Ambient glow */}
          <div className={styles.ambientGlow}></div>

          <div className={styles.content}>
            {/* Top bar with logo and close */}
            <div className={styles.topBar}>
              <Link href="/" className={styles.menuLogo} onClick={onClose}>
                <span className={styles.logoIcon}>✦</span>
                <span className={styles.logoText}>SSGK Films</span>
              </Link>

              <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className={styles.navSection}>
              <div className={styles.linksCol}>
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + (index * 0.07), duration: 0.4, ease: 'easeOut' }}
                  >
                    <Link 
                      href={link.href} 
                      className={`${styles.menuLink} ${pathname === link.href ? styles.activeLink : ''}`} 
                      onClick={onClose}
                    >
                      <span className={styles.linkNumber}>0{index + 1}</span>
                      <span className={styles.linkText}>{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Bottom section: CTA + Contact */}
            <motion.div 
              className={styles.bottomSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link href="/contact" className={styles.ctaButton} onClick={onClose}>
                BOOK A CONSULTATION
              </Link>

              <div className={styles.contactRow}>
                <a href="mailto:hello@ssgkfilms.com" className={styles.contactLink}>
                  hello@ssgkfilms.com
                </a>
                <span className={styles.contactDivider}>|</span>
                <a href="tel:+1234567890" className={styles.contactLink}>
                  +1 (234) 567-890
                </a>
              </div>

              <div className={styles.socialRow}>
                <a href="https://www.instagram.com/ssgkfilms/" target="_blank" rel="noreferrer" aria-label="Instagram" className={styles.socialIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className={styles.socialIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className={styles.socialIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
