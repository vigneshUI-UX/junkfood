import React from 'react';
import { ShieldCheck, Zap, Award, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    { icon: <Zap size={28} />, title: 'Lightning Fast', desc: 'Average delivery time under 30 minutes guaranteed.' },
    { icon: <ShieldCheck size={28} />, title: 'Hygiene Certified', desc: 'Strict multi-stage safety and temperature monitoring.' },
    { icon: <Award size={28} />, title: 'Top Rated Chefs', desc: 'Curated dishes from award-winning local masterchefs.' },
    { icon: <HeartHandshake size={28} />, title: 'Zero Surge Fee', desc: 'Transparent pricing with no hidden delivery charges.' }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="tag">The FastFood Edge</span>
          <h2>Why Choose Us</h2>
          <p>Delivering quality, speed, and taste every single time</p>
        </div>

        <div className="features-grid">
          {features.map((f, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}