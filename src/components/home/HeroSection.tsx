'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import RightArrow from '../../assets/svgs/right-arrow.svg';
import Button from '../common/Button';

type CardData = {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  gradient: '#926ae5' | '#3189e3' | '#44cfe6';
};

const cardsData: CardData[] = [
  {
    title: 'Pentru vânzări',
    description:
      'Descoperiți, calificați și prioritizați clienții potențiali cu intenții ridicate cu notificări în timp real și învingeți concurența până la urmă.',
    linkText: 'Mai multe vânzări',
    linkUrl: '/solutions/sales',
    gradient: '#926ae5',
  },
  {
    title: 'Pentru Marketing',
    description:
      'Concentrați-vă pe conturi, nu pe indivizi. Vedeți ce vă implică publicul țintă, personalizați călătoriile pe site și îmbunătățiți redirecționarea.',
    linkText: 'Generați mai multe conversii',
    linkUrl: '/solutions/marketing',
    gradient: '#3189e3',
  },
  {
    title: 'Pentru Agenții',
    description:
      'Obțineți informații mai devreme, adăugați fluxuri de venituri și generați clienți potențiali mai calificați pentru clienții dvs. cu soluția noastră cu etichetă albă.',
    linkText: 'Creșteți rentabilitatea investiției clientului',
    linkUrl: '/solutions/agency',
    gradient: '#44cfe6',
  },
];

type FeatureContent = {
  imageSrc: string;
  description: string;
};
type HeroSectionProps = {
  headingText?: string;
  headingLineBreaks?: number[];
  paragraphText?: string;
  paragraphLineBreaks?: number[];
  maxWidth?: string;
  bgColor?: string;
  featureContents?: FeatureContent[];
  buttonVisible?: boolean;
};

const gradientColorMap: Record<string, 'purple' | 'blue' | 'aqua'> = {
  '#926ae5': 'purple',
  '#3189e3': 'blue',
  '#44cfe6': 'aqua',
};

const gradientClasses: Record<'purple' | 'blue' | 'aqua', string> = {
  purple: 'bg-gradient-to-r from-[#7f56d9] to-[#9e77ed]',
  blue: 'bg-gradient-to-r from-[#41a7f0] to-[#1b61d1]',
  aqua: 'bg-gradient-to-r from-[#54edf0] to-[#30a9d9]',
};

const defaultFeatureContents: FeatureContent[] = [];

export default function HeroSection({
  headingText = 'Know who’s on your website, drive more revenue.',
  paragraphText = 'ClientiDirect empowers B2B teams to understand, engage, and convert anonymous website visitors into potential leads using cutting-edge identification technology, real-time visitor tracking, and data-driven audience insights.',
  maxWidth = '900px',
  bgColor = '#070b18',
  featureContents = defaultFeatureContents,
  buttonVisible = true,
}: HeroSectionProps) {
  const formatTextWithLineBreaks = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isPricingPage = pathname === '/pricing';

  return (
    <div className="relative mt-[-88px] overflow-hidden">
      <div className="relative">
        <div
          style={{ backgroundColor: bgColor }}
          className={`relative z-10 w-full pt-[140px] sm:pt-[200px] 2xl:pt-28 ${
            isHomePage
              ? 'pb-40 max-sm:pb-20'
              : isPricingPage
                ? 'pb-[140px]'
                : 'pb-[58px]'
          }`}
        >
          <Image
            src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6411ddd013532dd1d71d5a98_Polygon%202.svg"
            alt="Hero Gradient 2"
            width={500}
            height={500}
            priority
            className="absolute top-8 z-20 sm:left-1/2"
          />

          <Image
            src="https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6411ddc3f37f421575d00130_Polygon%201.svg"
            alt="Hero Gradient 1"
            width={650}
            height={500}
            className="absolute top-0 z-20 sm:right-[35%]"
            priority
          />

          <div
            style={{ maxWidth }}
            className="mx-auto max-lg:px-10 max-md:px-4 2xl:pt-24"
          >
            <h1 className="mx-auto max-w-[550px] text-center text-[30px] font-semibold leading-[40px] text-white max-sm:max-w-[459px] sm:text-[48px] sm:leading-[60px] lg:max-w-full lg:text-[72px] lg:leading-[92px]">
              {formatTextWithLineBreaks(headingText)}
            </h1>
            <p className="max-w-0px] mx-auto pt-2 text-center text-lg leading-[1.7em] text-[#9499a1]">
              {formatTextWithLineBreaks(paragraphText)}
            </p>
            {buttonVisible && (
              <div className="flex flex-col items-center gap-2 pt-8">
                <Button
                  bgColor="bg-customBlue"
                  textColor="text-white"
                  borderRadius="rounded-[100px]"
                  showChevron={isHomePage}
                  chevronColor="text-white"
                  buttonText="Încearcă ClientiDirect gratuit"
                />
                <span className="text-[#667085]">
                  Nu este necesar un card de credit
                </span>
              </div>
            )}
          </div>

          {featureContents.length >= 1 && (
            <div className="mx-auto max-w-screen-xl justify-center px-6 pt-16 max-md:flex md:pt-[104px]">
              {featureContents.length > 0 && (
                <div className="z-[1000] grid grid-cols-1 gap-5 md:grid-cols-3">
                  {featureContents.map((content, index) => (
                    <div key={index} className="flex items-center gap-5">
                      <Image
                        src={content.imageSrc}
                        alt={`Image ${index + 1}`}
                        width={70}
                        height={70}
                      />
                      <p className="max-w-xs text-[16px] text-white max-lg:leading-[30px] lg:text-xl">
                        {content.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {isHomePage && (
          <div className="mx-auto -mt-24 grid max-w-screen-xl grid-cols-1 items-center justify-center gap-4 px-6 max-sm:-mt-12 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="relative z-10 h-full overflow-hidden rounded-2xl bg-[#101828] text-white shadow-lg"
              >
                <div
                  className={`h-2 ${
                    gradientClasses[
                      gradientColorMap[card.gradient] as
                      | 'purple'
                      | 'blue'
                      | 'aqua'
                    ]
                  }`}
                >
                </div>

                <div className="flex flex-col justify-between">
                  <div className="relative z-10 px-4 py-5 md:px-6">
                    <h2
                      className={`bg-clip-text text-lg font-semibold text-transparent ${
                        gradientClasses[
                          gradientColorMap[card.gradient] as
                          | 'purple'
                          | 'blue'
                          | 'aqua'
                        ]
                      }`}
                    >
                      {card.title}
                    </h2>
                    <p className="mt-2 text-[13px] font-normal text-[#667085] md:min-h-[136px] lg:min-h-[86px] xl:min-h-0">
                      {card.description}
                    </p>
                  </div>
                  <div className="px-4 pb-4 md:px-6 md:pb-6">
                    <Link
                      className="mt-5 flex items-center gap-2 text-sm text-[#d0d5dd] hover:text-white md:mt-0 lg:mt-5"
                      href={card.linkUrl}
                    >
                      <p className="md:max-w-[160px] lg:max-w-full">
                        {card.linkText}
                      </p>
                      <div className="w-max">
                        <Image
                          className="w-fit"
                          src={RightArrow}
                          alt="Right Arrow"
                          width={20}
                          height={20}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
