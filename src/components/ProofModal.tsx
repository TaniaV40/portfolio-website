'use client';

import React from 'react';
import { Competency, CATEGORY_LABELS } from '@/data/competencies';
import { X, CheckCircle, ShieldCheck, Tag, Code2, Eye, FileText } from 'lucide-react';

interface ProofModalProps {
  competency: Competency | null;
  onClose: () => void;
}

export const ProofModal: React.FC<ProofModalProps> = ({ competency, onClose }) => {
  if (!competency) return null;

  const categoryMeta = CATEGORY_LABELS[competency.category];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1E0F35]/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white border border-[#E2D9E6] rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Header Bar */}
        <div className="px-6 py-5 border-b border-[#E2D9E6] bg-[#FAF8FB] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-md bg-[#442B63]/10 border border-[#442B63]/20 text-[#442B63] text-xs font-bold uppercase tracking-wider">
              {categoryMeta.title}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-[#E2D9E6] text-[#666666] text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-[#A27EAB]" /> {competency.proofType.replace('_', ' ')}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#666666] hover:text-[#333333] hover:bg-[#E2D9E6]/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Title & Description */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#333333] tracking-tight">
              {competency.title}
            </h2>
            <p className="mt-3 text-[#555555] text-base leading-relaxed">
              {competency.description}
            </p>
          </div>

          {/* Proof Summary Card */}
          <div className="rounded-xl bg-[#F4EDF6] border border-[#E2D9E6] p-5 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-[#442B63]">
              <ShieldCheck className="w-5 h-5 text-[#442B63]" />
              <span>Suggested Proof & Artefact Methodology</span>
            </div>
            <p className="text-sm text-[#333333] font-medium leading-relaxed">
              {competency.suggestedProof}
            </p>
            {competency.proofDetails?.summary && (
              <div className="pt-3 border-t border-[#E2D9E6] text-xs text-[#666666]">
                <strong className="text-[#333333]">Context:</strong> {competency.proofDetails.summary}
              </div>
            )}
          </div>

          {/* Highlights List */}
          {competency.proofDetails?.highlights && competency.proofDetails.highlights.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-heading text-xs font-bold text-[#442B63] tracking-wide uppercase">
                Key Technical & Business Capabilities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {competency.proofDetails.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#333333] bg-[#FAF8FB] p-3 rounded-lg border border-[#E2D9E6] font-medium">
                    <CheckCircle className="w-4 h-4 text-[#A27EAB] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sample Text / System Prompt snippet if present */}
          {competency.proofDetails?.sampleText && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#442B63] uppercase">
                <Code2 className="w-4 h-4 text-[#A27EAB]" /> Prompt / Code Excerpt
              </div>
              <pre className="p-4 rounded-xl bg-[#1E0F35] border border-[#442B63] text-xs font-mono text-[#E4BDDD] overflow-x-auto whitespace-pre-wrap leading-relaxed shadow-inner">
                {competency.proofDetails.sampleText}
              </pre>
            </div>
          )}

          {/* Tags */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-[#A27EAB]" />
            {competency.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md bg-[#FAF8FB] text-[#442B63] border border-[#E2D9E6] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#E2D9E6] bg-[#FAF8FB] flex items-center justify-between">
          <span className="text-xs text-[#666666] flex items-center gap-1.5 font-medium">
            <FileText className="w-4 h-4 text-[#A27EAB]" /> Artefact: {competency.artefactName}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#442B63] hover:bg-[#2D1847] text-white text-xs font-semibold transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
