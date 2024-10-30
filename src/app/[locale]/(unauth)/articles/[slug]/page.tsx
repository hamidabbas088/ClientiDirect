import { promises as fs } from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';

import SmallAngle from '@/assets/svgs/small-angle.svg';

type Props = {
  params: {
    slug: string;
  };
};

const articlesDirectory = path.join(
  process.cwd(),
  'src',
  'app',
  '[locale]',
  '(unauth)',
  'content',
  'articles',
);

const getArticles = async () => {
  const files = await fs.readdir(articlesDirectory);
  const articles = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(articlesDirectory, file);
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const { data } = matter(fileContent);
      return {
        title: data.title,
        description: data.description,
        slug: file.replace('.mdx', ''),
      };
    }),
  );
  return articles;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const formattedTitle = slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());

  return {
    title: `${formattedTitle} | ClientiDirect Centru de Ajutor`,
    description: `Găsiți toate informațiile despre ${formattedTitle} în Centrul de Ajutor ClientiDirect. Obțineți răspunsuri la întrebările dvs. despre acest subiect.`,
    metadataBase: new URL(`https://clientidirect.com/faq/${slug}`),
  };
}

export async function generateStaticParams() {
  const articlesPath = path.join(
    process.cwd(),
    'src',
    'app',
    '[locale]',
    '(unauth)',
    'content',
    'articles',
  );
  try {
    const filenames = await fs.readdir(articlesPath);
    return filenames.map(filename => ({
      slug: filename.replace(/\.mdx$/, ''),
    }));
  } catch (error) {
    console.error('Error reading directory:', error);
    throw new Error(`Could not read the articles directory: ${articlesPath}`);
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = params;
  const filePath = path.join(articlesDirectory, `${slug}.mdx`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { content } = matter(fileContent);
    const formattedSlug = slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase());
    const articles = await getArticles();

    return (
      <div
        className="article-container mx-auto max-w-[650px] px-6 pt-9"
        style={{ fontFamily: 'system-ui' }}
      >
        <nav className="mb-4 flex items-center gap-2 text-sm">
          <Link href="/faq">
            <span className="cursor-pointer text-gray-400 hover:text-black">
              FAQ
            </span>
          </Link>
          <Image src={SmallAngle} alt="Small Angle" />
          <span className="text-gray-400">{formattedSlug}</span>
        </nav>

        <div className="prose mx-auto mb-10 mt-12 max-w-[720px] prose-h2:mb-0 prose-h2:text-[32px] prose-h2:leading-[40px] prose-h2:text-[#1a1a1a] prose-h3:text-[16px] prose-h3:font-semibold prose-h5:text-sm prose-p:text-[16px] prose-p:leading-[24px] prose-p:text-[#475467] prose-a:font-normal prose-a:text-blue-600 prose-a:underline prose-ul:text-[16px] prose-ul:leading-[24px] prose-ul:text-[#475467] prose-li:my-0 prose-li:-ml-2.5 prose-li:list-[lower-alpha] prose-li:text-[#475467] prose-li:marker:text-base prose-li:marker:text-[#475467] max-xl:px-10 max-lg:px-4 max-md:mt-12 max-md:px-4">
          <MDXRemote source={content} />
        </div>

        <h3 className="text-[22px] font-bold text-[#1a1a1a]">
          Related Articles
        </h3>

        <div className="mt-5 rounded-lg border border-[#E6E6E6] px-3 py-4">
          {articles.slice(0, 5).map(article => (
            <a key={article.slug} href={`/articles/${article.slug}`}>
              <div
                className="faq-item article-section group flex cursor-pointer items-center justify-between rounded-md p-3 transition-all duration-300"
                key={article.slug}
              >
                <div className="max-w-[510px]">
                  <h2 className="text-base font-normal text-[#1a1a1a] transition-colors duration-300 group-hover:text-[#2B61DE]">
                    {article.title}
                  </h2>
                  <p className="pt-2 text-base font-normal text-[#737373] transition-colors duration-300">
                    {article.description}
                  </p>
                </div>
                <div className="transition-colors duration-300">
                  <Image
                    className="transition-colors duration-300"
                    src={SmallAngle}
                    alt="Chevron Right"
                    style={{ marginLeft: '20px' }}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="rounded-card -mx-4 -mb-4 mt-6 rounded-lg bg-[#f2f2f2] p-3 sm:-mx-1 sm:-mb-2 sm:mt-8">
          <div className="pb-1 pt-2.5 text-center">
            Did this answer your question?
          </div>
          <div className="flex justify-center">
            <button className="inline-block h-full w-[50px] origin-[50%_60%] cursor-pointer bg-none p-0 text-center text-[32px] transition-transform delay-[20ms] duration-[160ms] ease-[cubic-bezier(0.65,0.61,0.18,1.8)] hover:scale-125">
              <span title="Disappointed">😞</span>
            </button>
            <button className="inline-block h-full w-[50px] origin-[50%_60%] cursor-pointer bg-none p-0 text-center text-[32px] transition-transform delay-[20ms] duration-[160ms] ease-[cubic-bezier(0.65,0.61,0.18,1.8)] hover:scale-125">
              <span title="Neutral">😐</span>
            </button>
            <button className="inline-block h-full w-[50px] origin-[50%_60%] cursor-pointer bg-none p-0 text-center text-[32px] transition-transform delay-[20ms] duration-[160ms] ease-[cubic-bezier(0.65,0.61,0.18,1.8)] hover:scale-125">
              <span title="Smiley">😃</span>
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error reading file:', error);
    return <div>Error loading article content. Please try again later.</div>;
  }
}
