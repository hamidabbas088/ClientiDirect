import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Logo from '../../assets/images/logo-icon.png';
import GlobeIcon from '../../assets/svgs/globe.svg';
import SearchIcon from '../../assets/svgs/search-icon.svg';

export default function FaqHeader() {
  return (
    <div>
      <nav className="flex flex-col">
        <div className="faq-header relative pb-9">
          <div className="mx-auto flex h-full max-w-[960px] flex-col items-center px-6">
            <div className="relative mb-6 w-full pb-6">
              <div className="pt-6 leading-none">
                <div className="flex items-center justify-between">
                  <Link href="/">
                    <Image
                      className="cursor-pointer"
                      src={Logo}
                      alt="Logo"
                      width={35}
                      height={35}
                    />
                  </Link>
                  <div className="flex items-center gap-1">
                    <Image src={GlobeIcon} alt="Globe Icon" />
                    {/* <select name="language" id="language-select">
                      <option value="Romania">Romania</option>
                    </select> */}
                    <p className="text-sm text-white">Romania</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hover:bg-[hsla(0deg 0% 100% / 27%)] w-[-webkit-fill-available] max-w-[960px] rounded-[10px] bg-[#333333] p-4">
              <div className="flex items-center gap-1.5">
                <div>
                  <Image src={SearchIcon} alt="Search Icon" />
                </div>
                <input
                  className="w-full max-w-[960px] text-white placeholder:text-white"
                  type="search"
                  id="search-input"
                  placeholder="Search for articles..."
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
