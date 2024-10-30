'use client';
import { MDXProvider } from '@mdx-js/react';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import HeroSection from '@/components/home/HeroSection';
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "ClientiDirect | Identificarea vizitatorilor pentru agenții | Probă gratuită",
//   description:
//     "Oferiți clienților dvs. o soluție puternică de identificare a vizitatorilor cu etichetă albă cu ClientiDirect. Creșteți veniturile, generați lead-uri și susțineți serviciile existente.",  metadataBase: new URL("https://clientidirect.com/"),
// };
const fetchMDXContent = async (slug: string) => {
  try {
    const content = await import(`../content/${slug}.mdx`);
    return content.default;
  } catch {
    throw new Error(`Could not fetch MDX file: ${slug}`);
  }
};
type Props = {
  params: { slug: string };
};
const DetailsPage = ({ params }: Props) => {
  const { slug } = params;
  const [Content, setContent] = useState<React.ComponentType | null>(null);
  useEffect(() => {
    const loadContent = async () => {
      try {
        const mdxContent = await fetchMDXContent(slug.toLowerCase());
        setContent(() => mdxContent);
      } catch (error) {
        console.error(error);
      }
    };
    loadContent();
  }, [slug]);

  useEffect(() => {
    if (slug !== slug?.toLowerCase()) {
      redirect(`/details/${slug.toLowerCase()}`);
    }
  }, [slug]);
  const title
    = slug === 'privacy-policy'
      ? 'Politica de confidențialitate'
      : 'Termeni și condiții';

  const paragraphText
    = slug === 'privacy-policy'
      ? 'Ultima actualizare: 13 octombrie 2024'
      : 'Ultima actualizare: 13 octombrie 2024';

  if (!Content) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="min-h-[80vh] w-full md:gap-5"
      style={{ fontFamily: 'system-ui' }}
    >
      <HeroSection
        headingText={title}
        headingLineBreaks={[3, 5]}
        paragraphText={paragraphText}
        maxWidth="960px"
        bgColor="#070b18"
        buttonVisible={false}
      />
      <MDXProvider>
        <div className="prose mx-auto mb-10 mt-16 max-w-[720px] prose-h2:text-[20px] prose-h2:leading-[30px] prose-h2:text-[#101828] prose-p:text-[16px] prose-p:leading-[24px] prose-p:text-[#475467] prose-a:no-underline prose-ul:text-[16px] prose-ul:leading-[24px] prose-ul:text-[#475467] prose-li:my-0 prose-li:list-disc prose-li:text-[#475467] prose-li:marker:text-[24px] prose-li:marker:text-[#475467] max-xl:px-10 max-lg:px-4 max-md:mt-12 max-md:px-4">
          <Content />
        </div>
      </MDXProvider>
    </div>
  );
};

export default DetailsPage;
