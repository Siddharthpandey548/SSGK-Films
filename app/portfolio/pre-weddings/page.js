import Image from 'next/image';
import styles from './PreWeddings.module.css';

export const metadata = {
  title: 'Intimate Beginnings | Pre-Weddings | SSGK Films',
  description: 'High-fashion, candid pre-wedding moments capturing the prelude to the grand Indian celebration.',
};

export default function PreWeddingsPage() {
  const collections = [
    { title: 'The Desert Bloom', desc: 'Jaisalmer, Rajasthan', image: '/images/desert_prewedding.png' },
    { title: 'A Monsoon Romance', desc: 'Kerala Backwaters', image: '/images/hero-couple-vibrant.png' },
    { title: 'City Lights', desc: 'Mumbai High-Fashion', image: '/images/portfolio3.png' },
    { title: 'The Royal Prelude', desc: 'Bikaner Palace', image: '/images/portfolio1.png' },
    { title: 'A Heritage Walk', desc: 'Old Delhi', image: '/images/hero-couple.png' },
    { title: 'Coastal Serenade', desc: 'Andaman Islands', image: '/images/artist.png' }
  ];

  return (
    <main className={styles.page}>
      
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Intimate Beginnings</h1>
        <p className={styles.headerDesc}>
          Before the grand ceremonies begin, there is a quiet, profound connection. We document the prelude to your forever through high-fashion editorial portraiture and cinematic storytelling.
        </p>
      </header>

      <section className={styles.galleryContainer}>
        <div className={styles.asymGrid}>
          {collections.map((item, index) => (
            <div key={index} className={styles.gridItem}>
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className={styles.image}
              />
              <div className={styles.overlay}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <span className={styles.itemDesc}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
