import Image from 'next/image';
import styles from './Philosophy.module.css';

export const metadata = {
  title: 'Our Philosophy | SSGK Films',
  description: 'The Indian Heritage in Frames. Discover the philosophy behind SSGK Films — why every frame is a legacy.',
};

export default function PhilosophyPage() {
  const values = [
    {
      icon: '✦',
      title: 'Heritage First',
      description: 'Every tradition, every ritual, every blessing carries centuries of meaning. We honour the cultural depth of your celebrations with the reverence they deserve.',
    },
    {
      icon: '◈',
      title: 'Cinematic Vision',
      description: 'We draw from the language of cinema — dramatic lighting, purposeful composition, and rich colour grading — to elevate your story beyond documentation.',
    },
    {
      icon: '❖',
      title: 'Invisible Presence',
      description: 'The best moments are unscripted. We become part of your celebration, not spectators — capturing truth without orchestrating it.',
    },
    {
      icon: '✧',
      title: 'Timeless Craft',
      description: 'Fashion fades, trends dissolve. We create work that transcends the moment — visual heirlooms your grandchildren will feel in their bones.',
    },
  ];

  return (
    <main className={styles.page}>
      <div className={styles.bgTexture}></div>
      
      {/* === HERO HEADER === */}
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

          <p className={styles.headerIntro}>
            We don&apos;t chase trends. We chase truth — the kind that lives in the tremor of a father&apos;s voice, the weight of a dupatta being placed, the silence before the sacred fire.
          </p>
        </header>

        {/* === SECTION 1: A Legacy of Colors === */}
        <section className={styles.contentGrid}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/indian_bride.png" 
              alt="Traditional Indian Bride in ceremonial attire" 
              fill 
              className={styles.image}
              priority
            />
          </div>
          
          <div className={styles.textContent}>
            <h2 className={styles.heading}>A Legacy of Colors & Emotion</h2>
            <p className={styles.paragraph}>
              At SSGK Films, we believe an Indian wedding is not merely an event — it is a profound cultural milestone. It is the culmination of heritage, tradition, and the vibrant interweaving of two families. 
            </p>
            <p className={styles.paragraph}>
              Our philosophy stems from the understanding that <span className={styles.highlight}>every frame is a legacy</span>. We do not just document what happens; we capture the gravitas, the fleeting glances, and the grand scale of your celebrations. 
            </p>
            <p className={styles.paragraph}>
              Drawing inspiration from classic cinema and editorial high fashion, we utilise rich, moody palettes — deep maroons, striking golds, and emerald greens — to elevate your story into a visual heirloom that will resonate for generations.
            </p>
          </div>
        </section>

        {/* === PULL QUOTE === */}
        <section className={styles.pullQuoteSection}>
          <blockquote className={styles.pullQuote}>
            <span className={styles.quoteOpen}>&ldquo;</span>
            A photograph should make you feel something you forgot you remembered.
            <span className={styles.quoteClose}>&rdquo;</span>
          </blockquote>
        </section>

        {/* === SECTION 2: The Unseen Beauty === */}
        <section className={`${styles.contentGrid} ${styles.contentGridReverse}`}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>The Unseen Beauty</h2>
            <p className={styles.paragraph}>
              While the grandeur of palatial venues and intricate decor sets the stage, our focus remains firmly on the unseen beauty: the quiet tears of a mother, the nervous anticipation before the Varmala, and the unspoken promises exchanged in a look.
            </p>
            <p className={styles.paragraph}>
              We are observers and storytellers. Our approach blends technical mastery with an intuitive understanding of human connection, ensuring that your film and photographs feel as <span className={styles.highlight}>authentic and timeless</span> as the vows you take.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <Image 
              src="/images/mandap_lake.png" 
              alt="Grand lakeside mandap wedding ceremony" 
              fill 
              className={styles.image}
            />
          </div>
        </section>

        {/* === CORE VALUES === */}
        <section className={styles.valuesSection}>
          <div className={styles.valuesSectionHeader}>
            <span className={styles.subtitle}>What Guides Us</span>
            <h2 className={styles.valuesTitle}>Our Core Beliefs</h2>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <span className={styles.valueIcon}>{value.icon}</span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* === SECTION 3: The Sacred Fire === */}
        <section className={styles.contentGrid}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/ceremony_moment.png" 
              alt="Intimate wedding ceremony moment" 
              fill 
              className={styles.image}
            />
          </div>
          
          <div className={styles.textContent}>
            <h2 className={styles.heading}>The Sacred Fire</h2>
            <p className={styles.paragraph}>
              The seven circles around the fire are not merely steps — they are promises made to the universe. We understand the weight of these moments because we carry the same reverence in our craft.
            </p>
            <p className={styles.paragraph}>
              Every lens choice, every angle, every edit is a deliberate act of devotion to your story. We don&apos;t manufacture emotion — we <span className={styles.highlight}>reveal what&apos;s already there</span>.
            </p>
          </div>
        </section>

        {/* === CLOSING CTA === */}
        <section className={styles.closingCta}>
          <div className={styles.divider}>
            <span className={styles.line}></span>
            <span className={styles.diamond}>✦</span>
            <span className={styles.line}></span>
          </div>
          <h2 className={styles.closingTitle}>Your story deserves to be told with soul.</h2>
          <p className={styles.closingText}>
            If our philosophy resonates with you, we&apos;d love to hear about your celebration.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Begin the Conversation
          </a>
        </section>
      </div>
    </main>
  );
}
