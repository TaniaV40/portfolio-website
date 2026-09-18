'use client';

import React, { useState, useMemo } from 'react';
import {
  COMPETENCIES,
  FEATURED_PRODUCTS,
  Competency,
} from '@/data/competencies';
import { ProofModal } from '@/components/ProofModal';
import {
  ArrowUpRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Cpu,
  Workflow,
  ShieldCheck,
  CheckCircle2,
  SlidersHorizontal,
  Star,
  Clock,
  Globe,
} from 'lucide-react';

export default function Home() {
  const [selectedCompetency, setSelectedCompetency] = useState<Competency | null>(null);
  const [activeTrack, setActiveTrack] = useState<'all' | 'ops' | 'apps'>('all');
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  // Categorize competencies into Business Tracks
  const filteredCompetencies = useMemo(() => {
    return COMPETENCIES.filter((item) => {
      if (activeTrack === 'ops') {
        return (
          item.category === 'operations' ||
          item.category === 'clients' ||
          item.category === 'strategy' ||
          item.id === 'multi-agent-ops'
        );
      }
      if (activeTrack === 'apps') {
        return (
          item.category === 'product' ||
          item.id === 'sports-coaching-system' ||
          item.id === 'seo-diagnostic-tool' ||
          item.id === 'prod-toolstack-tracker'
        );
      }
      return true;
    });
  }, [activeTrack]);

  const accordionItems = [
    {
      num: '01',
      title: 'SHOSOCCER & ENTERPRISE BUSINESS PLATFORMS',
      desc: 'Engineering multi-venue operations systems, coach dispatch engines, PWA attendance check-in frameworks, automated parent subscription billing, and executive dashboards.',
      items: ['ShoSoccer Sports Coaching Management System (780+ Members)', 'Multi-Venue Coach Dispatch & Billing Engine', 'Mobile PWA Attendance Check-In with Offline Sync'],
    },
    {
      num: '02',
      title: 'AI OPERATIONS STRATEGY & WORKFLOWS',
      desc: 'Orchestrating n8n, Make, and GoHighLevel pipeline architectures to eliminate manual friction, automate lead intake, and restructure enterprise CRMs.',
      items: ['Multi-Agent Operations Architecture', 'Automated Sub-5-Second Lead Pipeline', 'CRM Taxonomy & Tag Restructuring'],
    },
    {
      num: '03',
      title: 'DIAGNOSTIC ENGINES & AUDIT SALES TOOLS',
      desc: 'Designing automated audit engines, diagnostic web tools, PDF report generators, and consultative sales frameworks that prove ROI before contract signing.',
      items: ['Sports Coaching Efficiency Diagnostic Tool', 'OneToolAway Tool Stack Tracker', 'Gated Audit & PDF Generator'],
    },
    {
      num: '04',
      title: 'TECHNICAL SPECS & PROMPT ARCHITECTURE',
      desc: 'Designing structured system prompts, zero-shot JSON schemas, technical build briefs, and standard operating procedures (SOPs).',
      items: ['Diagnostic JSON System Prompts', 'Technical Build Briefs & API Schemas', 'SOP Documentation Hub'],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white font-sans antialiased overflow-x-hidden">
      {/* ── 1. TOP HEADER BRAND BANNER ────────────────────────────── */}
      <header className="relative w-full bg-[#FF3B00] text-white pt-8 pb-0 px-4 sm:px-8 lg:px-12 overflow-hidden border-b border-[#FF3B00]">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 border-b border-white/20 pb-4 relative z-20">
          <a href="https://taniavorster.com" className="hover:opacity-80 transition-opacity">Tania Vorster</a>
          <span className="hidden sm:inline">AI Operations Strategist & Systems Architect</span>
          <a
            href="https://taniavorster.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition-colors flex items-center gap-1.5"
          >
            Get in Touch <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hero Magazine Banner Image Showcase */}
        <div className="max-w-7xl mx-auto relative rounded-t-2xl overflow-hidden leading-none border-t border-x border-white/20">
          <img
            src="/images/tania_hero_full.png"
            alt="Tania Vorster - AI Operations Strategist & Systems Architect. Your business shouldn't feel this hard to run. Most growing businesses don't have a growth problem. They have a chaos problem. I design and build the systems that fix it."
            className="w-full h-auto object-cover block mb-0"
          />
          <a
            href="https://taniavorster.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[4.2%] bottom-[9.5%] w-[22%] h-[9.5%] rounded-full bg-transparent hover:bg-white/15 transition-all z-10"
            title="Let's Solve Your Problem"
          >
            <span className="sr-only">Let's Solve Your Problem</span>
          </a>
        </div>
      </header>

      {/* ── 2. CREDIBILITY TRUST BANNER ─────────────────────────── */}
      <section className="bg-[#FF3B00] text-white py-9 border-t border-b border-white/20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            <div className="flex flex-col items-center text-center px-4 lg:border-r border-white/30">
              <Clock className="w-7 h-7 mb-3 text-white" />
              <p className="text-sm font-medium leading-snug">25 years in Business operations</p>
            </div>

            <div className="flex flex-col items-center text-center px-4 lg:border-r border-white/30">
              <Star className="w-7 h-7 mb-3 text-white" />
              <p className="text-sm font-medium leading-snug">5-star reviews from founders who’ve tried everything else first</p>
            </div>

            <div className="flex flex-col items-center text-center px-4 lg:border-r border-white/30">
              <Globe className="w-7 h-7 mb-3 text-white" />
              <p className="text-sm font-medium leading-snug">Clients across Europe and the USA</p>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <Cpu className="w-7 h-7 mb-3 text-white" />
              <p className="text-sm font-medium leading-snug">AI, automation & Operations specialist, building systems, not just advising on them</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. BUSINESS FILTER BAR ────────────────────────────────── */}
      <section className="py-8 bg-[#141414] border-b border-white/10 sticky top-0 z-30 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#FF3B00]">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Select Portfolio Focus:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTrack('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTrack === 'all'
                  ? 'bg-[#FF3B00] text-white shadow-lg'
                  : 'bg-black text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              All Business Systems ({COMPETENCIES.length})
            </button>

            <button
              onClick={() => setActiveTrack('apps')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTrack === 'apps'
                  ? 'bg-[#FF3B00] text-white shadow-lg'
                  : 'bg-black text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Business Apps & Platforms</span>
            </button>

            <button
              onClick={() => setActiveTrack('ops')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTrack === 'ops'
                  ? 'bg-[#FF3B00] text-white shadow-lg'
                  : 'bg-black text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>AI Operations Strategy</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 4. CRAFTING SYSTEMS THAT CONNECT PEOPLE ───────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-8 lg:px-12 bg-[#0B0B0B] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase leading-[1.05] tracking-tight">
                CRAFTING <span className="text-[#FF3B00] italic">BUSINESS SYSTEMS</span> THAT SCALE
              </h2>
              <p className="text-base sm:text-xl text-slate-300 font-sans leading-relaxed max-w-2xl">
                Most growing businesses don't have a growth problem—they have a chaos problem. I design and build the operational systems, multi-agent frameworks, and specialized business web applications that eliminate speed-to-lead latency and streamline multi-venue execution.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white text-black rounded-lg shadow-xl transform -rotate-2 hover:rotate-0 transition-transform border border-slate-200">
                  <div className="w-full h-28 bg-[#FF3B00] rounded mb-3 flex items-center justify-center text-white">
                    <Workflow className="w-10 h-10" />
                  </div>
                  <span className="font-mono text-[11px] font-bold uppercase block text-center">ShoSoccer System</span>
                </div>

                <div className="p-4 bg-white text-black rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform border border-slate-200">
                  <div className="w-full h-28 bg-[#141414] rounded mb-3 flex items-center justify-center text-[#FF3B00]">
                    <Cpu className="w-10 h-10" />
                  </div>
                  <span className="font-mono text-[11px] font-bold uppercase block text-center">Business Apps</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-black text-[#FF3B00] block">780+</span>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono mt-1 block">Members Managed (ShoSoccer)</span>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-black text-white block">25+</span>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono mt-1 block">Years Cross-Sector</span>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-black text-white block">20+</span>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono mt-1 block">System Proofs</span>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-black text-[#FF3B00] block">100%</span>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono mt-1 block">B2B Business App Focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. NUMBERED EXPERTISE ACCORDION (01, 02, 03, 04) ──────── */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-[#121212] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF3B00] block mb-2">
              // Frameworks & Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight">
              OPERATIONAL EXPERTISE & BUSINESS SYSTEM ARCHITECTURE
            </h2>
          </div>

          <div className="space-y-4">
            {accordionItems.map((item, idx) => {
              const isOpen = activeAccordion === idx;
              return (
                <div
                  key={idx}
                  className="border border-white/10 rounded-2xl bg-[#0B0B0B] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveAccordion(isOpen ? null : idx)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-serif text-4xl sm:text-6xl font-black text-[#FF3B00]">
                        {item.num}
                      </span>
                      <h3 className="font-serif text-xl sm:text-3xl font-bold uppercase tracking-wide">
                        {item.title}
                      </h3>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-[#FF3B00]" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-400" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 border-t border-white/10">
                      <p className="lg:col-span-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="lg:col-span-6">
                        <span className="text-xs font-mono uppercase text-[#FF3B00] block mb-3">
                          Key Deliverables & Proofs:
                        </span>
                        <ul className="space-y-2">
                          {item.items.map((sub, sIdx) => (
                            <li key={sIdx} className="text-xs sm:text-sm text-slate-200 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#FF3B00] shrink-0" />
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. SPOTLIGHT SHOWCASE ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-8 lg:px-12 bg-[#0B0B0B] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF3B00] block mb-2">
                // Flagship Business Web Apps
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
                FEATURED BUSINESS APPS & PLATFORMS
              </h2>
            </div>
            <a
              href="https://taniavorster.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF3B00] hover:bg-white hover:text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg shrink-0"
            >
              Get in Touch <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((prod) => {
              const isStar = prod.id === 'sports-coaching-system';
              return (
                <div
                  key={prod.id}
                  onClick={() => setSelectedCompetency(prod)}
                  className={`group cursor-pointer rounded-2xl bg-[#141414] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                    isStar
                      ? 'border-2 border-[#FF3B00] shadow-[0_0_30px_rgba(255,59,0,0.25)]'
                      : 'border border-white/10 hover:border-[#FF3B00]'
                  }`}
                >
                  <div>
                    <div className={`w-full h-40 rounded-xl p-5 flex flex-col justify-between mb-5 relative overflow-hidden transition-colors ${
                      isStar
                        ? 'bg-gradient-to-br from-[#FF3B00] via-[#900000] to-black border border-[#FF3B00]'
                        : 'bg-gradient-to-br from-[#FF3B00]/20 via-[#141414] to-black border border-white/10 group-hover:border-[#FF3B00]/40'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                          isStar ? 'bg-white text-black font-extrabold' : 'bg-[#FF3B00] text-white'
                        }`}>
                          {prod.proofDetails?.badgeText || prod.proofType}
                        </span>
                        {isStar && <Star className="w-5 h-5 text-white fill-white" />}
                      </div>
                      {isStar && (
                        <div className="text-white text-xs font-mono font-bold">
                          780+ Active Members Managed
                        </div>
                      )}
                    </div>

                    <h4 className="font-serif text-[#FF3B00] text-xl font-bold transition-colors">
                      {prod.title}
                    </h4>

                    <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {prod.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {prod.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#FF3B00] uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-white" /> View Specs & Proof
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. COMPETENCY MATRIX DIRECTORY ────────────────────────── */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-[#121212] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF3B00] block mb-2">
                // Filtered Business Directory
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-tight">
                All Business Competencies & System Proofs
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Showing {filteredCompetencies.length} items for focus: <strong className="text-[#FF3B00] uppercase">{activeTrack}</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredCompetencies.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedCompetency(item)}
                className="group cursor-pointer rounded-xl bg-[#0B0B0B] border border-white/10 hover:border-[#FF3B00] p-5 flex flex-col justify-between transition-all hover:shadow-lg"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#FF3B00] uppercase block mb-2 font-bold">
                    {item.category} • {item.proofType.replace('_', ' ')}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#FF3B00] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Inspect System Spec</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF3B00]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. EDITORIAL FOOTER ───────────────────────────────────── */}
      <footer className="py-24 px-4 sm:px-8 lg:px-12 bg-[#FF3B00] text-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-black font-bold block">
            // Let's Connect
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight text-white">
            LET'S BUILD SOMETHING EXTRAORDINARY TOGETHER
          </h2>

          <div className="pt-4">
            <a
              href="https://taniavorster.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white hover:bg-white hover:text-black font-bold text-sm uppercase tracking-wider shadow-2xl transition-all"
            >
              Start a Conversation <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/20 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-mono uppercase tracking-wider text-black/90 gap-4">
          <span>Tania Vorster • AI Operations Strategist & Business Systems Architect</span>
          <span>© {new Date().getFullYear()} Tania Vorster. All rights reserved.</span>
        </div>
      </footer>

      {/* Modal Drawer */}
      <ProofModal
        competency={selectedCompetency}
        onClose={() => setSelectedCompetency(null)}
      />
    </main>
  );
}
