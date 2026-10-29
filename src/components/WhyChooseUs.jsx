import React from 'react';
import { Zap, ShieldCheck, Award, Percent } from 'lucide-react';

const features = [
  {
    icon: <Zap size={28} color="var(--primary)" />,
    title: 'Lightning Fast',
    desc: 'Average delivery time under 30 minutes guaranteed.'
  },
  {
    icon: <ShieldCheck size={28} color="var(--primary)" />,
    title: 'Hygiene Certified',
    desc: 'Strict multi-stage safety and temperature monitoring.'
  },
  {
    icon: <Award size={28} color="var(--primary)" />,
    title: 'Top Rated Chefs',
    desc: 'Curated dishes from award-winning local masterchefs.'
  },
  {
    icon: <Percent size={28} color="var(--primary)" />,
    title: 'Zero Surge Fee',
    desc: 'Transparent pricing with no hidden delivery charges.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding" style={{ background: '#fdfbfb' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="tag">The FastFood Edge</span>
          <h2>Why Choose Us</h2>
          <p>Delivering quality, speed, and taste every single time</p>
        </div>

        <div className="why-choose-grid">
          {features.map((item, index) => (
            <div 
              key={index}
              className="why-choose-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="why-icon-wrapper">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}