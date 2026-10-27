import React, { useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slows down video slightly for a cinematic look
      videoRef.current.play().catch(error => {
        console.log("Autoplay error:", error);
      });
    }
  }, []);

  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
      
      {/* Background Video */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
          filter: 'brightness(0.4)'
        }}
      >
        <source src="https://www.pexels.com/download/video/4676465/" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="container" style={{ position: 'relative', zIndex: 2, color: '#fff' }}>
        <div className="hero-content animate-fade" style={{ maxWidth: '650px' }}>
          <span style={{ background: 'rgba(255,82,0,0.3)', color: '#ff5200', padding: '6px 16px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 700 }}>
            ⚡ Express 25-Min Delivery
          </span>
          <h1 style={{ marginTop: '16px', fontSize: '3.8rem', fontWeight: 800, lineHeight: 1.15 }}>
            Craving Fresh <span style={{ color: '#ff5200' }}>Gourmet Food</span> Delivered Fast?
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, margin: '16px 0 32px' }}>
            Order from top curated chefs and iconic restaurants around you.
          </p>

          <div className="search-box" style={{ background: '#fff', padding: '8px 8px 8px 20px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 16px 40px rgba(0,0,0,0.3)' }}>
            <Search size={20} color="#6b7280" />
            <input type="text" placeholder="Search for biryani, pizza, burgers, or desserts..." style={{ border: 'none', outline: 'none', flex: 1, fontSize: '1rem' }} />
            <button style={{ background: '#ff5200', color: '#fff', padding: '14px 28px', borderRadius: '50px', fontWeight: 700 }}>Find Food</button>
          </div>
        </div>
      </div>
    </section>
  );
}