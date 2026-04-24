'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './FilmsPage.module.css';

const films = [
  { id: 1, title: 'Tuscan Dream', couple: 'Sophia & Julian', src: '/images/portfolio1.png' },
  { id: 2, title: 'City Vows', couple: 'Arya & Leo', src: '/images/portfolio2.png' },
  { id: 3, title: 'Coastal Elopement', couple: 'Elena & Marco', src: '/images/portfolio3.png' },
  { id: 4, title: 'Royal Heritage', couple: 'Priya & Arjun', src: '/images/portfolio1.png' },
  { id: 5, title: 'Forest Wedding', couple: 'Maya & David', src: '/images/portfolio2.png' },
  { id: 6, title: 'Vineyard Romance', couple: 'Isabella & Ben', src: '/images/portfolio3.png' },
];

export default function FilmsPage() {
  return (
    <main className={styles.page}>
      {/* Hero Featured Film */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/portfolio1.png"
            alt="Featured Film"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>




          {/* Play Button */}
          <motion.button
            className={styles.heroPlayBtn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Play featured film"
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="29" stroke="var(--gold)" strokeWidth="2" />
              <polygon points="24,18 46,30 24,42" fill="var(--gold)" />
            </svg>
          </motion.button>
        </div>
      </section>

      {/* Film Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {films.map((film, index) => (
              <motion.div
                key={film.id}
                className={styles.filmCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.filmThumb}>
                  <Image
                    src={film.src}
                    alt={film.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 30vw"
                    className={styles.filmImage}
                  />
                  <div className={styles.filmOverlay}>
                    <motion.button
                      className={styles.playBtn}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Play ${film.title}`}
                    >
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="19" stroke="var(--gold)" strokeWidth="1.5" />
                        <polygon points="16,12 30,20 16,28" fill="var(--gold)" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
                <div className={styles.filmInfo}>
                  <span className={styles.filmCouple}>{film.couple}</span>
                  <span className={styles.filmTitle}>{film.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
