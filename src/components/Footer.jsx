import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: '#0b0f19', color: '#9ca3af', padding: '60px 0 24px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '40px' }}>
          <div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '16px' }}>FastFood</h3>
            <p style={{ fontSize: '0.9rem' }}>Delivering taste, happiness, and speed to your doorstep every day.</p>
          </div>
          <div>
            <h4 style={{ color: '#fff', marginBottom: '16px' }}>Company</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Team</p>
          </div>
          <div>
            <h4 style={{ color: '#fff', marginBottom: '16px' }}>Legal</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
          <div>
            <h4 style={{ color: '#fff', marginBottom: '16px' }}>Available In</h4>
            <p>Bengaluru</p>
            <p>Tamil Nadu</p>
            <p>Delhi NCR</p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1f2937', paddingTop: '24px', textAlign: 'center', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()}FastFood Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}