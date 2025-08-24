import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import PromotionSection from '@/components/PromotionSection';
import VideoSection from '@/components/VideoSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <HeroSection />
      <PromotionSection />
      <ProductGrid />
      <VideoSection />
      <Footer />
    </div>
  );
}
