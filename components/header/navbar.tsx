'use client';

import { Button } from '@/components/button/button';
import { cn } from '@/lib/utils';
import { ClientProvider } from '@/providers/client-provider';
import { useScroll, useMotionValueEvent, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const lineVariants = {
  open: {
    top: '50%',
    rotate: [0, 45],
    transition: { duration: 0.3 },
  },
  close: {
    top: '25%',
    rotate: [0, 0],
    transition: { duration: 0.3 },
  },
};

const middleLineVariants = {
  open: { scale: 0, transition: { duration: 0.3 } },
  close: { scale: 1, transition: { duration: 0.3 } },
};

const bottomLineVariants = {
  open: {
    top: '50%',
    rotate: [0, -45],
    transition: { duration: 0.3 },
  },
  close: {
    top: '75%',
    rotate: [0, 0],
    transition: { duration: 0.3 },
  },
};

const sheetVariants = {
  open: {
    x: 0,
    transition: { duration: 0.3 },
  },
  close: {
    x: '100%',
    transition: { duration: 0.3 },
  },
};

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous! && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <ClientProvider>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={cn(
          'fixed top-0 z-50 flex w-full items-center justify-center',
          scrolled && 'bg-amber-50 shadow-md',
        )}
      >
        <div className="flex w-full max-w-screen-2xl items-center justify-between px-2 py-4 sm:px-4 lg:px-8 lg:py-6 2xl:px-16">
          <Link
            href="/"
            className="text-2xl font-semibold text-amber md:text-3xl"
          >
            Collers
          </Link>
          <div className="flex items-center gap-x-8">
            <div className="hidden items-center gap-x-6 font-medium text-amber lg:flex">
              <p className="cursor-pointer hover:text-amber/65">Products</p>
              <p className="cursor-pointer hover:text-amber/65">Solutions</p>
              <p className="cursor-pointer hover:text-amber/65">Pricing</p>
              <p className="cursor-pointer hover:text-amber/65">Resources</p>
            </div>
            <div className="hidden items-center gap-x-2 sm:flex">
              <Button variant="ghost">Log In</Button>
              <Button>Sign Up</Button>
            </div>
            <Button
              variant="card"
              size="none"
              onClick={toggleMenu}
              className="relative z-50 h-6 w-6 lg:hidden"
            >
              <motion.span
                className="absolute left-0 top-1/4 h-0.5 w-full bg-amber"
                variants={lineVariants}
                animate={isOpen ? 'open' : 'close'}
              />
              <motion.span
                className="absolute left-0 top-1/2 h-0.5 w-full bg-amber"
                variants={middleLineVariants}
                animate={isOpen ? 'open' : 'close'}
                style={{ originX: 0 }}
              />
              <motion.span
                className="absolute left-0 top-3/4 h-0.5 w-full bg-amber"
                variants={bottomLineVariants}
                animate={isOpen ? 'open' : 'close'}
              />
            </Button>
          </div>
        </div>
        <motion.div
          variants={sheetVariants}
          animate={isOpen ? 'open' : 'close'}
          className="absolute inset-0 flex h-screen w-full flex-col items-center gap-y-6 bg-amber-100 pt-60 text-2xl text-amber lg:hidden"
        >
          <p className="cursor-pointer hover:text-amber/65">Products</p>
          <p className="cursor-pointer hover:text-amber/65">Solutions</p>
          <p className="cursor-pointer hover:text-amber/65">Pricing</p>
          <p className="cursor-pointer hover:text-amber/65">Resources</p>
          <div className="flex flex-col-reverse items-center gap-2 sm:flex-row">
            <Button variant="ghost">Log In</Button>
            <Button>Sign Up</Button>
          </div>
        </motion.div>
      </motion.nav>
    </ClientProvider>
  );
};
