'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-extrabold text-[#0F264B] tracking-tight">
          ITBW
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav
          className={`
            ${isOpen ? 'flex' : 'hidden'}
            flex-col space-y-4 items-start
            md:flex md:flex-row md:space-y-0 md:space-x-6 md:items-center
          `}
        >
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-[#0F264B] hover:text-[#3A8DDB] font-medium transition"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block text-sm font-semibold text-[#0F264B]">
          +267 72 199 926
        </div>
      </div>
    </header>
  );
}
