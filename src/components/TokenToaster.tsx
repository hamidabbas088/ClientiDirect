'use client';

import 'react-toastify/dist/ReactToastify.css';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export default function TokenToaster() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const token = searchParams.get('access_token');

  useEffect(() => {
    if (token) {
      toast.success(
        `Access token detected: You have successfully logged in through Google`,
        {
          position: 'top-right',
        },
      );

      // Replace the URL without the query string
      router.replace(pathname);
    }
  }, [token, router, pathname]);

  return <ToastContainer />;
}
