import type { Meta, StoryObj } from '@storybook/react';
import { TestimonialCard } from './testimonial-card';
import { Kanit } from 'next/font/google';
import { testimonials } from '@/content/text-content';

const font = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const meta: Meta<typeof TestimonialCard> = {
  title: 'Components/Testimonials/Card/TestimonialCard',
  component: TestimonialCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'TestimonialCard',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TestimonialCard>;

export const Default: Story = {
  args: {
    className: font.className,
    name: testimonials[0].name,
    city: testimonials[0].city,
    imgSrc: testimonials[0].imgPath,
    testimony: testimonials[0].testimony,
  },
};
