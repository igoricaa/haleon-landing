'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Product {
  id: string;
  name: string;
  image: string;
  ageRange?: string;
  description: string;
  brand: 'aquafresh' | 'sensodyne';
}

const products: Product[] = [
  // Aquafresh Products
  {
    id: 'aquafresh-little-teeth',
    name: 'Aquafresh Little Teeth',
    image: '/aquafresh-LITTLE-TEETH-TPASTE-12X50ML_151x36x30_idea01-01.png',
    ageRange: '3-5 godina',
    description:
      'Pastu za zube Aquafresh Little Teeth su specijalno napravili stomatološki stručnjaci za decu starosti 3-5 godina. Trostruka zaštita ove zubne paste obezbeđuje nežnu negu i zaštitu od karijesa za mlečne zube koji rastu, kako bi stalni zubi bili zdravi i jaki. Ne sadrži šećer, sa blagim ukusom mente.',
    brand: 'aquafresh',
  },
  {
    id: 'aquafresh-splash',
    name: 'Aquafresh Splash Kids Strawbery & Mint',
    image: '/aquafresh-Splash.png',
    ageRange: '6+ godina',
    description:
      'Aquafresh Splash jagoda & menta je pasta za zube specijalno dizajnirana za decu da obezbedi zaštitu mlečnih i novih stalnih zuba.',
    brand: 'aquafresh',
  },
  {
    id: 'aquafresh-big-teeth-paw-patrol',
    name: 'Aquafresh Big Teeth Junior',
    image:
      '/aquafresh-TB-Big-Teeth-extra-soft-PawPatrol_new_151x36x30_idea01-01.png',
    ageRange: '6+ godina',
    description:
      'Aquafresh Big Teeth je zubna pasta koja penuša, sa trostrukom zaštitom, specijalno kreirana za decu od 6 do 8 godina. Ona pomaže u jačanju zubne gleđi i sprečava negativno dejstvo šećerne kiseline iz plaka, glavnog uzroka kvarenja zuba. Ne sadrži šećer, sa blagim ukusom mente.',
    brand: 'aquafresh',
  },
  {
    id: 'aquafresh-advance',
    name: 'Aquafresh Advance Kids',
    image: '/aquafresh-advance.png',
    ageRange: '12+ godina',
    description:
      'Pasta za zube Aquafresh Advance je specijalno kreirana za decu uzrasta 9 do 12 godina. Ona pruža negu i zaštitu, za jače stalne zube. Sa 6 ključnih prednosti za snažnije zube: pomaže u očuvanju zdravlja desni, sprečavanju karijesa, zaštiti desni, nežna prema zubima, bori se protiv plaka i čisti prostor između zuba.',
    brand: 'aquafresh',
  },
  // Sensodyne Products
  {
    id: 'pronamel-junior-packaging',
    name: 'Sensodyne Pronamel Mild Mint',
    image: '/sensodyne-pronamel-junior-6-12-packaging.png',
    ageRange: '6-12 godina',
    description:
      'Pasta za zube Sensodyne Pronamel Junior je specijalno kreirana za decu uzrasta 6 do 12 godina. Ona aktivno štiti tanju dečju gleđ, za jače stalne zube. Dodatno, pruža 24-časovnu zaštitu od karijesa. Ne sadrži šećer, sa blagim je ukusom mente.',
    brand: 'sensodyne',
  },
  {
    id: 'pronamel-kids-packaging',
    name: 'Sensodyne Pronamel Berry Twist',
    image: '/sensodyne-pronamel-kids-2-6-packaging.png',
    ageRange: '2-6 godina',
    description:
      'Pastu za zube Sensodyne Pronamel Kids napravili su stomatološki stručnjaci za decu starosti 0-6 godina Ona pomaže u sprečavanju karijesa, pruža dvostruko jaču odbrana gleđi za jake i zdrave zube. Ne sadrži šećer, sa prirodnim je Berry ukusom.',
    brand: 'sensodyne',
  },
];

const brandConfig = {
  aquafresh: {
    title: 'Aquafresh',
    colorClass: 'text-aquafresh',
    accentClass: 'border-aquafresh/20',
    shadowClass: 'hover:shadow-aquafresh/10',
  },
  sensodyne: {
    title: 'Sensodyne Pronamel',
    colorClass: 'text-sensodyne',
    accentClass: 'border-sensodyne/20',
    shadowClass: 'hover:shadow-sensodyne/10',
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

function ProductCard({ product }: { product: Product }) {
  const brand = brandConfig[product.brand];

  return (
    <motion.div
      variants={cardVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{
        scale: 1.03,
        boxShadow:
          product.brand === 'aquafresh'
            ? '0 25px 50px -12px rgba(42, 176, 229, 0.3)'
            : '0 25px 50px -12px rgba(0, 172, 186, 0.3)',
        borderColor:
          product.brand === 'aquafresh'
            ? 'rgba(42, 176, 229, 0.4)'
            : 'rgba(0, 172, 186, 0.4)',
        transition: { duration: 0.3 },
      }}
      className={cn(
        'group relative bg-card rounded-xl shadow-md transition-shadow duration-300',
        product.brand === 'aquafresh'
          ? 'shadow-[0_25px_50px_-12px_rgba(42,176,229,0.1)]'
          : 'shadow-[0_25px_50px_-12px_rgba(0,172,186,0.1)]'
      )}
    >
      <div>
        {/* Product Image */}
        <div className='relative aspect-3/2 mb-4 overflow-hidden rounded-lg bg-gray-50 mx-auto'>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className='object-contain p-2 transition-transform duration-300 group-hover:scale-110 xl:max-w-8/10 mx-auto'
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
          />
        </div>

        {/* Product Info */}
        <div className='space-y-2 px-6 pb-6'>
          <div className='lg:max-xl:h-14'>
            <h3
              className={
                'font-semibold text-lg group-hover:text-primary transition-colors'
              }
            >
              {product.name}
            </h3>
          </div>

          {product.ageRange && (
            <div
              className={cn(
                'inline-block px-3 py-1 rounded-full text-xs font-medium',
                'bg-muted text-muted-foreground'
              )}
            >
              {product.ageRange}
            </div>
          )}

          <p className='text-sm text-muted-foreground leading-relaxed mt-1'>
            {product.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductGrid() {
  return (
    <section className='py-16 px-4 bg-gradient-to-b from-white to-gray-200'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-aquafresh via-sensodyne to-aquafresh-light bg-clip-text text-transparent'>
            Naši proizvodi za decu
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Otkrijte našu kompletnu kolekciju proizvoda za oralnu negu dece,
            prilagođenih različitim uzrastima i potrebama.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className='space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
