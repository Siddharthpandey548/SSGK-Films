import styles from './PhilosophySection.module.css';

export default function PhilosophySection() {
  return (
    <section className={styles.philosophySection}>
      <div className={styles.container}>
        <h2 className="signature">The Art of Storytelling</h2>
        <h3 className={`playfair ${styles.headline}`}>
          We do not just snap pictures; <br/>
          we preserve the soul of your union.
        </h3>
        
        <div className={styles.decorativeLine}></div>
        
        <div className={styles.textContent}>
          <p>
            An Indian wedding is a beautiful chaos. It is a grand canvas painted with the vivid colors of tradition, the 
            soft whispers of nervous anticipation, and the joyful tears of bidding farewell. 
          </p>
          <p>
            Our lens seeks out the honest, unguarded emotions that unfold amidst the majesty. 
            We blend classic portraiture with a documentary approach, allowing the raw magic of 
            your ceremonies to be captured as timeless heirloom art. Your legacy deserves nothing less.
          </p>
        </div>
      </div>
      
      {/* Decorative floral watermark */}
      <div className={styles.watermarkLeft}></div>
      <div className={styles.watermarkRight}></div>
    </section>
  );
}
