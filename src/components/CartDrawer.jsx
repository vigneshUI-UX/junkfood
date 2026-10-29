import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, ArrowRight, CheckCircle2, Plus, Minus } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckoutConfirm = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.5 },
      zIndex: 4000
    });
    setOrderConfirmed(true);
  };

  const handleCloseModal = () => {
    setOrderConfirmed(false);
    onClearCart?.();
    onClose();
  };

  return (
    <>
      <div className="cart-backdrop" onClick={handleCloseModal} />

      <div className="cart-drawer-container">
        {/* Header */}
        <div className="cart-drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag size={20} color="var(--primary)" />
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>
              {orderConfirmed ? 'Order Success!' : `Your Food Basket (${cartItems.reduce((sum, i) => sum + i.quantity, 0)})`}
            </h3>
          </div>
          <button className="cart-close-btn" onClick={handleCloseModal} aria-label="Close Basket">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="cart-drawer-body">
          {orderConfirmed ? (
            <div className="order-success-view" style={{ textAlign: 'center', margin: 'auto 0', padding: '20px 0' }}>
              <div style={{ display: 'inline-block', marginBottom: '16px' }}>
                <CheckCircle2 size={64} color="#10b981" />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1f2937', marginBottom: '8px' }}>
                Order Confirmed! 🎉
              </h2>
              <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.5', margin: '0 0 20px 0' }}>
                Your delicious food is being prepared by our top masterchefs and will be delivered in <strong>25 minutes</strong>.
              </p>
              <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '12px', border: '1px solid #f3f4f6', textAlign: 'left', marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, marginBottom: '6px' }}>
                  <span>Total Paid:</span>
                  <span style={{ color: 'var(--primary)' }}>₹{totalAmount}</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                  Delivery Address: Bengaluru, KA
                </div>
              </div>
              <button className="checkout-btn" onClick={handleCloseModal}>
                Back to Home
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="empty-cart-view">
              <span style={{ fontSize: '3rem' }}>🛒</span>
              <h4>Your basket is empty</h4>
              <p>Add items from our bestsellers to get started!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item-card">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">₹{item.price * item.quantity}</p>
                  
                  {/* Quantity Controller */}
                  <div className="qty-controller">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="qty-btn"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="qty-btn"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* DELETE / REMOVE BUTTON */}
                <button
                  className="cart-remove-btn"
                  onClick={() => onRemoveItem(item.id)}
                  aria-label="Remove Item"
                >
                  <Trash2 size={16} color="#ef4444" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {!orderConfirmed && cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-total-row">
              <span>Grand Total</span>
              <span className="cart-total-price">₹{totalAmount}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckoutConfirm}>
              <span>Confirm Order</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}