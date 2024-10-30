'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import React from 'react';

import Coin from '@/assets/svgs/line-chart.svg';
import Tick from '@/assets/svgs/tick.svg';

type SolutionSectionProps = {
  title: string;
  description: string;
  paragraphs?: string[];
  listItems?: string[];
  buttonPrimaryText: string;
  buttonSecondaryText: string;
  titleLineBreakIndices?: number[];
  descriptionLineBreakIndices?: number[];
  paragraphLineBreakIndices?: { [index: number]: number[] };
  lottieUrl?: string;
  flexDirection?: 'row' | 'row-reverse';
  gradientColors?: string[];
  route: string;
};

const defaultParagraphs: string[] = [];
const defaultListItems: string[] = [];
const defaultTitleLineBreakIndices: number[] = [];
const defaultDescriptionLineBreakIndices: number[] = [];
const defaultParagraphLineBreakIndices: { [index: number]: number[] } = {};

export default function SolutionSection({
  title = 'Never miss target company visits, again',
  description = 'ClientiDirect reveals the companies behind your anonymous traffic, without depending on conversions or form submissions.',
  paragraphs = defaultParagraphs,
  listItems = defaultListItems,
  buttonPrimaryText = 'Start Free Trial',
  buttonSecondaryText = 'Learn More',
  titleLineBreakIndices = defaultTitleLineBreakIndices,
  descriptionLineBreakIndices = defaultDescriptionLineBreakIndices,
  paragraphLineBreakIndices = defaultParagraphLineBreakIndices,
  lottieUrl = '',
  flexDirection = 'row',
  route,
}: SolutionSectionProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/auth/register');
  };

  const handleClicktoSecondary = () => {
    router.push(route);
  };

  const formatTextWithLineBreaks = (
    text: string,
    lineBreakIndices: number[],
  ) => {
    const words = text.split(' ');
    return words.map((word, index) => (
      <React.Fragment key={index}>
        {word}
        {' '}
        {lineBreakIndices.includes(index + 1) && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="relative mt-0 text-black max-2xl:px-4 max-lg:px-0 sm:mt-20 md:mt-10 lg:mt-20">
      <div
        className={`mx-auto flex max-w-screen-xl flex-col ${
          flexDirection === 'row-reverse'
            ? 'lg:flex-row-reverse'
            : 'lg:flex-row'
        } items-center md:gap-[64px]`}
      >
        <div className="px-4 lg:w-1/2">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            {formatTextWithLineBreaks(title, titleLineBreakIndices)}
          </h1>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            {formatTextWithLineBreaks(description, descriptionLineBreakIndices)}
          </p>

          {paragraphs.length > 0
          && paragraphs.map((para, index) => (
            <p
              key={index}
              className="mt-4 text-base text-gray-600 sm:text-lg"
            >
              {formatTextWithLineBreaks(
                para,
                paragraphLineBreakIndices[index] || [],
              )}
            </p>
          ))}

          {listItems.length > 0 && (
            <ul className="mt-4 list-disc space-y-2 pl-1 text-base text-gray-600 sm:text-lg">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Image
                    src={Tick}
                    alt="Tick Icon"
                    className="pt-1"
                    width={20}
                    height={20}
                  />
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            <button
              onClick={handleClick}
              className="flex items-center gap-px rounded-full bg-black px-4 py-2 text-sm font-medium text-white max-lg:w-10/12 max-lg:justify-center max-md:w-7/12 max-sm:w-full max-sm:text-xs sm:text-base"
            >
              {buttonPrimaryText}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M3.33301 10.6196H16.6663M16.6663 10.6196L11.6663 5.61963M16.6663 10.6196L11.6663 15.6196"
                    stroke="currentColor"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                  </path>
                </svg>
              </span>
            </button>

            <button
              className="flex items-center gap-[2px] rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black max-lg:w-10/12 max-lg:justify-center max-lg:gap-2 max-md:w-7/12 max-sm:w-full sm:text-base"
              onClick={handleClicktoSecondary}
            >
              <Image src={Coin} width={20} height={20} alt="coin" />
              {buttonSecondaryText}
            </button>
          </div>
        </div>

        <div className="relative mt-10 md:mt-0 md:w-1/2">
          <div className="relative z-10 flex items-center justify-center">
            {lottieUrl && (
              <div className="max-lg:flex max-lg:justify-center">
                <iframe
                  className="h-[240px] w-[370px] max-[380px]:w-auto sm:h-[323px] sm:w-[451px]"
                  src={lottieUrl}
                  title="Lottie Animation"
                >
                </iframe>
                <Script
                  src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
                  strategy="lazyOnload"
                  type="module"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
