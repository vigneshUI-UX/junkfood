import React, { useEffect, useRef } from 'react';
import { Search, Zap } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => console.log('Autoplay handled:', err));
    }
  }, []);

  return (
    <section className="hero-section">
      {/* LOCAL VIDEO FROM PUBLIC FOLDER */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="hero-video-bg"
      >
        <source src="videos/hero-food-bg.mp4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay"></div>

      <div className="container hero-container" data-aos="fade-up">
        <div className="hero-badge">
          <Zap size={16} color="var(--primary)" />
          <span>Express 25-Min Delivery</span>
        </div>

        <h1 className="hero-title">
          Craving Fresh <span className="highlight-orange">Gourmet Food</span> Delivered Fast?
        </h1>

        <p className="hero-subtitle">
          Order from top curated chefs and iconic restaurants around you.
        </p>

        <div className="hero-search-box">
          <div className="search-input-wrapper">
            <Search size={18} color="#9ca3af" />
            <input type="text" placeholder="Search for biryani, pizza, burger..." />
          </div>
          <button className="hero-search-btn">Find Food</button>
        </div>
      </div>
    </section>
  );
}