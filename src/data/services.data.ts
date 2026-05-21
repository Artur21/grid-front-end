import { Activity, Shield, FileCheck, type LucideIcon } from 'lucide-react'

export interface ServiceSection {
  id: string
  title: string
  body: string
  imagePosition?: 'left' | 'right'
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceStat {
  value: string
  label: string
}

export interface ServiceCTA {
  label: string
  href: string
}

export interface ServiceDetail {
  id: string
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  color: string
  sections: ServiceSection[]
  features: string[]
  stats: ServiceStat[]
  faqs: ServiceFAQ[]
  cta: ServiceCTA
  related: string[]
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'managed-noc',
    icon: Activity,
    title: 'Managed Network Operations',
    subtitle: 'Continuous operational visibility across your renewable energy portfolio',
    description:
      'Continuous monitoring of your renewable energy assets and communication infrastructure. Our NOC team manages performance, availability and fault response across generation, storage and grid-connection assets — so your operational staff have clear visibility and a defined escalation path at all times.',
    color: '#00d4ff',
    sections: [
      {
        id: 'coverage',
        title: 'What We Monitor',
        body: 'Our NOC covers the full asset communication stack — from field device telemetry and SCADA links through to corporate network boundaries. We handle multi-vendor environments including wind, solar, storage and grid-connection assets, adapting monitoring to the specific protocols and interfaces your equipment uses. Coverage includes Modbus, DNP3, IEC 61850, OPC-UA and proprietary vendor interfaces.',
        imagePosition: 'right',
      },
      {
        id: 'escalation',
        title: 'Fault Management & Escalation',
        body: 'Faults are triaged and escalated through a defined playbook, with structured handover between remote and field teams. Escalation paths, SLAs and notification contacts are agreed during onboarding so your operational staff always know what to expect — and never receive noise without context. We manage the full fault lifecycle from detection through to resolution confirmation.',
        imagePosition: 'left',
      },
    ],
    features: [
      'Asset and performance monitoring',
      'Fault detection and escalation management',
      'Remote diagnostics and field coordination',
      'Integration with SCADA, DMS and EMS platforms',
      'Multi-site portfolio visibility',
      'Custom dashboards and reporting',
      'Planned maintenance window management',
      'Monthly operational performance review',
    ],
    stats: [
      { value: '24/7', label: 'Continuous coverage' },
      { value: '<15 min', label: 'Fault escalation' },
      { value: 'Multi-vendor', label: 'Asset support' },
    ],
    faqs: [
      {
        question: 'What types of assets do you monitor?',
        answer:
          'We support a wide range of renewable energy assets including wind turbines, solar inverters, battery storage systems and grid-connection equipment. We adapt to multi-vendor environments and common OT protocols including Modbus, DNP3, IEC 61850 and OPC-UA.',
      },
      {
        question: 'How do you handle existing SCADA systems?',
        answer:
          'We integrate with your existing SCADA, DMS and EMS platforms rather than replacing them. Our monitoring layer provides an additional visibility tier that complements existing control system infrastructure and feeds into our NOC workflows.',
      },
      {
        question: 'What are your typical SLAs?',
        answer:
          'SLAs are defined during onboarding and depend on the nature of your assets and operational requirements. Typical fault escalation targets are 15 minutes for critical alerts, with structured response and field coordination procedures agreed in advance.',
      },
    ],
    cta: { label: 'Discuss Your Requirements', href: '#contact' },
    related: ['managed-security', 'assessment-design'],
  },
  {
    id: 'managed-security',
    icon: Shield,
    title: 'Managed Security Services',
    subtitle: 'OT-aware threat monitoring and incident response for industrial environments',
    description:
      'OT-aware threat monitoring and incident response delivered by analysts who understand the operational constraints of industrial environments. We detect, investigate and respond to security events without disrupting the systems your operations depend on.',
    color: '#7c3aed',
    sections: [
      {
        id: 'ot-approach',
        title: 'Built for Operational Environments',
        body: 'Standard IT security tools apply poorly in OT environments. Our approach uses passive network monitoring and behavioural analysis — no active scanning, no automated responses that risk operational disruption. We build a baseline of normal behaviour and detect deviations that indicate threat activity specific to industrial control systems and energy infrastructure.',
        imagePosition: 'right',
      },
      {
        id: 'response',
        title: 'Incident Response That Considers Operations',
        body: 'When a security event is identified, our analysts assess operational impact before recommending response actions. Incident playbooks are designed for industrial contexts, and every response decision considers availability and process continuity alongside security posture. We work with your operational team — not around them.',
        imagePosition: 'left',
      },
    ],
    features: [
      'Continuous OT/ICS security monitoring',
      'Incident detection, investigation and response',
      'Compliance alignment with IEC 62443 and NIS2',
      'Vulnerability management for operational environments',
      'Threat intelligence relevant to the energy sector',
      'Monthly security reporting and trend analysis',
      'Security event correlation and triage',
      'Regulatory reporting support',
    ],
    stats: [
      { value: 'Passive', label: 'Non-intrusive monitoring' },
      { value: 'IEC 62443', label: 'Standards alignment' },
      { value: '24/7', label: 'SOC coverage' },
    ],
    faqs: [
      {
        question: 'Will security monitoring interfere with our OT systems?',
        answer:
          'No. Our approach uses passive monitoring and behavioural analysis — we do not perform active scanning or automated responses that could interfere with operational systems. Detection is based on network traffic analysis and log collection using read-only methods.',
      },
      {
        question: 'How does incident response work in an OT environment?',
        answer:
          'Every incident response action is assessed for operational impact before being recommended. Our analysts work with your operational team to ensure that security response does not cause process disruption — the order of priority is always safety, operations, then security.',
      },
      {
        question: 'What regulatory frameworks do you align with?',
        answer:
          'We support alignment with IEC 62443, NIS2 and sector-specific requirements for energy operators. We can also support alignment with NERC CIP and other frameworks relevant to your jurisdiction.',
      },
    ],
    cta: { label: 'Talk to the Security Team', href: '#contact' },
    related: ['managed-noc', 'assessment-design'],
  },
  {
    id: 'assessment-design',
    icon: FileCheck,
    title: 'Assessment & Design Services',
    subtitle: 'Architecture reviews and security assessments for operational environments',
    description:
      'Architecture reviews, security assessments and operational readiness evaluations for organisations building or improving their OT monitoring and security capability. We work with your team to understand current gaps and design the right foundation — whether you are commissioning new assets or maturing an existing programme.',
    color: '#00d4ff',
    sections: [
      {
        id: 'assessment',
        title: 'Understanding Your Current State',
        body: 'An assessment engagement starts by understanding your existing architecture, tooling and processes — not by imposing a framework. We document what is in place, identify gaps relative to your operational and regulatory requirements, and produce a prioritised view of where to focus improvement effort. The output is practical and specific to your environment.',
        imagePosition: 'right',
      },
      {
        id: 'design',
        title: 'Designing the Right Foundation',
        body: 'Design work translates assessment findings into architecture decisions — tool selection, network segmentation, integration approaches and operational processes. Reference designs are tailored to your asset type and scale, with a path to implementation that can be handed to an internal team or delivered through a managed service.',
        imagePosition: 'left',
      },
    ],
    features: [
      'OT network architecture review and design',
      'Security posture and gap assessments',
      'NOC and SOC readiness evaluations',
      'Reference designs for renewable energy sites',
      'IEC 62443 and NIS2 compliance gap analysis',
      'Implementation roadmap and vendor guidance',
      'Tooling selection and evaluation support',
      'Stakeholder presentation and reporting',
    ],
    stats: [
      { value: 'Fixed-scope', label: 'Predictable engagement' },
      { value: 'Vendor-neutral', label: 'Independent advice' },
      { value: '4–8 weeks', label: 'Typical delivery' },
    ],
    faqs: [
      {
        question: 'How long does an assessment typically take?',
        answer:
          'A standard security posture or NOC readiness assessment typically takes 4–6 weeks from kick-off to final report. Larger scope engagements or those covering multiple sites may take longer — this is scoped during an initial discovery call before we begin.',
      },
      {
        question: 'Is the assessment disruptive to operations?',
        answer:
          'No. Assessment work is designed to be non-intrusive. We work primarily through interviews, documentation review and passive observation. Where network data collection is needed, this is passive and read-only.',
      },
      {
        question: 'What does the deliverable look like?',
        answer:
          'The primary deliverable is a written report covering current state findings, risk-prioritised recommendations and a reference architecture or implementation roadmap. We also provide a presentation to your leadership team and a practical handover for the team responsible for implementation.',
      },
    ],
    cta: { label: 'Request an Assessment', href: '#contact' },
    related: ['managed-noc', 'managed-security'],
  },
]
