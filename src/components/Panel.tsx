'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import arrow from '@/assets/svgs/arrow.svg';
import footerCtaLeft from '@/assets/svgs/footer-cta-left-gradient.svg';
import footerCtaRight from '@/assets/svgs/footer-cta-right-gradient.svg';

export default function Panel() {
  const pathname = usePathname();

  if (pathname === '/redirect') {
    return null;
  }

  return (
    <div className="bg-[#fcfcfd]">
      <div className="relative z-10 mx-auto -mb-[295px] -mt-28 max-w-[1216px] overflow-hidden rounded-2xl bg-[#3257ff] py-[96px] text-center text-white">
        <div className="relative z-20 mx-auto max-w-[1000px] px-5 lg:px-10">
          <h2 className="text-[33px] font-bold leading-[39px] -tracking-[2px] lg:text-5xl lg:leading-[60px]">
            Te străduiești să înțelegi ce primești înapoi din cei 90 RON pentru
            fiecare 100 RON cheltuiți pe promovare?
          </h2>

          <p className="mb-[30px] mt-4 text-lg text-[#d1e0ff]">
            Publicul tău țintă compară furnizorii – depășește competiția și
            încheie vânzarea
            {' '}
            <br className="max-lg:hidden" />
            prin identificarea și captarea lor primul.
          </p>

          <Link
            href="/auth/register"
            className="inline-flex items-center justify-center rounded-full bg-black px-7 py-[15px] font-semibold text-white hover:bg-gray-900"
          >
            <p className="text-[18px] leading-[28px] max-[376px]:text-sm">
              Încearcă ClientiDirect gratuit
            </p>
            <div>
              <Image src={arrow} alt="footer button arrow" className="ml-3" />
            </div>
          </Link>
        </div>

        <div
          className="absolute inset-0 z-10 bg-cover bg-no-repeat opacity-10"
          style={{
            backgroundImage:
              'url(https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/641c3ad…_noiseBig.png)',
          }}
        >
        </div>

        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src={footerCtaLeft}
            alt="left-gradient"
            className="absolute left-0 top-0 h-full"
          />
          <Image
            src={footerCtaRight}
            alt="right-gradient"
            className="absolute right-0 top-0 h-full"
          />
        </div>
      </div>
    </div>
  );
}
