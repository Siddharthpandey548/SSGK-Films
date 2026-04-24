'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax transform values (scroll-linked only — these are safe)
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className={styles.hero} id="hero-section" ref={ref}>
      {/* Background gradient overlay */}
      <div className={styles.bgGradient}></div>

      <div className={styles.container}>
        {/* === LEFT — Text Content === */}
        <motion.div 
          className={styles.textSide}
          style={{ y: yText }}
        >
          <h1 className={`${styles.headline} ${styles.fadeInUp1}`} id="hero-headline">
            <span className={styles.headlineBold}>FRAMING</span>{' '}
            <span className={styles.headlineItalic}>Timeless</span>
            <br />
            <span className={styles.headlineBold}>INDIAN STORIES</span>
          </h1>

          <div className={`${styles.divider} ${styles.fadeInUp2}`}>
            <span className={styles.line}></span>
            <span className={styles.diamond}>✦</span>
            <span className={styles.line}></span>
          </div>

          <p className={`${styles.subtitle} ${styles.fadeInUp3}`} id="hero-subtitle">
            Capturing the vibrant essence of your perfect union in timeless frames.
          </p>

          <div className={`${styles.ctas} ${styles.fadeInUp4}`} id="hero-ctas">
            <a href="/portfolio" className={styles.btnPrimary} id="cta-portfolio">
              EXPLORE PORTFOLIO
            </a>
            <button className={styles.btnShowreel} id="cta-showreel">
              <span className={styles.playIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
                  <polygon points="10,8 17,12 10,16" fill="currentColor" />
                </svg>
              </span>
              Showreel
            </button>
          </div>
        </motion.div>

        {/* === RIGHT — Arch-Framed Image === */}
        <motion.div 
          className={`${styles.imageSide} ${styles.fadeInScale}`}
          style={{ y: yImage }}
        >
          {/* Ornate arch frame */}
          <div className={styles.archWrapper}>
            <svg className={styles.archFrame} viewBox="0 0 400 520" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="archGold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#b8922e" />
                  <stop offset="30%" stopColor="#e8c76a" />
                  <stop offset="50%" stopColor="#f0dca0" />
                  <stop offset="70%" stopColor="#e8c76a" />
                  <stop offset="100%" stopColor="#b8922e" />
                </linearGradient>
                <linearGradient id="archGoldInner" x1="0" y1="0" x2="0.5" y2="1">
                  <stop offset="0%" stopColor="#d4a843" />
                  <stop offset="50%" stopColor="#f0dca0" />
                  <stop offset="100%" stopColor="#d4a843" />
                </linearGradient>
                <clipPath id="archClip">
                  <path d="M 0,520 L 0,220 C 0,160 50,160 100,120 C 150,80 180,60 200,10 C 220,60 250,80 300,120 C 350,160 400,160 400,220 L 400,520 Z" />
                </clipPath>
                <filter id="archGlow">
                  <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#d4a843" floodOpacity="0.3" />
                </filter>
              </defs>

              {/* Outer arch border */}
              <path 
                d="M 0,520 L 0,220 C 0,160 50,160 100,120 C 150,80 180,60 200,10 C 220,60 250,80 300,120 C 350,160 400,160 400,220 L 400,520 Z"
                stroke="url(#archGold)" strokeWidth="3" fill="none" filter="url(#archGlow)" 
                className={styles.archPath}
              />

              {/* Inner dotted decorative arch */}
              <path d="M 12,520 L 12,225 C 12,168 56,168 102,130 C 150,92 180,74 200,28 C 220,74 250,92 298,130 C 344,168 388,168 388,225 L 388,520 Z"
                stroke="url(#archGoldInner)" strokeWidth="1.5" strokeDasharray="5,5" fill="none" opacity="0.8" />

              <path d="M 18,520 L 18,228 C 18,174 61,174 105,138 C 150,103 178,85 200,42 C 222,85 250,103 295,138 C 339,174 382,174 382,228 L 382,520 Z" fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.5" />

              {/* Ornamental dots along arch */}
              {[250, 300, 350, 400, 450, 500].map((y) => (
                <g key={y}>
                  <circle cx="5" cy={y} r="1.8" fill="#d4a843" opacity="0.6" />
                  <circle cx="395" cy={y} r="1.8" fill="#d4a843" opacity="0.6" />
                </g>
              ))}
            </svg>

            {/* Clipped hero image */}
            <div className={styles.imageClip}>
              <Image
                src="/images/portfolio1.png"
                alt="Beautiful Indian couple in vibrant traditional wedding attire"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 45vw"
                className={styles.heroImage}
                id="hero-image"
              />
            </div>

            {/* Gold dust overlay on image */}
            <div className={styles.imageDust}></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className={`${styles.scrollIndicator} ${styles.fadeInUp4}`}>
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.scrollIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
