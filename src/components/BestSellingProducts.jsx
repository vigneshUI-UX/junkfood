import React from 'react';
import { Star, Plus } from 'lucide-react';

export default function BestSellingProducts({ products, onAddToCart }) {
  const bestSellers = products.filter(p => p.isBestSeller);

  return (
    <section id="bestsellers" className="section-padding" style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="tag">Popular Right Now</span>
          <h2>Best-Selling Delicacies</h2>
          <p>Most loved dishes crafted by top culinary stars ordered by thousands today</p>
        </div>

        <div className="products-grid">
          {bestSellers.map((item, index) => (
            <div 
              key={item.id} 
              className="product-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="product-img-wrapper">
                <img src={item.image} alt={item.name} />
                <span className="badge-tag">{item.tag}</span>
              </div>
              <div className="product-info">
                <div className="product-header">
                  <h3>{item.name}</h3>
                  <div className="rating-badge">
                    <Star size={14} fill="#047857" color="#047857" /> {item.rating}
                  </div>
                </div>
                <p className="product-desc">{item.description}</p>
                <div className="product-footer">
                  <div>
                    <span className="price">₹{item.price}</span>
                    <span className="original-price">₹{item.originalPrice}</span>
                  </div>
                  <button className="add-btn" onClick={() => onAddToCart(item)}>
                    <Plus size={16} /> ADD
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