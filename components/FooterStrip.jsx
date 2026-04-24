'use client';

import Link from 'next/link';
import styles from './FooterStrip.module.css';

export default function FooterStrip() {
  return (
    <footer className={styles.footer} id="main-footer">
      {/* Background watermark */}
      <div className={styles.watermark}>SSGK</div>

      <div className={styles.container}>
        {/* === 4-Column Link Grid === */}
        <div className={styles.linksGrid}>
          {/* Company */}
          <div className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>Company</h3>
            <ul className={styles.linksList}>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/philosophy">Philosophy</Link></li>
              <li><Link href="/awards">Awards</Link></li>
            </ul>
          </div>

          {/* Portfolio */}
          <div className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>Portfolio</h3>
            <ul className={styles.linksList}>
              <li><Link href="/portfolio/weddings">Weddings</Link></li>
              <li><Link href="/portfolio/pre-weddings">Pre-weddings</Link></li>
              <li><Link href="/portfolio/films">Films</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>Resources</h3>
            <ul className={styles.linksList}>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/journal">Journal</Link></li>
              <li><Link href="/process">Process</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>Connect</h3>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com/ssgkfilms/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.4.04-3.44l1.4-5.96s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.06-4.88-5.01-4.88a5.48 5.48 0 0 0-5.72 5.5c0 1.08.42 2.25.94 2.88a.38.38 0 0 1 .08.36l-.35 1.43c-.05.23-.18.28-.42.17-1.56-.73-2.54-3.01-2.54-4.84 0-3.94 2.86-7.56 8.26-7.56 4.33 0 7.7 3.09 7.7 7.22 0 4.3-2.72 7.78-6.49 7.78-1.27 0-2.46-.66-2.87-1.44l-.78 2.98c-.28 1.09-1.05 2.45-1.56 3.28A12 12 0 1 0 12 0z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* === Newsletter / Inner Circle === */}
        <div className={styles.newsletter}>
          <h3 className={styles.newsletterTitle}>Join the inner circle</h3>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email your email" 
              className={styles.newsletterInput}
              required
            />
            <button type="submit" className={styles.subscribeBtn}>SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
