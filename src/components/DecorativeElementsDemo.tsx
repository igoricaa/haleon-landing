'use client';

import { motion } from 'motion/react';
import DecorativeElements from './DecorativeElements';
import type { DecorativeElement } from './DecorativeElements';

/**
 * Demo component showing various ways to use DecorativeElements
 * This file is for demonstration purposes and can be removed in production
 */

// Custom configuration example
const customHeroElements: DecorativeElement[] = [
  { asset: 'Asset 91', position: 'top-right', delay: 0.5, scale: 1.3 },
  { asset: 'Asset 100', position: 'top-left', delay: 0.8, scale: 0.9 },
  { asset: 'Asset 95', position: 'bottom-left', delay: 1.2, scale: 1.1 },
];

const customFooterElements: DecorativeElement[] = [
  { asset: 'Asset 75', position: 'top-left', delay: 0.3, scale: 1.0 },
  { asset: 'Asset 94', position: 'bottom-right', delay: 0.7, scale: 0.8 },
];

export function HeroSectionDemo() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 overflow-hidden">
      {/* Custom decorative elements */}
      <DecorativeElements 
        section="custom"
        elements={customHeroElements}
        className="opacity-60"
      />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hero Section with Custom Elements
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This demonstrates custom placement and configuration of decorative elements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function ReducedMotionDemo() {
  return (
    <section className="relative py-16 bg-gray-100 overflow-hidden">
      {/* Elements with reduced motion */}
      <DecorativeElements 
        section="promotion"
        reducedMotion={true}
        className="opacity-40"
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Accessibility-First Design
        </h2>
        <p className="text-lg text-gray-600">
          This section respects users' reduced motion preferences.
        </p>
      </div>
    </section>
  );
}

export function ComparisonDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Promotion section elements */}
      <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden">
        <DecorativeElements section="promotion" className="opacity-50" />
        <div className="relative z-10 p-6 h-full flex items-center justify-center">
          <h3 className="text-xl font-semibold text-center">Promotion Section</h3>
        </div>
      </div>

      {/* Product grid elements */}
      <div className="relative h-64 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg overflow-hidden">
        <DecorativeElements section="product-grid" className="opacity-50" />
        <div className="relative z-10 p-6 h-full flex items-center justify-center">
          <h3 className="text-xl font-semibold text-center">Product Grid</h3>
        </div>
      </div>

      {/* Video section elements */}
      <div className="relative h-64 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg overflow-hidden">
        <DecorativeElements section="video" className="opacity-50" />
        <div className="relative z-10 p-6 h-full flex items-center justify-center">
          <h3 className="text-xl font-semibold text-center">Video Section</h3>
        </div>
      </div>
    </div>
  );
}

export function FooterDemo() {
  return (
    <footer className="relative py-16 bg-gray-900 text-white overflow-hidden">
      {/* Custom footer elements */}
      <DecorativeElements 
        section="custom"
        elements={customFooterElements}
        className="opacity-20"
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Footer with Subtle Elements</h3>
        <p className="text-gray-300">
          Decorative elements work well in dark themes too.
        </p>
      </div>
    </footer>
  );
}

// Complete demo page component
export default function DecorativeElementsDemo() {
  return (
    <div className="min-h-screen">
      <HeroSectionDemo />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            DecorativeElements Component Showcase
          </h2>
          <ComparisonDemo />
        </div>
      </div>
      <ReducedMotionDemo />
      <FooterDemo />
    </div>
  );
}