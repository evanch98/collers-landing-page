'use client';

import { TestimonialCard } from '@/components/testimonials/card/testimonial-card';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export interface Testimonial {
  id: number;
  name: string;
  city: string;
  testimony: string;
  imgPath: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel = ({
  testimonials,
}: TestimonialCarouselProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const loopAnimation = async () => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await controls.start({
          x: '-100%',
          transition: {
            duration: 20,
            ease: 'linear',
          },
        });
        controls.set({ x: '0%' });
      }
    };

    loopAnimation();
  }, [controls]);

  // Duplicating the testimonials list to create the seamless loop
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <div className="absolute bottom-2 h-[420px] w-full overflow-x-hidden overflow-y-visible sm:bottom-16">
      <motion.div
        className="flex w-full gap-x-6"
        animate={controls}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            city={testimonial.city}
            imgSrc={testimonial.imgPath}
            testimony={testimonial.testimony}
            className="flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
};
