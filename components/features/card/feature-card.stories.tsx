import type { Meta, StoryObj } from '@storybook/react';
import { FeatureCard } from './feature-card';
import { Kanit } from 'next/font/google';
import { features } from '@/content/text-content';

const font = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const meta: Meta<typeof FeatureCard> = {
  title: 'Components/Features/Card/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'FeatureCard',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FeatureCard>;

export const ExclusiveDrops: Story = {
  args: {
    className: font.className,
    icon: features[0].icon,
    title: features[0].title,
    desc: features[0].desc,
  },
};

export const CustomDesigns: Story = {
  args: {
    className: font.className,
    icon: features[1].icon,
    title: features[1].title,
    desc: features[1].desc,
  },
};

export const Authenticity: Story = {
  args: {
    className: font.className,
    icon: features[2].icon,
    title: features[2].title,
    desc: features[2].desc,
  },
};
