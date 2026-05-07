"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MenuCarousel.css';

const items = [
  {
    id: 1,
    name: 'Cheese Moth',
    category: 'Burger',
    calories: '480 kcal',
    image: '/cheese-moth.png',
    color: '#FFF5E6'
  },
  {
    id: 2,
    name: 'Whopper',
    category: 'Burger',
    calories: '550 kcal',
    image: '/whopper.png',
    color: '#E9C4A1' // Muted orange for back-state
  },
  {
    id: 3,
    name: 'Green Chips',
    category: 'Snack',
    calories: '320 kcal',
    image: '/green-chips.png',
    color: '#E8F5E9'
  },
  {
    id: 4,
    name: 'Onion Meat',
    category: 'Burger',
    calories: '610 kcal',
    image: '/onion-meat.png',
    color: '#F9ECE6'
  }
];

export default function MenuCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const nextItem = () => setActiveIndex((prev) => (prev + 1) % items.length);
  const prevItem = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === (activeIndex - 1 + items.length) % items.length;
          const isNext = index === (activeIndex + 1) % items.length;

          let position = 'hidden';
          if (isActive) position = 'center';
          else if (isPrev) position = 'left';
          else if (isNext) position = 'right';

          return (
            <motion.div
              key={item.id}
              className={`carousel-card ${position}`}
              initial={false}
              animate={position}
              variants={{
                center: { scale: 1.2, opacity: 1, x: 0, zIndex: 10, rotateY: 0 },
                left: { scale: 0.85, opacity: 0.5, x: -320, zIndex: 5, rotateY: 15 },
                right: { scale: 0.85, opacity: 0.5, x: 320, zIndex: 5, rotateY: -15 },
                hidden: { scale: 0.5, opacity: 0, x: 600, zIndex: 0, rotateY: 0 }
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 200, 
                damping: 25,
                mass: 1.2
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="card-bg" style={{ 
                backgroundColor: isActive ? '#FF7D00' : item.color,
                border: isActive ? '1px solid rgba(255,255,255,0.2)' : 'none'
              }}>
                <motion.img 
                  src={item.image} 
                  alt={item.name} 
                  className="product-img"
                  animate={{ 
                    scale: isActive ? 1.05 : 1
                  }}
                  transition={{ 
                    scale: { duration: 0.5 }
                  }}
                />

                <div className="category" style={{ color: isActive ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.4)' }}>{item.category}</div>
                <div className="product-name" style={{ color: '#1a1a1a' }}>{item.name}</div>
                <div className="details">{item.calories} • Natural Ingredients</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="carousel-nav-group">
        <motion.button 
          className="main-add-to-cart"
          whileHover={{ scale: 1.05, backgroundColor: '#333' }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          key={`btn-${activeIndex}`}
        >
          ADD TO CART
        </motion.button>
      </div>
    </div>
  );
}
