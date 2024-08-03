import { GalleryMenu } from '@/components/gallery/gallery-menu/gallery-menu';
import { gallerySection } from '@/content/text-content';
import Image from 'next/image';

export const GallerySection = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <div className="z-20 flex w-full max-w-screen-2xl flex-col gap-y-8 px-2 py-16 sm:gap-y-16 sm:px-4 sm:py-32 lg:px-8 2xl:px-16">
        <div className="flex w-full flex-col items-center justify-center gap-y-2 text-center lg:items-start lg:text-left">
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl md:text-6xl">
            {gallerySection.title}
          </h1>
          <p className="max-w-3xl text-sm text-slate-500 sm:text-base md:text-lg">
            {gallerySection.desc}
          </p>
        </div>
        <GalleryMenu />
      </div>
      <div className="3xl:h-[512px] absolute bottom-0 left-0 z-10 h-[372px] w-full min-w-[1440px]">
        <Image
          src="/assets/decorations/brown-wave.svg"
          alt="Wave decoration"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};
