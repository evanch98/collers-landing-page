import { footerContent } from '@/content/text-content';
import Image from 'next/image';
import { SiFacebook, SiInstagram, SiX, SiYoutube } from 'react-icons/si';

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center text-slate-900">
      <div className="flex w-full max-w-screen-2xl flex-col gap-y-6 px-2 py-8 sm:gap-y-8 sm:px-4 sm:py-16 lg:px-8 2xl:px-16">
        <h1 className="text-2xl sm:text-4xl">Collers. Access the Now.</h1>
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {footerContent.map((content, index) => (
            <div
              key={index}
              className="flex w-48 flex-col gap-y-1"
            >
              <h2 className="text-sm font-semibold">{content.title}</h2>
              {content.links.map((link, index) => (
                <p
                  key={index}
                  className="cursor-pointer text-xs font-light transition hover:underline"
                >
                  {link}
                </p>
              ))}
            </div>
          ))}
          <div className="flex w-48 flex-col gap-y-4">
            <h2 className="text-sm font-semibold">Get the App</h2>
            <div className="flex flex-col gap-y-2">
              <Image
                src="/assets/app-store.svg"
                alt="App Store"
                width={119.66}
                height={40}
                className="cursor-pointer"
              />
              <Image
                src="/assets/play-store.svg"
                alt="App Store"
                width={135}
                height={40}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-screen-2xl flex-col items-center gap-8 border-t border-slate-200 px-2 py-6 sm:px-4 md:flex-row md:justify-between lg:px-8 2xl:px-16">
        <p className="text-sm font-light">
          ©2024 Collers. All Rights Reserved.
        </p>
        <div className="flex items-center gap-x-4">
          <SiX className="size-4 cursor-pointer" />
          <SiFacebook className="size-4 cursor-pointer" />
          <SiInstagram className="size-4 cursor-pointer" />
          <SiYoutube className="size-4 cursor-pointer" />
        </div>
        <div className="flex items-center gap-x-6">
          <p className="cursor-pointer text-xs font-light transition hover:underline">
            Terms
          </p>
          <p className="cursor-pointer text-xs font-light transition hover:underline">
            Privacy
          </p>
          <p className="cursor-pointer text-xs font-light transition hover:underline">
            Your Privacy Choices
          </p>
        </div>
      </div>
    </footer>
  );
};
