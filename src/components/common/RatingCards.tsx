import Image from 'next/image';
import React from 'react';

import FullStars from '@/assets/images/five-stars.webp';
import HalfStars from '@/assets/images/four-five-stars.webp';
import ReviewIcon from '@/assets/images/review-icon.webp';

type RatingCardProps = {
  rating: number;
  reviewBy?: string;
  content: string;
  reviewer: string;
  hasCardClass?: boolean;
  hasBorder?: boolean;
  textSize?: {
    title?: string;
    content?: string;
    reviewer?: string;
  };
  marginClass?: string;
};

const defaultTextSize = {
  title: 'text-base',
  content: 'text-xs',
  reviewer: 'text-sm',
};

const RatingCards: React.FC<RatingCardProps> = ({
  rating,
  reviewBy,
  content,
  reviewer,
  hasCardClass = true,
  hasBorder = false,
  textSize = defaultTextSize,
  marginClass = 'mt-3.5 md:-mt-4',
}) => {
  const renderStars = (rating: number) => {
    if (rating === 5) {
      return <Image src={FullStars} alt="Five Stars" width={110} height={22} />;
    } else if (rating === 4.5) {
      return (
        <Image
          src={HalfStars}
          alt="Four and a Half Stars"
          width={110}
          height={22}
        />
      );
    }
    return null;
  };

  return (
    <div
      className={`justify-between gap-6 max-md:w-full md:mt-8 md:flex md:h-full ${
        hasBorder ? 'rounded-[10px] border border-[#eaecf0]' : ''
      }`}
    >
      <div
        className={`flex flex-col justify-between rounded-[10px] bg-white px-[17.5px] py-6 ${
          hasCardClass ? 'review-lead--card' : ''
        }`}
      >
        <div>
          <div className="mb-3.5 flex items-center">{renderStars(rating)}</div>

          <h3 className={`${textSize?.title} mb-2.5 font-bold text-black`}>
            {reviewBy}
          </h3>

          <p className={`font-normal text-[#475467] ${textSize?.content}`}>
            {content}
          </p>
        </div>

        <div className={`${marginClass} flex items-center gap-3`}>
          <Image src={ReviewIcon} alt="Reviewer Icon" width={24} height={24} />
          <div className="h-[2px] w-[15px] bg-[#475467]"></div>

          <p className={`ml-2 font-semibold text-black ${textSize?.reviewer}`}>
            {reviewer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RatingCards;
