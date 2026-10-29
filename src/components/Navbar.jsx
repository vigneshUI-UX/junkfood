import React, { useState } from 'react';
import { ShoppingBag, MapPin, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* LOGO & LOCATION */}
        <div className="nav-brand">
          <a href="#" className="nav-logo">
            <span></span> Fast<span style={{ color: '#fff' }}>Food</span>
          </a>

        
        </div>

        {/* DESKTOP NAVIGATION LINKS */}
        <div className="desktop-links">
          <a href="#categories">Categories</a>
          <a href="#bestsellers">Bestsellers</a>
          <a href="#offers" className="offers-badge">Offers 🔥</a>
          <a href="#story">Our Story</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT SIDE ACTIONS: CART & MOBILE TOGGLE */}
        <div className="nav-actions">
          <button className="cart-btn" onClick={onOpenCart}>
            <ShoppingBag size={18} color="var(--primary)" />
            <span className="cart-text">Cart</span>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>

          <button
            className="mobile-toggle-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN (Positioned absolutely below navbar to prevent overlap) */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-location-badge">
            <MapPin size={16} color="var(--primary)" />
            <span>Bengaluru, KA</span>
          </div>
          <a href="#categories" onClick={handleLinkClick}>Categories</a>
          <a href="#bestsellers" onClick={handleLinkClick}>Bestsellers</a>
          <a href="#offers" onClick={handleLinkClick} style={{ fontWeight: 800, color: 'var(--primary)' }}>
            Offers 🔥
          </a>
          <a href="#story" onClick={handleLinkClick}>Our Story</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>
      )}
    </nav>
  );
}