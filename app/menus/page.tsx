"use client";

import React from 'react';
import { motion } from 'framer-motion';
import MenuCarousel from '@/components/MenuCarousel';

export default function Menus() {
  const products = [
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
  ];

  return (
    <main style={{ backgroundColor: 'var(--bg-page)', minHeight: '100vh' }}>
      {/* Top Navigation */}
      <div style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-light)' }}>
        <header className="header container" style={{ position: 'relative', color: 'var(--text-main)' }}>
          <div className="nav-inner">
            <nav className="nav-links" style={{ color: 'var(--text-muted)', alignItems: 'center' }}>
              <a href="/" style={{ fontWeight: '700', color: 'var(--accent-rust)' }}>Home</a>
              <a href="/menus">Menu</a>
            </nav>
            <div className="logo" style={{ color: 'var(--accent-rust)' }}>PICK-QUICK</div>
            <nav className="nav-links right" style={{ color: 'var(--text-muted)' }}>
              <a href="/menus">Order Online</a>
            </nav>
          </div>
        </header>
      </div>

      {/* Order Location Bar */}
      <div className="order-bar">
        <div className="container order-bar-inner">
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '18px' }}>📍</span> Choose a Location to order
          </span>
          <a href="#" className="btn-cream">Order Now</a>
        </div>
      </div>


      {/* Menu Hero Section */}
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <div className="pill-label">
            <span>🛒</span> Order Delivery And Pickup
          </div>
          <motion.h1 
            className="recipes-title" 
            style={{ fontSize: 'clamp(80px, 12vw, 160px)', color: 'var(--accent-rust)', marginBottom: '40px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            MOST POPULAR ITEMS
          </motion.h1>
          
          <div style={{ marginTop: '20px' }}>
            <MenuCarousel />
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
