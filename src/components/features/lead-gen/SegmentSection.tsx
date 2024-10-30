import Image from 'next/image';

import Filter from '@/assets/images/filter.webp';
import Invision from '@/assets/images/lead-gen-four.webp';
import ManReview from '@/assets/images/man2.webp';
import Button from '@/components/common/Button';

const SegmentSection = () => {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center pb-8 xl:pt-20">
      <div className="flex max-w-[790px] flex-col items-center max-md:px-2 max-md:pb-14 md:pb-20">
        <div className="inline-block rounded-2xl border border-[#d1e0ff] bg-[#d1e0ff] px-4 pb-[2px] pt-1 text-center text-xs font-bold text-[#0040c1]">
          Segmentează
        </div>
        <h2 className="pt-10 text-center text-4xl font-bold tracking-[-1px]">
          Creează liste de leaduri care se transformă în clienți
        </h2>
        <p className="pt-5 text-center text-lg text-[#475467]">
          Grupează și segmentează leadurile după atributele și comportamentele
          companiei, astfel încât să poți folosi resursele de marketing și
          vânzări pentru clienți, nu doar pentru vizitatori.
          {' '}
        </p>
      </div>

      <div className="flex gap-0 max-lg:flex-col">
        <div className="w-[38%] max-xl:px-4 max-lg:w-full">
          <Image
            alt="filter"
            src={Filter}
            width={48}
            height={48}
            className="object-contain"
          />
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#344054]">Scor</h2>
            <p className="text-base leading-7 tracking-wide text-[#667085] md:pr-6">
              Defineste atributele și comportamentele companiilor pentru a
              configura scorul leadurilor. Declanșează automatizări și
              gestionează inteligent traficul pe site-ul tău.
              <span className="block pt-4">
                Colectează automat leaduri relevante pentru a putea petrece mai
                mult timp retargetând și vânzând către cumpărători, nu doar
                către vizitatori.
              </span>
            </p>
          </div>

          <Button
            bgColor="bg-[#101828]"
            textColor="text-white"
            borderRadius="rounded-[100px]"
            className="mt-[18px] border border-[#ffffff1a] text-sm max-[420px]:text-xs"
            showChevron={true}
            chevronColor="text-white"
            buttonText="Începe perioada de probă gratuită de 14 zile"
          />

          <div
            className="mt-8 h-px w-full"
            style={{
              background:
                'repeating-linear-gradient(110.65deg, #0000 1.16%, #00000026 51.09%, #0000)',
            }}
          >
          </div>

          <div className="mt-10 flex max-w-[75%] items-start gap-4 max-md:mt-8 max-md:flex-col max-md:pb-20 md:max-w-[80%]">
            <Image
              src={ManReview}
              alt="man"
              width={48}
              height={48}
              className="object-contain"
            />
            <div className="text-xs font-semibold">
              <p className="italic text-[#344054]">
                &quot;Am putut găsi informațiile de contact în câteva clicuri și
                am contactat posibile oportunități de afaceri.&quot;
              </p>
              <div className="flex items-center gap-2 pt-3 text-[#101828]">
                Vencel M.
                <span>
                  <div className="-mt-[2px] h-[2px] w-[15px] bg-[#98a2b3]"></div>
                </span>
                <span className="text-[#667085]">Șef Dezvoltare, Partner</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[62%] max-lg:w-full">
          <Image
            alt="Invision"
            src={Invision}
            width={800}
            height={580}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SegmentSection;
