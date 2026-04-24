import Image from 'next/image';
import styles from './Philosophy.module.css';

export const metadata = {
  title: 'Our Philosophy | SSGK Films',
  description: 'The Indian Heritage in Frames. Discover the philosophy behind SSGK Films.',
};

export default function PhilosophyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.bgTexture}></div>
      
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.subtitle}>Our Manifesto</span>
          <h1 className={styles.title}>
            The Indian Heritage <br />
            <span className={styles.titleItalic}>in Frames</span>
          </h1>
          
          <div className={styles.divider}>
            <span className={styles.line}></span>
            <span className={styles.diamond}>✦</span>
            <span className={styles.line}></span>
          </div>
        </header>

        <section className={styles.contentGrid}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/indian_bride.png" 
              alt="Traditional Indian Bride" 
              fill 
              className={styles.image}
              priority
            />
          </div>
          
          <div className={styles.textContent}>
            <h2 className={styles.heading}>A Legacy of Colors & Emotion</h2>
            <p className={styles.paragraph}>
              At SSGK Films, we believe an Indian wedding is not merely an event; it is a profound cultural milestone. It is the culmination of heritage, tradition, and the vibrant interweaving of two families. 
            </p>
            <p className={styles.paragraph}>
              Our philosophy stems from the understanding that <span className={styles.highlight}>every frame is a legacy</span>. We do not just document what happens; we capture the gravitas, the fleeting glances, and the grand scale of your celebrations. 
            </p>
            <p className={styles.paragraph}>
              Drawing inspiration from classic cinema and editorial high fashion, we utilize rich, moody palettes—deep maroons, striking golds, and emerald greens—to elevate your story into a visual heirloom that will resonate for generations.
            </p>
          </div>
        </section>

        <section className={styles.contentGrid} style={{ marginTop: '120px' }}>
          <div className={styles.textContent} style={{ order: 2 }}>
            <h2 className={styles.heading}>The Unseen Beauty</h2>
            <p className={styles.paragraph}>
              While the grandeur of palatial venues and intricate decor sets the stage, our focus remains firmly on the unseen beauty: the quiet tears of a mother, the nervous anticipation before the Varmala, and the unspoken promises exchanged in a look.
            </p>
            <p className={styles.paragraph}>
              We are observers and storytellers. Our approach blends technical mastery with an intuitive understanding of human connection, ensuring that your film and photographs feel as <span className={styles.highlight}>authentic and timeless</span> as the vows you take.
            </p>
          </div>

          <div className={styles.imageWrapper} style={{ order: 1 }}>
            <Image 
              src="/images/mandap_lake.png" 
              alt="Grand Indian Wedding Decor" 
              fill 
              className={styles.image}
            />
          </div>
        </section>

      </div>
    </main>
  );
}
