'use client';

import React from 'react';
import { ArrowRight, Bot, Cpu, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 border-b border-[#E2D9E6] bg-gradient-to-b from-[#F4EDF6] via-[#FAF8FB] to-[#FAF8FB]">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E4BDDD]/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#442B63]/10 border border-[#442B63]/20 text-[#442B63] text-xs font-semibold mb-6">
            <Bot className="w-4 h-4 text-[#A27EAB]" />
            <span>AI Systems Architect & Digital Product Builder</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#333333] leading-[1.15]">
            Bridging AI Systems, <br className="hidden sm:inline" />
            <span className="gradient-text">Digital Products & Operations</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#555555] leading-relaxed font-sans">
            Welcome to my competency portfolio. Here you can inspect verifiable proof of AI tools built, operational workflows automated, and strategic frameworks designed across 
            <strong className="text-[#333333] font-semibold"> Gemini, ChatGPT, Claude</strong>, and custom codebases.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#competencies"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#442B63] hover:bg-[#2D1847] text-white font-semibold text-sm shadow-md shadow-[#442B63]/20 transition-all"
            >
              Explore Competency Matrix <ArrowRight className="w-4 h-4 text-[#E4BDDD]" />
            </a>
            <a
              href="#featured"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F4EDF6] border border-[#E2D9E6] text-[#442B63] font-semibold text-sm transition-all shadow-sm"
            >
              View Flagship Products
            </a>
          </div>

          {/* Quick Metrics / Highlights */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-[#E2D9E6]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#442B63]/10 text-[#442B63]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-heading text-xl font-bold text-[#333333]">6 Core</span>
                <span className="text-xs text-[#666666] font-medium">Skill Domains</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#A27EAB]/20 text-[#442B63]">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-heading text-xl font-bold text-[#333333]">20+ Proofs</span>
                <span className="text-xs text-[#666666] font-medium">Verifiable Artefacts</span>
              </div>
            </div>

            <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
              <div className="p-2.5 rounded-xl bg-[#E4BDDD]/40 text-[#442B63]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-heading text-xl font-bold text-[#333333]">End-to-End</span>
                <span className="text-xs text-[#666666] font-medium">Build & Deploy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
