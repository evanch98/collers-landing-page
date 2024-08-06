import { Button } from '@/components/button/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { AiOutlineArrowRight } from 'react-icons/ai';

interface EventCardProps {
  name: string;
  location: string;
  imgSrc: string;
  className?: string;
}

export const EventCard = ({
  name,
  location,
  imgSrc,
  className,
}: EventCardProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col gap-y-6 rounded-2xl bg-white p-8 shadow-lg sm:w-80',
        className,
      )}
    >
      <div className="flex flex-col gap-y-0.5">
        <p className="text-sm text-slate-500">{location}</p>
        <h1 className="text-xl font-medium text-slate-900">{name}</h1>
      </div>
      <div className="relative h-[220px] w-full overflow-hidden rounded-2xl">
        <Image
          src={imgSrc}
          fill
          alt="Cover Image"
          className="object-cover"
        />
      </div>
      <Button
        variant="card"
        size="none"
      >
        <div className="flex items-center gap-x-2">
          <p>Buy Ticket</p>
          <AiOutlineArrowRight className="size-4" />
        </div>
      </Button>
    </div>
  );
};
