import React from 'react';

export default function BrandStory() {
  return (
    <section id="story" className="section-padding" style={{ background: '#fff', overflow: 'hidden' }}>
      <div className="container">
        <div className="brand-story-grid">
          
          {/* Left Side: Content */}
          <div className="brand-story-text" data-aos="fade-right">
            <h2>Redefining Food Delivery With Integrity & Speed</h2>
            <p>
              Founded with the vision to make restaurant-grade culinary experiences accessible at home, SwiggyBites collaborates exclusively with top-rated kitchens, organic suppliers, and cloud masterchefs.
            </p>
           
          </div>

          {/* Right Side: Chef Illustration/Image */}
          <div className="brand-story-img" data-aos="fade-left">
           
            <img 
              src="https://i.pinimg.com/736x/e5/c0/68/e5c0684d1f0a4db9db3092966cd44873.jpg" 
              alt="Master Chef" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}