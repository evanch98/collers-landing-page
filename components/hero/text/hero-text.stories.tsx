import type { Meta, StoryObj } from '@storybook/react';
import { HeroText } from './hero-text';
import { Kanit } from 'next/font/google';

const font = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const meta: Meta<typeof HeroText> = {
  title: 'Components/Hero/HeroText',
  component: HeroText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'HeroText',
    },
  },
};

export default meta;

type Story = StoryObj<typeof HeroText>;

export const Default: Story = {
  args: {
    className: font.className,
  },
};
