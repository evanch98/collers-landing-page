import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-xs sm:text-sm md:text-base font-medium transition duration-300 ease-in',
  {
    variants: {
      variant: {
        default:
          'border-2 border-amber text-amber hover:bg-amber hover:text-white',
        ghost: 'bg-transparent hover:bg-amber-100 text-amber',
        secondary:
          'border-2 border-slate-50 text-slate-50 hover:bg-slate-50 hover:text-slate',
        card: 'text-amber hover:text-amber/60',
      },
      size: {
        default: 'px-6 py-3 w-fit',
        full: 'py-3 px-6 w-full',
        none: 'p-0 w-fit',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
