import { Button } from '@/components/button/button';
import { benefits } from '@/content/text-content';
import Image from 'next/image';
import { AiOutlineCheck } from 'react-icons/ai';

export const BenefitsSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-screen-2xl flex-col items-center justify-center px-2 py-16 sm:px-4 sm:py-32 lg:px-8 2xl:px-16">
        <div className="flex flex-col-reverse items-center justify-center gap-8 rounded-2xl bg-white px-4 py-16 shadow-xl sm:px-8 lg:px-16 xl:flex-row xl:gap-16 2xl:gap-32">
          <div className="flex flex-col items-center justify-center gap-y-6 xl:items-start">
            <h1 className="text-center text-3xl font-semibold text-slate-900 sm:text-4xl md:text-6xl xl:text-left">
              {benefits.title}
            </h1>
            <div className="flex flex-col gap-y-2">
              {benefits.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-x-2"
                >
                  <AiOutlineCheck className="size-6 text-green-700" />
                  <p className="text-slate-900 sm:text-lg md:text-xl">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
            <Button>Sign Up Now</Button>
          </div>
          <div className="relative hidden h-[350px] w-[524px] overflow-hidden rounded-lg sm:block">
            <Image
              src={benefits.imgPath}
              alt="Decorative Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
