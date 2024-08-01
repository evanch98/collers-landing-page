'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const Shoe = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { type: 'spring' } }}
      className="relative size-[230px] flex-shrink-0 rounded-[50px] bg-amber-400 sm:size-[302px] md:size-[367px]"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { type: 'spring', delay: 0.2 } }}
        className="absolute bottom-[10%]"
        style={{ left: '50%', translateX: '-50%' }}
      >
        <div className="relative h-60 w-[304px] sm:h-80 sm:w-[400px] md:h-[388px] md:w-[486px]">
          <Image
            src="/assets/shoe.png"
            alt="Nike Shoe"
            fill
            className="object-fill"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
