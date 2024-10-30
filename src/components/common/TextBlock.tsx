'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import React from 'react';

import RightArrow from '../../assets/svgs/right-arrow.svg';

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

type SalesSectionProps = {
  mainHeading: string;
  subHeading: string;
  description?: string;
  ctaText: string;
  secondaryCtaText?: string;
  testimonial?: Testimonial;
  lottieUrl: string;
  isReversed?: boolean;
  route: string;
};

const TextBlock: React.FC<SalesSectionProps> = ({
  mainHeading,
  subHeading,
  description,
  ctaText,
  secondaryCtaText,
  testimonial,
  lottieUrl,
  route,
  isReversed = false,
}) => {
  const router = useRouter();

  const handleSecondaryCtaClick = () => {
    // You can add a different navigation or action here if needed
    router.push(route);
  };

  const handlePrimaryCtaClick = () => {
    router.push('/auth/register');
  };

  // const handleSecondaryCtaClick = () => {
  //   // You can add a different navigation or action here if needed
  //   router.push("/solutions/sales");
  // };

  return (
    <section className="lg:py-12">
      <div
        className={`mx-auto flex max-w-screen-xl p-4 ${
          isReversed
            ? 'flex-col-reverse gap-16 max-[400px]:gap-4 sm:gap-0 lg:flex-row-reverse'
            : 'flex-col-reverse gap-16 max-[400px]:gap-4 sm:gap-0 lg:flex-row'
        } flex- items-center justify-between`}
      >
        <div className="w-full lg:w-[50%]">
          <h1 className="mb-4 text-2xl font-bold sm:text-4xl">{mainHeading}</h1>
          <p className="mb-6 text-base text-gray-600 sm:text-lg">
            {subHeading}
          </p>
          <p className="mb-6 text-base text-gray-600 sm:text-lg">
            {description}
          </p>
          <div className="mb-8 flex flex-wrap justify-start gap-4">
            <button
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm text-white max-[420px]:text-xs"
              onClick={handlePrimaryCtaClick}
            >
              <p>{ctaText}</p>
              <Image
                className="max-[365px]:hidden"
                src={RightArrow}
                alt="Right Arrow"
              />
            </button>
            {secondaryCtaText && (
              <button
                className="rounded-full border border-gray-300 px-6 py-3 text-sm max-[341px]:text-xs"
                onClick={handleSecondaryCtaClick}
              >
                {secondaryCtaText}
              </button>
            )}
          </div>
          {testimonial
          && testimonial.quote
          && testimonial.author
          && testimonial.role && (
            <div className="testimonial mb-8 w-full max-w-lg text-left lg:w-full">
              <blockquote className="text-sm italic text-gray-700">
                &quot;
                {testimonial.quote}
                &quot;
              </blockquote>
              <cite className="text-xs not-italic text-gray-500">
                <span className="text-black">{testimonial.author}</span>
                {' '}
                -
                {' '}
                {testimonial.role}
              </cite>
            </div>
          )}
        </div>

        <div className="relative flex h-64 w-full items-center justify-end max-lg:justify-center max-[430px]:h-48 sm:h-96 md:pb-10 lg:w-[50%] lg:pb-0">
          <iframe
            src={lottieUrl}
            width={594}
            height={481}
            title="Lottie Animation"
          >
          </iframe>
          <Script
            src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
            strategy="lazyOnload"
            type="module"
          />
        </div>
      </div>
    </section>
  );
};

export default TextBlock;
