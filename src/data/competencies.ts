export type CompetencyCategory =
  | 'product'
  | 'marketing'
  | 'operations'
  | 'clients'
  | 'strategy'
  | 'prompts';

export type ProofType =
  | 'live_app'
  | 'screen_recording'
  | 'screenshot'
  | 'redacted_document'
  | 'workflow_diagram'
  | 'framework_spec'
  | 'prompt_spec';

export interface Competency {
  id: string;
  category: CompetencyCategory;
  title: string;
  description: string;
  suggestedProof: string;
  proofType: ProofType;
  artefactName: string;
  featured?: boolean;
  tags: string[];
  proofDetails?: {
    summary: string;
    highlights: string[];
    sampleText?: string;
    badgeText?: string;
    imagePlaceholderBg?: string;
    link?: string;
  };
}

export const CATEGORY_LABELS: Record<CompetencyCategory, { title: string; subtitle: string; icon: string }> = {
  product: {
    title: 'Business Apps & SaaS Platforms',
    subtitle: 'Sports coaching management systems, PWAs, diagnostic engines & business tools built',
    icon: 'Cpu',
  },
  marketing: {
    title: 'Marketing & Conversion Copy',
    subtitle: 'B2B sales pages, advertorials, CRM sequences & brand positioning',
    icon: 'Megaphone',
  },
  operations: {
    title: 'Operations & Workflows',
    subtitle: 'Automated lead pipelines, n8n/GHL/Make architectures, multi-agent systems',
    icon: 'Workflow',
  },
  clients: {
    title: 'Clients & Sales Frameworks',
    subtitle: 'Audit-led sales, discovery call frameworks & onboarding systems',
    icon: 'Users',
  },
  strategy: {
    title: 'Business Strategy & Specs',
    subtitle: 'Technical build briefs, SOPs, pricing models & project structures',
    icon: 'FileText',
  },
  prompts: {
    title: 'Prompt Engineering & AI Schemas',
    subtitle: 'System prompts, diagnostic engines, zero-shot JSON schemas & business workflows',
    icon: 'Terminal',
  },
};

export const FEATURED_PRODUCTS: Competency[] = [
  {
    id: 'sports-coaching-system',
    category: 'product',
    title: 'ShoSoccer Sports Coaching Management System',
    description: 'Star flagship sports coaching platform managing 780+ active members across multi-venue operations, trainer dispatch, automated parent billing, and student analytics.',
    suggestedProof: 'System architecture specification & white-labeled operational workflow diagram.',
    proofType: 'framework_spec',
    artefactName: 'ShoSoccer Sports Coaching Platform',
    featured: true,
    tags: ['Flagship Web App', 'ShoSoccer Platform', 'Multi-Venue SaaS', 'Automated Billing', 'Coach Dispatch'],
    proofDetails: {
      summary: 'End-to-end operational web platform built for sports coaching academies, managing 780+ active members, multi-venue scheduling, trainer check-ins, automated parent subscription billing, and student progress tracking.',
      highlights: [
        'Scaled active membership from 26 to 780+ managed members automatically',
        'Multi-venue coach dispatch & automated schedule optimization',
        'Mobile PWA attendance check-in with offline sync capabilities',
        'Automated parent subscription billing & instant SMS notifications',
        'Student skill progression tracking & executive analytics dashboard'
      ],
      badgeText: '★ STAR FLAGSHIP APP',
      imagePlaceholderBg: 'from-[#FF3B00] to-[#1E0F35]',
    }
  },
  {
    id: 'seo-diagnostic-tool',
    category: 'product',
    title: 'Sports Coaching Efficiency Diagnostic Tool',
    description: 'Automated audit and scoring engine delivering instant operational diagnostic reports, venue efficiency scores, and actionable fix roadmaps.',
    suggestedProof: 'Live diagnostic tool web application & scored audit report.',
    proofType: 'live_app',
    artefactName: 'Sports Coaching Diagnostic System',
    featured: true,
    tags: ['Live Web App', 'Sports Efficiency', 'Scoring Engine', 'Audit Report'],
    proofDetails: {
      summary: 'Automated diagnostic web application built to audit sports coaching operations, calculating efficiency scores across venue utilization, coach ratios, and revenue leakage.',
      link: 'https://audit-sports-efficiency.co.uk/sport-coaching-diagnostic-tool',
      highlights: [
        'Automated scoring rubric across key sports coaching operational metrics',
        'Instant diagnostic breakdown & prioritized remediation roadmap',
        'Direct lead-gen intake integration with CRM pipeline'
      ],
      badgeText: 'Live Diagnostic Tool',
      imagePlaceholderBg: 'from-emerald-600 to-teal-900',
    }
  },
  {
    id: 'prod-toolstack-tracker',
    category: 'product',
    title: 'OneToolAway: Tool Stack Tracker',
    description: 'Web application for auditing, tracking, and optimizing software tool stacks, subscription overhead, and operational tool ROI.',
    suggestedProof: 'Live web application demo & tool stack audit interface.',
    proofType: 'live_app',
    artefactName: 'OneToolAway Digital Product',
    featured: true,
    tags: ['Live Web App', 'Tool Stack Tracker', 'SaaS Audit', 'Operations'],
    proofDetails: {
      summary: 'Allows businesses and digital creators to catalogue software tools, track recurring costs, map integration dependencies, and eliminate stack redundancy.',
      link: 'https://www.onetoolaway.com/toolstack_traker',
      highlights: [
        'Software subscription & renewal cost tracking',
        'Integration mapping across GHL, n8n, Make, and custom APIs',
        'Redundant software elimination & stack ROI scoring'
      ],
      badgeText: 'Live Business App',
      imagePlaceholderBg: 'from-blue-600 to-slate-900',
    }
  },
  {
    id: 'multi-agent-ops',
    category: 'operations',
    title: 'Multi-Agent Operations Architecture',
    description: 'Orchestrated AI agent system handling internal triage, content transformation, and task handoffs.',
    suggestedProof: 'Architecture diagram showing agent roles, communication protocols, and execution loops.',
    proofType: 'workflow_diagram',
    artefactName: 'Internal Ops Agent Framework',
    featured: true,
    tags: ['Multi-Agent Systems', 'n8n / Make', 'Process Automation', 'AI Orchestration'],
    proofDetails: {
      summary: 'Designed an autonomous multi-agent hierarchy where specialized agents handle inquiry intake, classification, document drafting, and human-in-the-loop review.',
      highlights: [
        'Decoupled agent roles for editing, validation, and notification',
        'Automated error fallback and escalation protocols',
        'Reduces manual operational overhead by up to 70%'
      ],
      badgeText: 'AI Operations Architecture',
      imagePlaceholderBg: 'from-purple-600 to-slate-900',
    }
  }
];

