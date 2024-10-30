'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

import arrow from '@/assets/svgs/arrow.svg';
// import LinkedinIcon from "@/assets/svgs/linkedin-icon.svg";
import logo from '@/assets/svgs/header-logo-icon.svg';

import Panel from '../Panel';

export default function Footer() {
  const pathname = usePathname();
  const isRedirectPage = pathname === '/redirect';
  const route = useRouter();

  const handleClick = () => {
    route.push('/auth/register');
  };

  return (
    <>
      <Panel />
      <div className="relative bg-[#101726]">
        <div
          className={`mx-auto max-w-screen-xl px-6 pb-16 ${
            !isRedirectPage ? 'pt-[348px]' : 'pt-10'
          }  flex justify-between gap-32 max-lg:flex-col max-sm:gap-16`}
        >
          <div className="flex flex-col">
            <Link href="/">
              <div className="flex items-center gap-3">
                <Image src={logo} height={28} width={28} alt="Logo" />
                <p className="pt-1 text-xl font-semibold text-white">
                  ClientiDirect
                </p>
              </div>
            </Link>

            <div>
              <button
                className="mt-8 flex w-max items-center rounded-full bg-[#ffffff1a] px-[14px] py-[7px] text-sm text-white hover:bg-gray-600 max-[420px]:text-xs"
                onClick={handleClick}
              >
                Începe perioada de probă gratuită de 14 zile
                <Image
                  src={arrow}
                  alt="săgeată"
                  width={20}
                  height={21}
                  className="ml-2 max-[365px]:hidden"
                />
              </button>
            </div>
          </div>

          <div className="flex flex-col flex-wrap text-sm text-white max-lg:gap-y-8 sm:flex-row sm:gap-x-28 lg:justify-between lg:gap-x-8">
            <div>
              <p className="mb-4 font-semibold text-[#667085]">Produs</p>
              <ul className="space-y-3">
                <Link href="/features/lead-generation">
                  <li className="cursor-pointer">
                    Identificarea vizitatorilor
                  </li>
                </Link>
                <Link href="/features/google-analytics">
                  <li className="cursor-pointer pt-3">
                    Îmbogățirea Google Analytics
                  </li>
                </Link>
                {/* <li className="cursor-pointer">API în timp real</li> */}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-semibold text-[#667085]">Soluții</p>
              <ul className="space-y-3">
                <Link href="/solutions/sales">
                  <li className="cursor-pointer">Pentru vânzări</li>
                </Link>
                <Link href="/solutions/marketing">
                  <li className="cursor-pointer pt-3">Pentru marketing</li>
                </Link>
                <Link href="/solutions/agency">
                  <li className="cursor-pointer pt-3">Pentru agenții</li>
                </Link>
              </ul>
            </div>
            {/* <div>
              <p className="font-semibold mb-4 text-[#667085]">Resurse</p>
              <ul className="space-y-3">
                <Link href="">
                  <li className="cursor-pointer">Centru de ajutor</li>
                </Link>
                <Link href="/customer-stories">
                  <li className="pt-3 cursor-pointer">
                    Povești ale clienților
                  </li>
                </Link>
                <Link href="/faq">
                  <li className="pt-3 cursor-pointer">Întrebări frecvente</li>
                </Link>
                <Link href="">
                  <li className="pt-3 cursor-pointer">Program de afiliere</li>
                </Link>
                <Link href="">
                  <li className="pt-3 cursor-pointer">
                    Ghidul ClientiDirect pentru generarea de lead-uri B2B
                  </li>
                </Link>
                <Link href="/blueprint/b2b-marketing-blueprint">
                  <li className="pt-3 cursor-pointer">
                    Planul de marketing B2B
                  </li>
                </Link>
              </ul>
            </div> */}
            <div>
              <p className="mb-4 font-semibold text-[#667085]">Legal</p>
              <ul className="space-y-3">
                <Link href="/terms-conditions">
                  <li className="cursor-pointer">Termeni și condiții</li>
                </Link>
                <Link href="/faq">
                  <li className="cursor-pointer pt-3">FAQ</li>
                </Link>
                <Link href="/privacy-policy">
                  <li className="cursor-pointer pt-3">
                    Politica de confidențialitate
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700"></div>
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-8 text-sm text-gray-400 max-[500px]:flex-col">
          <p className="max-[500px]:text-center">
            <Link className="underline" href="/">
              ClientiDirect.Com
            </Link>
            , toate drepturile rezervate
          </p>
        </div>
      </div>
    </>
  );
}
