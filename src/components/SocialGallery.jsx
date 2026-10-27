import React from 'react';

export default function SocialGallery() {
  const images = [
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop',
    'https://i.pinimg.com/736x/85/20/50/8520506e38ed9da4627336e1b9837c5f.jpg'
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="tag">#FastFood</span>
          <h2>Instagram Gallery</h2>
          <p>Tag @FastFood to get featured on our official feed</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {images.map((img, idx) => (
            <div key={idx} style={{ position: 'relative', height: '220px', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <img src={img} alt="Insta Post" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'rgba(0,0,0,0.4)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#fff', 
                  opacity: 0, 
                  transition: '0.3s' 
                }} 
                onMouseEnter={e => e.currentTarget.style.opacity = 1} 
                onMouseLeave={e => e.currentTarget.style.opacity = 0}
              >
                {/* Inline SVG Instagram Icon */}
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}