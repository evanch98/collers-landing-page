'use client';

import { Map } from '@/components/number/map/map';
import NumberTicker from '@/components/number/ticker/number-ticker';
import { ClientProvider } from '@/providers/client-provider';
import { motion } from 'framer-motion';

const backgroundVariants = {
  initial: {
    clipPath: 'inset(0px 0px 1000px 0px)',
  },
  animate: {
    clipPath: 'inset(0px 0px 0px 0px)',
    transition: { duration: 1.5, delayChildren: 1 },
  },
};

export const NumberSection = () => {
  return (
    <ClientProvider>
      <motion.section
        variants={backgroundVariants}
        initial="initial"
        whileInView="animate"
        className="flex w-full flex-col items-center justify-center overflow-hidden bg-amber"
        viewport={{ once: true }}
      >
        <div className="relative flex w-full items-center justify-center px-2 py-16 sm:px-4 sm:py-32 lg:px-8 2xl:px-16">
          <Map />
          <div className="absolute flex flex-col items-center justify-center gap-y-2">
            <NumberTicker value={11658467} />
            <p className="text-2xl font-semibold text-slate-50 md:text-4xl">
              Shoes Collected
            </p>
          </div>
        </div>
      </motion.section>
    </ClientProvider>
  );
};
