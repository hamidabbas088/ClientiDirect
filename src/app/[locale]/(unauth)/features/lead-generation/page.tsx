import type { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';

import gradientImage from '@/assets/images/colours.webp';
import gradientPurple from '@/assets/images/img-second-leadgen.webp';
import Button from '@/components/common/Button';
import RatingCards from '@/components/common/RatingCards';
import DataSection from '@/components/features/lead-gen/DataSection';
import IdentifySection from '@/components/features/lead-gen/IdentifySection';
import ProsSection from '@/components/features/lead-gen/ProsSection';
import SegmentSection from '@/components/features/lead-gen/SegmentSection';
import HeroSection from '@/components/home/HeroSection';
import { leadHeroData, reviews } from '@/constants/features/lead-generation';

export const metadata: Metadata = {
  title:
    'ClientiDirect | Identificarea vizitatorilor pentru agenții | Probă gratuită',
  description:
    'Oferiți clienților dvs. o soluție puternică de identificare a vizitatorilor cu etichetă albă cu ClientiDirect. Creșteți veniturile, generați lead-uri și susțineți serviciile existente.',
  metadataBase: new URL('https://clientidirect.com/'),
};

export default function LeadGen() {
  return (
    <>
      <HeroSection
        headingText="Capturează leaduri de pe site-ul tău pe care nu știai că le ai."
        headingLineBreaks={[3, 8]}
        paragraphText="ClientiDirect dezvăluie cine se află în spatele traficului anonim pentru a transforma site-ul tău în cel mai valoros atu!"
        paragraphLineBreaks={[7]}
        maxWidth="900px"
        bgColor="#070b18"
        featureContents={leadHeroData}
      />

      <div
        className="w-full"
        style={{
          backgroundImage: `url(${gradientImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bacground-gradient-2">
          <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center px-6">
            <div className="mb-24 flex flex-col gap-16 pt-16 max-md:gap-6 max-md:pt-14">
              <div className="flex items-center gap-20 max-lg:flex-col-reverse max-md:gap-12">
                <div className="w-1/2 pb-8 pt-9 max-lg:w-full">
                  <h2 className="text-4xl font-bold leading-[44px] text-black">
                    Datele ClientiDirect sunt pur și simplu mai bune.
                    <br />
                    <span>Vezi cu ochii tăi.</span>
                  </h2>
                  <p className="mt-4 text-lg text-[#475467]">
                    Credem că datele de calitate sunt esențiale pentru creștere.
                    De aceea, ne-am propus să evoluăm continuu ratele noastre de
                    identificare și calitatea acestora pentru a-ți oferi
                    avantajul de a câștiga mai mulți clienți.
                    <span className="block pt-6">
                      Umple canalele de vânzări și superchargează-ți mașina de
                      marketing chiar astăzi!
                    </span>
                  </p>

                  <Button
                    bgColor="bg-[#101828]"
                    textColor="text-white"
                    borderRadius="rounded-[100px]"
                    className="mt-[18px] border border-[#ffffff1a] text-sm max-[420px]:text-xs"
                    showChevron={true}
                    chevronColor="text-white"
                    buttonText="Începe perioada de probă gratuită de 14 zile"
                  />
                </div>
                <div className="max-lg:flex max-lg:justify-center max-lg:px-6">
                  <iframe
                    className="sm:h-[302px] sm:w-[500px]"
                    src="https://lottie.host/embed/6e544615-5ce8-455f-9964-d2dcddf4a169/G3eIp2WLVh.lottie"
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

              <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 sm:mt-8 md:grid-cols-3">
                {reviews.map((review, index) => (
                  <div key={index}>
                    <RatingCards
                      rating={review.rating}
                      reviewBy={review.reviewBy}
                      content={review.content}
                      reviewer={review.reviewer}
                      hasCardClass={true}
                      hasBorder={false}
                      textSize={{
                        title: 'text-base',
                        content: 'text-xs',
                        reviewer: 'text-sm',
                      }}
                      marginClass="mt-3.5 md:-mt-4"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="max-w-full bg-[#101828]"
        style={{
          backgroundImage: `url(${gradientPurple})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <IdentifySection />
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center pb-8 pt-20">
        <SegmentSection />
        <ProsSection />
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center px-4 pb-8 pt-20 lg:pt-32">
        <DataSection />
      </div>
    </>
  );
}
