// "use client";
import Image from 'next/image';
import React from 'react';

type ContentData = {
  image: string;
  heading: string;
  description: string;
};

type PageProps = {
  contentList: ContentData[];
};

const ContentPage: React.FC<PageProps> = ({ contentList }) => {
  const Heading
    = 'Alimentează operațiunile de marketing, vânzări, suport și venituri, în felul tău.';
  const Paragraph
    = 'Implementează stratul de identificare al ClientiDirect pentru a adăuga context vital acolo unde ai nevoie.';
  const Button = 'Începe perioada de probă gratuită de 14 zile';

  return (
    <div className="relative bg-[#101828]">
      <div className=""></div>
      <p className="mx-auto mb-5 flex w-max items-center rounded-full border border-[#ffffff4d] bg-[#5c6c77] px-2 pt-1 text-xs text-white">
        Use Cases
      </p>
      <h2 className="mx-auto max-w-[570px] text-4xl font-black tracking-[-1px] text-white">
        {Heading}
      </h2>
      <p className="mx-auto mt-4 max-w-full text-[18px] text-[#7d89b0]">
        {Paragraph}
      </p>
      <button className="mb-20 mt-4 rounded-full bg-[#272f3b] px-4 py-2 text-white">
        {Button}
      </button>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-start justify-between gap-y-10 lg:px-10">
        {contentList.map((content, index) => (
          <div
            key={index}
            className="content-item flex w-full flex-col items-start rounded-2xl bg-[#101828] p-4 text-white lg:max-w-[384px]"
          >
            <Image
              src={content.image}
              alt={content.heading}
              className="content-image size-full lg:h-[183px]"
              width={400}
              height={400}
            />
            <h3 className="content-heading pl-3 pt-2 text-[18px] tracking-tight">
              {content.heading}
            </h3>
            <p className="content-description mt-2 pl-3 text-left text-[14px] tracking-tight text-[#98a2b3] lg:max-w-[336px]">
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPage;
