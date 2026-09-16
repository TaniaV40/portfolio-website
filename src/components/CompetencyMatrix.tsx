'use client';

import React, { useState, useMemo } from 'react';
import {
  COMPETENCIES,
  CATEGORY_LABELS,
  CompetencyCategory,
  Competency,
} from '@/data/competencies';
import { Search, Cpu, Megaphone, Workflow, Users, FileText, Terminal, Layers, ExternalLink, ShieldCheck } from 'lucide-react';

interface CompetencyMatrixProps {
  onSelectCompetency: (item: Competency) => void;
}

const CATEGORY_ICONS: Record<CompetencyCategory, React.ReactNode> = {
  product: <Cpu className="w-4 h-4" />,
  marketing: <Megaphone className="w-4 h-4" />,
  operations: <Workflow className="w-4 h-4" />,
  clients: <Users className="w-4 h-4" />,
  strategy: <FileText className="w-4 h-4" />,
  prompts: <Terminal className="w-4 h-4" />,
};

export const CompetencyMatrix: React.FC<CompetencyMatrixProps> = ({ onSelectCompetency }) => {
  const [activeCategory, setActiveCategory] = useState<CompetencyCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCompetencies = useMemo(() => {
    return COMPETENCIES.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        item.suggestedProof.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: COMPETENCIES.length };
    COMPETENCIES.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <section id="competencies" className="py-16 lg:py-24 bg-[#FAF8FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A27EAB] uppercase tracking-wider mb-2">
            <Layers className="w-4 h-4" /> Verifiable Competency Matrix
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#333333] tracking-tight">
            Explore Demonstrated Skills & Proof Artefacts
          </h2>
          <p className="mt-3 text-[#666666] text-base leading-relaxed">
            Filter competencies by operational domain or use the search bar to locate specific frameworks, tools, or proof methodologies.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="space-y-6 mb-10">
          {/* Search Box */}
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A27EAB]" />
            <input
              type="text"
              placeholder="Search by skill, tool (e.g. n8n, GHL, SEO, Gemini)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#E2D9E6] focus:border-[#442B63] focus:ring-1 focus:ring-[#442B63] text-[#333333] placeholder-[#999999] text-sm outline-none transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#666666] hover:text-[#333333] font-semibold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-b border-[#E2D9E6] pb-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#442B63] text-white shadow-md shadow-[#442B63]/20'
                  : 'bg-white text-[#333333] hover:bg-[#F4EDF6] border border-[#E2D9E6]'
              }`}
            >
              <span>All Competencies</span>
              <span
                className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                  activeCategory === 'all' ? 'bg-white/20 text-white' : 'bg-[#FAF8FB] text-[#442B63]'
                }`}
              >
                {categoryCounts.all}
              </span>
            </button>

            {(Object.keys(CATEGORY_LABELS) as CompetencyCategory[]).map((catKey) => {
              const isActive = activeCategory === catKey;
              const catInfo = CATEGORY_LABELS[catKey];
              return (
                <button
                  key={catKey}
                  onClick={() => setActiveCategory(catKey)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                    isActive
                      ? 'bg-[#442B63] text-white shadow-md shadow-[#442B63]/20'
                      : 'bg-white text-[#333333] hover:bg-[#F4EDF6] border border-[#E2D9E6]'
                  }`}
                >
                  {CATEGORY_ICONS[catKey]}
                  <span>{catInfo.title}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#FAF8FB] text-[#442B63]'
                    }`}
                  >
                    {categoryCounts[catKey] || 0}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Competencies Grid */}
        {filteredCompetencies.length === 0 ? (
          <div className="text-center py-16 rounded-2xl bg-white border border-[#E2D9E6]">
            <p className="text-[#666666] text-sm">No competencies match your search query "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#442B63] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompetencies.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectCompetency(item)}
                className="group cursor-pointer rounded-xl bg-white border border-[#E2D9E6] hover:border-[#A27EAB] p-5 flex flex-col justify-between transition-all duration-200 brand-card-shadow brand-card-shadow-hover hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#442B63]/10 text-[#442B63] border border-[#442B63]/15">
                      {CATEGORY_LABELS[item.category].title}
                    </span>
                    <span className="text-[10px] font-semibold text-[#666666] bg-[#FAF8FB] border border-[#E2D9E6] px-2 py-0.5 rounded capitalize">
                      {item.proofType.replace('_', ' ')}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#333333] group-hover:text-[#442B63] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#555555] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E2D9E6] flex items-center justify-between">
                  <span className="text-[11px] text-[#A27EAB] flex items-center gap-1 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#442B63]" /> Proof Available
                  </span>
                  <span className="text-xs text-[#442B63] font-bold flex items-center gap-1 group-hover:underline">
                    Inspect <ExternalLink className="w-3 h-3 text-[#A27EAB]" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
