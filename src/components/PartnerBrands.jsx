import React from 'react';

const partners = [
  { id: 1, name: 'KFC', logo: 'https://i.pinimg.com/1200x/ee/fd/cf/eefdcf8f23c277bfac155152c6ab3a20.jpg', tag: 'Up to 40% OFF' },
  { id: 2, name: "Domino's Pizza", logo: 'https://i.pinimg.com/1200x/04/83/d1/0483d14533e9d19e635923cdc21ee439.jpg', tag: 'Free Delivery' },
  { id: 3, name: "McDonald's", logo: 'https://i.pinimg.com/1200x/06/78/65/067865ccc84af6682e1223bccac6bb58.jpg', tag: 'Combo Deals' },
  { id: 4, name: 'Subway', logo: 'https://i.pinimg.com/1200x/31/64/02/316402a689e286072930748856926b9f.jpg', tag: 'Fresh & Healthy' },
  { id: 5, name: 'Burger King', logo: 'https://i.pinimg.com/1200x/41/26/45/412645ca9164dd9b8c0e8cfd5099cd75.jpg', tag: 'Buy 1 Get 1' },
  { id: 6, name: 'Starbucks', logo: 'https://i.pinimg.com/1200x/53/df/e6/53dfe6a48797869e9742fcd631ee3d06.jpg', tag: 'Special Brews' }
];

export default function PartnerBrands() {
  return (
    <section className="section-padding" style={{ background: '#fff' }}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="tag">Official Tie-ups</span>
          <h2>Top Restaurant Chains</h2>
          <p>Order directly from your favorite global food icons with exclusive discounts</p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px',
            marginTop: '32px'
          }}
        >
          {partners.map((brand, index) => (
            <div
              key={brand.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                background: 'var(--card-bg)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                textAlign: 'center',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition)',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 82, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div 
                style={{
                  width: '90px',
                  height: '90px',
                  margin: '0 auto 14px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #f3f4f6'
                }}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '4px' }}>
                {brand.name}
              </h3>
              
              <span 
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  background: 'rgba(255, 82, 0, 0.1)',
                  padding: '4px 10px',
                  borderRadius: '50px',
                  display: 'inline-block'
                }}
              >
                {brand.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}