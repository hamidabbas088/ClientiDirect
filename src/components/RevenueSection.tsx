'use client';
import Image from 'next/image';
import Script from 'next/script';
import React from 'react';

import { revenueSectionData } from '@/constants/features/google-analytics';

import Button from './common/Button';

export default function RevenueSection() {
  return (
    <div className="section-gray25-bg background-gradient-4 bg-[#fcfcfd]">
      <div className="relative mx-auto max-w-screen-xl border-b border-[#eaecf0] px-6">
        <div className="flex flex-col items-center py-24 max-sm:py-16">
          <div className="mb-3 rounded-full border border-[#ffffff4d] bg-[#d1e0ff] px-4 py-1">
            <p className="text-xs font-bold text-[#0040c1]">Analizează</p>
          </div>
          <h1 className="my-0 max-w-screen-md text-center text-4xl font-bold tracking-[-1px] text-black">
            Află care acțiuni generează cu adevărat venituri, fără presupuneri.
          </h1>
          <p className="max-w-[790px] py-5 text-center text-base leading-[28px] text-[#475467] sm:text-lg">
            Filtrează acțiunile de marketing plătit și organic după cantitatea
            de trafic al companiilor țintă pe care o generează, astfel încât să
            poți reduce costurile cu încredere și să te concentrezi pe
            câștigători.
          </p>
          <Button
            bgColor="bg-[#101828]"
            textColor="text-white"
            borderRadius="rounded-[100px]"
            className="border border-[#ffffff1a] text-sm max-[420px]:text-xs"
            showChevron={true}
            chevronColor="text-white"
            buttonText="Începe perioada de probă gratuită de 14 zile"
          />

          <div className="mt-16 grid grid-cols-1 place-items-center gap-[77px] max-sm:gap-8 lg:grid-cols-[1fr_1.75fr_1fr]">
            <div className="col-span-1 row-span-1">
              {revenueSectionData.slice(0, 2).map((item, index) => (
                <div key={index} className="mb-12 flex flex-col items-start">
                  <div>
                    <div className="flex justify-center lg:justify-start">
                      <Image
                        src={item.image}
                        alt="Image"
                        width={72}
                        height={72}
                      />
                    </div>
                    <h3 className="fontsemibold text-center text-lg leading-[32px] text-[#344054] sm:text-xl lg:text-left">
                      {item.heading}
                    </h3>
                    <p className="mt-2.5 text-center text-sm text-[#667085] max-lg:max-w-[800px] sm:text-base lg:text-left">
                      {item.subHeading}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-1 row-span-1">
              <iframe
                className="sm:h-[396px] sm:w-[496px] lg:h-[296px] lg:w-[396px] xl:h-[396px] xl:w-[496px]"
                src="https://lottie.host/embed/a9f08fc6-b79b-483d-bdd0-77788d3f7c6f/g8ykUWkEFc.lottie"
                title="Lottie Animation"
              >
              </iframe>
              <Script
                src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
                strategy="lazyOnload"
                type="module"
              />
            </div>

            <div className="col-span-1 row-span-1">
              {revenueSectionData.slice(2).map((item, index) => (
                <div key={index} className="mb-12 flex flex-col items-start">
                  <div>
                    <div className="flex justify-center lg:justify-start">
                      <Image
                        src={item.image}
                        alt="Image"
                        width={72}
                        height={72}
                      />
                    </div>
                    <h3 className="text-center text-lg font-semibold leading-[32px] text-[#344054] sm:text-xl lg:text-left">
                      {item.heading}
                    </h3>
                    <p className="mt-2.5 text-center text-sm text-[#667085] max-lg:max-w-[800px] sm:text-base lg:text-left">
                      {item.subHeading}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
