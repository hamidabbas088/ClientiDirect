'use client';

import 'react-toastify/dist/ReactToastify.css';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export default function TokenToaster() {
  const searchParams = useSearchParams();
  const token = searchParams.get('access_token');

  useEffect(() => {
    if (token) {
      toast.success(
        `Access token detected: You have successfully logged in through Google`,
        {
          position: 'top-right',
        },
      );

      const newUrl = window.location.pathname;
      window.history.replaceState(null, '', newUrl);
    }
  }, [token]);

  return <ToastContainer />;
}
