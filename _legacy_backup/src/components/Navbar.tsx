"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image className="h-8 w-8" src="/logo.png" alt="Logo" width={32} height={32} />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/courses" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Courses</Link>
                <Link href="/about" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/get-started" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Get Started</Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen.toString()}
              aria-label="Toggle mobile menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/courses" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Courses</Link>
            <Link href="/about" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="/get-started" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Get Started</Link>
          </div>
          </div>
      )}
    </nav>
  );
};

export default Navbar;
