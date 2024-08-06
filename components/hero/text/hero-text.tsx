import { HeroContent } from '@/content/text-content';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, delayChildren: 0.1, staggerChildren: 0.2 },
  },
};

const titleVariants = {
  initial: {
    y: '-100%',
  },
  animate: {
    y: 0,
    transition: { duration: 0.3 },
  },
};

const descVariants = {
  initial: {
    y: '100%',
  },
  animate: {
    y: 0,
    transition: { duration: 0.3 },
  },
};

interface HeroTextProps {
  className?: string;
}

export const HeroText = ({ className }: HeroTextProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      className={cn(
        'flex w-full flex-col gap-y-2 overflow-hidden text-center lg:text-left',
        className,
      )}
      viewport={{ once: true }}
    >
      <motion.h1
        variants={titleVariants}
        className="text-5xl font-semibold text-slate-900 sm:text-6xl md:text-7xl"
      >
        {HeroContent.title}
      </motion.h1>
      <motion.p
        variants={descVariants}
        className="text-sm text-slate-500 sm:text-base md:text-lg"
      >
        {HeroContent.description}
      </motion.p>
    </motion.div>
  );
};
