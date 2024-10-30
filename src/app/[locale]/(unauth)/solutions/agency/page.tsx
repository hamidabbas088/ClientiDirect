import type { Metadata } from 'next';
import React from 'react';

import FaqSection from '@/components/common/FaqSection';
import HeroSection from '@/components/home/HeroSection';
import CallToActionSection from '@/components/solutions/CallToActionSection';
import SolutionSection from '@/components/solutions/SolutionSection';
import { agencyHeroData, faqList } from '@/constants/solutions/agency';

export const metadata: Metadata = {
  title:
    'ClientiDirect | Identificarea vizitatorilor pentru agenții | Probă gratuită',
  description:
    'Oferiți clienților dvs. o soluție puternică de identificare a vizitatorilor, sub marcă albă, cu ClientiDirect. Creșteți veniturile, generați lead-uri și susțineți serviciile existente.',
  metadataBase: new URL('https://clientidirect.com/solutions/agency'),
};

export default function page() {
  return (
    <div>
      <HeroSection
        headingText="Platformă de identificare a vizitatorilor sub marcă proprie"
        headingLineBreaks={[3]}
        paragraphText={
          'Identifică companiile de pe site-urile clienților tăi și furnizează echipelor \n lor de vânzări lead-uri de calitate, fără a te baza pe conversii. Construiește noi \nservicii și fluxuri de venituri sub propriul tău brand.'
        }
        paragraphLineBreaks={[10, 25]}
        featureContents={agencyHeroData}
        maxWidth="900px"
        bgColor="#070b18"
      />

      <div className="pt-10 sm:py-10 md:py-4 ">
        <SolutionSection
          title="Transformă cheltuielile de marketing în venituri în mod previzibil"
          description="Noi ne ocupăm de date și detalii tehnice, astfel încât tu să îți poți ajuta clienții să atingă noi culmi și să își depășească obiectivele de creștere."
          paragraphs={[
            'Testează cu încredere și oferă strategii de marketing extraordinare, susținute de cele mai bune date de identificare de pe piață.',
          ]}
          buttonPrimaryText="Începe perioada de probă gratuită"
          buttonSecondaryText="Află mai multe"
          flexDirection="row-reverse"
          lottieUrl="https://lottie.host/embed/8c1508a0-8f00-4f70-9aa0-4854da70c29a/RLRvCqgPqa.lottie"
          route="/features/google-analytics"
        />
      </div>

      <div className="pt-10 sm:py-10 md:py-4 ">
        <SolutionSection
          title="Lead-urile câștigate cu greu se răcesc? Nu cât timp ești tu la conducere."
          description="Ești obosit să generezi lead-uri doar pentru a vedea cum clienții încep să le valorifice după luni de zile? Sau poate niciodată? Direcționează lead-urile cu intenție ridicată acolo unde clienții tăi le doresc cu adevărat."
          paragraphs={[
            'Configurează propriile notificări în timp real pentru a te asigura că echipele lor de vânzări urmează lead-urile înainte ca acestea să se răcească.',
          ]}
          buttonPrimaryText="Începe perioada de probă gratuită"
          buttonSecondaryText="Află mai multe"
          lottieUrl="https://lottie.host/embed/1c9a5b29-e9c3-4d6b-870d-0d0fd521ffc3/uvDY6G8cEJ.lottie"
          flexDirection="row"
          route="/features/lead-generation"
        />
      </div>

      <div className="max-sm:pt-10 sm:py-10 md:py-4 ">
        <SolutionSection
          title="Completează imaginea cu analize îmbogățite"
          description="Te chinui să convingi clienții că strategia ta funcționează cu rapoarte de metrici de fațadă? Mergi dincolo de cifre și analizează calitatea."
          paragraphs={[
            'Astfel încât să poți investi cu încredere bugetul echipei și al clienților în strategii și tactici care atrag cumpărători, nu doar navigatori.',
          ]}
          buttonPrimaryText="Începe perioada de probă gratuită"
          buttonSecondaryText="Află mai multe"
          flexDirection="row-reverse"
          lottieUrl="https://lottie.host/embed/1a8c936d-3598-44d6-8fdf-878e64e51db4/iglEBIcOdi.json"
          route="/features/google-analytics"
        />
      </div>

      <div className="mt-16">
        <CallToActionSection />
      </div>
      <FaqSection faqList={faqList} />
    </div>
  );
}
