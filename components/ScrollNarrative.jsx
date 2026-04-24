'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ScrollNarrative.module.css';

export default function ScrollNarrative() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // No useSpring on mobile — it causes laggy animations
  // On desktop, we use the raw scroll progress too for reliability

  // ========== BACKGROUND SCALES (subtle zoom) ==========
  const scale1 = useTransform(scrollYProgress, [0, 0.33], [1, 1.08]);
  const scale2 = useTransform(scrollYProgress, [0.33, 0.66], [1, 1.08]);
  const scale3 = useTransform(scrollYProgress, [0.66, 1], [1, 1.08]);

  // ========== BACKGROUND OPACITIES ==========
  // Scene 1 covers 0% - 33%, fade out at end
  const bgOpacity1 = useTransform(scrollYProgress, [0.28, 0.36], [1, 0]);
  // Scene 2 covers 33% - 66%, fade out at end
  const bgOpacity2 = useTransform(scrollYProgress, [0.60, 0.68], [1, 0]);
  // Scene 3 is always visible (bottom layer)

  // ========== TEXT OPACITIES ==========
  // MUCH wider windows — each text visible for a full 1/3 of scroll
  // Text 1: visible from 0% to 28%, fades out 28-33%
  const textOpacity1 = useTransform(scrollYProgress, [0, 0.03, 0.25, 0.33], [0.2, 1, 1, 0]);
  // Text 2: fades in 33-38%, visible until 58%, fades out 58-66%  
  const textOpacity2 = useTransform(scrollYProgress, [0.33, 0.38, 0.58, 0.66], [0, 1, 1, 0]);
  // Text 3: fades in 66-72%, stays visible
  const textOpacity3 = useTransform(scrollYProgress, [0.66, 0.72], [0, 1]);

  return (
    <section className={styles.scrollNarrative} ref={containerRef}>
      <div className={styles.stickyContainer}>
        
        {/* === SCENE 1 === */}
        <div className={styles.scene} style={{ zIndex: 3 }}>
          <motion.div className={styles.bgWrapper} style={{ opacity: bgOpacity1 }}>
            <motion.div className={styles.bgImage} style={{ scale: scale1, backgroundImage: "url('/images/portfolio1.png')" }}></motion.div>
            <div className={styles.overlay}></div>
          </motion.div>
          <motion.div className={styles.textContent} style={{ opacity: textOpacity1 }}>
            <h2 className="playfair">A Beautiful Chaos</h2>
            <p>An Indian wedding is a grand canvas painted with the vivid colors of tradition, the soft whispers of nervous anticipation, and the joyful tears of bidding farewell.</p>
          </motion.div>
        </div>

        {/* === SCENE 2 === */}
        <div className={styles.scene} style={{ zIndex: 2 }}>
          <motion.div className={styles.bgWrapper} style={{ opacity: bgOpacity2 }}>
            <motion.div className={styles.bgImage} style={{ scale: scale2, backgroundImage: "url('/images/portfolio2.png')" }}></motion.div>
            <div className={styles.overlay}></div>
          </motion.div>
          <motion.div className={styles.textContent} style={{ opacity: textOpacity2 }}>
            <h2 className="playfair">Unseen Emotions</h2>
            <p>Our lens seeks out the honest, unguarded emotions that unfold amidst the majesty. We preserve the pure magic of your ceremonies.</p>
          </motion.div>
        </div>

        {/* === SCENE 3 === */}
        <div className={styles.scene} style={{ zIndex: 1 }}>
          <div className={styles.bgWrapper}>
            <motion.div className={styles.bgImage} style={{ scale: scale3, backgroundImage: "url('/images/portfolio3.png')" }}></motion.div>
            <div className={styles.overlay}></div>
          </div>
          <motion.div className={styles.textContent} style={{ opacity: textOpacity3 }}>
            <h2 className="playfair">Timeless Heirlooms</h2>
            <p>We blend classic portraiture with a documentary approach. Transforming the royal splendor of your day into fine-art heirlooms. Your legacy deserves nothing less.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
