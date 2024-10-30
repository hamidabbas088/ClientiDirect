import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import gradientPurple from '@/assets/images/img-second-leadgen.webp';
import CardsScrollAnimation from '@/components/CardsScrollAnimation';
import Button from '@/components/common/Button';
import TextBlock from '@/components/common/TextBlock';
import HeroSection from '@/components/home/HeroSection';
import IntegrationSection from '@/components/home/IntegrationsSection';
import VideoSection from '@/components/VideoSection';

const TokenToaster = dynamic(() => import('@/components/TokenToaster'), {
  ssr: false,
});

export const metadata: Metadata = {
  title:
    'ClientiDirect | Identificarea vizitatorilor pentru agenții | Probă gratuită',
  description:
    'Oferiți clienților dvs. o soluție puternică de identificare a vizitatorilor cu etichetă albă cu ClientiDirect. Creșteți veniturile, generați lead-uri și susțineți serviciile existente.',
  metadataBase: new URL('https://clientidirect.com/'),
};

export default function Home() {
  const mainHeading
    = 'Oferă vânzărilor avantajul pentru a găsi și a încheia mai multe oferte';
  const subHeading
    = 'Primiți notificări atunci când companiile țintă vă vizitează site-ul web și vedeți ce le interesează. Ajutați echipele să înceapă și să țină conversații mai relevante pe parcursul ciclului de vânzări.';
  const ctaText = 'Începeți proba gratuită';
  const secondaryCtaText = 'Explorați ClientiDirect pentru vânzări';

  const FirstTestimonial = {
    quote:
      'Recomand în mod constant ClientiDirect - în testarea noastră, ei nu numai că au adunat informații despre un număr mai mare de clienți potențiali decât concurenții săi, dar au avut și informații mai detaliate despre acești clienți potențiali.',
    author: 'David G.',
    role: 'Head of Sales',
  };

  const SecondTestimonial = {
    quote:
      'ClientiDirect ne-a permis să știm ce companii ne vizitează site-ul web. Este un instrument ideal pentru marketing bazat pe cont și ajută la adunarea de noi clienți potențiali.',
    author: 'Marc-Antoine C.',
    role: 'Marketing and Sales Coordinator',
  };

  const ThirdTestimonial = {
    quote:
      'Oamenii navighează pe piața noastră, iar ClientiDirect este mecanismul prin care putem înțelege cine caută produsele noastre și de ce.',
    author: 'Tyler E.',
    role: 'Founder and CEO',
  };

  return (
    <>
      <TokenToaster />
      <div>
        <HeroSection
          headingText="Aflați cine se află pe site-ul dvs. și obțineți mai multe venituri."
          paragraphText="ClientiDirect dă putere echipelor B2B să înțeleagă, să implice și să transforme vizitatorii anonimi ai site-ului web în clienți potențiali, utilizând tehnologia de ultimă oră de identificare, urmărirea în timp real a vizitatorilor și informații despre public bazate pe date."
          maxWidth="960px"
          bgColor="#070b18"
        />

        <VideoSection />

        <div className="max-lg:mt-10">
          <TextBlock
            mainHeading={mainHeading}
            subHeading={subHeading}
            ctaText={ctaText}
            secondaryCtaText={secondaryCtaText}
            testimonial={FirstTestimonial}
            lottieUrl="https://lottie.host/embed/9c8a30ff-fd51-4ff1-8cd6-8ef27740326c/lcMSIYiI93.lottie"
            isReversed={false}
            route="/solutions/sales"
          />
        </div>

        <div className="max-lg:mt-10 max-[430px]:mt-1 max-[360px]:-mt-5">
          <TextBlock
            mainHeading="Reduceți cheltuielile publicitare risipite și convertiți mai mulți vizitatori vizați"
            subHeading="Redirecționați sau excludeți vizitatori pentru a îmbunătăți continuu performanța campaniei dvs. Personalizați călătoriile și difuzați conținut relevant publicului dvs. la momentul potrivit"
            ctaText="Începeți proba gratuită"
            secondaryCtaText="Explorați ClientiDirect pentru marketing"
            testimonial={SecondTestimonial}
            lottieUrl="https://lottie.host/embed/3986babc-f225-4202-b210-90c47d93bf77/6A3FrFOGQp.lottie"
            isReversed={true}
            route="/solutions/marketing"
          />
        </div>

        <div className="max-lg:mt-10 max-[430px]:mt-1">
          <TextBlock
            mainHeading="Înțelegeți ce își dorește de fapt publicul țintă"
            subHeading="Obțineți informații mult mai profunde despre ceea ce atrage, antrenează și convertește vizitatorii dvs. ideali. Nu mai investiți în reclame și conținut cu un ROI scăzut și începeți să optimizați pentru venituri."
            ctaText="Începeți proba gratuită"
            secondaryCtaText="Explorați ClientiDirect pentru marketing"
            testimonial={ThirdTestimonial}
            lottieUrl="https://lottie.host/embed/343fab7f-c2ee-49a9-80be-e2453a6944fa/X1mJM75bU3.lottie"
            isReversed={false}
            route="/solutions/marketing"
          />
        </div>
      </div>

      <div
        className="max-w-full bg-[#101828] pb-[97px]"
        style={{
          backgroundImage: `url(${gradientPurple})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <IntegrationSection />
      </div>

      <div className="bg-[#fcfcfd]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center">
          <div className="flex max-w-[790px] flex-col items-center max-md:px-2 max-md:py-14 md:py-20">
            <h2 className="text-center text-4xl font-bold tracking-[-1px] max-lg:text-[32px]">
              Generează mai multe venituri din bugetul tău actual
            </h2>

            <p className="pb-2 pt-5 text-center text-xl text-[#475467] max-lg:text-lg">
              Snitcher oferă mii de echipe de vânzări și marketing B2B din
              întreaga lume informațiile de care au nevoie pentru a genera mai
              multe venituri din bugetele lor existente.
            </p>

            <Button
              bgColor="bg-[#101828]"
              textColor="text-white"
              borderRadius="rounded-[100px]"
              className="border border-[#ffffff1a] text-sm max-[420px]:text-xs"
              showChevron={true}
              chevronColor="text-white"
              buttonText="Începe perioada de probă gratuită de 14 zile"
            />
          </div>
          <CardsScrollAnimation />
        </div>
      </div>
    </>
  );
}
