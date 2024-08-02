import { cn } from '@/lib/utils';
import { IconType } from 'react-icons';

interface FeatureCardProps {
  icon: IconType;
  title: string;
  desc: string;
  className?: string;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  desc,
  className,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        'flex w-full max-w-72 flex-col items-center justify-center gap-y-4 lg:items-start lg:justify-start xl:max-w-sm',
        className,
      )}
    >
      <Icon className="size-10 text-amber sm:size-12 md:size-16" />
      <div className="flex flex-col items-center justify-center gap-y-2 lg:items-start lg:justify-start">
        <h1 className="text-center font-semibold text-slate-900 sm:text-lg md:text-xl lg:text-left">
          {title}
        </h1>
        <p className="text-center text-sm text-slate-500 sm:text-base md:text-lg lg:text-left">
          {desc}
        </p>
      </div>
    </div>
  );
};
