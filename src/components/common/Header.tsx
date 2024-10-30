'use client';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import AgenciesDropdown from '@/assets/svgs/agencies-dropdown.svg';
import GoogleAnalytics from '@/assets/svgs/google-analytics-dropdown.svg';
import IdentifyDropdown from '@/assets/svgs/identify-dropdown-icon.svg';
import marketingDropdown from '@/assets/svgs/marketing-dropdown.svg';
import SalesIcon from '@/assets/svgs/sales-icon.svg';
import ChevronDownIcon from '@/public/svgs/chevron-down';

import logo from '../../assets/svgs/header-logo-icon.svg';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(prev => (prev === dropdownName ? null : dropdownName));
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      className="sticky top-0 z-[9999] w-full backdrop-blur-md"
      style={{ background: 'rgb(7 11 24 / 80%)' }}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-6">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center gap-3">
              <Image src={logo} height={28} width={28} alt="Logo" />
              <p className="pt-1 text-xl font-semibold text-white">
                ClientiDirect
              </p>
            </div>
          </Link>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex gap-x-[37px] text-sm text-white">
            <li className="dropdown relative flex items-center">
              <button
                onClick={() => toggleDropdown('products')}
                className="flex items-center gap-2 font-bold hover:text-gray-300"
              >
                <p>Produse</p>
                <div className="size-3">
                  <ChevronDownIcon />
                </div>
              </button>
              {openDropdown === 'products' && (
                <div className="absolute left-1/2 top-5 mt-2 w-[350px] -translate-x-1/2 rounded-[14px] border border-[#ffffff26] bg-[#070b18] p-5 shadow-lg">
                  <ul>
                    <li className="flex cursor-pointer items-center rounded-lg p-2 hover:opacity-80">
                      <Link
                        href="/features/lead-generation"
                        passHref
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="flex items-start">
                          <Image
                            src={IdentifyDropdown}
                            alt="Identifică"
                            loading="lazy"
                            width={50}
                            height={50}
                          />
                          <div className="ml-4">
                            <p className="font-semibold">Identifică</p>
                            <p className="pt-2 text-sm text-gray-400">
                              Transformă traficul anonim de pe site-ul tău în
                              lead-uri acționabile.
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <Link
                      href="/features/google-analytics"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <li className="flex cursor-pointer items-start rounded-lg p-2 hover:opacity-80">
                        <Image
                          src={GoogleAnalytics}
                          alt="Google Analytics"
                          loading="lazy"
                          width={50}
                          height={50}
                        />
                        <div className="ml-4">
                          <p className="font-semibold">
                            Îmbogățitor Google Analytics
                          </p>
                          <p className="pt-2 text-sm text-gray-400">
                            Transformă Google Analytics într-o platformă
                            dedicată analizelor B2B.
                          </p>
                        </div>
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
            <li className="dropdown relative flex items-center">
              <button
                onClick={() => toggleDropdown('solutions')}
                className="flex items-center gap-2 font-bold hover:text-gray-300"
              >
                <p>Soluții</p>
                <div className="size-3">
                  <ChevronDownIcon />
                </div>
              </button>
              {openDropdown === 'solutions' && (
                <div className="absolute left-1/2 top-4 mt-2 w-[350px] -translate-x-1/2 rounded-[14px] border border-[#ffffff26] bg-[#070b18] p-5 shadow-lg">
                  <ul>
                    <Link
                      href="/solutions/sales"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <li className="flex cursor-pointer items-start rounded-lg p-2 hover:opacity-80">
                        <Image
                          src={SalesIcon}
                          alt="Pentru vânzări"
                          loading="lazy"
                          width={50}
                          height={50}
                        />
                        <div className="ml-4">
                          <p className="font-semibold">Pentru vânzări</p>
                          <p className="pt-2 text-sm text-gray-400">
                            Califică și prioritizează lead-urile cu intenție
                            ridicată.
                          </p>
                        </div>
                      </li>
                    </Link>
                    <Link
                      href="/solutions/marketing"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <li className="flex cursor-pointer items-start rounded-lg p-2 hover:opacity-80">
                        <Image
                          src={marketingDropdown}
                          loading="lazy"
                          alt="Pentru marketing"
                          width={50}
                          height={50}
                        />
                        <div className="ml-4">
                          <p className="font-semibold">Pentru marketing</p>
                          <p className="pt-2 text-sm text-gray-400">
                            Reduce risipa și îmbunătățește retargetarea.
                          </p>
                        </div>
                      </li>
                    </Link>
                    <Link
                      href="/solutions/agency"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <li className="flex cursor-pointer items-start rounded-lg p-2 hover:opacity-80">
                        <Image
                          src={AgenciesDropdown}
                          alt="Pentru agenții"
                          width={50}
                          height={50}
                        />
                        <div className="ml-4">
                          <p className="font-semibold">Pentru agenții</p>
                          <p className="pt-2 text-sm text-gray-400">
                            Generează mai multe lead-uri calificate pentru
                            clienții tăi.
                          </p>
                        </div>
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a href="/pricing" className="font-bold hover:text-gray-300">
                Prețuri
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden items-center justify-center gap-8 text-sm text-white lg:flex">
          <Link href="/auth/login">
            <button className="font-semibold">Autentificare</button>
          </Link>
          <Link href="/auth/register">
            <button className="flex items-center gap-1 rounded-full bg-[#3257ff] pb-[6px] pl-4 pr-2 pt-[7px] hover:bg-blue-600">
              <p>Începe acum</p>
              <ChevronRightIcon className="-mt-[2px] size-5" />
            </button>
          </Link>
        </div>
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <Bars3Icon className="size-10" />
          </button>
        </div>
      </div>
      <div
        className={`origin-top overflow-hidden bg-[#070b18] transition-all duration-300 ease-in-out lg:hidden${
          isMobileMenuOpen
            ? 'max-h-screen scale-y-100 opacity-100'
            : 'max-h-0 scale-y-0 opacity-0'
        }`}
      >
        <ul className="space-y-4 px-6 py-8 text-sm text-white">
          <li>
            <button
              className="flex w-full items-center text-left font-medium"
              onClick={() => toggleDropdown('products')}
            >
              Produse
              <div className="size-3 max-lg:ml-2">
                <ChevronDownIcon />
              </div>
            </button>
            {openDropdown === 'products' && (
              <ul className="space-y-2 py-2 text-gray-300">
                <Link
                  href="/features/lead-generation"
                  onClick={handleMenuItemClick}
                >
                  <li className="pt-2">
                    <p className="text-base">Identifică</p>
                  </li>
                </Link>
                <Link
                  href="/features/google-analytics"
                  onClick={handleMenuItemClick}
                >
                  <li className="pt-2">
                    <p className="text-base">Îmbogățitor Google Analytics</p>
                  </li>
                </Link>
              </ul>
            )}
          </li>
          <li>
            <button
              className="flex w-full items-center text-left font-semibold"
              onClick={() => toggleDropdown('solutions')}
            >
              Soluții
              <div className="size-3 max-lg:ml-2">
                <ChevronDownIcon />
              </div>
            </button>
            {openDropdown === 'solutions' && (
              <ul className="space-y-2 py-2 text-gray-300">
                <Link href="/solutions/sales" onClick={handleMenuItemClick}>
                  <li className="pt-2">
                    <p className="text-base">Pentru vânzări</p>
                  </li>
                </Link>
                <Link href="/solutions/marketing" onClick={handleMenuItemClick}>
                  <li className="pt-2">
                    <p className="text-base">Pentru marketing</p>
                  </li>
                </Link>
                <Link href="/solutions/agency" onClick={handleMenuItemClick}>
                  <li className="pt-2">
                    <p className="text-base">Pentru agenții</p>
                  </li>
                </Link>
              </ul>
            )}
          </li>
          <li>
            <a
              href="/pricing"
              className="block font-medium"
              onClick={handleMenuItemClick}
            >
              Prețuri
            </a>
          </li>
          <li className="mt-4 flex items-center gap-4 pt-4">
            <Link href="/auth/register" onClick={handleMenuItemClick}>
              <button className="flex items-center gap-1 rounded-full bg-[#3257ff] py-[7px] pl-5 pr-3 hover:bg-blue-600">
                Începe acum
                <ChevronRightIcon className="size-5" />
              </button>
            </Link>
            <Link href="/auth/login" onClick={handleMenuItemClick}>
              <button className="font-semibold">Autentificare</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto max-w-[1236px] border-b border-[#243643] px-6"></div>
    </header>
  );
}
