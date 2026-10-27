import React from 'react';

export default function BrandStory() {
  return (
    <section id="brand" className="section-padding" style={{ background: '#fff' }}>
      <div className="container">
        <div className="brand-story">
          <div>
            <span className="tag">Our Passion</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '16px' }}>
              Redefining Food Delivery With Integrity & Speed
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
              Founded with the vision to make restaurant-grade culinary experiences accessible at home, SwiggyBites collaborates exclusively with top-rated kitchens, organic suppliers, and cloud masterchefs.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              Every meal is packaged in eco-friendly thermal containers ensuring your food stays fresh, hot, and delicious from kitchen to table.
            </p>
          </div>
          <div>
            <img src="https://i.pinimg.com/1200x/d8/9a/8a/d89a8aa6e670284f88a320353d7c3e18.jpg" alt="Kitchen Prep" />
          </div>
        </div>
      </div>
    </section>
  );
}