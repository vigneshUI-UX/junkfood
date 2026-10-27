import React, { useState } from 'react';
import { faqs } from '../data/mockData';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="section-padding" style={{ background: '#fff' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-header">
          <span className="tag">Help Center</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '20px', cursor: 'pointer' }} onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700 }}>
                {faq.q}
                <ChevronDown style={{ transform: openIdx === idx ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
              </div>
              {openIdx === idx && (
                <p style={{ color: 'var(--text-muted)', marginTop: '12px', fontSize: '0.95rem' }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}