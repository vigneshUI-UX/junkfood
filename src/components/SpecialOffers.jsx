import React from 'react';

export default function SpecialOffers() {
  return (
    <section id="offers" className="section-padding" style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-header">
          <span className="tag">Hot Deals</span>
          <h2>Special Offers</h2>
          <p>Unbeatable savings on your everyday orders</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{ background: 'linear-gradient(135deg, #ff5200, #ff7a00)', color: '#fff', padding: '32px', borderRadius: 'var(--radius-md)' }}>
            <h3>First Order Discount</h3>
            <p style={{ margin: '8px 0 16px' }}>Get ₹100 flat off on your first order with us.</p>
            <span style={{ background: '#fff', color: 'var(--primary)', padding: '6px 16px', borderRadius: '50px', fontWeight: 800 }}>CODE: WELCOME100</span>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #111827, #374151)', color: '#fff', padding: '32px', borderRadius: 'var(--radius-md)' }}>
            <h3>Free Delivery Pass</h3>
            <p style={{ margin: '8px 0 16px' }}>Enjoy 0 delivery fees on orders above ₹299.</p>
            <span style={{ background: 'var(--primary)', color: '#fff', padding: '6px 16px', borderRadius: '50px', fontWeight: 800 }}>AUTO APPLIED</span>
          </div>
        </div>
      </div>
    </section>
  );
}