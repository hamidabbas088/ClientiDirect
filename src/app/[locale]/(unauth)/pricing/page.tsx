import type { Metadata } from 'next';
import React from 'react';

import FaqSection from '@/components/common/FaqSection';
import HeroSection from '@/components/home/HeroSection';
import Pricingcard from '@/components/PricingCard';
import { pricingFaqsData } from '@/constants/pricing/pricing';

export const metadata: Metadata = {
  title:
    'Prețuri ClientiDirect | Obțineți prețuri flexibile | Test gratuit de 14 zile',
  description:
    'Oferiți clienților dvs. o soluție puternică de identificare a vizitatorilor cu etichetă albă cu ClientiDirect. Creșteți veniturile, generați lead-uri și susțineți serviciile existente.',
};

export default function page() {
  return (
    <div>
      <div>
        <HeroSection
          headingText="Obțineți prețuri flexibile la potrivi nevoilor tale"
          headingLineBreaks={[5]}
          paragraphText="Descoperiți o estimare a prețului dvs. Snitcher, pe baza dimensiunii afacerii dvs. și a traficului web"
          paragraphLineBreaks={[20]}
          maxWidth="900px"
          bgColor="#070b18"
          buttonVisible={false}
        />
      </div>

      <Pricingcard />
      <FaqSection faqList={pricingFaqsData} />
    </div>
  );
}
