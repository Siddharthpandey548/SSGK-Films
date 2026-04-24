'use client';

import styles from './FeaturedGallery.module.css';
import { useState, useRef, useEffect } from 'react';

export default function FeaturedGallery() {
  const stories = [
    { 
      id: 1, 
      title: 'The Royal Baraat', 
      location: 'Udaipur Palace', 
      src: '/images/portfolio1.png', 
      quote: "Every frame they captured felt like a scene from a grand royal movie. Absolutely breathtaking."
    },
    { 
      id: 2, 
      title: 'Haldi Showers', 
      location: 'Goa Breezes', 
      src: '/images/portfolio2.png',
      quote: "They perfectly captured the joy, the chaos, and the vibrant colors of our haldi ceremony."
    },
    { 
      id: 3, 
      title: 'Sacred Vows', 
      location: 'Jaipur Heritage', 
      src: '/images/portfolio3.png',
      quote: "Looking at these photos brings tears to my eyes. They framed our love timelessly."
    }
  ];

  const [activeStory, setActiveStory] = useState(stories[0]);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.featuredGallery} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.animateIn : ''}`}>
          <h2 className="playfair">Featured Love Stories</h2>
          <p className="signature">Glimpses of Grandeur</p>
        </div>

        <div className={styles.contentLayout}>
          {/* Left Column: Story List */}
          <div className={`${styles.storyList} ${isVisible ? styles.animateIn : ''}`} style={{ animationDelay: '0.15s' }}>
            {stories.map((story) => (
              <div 
                key={story.id} 
                className={`${styles.storyItem} ${activeStory.id === story.id ? styles.active : ''}`}
                onClick={() => setActiveStory(story)}
              >
                <div className={styles.thumbnailWrapper}>
                  <img src={story.src} alt={story.title} className={styles.thumbnail} />
                </div>
                <div className={styles.storyInfo}>
                  <h3 className="playfair">{story.title}</h3>
                  <p>{story.location}</p>
                </div>
              </div>
            ))}
            
            <div className={styles.actionContainer}>
               <a href="/portfolio" className={styles.btnSecondary}>View Full Portfolio</a>
            </div>
          </div>

          {/* Right Column: Testimonial Card */}
          <div className={`${styles.cardColumn} ${isVisible ? styles.animateIn : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className={styles.testimonialCard} key={activeStory.id}>
              <div className={styles.cardImageWrapper}>
                <img src={activeStory.src} alt={activeStory.title} className={styles.cardImage} />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.quoteIcon}>&ldquo;</div>
                <p className={styles.quoteText}>{activeStory.quote}</p>
                
                <button className={styles.btnShowreel}>
                  <span className={styles.playIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
                      <polygon points="10,8 17,12 10,16" fill="currentColor" />
                    </svg>
                  </span>
                  Watch Showreel
                </button>
              </div>
              <div className={styles.goldFrame}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
