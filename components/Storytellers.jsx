'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Storytellers.module.css';

export default function Storytellers() {
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
    <section className={styles.section} id="storytellers-section" ref={sectionRef}>
      {/* Background with Emerald Green and Sparkles */}
      <div className={styles.bgGlow}></div>
      <div className={styles.watermark}>SSGK</div>
      
      {/* Sparkles */}
      <div className={styles.sparkles}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`${styles.sparkle} ${styles[`sparkle${i+1}`]}`}>✦</div>
        ))}
      </div>

      <div className={styles.container}>
        {/* Left Column: Portrait */}
        <div className={`${styles.imageCol} ${isVisible ? styles.animateIn : ''}`}>
          <div className={styles.archWrapper}>
            <svg className={styles.archFrame} viewBox="0 0 350 450" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,450 L 0,175 C 0,80 80,0 175,0 C 270,0 350,80 350,175 L 350,450 Z" stroke="var(--gold)" strokeWidth="2" fill="none" />
              <path d="M 10,450 L 10,175 C 10,85 85,10 175,10 C 265,10 340,85 340,175 L 340,450 Z" stroke="var(--gold)" strokeWidth="1" strokeDasharray="4,4" fill="none" opacity="0.6"/>
            </svg>
            <div className={styles.imageClip}>
              <Image 
                src="/images/portfolio3.png" 
                alt="SSGK Photographer"
                fill
                className={styles.portraitImage}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Text & CTA */}
        <div className={`${styles.textCol} ${isVisible ? styles.animateIn : ''}`} style={{ animationDelay: '0.2s' }}>
          <h2 className={styles.heading}>
            <span className={styles.headingSerif}>The Souls Behind the</span>
            <br />
            <span className={styles.headingScript}>Lens</span>
          </h2>
          
          <p className={styles.bodyText}>
            We believe that every love story is a masterpiece waiting to be captured. 
            Our approach blends cinematic grandeur with intimate, candid moments, ensuring 
            your memories are preserved as a timeless legacy of your most cherished day.
          </p>

          <button className={styles.ctaButton}>
            VIEW PORTFOLIO 
            <span className={styles.arrow}>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
