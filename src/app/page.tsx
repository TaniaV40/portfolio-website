'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeaturedShowcase } from '@/components/FeaturedShowcase';
import { CompetencyMatrix } from '@/components/CompetencyMatrix';
import { ProofModal } from '@/components/ProofModal';
import { ContactSection } from '@/components/ContactSection';
import { Competency } from '@/data/competencies';

export default function Home() {
  const [selectedCompetency, setSelectedCompetency] = useState<Competency | null>(null);

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedShowcase onSelectCompetency={setSelectedCompetency} />
      <CompetencyMatrix onSelectCompetency={setSelectedCompetency} />
      <ContactSection />
      <ProofModal
        competency={selectedCompetency}
        onClose={() => setSelectedCompetency(null)}
      />
    </main>
  );
}
