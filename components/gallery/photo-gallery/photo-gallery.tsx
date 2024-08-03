'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PhotoGalleryProps {
  imgPaths: string[];
}

export const PhotoGallery = ({ imgPaths }: PhotoGalleryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {imgPaths.map((imgPath, index) => (
        <motion.div
          key={index}
          className="relative h-44 w-64 md:h-[220px] md:w-80"
        >
          <Image
            src={imgPath}
            fill
            alt="Shoes"
            className="object-cover"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
