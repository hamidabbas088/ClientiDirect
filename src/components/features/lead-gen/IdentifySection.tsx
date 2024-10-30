import Image from 'next/image';

import AsanaSmall from '@/assets/images/asanda-small.webp';
import Enrichment from '@/assets/images/enrichment.webp';
import Asana from '@/assets/images/image-lead-gen-third.webp';
import manLead from '@/assets/images/man-lead.webp';
import Prospect from '@/assets/images/prospect.webp';
import Visitor from '@/assets/images/visitor.webp';
import Button from '@/components/common/Button';

const IdentifySection = () => {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col px-4 pt-24 text-white md:items-center md:justify-center">
      <div className="flex max-w-[790px] flex-col items-center pb-12 md:pb-20">
        <div className="inline-block rounded-2xl border border-[#ffffff1a] bg-[#ffffff1a] px-2 pb-[2px] pt-1 text-center text-xs font-semibold">
          Identifică
        </div>
        <h2 className="pt-10 text-center text-4xl font-bold tracking-[-1px]">
          Capturează și convertește vizitatorii anonimi
        </h2>
        <p className="pt-5 text-center text-lg text-[#7d89b0]">
          Identifică îți transformă traficul anonim de pe site în leaduri
          acționabile și informații în timp real. Astfel, poți valorifica
          fiecare dolar investit în marketing și închide mai multe afaceri.
        </p>

        <Button
          bgColor="bg-[#ffffff1a]"
          textColor="text-white"
          borderRadius="rounded-[100px]"
          className="mt-[18px] border border-[#ffffff1a] text-sm max-[420px]:text-xs"
          showChevron={true}
          chevronColor="text-white"
          buttonText="Începe perioada de probă gratuită de 14 zile"
        />
      </div>

      <div className="flex gap-20 pb-28 max-lg:flex-col max-lg:gap-8">
        <div className="hidden w-full lg:block lg:w-1/2">
          <Image alt="Asana" src={Asana} width={540} height={448} />
        </div>

        <div className="flex w-full justify-center lg:hidden">
          <Image alt="Asana-Small" src={AsanaSmall} width={395} height={520} />
        </div>

        <div className="w-1/2 max-lg:w-full">
          <div className="flex items-start gap-5">
            <Image
              src={Enrichment}
              alt="enrichment"
              width={50}
              height={50}
              className="object-contain"
            />
            <div>
              <h2 className="text-lg font-semibold">Îmbogățire</h2>
              <p className="mt-[2px] text-base text-[#7d89b0]">
                Îmbogățește fiecare companie identificată cu informații
                detaliate.
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-start gap-5">
            <Image
              src={Visitor}
              alt="visitor"
              width={50}
              height={50}
              className="object-contain"
            />
            <div>
              <h2 className="text-lg font-semibold">
                Comportamentul vizitatorilor
              </h2>
              <p className="mt-[2px] text-base text-[#7d89b0]">
                Urmărește parcursul leadurilor de la sursă până la conversie.
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-start gap-5">
            <Image
              src={Prospect}
              alt="prospect"
              width={50}
              height={50}
              className="object-contain"
            />
            <div>
              <h2 className="text-lg font-semibold">Prospect</h2>
              <p className="mt-[2px] text-base text-[#7d89b0]">
                Folosește informațiile cheie pentru a selecta factorul de
                decizie potrivit.
              </p>
            </div>
          </div>

          <div
            className="mt-10 h-px w-full"
            style={{
              background:
                'linear-gradient(110.65deg, rgba(255, 255, 255, 0) 1.16%, rgba(255, 255, 255, 0.1) 51.61%, rgba(255, 255, 255, 0) 100%)',
            }}
          >
          </div>

          <div className="mt-14 flex max-w-full items-start gap-4 max-md:flex-col lg:max-w-[80%]">
            <Image
              src={manLead}
              alt="man"
              width={48}
              height={48}
              className="object-contain"
            />
            <div className="text-xs font-semibold">
              <p className="italic text-[#eaecf0] ">
                &quot;Designul software-ului este grozav - Este un instrument
                ideal pentru marketing bazat pe conturi și ajută la obținerea de
                leaduri noi.&quot;
              </p>
              <div className="flex items-center gap-2 pt-[14px] text-[#b9c0d4]">
                Marc-Antoine C.
                <span className="-mt-[2px] inline-block h-[2px] w-[15px] bg-[#98a2b3]"></span>
                <span className="text-[#7d89b0]">
                  Coordonator Marketing și Vânzări
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentifySection;
