'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './CustomerReviews.module.css';

export default function CustomerReviews() {
  const [activeReview, setActiveReview] = useState(0);
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

  const reviews = [
    {
      name: "Aaditi & Rohan",
      text: "SSGK Films didn't just photograph our wedding; they bottled the magic of our three-day celebration. Looking at our album feels like reliving a breathtaking movie.",
      venue: "Taj Lake Palace",
      image: "/images/portfolio1.png"
    },
    {
      name: "Priyanka & Vishal",
      text: "The way they captured the quiet, nervous moments before the Baraat alongside the grand fireworks was purely cinematic. True artists of the Indian Wedding canvas.",
      venue: "Umaid Bhawan Palace",
      image: "/images/portfolio2.png"
    },
    {
      name: "Neha & Arvind",
      text: "Every frame feels like a royal painting. Their eye for detail with our intricate Sabyasachi outfits and heirloom jewelry was breathtaking.",
      venue: "Rambagh Palace",
      image: "/images/portfolio3.png"
    }
  ];

  return (
    <section className={styles.reviewsSection} ref={sectionRef}>
      <div className={`${styles.container} ${isVisible ? styles.animateIn : ''}`}>
        <div className={styles.header}>
          <h2 className="playfair">Words of Love</h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.reviewLayout}>
          {/* Interactive Names List */}
          <div className={styles.namesList}>
            {reviews.map((review, idx) => (
              <button 
                key={idx} 
                className={`${styles.nameBtn} ${activeReview === idx ? styles.activeName : ''}`}
                onClick={() => setActiveReview(idx)}
              >
                <div className={styles.btnContent}>
                  <img src={review.image} alt={review.name} className={styles.avatar} />
                  <div className={styles.btnTextInfo}>
                    <h4 className="signature">{review.name}</h4>
                    <span className={styles.venue}>{review.venue}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Review Content */}
          <div className={styles.quoteArea}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={styles.activeReviewContent}
              >
                <div className={styles.quoteWrapper}>
                  <div className={styles.quoteIcon}>&ldquo;</div>
                  <p className={styles.reviewText}>{reviews[activeReview].text}</p>
                </div>
                
                <div className={styles.largePhotoWrapper}>
                  <img 
                    src={reviews[activeReview].image} 
                    alt={`Wedding photography for ${reviews[activeReview].name}`} 
                    className={styles.largePhoto} 
                  />
                  <div className={styles.goldCorner}></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
