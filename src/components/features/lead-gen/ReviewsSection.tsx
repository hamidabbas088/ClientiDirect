import Image from 'next/image';

import fullStars from '@/assets/images/five-stars.webp';
import halfStars from '@/assets/images/four-five-stars.webp';
import reviewIcon from '@/assets/images/review-icon.webp';
import { reviews } from '@/constants/features/lead-generation';

const ReviewSection = () => {
  const renderStars = (rating: number) => {
    if (rating === 5) {
      return <Image src={fullStars} alt="Five Stars" width={110} height={22} />;
    } else if (rating === 4.5) {
      return (
        <Image
          src={halfStars}
          alt="Four and a Half Stars"
          width={110}
          height={22}
        />
      );
    }
    return null;
  };

  return (
    <div className="mt-8 flex justify-between gap-6 px-4 max-md:flex-col">
      {reviews.map(review => (
        <div
          key={review.id}
          className="w-full rounded-lg border border-black bg-white px-[17.5px] py-6 md:max-w-md"
        >
          <div className="mb-4 flex items-center">
            {renderStars(review.rating)}
          </div>
          <h3 className="mb-4 text-base font-semibold text-black">{`"${review.reviewBy}"`}</h3>
          <p className="mb-4 text-xs text-[#475467]">{review.content}</p>
          <div className="flex items-center gap-3">
            <Image
              src={reviewIcon}
              alt="Reviewer Icon"
              width={24}
              height={24}
            />
            <div className="h-[2px] w-[15px] bg-[#475467]"></div>
            <p className="ml-2 text-sm font-semibold text-black">
              {review.reviewer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
