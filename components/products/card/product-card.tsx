import { Button } from '@/components/button/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai';

interface ProductCardProps {
  imgSrc: string;
  title: string;
  desc: string;
  className?: string;
}

export const ProductCard = ({
  imgSrc,
  title,
  desc,
  className,
}: ProductCardProps) => {
  return (
    <div
      className={cn(
        'flex w-full max-w-sm flex-col overflow-hidden rounded-lg shadow-light',
        className,
      )}
    >
      <div className="relative h-[220px] w-full">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-8 bg-slate-900 p-8">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-lg font-medium text-slate-50 sm:text-xl md:text-2xl">
            {title}
          </h1>
          <p className="text-sm text-slate-400 sm:text-base md:text-lg">
            {desc}
          </p>
        </div>
        <Button
          variant="secondary"
          size="full"
        >
          <div className="flex items-center justify-center gap-x-4">
            <AiOutlineShoppingCart className="size-4 sm:size-6" />
            Buy Now
          </div>
        </Button>
      </div>
    </div>
  );
};
