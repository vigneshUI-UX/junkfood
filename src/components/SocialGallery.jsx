import React from 'react';

export default function SocialGallery() {
  const images = [
    'https://i.pinimg.com/736x/73/d8/0d/73d80d7106f3a70f9bdaa383d6fd4f31.jpg',
    'https://i.pinimg.com/1200x/42/52/d4/4252d4ee30133abc1a96df99fc2162a5.jpg',
    'https://i.pinimg.com/736x/e6/fe/6b/e6fe6b59727154177ab02f6592940092.jpg',
    'https://i.pinimg.com/736x/85/20/50/8520506e38ed9da4627336e1b9837c5f.jpg'
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="tag">FastFood</span>
          <h2>Instagram Gallery</h2>
          <p>Tag FastFood to get featured on our official feed</p>
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
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}