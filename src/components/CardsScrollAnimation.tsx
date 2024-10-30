import React from 'react';

import {
  landingReviewCardsColumn1,
  landingReviewCardsColumn2,
  landingReviewCardsColumn3,
} from '@/constants/features/google-analytics';

import RatingCards from './common/RatingCards';

export default function CardsScrollAnimation() {
  return (
    <div className="c-review-cards bg-white">
      <div className="review-gradient"></div>
      <div className="review-gradient is--bot"></div>
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="grid w-full grid-cols-1 overflow-hidden md:grid-cols-3">
          <div className="animate-scroll w-full px-4">
            <div className="flex flex-col max-md:gap-6">
              {landingReviewCardsColumn1
                .concat(landingReviewCardsColumn1)
                .concat(landingReviewCardsColumn1)
                .map((review, index) => (
                  <div key={index}>
                    <RatingCards
                      rating={review.rating}
                      reviewBy={review.reviewBy}
                      content={review.content}
                      reviewer={review.reviewer}
                      hasCardClass={false}
                      hasBorder={true}
                      textSize={{
                        title: 'text-lg',
                        content: 'text-base',
                        reviewer: 'text-base',
                      }}
                      marginClass="mt-3.5 md:mt-4"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="animate-scroll-mid w-full px-4">
            <div className="relative flex flex-col max-md:gap-6">
              {landingReviewCardsColumn2
                .concat(landingReviewCardsColumn2)
                .concat(landingReviewCardsColumn2)
                .map((review, index) => (
                  <div key={index}>
                    <RatingCards
                      rating={review.rating}
                      reviewBy={review.reviewBy}
                      content={review.content}
                      reviewer={review.reviewer}
                      hasCardClass={false}
                      hasBorder={true}
                      textSize={{
                        title: 'text-lg',
                        content: 'text-base',
                        reviewer: 'text-base',
                      }}
                      marginClass="mt-3.5 md:mt-4"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="animate-scroll w-full px-4">
            <div className="relative flex flex-col max-md:gap-6">
              {landingReviewCardsColumn3
                .concat(landingReviewCardsColumn3)
                .concat(landingReviewCardsColumn3)
                .map((review, index) => (
                  <div key={index}>
                    <RatingCards
                      rating={review.rating}
                      reviewBy={review.reviewBy}
                      content={review.content}
                      reviewer={review.reviewer}
                      hasCardClass={false}
                      hasBorder={true}
                      textSize={{
                        title: 'text-lg',
                        content: 'text-base',
                        reviewer: 'text-base',
                      }}
                      marginClass="mt-3.5 md:mt-4"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
