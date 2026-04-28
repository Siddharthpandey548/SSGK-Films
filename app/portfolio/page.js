import Image from 'next/image';
import Link from 'next/link';
import styles from './Portfolio.module.css';

export const metadata = {
  title: 'Portfolio | SSGK Films',
  description: 'Explore our curated collections of grand Indian weddings and intimate pre-wedding narratives — every frame a timeless heirloom.',
};

export default function PortfolioPage() {
  const featured = [
    { src: '/images/palace_wedding.png', alt: 'Royal palace wedding in Udaipur' },
    { src: '/images/heritage_couple.png', alt: 'Heritage couple at Jaipur fort' },
    { src: '/images/mandap_lake.png', alt: 'Lakeside mandap ceremony' },
    { src: '/images/phere_ceremony.png', alt: 'Sacred phere ceremony' },
    { src: '/images/desert_prewedding.png', alt: 'Desert pre-wedding shoot' },
    { src: '/images/hero-couple-vibrant.png', alt: 'Monsoon romance pre-wedding' },
  ];

  return (
    <main className={styles.page}>
      <div className={styles.bgTexture}></div>

      {/* === HERO === */}
      <header className={styles.hero}>
        <span className={styles.eyebrow}>Our Work</span>
        <h1 className={styles.heroTitle}>
          A Curated Collection of
          <br />
          <span className={styles.heroItalic}>Timeless Stories</span>
        </h1>
        <div className={styles.divider}>
          <span className={styles.line}></span>
          <span className={styles.diamond}>✦</span>
          <span className={styles.line}></span>
        </div>
        <p className={styles.heroDesc}>
          Each celebration is unique — a tapestry of culture, emotion, and beauty.
          Browse our collections to see how we transform fleeting moments into eternal art.
        </p>
      </header>

      {/* === FEATURED MOSAIC === */}
      <section className={styles.mosaicSection}>
        <div className={styles.mosaic}>
          {featured.map((img, i) => (
            <div key={i} className={`${styles.mosaicItem} ${styles[`mosaicItem${i + 1}`]}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={styles.mosaicImage}
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* === COLLECTION CARDS === */}
      <section className={styles.collectionsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Explore</span>
          <h2 className={styles.sectionTitle}>Our Collections</h2>
        </div>

        <div className={styles.collectionsGrid}>
          {/* Weddings Card */}
          <Link href="/portfolio/weddings" className={styles.collectionCard}>
            <div className={styles.cardImageWrapper}>
              <Image
                src="/images/palace_wedding.png"
                alt="Grand Indian Wedding"
                fill
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay}></div>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>Collection</span>
              <h3 className={styles.cardTitle}>Grand Weddings</h3>
              <p className={styles.cardDesc}>
                Palatial venues, sacred ceremonies, and the magnificent grandeur of the Indian wedding — 
                documented with cinematic reverence.
              </p>
              <span className={styles.cardCta}>
                View Collection
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Pre-Weddings Card */}
          <Link href="/portfolio/pre-weddings" className={styles.collectionCard}>
            <div className={styles.cardImageWrapper}>
              <Image
                src="/images/desert_prewedding.png"
                alt="Pre-Wedding Shoot"
                fill
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay}></div>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>Collection</span>
              <h3 className={styles.cardTitle}>Pre-Weddings</h3>
              <p className={styles.cardDesc}>
                Intimate editorial portraits and cinematic love stories — the quiet, profound 
                prelude before the grand celebration begins.
              </p>
              <span className={styles.cardCta}>
                View Collection
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* === CLOSING CTA === */}
      <section className={styles.closingCta}>
        <div className={styles.divider}>
          <span className={styles.line}></span>
          <span className={styles.diamond}>✦</span>
          <span className={styles.line}></span>
        </div>
        <h2 className={styles.closingTitle}>Ready to create your legacy?</h2>
        <p className={styles.closingDesc}>
          Every love story is singular. Let&apos;s craft yours into something extraordinary.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Book a Consultation
        </Link>
      </section>
    </main>
  );
}
