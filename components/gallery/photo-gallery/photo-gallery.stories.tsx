import type { Meta, StoryObj } from '@storybook/react';
import { PhotoGallery } from './photo-gallery';
import { gallery } from '@/content/text-content';

const meta: Meta<typeof PhotoGallery> = {
  title: 'Components/Gallery/PhotoGallery',
  component: PhotoGallery,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'PhotoGallery',
    },
  },
};

export default meta;

type Story = StoryObj<typeof PhotoGallery>;

export const JordanGallery: Story = {
  args: {
    imgPaths: gallery.jordan,
  },
};

export const NikeGallery: Story = {
  args: {
    imgPaths: gallery.nike,
  },
};

export const AdidasGallery: Story = {
  args: {
    imgPaths: gallery.adidas,
  },
};

export const PumaGallery: Story = {
  args: {
    imgPaths: gallery.puma,
  },
};

export const NewBalanceGallery: Story = {
  args: {
    imgPaths: gallery.newBalance,
  },
};

export const ReebokGallery: Story = {
  args: {
    imgPaths: gallery.reebok,
  },
};
