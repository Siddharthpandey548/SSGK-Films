'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Inquiry.module.css';

export default function Inquiry() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="inquiry-section" ref={sectionRef}>
      {/* Light Rays & Petals */}
      <div className={styles.lightRays}></div>
      <div className={styles.petalsContainer}>
        <div className={`${styles.petal} ${styles.petal1}`}></div>
        <div className={`${styles.petal} ${styles.petal2}`}></div>
      </div>

      <div className={styles.container}>
        {/* Left Column: CTA & Contact */}
        <div className={`${styles.infoCol} ${isVisible ? styles.animateIn : ''}`}>
          <h2 className={styles.heading}>
            Let&apos;s Tell <br />
            <span className={styles.headingGold}>Your Story</span>
          </h2>
          <p className={styles.bodyText}>
            We accept a limited number of commissions each year to ensure every film receives our absolute devotion and artistic focus. Tell us about your vision.
          </p>
          
          <div className={styles.contactDetails}>
            <div>
              <span className={styles.contactLabel}>EMAIL</span>
              <a href="mailto:hello@ssgkfilms.com" className={styles.contactValue}>hello@ssgkfilms.com</a>
            </div>
            <div>
              <span className={styles.contactLabel}>PHONE</span>
              <a href="tel:+1234567890" className={styles.contactValue}>+1 (234) 567-890</a>
            </div>
          </div>
        </div>

        {/* Right Column: Minimalist Form */}
        <div className={`${styles.formCol} ${isVisible ? styles.animateIn : ''}`} style={{ animationDelay: '0.2s' }}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <input type="text" id="name" placeholder="Bride / Groom Name" required />
              <label htmlFor="name">Bride / Groom Name</label>
            </div>
            
            <div className={styles.inputGroup}>
              <input type="date" id="date" placeholder="Wedding Date" required />
              <label htmlFor="date">Wedding Date</label>
            </div>
            
            <div className={styles.inputGroup}>
              <input type="email" id="email" placeholder="Email Address" required />
              <label htmlFor="email">Email Address</label>
            </div>
            
            <div className={styles.inputGroup}>
              <input type="tel" id="phone" placeholder="Phone Number" />
              <label htmlFor="phone">Phone Number</label>
            </div>
            
            <div className={styles.inputGroup}>
              <textarea id="details" rows="3" placeholder="Venue / Event Details" required></textarea>
              <label htmlFor="details">Venue / Event Details</label>
            </div>

            <button type="submit" className={styles.submitBtn}>
              SEND INQUIRY <span className={styles.plus}>+</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
