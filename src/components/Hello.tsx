import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export const Hello = async () => {
  const t = await getTranslations('Dashboard');
  const user = await currentUser();

  return (
    <>
      <p>
        {`👋 `}
        {t('hello_message', { email: user?.emailAddresses[0]?.emailAddress })}
      </p>
      <p>
        {`Looking for a SaaS Boilerplate? `}
        <Link
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://nextjs-boilerplate.com/pro-saas-starter-kit"
        >
          Next.js Boilerplate SaaS
        </Link>
        {` can help you build one.`}
      </p>
    </>
  );
};
