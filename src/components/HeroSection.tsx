import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative min-h-screen aspect-[963/712] w-full overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <Image
          src='/hero.jpg'
          alt='Back to school with a smile - children with healthy smiles ready for school'
          fill
          className='object-cover'
          priority
          sizes='100vw'
        />
      </div>
    </section>
  );
}
