'use client';

import React from 'react';
import { Mail, ArrowUpRight, Shield, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#FAF8FB] border-t border-[#E2D9E6] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#1E0F35] via-[#2D1847] to-[#442B63] border border-[#442B63] p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold text-[#E4BDDD] uppercase tracking-wider block mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#E4BDDD]" /> Ready to Collaborate?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interested in hiring or commissioning an AI build?
            </h2>
            <p className="mt-4 text-[#FAF8FB]/90 text-sm sm:text-base leading-relaxed">
              Whether you need AI product development, operational workflow automation, diagnostic sales tools, or prompt system design—reach out to discuss requirements and case studies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="mailto:tania@taniavorster.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#A27EAB] to-[#E4BDDD] hover:opacity-95 text-[#1E0F35] font-bold text-sm shadow-lg transition-all"
              >
                <Mail className="w-4 h-4" /> Get in Touch <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E2D9E6] flex flex-col sm:flex-row items-center justify-between text-xs text-[#666666] gap-4 font-medium">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#442B63]" />
            <span>Tania Vorster • TaniaVorster.com Brand Specification</span>
          </div>
          <div>
            © {new Date().getFullYear()} Tania Vorster. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
