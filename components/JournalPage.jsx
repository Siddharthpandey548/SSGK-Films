'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './JournalPage.module.css';

const categories = ['Stories', 'Tips', 'Gear', 'Destinations', 'Real Weddings'];

const featuredArticle = {
  title: 'The Monsoon Wedding in Udaipur',
  subtitle: 'Stories of Love, Light, and Celebration',
  excerpt: 'The lush, rain-washed beauty of Udaipur set the scene for the most romantic celebration we\'ve ever captured. From the cascading floral mandap to the lakeside reception, every detail spoke of a love that refused to let the storm clouds dampen its spirit. This is how rain becomes magic in wedding photography, and nature and sun and the divine conjure a masterwork of emotion and light.',
  src: '/images/portfolio1.png',
};

const articles = [
  {
    id: 1,
    title: 'Elopement on the Edge: Capturing the Intimate Details',
    src: '/images/portfolio2.png',
    category: 'Stories',
  },
  {
    id: 2,
    title: 'Reception Dinner Under the Stars',
    src: '/images/portfolio3.png',
    category: 'Real Weddings',
  },
  {
    id: 3,
    title: 'Documenting the Pre-Wedding Rituals',
    src: '/images/portfolio1.png',
    category: 'Destinations',
  },
];

export default function JournalPage() {
  return (
    <main className={styles.page}>
      {/* Header */}
      <section className={styles.header}>
        <motion.h1
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          SSGK FILMS EDITORIAL JOURNAL
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Stories of Love, Light, and Celebration
        </motion.p>
      </section>

      <div className={styles.container}>
        <div className={styles.mainLayout}>
          {/* Content Area */}
          <div className={styles.content}>
            {/* Featured Article */}
            <motion.article
              className={styles.featured}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.featuredImageGrid}>
                <div className={styles.featuredMainImage}>
                  <Image src={featuredArticle.src} alt={featuredArticle.title} fill className={styles.featImg} />
                </div>
                <div className={styles.featuredSideImages}>
                  <div className={styles.featSideImg}>
                    <Image src="/images/portfolio2.png" alt="Detail shot" fill className={styles.featImg} />
                  </div>
                  <div className={styles.featSideImg}>
                    <Image src="/images/portfolio3.png" alt="Detail shot" fill className={styles.featImg} />
                  </div>
                </div>
              </div>

              <div className={styles.featuredText}>
                <h2 className={styles.featuredTitle}>{featuredArticle.title}</h2>
                <Link href="#" className={styles.readMore}>Read More →</Link>
                <p className={styles.featuredExcerpt}>
                  <span className={styles.dropCap}>T</span>
                  {featuredArticle.excerpt}
                </p>
              </div>
            </motion.article>

            {/* Article Grid */}
            <div className={styles.articleGrid}>
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  className={styles.articleCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={styles.articleImageWrapper}>
                    <Image src={article.src} alt={article.title} fill className={styles.articleImage} />
                    <div className={styles.articleOverlay}>
                      <span className={styles.articleCategory}>{article.category}</span>
                      <h3 className={styles.articleTitle}>{article.title}</h3>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <motion.aside
            className={styles.sidebar}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={styles.sidebarTitle}>JOURNAL CATEGORIES</h3>
            <ul className={styles.categoryList}>
              {categories.map((cat) => (
                <li key={cat}>
                  <Link href="#" className={styles.categoryLink}>{cat}</Link>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <span className={styles.copyright}>© 2026 SSGK Films. All Rights Reserved.</span>
        <div className={styles.bottomSocials}>
          <a href="#" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48"/></svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
        </div>
      </div>
    </main>
  );
}
