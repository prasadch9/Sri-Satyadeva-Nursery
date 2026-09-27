"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Plants", "/plants"],
  ["Services", "/services"],
  ["Contact Us", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-12 w-44 overflow-hidden rounded-xl bg-white sm:h-14 sm:w-56">
            <Image
              src="/branding/logo.jpg"
              alt="Sri Suryadeva Nursery logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map(([label, href]) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  active
                    ? "bg-emerald-700 text-white shadow-lg"
                    : "text-emerald-950 hover:-translate-y-1 hover:bg-lime-100 hover:text-emerald-700"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-xl bg-emerald-700 p-3 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-emerald-900/10 bg-white px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map(([label, href]) => {
              const active = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 font-bold ${
                    active
                      ? "bg-emerald-700 text-white shadow-lg"
                      : "text-emerald-950 hover:bg-lime-100"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}

