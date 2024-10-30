'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import GoogleAIcon from '@/assets/images/google-analytics-logo.webp';
import Home1 from '@/assets/images/home-1.webp';
import Home2 from '@/assets/images/home-2.webp';
import Home3 from '@/assets/images/home-3.webp';
import Home4 from '@/assets/images/home-4.webp';
import Home5 from '@/assets/images/home-5.webp';
import Home6 from '@/assets/images/home-6.webp';
import Home7 from '@/assets/images/home-7.webp';
import Home8 from '@/assets/images/home-8.webp';
import Home9 from '@/assets/images/home-9.webp';
import Home10 from '@/assets/images/home-10.webp';
import Home11 from '@/assets/images/home-11.webp';
import Home12 from '@/assets/images/home-12.webp';
import RealIcon from '@/assets/images/real-icon.webp';
import Ripple1 from '@/assets/images/ripple-1.webp';
import Ripple2 from '@/assets/images/ripple-2.webp';
import Ripple3 from '@/assets/images/ripple-3.webp';
import ClientiDirect from '@/assets/images/snitcher-logo.webp';

const IntegrationSection = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prevKey: number) => prevKey + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    router.push('/auth/register');
  };
  const handleGoogle = () => {
    router.push('/features/google-analytics');
  };
  const handleAPI = () => {
    router.push('/features/lead-generation');
  };

  return (
    <>
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center overflow-x-hidden">
        <div className="relative flex flex-col items-center py-24 text-white">
          <div className="max-xs:pb-3 flex max-w-[790px] flex-col items-center pb-24 max-lg:max-w-[750px] max-lg:px-2">
            <div className="inline-block rounded-2xl border border-[#ffffff1a] bg-[#ffffff1a] px-2 pb-[2px] pt-1 text-center text-xs font-semibold">
              Integrari
            </div>
            <h2 className="pt-10 text-center text-4xl font-bold tracking-[-1px]">
              O mulțime de integrări
            </h2>
            <p className="pt-5 text-center text-lg text-[#7d89b0]">
              Îmbogățiți campaniile și umpleți conductele de vânzări prin
              integrarea cu produsele pe care le cunoașteți și le iubiți. Cu
              peste 5.000 de aplicații deja disponibile, instrumentele preferate
              ale echipei tale sunt la doar un clic distanță.
            </p>
            <button
              className="mt-7 flex items-center justify-center gap-2 rounded-full border-[1.5px] border-[#ffffff1a] bg-[#ffffff1a] pb-[6px] pl-4 pr-3 pt-2 text-sm text-white"
              onClick={handleClick}
            >
              Încearcă ClientiDirect gratuit
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

          <div className="relative mt-28 flex w-full max-w-full items-center justify-center max-lg:mt-60">
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                key={`ripple1-${animationKey}`}
                className="ripple ripple1 max-xs:size-[240px] absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: '280px',
                  height: '280px',
                  opacity: 0,
                }}
              >
                <Image
                  src={Ripple1}
                  alt="ripple-1"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <div
                key={`ripple2-${animationKey}`}
                className="ripple ripple2 max-xs:size-[350px] absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: '390px',
                  height: '390px',
                  opacity: 0,
                }}
              >
                <Image
                  src={Ripple2}
                  alt="ripple-2"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <div
                key={`ripple3-${animationKey}`}
                className="ripple ripple3 max-xs:size-[440px] absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: '500px',
                  height: '500px',
                  opacity: 0,
                }}
              >
                <Image
                  src={Ripple3}
                  alt="ripple-3"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="absolute z-10">
              <Image
                src={ClientiDirect}
                alt="Central Icon"
                width={162}
                height={162}
                className="max-xs:size-24"
              />
            </div>

            <div className="absolute z-10 flex size-full items-center justify-between max-xl:gap-6 max-lg:flex-col">
              <div className="max-xs:-mt-[200px] max-xs:mb-20 flex flex-col gap-[30px] max-lg:-mt-72 max-lg:mb-36 xl:-ml-36">
                <div className="flex justify-center gap-6 md:mr-4">
                  <Image
                    src={Home1}
                    alt="Home 1"
                    width={87}
                    height={88}
                    className="max-xs:w-[59.31px] max-xs:h-[60px]"
                  />
                  <Image
                    src={Home2}
                    alt="Home 2"
                    width={87}
                    height={88}
                    className="max-xs:w-[59.31px] max-xs:h-[60px]"
                  />
                  <Image
                    src={Home3}
                    alt="Home 3"
                    width={87}
                    height={88}
                    className="max-xs:w-[59.31px] max-xs:h-[60px]"
                  />
                </div>
                <div className="flex justify-center gap-6 md:ml-7">
                  <Image
                    src={Home4}
                    alt="Home 4"
                    width={87}
                    height={88}
                    className="max-xs:w-[59.31px] max-xs:h-[60px]"
                  />
                  <Image
                    src={Home5}
                    alt="Home 5"
                    width={87}
                    height={88}
                    className="max-xs:w-[59.31px] max-xs:h-[60px]"
                  />
                  <Image
                    src={Home6}
                    alt="Home 6"
                    width={87}
                    height={88}
                    className="max-xs:w-[59.31px] max-xs:h-[60px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[30px] max-lg:top-16 xl:-mr-36">
                <div className="flex justify-center gap-6 md:mr-4">
                  <Image
                    src={Home7}
                    alt="Home 7"
                    width={87}
                    height={88}
                    className="max-xs:w-[59.31px] max-xs:h-[60px]"
                  />
                  <Image
                    src={Home8}
                    alt="Home 8"
                    width={87}
                    height={88}
                    className="max-xs:w-[59.31px] max-xs:h-[60px]"
                  />
                  <Image
                    src={Home9}
                    alt="Home 9"
                    width={87}
                    height={88}
                    className="max-xs:w-[59.31px] max-xs:h-[60px]"
                  />
                </div>
                <div className="flex justify-center gap-6 md:ml-7">
                  <Image
                    src={Home10}
                    alt="Home 10"
                    width={87}
                    height={88}
                    className="max-xs:w-[59.31px] max-xs:h-[60px]"
                  />
                  <Image
                    src={Home11}
                    alt="Home 11"
                    width={87}
                    height={88}
                    className="max-xs:w-[59.31px] max-xs:h-[60px]"
                  />
                  <Image
                    src={Home12}
                    alt="Home 12"
                    width={87}
                    height={88}
                    className="max-xs:w-[59.31px] max-xs:h-[60px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-xs:pb-0 max-xs:mt-36 mt-28 flex max-w-full items-center justify-center gap-7 max-xl:px-4 max-lg:mt-56 max-lg:max-w-[90%] max-lg:flex-col max-lg:px-8 max-lg:pt-10 max-md:max-w-[95%] max-md:px-0 max-sm:pt-4">
          <div className="flex w-1/2 items-center justify-center gap-2 rounded-lg border border-[#ffffff26] bg-[#ffffff17] p-6 max-lg:w-full max-md:flex-col md:h-44">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <Image
                  src={RealIcon}
                  alt="Real-Time"
                  width={28.35}
                  height={28.84}
                  className="max-xl:h-7"
                />
                <p className="text-lg text-white">
                  API de identificare în timp real
                </p>
              </div>
              <p className="w-full text-sm text-[#98a2b3]">
                Vrei puterea deplină în propriile mâini? Transmiteți datele de
                identificare ale companiei oriunde aveți nevoie de ele cu
                Spotter, API-ul nostru de identificare în timp real.
              </p>
            </div>

            <div className="flex w-full md:justify-end">
              <button
                className="flex items-center justify-center gap-2 rounded-full border-[3px] border-[#0000] bg-[#3257ff] pb-1 pl-[14px] pr-3 pt-[7px] text-sm text-white"
                onClick={handleAPI}
              >
                Află mai multe
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
          </div>

          <div className="flex w-1/2 items-center justify-center gap-2 rounded-lg border border-[#ffffff26] bg-[#ffffff17] p-6 max-lg:w-full max-md:flex-col md:h-44">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <Image
                  src={GoogleAIcon}
                  alt="Google Analytics"
                  width={28.35}
                  height={28.84}
                  className="max-xl:h-7"
                />
                <p className="text-lg text-white">
                  Îmbogățitor Google Analytics
                </p>
              </div>
              <p className="w-full text-sm text-[#98a2b3]">
                Google Analytics pur și simplu nu a fost creat pentru B2B -
                vindeți companiilor, nu indivizii. Transformați GA într-o
                soluție de analiză bazată pe cont și obțineți poza completă.
              </p>
            </div>
            <div className="flex w-full md:justify-end">
              <button
                className="flex items-center justify-center gap-2 rounded-full border-[3px] border-[#0000] bg-[#3257ff] pb-1 pl-[14px] pr-3 pt-[7px] text-sm text-white"
                onClick={handleGoogle}
              >
                Află mai multe
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
          </div>
        </div>
      </div>
      <style jsx>
        {`
          @keyframes rippleAnimation {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          .ripple {
            animation: rippleAnimation 1s forwards;
          }
          .ripple1 {
            animation-delay: 0s;
          }
          .ripple2 {
            animation-delay: 0.3s;
          }
          .ripple3 {
            animation-delay: 0.6s;
          }
        `}
      </style>
    </>
  );
};

export default IntegrationSection;
