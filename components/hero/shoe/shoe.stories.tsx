import type { Meta, StoryObj } from '@storybook/react';
import { Shoe } from './shoe';

const meta: Meta<typeof Shoe> = {
  title: 'Components/Hero/Shoe',
  component: Shoe,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'Shoe',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Shoe>;

export const Default: Story = {};
