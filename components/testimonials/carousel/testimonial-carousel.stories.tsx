import type { Meta, StoryObj } from '@storybook/react';
import { TestimonialCarousel } from './testimonial-carousel';
import { testimonials } from '@/content/text-content';

const meta: Meta<typeof TestimonialCarousel> = {
  title: 'Components/Testimonials/Carousel/TestimonialCarousel',
  component: TestimonialCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'TestimonialCarousel',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TestimonialCarousel>;

export const Default: Story = {
  args: {
    testimonials,
  },
};
