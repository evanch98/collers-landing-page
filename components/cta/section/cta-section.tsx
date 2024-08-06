'use client';

import { Button } from '@/components/button/button';
import { ClientProvider } from '@/providers/client-provider';
import { motion } from 'framer-motion';

export const CtaSection = () => {
  return (
    <ClientProvider>
      <motion.section
        initial={{ clipPath: 'inset(50% 0% 50% 0%)' }}
        whileInView={{
          clipPath: 'inset(0% 0% 0% 0%)',
          transition: { duration: 0.5 },
        }}
        className="flex w-full flex-col items-center justify-center bg-slate-900"
      >
        <div className="flex w-full max-w-screen-2xl flex-col items-center gap-y-8 px-2 py-8 sm:px-4 sm:py-32 lg:flex-row lg:justify-between lg:px-8 2xl:px-16">
          <h1 className="text-center text-3xl font-semibold text-slate-50 sm:text-4xl md:text-6xl lg:text-left">
            Collect More Sneakers Today
          </h1>
          <Button variant="secondary">
            <p className="text-sm sm:text-base md:text-lg">Sign Up Now</p>
          </Button>
        </div>
      </motion.section>
    </ClientProvider>
  );
};
