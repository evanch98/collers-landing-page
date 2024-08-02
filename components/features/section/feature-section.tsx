'use client';

import { FeatureCard } from '@/components/features/card/feature-card';
import { features } from '@/content/text-content';
import { ClientProvider } from '@/providers/client-provider';
import { motion } from 'framer-motion';

const backgroundVariants = {
  initial: {
    clipPath: 'inset(455px 0px 0px 0px)',
  },
  animate: {
    clipPath: 'inset(0px 0px 0px 0px)',
    transition: { duration: 0.5, delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

const cardVariants = {
  initial: {
    y: '200%',
  },
  animate: {
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const FeatureSection = () => {
  return (
    <ClientProvider>
      <motion.section
        variants={backgroundVariants}
        initial="initial"
        whileInView="animate"
        className="flex w-full flex-col items-center justify-center overflow-hidden bg-amber-100"
        viewport={{ once: true }}
      >
        <div className="flex w-full max-w-screen-2xl flex-wrap items-center justify-center gap-8 px-2 py-16 sm:px-4 sm:py-32 lg:justify-between lg:px-8 2xl:px-16">
          {features.map((feature, index) => (
            <motion.div
              variants={cardVariants}
              key={index}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </ClientProvider>
  );
};
