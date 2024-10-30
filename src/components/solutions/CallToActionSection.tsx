import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import AquaTick from '../../assets/svgs/aqua-tick.svg';
import CardImage from '../../assets/svgs/card-image.svg';
import MessageIcon from '../../assets/svgs/message-icon.svg';

const CallToActionSection = () => {
  return (
    <div className="px-6">
      <div className="c-cta--call-pricing relative mx-auto flex max-w-[1240px] overflow-hidden rounded-[16px] bg-[#101828] pb-0 pt-14 max-lg:h-[650px] max-sm:px-6 sm:pl-12">
        <div className="w-full pb-14 lg:w-2/5">
          <h3 className="text-left text-2xl font-bold leading-7 text-[#54edf0]">
            Creșteți venitul pe client
          </h3>
          <p className="mb-6 font-semibold leading-7 text-white">
            Etichetă albă pentru agenții
          </p>
          <div className="mb-3 flex items-start">
            <Image src={AquaTick} alt="Checkmark" width={20} height={20} />
            <p className="ml-2 text-sm text-white">
              Acceptați sau respingeți companiile care se potrivesc cu
              precalificarea dvs criterii.
            </p>
          </div>
          <div className="mb-3 flex items-start">
            <Image src={AquaTick} alt="Checkmark" width={20} height={20} />
            <p className="ml-2 text-sm text-white">
              Oferă clienților tăi o perioadă de probă gratuită, fără a suporta
              costuri.
            </p>
          </div>
          <div className="mb-3 flex items-start">
            <Image src={AquaTick} alt="Checkmark" width={20} height={20} />
            <p className="ml-2 text-sm text-white">
              Primiți reduceri mari prin prețuri bazate pe volum.
            </p>
          </div>
          <div className="mb-9 flex items-start">
            <Image src={AquaTick} alt="Checkmark" width={20} height={20} />
            <p className="ml-2 text-sm text-white">
              Gestionați toate conturile client dintr-un singur loc.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="faq-chat-button backdrop-filter-[8px] flex h-fit items-center justify-center gap-2 rounded-full border border-[#0000] bg-[#ffffff1a] px-[20px] py-[12px] text-[14px] text-white max-[474px]:py-2">
              <Image src={MessageIcon} alt="Message Icon" />
              <p>Vorbește cu vânzări</p>
            </button>
            <Link
              href="/auth/login"
              className="faq-chat-button backdrop-filter-[8px] flex h-fit items-center justify-center gap-2 rounded-full border border-[#0000] bg-[#ffffff1a] px-[20px] py-[12px] text-[14px] text-white max-[474px]:py-2"
            >
              <div>Vedeți prețurile</div>
              <div className="w-5">
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
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-[-15px] right-0 mt-3 lg:h-[90%]">
          <Image
            src={CardImage}
            alt="CTA Image"
            width={500}
            height={450}
            className="w-full object-cover lg:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
