'use client';
import Image from 'next/image';
import Script from 'next/script';
import React from 'react';

import { OptimizeCardData } from '@/constants/features/google-analytics';

import WomenAvatar from '../assets/svgs/women-avatar.svg';
import Button from './common/Button';

export default function OptimizeSection() {
  return (
    <div className="">
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="flex flex-col items-center pb-[94px] pt-24 max-md:pb-0">
          <div className="mb-3 rounded-full border border-[#ffffff4d] bg-[#d1e0ff] px-4 py-1">
            <p className="text-xs font-bold text-[#0040c1]">Optimizează</p>
          </div>
          <h1 className="my-0 max-w-screen-md text-center text-4xl font-bold tracking-[-1px] text-black">
            Rulează mai multe teste și atinge-ți obiectivul mai repede.
          </h1>
          <p className="max-w-[790px] py-5 text-center text-base leading-[28px] text-[#475467] sm:text-lg">
            Urmărește schimbările pe care le faci fără să aștepți conversii,
            astfel încât să poți testa mai mult cu riscuri mai mici și să te
            asiguri că îți atingi obiectivul în limitele bugetului.
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

          <div className="mt-16 grid grid-cols-1 gap-[77px] max-md:gap-0 lg:grid-cols-2">
            <div className="col-span-1 row-span-1">
              {OptimizeCardData.map((item, index) => (
                <div
                  key={index}
                  className={`flex pb-9 ${
                    index === 2 ? 'border-b border-[#EAECF0]' : ''
                  }`}
                >
                  <div className="flex items-start gap-[18px]">
                    <div className="aspect-square size-11 sm:size-[72px]">
                      <Image
                        src={item.icon}
                        alt="Image"
                        width={62}
                        height={62}
                      />
                    </div>
                    <div>
                      <h3 className="fontsemibold text-base leading-[32px] text-[#344054] sm:text-xl">
                        {item.heading}
                      </h3>
                      <p className="mt-2.5 text-left text-sm text-[#667085] sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex flex-col items-start gap-4 pt-9 sm:flex-row">
                <Image src={WomenAvatar} alt="Avatar" width={48} height={48} />
                <div className="testimonial mb-8 w-full max-w-lg text-left lg:w-full">
                  <blockquote className="text-sm italic text-gray-700">
                    &quot;ClientiDirect, împreună cu contul nostru de Google
                    Analytics, oferă echipei noastre web mai multe informații
                    despre audiența noastră și despre cum interacționează
                    anumite tipuri de utilizatori cu site-ul nostru.&quot;
                  </blockquote>
                  <cite className="text-xs not-italic text-gray-500">
                    <span className="text-black">Becca R</span>
                    {' '}
                    - Director
                    Dezvoltare Software
                  </cite>
                </div>
              </div>
            </div>

            <div className="col-span-1 row-span-1 flex justify-center lg:pt-32">
              <iframe
                className="h-[200px] w-[300px] sm:h-[396px] sm:w-[496px] lg:h-[300px] lg:w-[400px] xl:h-[396px] xl:w-[496px]"
                src="https://lottie.host/embed/0d1f9ed0-a78b-4a9d-9904-9f0498c0f011/oZO9OT8IX6.lottie"
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
        </div>
      </div>
    </div>
  );
}
