'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContactPage.module.css';
import DatePicker from './DatePicker';
import PlaceSelect from './PlaceSelect';

const steps = [
  { question: 'When is the celebration?', placeholder: 'Choose your auspicious date', type: 'date' },
  { question: 'Where does the story unfold?', placeholder: 'Type a city or place', type: 'place' },
  { question: 'The names behind the love story?', placeholder: 'e.g. Priya & Arjun', type: 'text' },
  { question: 'How shall we reach you?', placeholder: 'your@email.com', type: 'email' },
];

const errorMessages = {
  empty: {
    0: '✦ Every great love story has a date — please choose yours',
    1: '✦ The setting matters — tell us where the magic unfolds',
    2: '✦ We would love to know the names behind this beautiful story',
    3: '✦ A way to connect — so we can begin crafting your legacy',
  },
  email: '✦ This doesn\'t look quite right — please share a valid email',
};

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validate = () => {
    const value = (answers[currentStep] || '').trim();
    
    if (!value) {
      setError(errorMessages.empty[currentStep]);
      return false;
    }

    if (steps[currentStep].type === 'email') {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) {
        setError(errorMessages.email);
        return false;
      }
    }

    setError('');
    return true;
  };

  const handleNext = () => {
    if (!validate()) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleInput = (value) => {
    setAnswers({ ...answers, [currentStep]: value });
    if (error) setError('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <main className={styles.page}>
      {/* Background glow effects */}
      <div className={styles.glowLeft}></div>
      <div className={styles.glowRight}></div>

      <div className={styles.container}>
        {/* Left: Contact Details */}
        <motion.div
          className={styles.leftCol}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.contactGroup}>
            <h3 className={styles.groupLabel}>CONTACT DETAILS</h3>
            <div className={styles.contactItem}>
              <span className={styles.contactKey}>Email:</span>
              <span className={styles.contactVal}>info@ssgkfilms.com</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactKey}>Phone:</span>
              <span className={styles.contactVal}>+1 (212) 555-0182</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactKey}>Location:</span>
              <span className={styles.contactVal}><strong>New York</strong> | <strong>London</strong> | <strong>Tokyo</strong></span>
            </div>
          </div>

          <div className={styles.contactGroup}>
            <h3 className={styles.groupLabel}>SOCIAL LINKS</h3>
            <div className={styles.socialLinks}>
              <a href="https://www.instagram.com/ssgkfilms/" target="_blank" rel="noreferrer" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
              <a href="https://vimeo.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7.42c-.09 1.95-1.45 4.62-4.08 8-2.72 3.54-5.02 5.3-6.9 5.3-1.17 0-2.15-1.08-2.95-3.23L6.7 12.31C6.13 10.16 5.52 9.08 4.87 9.08c-.15 0-.66.3-1.53.92L2 8.38c.96-.84 1.9-1.69 2.83-2.53C6.18 4.67 7.26 3.98 8 3.92c1.58-.15 2.55.93 2.91 3.24.39 2.49.66 4.04.81 4.65.45 2.05.94 3.07 1.48 3.07.42 0 1.05-.66 1.89-1.98.84-1.32 1.29-2.33 1.35-3.03.12-1.16-.33-1.74-1.36-1.74-.48 0-.98.11-1.49.33.99-3.24 2.88-4.82 5.67-4.73 2.07.06 3.04 1.4 2.93 4.03z"/>
                </svg>
                Vimeo
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Multi-step Form */}
        <motion.div
          className={styles.rightCol}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Begin Your Story</h2>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={styles.stepContent}
                >
                  <label className={styles.stepQuestion}>{steps[currentStep].question}</label>
                  
                  <div className={styles.inputRow}>
                    {steps[currentStep].type === 'date' ? (
                      <DatePicker
                        value={answers[currentStep] || ''}
                        onChange={(val) => handleInput(val)}
                      />
                    ) : steps[currentStep].type === 'place' ? (
                      <PlaceSelect
                        value={answers[currentStep] || ''}
                        onChange={(val) => handleInput(val)}
                      />
                    ) : (
                      <input
                        type={steps[currentStep].type}
                        placeholder={steps[currentStep].placeholder}
                        value={answers[currentStep] || ''}
                        onChange={(e) => handleInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className={styles.stepInput}
                        autoFocus
                      />
                    )}
                    <button className={styles.arrowBtn} onClick={handleNext} aria-label="Next">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </button>
                  </div>

                  {/* Error message */}
                  <AnimatePresence>
                    {error && (
                      <motion.p
                        className={styles.errorMsg}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.25 }}
                      >
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <div className={styles.stepMeta}>
                    <span className={styles.stepCount}>Step {currentStep + 1} of {steps.length}</span>
                  </div>
                  <motion.button
                    className={styles.nextBtn}
                    onClick={handleNext}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {currentStep === steps.length - 1 ? 'SUBMIT' : 'NEXT'}
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={styles.successMsg}
                >
                  <span className={styles.successIcon}>✦</span>
                  <h3>Thank you!</h3>
                  <p>We&apos;ll reach out within 24 hours to begin planning your story.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
