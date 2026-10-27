import React from 'react';

export default function Categories({ categories = [], selectedCategory, onSelectCategory }) {
  return (
    <section id="categories" className="section-padding">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="tag">What's on your mind?</span>
          <h2>Explore Food Categories</h2>
          <p>Satisfy your cravings with our wide variety of handpicked cuisines</p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '24px',
            marginTop: '32px'
          }}
        >
          {categories && categories.length > 0 ? (
            categories.map((cat, index) => {
              const isSelected = selectedCategory === cat.name;
              return (
                <div
                  key={cat.id || index}
                  onClick={() => onSelectCategory && onSelectCategory(isSelected ? null : cat.name)}
                  data-aos="zoom-in"
                  data-aos-delay={index * 75}
                  style={{
                    background: isSelected ? 'var(--primary)' : 'var(--card-bg)',
                    color: isSelected ? '#fff' : 'var(--text-dark)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '24px 16px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 12px 30px rgba(255,82,0,0.3)' : 'var(--shadow-sm)',
                    transition: 'var(--transition)',
                    border: isSelected ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                    transform: isSelected ? 'translateY(-6px)' : 'none'
                  }}
                >
                  <div 
                    style={{
                      width: '80px',
                      height: '80px',
                      margin: '0 auto 16px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  >
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>{cat.name}</h3>
                  <p style={{ fontSize: '0.85rem', opacity: isSelected ? 0.9 : 0.6 }}>{cat.count}</p>
                </div>
              );
            })
          ) : (
            <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: 'var(--text-muted)' }}>
              No categories available right now.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}