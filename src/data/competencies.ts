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
    title: 'Product & AI Applications',
    subtitle: 'AI-powered SaaS tools, PWAs, writing & editorial software built',
    icon: 'Cpu',
  },
  marketing: {
    title: 'Marketing & Copywriting',
    subtitle: 'Conversion copy, advertorials, CRM sequences & brand positioning',
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
    title: 'Prompt Engineering',
    subtitle: 'System prompts, diagnostic engines, character sheet generators & multimodal workflows',
    icon: 'Terminal',
  },
};

export const FEATURED_PRODUCTS: Competency[] = [
  {
    id: 'blurbsmith',
    category: 'product',
    title: 'BlurbSmith: AI Book Blurb Generator',
    description: 'SaaS application for generating high-converting book blurbs with direct Google Docs export.',
    suggestedProof: 'Screen recording / live demo of rough input converted into finished blurb.',
    proofType: 'live_app',
    artefactName: 'BlurbSmith Digital Product',
    featured: true,
    tags: ['AI Product', 'Google Docs API', 'Next.js', 'LLM Generation'],
    proofDetails: {
      summary: 'Automates book blurb generation by taking rough story premises, character dynamics, and genre tropes, then generating polished back-cover copy with direct export to Google Docs.',
      link: 'https://blurb-smith.vercel.app/',
      highlights: [
        'Direct multi-template export into formatted Google Docs',
        'Genre-tuned hook generation (Thriller, Romance, Sci-Fi, Non-Fiction)',
        'Iterative tone controls and length adjusters'
      ],
      badgeText: 'Live Digital Product',
      imagePlaceholderBg: 'from-blue-600 to-indigo-900',
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
    tags: ['Live Diagnostic Tool', 'Sports Efficiency', 'Scoring Engine', 'Audit Report'],
    proofDetails: {
      summary: 'Automated diagnostic application built to audit sports coaching operations, calculating efficiency scores across venue utilization, coach ratios, and revenue leakage.',
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
    id: 'sports-coaching-system',
    category: 'product',
    title: 'Enterprise Sports Coaching & Operations Platform',
    description: 'Multi-venue coaching management system handling trainer allocation, session attendance, automated billing, and student skill analytics.',
    suggestedProof: 'System architecture specification & white-labeled operational workflow diagram.',
    proofType: 'framework_spec',
    artefactName: 'Sports Coaching Platform Architecture',
    featured: true,
    tags: ['Multi-Venue SaaS', 'PWA / Mobile', 'Automated Billing', 'Operations Engine'],
    proofDetails: {
      summary: 'End-to-end white-labeled operational platform designed for multi-venue sports academies and coaching organizations, handling session scheduling, coach check-ins, automated parent billing, and performance tracking.',
      highlights: [
        'Multi-venue coach dispatch & automated schedule optimization',
        'Mobile PWA attendance check-in with offline sync capabilities',
        'Automated parent subscription billing & instant SMS notifications',
        'Student skill progression tracking & analytics dashboard'
      ],
      badgeText: 'Flagship Platform System',
      imagePlaceholderBg: 'from-[#442B63] to-[#1E0F35]',
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
    id: 'prod-voice-guide',
    category: 'product',
    title: 'Editorial Voice & Tone Analysis Tool',
    description: 'Generates bespoke author style guides from manuscript excerpts.',
    suggestedProof: 'Redacted sample style guide side-by-side with original manuscript excerpt.',
    proofType: 'redacted_document',
    artefactName: 'Manuscript Style Guide Engine',
    tags: ['Editorial AI', 'Style Analysis', 'NLP'],
    proofDetails: {
      summary: 'Analyzes writing syntax, pacing, vocabulary complexity, and tone markers to generate a comprehensive style guide.',
      highlights: ['Syntax & vocabulary density mapping', 'Author voice preservation rulebook']
    }
  },
  {
    id: 'prod-ideation-app',
    category: 'product',
    title: 'Story Starter: Creative Plot & Ideation Web App',
    description: 'Interactive plot structuring and story starter web application helping authors construct multi-arc story premises from scratch.',
    suggestedProof: 'Live web application demo & premise development interface.',
    proofType: 'live_app',
    artefactName: 'Story Starter Digital Product',
    tags: ['Live Web App', 'Creative Writing', 'Next.js', 'Ideation AI'],
    proofDetails: {
      summary: 'Guides creators through beat sheet creation, story starter prompts, character motivation mapping, and conflict escalation.',
      link: 'https://story-starter-sable.vercel.app/',
      highlights: ['Interactive beat sheet & premise generator', 'Theme & subplot conflict tracker']
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
    tags: ['Live Web App', 'Tool Stack Tracker', 'SaaS Audit', 'Operations'],
    proofDetails: {
      summary: 'Allows businesses and digital creators to catalogue software tools, track recurring costs, map integration dependencies, and eliminate stack redundancy.',
      link: 'https://www.onetoolaway.com/toolstack_traker',
      highlights: [
        'Software subscription & renewal cost tracking',
        'Integration mapping across GHL, n8n, Make, and custom APIs',
        'Redundant software elimination & stack ROI scoring'
      ]
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
    title: 'Affiliate Product Scoring Framework',
    description: 'Algorithmic methodology for objective product evaluation and recommendation scoring.',
    suggestedProof: 'Scoring rubric framework document.',
    proofType: 'framework_spec',
    artefactName: 'Product Evaluation Rubric',
    tags: ['Methodology', 'Scoring Model', 'E-Commerce'],
    proofDetails: {
      summary: 'A multi-weighted scoring rubric evaluating merchant authority, buyer satisfaction, commission tier, and feature utility.',
      highlights: ['Objective feature-weighting formula', 'Conversion likelihood metric']
    }
  },
  {
    id: 'prod-mindmap-app',
    category: 'product',
    title: 'Story Planning & Mind-Map Application',
    description: 'Visual node-based interface for mapping complex multi-character narratives.',
    suggestedProof: 'Screenshot of populated node graph and story connection canvas.',
    proofType: 'screenshot',
    artefactName: 'Interactive Narrative Canvas',
    tags: ['Visual Canvas', 'Mind Mapping', 'Data Viz'],
    proofDetails: {
      summary: 'Enables writers to visualize character relationships, timeline overlaps, and worldbuilding lore.',
      highlights: ['Node-graph canvas rendering', 'Timeline filter overlay']
    }
  },
  {
    id: 'prod-video-mockup',
    category: 'product',
    title: 'Book Marketing Video Mockup Generator',
    description: 'Automated video rendering tool creating promotional teasers for novel launches.',
    suggestedProof: 'Sample video output / animated GIF demonstration.',
    proofType: 'screen_recording',
    artefactName: 'Video Teaser Generator',
    tags: ['Video Rendering', 'Book Marketing', 'Creative Automation'],
    proofDetails: {
      summary: 'Transforms cover artwork and blurb hooks into dynamic 15-second social media video clips.',
      highlights: ['Kinetic typography presets', 'Automated aspect ratio exports (9:16, 16:9)']
    }
  },
  {
    id: 'prod-event-pwa',
    category: 'product',
    title: 'Event Management PWA with Offline Mode',
    description: 'Progressive Web App featuring native camera capture, barcode scanning, and offline sync.',
    suggestedProof: 'Screen recording on mobile device demonstrating offline check-in.',
    proofType: 'screen_recording',
    artefactName: 'Mobile Event PWA',
    tags: ['PWA', 'Offline First', 'Camera API'],
    proofDetails: {
      summary: 'Allows event staff to check in attendees seamlessly even in zero-connectivity venues, syncing once reconnected.',
      highlights: ['IndexedDB local cache', 'Instant camera QR/barcode scanner']
    }
  },

  // MARKETING
  {
    id: 'mkt-landing-pages',
    category: 'marketing',
    title: 'High-Converting Sales Pages & Advertorials',
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
  {
    id: 'mkt-brand-voice',
    category: 'marketing',
    title: 'Brand Voice & Tone System Design',
    description: 'Comprehensive brand guidelines establishing linguistic rules, anti-patterns, and audience framing.',
    suggestedProof: 'Brand Voice Specification Document.',
    proofType: 'framework_spec',
    artefactName: 'Brand Voice Playbook',
    tags: ['Branding', 'Voice & Tone', 'Guidelines'],
    proofDetails: {
      summary: 'Establishes clear rules for how a brand speaks across social, customer support, and sales channels.',
      highlights: ['"We Say / We Don\'t Say" tables', 'Tone calibration matrix by channel']
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
    description: 'Modular documentation hub standardizing operations across editorial and development teams.',
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
You are an expert Local SEO Auditor.
Analyze the provided business profile data. Output MUST adhere strictly to the JSON schema provided below.
Step 1: Evaluate citation consistency score (0-100).
Step 2: Identify top 3 critical NAP (Name, Address, Phone) errors.
Step 3: Generate actionable 30-day remediation bullet points.
</system_instruction>`,
      highlights: ['Zero-shot JSON output compliance', 'Chain-of-Thought reasoning steps']
    }
  },
  {
    id: 'prompt-character-system',
    category: 'prompts',
    title: 'Character Development & Narrative Prompt Framework',
    description: 'System prompt producing deeply textured fictional character bibles and dialogue samples.',
    suggestedProof: 'Prompt framework & generated character sheet worked example.',
    proofType: 'prompt_spec',
    artefactName: 'Character Bible Prompt Engine',
    tags: ['Creative Prompts', 'Character Bibles', 'Worldbuilding'],
    proofDetails: {
      summary: 'Prompts designed to extract psychological flaws, core desires, dialogue cadence, and character arcs.',
      highlights: ['Dialogue tone consistency locks', 'Character flaw & motivation matrix']
    }
  }
];
