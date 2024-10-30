import Image from 'next/image';
import React from 'react';

import LogoIcon from '../../assets/images/logo-icon.png';
import IntercomIcon from '../../assets/svgs/intercom.svg';
import LinkdinIcon from '../../assets/svgs/linkdin.svg';

export default function FaqFooter() {
  return (
    <div
      className="flex justify-center bg-[#fcfcfd]"
      style={{ fontFamily: 'system-ui' }}
    >
      <div>
        <a href="/faq">
          <div className="flex cursor-pointer justify-center">
            <Image src={LogoIcon} alt="Logo Icon" width={32} height={32} />
          </div>
        </a>
        <div className="mb-4 mt-10 flex items-center gap-4">
          <p className="cursor-pointer text-sm font-normal text-[#929BA5]">
            Sign in
          </p>
          <p className="cursor-pointer text-sm font-normal text-[#929BA5]">
            Start Free Trial
          </p>
          <p className="cursor-pointer text-sm font-normal text-[#929BA5]">
            Dashboard
          </p>
        </div>
        <div className="flex cursor-pointer justify-center">
          <Image src={LinkdinIcon} alt="Linkdin Icon" width={16} height={16} />
        </div>
        <div className="mt-10 flex cursor-pointer items-center justify-center gap-2 pb-12">
          <Image
            src={IntercomIcon}
            alt="Intercom Icon"
            width={14}
            height={14}
          />
          <p className="text-sm font-normal text-[#929BA5] ">
            We run on intercom
          </p>
        </div>
      </div>
    </div>
  );
}
