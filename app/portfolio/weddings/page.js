import Image from 'next/image';
import styles from './Weddings.module.css';

export const metadata = {
  title: 'Grand Celebrations | SSGK Films',
  description: 'A curated collection of our most iconic Indian wedding cinematography.',
};

export default function WeddingsPage() {
  const weddings = [
    { title: 'The Royal Affair', location: 'Udaipur Palace', image: '/images/palace_wedding.png', aspect: '4/5' },
    { title: 'A Heritage Union', location: 'Jaipur Fort', image: '/images/heritage_couple.png', aspect: '3/4' },
    { title: 'The Ethereal Vows', location: 'Lake Pichola', image: '/images/mandap_lake.png', aspect: '1/1' },
    { title: 'Midnight Phere', location: 'Delhi', image: '/images/phere_ceremony.png', aspect: '4/5' },
    { title: 'The Grand Baraat', location: 'Goa Coast', image: '/images/groom_baraat.png', aspect: '16/9' },
    { title: 'A Symphony in Red', location: 'Jodhpur', image: '/images/haldi_ceremony.png', aspect: '3/4' },
  ];

  return (
    <main className={styles.page}>
      
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Grand Celebrations</h1>
        <p className={styles.headerDesc}>
          Every frame captures the grandeur, color, and profound emotional depth of the monumental Indian wedding.
        </p>
      </header>

      <section className={styles.galleryContainer}>
        <div className={styles.masonryGrid}>
          {weddings.map((item, index) => (
            <div key={index} className={styles.masonryItem}>
              <div className={styles.imageWrapper} style={{ aspectRatio: item.aspect }}>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className={styles.image}
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className={styles.overlay}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <span className={styles.itemLocation}>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
