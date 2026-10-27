import React from 'react';
import { Star, Plus, Sparkles } from 'lucide-react';

export default function NewArrivals({ products, onAddToCart }) {
  const newItems = products.filter(p => p.isNew);

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="tag">Fresh On The Menu</span>
          <h2>New Arrivals</h2>
          <p>Exciting new flavors crafted by top culinary stars</p>
        </div>

        <div className="products-grid">
          {newItems.map((item) => (
            <div key={item.id} className="product-card">
              <div className="product-img-wrapper">
                <img src={item.image} alt={item.name} />
                <span className="badge-tag" style={{ background: 'var(--primary)' }}>NEW</span>
              </div>
              <div className="product-info">
                <div className="product-header">
                  <h3>{item.name}</h3>
                  <div className="rating-badge">
                    <Star size={14} fill="#047857" /> {item.rating}
                  </div>
                </div>
                <p className="product-desc">{item.description}</p>
                <div className="product-footer">
                  <div>
                    <span className="price">₹{item.price}</span>
                  </div>
                  <button className="add-btn" onClick={() => onAddToCart(item)}>
                    + ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}