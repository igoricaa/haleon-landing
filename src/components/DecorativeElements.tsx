'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useMemo, useState } from 'react';

// Animation variants for different types of movements
const animationVariants = {
  floating: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
  rotation: {
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
  bounce: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeOut',
      type: 'tween',
    },
  },
  pulse: {
    scale: [0.9, 1.1, 0.9],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
  drift: {
    x: [0, 20, 0, -20, 0],
    y: [0, -20, 0, 20, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
};

// Asset configuration with their properties
const assetConfigs = {
  'Asset 91': {
    src: '/details/Asset 91.png',
    alt: 'Tooth character',
    animation: 'bounce',
    opacity: 0.6,
  },
  'Asset 94': {
    src: '/details/Asset 94.png',
    alt: 'Medical cross symbol',
    animation: 'pulse',
    opacity: 0.4,
  },
  'Asset 100': {
    src: '/details/Asset 100.png',
    alt: 'Strawberry',
    animation: 'floating',
    opacity: 0.5,
  },
  'Asset 75': {
    src: '/details/Asset 75.png',
    alt: 'Teal circle',
    animation: 'drift',
    opacity: 0.3,
  },
  'Asset 95': {
    src: '/details/Asset 95.png',
    alt: 'Star outline',
    animation: 'rotation',
    opacity: 0.4,
  },
} as const;

type AssetKey = keyof typeof assetConfigs;
type AnimationType = 'floating' | 'rotation' | 'bounce' | 'pulse' | 'drift';
type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'right-middle';

interface DecorativeElement {
  asset: AssetKey;
  position: Position;
  delay?: number;
  scale?: number;
}

interface DecorativeElementsProps {
  section: 'promotion' | 'product-grid' | 'video' | 'custom';
  elements?: DecorativeElement[];
  className?: string;
  reducedMotion?: boolean;
}

// Position styles for different placements
const positionStyles: Record<Position, string> = {
  'top-left': 'top-4 left-4 sm:top-8 sm:left-8',
  'top-right': 'top-4 right-4 sm:top-8 sm:right-8',
  'bottom-left': 'bottom-4 left-4 sm:bottom-8 sm:left-8',
  'bottom-right': 'bottom-4 right-4 sm:bottom-8 sm:right-8',
  'right-middle': 'top-1/2 right-4 sm:right-8 -translate-y-1/2',
};

// Predefined element configurations for each section
const sectionConfigs: Record<string, DecorativeElement[]> = {
  promotion: [
    { asset: 'Asset 91', position: 'top-right', delay: 0.5, scale: 1.1 },
    { asset: 'Asset 94', position: 'bottom-left', delay: 1.0, scale: 0.9 },
  ],
  'product-grid': [
    { asset: 'Asset 100', position: 'top-left', delay: 0.3, scale: 1.0 },
    { asset: 'Asset 95', position: 'right-middle', delay: 0.7, scale: 1.2 },
    { asset: 'Asset 75', position: 'bottom-right', delay: 1.2, scale: 0.8 },
  ],
  video: [
    { asset: 'Asset 94', position: 'top-left', delay: 0.4, scale: 0.9 },
    { asset: 'Asset 75', position: 'bottom-right', delay: 0.8, scale: 1.1 },
  ],
};

function DecorativeElement({ 
  asset, 
  position, 
  delay = 0, 
  scale = 1,
  reducedMotion = false 
}: DecorativeElement & { reducedMotion?: boolean }) {
  const config = assetConfigs[asset];
  const animationType = config.animation as AnimationType;
  const [hasEntered, setHasEntered] = useState(false);
  
  // Create loop animation variant (no delay for looping)
  const loopAnimationVariant = useMemo(() => {
    if (reducedMotion) {
      return {};
    }
    
    const baseVariant = animationVariants[animationType];
    return {
      ...baseVariant,
      transition: {
        ...baseVariant.transition,
        delay: 0, // No delay for loop animations
      },
    };
  }, [animationType, reducedMotion]);

  return (
    <motion.div
      className={`absolute ${positionStyles[position]} pointer-events-none z-10`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: config.opacity, 
        scale: 1
      }}
      exit={{ 
        opacity: 0, 
        scale: 0.8
      }}
      transition={{ 
        opacity: { duration: 1, delay },
        scale: { duration: 0.8, delay },
      }}
      onAnimationComplete={() => {
        if (!hasEntered) {
          setHasEntered(true);
        }
      }}
      style={{
        willChange: reducedMotion ? 'auto' : 'transform, opacity',
      }}
    >
      <div 
        className="relative"
        style={{ transform: `scale(${scale})` }}
      >
        {hasEntered && !reducedMotion && (
          <motion.div
            animate={loopAnimationVariant}
          >
            <Image
              src={config.src}
              alt={config.alt}
              width={120}
              height={120}
              className="w-20 h-20 sm:w-[120px] sm:h-[120px] object-contain"
              priority={false}
              loading="lazy"
            />
          </motion.div>
        )}
        {(!hasEntered || reducedMotion) && (
          <Image
            src={config.src}
            alt={config.alt}
            width={120}
            height={120}
            className="w-20 h-20 sm:w-[120px] sm:h-[120px] object-contain"
            priority={false}
            loading="lazy"
          />
        )}
      </div>
    </motion.div>
  );
}

export default function DecorativeElements({
  section,
  elements,
  className = '',
  reducedMotion,
}: DecorativeElementsProps) {
  // Check for user's motion preference
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    if (reducedMotion !== undefined) return reducedMotion;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, [reducedMotion]);

  // Get elements configuration
  const elementsToRender = useMemo(() => {
    if (elements) return elements;
    return sectionConfigs[section] || [];
  }, [section, elements]);

  if (elementsToRender.length === 0) return null;

  return (
    <div 
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <AnimatePresence mode="wait">
        {elementsToRender.map((element, index) => (
          <DecorativeElement
            key={`${element.asset}-${element.position}-${section}-${index}`}
            {...element}
            reducedMotion={prefersReducedMotion}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

// Export types for external use
export type { DecorativeElementsProps, DecorativeElement, Position, AssetKey };

// Export predefined configurations for easy customization
export { sectionConfigs, assetConfigs };

// Usage examples:
/*
// Basic usage with predefined section configuration
<DecorativeElements section="promotion" />

// Custom elements configuration
<DecorativeElements 
  section="custom"
  elements={[
    { asset: 'Asset 91', position: 'top-left', delay: 0.5, scale: 1.2 },
    { asset: 'Asset 100', position: 'bottom-right', delay: 1.0 }
  ]}
/>

// With reduced motion override
<DecorativeElements 
  section="video" 
  reducedMotion={true}
  className="opacity-50"
/>

// In a section component:
<section className="relative">
  <DecorativeElements section="product-grid" />
  Your section content goes here
</section>
*/