import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

import Assign from '@/assets/images/assign.webp';
import Export from '@/assets/images/export.webp';
import Prioritize from '@/assets/images/prioritize.webp';
import Qualify from '@/assets/images/qualify.webp';
import { pros } from '@/constants/features/lead-generation';

const imageMap: { [key: string]: StaticImageData } = {
  'qualify.webp': Qualify,
  'prioritize.webp': Prioritize,
  'assign.webp': Assign,
  'export.webp': Export,
};

const ProsSection = () => {
  return (
    <div className="mt-8 flex items-center justify-center gap-5 px-4 max-md:flex-col md:mt-10">
      {pros.map(item => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center gap-5"
        >
          <Image
            src={imageMap[item.image] as StaticImageData} // Assert as StaticImageData
            alt={item.title}
            width={70}
            height={70}
            className="object-contain"
          />

          <div className="-mt-4 text-center">
            <h2 className="text-xl font-semibold leading-8 text-[#344054]">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-[#667085]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProsSection;
