"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/questions", label: "All Questions" },
  { href: "/quiz", label: "Course Quiz" },
  { href: "/states", label: "State Guides" },
  { href: "/submit", label: "Ask Question" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-brand-700 leading-tight">FNS50322 Answers</div>
              <div className="text-xs text-slate-500 leading-tight">Diploma of Finance and Mortgage Broking</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/search" className="p-2 text-slate-500 hover:text-brand-600">
              <Search className="w-5 h-5" />
            </Link>
            <Button asChild size="sm">
              <Link href="/quiz">Become a Broker</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden py-4 border-t border-slate-100">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-3 flex gap-2">
                <Link href="/search" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </Link>
                <Button asChild className="flex-1">
                  <Link href="/quiz">Become a Broker</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
