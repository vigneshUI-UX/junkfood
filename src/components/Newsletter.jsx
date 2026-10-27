import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="section-padding" style={{ background: 'var(--secondary)', color: '#fff' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h2>Stay Hungry for Deals!</h2>
        <p style={{ opacity: 0.8, margin: '12px 0 28px' }}>
          Subscribe to our newsletter for secret coupons and weekend culinary launches.
        </p>

        {subscribed ? (
          <p style={{ color: '#10b981', fontWeight: 700 }}>🎉 Thanks for subscribing! Check your inbox for discounts.</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ flex: 1, padding: '14px 20px', borderRadius: '50px', border: 'none', outline: 'none' }}
            />
            <button type="submit" style={{ background: 'var(--primary)', color: '#fff', padding: '14px 28px', borderRadius: '50px', fontWeight: 700 }}>
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}