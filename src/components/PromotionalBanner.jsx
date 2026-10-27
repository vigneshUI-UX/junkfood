import React from 'react';

export default function PromotionalBanner() {
  return (
    <section className="section-padding">
      <div className="container">
        <div 
          className="promo-banner" 
          style={{
            /* Add your image URL inside url('...') below */
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            minHeight: '320px',
            display: 'flex',
            alignItems: 'center',
            padding: '40px',
            color: '#fff'
          }}
        >
          <div className="promo-content" style={{ position: 'relative', zIndex: 2, maxWidth: '500px' }}>
            <span style={{ background: 'var(--primary)', padding: '6px 14px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700 }}>
              FLAT 50% OFF
            </span>
            <h2 style={{ fontSize: '2.5rem', margin: '16px 0 12px', fontWeight: 800 }}>Weekend Feast Fest!</h2>
            <p style={{ opacity: 0.9, marginBottom: '24px' }}>
              Use code <strong style={{ color: 'var(--accent)' }}>FEAST50</strong> on all gourmet orders above ₹399.
            </p>
            <button style={{ background: '#fff', color: 'var(--secondary)', padding: '12px 28px', borderRadius: '50px', fontWeight: 800, cursor: 'pointer' }}>
              Claim Offer Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}