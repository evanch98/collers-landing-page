import type { Meta, StoryObj } from '@storybook/react';
import { Map } from './map';

const meta: Meta<typeof Map> = {
  title: 'Components/Number/Map',
  component: Map,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'Map',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Map>;

export const Default: Story = {};
