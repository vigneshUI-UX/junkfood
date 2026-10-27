import React from 'react';
import { categories } from '../data/mockData';

export default function ShopByCategory({ onSelectCategory }) {
  return (
    <section id="categories" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="tag">Taste Explorer</span>
          <h2>Shop by Category</h2>
          <p>Explore your favorite cravings with a single tap</p>
        </div>

        <div className="category-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card" onClick={() => onSelectCategory(cat.name)}>
              <img src={cat.image} alt={cat.name} />
              <h4 style={{ fontWeight: 700 }}>{cat.name}</h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{cat.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}