'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import DecorativeElements from './DecorativeElements';

interface PromotionCardProps {
  retailerLogo: string;
  retailerLogoAlt: string;
  promotionText: string;
  giftImage: string;
  giftImageAlt: string;
  brandColor: string;
  index: number;
  storeUrl: string;
  buttonText: string;
  additionalInfo: string;
}

function PromotionCard({
  retailerLogo,
  retailerLogoAlt,
  promotionText,
  giftImage,
  giftImageAlt,
  brandColor,
  index,
  storeUrl,
  buttonText,
  additionalInfo,
}: PromotionCardProps) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.2,
          ease: 'easeOut',
        }}
        whileHover={{
          scale: 1.05,
          boxShadow:
            '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
          transition: { duration: 0.3 },
        }}
        viewport={{ once: true, margin: '-100px' }}
        className={cn(
          'relative overflow-hidden rounded-xl bg-white shadow-lg',
          'border border-gray-100 p-6 sm:p-8'
        )}
      >
        {/* Brand color accent bar */}
        <div
          className='absolute top-0 left-0 right-0 h-1'
          style={{ backgroundColor: brandColor }}
        />

        {/* Card content */}
        <div className='flex flex-col items-center space-y-8 text-center justify-between h-full'>
          {/* Retailer Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className='flex-shrink-0'
          >
            <Image
              src={retailerLogo}
              alt={retailerLogoAlt}
              width={160}
              height={60}
              className='w-auto h-10 sm:h-12 object-contain'
            />
          </motion.div>

          {/* Gift Section */}
          <div className='flex flex-col items-center space-y-4'>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
              className={cn(
                'p-6 rounded-full shadow-md',
                'flex items-center justify-center'
              )}
              style={{ backgroundColor: `${brandColor}15` }}
            >
              <Image
                src={giftImage}
                alt={giftImageAlt}
                width={120}
                height={120}
                className='w-24 h-24 sm:w-30 sm:h-30 object-contain'
              />
            </motion.div>
          </div>

          {/* Promotion Text */}
          <div className='space-y-4'>
            <p className='text-base sm:text-base text-gray-800 leading-relaxed max-w-sm'>
              {promotionText}
            </p>
          </div>

          {/* CTA Button */}
          <motion.a
            href={storeUrl}
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white shadow-md hover:shadow-lg transition-all duration-300',
              'text-sm sm:text-base w-full'
            )}
            style={{ backgroundColor: brandColor }}
          >
            {buttonText}
          </motion.a>
        </div>

        {/* Decorative elements */}
        <div
          className='absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-10'
          style={{ backgroundColor: brandColor }}
        />
        <div
          className='absolute -bottom-5 -left-5 w-12 h-12 rounded-full opacity-5'
          style={{ backgroundColor: brandColor }}
        />
      </motion.div>

      {/* Additional Info */}
      <div className='text-center mt-6 sm:mt-10'>
        <p className='text-sm text-black max-w-2xl mx-auto'>{additionalInfo}</p>
      </div>
    </div>
  );
}

export default function PromotionSection() {
  const promotions = [
    {
      retailerLogo: '/lilly-logo.png',
      retailerLogoAlt: 'Lilly logo',
      promotionText:
        'Kupovinom bilo koje Aquafresh ili Sensodyne dečje paste za zube, u Lilly radnjama, na poklon dobijate peščani sat.',
      giftImage: '/hourglass.png',
      giftImageAlt: 'Peščani sat - poklon za kupovinu u Lilly radnjama',
      brandColor: '#2AB0E5', // Aquafresh color
      storeUrl: 'https://www.lilly.rs/nasi-objekti',
      buttonText: 'Pronađi Lilly radnju',
      additionalInfo:
        'Promocija važi u periodu 01-30.09.2025. godine ili do isteka zaliha.',
    },
    {
      retailerLogo: '/max-novi-logo.png',
      retailerLogoAlt: 'Maxi logo',
      promotionText:
        'Kupovinom bilo koje Aquafresh ili Sensodyne dečje paste za zube, u Maxi/Mega Maxi objektima, na poklon dobijate školsku svesku',
      giftImage: '/notebook.png',
      giftImageAlt: 'Školska sveska - poklon za kupovinu u Maxi objektima',
      brandColor: '#00ACBA', // Sensodyne color
      storeUrl: 'https://www.maxi.rs/storelocator',
      buttonText: 'Pronađi Maxi radnju',
      additionalInfo:
        'Promocija važi u periodu 25.08-20.09.2025. godine ili do isteka zaliha.',
    },
  ];

  return (
    <section className='relative py-16 sm:py-24 bg-gradient-to-b from-gray-200 to-white overflow-hidden'>
      {/* Decorative floating elements */}
      <DecorativeElements section='promotion' />

      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
          className='text-center mb-12 sm:mb-16'
        >
          <h2
            className={cn(
              'text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4',
              'bg-gradient-to-r from-aquafresh via-sensodyne to-aquafresh-light bg-clip-text text-transparent'
            )}
          >
            Promocija - Povratak u školu
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-aquafresh to-sensodyne mx-auto rounded-full' />
        </motion.div>

        {/* Promotion Cards Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto'>
          {promotions.map((promotion, index) => (
            <PromotionCard
              key={index}
              {...promotion}
              index={index}
              additionalInfo={promotion.additionalInfo}
            />
          ))}
        </div>

        <p className='text-center text-sm text-gray-600 mt-6'>
          Detalji o promociji dostupni su u prodajnim objektima.
        </p>
      </div>
    </section>
  );
}
