'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const dots = [
  { x: '40%', y: '20%' },
  { x: '30%', y: '10%' },
  { x: '15%', y: '30%' },
  { x: '17%', y: '33%' },
  { x: '18%', y: '27%' },
  { x: '18%', y: '40%' },
  { x: '15%', y: '39%' },
  { x: '24%', y: '54%' },
  { x: '13%', y: '50%' },
  { x: '15%', y: '57%' },
  { x: '18%', y: '17%' },
  { x: '16%', y: '27%' },
  { x: '15%', y: '47%' },
  { x: '51%', y: '16%' },
  { x: '67%', y: '50%' },
  { x: '66%', y: '47%' },
  { x: '74%', y: '66%' },
  { x: '73%', y: '62%' },
  { x: '73%', y: '55%' },
  { x: '73%', y: '45%' },
  { x: '73%', y: '40%' },
  { x: '47%', y: '62%' },
  { x: '47%', y: '66%' },
  { x: '50%', y: '61%' },
  { x: '44%', y: '43%' },
  { x: '54%', y: '53%' },
  { x: '50%', y: '50%' },
  { x: '51%', y: '48%' },
  { x: '16%', y: '54%' },
  { x: '18%', y: '51%' },
  { x: '80%', y: '80%' },
  { x: '82%', y: '79%' },
  { x: '86%', y: '77%' },
  { x: '30%', y: '82%' },
  { x: '29%', y: '76%' },
  { x: '32%', y: '75%' },
  { x: '52%', y: '76%' },
  { x: '53%', y: '70%' },
  { x: '53%', y: '36%' },
  { x: '54%', y: '40%' },
];

interface DotProps {
  x: string;
  y: string;
  delay: number;
}

const Dot = ({ x, y, delay }: DotProps) => (
  <motion.div
    className="absolute h-2.5 w-2.5 rounded-full bg-green-500"
    style={{ top: y, left: x }}
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.2, delay: delay, type: 'spring' }}
    viewport={{ once: true }}
  />
);

export const Map = () => {
  return (
    <div className="relative">
      <div className="relative h-[633px] w-[1049px]">
        <Image
          src="/assets/decorations/map.svg"
          alt="World Map"
          fill
          className="object-cover"
        />
      </div>
      {dots.map((dot, index) => (
        <Dot
          key={index}
          x={dot.x}
          y={dot.y}
          delay={0.05 * index}
        />
      ))}
    </div>
  );
};
