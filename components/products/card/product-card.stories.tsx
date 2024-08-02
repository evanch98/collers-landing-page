import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './product-card';
import { Kanit } from 'next/font/google';
import { products } from '@/content/text-content';

const font = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const meta: Meta<typeof ProductCard> = {
  title: 'Components/Products/Card/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'ProductCard',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const JordanOrange: Story = {
  args: {
    className: font.className,
    imgSrc: products[0].imgPath,
    title: products[0].title,
    desc: products[0].desc,
  },
};

export const Yeezy: Story = {
  args: {
    className: font.className,
    imgSrc: products[1].imgPath,
    title: products[1].title,
    desc: products[1].desc,
  },
};

export const JordanBlue: Story = {
  args: {
    className: font.className,
    imgSrc: products[2].imgPath,
    title: products[2].title,
    desc: products[2].desc,
  },
};
