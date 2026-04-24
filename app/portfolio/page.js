import styles from './Portfolio.module.css';

export const metadata = {
  title: 'Portfolio | SSGK Films',
  description: 'Our collection of grand Indian wedding photography.',
};

export default function PortfolioPage() {
  const portfolioItems = [
    { id: 1, title: 'The Royal Union', src: '/images/portfolio1.png' },
    { id: 2, title: 'Golden Haldi Details', src: '/images/portfolio1.png' },
    { id: 3, title: 'Bridal Elegance', src: '/images/portfolio1.png' },
    { id: 4, title: 'Palace Ceremonies', src: '/images/portfolio1.png' },
    { id: 5, title: 'Mehndi Evenings', src: '/images/portfolio1.png' },
    { id: 6, title: 'The Baraat', src: '/images/portfolio1.png' },
  ];

  return (
    <main className={styles.portfolioPage}>
      <div className={styles.header}>
        <h1 className="playfair">Our Portfolio</h1>
        <div className={styles.decorativeLine}></div>
        <p>A collection of timeless love stories framed in grandeur.</p>
      </div>

      <div className={styles.grid}>
        {portfolioItems.map((item) => (
          <div key={item.id} className={styles.gridItem}>
            <div className={styles.imageWrapper}>
              <img src={item.src} alt={item.title} className={styles.image} />
              <div className={styles.overlay}>
                <h3 className="playfair">{item.title}</h3>
              </div>
            </div>
            <div className={styles.archBorder}></div>
          </div>
        ))}
      </div>
    </main>
  );
}
