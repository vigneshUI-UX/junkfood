import React from 'react';
import { collections } from '../data/mockData';

export default function FeaturedCollections() {
  return (
    <section className="section-padding" style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-header">
          <span className="tag">Curated Moods</span>
          <h2>Featured Collections</h2>
          <p>Handpicked selections tailored for every dining moment</p>
        </div>

        <div className="collections-grid">
          {collections.map((col) => (
            <div key={col.id} className="collection-card" style={{ background: col.bg }}>
              <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '50px' }}>
                {col.tag}
              </span>
              <h3 style={{ marginTop: '16px', fontSize: '1.4rem' }}>{col.title}</h3>
              <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>{col.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}