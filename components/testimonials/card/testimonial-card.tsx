import { cn } from '@/lib/utils';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  city: string;
  imgSrc: string;
  testimony: string;
  className?: string;
}

export const TestimonialCard = ({
  name,
  city,
  imgSrc,
  testimony,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        'flex h-[388px] w-[304px] flex-col justify-between rounded-2xl bg-white p-8 text-slate-900 shadow-lg sm:w-96',
        className,
      )}
    >
      <p className="text-lg sm:text-2xl">{testimony}</p>
      <div className="flex items-center gap-x-4">
        <div className="relative size-16 overflow-hidden rounded-full">
          <Image
            src={imgSrc}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="sm:text-lg">{name}</p>
          <p className="text-sm text-slate-500 sm:text-base">{city}</p>
        </div>
      </div>
    </div>
  );
};
