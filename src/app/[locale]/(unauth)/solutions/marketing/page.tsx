import type { Metadata } from 'next';
import React from 'react';

import HeroSection from '@/components/home/HeroSection';
import SolutionSection from '@/components/solutions/SolutionSection';
import { marketingHeroData } from '@/constants/solutions/marketing';

export const metadata: Metadata = {
  title: 'ClientiDirect | Soluții de marketing pentru B2B | Probă gratuită',
  description:
    'Transformați publicul țintă în clienți plătitori, eliminând în același timp cheltuielile inutile. Creșteți veniturile! Încercați ClientiDirect gratuit. Nu este necesar un card de credit.',
  metadataBase: new URL('https://clientidirect.com/solutions/marketing'),
};

export default function page() {
  return (
    <div>
      <HeroSection
        headingText="Generează venituri, nu doar clicuri."
        headingLineBreaks={[3, 5]}
        paragraphText={
          'Te-ai săturat să vezi cum bugetul pentru reclame dispare în abisul vizitatorilor anonimi? \n Ce-ar fi dacă ai putea asocia un logo cu cifrele și să irosești mai puțin din buget? \n \n Convertește mai mult din audiența ta țintă în clienți plătitori.'
        }
        paragraphLineBreaks={[10]}
        featureContents={marketingHeroData}
        maxWidth="900px"
        bgColor="#070b18"
      />

      <div className="max-sm:pt-5 sm:py-10 md:py-4 ">
        <SolutionSection
          title="Află ce își doresc cu adevărat vizitatorii țintă"
          description="Știi cum vizitatorii ideali găsesc și interacționează cu site-ul tău? Analitica tradițională arată cele mai vizitate pagini și surse, dar aceasta nu reflectă vocea clienților tăi."
          paragraphs={[
            'Îmbogățește analiza bazată pe cifre cu date despre companii, astfel încât să poți reduce cheltuielile inutile și să creezi conținutul pe care îl doresc clienții tăi.',
          ]}
          buttonPrimaryText="Începe perioada de probă gratuită"
          buttonSecondaryText="Află mai multe"
          flexDirection="row-reverse"
          lottieUrl="https://lottie.host/embed/647f78ae-02e3-4521-acb3-902ce328f251/qIfrWWkJ3w.lottie"
          route="/features/google-analytics"
        />
      </div>

      <div className="max-sm:pt-10 sm:py-10 md:py-4 ">
        <SolutionSection
          title="Investește bugetul de publicitate în cumpărători, nu în navigatori."
          description="Bugetul tău de publicitate se irosește pe vizitatori care nu vor cumpăra niciodată de la tine? Sau te chinui să legi mai mulți vizitatori și dispozitive pentru atribuire?"
          paragraphs={[
            'Urmărește comportamentul complet al contului astfel încât să poți construi audiențe țintă de companii și să convertești mai mult cu un buget mai mic.',
          ]}
          buttonPrimaryText="Începe perioada de probă gratuită"
          buttonSecondaryText="Află mai multe"
          lottieUrl="https://lottie.host/embed/e38b8cc8-7dd4-4e58-9de2-c24eba9a2d76/XO43vQbWnb.lottie"
          flexDirection="row"
          route="/features/google-analytics"
        />
      </div>

      <div className="max-sm:pt-10 sm:py-10 md:py-4 ">
        <SolutionSection
          title="Transmite fără întreruperi mesajul potrivit la momentul potrivit"
          description="Vrei să vezi cum ratele de respingere scad și implicarea crește? Îmbunătățește-ți strategia cu personalizarea site-ului care se adaptează în funcție de tipul de companie din care provine vizitatorul tău."
          paragraphs={[
            'Asigură-te că găsesc conținutul despre care știi că va rezona cu ei înainte să iasă și să genereze conversii.',
          ]}
          buttonPrimaryText="Începe perioada de probă gratuită"
          buttonSecondaryText="Află mai multe"
          flexDirection="row-reverse"
          lottieUrl="https://lottie.host/embed/0d1f9ed0-a78b-4a9d-9904-9f0498c0f011/oZO9OT8IX6.lottie"
          route="/features/google-analytics"
        />
      </div>

      <div className="max-sm:pt-10 sm:py-10 md:py-4 ">
        <SolutionSection
          title="Nu rata vizitatorii cu care echipa ta de vânzări vrea să vorbească."
          description="Conversiile inbound nu sunt întotdeauna pe placul echipelor tale de vânzări? Evaluează, grupează și direcționează lead-urile care se potrivesc profilului clientului tău ideal."
          paragraphs={[
            'Oferă echipei de vânzări ceea ce au nevoie pentru a menține traseele de vânzări pe drumul cel bun, chiar și atunci când conversiile sunt scăzute.',
          ]}
          buttonPrimaryText="Începe perioada de probă gratuită"
          buttonSecondaryText="Află mai multe"
          lottieUrl="https://lottie.host/embed/4140541d-6405-4c74-8429-eb49036223f6/00Tb1okqub.lottie"
          flexDirection="row"
          route="/features/google-analytics"
        />
      </div>
    </div>
  );
}
