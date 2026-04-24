'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './OurCraftPage.module.css';

const equipment = [
  { name: 'Canon R5', type: 'Camera Body', desc: '45MP Full-Frame Mirrorless' },
  { name: 'RED V-RAPTOR XL', type: 'Cinema Camera', desc: '8K VV Sensor, Global Shutter' },
  { name: 'ARRI Mini LF', type: 'Cinema Camera', desc: 'Large Format Cinematic Look' },
  { name: 'Sigma 35mm Art', type: 'Prime Lens', desc: 'f/1.4 DG DN Art Series' },
  { name: 'Canon 135mm L', type: 'Prime Lens', desc: 'f/2.0 USM — The Bokeh King' },
  { name: 'Zeiss Otus 55', type: 'Prime Lens', desc: 'f/1.4 — Ultimate Sharpness' },
];

export default function OurCraftPage() {
  return (
    <main className={styles.page}>
      {/* Watermark */}
      <div className={styles.watermark}>TECH & CRAFT & HEART</div>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/portfolio2.png"
            alt="The Art of Observation"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Art of Observation
          </motion.h1>
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We believe that true photography and filmmaking start with the eyes — not the camera. Every frame is a conscious decision to distill the chaotic beauty of a real celebration into a single, timeless story.
          </motion.p>
        </div>
      </section>

      {/* Split Section: Technical Precision & Narrative Soul */}
      <section className={styles.splitSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical Precision & Narrative Soul
          </motion.h2>
          <div className={styles.splitGrid}>
            <motion.div
              className={styles.splitCard}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.splitImageWrapper}>
                <Image src="/images/portfolio3.png" alt="Technical Precision" fill className={styles.splitImage} />
              </div>
              <h3 className={styles.splitCardTitle}>Technical Precision</h3>
              <p className={styles.splitCardText}>
                We harness cinema-grade equipment, from 8K RED sensors to precision glass from Zeiss and Sigma. Our rigs are calibrated for every environment — from the blazing light of a Rajasthani desert to the intimate warmth of a candlelit haveli.
              </p>
            </motion.div>

            <motion.div
              className={styles.splitCard}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className={styles.splitImageWrapper}>
                <Image src="/images/portfolio1.png" alt="Narrative Soul" fill className={styles.splitImage} />
              </div>
              <h3 className={styles.splitCardTitle}>Narrative Soul</h3>
              <p className={styles.splitCardText}>
                Technology is only half the story. Our editors and directors bring a deep understanding of cinematic narrative — from pacing and score to color grading that evokes the emotion of the day itself.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className={styles.equipSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Technical Stack
          </motion.h2>
          <div className={styles.equipGrid}>
            {equipment.map((item, index) => (
              <motion.div
                key={item.name}
                className={styles.equipCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className={styles.equipIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                  </svg>
                </div>
                <h4 className={styles.equipName}>{item.name}</h4>
                <span className={styles.equipType}>{item.type}</span>
                <p className={styles.equipDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