export const COMPETENCIES: Competency[] = [
  ...FEATURED_PRODUCTS,
  // PRODUCT
  {
    id: 'prod-event-pwa',
    category: 'product',
    title: 'Event & Venue Check-In Mobile PWA',
    description: 'Progressive Web App featuring native camera capture, barcode scanning, and offline sync for sports venue managers.',
    suggestedProof: 'Screen recording on mobile device demonstrating offline check-in.',
    proofType: 'screen_recording',
    artefactName: 'Mobile Event PWA',
    tags: ['PWA', 'Offline First', 'Camera API', 'Venue Ops'],
    proofDetails: {
      summary: 'Allows coaching staff and venue managers to check in attendees seamlessly even in zero-connectivity venues, syncing once reconnected.',
      highlights: ['IndexedDB local cache', 'Instant camera QR/barcode scanner']
    }
  },
  {
    id: 'prod-biz-audit',
    category: 'product',
    title: 'Business Operations Audit & PDF Export Tool',
    description: 'Visual reporting tool generating client diagnostic reports gated behind CRM intake.',
    suggestedProof: 'Sample anonymized PDF report with scoring breakdown.',
    proofType: 'redacted_document',
    artefactName: 'Gated Audit Generator',
    tags: ['Operations Audit', 'CRM Integration', 'PDF Export'],
    proofDetails: {
      summary: 'Feeds survey responses into a scoring algorithm to produce white-labeled PDF performance audits.',
      highlights: ['Dynamic chart generation', 'Gated email/CRM capture']
    }
  },
  {
    id: 'prod-affiliate-scoring',
    category: 'product',
    title: 'Product Evaluation & Scoring Framework',
    description: 'Algorithmic methodology for objective business tool evaluation and recommendation scoring.',
    suggestedProof: 'Scoring rubric framework document.',
    proofType: 'framework_spec',
    artefactName: 'Product Evaluation Rubric',
    tags: ['Methodology', 'Scoring Model', 'Business Systems'],
    proofDetails: {
      summary: 'A multi-weighted scoring rubric evaluating software reliability, user satisfaction, pricing efficiency, and feature utility.',
      highlights: ['Objective feature-weighting formula', 'ROI evaluation metric']
    }
  },

  // MARKETING & COPYWRITING
  {
    id: 'mkt-landing-pages',
    category: 'marketing',
    title: 'High-Converting B2B Sales Pages & Advertorials',
    description: 'Direct-response copywriting for landing pages, advertorials, and lead acquisition.',
    suggestedProof: 'Before/after brief and hero section copy layout.',
    proofType: 'redacted_document',
    artefactName: 'Direct Response Copy Suite',
    tags: ['Copywriting', 'Direct Response', 'Conversion Rate'],
    proofDetails: {
      summary: 'Crafted hero headers, hook angles, body copy, and CTA positioning tuned for cold traffic conversion.',
      highlights: ['PAS (Problem-Agitate-Solve) copy structures', 'A/B hook testing variations']
    }
  },
  {
    id: 'mkt-meta-ads',
    category: 'marketing',
    title: 'Meta Ad Campaign Copywriting Suite',
    description: 'Structured primary text, headlines, and creative concepts across awareness and conversion funnel stages.',
    suggestedProof: 'Styled Meta ad mockup cards with headline & primary text pairing.',
    proofType: 'screenshot',
    artefactName: 'Meta Ad Copy Matrix',
    tags: ['Meta Ads', 'Paid Media', 'Ad Hooks'],
    proofDetails: {
      summary: 'Developed modular ad copy variations targeting diverse customer avatars and psychological triggers.',
      highlights: ['Lead-gen & retargeting copy angles', 'Pattern-interrupt headlines']
    }
  },
  {
    id: 'mkt-outreach-sequences',
    category: 'marketing',
    title: 'Cold & Warm B2B Outreach Sequences',
    description: 'Multi-touch email outreach flows focused on high reply rates without spamming.',
    suggestedProof: 'Redacted anonymized outreach thread with conversion milestones.',
    proofType: 'redacted_document',
    artefactName: 'B2B Email Outreach System',
    tags: ['Outreach', 'B2B Sales', 'Email Copy'],
    proofDetails: {
      summary: 'Personalized angle generation combined with short, value-first email touches that open conversations.',
      highlights: ['Low-friction friction-free CTAs', 'Trigger-based follow-ups']
    }
  },
  {
    id: 'mkt-crm-nurture',
    category: 'marketing',
    title: 'CRM Email Nurture & Automation Copy',
    description: 'Automated email sequence architecture map with trigger/wait logic and conditional branches.',
    suggestedProof: 'Flow diagram of sequence logic and email content samples.',
    proofType: 'workflow_diagram',
    artefactName: 'Nurture Sequence Architecture',
    tags: ['CRM Email', 'Lifecycle Marketing', 'Automation Logic'],
    proofDetails: {
      summary: 'Mapped behavioral trigger logic (downloads, clicks, non-opens) to custom nurture streams.',
      highlights: ['Segmented path logic', 'Value-build onboarding sequences']
    }
  },
  {
    id: 'mkt-vsl-scripts',
    category: 'marketing',
    title: 'Video Sales Letter (VSL) & Short Scripting',
    description: 'Structured scripts for long-form VSLs, YouTube shorts, and TikTok reels with scene direction.',
    suggestedProof: 'Formatted script excerpt with visual/shot notes.',
    proofType: 'redacted_document',
    artefactName: 'VSL & Video Script Package',
    tags: ['VSL', 'Video Copy', 'Scriptwriting'],
    proofDetails: {
      summary: 'Dual-column script formatting pairing spoken dialogue with visual B-roll cues and text overlays.',
      highlights: ['Attention-grabbing 3-second hooks', 'Logical slide-by-slide pitch deck flow']
    }
  },

  // OPERATIONS
  {
    id: 'ops-lead-pipeline',
    category: 'operations',
    title: 'Multi-Channel Automated Lead-to-Booking Pipeline',
    description: 'End-to-end automation connecting ad traffic, SMS/email follow-up, and calendar booking.',
    suggestedProof: 'n8n / GoHighLevel workflow canvas diagram.',
    proofType: 'workflow_diagram',
    artefactName: 'Lead-to-Booking System',
    tags: ['GoHighLevel', 'n8n', 'Zapier', 'Lead Routing'],
    proofDetails: {
      summary: 'Eliminates speed-to-lead latency by immediately routing new inbound leads to instant SMS and calendar invitations.',
      highlights: ['Sub-5-second lead response SLA', 'Multi-channel retry logic (SMS + Email)']
    }
  },
  {
    id: 'ops-crm-migration',
    category: 'operations',
    title: 'CRM Taxonomy Restructuring & Field Migration',
    description: 'Standardized tag hierarchy, custom object structure, and database clean-up framework.',
    suggestedProof: 'Before/after tag taxonomy and field mapping matrix.',
    proofType: 'framework_spec',
    artefactName: 'CRM Architecture Standard',
    tags: ['CRM Architecture', 'Data Quality', 'Taxonomy'],
    proofDetails: {
      summary: 'Reorganized chaotic legacy CRM databases into clean, queryable contact tags and custom pipeline stages.',
      highlights: ['Unified contact tag naming convention', 'Automated orphan data purging']
    }
  },

  // CLIENTS & SALES
  {
    id: 'sales-audit-approach',
    category: 'clients',
    title: 'Audit-Led Diagnostic Sales Methodology',
    description: 'Consultative sales process leveraging custom diagnostic tools to land high-value retainers.',
    suggestedProof: 'Anonymized Diagnostic Output Report & pitch deck.',
    proofType: 'redacted_document',
    artefactName: 'Diagnostic Sales Blueprint',
    tags: ['Consultative Sales', 'Audit Strategy', 'Deal Closing'],
    proofDetails: {
      summary: 'Replaces generic pitch calls with concrete data-backed diagnostic findings that prove value before contract signing.',
      link: 'https://audit-sports-efficiency.co.uk/sport-coaching-diagnostic-tool',
      highlights: ['Pre-call automated audit trigger', 'Quantified pain-point presentation']
    }
  },
  {
    id: 'sales-discovery-framework',
    category: 'clients',
    title: 'Discovery Call & Follow-Up Framework',
    description: 'Structured question matrix and staged follow-up sequence for closing technical deals.',
    suggestedProof: 'Framework document with question trees and follow-up templates.',
    proofType: 'framework_spec',
    artefactName: 'Discovery Call System',
    tags: ['Sales Discovery', 'Question Trees', 'Objection Handling'],
    proofDetails: {
      summary: 'Equips sales teams with targeted probing questions to uncover budget, authority, need, and timeline (BANT+).',
      highlights: ['Staged qualification questions', 'Custom proposal builder trigger']
    }
  },

  // STRATEGY
  {
    id: 'strat-tech-specs',
    category: 'strategy',
    title: 'Technical Build Briefs & Spec Documents',
    description: 'Engineering specs defining product scope, non-negotiable constraints, and API schemas.',
    suggestedProof: 'Redacted Technical Spec Document excerpt.',
    proofType: 'framework_spec',
    artefactName: 'Technical Architecture Brief',
    tags: ['Tech Specs', 'Product Mgmt', 'Architecture'],
    proofDetails: {
      summary: 'Provides software engineers with precise requirement documents including database schemas, endpoint definitions, and edge cases.',
      highlights: ['Data flow diagrams', 'Security & error handling rules']
    }
  },
  {
    id: 'strat-sop-docs',
    category: 'strategy',
    title: 'Standard Operating Procedures (SOP) System',
    description: 'Modular documentation hub standardizing operations across business teams.',
    suggestedProof: 'Formatted SOP document excerpt.',
    proofType: 'redacted_document',
    artefactName: 'SOP Documentation Hub',
    tags: ['SOP', 'Operations', 'Knowledge Base'],
    proofDetails: {
      summary: 'Step-by-step operational playbooks ensuring consistent execution and fast team onboarding.',
      highlights: ['Step-by-step screenshot guides', 'Quality control checklists']
    }
  },

  // PROMPT ENGINEERING
  {
    id: 'prompt-diagnostic-engine',
    category: 'prompts',
    title: 'System Prompt Design for Diagnostic Engines',
    description: 'Complex multi-step system prompts enforcing strict JSON schemas and scoring constraints.',
    suggestedProof: 'Actual system prompt document with XML structural tags.',
    proofType: 'prompt_spec',
    artefactName: 'Diagnostic System Prompt',
    tags: ['System Prompts', 'Structured Output', 'JSON Schemas'],
    proofDetails: {
      summary: 'Demonstrates advanced prompt engineering techniques including XML sectioning, chain-of-thought prompting, and strict JSON output guarantees.',
      sampleText: `<system_instruction>
You are an expert Operations & Diagnostic Auditor.
Analyze the provided business data. Output MUST adhere strictly to the JSON schema provided below.
Step 1: Evaluate venue efficiency score (0-100).
Step 2: Identify top 3 critical operational bottlenecks.
Step 3: Generate actionable 30-day remediation bullet points.
</system_instruction>`,
      highlights: ['Zero-shot JSON output compliance', 'Chain-of-Thought reasoning steps']
    }
  }
];
