import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function ProductHighlights() {
  return (
    <section className="section-padding" style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-header">
          <span className="tag">Quality Standard</span>
          <h2>Product Highlights</h2>
          <p>What makes our food stand out</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {[
            '100% Organic & Locally Sourced Ingredients',
            'Eco-friendly Biodegradable Packaging',
            'No Artificial Colors or Added MSG',
            'Live GPS Rider Tracking on Map',
            'Hot Thermal Insulated Bags',
            'Instant Refunds & Dedicated Support'
          ].map((text, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-light)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
              <CheckCircle color="var(--primary)" size={24} />
              <span style={{ fontWeight: 600 }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}