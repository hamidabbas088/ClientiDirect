'use client';
import 'react-toastify/dist/ReactToastify.css'; // Import styles

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { Suspense, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import Google from '@/assets/images/google.webp';
import ClientiDirect from '@/assets/images/logo-icon.png';
import InputField from '@/components/common/InputField';

function LoginContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();

  const validateEmail = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('Email-ul este obligatoriu.');
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = (): boolean => {
    if (!password.trim()) {
      setPasswordError('Password is required.');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/token`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      if (response.ok) {
        const data = await response.json();

        if (data && data.access_token) {
          localStorage.setItem('token', data.access_token);
          toast.success('Login successful! Redirecting...');
          router.push('/');
        } else {
          throw new Error(
            'Authentication failed. Please check your credentials.',
          );
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Autentificarea a eșuat');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (typeof window === 'undefined') {
      return;
    }
    setGoogleLoading(true);

    try {
      const redirectUrl = 'https://clientidirect.com';
      const googleAuthUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/login/google?user_type=tenant&language=de&redirect_url=${encodeURIComponent(
        redirectUrl,
      )}`;

      const response = await fetch(googleAuthUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();

        if (data.authorization_url) {
          window.location.href = data.authorization_url;
        } else {
          throw new Error('Authorization URL not found');
        }
      } else {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Failed to fetch Google login URL',
        );
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message); // Error toast
      } else {
        toast.error('Something went wrong'); // General error toast
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-[352px]">
      <ToastContainer />
      {' '}
      {/* Add ToastContainer for displaying toasts */}
      <form onSubmit={handleSubmit} className="w-full py-12 max-[400px]:px-6">
        <div className="mb-4 flex flex-col items-center justify-center">
          <Image
            src={ClientiDirect}
            alt="ClientiDirect-Logo"
            width={48}
            height={48}
          />
          <div className="mt-6 flex flex-col text-center">
            <h2 className="text-3xl font-bold leading-9 tracking-tight text-[#111827]">
              Bine ai revenit
            </h2>
            <p className="mt-1 text-[15px] font-normal leading-8 text-gray-500">
              Te rog să introduci detaliile tale.
            </p>
          </div>
        </div>

        <InputField
          label="Email"
          value={email}
          name="email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError('');
          }}
        />
        {emailError && (
          <p className="pt-2 text-sm text-red-500">{emailError}</p>
        )}

        <InputField
          label="Parolă"
          value={password}
          name="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError('');
          }}
        />
        {passwordError && (
          <p className="pt-2 text-sm text-red-500">{passwordError}</p>
        )}

        <div className="mb-4 flex items-center justify-between pt-4">
          <label
            htmlFor="rememberMe"
            className="flex cursor-pointer items-center gap-1"
          >
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={rememberMe}
              onChange={e => setRememberMe(e.target.checked)}
              className="text-gray-500"
            />
            <p className="text-sm leading-8 text-gray-500">Ține-mă minte</p>
          </label>
          <p className="text-sm text-blue-600 hover:text-blue-500">
            Ai uitat parola?
          </p>
        </div>

        <button
          type="submit"
          className="mt-[2px] w-full max-w-[350px] cursor-pointer rounded-lg border border-blue-700 bg-blue-600 py-2 align-middle text-sm font-medium text-white hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Se conectează...' : 'Conectare'}
        </button>

        <div className="my-4 flex w-full max-w-[350px] items-center">
          <hr className="w-full border-gray-300" />
          <span className="bg-white px-2 text-sm text-gray-600">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="mb-3 flex w-full max-w-[350px] items-center justify-center rounded-md border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          disabled={googleLoading}
        >
          {googleLoading
            ? (
                'Se redirecționează...'
              )
            : (
                <>
                  <Image
                    src={Google}
                    alt="Google"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Înscrie-te cu Google
                </>
              )}
        </button>

        <p className="py-8 text-center text-sm text-[#020817]">
          Nu ai un cont încă?
          {' '}
          <Link
            href="/auth/register"
            className="text-blue-600 hover:text-blue-500"
          >
            Începe proba gratuită de 14 zile
          </Link>
        </p>
      </form>
    </div>
  );
}

export default function Signup() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}
