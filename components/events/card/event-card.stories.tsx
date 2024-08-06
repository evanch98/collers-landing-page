import type { Meta, StoryObj } from '@storybook/react';
import { EventCard } from './event-card';
import { Kanit } from 'next/font/google';
import { events } from '@/content/text-content';

const font = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const meta: Meta<typeof EventCard> = {
  title: 'Components/Events/Card/EventCard',
  component: EventCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      component: 'EventCard',
    },
  },
};

export default meta;

type Story = StoryObj<typeof EventCard>;

export const Default: Story = {
  args: {
    className: font.className,
    name: events[0].name,
    location: events[0].location,
    imgSrc: events[0].imgPath,
  },
};
