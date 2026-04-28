import styles from './Faqs.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Navigating Your Story | FAQs | SSGK Films',
  description: 'Common inquiries regarding our Indian wedding process, style, and international engagements.',
};

export default function FaqsPage() {
  const faqs = [
    {
      question: 'What is the SSGK Films cinematic style?',
      answer: 'Our style is heavily rooted in editorial fashion and classic Indian cinema. We treat your wedding ceremonies as scenes in a grand film, utilizing dramatic lighting, rich color grading, and thoughtful direction to create visual heirlooms that possess the depth and gravitas of a motion picture.'
    },
    {
      question: 'Do you cover multi-day Indian wedding events?',
      answer: 'Absolutely. We specialize in comprehensive coverage of multi-day cultural celebrations, from the intimate Haldi and Mehendi ceremonies to the grand Sangeet and the main wedding day. Our team is equipped to maintain visual continuity across multiple events and locations.'
    },
    {
      question: 'Do you offer international and destination services?',
      answer: 'Yes. SSGK Films frequently travels globally to document exclusive destination weddings. International commissions require advanced booking and are subject to custom logistical arrangements to ensure our entire suite of cinema-grade equipment and personnel can be accommodated seamlessly.'
    },
    {
      question: 'How long is the post-production process?',
      answer: 'True art cannot be rushed. Our meticulous post-production process, which includes individualized color grading, narrative sequencing, and spatial retouching, typically requires 8 to 12 weeks following your event. A short preview or teaser is generally provided within the first 14 days.'
    },
    {
      question: 'Are raw files provided?',
      answer: 'To maintain the integrity of the SSGK Films aesthetic, we do not release raw, unedited files. The cinematic look you are commissioning us for is heavily dependent on our proprietary post-production techniques. You will receive a fully curated and finalized masterpiece.'
    },
    {
      question: 'How do we begin the booking process?',
      answer: 'The process begins with an initial consultation, either in person at our studio or via private video conference. This allows us to understand the scope of your narrative and the specific traditions of your celebration. Following this, a custom proposal will be presented for your review.'
    }
  ];

  return (
    <main className={styles.page}>

      {/* Background Layer */}
      <div className={styles.backgroundLayer}>
        <img
          src="/images/mehndi_hands.png"
          alt="Cinematic background"
          className={styles.bgImage}
        />
        <div className={styles.bgGradient}></div>
      </div>

      <div className={styles.content}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Navigating Your Story</h1>
          <p className={styles.desc}>
            Clarity is the foundation of a masterpiece. Below you will find the answers to our most common inquiries regarding our process, style, and international engagements.
          </p>
        </div>

        {/* Accordion FAQ Section */}
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <details key={index} className={styles.faqItem} open={index === 0}>
              <summary className={styles.faqSummary}>
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </summary>
              <div className={styles.faqAnswer}>
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Support Call to Action */}
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>Require further elucidation?</p>
          <Link href="/contact" className={styles.ctaBtn}>
            CONTACT THE STUDIO
          </Link>
        </div>

      </div>

    </main>
  );
}
