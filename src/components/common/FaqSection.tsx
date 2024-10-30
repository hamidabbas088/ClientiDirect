'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import MessageIcon from '../../assets/svgs/message-icon.svg';

type FAQItem = {
  question: string;
  answer: string | string[];
};

type FAQProps = {
  faqList: FAQItem[];
};

const FAQ: React.FC<FAQProps> = ({ faqList }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFAQ(index);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="faq-section mx-auto mt-16 max-lg:mx-4 sm:mt-28 lg:max-w-[720px]">
      <h2 className="faq-heading mb-10 text-center text-4xl font-black sm:mb-16">
        Întrebări frecvente
      </h2>
      {faqList.map((faq, index) => (
        <div
          key={index}
          className="faq-item mb-[24px] border-b border-[#eaecf0] px-2 sm:px-[24px] lg:px-0"
        >
          <div
            className="faq-question mb-[24px] flex cursor-pointer justify-between"
            onClick={() => toggleFAQ(index)}
            onKeyDown={event => handleKeyDown(event, index)}
            role="button"
            tabIndex={0}
          >
            <h3 className="pr-4 text-[18px] font-bold">{faq.question}</h3>
            <span>
              <Image
                src={
                  activeIndex === index
                    ? 'https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6408b5ebb8c50c493e25989f_minus-circle.svg'
                    : 'https://cdn.prod.website-files.com/64084dfdb78deb68d06600ed/6408b60c8ca916b019f2a0e3_plus-circle.svg'
                }
                alt={activeIndex === index ? 'Collapse' : 'Expand'}
                width={24}
                height={24}
                className="min-h-6 min-w-6"
              />
            </span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer mb-[24px] mt-[-10px] text-[16px] leading-[20px] text-[#333]">
              {Array.isArray(faq.answer)
                ? (
                    faq.answer.map((ans, ansIndex) => (
                      <p key={ansIndex} className="mt-2 pr-8 leading-[24px]">
                        {ans}
                      </p>
                    ))
                  )
                : (
                    <p className="pr-8 leading-[24px]">{faq.answer}</p>
                  )}
            </div>
          )}
        </div>
      ))}
      <div className="faq-footer text-center">
        <h4 className="text-[20px] font-[600] leading-[30px] text-[#101828]">
          Ai încă întrebări?
        </h4>
        <p className="mb-[32px] mt-[8px] max-w-[790px] text-[18px] leading-[28px] text-[#475467]">
          Nu găsești răspunsul pe care îl cauți? Trimite-ne un mesaj.
        </p>
        <Link href="/auth/register">
          <div className="flex justify-center">
            <button className="faq-chat-button flex h-fit items-center justify-center gap-2 rounded-full bg-black px-[20px] py-[12px] text-[14px] text-white">
              <Image src={MessageIcon} alt="Message Icon" />
              <p>Începe un chat</p>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
