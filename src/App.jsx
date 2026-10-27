import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import PartnerBrands from './components/PartnerBrands';
import BestSellingProducts from './components/BestSellingProducts';
import NewArrivals from './components/NewArrivals';
import FeaturedCollections from './components/FeaturedCollections';
import PromotionalBanner from './components/PromotionalBanner';
import BrandStory from './components/BrandStory';
import WhyChooseUs from './components/WhyChooseUs';
import ProductHighlights from './components/ProductHighlights';
import CustomerReviews from './components/CustomerReviews';
import SpecialOffers from './components/SpecialOffers';
import SocialGallery from './components/SocialGallery';
import Newsletter from './components/Newsletter';
import FAQSection from './components/FAQSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

// Import products & categories mock data
import { products as initialProducts, categories as initialCategories } from './data/mockData';

import './styles/global.css';
import './styles/components.css';
import './styles/animations.css';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter products based on selected category (if active)
  const filteredProducts = selectedCategory
    ? initialProducts.filter((p) => p.category === selectedCategory)
    : initialProducts;

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  return (
    <div className="app">
      {/* Sticky Orange Navigation Bar */}
      <Navbar
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Hero Header Section */}
      <HeroSection />

      {/* Interactive Categories Filter */}
      <Categories 
        categories={initialCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Brand Tie-ups (KFC, Domino's, McDonald's, etc.) */}
      <PartnerBrands />

      {/* Best Selling Products Grid (Filtered by Category) */}
      <BestSellingProducts 
        products={filteredProducts} 
        onAddToCart={handleAddToCart} 
      />

      {/* New Arrivals Section */}
      <NewArrivals 
        products={initialProducts} 
        onAddToCart={handleAddToCart} 
      />

      {/* Auxiliary Marketing & Content Sections */}
      <FeaturedCollections />
      <PromotionalBanner />
      <BrandStory />
      <WhyChooseUs />
      <ProductHighlights />
      <CustomerReviews />
      <SpecialOffers />
      <SocialGallery />
      <Newsletter />
      <FAQSection />
      <ContactUs />
      <Footer />

      {/* Cart Drawer & Checkout Celebration Modal */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemove={handleRemoveFromCart}
        onUpdateQty={handleUpdateQty}
        onClearCart={() => setCart([])}
      />
    </div>
  );
}