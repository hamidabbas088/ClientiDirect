import Image from 'next/image';
import React from 'react';

import BLueTick from '@/assets/svgs/blue-tick.svg';
import CardImage from '@/assets/svgs/card-image.svg';
import RightArrow from '@/assets/svgs/right-arrow.svg';
import { featureData } from '@/constants/pricing/pricing';

export default function pricingfeatuesection() {
  return (
    <div className="mx-auto max-w-screen-xl px-6">
      <div className="">
        <h2 className="text-center text-2xl font-semibold text-[#2970ff]">
          Toate caracteristicile incluse
        </h2>
        <p className="mx-auto max-w-[650px] pt-2 text-center text-[#475467]">
          Indiferent dacă abia începi la prețul nostru de intrare sau până la
          stabilirea prețurilor personalizate – fiecare nivel de preț are acces
          la toate caracteristicile noastre!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-10 px-10 pt-10 max-[490px]:px-0 md:grid-cols-2 md:pt-20 lg:grid-cols-3">
        {featureData.map((item, index) => (
          <div key={index} className="flex items-center gap-2 border-b">
            <div className="shrink-0">
              <Image src={BLueTick} alt="tick" width={15} height={15} />
            </div>
            <p className="py-3.5 text-[#475467]">{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-col items-center gap-6 lg:flex-row lg:gap-9 xl:gap-12">
        <div className="padding-adjustment-pricing w-full rounded-2xl bg-[#101828] px-6 py-14 md:px-8 lg:w-[35%] lg:py-[72px] xl:px-12">
          <h2 className="text-2xl font-semibold leading-7 text-[#a48afb]">
            Integrarea datelor
          </h2>
          <h4 className="mb-3 text-lg font-semibold text-[#d0d5dd]">
            Pentru furnizorii de software
          </h4>
          <p className="mb-3 text-sm text-[#667085]">
            Generați informații calitative mai profunde care depășesc clicurile
            și vizitatori. Alimentați campanii noi, dovediți rentabilitatea
            investiției și împuterniciți-vă clienții
          </p>
          <div className="flex cursor-pointer items-center gap-2">
            <p className="text-base font-medium text-[#d0d5dd] hover:text-white">
              Explorați API-ul de identificare
            </p>
            <Image src={RightArrow} alt="Right Arrow" />
          </div>
        </div>

        <div className="pricing-bg relative flex w-full overflow-hidden rounded-[16px] bg-[#101828] pb-0 pt-14 max-md:px-6 md:pl-8 lg:w-[65%]">
          <div className="w-full pb-14 md:w-2/5">
            <h2 className="text-2xl font-semibold leading-7 text-[#54edf0]">
              Etichetă albă
            </h2>
            <h4 className="mb-3 text-lg font-semibold text-[#d0d5dd]">
              Pentru Agenții
            </h4>
            <p className="mb-3 text-sm text-[#667085]">
              Obțineți statistici mai devreme, adăugați fluxuri de venit și
              generați mai calificați conduce clienții dumneavoastră cu soluția
              noastră cu etichetă albă.s
            </p>
            <div className="flex cursor-pointer items-center gap-2">
              <p className="text-base font-medium text-[#d0d5dd] hover:text-white">
                Explorați oferta cu etichetă albă
              </p>
              <Image src={RightArrow} alt="Right Arrow" />
            </div>
          </div>

          <div className="absolute bottom-[-15px] right-0 hidden h-[90%] w-[70%] md:block xl:w-auto">
            <Image
              src={CardImage}
              alt="CTA Image"
              width={500}
              height={450}
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
