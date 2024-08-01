import type { Meta, StoryObj } from '@storybook/react';
import { Kanit } from 'next/font/google';
import { Button } from './button';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const font = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'Button',
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      description: 'Button variants',
      options: ['default', 'ghost', 'secondary', 'card'],
    },
    size: {
      control: 'select',
      description: 'Button sizes',
      options: ['default', 'full', 'none'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Sign Up',
    className: font.className,
  },
};

export const Ghost: Story = {
  args: {
    children: 'Log In',
    className: font.className,
    variant: 'ghost',
  },
};

export const Secondary: Story = {
  args: {
    children: (
      <div className="flex w-full items-center gap-x-4">
        <AiOutlineShoppingCart className="size-4 sm:size-6" />
        Buy Now
      </div>
    ),
    className: font.className,
    variant: 'secondary',
  },
};
