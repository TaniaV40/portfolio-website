'use client';

import React from 'react';
import { Competency, FEATURED_PRODUCTS } from '@/data/competencies';
import { ExternalLink, Sparkles, CheckCircle2, FileCode, Play, BarChart3 } from 'lucide-react';

interface FeaturedShowcaseProps {
  onSelectCompetency: (item: Competency) => void;
}

export const FeaturedShowcase: React.FC<FeaturedShowcaseProps> = ({ onSelectCompetency }) => {
  return (
    <section id="featured" className="py-16 bg-[#FAF8FB] border-b border-[#E2D9E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A27EAB] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Spotlight Flagships
            </div>
            <h2 className="font-heading text-3xl font-extrabold text-[#333333] tracking-tight">
              Featured Digital Products & Automations
            </h2>
          </div>
          <p className="text-[#666666] text-sm max-w-md">
            Click any featured item to inspect its underlying architecture, proof artefacts, and functionality specs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_PRODUCTS.map((product) => {
            const isBlurb = product.id === 'blurbsmith';
            const isSeo = product.id === 'seo-diagnostic-tool';

            return (
              <div
                key={product.id}
                onClick={() => onSelectCompetency(product)}
                className="group relative cursor-pointer rounded-2xl bg-white border border-[#E2D9E6] hover:border-[#A27EAB] p-6 flex flex-col justify-between transition-all duration-300 brand-card-shadow brand-card-shadow-hover hover:-translate-y-1"
              >
                {/* Visual Header Mockup */}
                <div
                  className={`w-full h-44 rounded-xl mb-5 bg-gradient-to-br ${
                    isBlurb
                      ? 'from-[#442B63] to-[#2D1847]'
                      : isSeo
                      ? 'from-[#2E5E4E] to-[#1E3E34]'
                      : 'from-[#6A4793] to-[#442B63]'
                  } flex flex-col items-center justify-center p-4 relative overflow-hidden shadow-inner`}
                >
                  {isBlurb && (
                    <div className="relative z-10 text-center text-white">
                      <FileCode className="w-10 h-10 mx-auto text-[#E4BDDD] mb-2" />
                      <span className="font-mono text-xs font-semibold bg-black/30 text-white px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                        Google Docs API Active
                      </span>
                    </div>
                  )}

                  {isSeo && (
                    <div className="relative z-10 text-center text-white">
                      <BarChart3 className="w-10 h-10 mx-auto text-[#A2E3C4] mb-2" />
                      <span className="font-mono text-xs font-semibold bg-black/30 text-white px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                        Local SEO Score: 94/100
                      </span>
                    </div>
                  )}

                  {!isBlurb && !isSeo && (
                    <div className="relative z-10 text-center text-white">
                      <Play className="w-10 h-10 mx-auto text-[#E4BDDD] mb-2" />
                      <span className="font-mono text-xs font-semibold bg-black/30 text-white px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                        Multi-Agent Graph
                      </span>
                    </div>
                  )}

                  <span className="absolute bottom-3 right-3 text-[10px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded bg-black/50 text-white backdrop-blur-sm">
                    {product.proofDetails?.badgeText || product.proofType}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#333333] group-hover:text-[#442B63] transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#666666] line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#FAF8FB] text-[#442B63] font-semibold border border-[#E2D9E6]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-[#E2D9E6] flex items-center justify-between text-xs text-[#442B63] font-semibold">
                  <span className="flex items-center gap-1.5 text-[#442B63]">
                    <CheckCircle2 className="w-4 h-4 text-[#A27EAB]" /> Inspect Proof & Specs
                  </span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-[#A27EAB]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
