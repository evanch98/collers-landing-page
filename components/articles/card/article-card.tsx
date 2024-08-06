import { Button } from '@/components/button/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { AiOutlineArrowRight } from 'react-icons/ai';

interface ArticleCardProps {
  title: string;
  desc: string;
  imgSrc: string;
  className?: string;
}

export const ArticleCard = ({
  title,
  desc,
  imgSrc,
  className,
}: ArticleCardProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg sm:w-80',
        className,
      )}
    >
      <div className="relative h-[220px] w-full">
        <Image
          src={imgSrc}
          alt="Cover Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex w-full flex-col gap-y-4 p-8">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-xl font-medium text-slate-900">{title}</h1>
          <p className="text-lg text-slate-500">{desc}</p>
        </div>
        <Button
          variant="card"
          size="none"
        >
          <div className="flex items-center gap-x-2">
            <p>Read Article</p>
            <AiOutlineArrowRight className="size-4" />
          </div>
        </Button>
      </div>
    </div>
  );
};
