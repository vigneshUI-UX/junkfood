import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactUs() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="tag">Get In Touch</span>
          <h2>Contact Us</h2>
          <p>We are here 24/7 to solve your order queries</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', textAlign: 'center' }}>
          <div style={{ background: '#fff', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <Phone size={32} color="var(--primary)" style={{ margin: '0 auto 12px' }} />
            <h4>Customer Helpline</h4>
            <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>7305195172</p>
          </div>

          <div style={{ background: '#fff', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <Mail size={32} color="var(--primary)" style={{ margin: '0 auto 12px' }} />
            <h4>Support Email</h4>
            <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>fastfood123@gmail.com</p>
          </div>

          <div style={{ background: '#fff', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <MapPin size={32} color="var(--primary)" style={{ margin: '0 auto 12px' }} />
            <h4>Head Office</h4>
            <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}> Bengaluru</p>
          </div>
        </div>
      </div>
    </section>
  );
}