import React, { useState } from 'react';
import { ShoppingBag, MapPin, Flame, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* Brand & Location */}
        <div className="nav-brand">
          <a href="#" className="nav-logo">
            <span>FastFood</span>
          </a>
         
        </div>

        {/* Desktop Links */}
        <div className="desktop-links">
          <a href="#menu">Menu</a>
          <a href="#offers">Offers</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Actions & Mobile Hamburger */}
        <div className="nav-actions">
          <button className="cart-btn" onClick={onOpenCart} aria-label="Open Food Basket">
            <ShoppingBag size={18} />
            <span>Basket</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <button 
            className="mobile-toggle-btn" 
            onClick={toggleMobileMenu} 
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a>
            <a href="#offers" onClick={() => setMobileMenuOpen(false)}>Offers</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}