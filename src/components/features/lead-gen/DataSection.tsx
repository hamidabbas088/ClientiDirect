import Image from 'next/image';

import Button from '@/components/common/Button';
import { data } from '@/constants/features/lead-generation';

const DataSection = () => {
  return (
    <>
      <div className="flex max-w-[790px] flex-col items-center pb-10 md:pb-16">
        <div className="inline-block rounded-2xl border border-[#d1e0ff] bg-[#d1e0ff] px-4 pb-[2px] pt-1 text-center text-xs font-bold text-[#0040c1]">
          Automatizează
        </div>
        <h2 className="pt-7 text-center text-4xl font-bold tracking-[-1px]">
          Mută tranzacțiile prin pipeline-ul tău.
        </h2>
        <p className="mb-5 pt-5 text-center text-lg text-[#475467]">
          Trimite leaduri către instrumentele tale preferate și susține echipele
          de vânzări cu actualizări despre intenții, astfel încât tranzacțiile
          să progreseze, iar marketingul să le poată retargeta.
        </p>

        <Button
          bgColor="bg-[#101828]"
          textColor="text-white"
          borderRadius="rounded-[100px]"
          className="mt-[18px] border border-[#ffffff1a] text-sm max-[420px]:text-xs"
          showChevron={true}
          chevronColor="text-white"
          buttonText="Începe perioada de probă gratuită de 14 zile"
        />
      </div>

      <div className="mb-2 mt-8 flex justify-center gap-7 max-xl:px-4 max-md:flex-wrap max-md:px-0 max-sm:mb-4">
        {data.map(item => (
          <div
            key={item.id}
            className="relative h-[346px] w-[384px] shrink-0 overflow-hidden rounded-xl shadow-lg max-xl:w-2/6 max-md:w-full sm:h-[450px] md:h-[346px]"
            style={{
              backgroundColor:
                item.id === 1
                  ? '#101726'
                  : item.id === 2
                    ? '#3257ff'
                    : '#06aed4',
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={384}
              height={250}
              objectFit="contain"
              className="max-md:w-full"
            />

            <div className="absolute inset-0 flex flex-col justify-end px-6 pb-[30px] pt-6">
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <p
                className="mt-2 text-sm font-normal text-white"
                style={{
                  color:
                    item.id === 1
                      ? '#98a2b3'
                      : item.id === 2
                        ? '#b2ccff'
                        : '#cff9fe',
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DataSection;
