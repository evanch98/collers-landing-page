'use client';

import { Button } from '@/components/button/button';
import { ProductCard } from '@/components/products/card/product-card';
import { products } from '@/content/text-content';
import { ClientProvider } from '@/providers/client-provider';

export const ProductsSection = () => {
  return (
    <ClientProvider>
      <section className="flex w-full flex-col items-center justify-center bg-slate-900">
        <div className="flex w-full max-w-screen-2xl flex-col gap-y-8 px-2 py-16 sm:gap-y-16 sm:px-4 sm:py-32 lg:px-8 2xl:px-16">
          <div className="flex w-full flex-col items-center justify-center gap-y-4 sm:gap-y-8 lg:flex-row lg:justify-between">
            <h1 className="text-3xl font-semibold text-slate-50 sm:text-4xl md:text-6xl">
              The best for the best
            </h1>
            <Button variant="secondary">Explore Collections</Button>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-4 sm:gap-8 xl:justify-between">
            {products.map((product, index) => (
              <div key={index}>
                <ProductCard
                  imgSrc={product.imgPath}
                  title={product.title}
                  desc={product.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </ClientProvider>
  );
};
