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
  BookOpen,
  SlidersHorizontal,
} from 'lucide-react';

export default function Home() {
  const [selectedCompetency, setSelectedCompetency] = useState<Competency | null>(null);
  const [activeTrack, setActiveTrack] = useState<'all' | 'ops' | 'author'>('all');
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  // Categorize competencies into Dual Tracks
  const filteredCompetencies = useMemo(() => {
    return COMPETENCIES.filter((item) => {
      if (activeTrack === 'ops') {
        return (
          item.category === 'operations' ||
          item.category === 'clients' ||
          item.category === 'strategy' ||
          item.id === 'sports-coaching-system' ||
          item.id === 'seo-diagnostic-tool' ||
          item.id === 'prod-toolstack-tracker'
        );
      }
      if (activeTrack === 'author') {
        return (
          item.id === 'blurbsmith' ||
          item.id === 'prod-ideation-app' ||
          item.id === 'prod-voice-guide' ||
          item.id === 'prod-mindmap-app' ||
          item.id === 'prod-video-mockup' ||
          item.id === 'prompt-character-system'
        );
      }
      return true;
    });
  }, [activeTrack]);

  const accordionItems = [
    {
      num: '01',
      title: 'AI OPERATIONS STRATEGY & WORKFLOWS',
      desc: 'Orchestrating n8n, Make, and GoHighLevel pipeline architectures to eliminate manual friction, automate lead intake, and restructure enterprise CRMs.',
      items: ['Multi-Agent Operations Architecture', 'Automated Lead-to-Booking Pipeline', 'CRM Taxonomy & Tag Restructuring'],
    },
    {
      num: '02',
      title: 'ENTERPRISE SYSTEM ARCHITECTURE',
      desc: 'Engineering multi-venue operations systems, PWA check-in frameworks, technical build briefs, and standard operating procedures (SOPs).',
      items: ['Enterprise Sports Coaching & Operations Platform', 'Technical Build Briefs & Specs', 'SOP Documentation Hub'],
    },
    {
      num: '03',
      title: 'DIGITAL TOOLS FOR AUTHORS & WRITERS',
      desc: 'Building intelligent SaaS tools, AI blurb engines, writing plotters, and manuscript style analyzers under the Writing with Melissa hub.',
      items: ['BlurbSmith: AI Book Blurb Generator', 'Story Starter: Creative Ideation Web App', 'Manuscript Style Guide Engine'],
    },
    {
      num: '04',
      title: 'PROMPT ENGINEERING & DIAGNOSTIC ENGINES',
      desc: 'Designing structured system prompts, zero-shot JSON schemas, diagnostic scoring rubrics, and multimodal character bibles.',
      items: ['Sports Coaching Efficiency Diagnostic Tool', 'Diagnostic System Prompts', 'Character Development Framework'],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white font-sans antialiased overflow-x-hidden">
      {/* ── 1. TOP HEADER BRAND BANNER ────────────────────────────── */}
      <header className="relative w-full bg-[#FF3B00] text-white pt-8 pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden border-b border-[#FF3B00]">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-wider mb-8 border-b border-white/20 pb-4">
          <a href="https://taniavorster.com" className="hover:opacity-80 transition-opacity">Tania Vorster</a>
          <span className="hidden sm:inline">AI Operations Strategist & Digital Tools Architecture</span>
          <a
            href="https://taniavorster.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition-colors flex items-center gap-1.5"
          >
            Get in Touch <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-6xl sm:text-8xl lg:text-[140px] font-black uppercase tracking-tight leading-none text-white drop-shadow-md">
                TANIA
              </h1>
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[110px] font-black uppercase tracking-tight leading-none text-black/90">
                VORSTER
              </h1>
            </div>

            <div className="lg:col-span-4 bg-black/90 p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-md">
              <p className="font-serif text-xl sm:text-2xl italic leading-snug text-[#FF3B00] mb-3">
                AI Operations Strategist & Systems Architect
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Designing operational frameworks, enterprise workflows, and specialized digital tools across B2B operations and author creative systems.
              </p>
              <div className="mt-6">
                <a
                  href="https://taniavorster.com/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF3B00] hover:bg-white hover:text-black font-bold text-xs uppercase tracking-wider text-white shadow-lg transition-all"
                >
                  Start a Conversation <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── 2. DUAL TRACK FILTER BAR ──────────────────────────────── */}
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
              All Competencies ({COMPETENCIES.length})
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

            <button
              onClick={() => setActiveTrack('author')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTrack === 'author'
                  ? 'bg-[#FF3B00] text-white shadow-lg'
                  : 'bg-black text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Digital Tools for Authors</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 3. CRAFTING SYSTEMS THAT CONNECT PEOPLE ───────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-8 lg:px-12 bg-[#0B0B0B] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase leading-[1.05] tracking-tight">
                CRAFTING <span className="text-[#FF3B00] italic">SYSTEMS</span> THAT CONNECT PEOPLE
              </h2>
              <p className="text-base sm:text-xl text-slate-300 font-sans leading-relaxed max-w-2xl">
                Most growing organizations don't have a growth problem—they have a chaos problem. I design and build the operational systems, multi-agent frameworks, and digital tools that fix it.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white text-black rounded-lg shadow-xl transform -rotate-2 hover:rotate-0 transition-transform border border-slate-200">
                  <div className="w-full h-28 bg-[#FF3B00] rounded mb-3 flex items-center justify-center text-white">
                    <Workflow className="w-10 h-10" />
                  </div>
                  <span className="font-mono text-[11px] font-bold uppercase block text-center">AI Operations</span>
                </div>

                <div className="p-4 bg-white text-black rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform border border-slate-200">
                  <div className="w-full h-28 bg-[#141414] rounded mb-3 flex items-center justify-center text-[#FF3B00]">
                    <Cpu className="w-10 h-10" />
                  </div>
                  <span className="font-mono text-[11px] font-bold uppercase block text-center">Digital Tools</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-black text-[#FF3B00] block">25+</span>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono mt-1 block">Years Experience</span>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-black text-white block">20+</span>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono mt-1 block">Verifiable Proofs</span>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-black text-white block">2</span>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono mt-1 block">Dedicated Tracks</span>
            </div>
            <div>
              <span className="font-serif text-4xl sm:text-5xl font-black text-[#FF3B00] block">100%</span>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono mt-1 block">Execution-Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. NUMBERED EXPERTISE ACCORDION (01, 02, 03, 04) ──────── */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-[#121212] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF3B00] block mb-2">
              // Frameworks & Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight">
              DESIGN EXPERTISE TO TRANSFORM IDEAS INTO DIGITAL TOOLS
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

      {/* ── 5. SPOTLIGHT SHOWCASE ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-4 sm:px-8 lg:px-12 bg-[#0B0B0B] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF3B00] block mb-2">
                // Flagship Digital Tools
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
                FEATURED DIGITAL TOOLS & PLATFORMS
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
            {FEATURED_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                onClick={() => setSelectedCompetency(prod)}
                className="group cursor-pointer rounded-2xl bg-[#141414] border border-white/10 hover:border-[#FF3B00] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div>
                  <div className="w-full h-40 rounded-xl bg-gradient-to-br from-[#FF3B00]/20 via-[#141414] to-black border border-white/10 p-5 flex flex-col justify-between mb-5 relative overflow-hidden group-hover:border-[#FF3B00]/40 transition-colors">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#FF3B00] text-white w-fit">
                      {prod.proofDetails?.badgeText || prod.proofType}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-white group-hover:text-[#FF3B00] transition-colors">
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
                    <ShieldCheck className="w-3.5 h-3.5 text-white" /> View Specs
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. COMPETENCY MATRIX DIRECTORY ────────────────────────── */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-[#121212] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF3B00] block mb-2">
                // Filtered Competency Directory
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-tight">
                All Demonstrated Competencies & Digital Proofs
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Showing {filteredCompetencies.length} items for track: <strong className="text-[#FF3B00] uppercase">{activeTrack}</strong>
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
                  <span>Inspect Spec</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF3B00]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. EDITORIAL FOOTER ───────────────────────────────────── */}
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
          <span>Tania Vorster • AI Operations Strategist</span>
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
