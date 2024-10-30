import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import RightArrow from '@/assets/svgs/right-arrow.svg';

const TokenToaster = dynamic(() => import('@/components/TokenToaster'), {
  ssr: false,
});

export default function page() {
  return (
    <>
      <TokenToaster />
      <div className="mx-auto max-w-[900px] px-6">
        <div className="pt-20 md:pt-32">
          <h3 className="text-3xl font-semibold">Salutare!</h3>
          <p className="pt-6 text-xl">
            Ne bucurăm că te-ai alăturat
            {' '}
            <Link className="text-blue-800" href="/">
              ClientiDirect.com !
            </Link>
            {' '}
            Solicitarea ta a fost înregistrată cu succes și ești acum pe lista
            noastră de așteptare. Stai aproape – unul dintre colegii noștri te
            va contacta în curând cu toate detaliile de care ai nevoie.
          </p>
          <p className="py-6 text-xl">
            Îți mulțumim pentru răbdare și abia așteptăm să colaborăm!
          </p>
          <p className="text-lg">Cu entuziasm,</p>
          <p className="text-lg">Echipa ClientiDirect</p>

          <Link href="/auth/login">
            <div className="mt-10 flex w-max cursor-pointer items-center gap-2 rounded-full border border-[#ffffff1a] bg-[#101828] px-4 py-2 text-sm text-white max-[420px]:text-xs">
              <p>Autentificare</p>
              <div>
                <Image src={RightArrow} alt="Right Arrow" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
