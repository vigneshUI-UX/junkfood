import React from 'react';

const collections = [
  { id: 1, title: 'Midnight Cravings', count: '24 Places', tag: 'Late Night', bg: '#312e81', image: 'https://i.pinimg.com/736x/28/53/e2/2853e2466c8ff5553dfc67fa1f3814a8.jpg' },
  { id: 2, title: 'Gourmet Dining', count: '18 Places', tag: 'Fine Taste', bg: '#581c87', image: 'https://i.pinimg.com/736x/b7/11/5d/b7115dec05c14e61dec840741adc1194.jpg' },
  { id: 3, title: 'Pocket Friendly', count: '40+ Places', tag: 'Under ₹199', bg: '#065f46', image: 'https://i.pinimg.com/736x/38/26/14/38261470ae2d46c2b1672f245b36f67f.jpg' },
  { id: 4, title: 'Healthy & Organic', count: '15 Places', tag: 'Guilt Free', bg: '#b45309', image: 'https://i.pinimg.com/736x/a3/41/d4/a341d44bf1bf710eda354fa2f7c1267c.jpg' }
];

export default function FeaturedCollections() {
  return (
    <section className="section-padding" style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="tag">Handpicked Curations</span>
          <h2>Featured Collections</h2>
          <p>Handpicked selections tailored for every dining moment</p>
        </div>

        <div className="collections-grid">
          {collections.map((item, index) => (
            <div 
              key={item.id} 
              className="collection-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${item.image})` }}
            >
              <span className="collection-tag">{item.tag}</span>
              <div className="collection-content">
                <h3>{item.title}</h3>
                <p>{item.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}