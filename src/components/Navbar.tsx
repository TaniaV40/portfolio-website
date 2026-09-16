'use client';

import React from 'react';
import { Sparkles, Layers, Briefcase, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 border-b border-[#E2D9E6] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#442B63] flex items-center justify-center text-white shadow-md shadow-[#442B63]/20 group-hover:bg-[#2D1847] transition-colors">
            <Sparkles className="w-5 h-5 text-[#E4BDDD]" />
          </div>
          <div>
            <span className="font-heading font-bold text-lg text-[#333333] tracking-tight block leading-tight">
              Tania Vorster
            </span>
            <span className="block text-xs text-[#A27EAB] font-semibold tracking-wide uppercase">
              AI Systems & Digital Products
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#333333]">
          <a href="#featured" className="hover:text-[#442B63] transition-colors flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-[#A27EAB]" /> Flagships
          </a>
          <a href="#competencies" className="hover:text-[#442B63] transition-colors flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-[#A27EAB]" /> Competency Matrix
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-[#442B63] hover:bg-[#2D1847] text-white font-semibold text-xs tracking-wide uppercase shadow-md shadow-[#442B63]/20 transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#E4BDDD]" /> Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
};
