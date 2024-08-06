import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCard } from './article-card';
import { Kanit } from 'next/font/google';
import { articles } from '@/content/text-content';

const font = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const meta: Meta<typeof ArticleCard> = {
  title: 'Components/Articles/Card/ArticleCard',
  component: ArticleCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'ArticleCard',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleCard>;

export const Default: Story = {
  args: {
    className: font.className,
    title: articles[0].title,
    desc: articles[0].desc,
    imgSrc: articles[0].imgPath,
  },
};
