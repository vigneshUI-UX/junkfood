import React from 'react';
import { ShoppingBag, MapPin } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <nav 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'var(--primary)', /* Full Orange Navbar Background */
        color: '#ffffff',
        padding: '14px 0',
        boxShadow: '0 4px 20px rgba(255, 82, 0, 0.25)',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* LOGO */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a href="#" style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span></span> Fast<span style={{ color: '#fff' }}>Food</span>
          </a>
          </div>
        {/* NAVIGATION LINKS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px', fontWeight: 600, fontSize: '0.95rem', color: '#ffffff' }}>
          <a href="#categories" style={{ color: '#ffffff', opacity: 0.9, transition: 'opacity 0.2s' }} onMouseOver={(e) => e.target.style.opacity = '1'} onMouseOut={(e) => e.target.style.opacity = '0.9'}>Categories</a>
          <a href="#bestsellers" style={{ color: '#ffffff', opacity: 0.9, transition: 'opacity 0.2s' }} onMouseOver={(e) => e.target.style.opacity = '1'} onMouseOut={(e) => e.target.style.opacity = '0.9'}>Bestsellers</a>
          <a href="#offers" style={{ color: '#fff', fontWeight: 800, background: 'rgba(255, 255, 255, 0.2)', padding: '4px 12px', borderRadius: '20px' }}>Offers 🔥</a>
          <a href="#story" style={{ color: '#ffffff', opacity: 0.9, transition: 'opacity 0.2s' }} onMouseOver={(e) => e.target.style.opacity = '1'} onMouseOut={(e) => e.target.style.opacity = '0.9'}>Our Story</a>
          <a href="#contact" style={{ color: '#ffffff', opacity: 0.9, transition: 'opacity 0.2s' }} onMouseOver={(e) => e.target.style.opacity = '1'} onMouseOut={(e) => e.target.style.opacity = '0.9'}>Contact</a>
        </div>

        {/* WHITE CART BUTTON ON ORANGE NAVBAR */}
        <button 
          onClick={onOpenCart}
          style={{
            background: '#ffffff',
            color: 'var(--primary)',
            padding: '10px 22px',
            borderRadius: '50px',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            border: 'none'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <ShoppingBag size={18} color="var(--primary)" />
          <span>Cart</span>
          {cartCount > 0 && (
            <span style={{
              background: 'var(--primary)',
              color: '#ffffff',
              borderRadius: '50%',
              width: '22px',
              height: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.8rem',
              fontWeight: 800,
              marginLeft: '4px'
            }}>
              {cartCount}
            </span>
          )}
        </button>

      </div>
    </nav>
  );
}