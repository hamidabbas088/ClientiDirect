import type { Metadata } from 'next';
import React from 'react';

import HeroSection from '@/components/home/HeroSection';
import SolutionSection from '@/components/solutions/SolutionSection';
import { salesHeroData } from '@/constants/solutions/sales';

export const metadata: Metadata = {
  title: 'ClientiDirect | Expert în succesul vânzărilor | Probă gratuită',
  description:
    'Identificați lead-urile de vânzări. Gruparea lead-urilor în liste care se transformă în clienți. Automatizați trimiterea de lead-uri și notificări către alte instrumente. Încercați ClientiDirect gratuit!',
  metadataBase: new URL('https://clientidirect.com/solutions/sales'),
};

export default function page() {
  return (
    <div>
      <HeroSection
        headingText="Convertește traficul în pipeline."
        headingLineBreaks={[3, 5]}
        paragraphText={
          'Te străduiești să generezi suficiente lead-uri de calitate pentru a-ți atinge obiectivele? Sau prospectarea la rece pur și simplu nu aduce rezultatele de care ai nevoie? \n \n Obține leaduri acționabile din traficul anonim de pe site-ul tău.'
        }
        paragraphLineBreaks={[10, 26]}
        featureContents={salesHeroData}
        maxWidth="900px"
        bgColor="#070b18"
      />

      <div className="max-sm:pt-10 md:py-4 ">
        <SolutionSection
          title="Nu mai rata vizitele companiilor țintă"
          description="ClientiDirect dezvăluie companiile din spatele traficului tău anonim, fără a depinde de conversii sau formulare."
          listItems={[
            'Aplică scorarea lead-urilor pentru a pre-califica și segmenta companiile potrivite.',
            'Combină detaliile companiei cu comportamentul pentru a găsi ceea ce este important pentru tine.',
            'Nu mai pierde timp cu companii nepotrivite, în timp ce cele potrivite trec neobservate și nu mai apar.',
          ]}
          buttonPrimaryText="Începe perioada de probă gratuită"
          buttonSecondaryText="Află mai multe"
          flexDirection="row-reverse"
          lottieUrl="https://lottie.host/embed/2e6d8d97-50b5-43c1-a266-9541a86e20f0/mqibviTssN.lottie"
          route="/features/lead-generation"
        />
      </div>

      <div className="max-md:pt-10 md:py-4 ">
        <SolutionSection
          title="Acceptă, respinge, bucură-te"
          description="Rămâi organizat, păstrează-ți CRM-ul ordonat și asigură-te că lead-urile continuă să avanseze în pipeline-ul tău."
          listItems={[
            'Acceptă sau respinge companiile care îndeplinesc criteriile tale de pre-calificare.',
            'Trimite lead-urile în CRM-ul tău și îmbogățește înregistrările existente.',
            'Atribuie lead-uri echipei și declanșează automatizări.',
          ]}
          buttonPrimaryText="Începe perioada de probă gratuită"
          buttonSecondaryText="Află mai multe"
          lottieUrl="https://lottie.host/embed/394e8314-3c39-48f4-954b-b799989c2a20/fpTTvgfzCk.lottie"
          flexDirection="row"
          route="/features/lead-generation"
        />
      </div>

      <div className="max-sm:pt-10 md:py-4 ">
        <SolutionSection
          title="Programează mai multe întâlniri cu date de intenție în timp real"
          description="Pare a fi un joc de noroc atunci când alegi potențiali clienți pe care să te concentrezi? Sau te-ai săturat să urmărești lead-uri care nu au nicio intenție să cumpere vreodată de la tine?"
          paragraphs={[
            'Scapă de munca manuală și folosește semnalele de intenție în timp real, astfel încât să poți prioritiza lead-urile care manifestă un comportament de cumpărare.',
          ]}
          buttonPrimaryText="Începe perioada de probă gratuită"
          buttonSecondaryText="Află mai multe"
          flexDirection="row-reverse"
          lottieUrl="https://lottie.host/embed/f98016ab-4cd3-40b6-aaa6-ffa0fcdffdd0/SgW9v4W59I.lottie"
          route="/features/lead-generation"
        />
      </div>

      <div className="max-md:pt-10 md:py-4 ">
        <SolutionSection
          title="Păstrează conversațiile relevante și închide mai multe tranzacții"
          description="Rămâi în joc, identifică noi factori de decizie și împiedică tranzacțiile să se răcească cu profiluri complete de comportament și notificări în timp real."
          paragraphs={[
            'Astfel, poți să îți sprijini potențialii clienți cu informațiile de care au nevoie pentru a merge mai departe.',
          ]}
          buttonPrimaryText="Începe perioada de probă gratuită"
          buttonSecondaryText="Află mai multe"
          flexDirection="row"
          lottieUrl="https://lottie.host/embed/8e566ab4-7843-49fc-bb6e-3229badcc589/rGwpRb4Kb5.lottie"
          route="/features/lead-generation"
        />
      </div>
    </div>
  );
}
