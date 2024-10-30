'use client';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import RightArrow from '../../assets/svgs/right-arrow.svg';

type ContentList = {
  image: StaticImageData;
  title: string;
  content: string;
};

type CardsProps = {
  tag: string;
  heading: string;
  description: string;
  ctaButton: string;
  contentList: ContentList[];
};

const MarketingSection: React.FC<CardsProps> = ({
  tag,
  heading,
  description,
  ctaButton,
  contentList,
}) => {
  return (
    <div className="relative bg-[#132137]">
      <div className="relative z-10 mx-auto max-w-screen-xl px-6">
        <div className="flex flex-col items-center py-24">
          <div className="mb-3 rounded-2xl border border-[#ffffff4d] bg-[#ffffff4d] px-2 py-[2px]">
            <p className="text-xs font-semibold text-white">{tag}</p>
          </div>
          <h1 className="text-center text-4xl font-bold tracking-[-1px] text-white">
            {heading}
          </h1>

          <p className="my-5 max-w-[790px] text-center text-base leading-[28px] text-[#7d89b0] sm:text-lg">
            {description}
          </p>

          <Link
            href="/auth/register"
            className="flex cursor-pointer items-center whitespace-nowrap rounded-full border border-[#0000] bg-[#ffffff1a] px-3.5 py-2 backdrop-blur"
          >
            <button className="mr-2 flex cursor-pointer items-center gap-3 text-sm font-semibold text-white">
              <p>{ctaButton}</p>
              <Image src={RightArrow} alt="Right Arrow" />
            </button>
          </Link>

          <div className="mt-[72px] grid grid-cols-1 gap-8 md:grid-cols-3">
            {contentList.map((content, index) => (
              <div
                key={index}
                className="z-50 w-full rounded-2xl bg-[#101828] pt-4 text-white backdrop-blur-xl lg:max-w-[384px]"
              >
                <Image
                  src={content.image}
                  alt={`Image ${index + 1}`}
                  className="w-full max-md:h-[184px] lg:h-[183px]"
                  width={400}
                  height={400}
                />
                <div className="p-3 lg:p-6">
                  <h3 className="pl-3 text-base tracking-tight sm:text-[18px]">
                    {content.title}
                  </h3>
                  <p className="mt-2 pl-3 text-left text-[14px] tracking-tight text-[#98a2b3] lg:max-w-[336px]">
                    {content.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="inset-0 -z-10 overflow-hidden">
        <div className="hero-noise-png"></div>
        <Image
          src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640b347a17d12b9b0b6ceb9c_home4.svg"
          loading="lazy"
          alt=""
          width={760}
          height={792}
          className="absolute bottom-auto left-0 right-auto top-0"
        />
        <Image
          src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640b34ff65cb72310d52dd91_home5.svg"
          loading="lazy"
          alt=""
          width={675}
          height={472}
          className="absolute inset-x-0 bottom-0 top-auto"
        />
        <Image
          src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640b39e63c1356960cb2cbc2_home6.svg"
          loading="lazy"
          alt=""
          width={654}
          height={393}
          className="absolute bottom-auto top-0 lg:left-1/4"
        />
        <Image
          src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/640b39e6e5569e48875a414c_home7.svg"
          loading="lazy"
          alt=""
          width={701}
          height={826}
          className="absolute inset-y-0 left-auto right-0"
        />
      </div>
    </div>
  );
};

export default MarketingSection;
