import type { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import { sectionData } from '@/constants/b2b/sectionData';
import BackgroundOne from '@/public/images/background-blueprint.png';
import BackgroundTwo from '@/public/images/background-blueprint2.png';

export const metadata: Metadata = {
  title:
    'ClientiDirect | Identificarea vizitatorilor pentru agenții | Probă gratuită',
  description:
    'Descoperiți cum afaceri ca a dvs. folosesc ClientiDirect pentru a identifica, angaja și obține noi clienți',
  metadataBase: new URL(
    'https://clientidirect.com/blueprint/b2b-marketing-blueprint',
  ),
};

const MarketingBlueprint = () => {
  return (
    <div className="relative mt-[-88px] overflow-x-hidden bg-[#070b18] max-lg:-mb-40 max-lg:pb-36 lg:-mb-60 lg:pb-72">
      <Image
        src={BackgroundOne}
        alt="BackgroundOne"
        className="absolute inset-0 z-0 ml-auto mr-32 block h-[500px] w-[700px] object-fill"
      />
      <Image
        src={BackgroundTwo}
        alt="BackgroundTwo"
        className="absolute left-[43%] top-0 z-0 translate-x-[-50%] object-fill"
      />
      <div className="z-[10000] mx-auto bg-[#070b18] py-8 pb-0 pt-[150px] lg:w-[780px] lg:pt-[184px]">
        <h1 className="relative z-0 mx-auto my-[10px] text-center text-[24px] font-bold leading-[1.4em] text-white max-lg:mx-8 lg:w-[680px] lg:text-[2.5rem]">
          Blueprint de Marketing B2B
        </h1>
        <p className="relative z-0 mx-auto mb-[28px] text-center text-[12px] leading-[20px] text-[#9ca0ab] max-lg:mx-12 lg:max-w-[620px] lg:text-[16px] lg:leading-[28px]">
          O colecție atent selectată de module tactice pentru a stimula
          creșterea afacerii tale. Fiecare colecție cuprinde strategii de
          marketing cheie, concepte și cele mai bune practici, distilate din
          cărți de referință din industrie în pași acționabili. Explorează
          Colecțiile și Modulele din acest blueprint pentru a dezvolta o
          strategie de marketing B2B puternică și eficientă.O colecție atent
          selectată de module tactice pentru a stimula creșterea afacerii tale.
          Fiecare colecție cuprinde strategii de marketing cheie, concepte și
          cele mai bune practici, distilate din cărți de referință din industrie
          în pași acționabili. Explorează Colecțiile și Modulele din acest
          blueprint pentru a dezvolta o strategie de marketing B2B puternică și
          eficientă.
        </p>
        <div className="relative z-0 max-lg:px-20 max-md:px-2">
          {sectionData.map((section, index) => (
            <div
              key={index}
              className={`max-xs:mx-2 z-[1000] border border-gray-800 bg-[#101828] max-lg:mx-4 ${section.sectionBorderColor} mb-[32px] rounded-[12px] text-white`}
            >
              <h2
                className="rounded-t-[12px] px-[12px] py-[8px] text-center text-[14px] font-bold uppercase tracking-wider text-[#ffffffb3]"
                style={{ backgroundColor: section.sectionColor }}
              >
                {section.sectionTitle}
              </h2>
              <div className="p-4">
                {section.data.map(item => (
                  <div
                    key={item.id}
                    className={`max-xs:flex-col max-xs:gap-2 max-xs:px-2 flex items-center justify-between gap-3 rounded-2xl border-b border-gray-800 p-4 align-middle text-white last:border-b-0 ${
                      item.status === 'comingSoon' ? 'opacity-50' : ''
                    }  cursor-pointer hover:bg-slate-800`}
                  >
                    <div className="max-xs:flex-col max-xs:text-center max-xs:gap-2 flex items-center gap-4 max-lg:gap-3">
                      <Image
                        src={item.icon}
                        alt={item.icon}
                        width={68}
                        height={68}
                        className="flex items-center pb-4"
                      />
                      <div className="px-2">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-[12px] leading-[20px] tracking-[-0.01rem] text-[#667085]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div>
                      {item.status === 'active'
                        ? (
                            <span className="text-[20px] text-[#667085]">→</span>
                          )
                        : (
                            <span className="text-nowrap text-[12px] italic tracking-[1px] text-[#667085]">
                              În curând
                            </span>
                          )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingBlueprint;
