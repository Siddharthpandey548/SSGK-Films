import Image from 'next/image';
import styles from './Awards.module.css';

export const metadata = {
  title: 'Distinctions of Artistry | SSGK Films',
  description: 'Recognized globally for preserving Indian legacies through unparalleled cinematic excellence.',
};

export default function AwardsPage() {
  const getIcon = (name) => {
    switch (name) {
      case 'military_tech':
        return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>;
      case 'workspace_premium':
        return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>;
      case 'diamond':
        return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
      case 'movie':
        return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>;
      case 'photo_camera':
        return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>;
      case 'star':
        return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
      default:
        return null;
    }
  };

  const awards = [
    { title: 'WedSutra', desc: 'Cinematographer of the Year', year: '2023', icon: 'military_tech' },
    { title: 'Vogue Weddings', desc: 'Feature: The Royal Udaipur Affair', year: '2022', icon: 'workspace_premium' },
    { title: "Harper's Bazaar Bride", desc: 'Top 10 Indian Studios', year: '2023', icon: 'diamond' },
    { title: 'Great Indian Wedding Awards (GIWA)', desc: 'Best Wedding Film', year: '2021', icon: 'movie' },
    { title: 'Fearless Photographers', desc: 'Cultural Portrait Winner', year: '2020', icon: 'photo_camera' },
    { title: 'WedMeGood', desc: 'Users Choice: Best Luxury Photography', year: '2022', icon: 'star' }
  ];

  return (
    <main className={styles.page}>
      <div className={styles.bgTexture}></div>
      
      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Distinctions of Artistry</h1>
        <p className={styles.headerDesc}>
          Recognized globally for preserving Indian legacies through unparalleled cinematic excellence.
        </p>
      </header>

      {/* Awards Grid */}
      <section className={styles.gridSection}>
        <div className={styles.awardsGrid}>
          {awards.map((award, index) => (
            <div key={index} className={styles.glassPanel}>
              <span className={styles.awardIcon}>{getIcon(award.icon)}</span>
              <h3 className={styles.awardTitle}>{award.title}</h3>
              <p className={styles.awardDesc}>{award.desc}</p>
              <div className={styles.awardYear}>{award.year}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Lens Section */}
      <section className={styles.featuredSection}>
        <div className={styles.featuredGrid}>
          <div className={styles.featuredImageWrapper}>
            <Image 
              src="/images/camera_rig.png" 
              alt="Cinematic Camera Setup" 
              fill
              className={styles.featuredImg} 
            />
            <div className={styles.featuredGradient}></div>
          </div>
          <div className={styles.featuredContent}>
            <h2 className={styles.featuredTitle}>Featured in Vogue Weddings</h2>
            <p className={styles.featuredDesc}>
              "SSGK Films redefines the grand Indian wedding. They don't just take pictures; they create monumental heirlooms that capture the sheer scale and profound emotion of cultural celebrations. A masterclass in shadow, light, and enduring legacy."
            </p>
            <button className={styles.featuredBtn}>
              Read Article
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
