export const categories = [
  { id: 1, name: "Biryani", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop", count: "120+ Options" },
  { id: 2, name: "Pizzas", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop", count: "85+ Options" },
  { id: 3, name: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop", count: "90+ Options" },
  { id: 4, name: "Desserts", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop", count: "60+ Options" },
  { id: 5, name: "Chinese", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop", count: "75+ Options" },
  { id: 6, name: "Healthy Bowls", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop", count: "50+ Options" }
];

export const products = [
  {
    id: 'p1',
    name: 'Royal Dum Biryani',
    category: 'Biryani',
    price: 349,
    originalPrice: 420,
    rating: 4.8,
    reviewsCount: 1420,
    time: '25-30 mins',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop',
    isBestSeller: true,
    isNew: false,
    tag: 'Must Try',
    description: 'Slow-cooked fragrant basmati rice layered with marinated tender chicken and aromatic spices.'
  },
  {
    id: 'p2',
    name: 'Artisanal Truffle Pizza',
    category: 'Pizzas',
    price: 499,
    originalPrice: 599,
    rating: 4.9,
    reviewsCount: 890,
    time: '20-25 mins',
    image: 'https://i.pinimg.com/1200x/df/79/dd/df79ddacfcd4a29a8257fbf32e9ab318.jpg',
    isBestSeller: true,
    isNew: true,
    tag: 'Chef Special',
    description: 'Wood-fired sourdough crust topped with wild mushrooms, black truffle oil, and fresh mozzarella.'
  },
  {
    id: 'p3',
    name: 'Double Smash Bacon Cheeseburger',
    category: 'Burgers',
    price: 299,
    originalPrice: 350,
    rating: 4.7,
    reviewsCount: 2100,
    time: '15-20 mins',
    image: 'https://i.pinimg.com/736x/5b/18/62/5b18628a706c4cd6c886cb641fd685ee.jpg',
    isBestSeller: true,
    isNew: false,
    tag: 'Top Rated',
    description: 'Juicy double beef patties smashed to perfection with melted cheddar, crispy bacon, and secret sauce.'
  },
  {
    id: 'p4',
    name: 'Szechuan Dim Sum Basket',
    category: 'Chinese',
    price: 380,
    originalPrice: 450,
    rating: 4.6,
    reviewsCount: 630,
    time: '25-30 mins',
    image: 'https://i.pinimg.com/736x/1c/b1/c5/1cb1c53970c9ea0cdbb1e14c38ece6bb.jpg',
    isBestSeller: false,
    isNew: true,
    tag: 'Trending',
    description: 'Steamed crystal dumplings filled with fresh vegetables, mushrooms, and spicy Szechuan chili oil dip.'
  },
  {
    id: 'p5',
    name: 'Belgian Dark Chocolate Molten Cake',
    category: 'Desserts',
    price: 220,
    originalPrice: 280,
    rating: 4.9,
    reviewsCount: 3100,
    time: '15-20 mins',
    image: 'https://i.pinimg.com/736x/3d/c4/af/3dc4aff71726fe3165c505eb62a8cafb.jpg',
    isBestSeller: true,
    isNew: false,
    tag: 'Sweet Cravings',
    description: 'Rich Belgian dark chocolate cake with a molten warm chocolate center, served with vanilla ice cream.'
  },
  {
    id: 'p6',
    name: 'Avocado & Quinoa Buddha Bowl',
    category: 'Healthy Bowls',
    price: 320,
    originalPrice: 390,
    rating: 4.7,
    reviewsCount: 450,
    time: '20-25 mins',
    image: 'https://i.pinimg.com/736x/ee/57/fc/ee57fcf1ed007326ea6ce886fb685c4e.jpg',
    isBestSeller: false,
    isNew: true,
    tag: 'Fit Choice',
    description: 'Nutritious quinoa, sliced fresh avocado, roasted chickpeas, kale, and lemon tahini dressing.'
  },
  {
    id: 'p7',
    name: 'Crispy Veg Spring Rolls',
    category: 'Chinese',
    price: 240,
    originalPrice: 300,
    rating: 4.8,
    reviewsCount: 520,
    time: '15-20 mins',
    image: 'https://i.pinimg.com/736x/42/1a/0d/421a0dabacf91fd3eeba6dda43733a5a.jpg',
    isBestSeller: false,
    isNew: true,
    tag: 'Crispy Treat',
    description: 'Golden-fried crispy rolls stuffed with julienned vegetables and served with sweet chili sauce.'
  }
];

export const collections = [
  { id: 1, title: 'Midnight Cravings', items: '24 Places', bg: 'linear-gradient(135deg, #1e1b4b, #312e81)', tag: 'Late Night' },
  { id: 2, title: 'Gourmet Dining', items: '18 Places', bg: 'linear-gradient(135deg, #4c1d95, #701a75)', tag: 'Fine Taste' },
  { id: 3, title: 'Pocket Friendly', items: '40+ Places', bg: 'linear-gradient(135deg, #065f46, #047857)', tag: 'Under ₹199' },
  { id: 4, title: 'Healthy & Organic', items: '15 Places', bg: 'linear-gradient(135deg, #854d0e, #a16207)', tag: 'Guilt Free' }
];

export const testimonials = [
  {
    id: 1,
    name: ' Vignesh',
    role: 'Food Blogger',
    comment: 'The fastest delivery service in town! The food arrived piping hot and the ordering process was seamless.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Sharma',
    role: 'Software Engineer',
    comment: 'I love the late-night options and live tracking updates. Definitely my primary food ordering app daily!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Udhaya',
    role: 'Product Designer',
    comment: 'Incredible UI, smooth navigation, and the special deals save me money every single week!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop'
  }
];

export const faqs = [
  {
    q: 'How fast is the average delivery time?',
    a: 'Our average delivery time is between 25 to 35 minutes depending on distance and real-time traffic conditions.'
  },
  {
    q: 'Do you offer contactless delivery?',
    a: 'Yes! You can choose "Contactless Delivery" at checkout, and our rider will safely leave your meal at your doorstep.'
  },
  {
    q: 'What payment modes are supported?',
    a: 'We accept Credit/Debit Cards, UPI (GPay, PhonePe, Paytm), Net Banking, and Cash on Delivery (COD).'
  },
  {
    q: 'Can I track my order live?',
    a: 'Absolutely! Once your order is confirmed, you get real-time GPS tracking of your delivery partner on the map.'
  }
];