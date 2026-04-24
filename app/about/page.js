import styles from './About.module.css';

export const metadata = {
  title: 'About Us | SSGK Films',
  description: 'Our journey framing timeless Indian stories.',
};

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className="playfair">Our Story</h1>
          <div className={styles.decorativeLine}></div>
          
          <p className={styles.lead}>
            At SSGK Films, we believe every love story is a masterpiece waiting to be framed. 
            Rooted in the rich cultural heritage of Indian weddings, our lens captures not just moments, 
            but the grand symphony of emotions, colors, and traditions.
          </p>

          <p>
            Founded by visionaries who are passionate about the cinematic art of storytelling, we blend modern 
            elegance with timeless maxamalist Indian aesthetics. From the subtle nervous glances during the Haldi 
            to the majestic splendor of the Baraat, we preserve the purity of your union.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.statLine}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Weddings</span>
            </div>
            <div className={styles.statLine}>
              <span className={styles.statNumber}>10</span>
              <span className={styles.statLabel}>Years</span>
            </div>
            <div className={styles.statLine}>
              <span className={styles.statNumber}>Infinite</span>
              <span className={styles.statLabel}>Memories</span>
            </div>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <div className={styles.ornateFrame}>
            <img src="/images/portfolio1.png" alt="Our Team" className={styles.image} />
            <div className={styles.cornerBorder}></div>
          </div>
          <div className={styles.signatureBadge}>
            <p className="signature">Crafted with Love</p>
          </div>
        </div>
      </div>
    </main>
  );
}
