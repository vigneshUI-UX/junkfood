import React from 'react';

const collections = [
  {
    id: 1,
    title: 'Midnight Cravings',
    places: '24 Places',
    image: 'https://i.pinimg.com/736x/88/32/95/883295a0acf9b11f2cbd28697be5a097.jpg'
  },
  {
    id: 2,
    title: 'Gourmet Dining',
    places: '18 Places',
    image: 'https://i.pinimg.com/736x/b6/ef/2f/b6ef2ffdb9c944293571fd7cad721964.jpg'
  },
  {
    id: 3,
    title: 'Pocket Friendly',
    places: '32 Places',
    image: 'https://i.pinimg.com/1200x/2d/b4/2d/2db42da34347e60657fb62c13b6ffcc5.jpg'
  },
  {
    id: 4,
    title: 'Healthy & Organic',
    places: '15 Places',
    image: 'https://i.pinimg.com/736x/08/c7/0d/08c70d473888e35bd1c4cd9d1d2983d7.jpg'
  }
];

export default function FeaturedCollections() {
  return (
    <section className="section-padding collections-section">
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
              style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.85) 100%), url(${item.image})` }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="collection-content">
                <h3>{item.title}</h3>
                <p>{item.places}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}