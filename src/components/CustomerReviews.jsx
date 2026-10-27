import React from 'react';
import { testimonials } from '../data/mockData';
import { Star } from 'lucide-react';

export default function CustomerReviews() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="tag">Wall of Love</span>
          <h2>Customer Reviews</h2>
          <p>See what foodies have to say about their experience</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {testimonials.map((t) => (
            <div key={t.id} style={{ background: '#fff', padding: '28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#ffb800" color="#ffb800" />
                ))}
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-dark)', marginBottom: '20px' }}>"{t.comment}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={t.avatar} alt={t.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ fontWeight: 700 }}>{t.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}