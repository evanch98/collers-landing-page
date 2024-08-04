import { BenefitsSection } from '@/components/benefits/section/benefits-section';
import { FeatureSection } from '@/components/features/section/feature-section';
import { GallerySection } from '@/components/gallery/section/gallery-section';
import { HeroSection } from '@/components/hero/section/hero-section';
import { NumberSection } from '@/components/number/section/number-section';
import { ProductsSection } from '@/components/products/section/products-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <ProductsSection />
      <BenefitsSection />
      <GallerySection />
      <NumberSection />
    </main>
  );
}
