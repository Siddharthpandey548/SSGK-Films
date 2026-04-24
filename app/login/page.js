import styles from './Login.module.css';

export const metadata = {
  title: 'Login | SSGK Films',
  description: 'Access your private wedding gallery.',
};

export default function LoginPage() {
  return (
    <main className={styles.loginPage}>
      <div className={styles.formContainer}>
        <div className={styles.formBorder}>
          <div className={styles.header}>
            <span className={styles.icon}>✦</span>
            <h1 className="playfair">Client Portal</h1>
            <p>Enter your secret key to view your wedding gallery</p>
          </div>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className="signature">Email Address</label>
              <input type="email" id="email" className={styles.input} placeholder="bride@example.com" />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password" className="signature">Access Code</label>
              <input type="password" id="password" className={styles.input} placeholder="••••••••" />
            </div>

            <button type="button" className={styles.submitBtn}>
              <span className={styles.btnText}>Enter Gallery</span>
              <span className={styles.btnGlow}></span>
            </button>
            
            <div className={styles.forgotLinks}>
              <a href="#">Forgot Access Code?</a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
