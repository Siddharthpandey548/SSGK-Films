import styles from './Cart.module.css';

export const metadata = {
  title: 'Your Selections | SSGK Films',
  description: 'Review your selected wedding photography packages.',
};

export default function CartPage() {
  const cartItems = [
    { id: 1, name: 'The Royal Baraat Package', price: '₹2,50,000' },
    { id: 2, name: 'Cinematic Drone Coverage', price: '₹45,000' },
    { id: 3, name: 'Premium Heirloom Album', price: '₹65,000' }
  ];

  return (
    <main className={styles.cartPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className="playfair">Your Selections</h1>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.cartContent}>
          <div className={styles.itemsList}>
            {cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemInfo}>
                  <h3 className="playfair">{item.name}</h3>
                  <button className={styles.removeBtn}>Remove</button>
                </div>
                <div className={styles.itemPrice}>{item.price}</div>
              </div>
            ))}
          </div>

          <div className={styles.summaryCard}>
            <div className={styles.archTop}></div>
            <h2 className="signature">Summary</h2>
            
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>₹3,60,000</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Taxes (GST 18%)</span>
              <span>₹64,800</span>
            </div>
            
            <div className={styles.divider}></div>
            
            <div className={`${styles.summaryRow} ${styles.totalRow}`}>
              <span>Estimated Total</span>
              <span className={styles.totalPrice}>₹4,24,800</span>
            </div>

            <button className={styles.checkoutBtn}>
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
