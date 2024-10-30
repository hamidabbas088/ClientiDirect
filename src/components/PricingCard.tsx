'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import BLueTick from '@/assets/svgs/blue-tick.svg';
import PricingFeatureSection from '@/components/PricingFeatueSection';
import { companiesData, data } from '@/constants/pricing/pricing';

import Button from './common/Button';

type Company = {
  value: string;
  monthlyPrice: string;
  annualPrice: string;
};

export default function PricingCard() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedCompany, setSelectedCompany] = useState(companiesData[0]);

  const handleSelectCompany = (company: Company) => {
    setSelectedCompany(company);
  };

  return (
    <div className="pricing-gradient-1">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="container-pricing bg-[rgb(242 244 247 / 60%)] relative top-[-90px] z-50 grid grid-cols-1 gap-8 rounded-lg px-8 py-12 max-[500px]:px-6 lg:grid-cols-2">
          <div className="px-0 sm:px-24 sm:pl-8">
            <h3 className="mb-[9px] text-center text-xl font-semibold text-black">
              Prețul la
            </h3>
            <h1 className="text-center text-[60px] font-bold leading-[72px] text-black">
              {isMonthly
                ? `${selectedCompany?.monthlyPrice.replace('RON/lună', '') || '0'}`
                : `${selectedCompany?.annualPrice.replace('RON/lună', '') || '0'}`}
              <span className="text-xl font-semibold text-[#98a2b3]">
                RON/lună
              </span>
            </h1>
            <p className="mb-8 text-center text-base font-semibold text-[#667085]">
              Pentru până la
              {' '}
              {selectedCompany?.value.includes('-')
                ? selectedCompany.value.split('-')[1]?.trim()
                || selectedCompany.value
                : selectedCompany?.value.includes('+')
                  ? selectedCompany.value.split('+')[1]?.trim()
                  || selectedCompany.value
                  : selectedCompany?.value.toLowerCase().includes('până la')
                    ? selectedCompany.value
                      .toLowerCase()
                      .split('până la')[1]
                      ?.trim() || selectedCompany.value
                    : selectedCompany?.value}
              {' '}
              identificări unice
            </p>

            {data.map((item, index) => (
              <div key={index} className="mb-4 flex items-start gap-2">
                <div className="shrink-0">
                  <Image src={BLueTick} alt="tick" width={15} height={15} />
                </div>
                <p className="text-black">{item}</p>
              </div>
            ))}

            <div className="flex justify-center py-10">
              <Button
                bgColor="bg-[#101828]"
                textColor="text-white"
                borderRadius="rounded-[100px]"
                className="border border-[#ffffff1a] text-sm max-[420px]:text-xs"
                showChevron={true}
                chevronColor="text-white"
                buttonText="Încercați ClientiDirect gratuit"
              />
            </div>
          </div>

          <div className="lg:pl-8">
            <div>
              <div className="flex items-center justify-center space-x-4">
                <div className="grid w-full grid-cols-2 rounded-lg bg-gray-200 p-1">
                  <button
                    onClick={() => setIsMonthly(true)}
                    tabIndex={0}
                    className={`${
                      isMonthly
                        ? 'bg-white text-black'
                        : 'cursor-pointer text-gray-600'
                    } rounded-lg px-4 py-1.5 text-xs font-medium transition duration-300`}
                  >
                    Lunar
                  </button>

                  <button
                    onClick={() => setIsMonthly(false)}
                    tabIndex={0}
                    className={`${
                      !isMonthly
                        ? 'flex items-center justify-center gap-2 rounded-md bg-white text-black max-[550px]:flex-wrap'
                        : 'flex cursor-pointer items-center justify-center gap-2 text-gray-600 max-[550px]:flex-wrap'
                    } cursor-pointer rounded-full px-4 py-1.5 font-semibold transition duration-300`}
                  >
                    <p className="text-xs font-medium">Anual</p>
                    <div className="flex items-center rounded-md bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                      <span className="mr-1">🔥</span>
                      3,5 luni GRATUIT!
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex justify-between pt-5 lg:pl-4">
                <p className="text-black">Identificări unice ale companiei</p>
                <p className="text-black">Pret pe luna</p>
              </div>

              <div className="-ml-8 pt-4">
                <div className="border-white pl-8 lg:border-l">
                  {companiesData.map((item, index) => (
                    <div className="border-b border-white" key={index}>
                      <div
                        className={`flex cursor-pointer justify-between rounded-full px-4 py-3 transition duration-200 max-[500px]:rounded-lg ${
                          selectedCompany === item
                            ? 'bg-[#3257ff] text-white'
                            : ''
                        }`}
                        role="button"
                        tabIndex={0}
                        onClick={() => handleSelectCompany(item)}
                      >
                        <p className="text-sm font-medium">{item.value}</p>
                        <div className="flex flex-row gap-2 text-right max-[500px]:flex-col-reverse">
                          {!isMonthly && (
                            <del
                              className={`text-sm ${
                                selectedCompany === item
                                  ? 'text-white'
                                  : 'text-xs italic text-gray-500'
                              }`}
                            >
                              {item.monthlyPrice}
                            </del>
                          )}
                          <p
                            className={`text-sm ${
                              selectedCompany === item
                                ? 'font-semibold text-white'
                                : isMonthly
                                  ? 'font-medium'
                                  : 'font-semibold text-[#16a54a]'
                            } ml-2`}
                          >
                            {isMonthly ? item.monthlyPrice : item.annualPrice}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PricingFeatureSection />
    </div>
  );
}
