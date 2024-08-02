'use client';

import { Button } from '@/components/button/button';
import { Shoe } from '@/components/hero/shoe/shoe';
import { HeroText } from '@/components/hero/text/hero-text';
import { ClientProvider } from '@/providers/client-provider';

export const HeroSection = () => {
  return (
    <ClientProvider>
      <section className="flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <div className="flex h-full w-full max-w-screen-2xl flex-col items-center justify-center gap-8 px-2 sm:px-4 lg:flex-row lg:px-8 2xl:gap-32 2xl:px-16">
          <div className="flex flex-col items-center justify-center gap-y-8 lg:items-start lg:justify-start">
            <HeroText />
            <div className="flex gap-x-4">
              <Button>Get Started</Button>
              <Button variant="ghost">Explore</Button>
            </div>
          </div>
          <div className="flex h-[261px] w-[304px] flex-shrink-0 items-center justify-center sm:h-[348px] sm:w-[400px] md:h-[423px] md:w-[486px]">
            <Shoe />
          </div>
        </div>
      </section>
    </ClientProvider>
  );
};
