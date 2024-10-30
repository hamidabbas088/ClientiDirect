import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import type { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import Avatar from '@/assets/images/avatar.jpg';
import ChatIcon from '@/assets/svgs/chat.svg';
import ChevronRight from '@/assets/svgs/chevron-right.svg';

export const metadata: Metadata = {
  title: 'FAQ | Centrul de Ajutor ClientiDirect',
  description:
    'Obțineți răspunsuri la toate întrebările pe care le aveți despre ClientiDirect.',
  metadataBase: new URL('https://clientidirect.com/faq'),
};

const articlesDirectory = path.resolve(
  'src/app/[locale]/(unauth)/content/articles',
);

const getArticles = () => {
  const files = fs.readdirSync(articlesDirectory);
  const articles = files.map((file) => {
    const filePath = path.join(articlesDirectory, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return {
      title: data.title,
      description: data.description,
      slug: file.replace('.mdx', ''),
    };
  });
  return articles;
};
const articles = getArticles();
const FAQ: React.FC = () => {
  return (
    <div className="faq-container pt-9" style={{ fontFamily: 'system-ui' }}>
      <div className="mx-auto max-w-[960px] px-6">
        <Image src={ChatIcon} alt="Chat Icon" width={40} height={40} />
        <h1 className="pt-5 text-[32px] font-bold text-[#1a1a1a]">FAQ</h1>
        <p className="text-base font-normal text-[#1a1a1a]">
          Get answers to all the questions you have about ClientiDirect.
        </p>

        <div className="flex items-center gap-2 pt-5">
          <Image
            src={Avatar}
            alt="Jerre"
            className="rounded-full"
            width={24}
            height={24}
          />
          <p className="flex items-center text-sm font-normal text-[#737373]">
            De Jerre
            {' '}
            <span className="px-2 text-2xl"> · </span>
            {' '}
            11 articole
          </p>
        </div>

        <div className="mt-10 rounded-lg border border-[#E6E6E6] px-3 py-4 max-sm:pl-5">
          {articles.map(article => (
            <a key={article.slug} href={`/articles/${article.slug}`}>
              <div
                className="faq-item article-section group flex cursor-pointer items-center justify-between rounded-md transition-all duration-300 sm:p-3"
                key={article.slug}
              >
                <div className="max-w-[800px] max-sm:pt-3.5">
                  <h2 className="text-base font-normal text-[#1a1a1a] transition-colors duration-300 group-hover:text-[#2B61DE]">
                    {article.title}
                  </h2>
                  <p className="pt-2 text-base font-normal text-[#737373] transition-colors duration-300">
                    {article.description}
                  </p>
                </div>
                <div className="group-hover:bg-custom-hover p-3 transition-colors duration-300">
                  <Image
                    className="transition-colors duration-300"
                    style={{ marginLeft: '20px' }}
                    src={ChevronRight}
                    alt="Chevron Right"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FAQ;
