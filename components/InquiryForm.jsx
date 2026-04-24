import styles from './InquiryForm.module.css';

export default function InquiryForm() {
  return (
    <section className={styles.inquirySection}>
      <div className={styles.container}>
        <div className={styles.textSide}>
          <h2 className="playfair">Let's Tell Your Story</h2>
          <div className={styles.decorativeLine}></div>
          <p className={styles.subtitle}>
            We would be honored to be part of your grand celebration. Share a few details with us, and our team will get back to you with our customized wedding collections.
          </p>
          <div className={styles.contactInfo}>
            <p><strong>Email:</strong> reserve@ssgkfilms.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
          </div>
        </div>

        <div className={styles.formSide}>
          <form className={styles.formBorder}>
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label className="signature">Bride / Groom Name</label>
                <input type="text" className={styles.input} placeholder="Aaditi & Rohan" />
              </div>
              
              <div className={styles.inputGroup}>
                <label className="signature">Wedding Date / Exact or Estimate</label>
                <input type="text" className={styles.input} placeholder="e.g. December 2026" />
              </div>

              <div className={styles.inputGroup}>
                <label className="signature">Email Address</label>
                <input type="email" className={styles.input} placeholder="aaditi@example.com" />
              </div>

              <div className={styles.inputGroup}>
                <label className="signature">Phone Number</label>
                <input type="tel" className={styles.input} placeholder="+91 00000 00000" />
              </div>

              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label className="signature">Venue / Event Details</label>
                <textarea className={styles.textarea} placeholder="Tell us about the grand venues, number of events, and your vision..." rows="4"></textarea>
              </div>
            </div>

            <button type="button" className={styles.submitBtn}>
              <span className={styles.btnText}>Send Inquiry ✦</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
