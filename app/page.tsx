"use client";

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--bg-page)', minHeight: '100vh' }}>
      {/* Top Navigation Overlay */}
      <motion.header 
        className="header container"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1000, color: 'white' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-inner">
          <nav className="nav-links" style={{ color: 'white' }}>
            <a href="/">Home</a>
            <a href="/menus">Menu</a>
          </nav>
          <div className="logo" style={{ color: 'white' }}>PICK-QUICK</div>
          <nav className="nav-links right" style={{ color: 'white' }}>
            <a href="/menus" className="btn-small">Order Now</a>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-frame"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2000" 
            alt="Signature Burger" 
            className="hero-image"
          />
          <div className="hero-overlay">
            <motion.div 
              className="hero-top-left"
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              style={{ marginTop: '140px' }}
            >
              <h1 className="hero-halal" style={{ fontSize: '64px' }}>WE DON'T MAKE IT UNTIL YOU ORDER IT!</h1>
              <a href="/menus" className="hero-btn">Order Online</a>
            </motion.div>
            
            <motion.div 
              className="hero-big-word"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              FRESH
            </motion.div>

            <motion.div 
              className="hero-bottom-left"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              Serving the freshest, locally sourced drive-in favorites since 1962.
            </motion.div>
            
            <motion.div 
              className="hero-bottom-right"
              {...fadeInUp}
              transition={{ delay: 0.7 }}
            >
              <p>Stahl Farms Potatoes — Farm-fresh and hand-cut.</p>
              <p>Royal Ranch Beef — Premium, locally-sourced.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Homepage Popular Items Section */}
      <section style={{ padding: '120px 0', textAlign: 'center' }}>
        <div className="container">
          <div className="pill-label">
            <span>🛒</span> Order Delivery And Pickup
          </div>
          <h2 className="recipes-title" style={{ fontSize: '80px', color: 'var(--accent-rust)', marginBottom: '60px' }}>
            Most Popular Items
          </h2>
          
          <div className="product-grid">
            {[
              {
                name: 'Loaded Nachos with Fresh Toppings',
                img: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800'
              },
              {
                name: 'Crispy Chicken Burger, Extra Spice',
                img: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=800'
              },
              {
                name: 'Crispy Chicken Tenders with Dip',
                img: 'https://images.unsplash.com/photo-1562967914-6c82c6ca25fe?q=80&w=800'
              }
            ].map((product, i) => (
              <motion.div 
                key={i} 
                className="product-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="product-image-container">
                  <img src={product.img} alt={product.name} className="product-image" />
                </div>
                <h3 className="product-name" style={{ fontSize: '24px' }}>{product.name}</h3>
                <a href="/menus" className="btn-order-now">Order Now</a>
              </motion.div>
            ))}
          </div>

          <motion.div 
            style={{ marginTop: '60px' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="/menus" className="hero-btn" style={{ borderColor: 'var(--accent-rust)', color: 'var(--accent-rust)' }}>View Full Menu</a>
          </motion.div>
        </div>
      </section>

      {/* Quality Section (Merged from previous) */}
      <section className="recipes container" style={{ paddingBottom: '120px' }}>
        <div className="recipes-grid">
          <div className="recipes-left">
            <h2 className="recipes-title" style={{ fontSize: '60px' }}>QUALITY & PHILOSOPHY</h2>
          </div>
          <div className="recipes-right">
            <div className="recipes-list">
              {[
                { num: '01', name: 'LOCAL INGREDIENTS', desc: 'Sourcing from Stahl Farms and Royal Ranch Beef.' },
                { num: '02', name: 'SUSTAINABILITY', desc: 'Reducing waste and supporting local farmers.' }
              ].map((recipe, i) => (
                <div key={i} className="recipe-item">
                  <span className="recipe-num">{recipe.num}</span>
                  <div className="recipe-content">
                    <h3 className="recipe-name">{recipe.name}</h3>
                    <p className="recipe-desc">{recipe.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-cta" style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="footer-title" style={{ fontSize: '64px' }}>SAVOR THE JOURNEY,<br/>DISCOVER THE DELIGHT</h2>
          <div className="footer-btn-group">
            <a href="/menus" className="btn-white" style={{ padding: '16px 48px' }}>Order Online</a>
            <a href="/menus" className="btn-outline" style={{ padding: '16px 48px' }}>View Menu</a>
          </div>
        </div>
      </section>

      {/* Footer Copyright */}
      <footer style={{ padding: '40px 0', textAlign: 'center', fontSize: '10px', opacity: 0.4 }}>
        &copy; 2026 VEGORO. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}
