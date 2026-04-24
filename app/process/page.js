import Image from 'next/image';
import styles from './Process.module.css';

export const metadata = {
  title: 'The SSGK Journey | Process | SSGK Films',
  description: 'From discovery to the final cinematic reveal. Understand our process for capturing your Indian wedding legacy.',
};

export default function ProcessPage() {
  return (
    <main className={styles.page}>
      <div className={styles.bgTexture}></div>
      
      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>The SSGK Journey</h1>
        <p className={styles.headerDesc}>
          Crafting a cinematic heirloom requires more than just being present. It demands an immersive approach—from understanding the nuances of your cultural traditions to the final grand reveal.
        </p>
      </header>

      {/* Timeline Section */}
      <section className={styles.timeline}>
        
        {/* Act I: Discovery */}
        <article className={styles.actSection}>
          <div className={styles.actNode}>I</div>
          
          <div className={`${styles.glassPanel} ${styles.panelLeft}`}>
            <span className={styles.actLabel}>ACT I</span>
            <h2 className={styles.actTitle}>Discovery & Vision</h2>
            <p className={styles.actText}>
              Every grand Indian wedding is unique. We begin with a deep dive into your story, understanding the specific cultural nuances, the scale of the celebrations, and the aesthetic you desire. We outline a creative brief that aligns with the SSGK Films cinematic style.
            </p>
            <div className={styles.iconFlexRight}>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/wedding_rings.png" 
              alt="Discovery and Vision Planning" 
              fill 
              className={styles.image} 
            />
          </div>
        </article>

        {/* Act II: The Prelude */}
        <article className={styles.actSection}>
          <div className={styles.actNode}>II</div>
          
          <div className={`${styles.imageWrapper} ${styles.order2}`}>
            <Image 
              src="/images/sangeet_dance.png" 
              alt="The Prelude - Sangeet Performance" 
              fill 
              className={styles.image} 
            />
          </div>
          <div className={`${styles.glassPanel} ${styles.panelRight} ${styles.order1}`}>
            <span className={styles.actLabel}>ACT II</span>
            <h2 className={styles.actTitle}>The Prelude</h2>
            <p className={styles.actText}>
              Before the traditional ceremonies begin, we focus on you. The pre-wedding shoot is an intimate, high-fashion editorial session that establishes the chemistry and sets the visual tone for the entire cinematic narrative.
            </p>
            <div className={styles.iconFlexLeft}>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            </div>
          </div>
        </article>

        {/* Act III: The Grand Celebration */}
        <article className={styles.actSection}>
          <div className={styles.actNode}>III</div>
          
          <div className={`${styles.glassPanel} ${styles.panelLeft}`}>
            <span className={styles.actLabel}>ACT III</span>
            <h2 className={styles.actTitle}>The Grand Celebration</h2>
            <p className={styles.actText}>
              Execution with precision. From the Haldi to the Baraat, our crew operates seamlessly, utilizing cinema-grade equipment to capture the vibrancy, the scale, and the profound, fleeting emotions of the multi-day celebration.
            </p>
            <div className={styles.iconFlexRight}>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><line x1="19.4" y1="15" x2="19.4" y2="15.01"></line><line x1="19.4" y1="9" x2="19.4" y2="9.01"></line><line x1="12" y1="19.4" x2="12" y2="19.41"></line><line x1="12" y1="4.6" x2="12" y2="4.61"></line><line x1="4.6" y1="15" x2="4.6" y2="15.01"></line><line x1="4.6" y1="9" x2="4.6" y2="9.01"></line></svg>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/reception_stage.png" 
              alt="Grand Wedding Reception" 
              fill 
              className={styles.image} 
            />
          </div>
        </article>

        {/* Act IV: The Reveal */}
        <article className={styles.endNode}>
          <div className={styles.iconCircle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </div>
          <span className={styles.endLabel}>ACT IV</span>
          <h2 className={styles.endTitle}>The Legacy Reveal</h2>
          <p className={styles.endText}>
            In the cutting room, the true narrative emerges. We meticulously sequence, color-grade, and sound-design each frame, employing our signature deep, cinematic tones. The result is a masterpiece—your legacy, preserved for eternity.
          </p>
        </article>

      </section>
    </main>
  );
}
