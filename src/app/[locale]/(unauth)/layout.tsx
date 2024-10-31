'use client';
import 'intersection-observer';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'mutationobserver-shim';
import 'react-toastify/dist/ReactToastify.css';
import '../../../styles/globals.css';

import localFont from 'next/font/local';
import { usePathname, useRouter } from 'next/navigation';
import Script from 'next/script';
import Promise from 'promise-polyfill';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import FaqFooter from '@/components/common/FaqFooter';
import FaqHeader from '@/components/common/FaqHeader';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

const soleil = localFont({
  src: [
    {
      path: '../../../assets/fonts/SoleilBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../assets/fonts/SoleilBook.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../assets/fonts/SoleilLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../assets/fonts/SoleilRegular.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-soleil',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isFaqPage, setIsFaqPage] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (!window.Promise) {
      window.Promise = Promise;
    }
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // eslint-disable-next-line no-console
        console.log(mutation);
      });
    });

    const targetNode = document.getElementById('some-element');
    if (targetNode) {
      observer.observe(targetNode, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') { /* empty */ }
  }, []);

  const isAuthPage
    = pathname === '/auth/login' || pathname === '/auth/register';
  const isCustomerStoriesPage = pathname === '/customer-stories';
  const isRedirectPage = pathname === '/redirect';

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (token && isAuthPage) {
      router.push('/');
    }
  }, [isAuthPage, router]);

  useEffect(() => {
    if (pathname === '/faq' || pathname.startsWith('/articles/')) {
      setIsFaqPage(true);
    } else {
      setIsFaqPage(false);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <Script
          src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
          strategy="beforeInteractive"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, height=device-height"
        />

        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5XVWCWWH');
            `,
          }}
        />
      </head>

      <body className={`${soleil.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5XVWCWWH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            sandbox="allow-scripts"
            title="Google Tag Manager"
          >
          </iframe>
        </noscript>

        {!isAuthPage && (isFaqPage ? <FaqHeader /> : <Header />)}

        <div
          className={`flex min-h-screen flex-col ${
            !isCustomerStoriesPage && !isRedirectPage ? 'bg-[#fcfcfd]' : ''
          }`}
        >
          <div
            className={`grow ${
              !isCustomerStoriesPage && !isRedirectPage ? 'pb-40' : ''
            }`}
          >
            {children}
          </div>
          <ToastContainer />
        </div>

        {!isAuthPage && (isFaqPage ? <FaqFooter /> : <Footer />)}

        <ToastContainer />
      </body>
    </html>
  );
}
