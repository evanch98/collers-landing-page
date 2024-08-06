import { Button } from '@/components/button/button';
import { events } from '@/content/text-content';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { EventCard } from '@/components/events/card/event-card';

export const EventsSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-screen-2xl flex-col gap-y-8 px-2 py-8 sm:gap-y-16 sm:px-4 sm:py-32 lg:px-8 2xl:px-16">
        <div className="flex w-full flex-col items-center gap-y-4 sm:gap-y-8 lg:flex-row lg:justify-between">
          <h1 className="text-center text-3xl font-semibold text-slate-900 sm:text-4xl md:text-6xl lg:text-left">
            Amazing events
          </h1>
          <Button
            variant="card"
            size="none"
          >
            <div className="flex items-center gap-x-2">
              <p>Explore Events</p>
              <AiOutlineArrowRight className="size-4" />
            </div>
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {events.map((event, index) => (
            <EventCard
              key={index}
              name={event.name}
              location={event.location}
              imgSrc={event.imgPath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
