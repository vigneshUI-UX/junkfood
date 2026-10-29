import React from 'react';

export default function BrandStory() {
  return (
    <section className="section-padding brand-story-section">
      <div className="container">
        <div className="brand-story-grid">
          <div className="brand-story-text" data-aos="fade-right">
            <span className="tag">Our Heritage</span>
            <h2>Redefining Food Delivery With Integrity & Speed</h2>
            <p>
              Founded with the vision to make restaurant-grade culinary experiences accessible at home, FastFood collaborates exclusively with top-rated kitchens, organic suppliers, and cloud masterchefs. Every meal is carefully monitored for freshness, taste, and temperature control.
            </p>
            <div className="brand-stats">
              <div>
                <h4>50+</h4>
                <p>Partner Kitchens</p>
              </div>
              <div>
                <h4>25 Min</h4>
                <p>Average Delivery</p>
              </div>
              <div>
                <h4>100k+</h4>
                <p>Happy Foodies</p>
              </div>
            </div>
          </div>

          <div className="brand-story-img" data-aos="fade-left">
            <img 
              src="https://i.pinimg.com/736x/73/a2/1e/73a21ec135fd9305bf81a664a1f84690.jpg" 
              alt="Delicious food wraps" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}