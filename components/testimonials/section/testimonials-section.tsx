import { TestimonialCarousel } from '@/components/testimonials/carousel/testimonial-carousel';
import { testimonials } from '@/content/text-content';

export const TestimonialsSection = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <div className="flex w-full max-w-screen-2xl flex-col gap-y-8 px-2 py-16 sm:gap-y-16 sm:px-4 sm:py-32 lg:px-8 2xl:px-16">
        <h1 className="w-full text-center text-3xl font-semibold sm:text-4xl md:text-6xl lg:text-left">
          Because they love us
        </h1>
        <div className="h-[420px] w-full bg-amber-200 sm:h-[452px]" />
      </div>
      <TestimonialCarousel testimonials={testimonials} />
    </section>
  );
};
