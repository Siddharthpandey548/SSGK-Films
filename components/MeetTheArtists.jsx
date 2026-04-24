'use client';

import { motion } from 'framer-motion';
import styles from './MeetTheArtists.module.css';

export default function MeetTheArtists() {
  return (
    <section className={styles.artistSection}>
      <div className={styles.container}>
        
        {/* Sticky Image Column */}
        <div className={styles.imageCol}>
          <motion.div 
            className={styles.imageSticky}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={styles.imageWrapper}>
              <img src="/images/artist.png" alt="The Artists Behind SSGK Films" className={styles.image} />
            </div>
            <div className={styles.archBorder}></div>
          </motion.div>
        </div>

        {/* Scrolling Text Column */}
        <div className={styles.textCol}>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className={styles.eyebrow}>The Artists Behind the Lens</h2>
            <h3 className={`playfair ${styles.headline}`}>
              Meet Your <br />
              <span className={styles.goldText}>Storytellers</span>
            </h3>
            
            <div className={styles.decorativeLine}></div>
            
            <div className={styles.bio}>
              <p>
                Hello! We are the passionate creatives of SSGK Films, a collective of hopeless romantics with cameras. We believe that your wedding day isn't just an event; it's the culmination of generations coming together to bless a lifelong journey.
              </p>
              <p>
                Having photographed over 500 weddings across the globe—from the majestic palaces of Rajasthan to serene beachfronts in Goa—we have mastered the art of capturing the unseen glances. Our approach is deeply personal: we blend in like family so that we can capture your story at its most authentic.
              </p>
              <p>
                When we're not chasing sunset light or adjusting your heavy lehenga dupatta, you can usually find us sipping chai and geeking out over dramatic shadows.
              </p>
            </div>
            
            <a href="/about" className={styles.btnOutline}>Get to Know Us Better</a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
