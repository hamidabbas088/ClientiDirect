import React from 'react';

import BadgeCarousel from './BadgeCarousel';

const DriveBudget = () => {
  return (
    <>
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-center justify-center bg-black">
        <BadgeCarousel />
      </div>

      <div className="flex max-w-[790px] flex-col items-center max-md:px-2 max-md:pb-14 md:pb-20">
        <h2 className="text-center text-4xl font-bold tracking-[-1px] max-lg:text-[32px]">
          Generează mai multe venituri din bugetul tău actual
        </h2>

        <p className="pt-5 text-center text-xl text-[#475467] max-lg:text-lg">
          ClientiDirect oferă mii de echipe de vânzări și marketing B2B din
          întreaga lume informațiile de care au nevoie pentru a genera mai multe
          venituri din bugetele lor existente.
        </p>

        <button className="mt-6 flex items-center justify-center gap-2 rounded-full border-[1.5px] border-[#00000026] bg-[#101828] py-2 pl-4 pr-3 text-sm font-semibold text-white">
          Începe perioada de probă gratuită de 14 zile
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
        </button>
      </div>
    </>
  );
};

export default DriveBudget;
