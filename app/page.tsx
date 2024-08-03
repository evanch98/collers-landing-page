import { BenefitsSection } from '@/components/benefits/section/benefits-section';
import { FeatureSection } from '@/components/features/section/feature-section';
import { HeroSection } from '@/components/hero/section/hero-section';
import { ProductsSection } from '@/components/products/section/products-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <ProductsSection />
      <BenefitsSection />
    </main>
  );
}
