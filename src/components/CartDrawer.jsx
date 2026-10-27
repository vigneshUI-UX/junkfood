import React, { useState } from 'react';
import { X, Trash2, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({ isOpen, onClose, cartItems, onRemove, onUpdateQty, onClearCart }) {
  const [orderSuccess, setOrderSuccess] = useState(false);

  if (!isOpen) return null;

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // 1. Open Custom Success Modal & Clear Cart First
    setOrderSuccess(true);
    if (onClearCart) onClearCart();

    // 2. Trigger Confetti with a higher zIndex so it falls IN FRONT of the modal
    const count = 200;
    const defaults = { origin: { y: 0.6 } };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
        zIndex: 20000 // Higher than modal zIndex (10000) so it displays in front!
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const handleCloseModal = () => {
    setOrderSuccess(false);
    onClose();
  };

  return (
    <>
      {/* CART DRAWER */}
      <div className="cart-overlay" onClick={onClose}>
        <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="cart-header">
            <h3>Your Food Basket ({cartItems.length})</h3>
            <button onClick={onClose}><X size={20} /></button>
          </div>

          <div className="cart-items">
            {cartItems.length === 0 && !orderSuccess ? (
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '40px' }}>
                Your basket is empty!
              </p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p style={{ fontWeight: 700, color: 'var(--primary)' }}>₹{item.price}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                      <button onClick={() => onUpdateQty(item.id, -1)} style={{ padding: '2px 8px', background: '#eee', borderRadius: '4px' }}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateQty(item.id, 1)} style={{ padding: '2px 8px', background: '#eee', borderRadius: '4px' }}>+</button>
                    </div>
                  </div>
                  <button onClick={() => onRemove(item.id)} style={{ color: '#ef4444' }}><Trash2 size={18} /></button>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="cart-footer">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '1.1rem' }}>
                <span>Total Amount:</span>
                <span>₹{total}</span>
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CUSTOM SUCCESS MODAL */}
      {orderSuccess && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000, // Modal sits at 10000
            padding: '20px'
          }}
        >
          <div 
            className="animate-fade"
            style={{
              background: '#fff',
              borderRadius: '24px',
              padding: '40px 32px',
              maxWidth: '420px',
              width: '100%',
              textAlign: 'center',
              boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
            }}
          >
            <div 
              style={{
                width: '80px',
                height: '80px',
                background: '#ecfdf5',
                color: '#10b981',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}
            >
              <CheckCircle size={48} />
            </div>

            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>
              Order Placed! 🎉
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '28px' }}>
              Your food is being prepared by master chefs and will arrive in 25 minutes!
            </p>

            <button 
              onClick={handleCloseModal}
              style={{
                width: '100%',
                background: 'var(--primary)',
                color: '#fff',
                padding: '14px',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Track Your Order 🚀
            </button>
          </div>
        </div>
      )}
    </>
  );
}