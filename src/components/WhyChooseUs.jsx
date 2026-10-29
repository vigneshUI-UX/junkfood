import React from 'react';
import { Zap, ShieldCheck, Award, Percent } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Zap size={28} color="#ff5200" />,
    title: 'Lightning Fast',
    desc: 'Average delivery time under 30 minutes guaranteed.'
  },
  {
    id: 2,
    icon: <ShieldCheck size={28} color="#ff5200" />,
    title: 'Hygiene Certified',
    desc: 'Strict multi-stage safety and temperature monitoring.'
  },
  {
    id: 3,
    icon: <Award size={28} color="#ff5200" />,
    title: 'Top Rated Chefs',
    desc: 'Curated dishes from award-winning local masterchefs.'
  },
  {
    id: 4,
    icon: <Percent size={28} color="#ff5200" />,
    title: 'Zero Surge Fee',
    desc: 'Transparent pricing with no hidden delivery charges.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding why-choose-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Why Choose Us</h2>
          <p>Delivering quality, speed, and taste every single time</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}