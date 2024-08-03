'use client';

import { PhotoGallery } from '@/components/gallery/photo-gallery/photo-gallery';
import { gallery, galleryBrands } from '@/content/text-content';
import { cn } from '@/lib/utils';
import { ClientProvider } from '@/providers/client-provider';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const GalleryMenu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentBrand, setCurrentBrand] = useState<
    'jordan' | 'nike' | 'adidas' | 'puma' | 'newBalance' | 'reebok'
  >('jordan');

  const handleOnClick = (index: number) => {
    setCurrentIndex(index);
    switch (index) {
      case 0:
        setCurrentBrand('jordan');
        break;
      case 1:
        setCurrentBrand('nike');
        break;
      case 2:
        setCurrentBrand('adidas');
        break;
      case 3:
        setCurrentBrand('puma');
        break;
      case 4:
        setCurrentBrand('newBalance');
        break;
      case 5:
        setCurrentBrand('reebok');
        break;
      default:
        setCurrentBrand('jordan');
        break;
    }
  };

  return (
    <ClientProvider>
      <div className="flex w-full flex-col items-center gap-y-8 text-slate-900 sm:gap-y-16 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex w-full gap-4 overflow-y-visible overflow-x-scroll xl:max-w-52 xl:flex-col xl:overflow-visible">
          {galleryBrands.map((brand, index) => (
            <button
              key={index}
              onClick={() => handleOnClick(index)}
              className={cn(
                'flex flex-shrink-0 items-center justify-center gap-4 rounded-lg p-4 xl:w-52 xl:justify-start',
                currentIndex === index && 'bg-white shadow-md',
              )}
            >
              <brand.icon className="size-6" />
              <p className="sm:text-lg md:text-xl">{brand.title}</p>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <PhotoGallery
            key={currentBrand}
            imgPaths={gallery[currentBrand]}
          />
        </AnimatePresence>
      </div>
    </ClientProvider>
  );
};
