import Image from 'next/image';
import React from 'react';

import HighAsia from '@/assets/svgs/high-asia.svg';
import HighEMEA from '@/assets/svgs/high-emea.svg';
import HighPerformSmallSummer from '@/assets/svgs/high-perform-small-summer-orange.svg';
import HighPerformSummer from '@/assets/svgs/high-performer-summer.svg';
import HighUK from '@/assets/svgs/high-performer-uk.svg';
import MomentumLeader from '@/assets/svgs/momentum-leader-orange.svg';
import SmallHighEurope from '@/assets/svgs/small-high-europe.svg';

const badges = [
  { src: HighPerformSmallSummer, alt: 'High Performer Summer' },
  { src: HighEMEA, alt: 'High Performer EMEA' },
  { src: HighUK, alt: 'High Performer UK' },
  { src: HighAsia, alt: 'High Performer Asia' },
  { src: SmallHighEurope, alt: 'Small Business High Performer Europe' },
  { src: MomentumLeader, alt: 'Momentum Leader' },
];

const BadgeCarousel = () => {
  return (
    <div className="w-full bg-white">
      <div className="relative mx-auto flex max-w-screen-xl items-center justify-center pb-8 pt-24 sm:px-6">
        <div className="fade-left z-50"></div>
        <div className="fade-right z-50"></div>

        <div className="absolute z-50">
          <Image
            src={HighPerformSummer}
            alt="ClientiDirect Logo"
            width={128}
            height={166}
            className="max-md:h-[122px] max-md:w-[98px]"
          />
        </div>

        <div className="relative z-20 w-full overflow-hidden lg:max-w-[900px]">
          <div className="marquee-container">
            <div className="marquee-scroll grayscale hover:grayscale-0">
              {badges
                .concat(badges)
                .concat(badges)
                .map((badge, index) => (
                  <div
                    key={index}
                    className={`inline-block shrink-0 px-2 ${
                      index === 0 ? 'ml-4' : ''
                    }`}
                  >
                    <Image
                      src={badge.src}
                      alt={badge.alt}
                      width={90}
                      height={116}
                      objectFit="contain"
                      loading="lazy"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeCarousel;
