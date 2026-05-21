export interface InsightSection {
  title: string
  body: string
}

export interface Insight {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  sections: InsightSection[]
  relatedSlugs: string[]
}

export const INSIGHTS: Insight[] = [
  {
    slug: 'understanding-iec-62443',
    category: 'Compliance',
    title: 'Understanding IEC 62443 for Renewable Energy Operators',
    excerpt:
      'IEC 62443 is increasingly referenced in regulatory requirements for energy operators. Here is what it actually requires and where renewable energy sites typically have gaps.',
    date: '15 October 2025',
    readingTime: '8 min read',
    sections: [
      {
        title: 'What IEC 62443 Actually Covers',
        body: 'IEC 62443 is a family of standards addressing security for industrial automation and control systems. Unlike many IT security standards, it was designed with operational continuity and safety in mind — recognising that in industrial environments, availability is not just a convenience but a safety requirement. The standard defines security levels, zones, conduits and a lifecycle approach to managing risk.',
      },
      {
        title: 'How It Applies to Wind and Solar Sites',
        body: 'Renewable energy sites typically operate as distributed systems connected to a central SCADA or EMS platform. Each site is a zone in IEC 62443 terms, with conduits representing the communication paths between zones. The standard requires that zone boundaries are identified, communication across those boundaries is controlled, and security levels are matched to the risk of each zone. For most sites, this means understanding what devices communicate with what, and ensuring that communication is secured appropriately.',
      },
      {
        title: 'Common Gaps and How to Address Them',
        body: 'The most common gaps we see when assessing renewable energy operators against IEC 62443 are: lack of network segmentation between the corporate and OT networks; insufficient visibility into what devices are communicating across zone boundaries; and absence of a documented baseline for normal network behaviour. Addressing these gaps does not require a large programme — a targeted architecture review and a passive monitoring capability will close most of them.',
      },
    ],
    relatedSlugs: ['passive-vs-active-ot-monitoring', 'noc-soc-renewable-energy'],
  },
  {
    slug: 'passive-vs-active-ot-monitoring',
    category: 'Technology',
    title: 'Passive vs Active OT Network Monitoring: Choosing the Right Approach',
    excerpt:
      'Active scanning can cause disruption in OT environments. Passive monitoring provides the visibility you need without the operational risk — but it requires a different setup.',
    date: '22 September 2025',
    readingTime: '6 min read',
    sections: [
      {
        title: 'Why Active Scanning is Risky in OT',
        body: 'Active scanning — sending probes to discover and enumerate devices — is standard practice in IT security. In OT environments, the same techniques can cause real operational problems. Many OT devices, including older PLCs and protection relays, respond unexpectedly to unsolicited network traffic. The consequences range from nuisance reboots to unexpected state changes. For critical infrastructure operators, these are not acceptable risks.',
      },
      {
        title: 'What Passive Monitoring Provides',
        body: 'Passive monitoring captures and analyses network traffic without generating any of its own. This means it can discover devices, identify protocols, and detect anomalous behaviour without posing any risk to operational systems. A well-implemented passive monitoring solution provides asset inventory, baseline traffic analysis, and detection of deviations from normal behaviour — all the inputs needed for both operational and security monitoring.',
      },
      {
        title: 'Getting Passive Monitoring Right',
        body: 'Passive monitoring requires appropriate network taps or SPAN ports to capture traffic at the right points. In a typical renewable energy site, this means monitoring the communication path between the field devices and the SCADA layer, and the connection between the OT network and the corporate network or Internet. The data captured then needs to be analysed by a system that understands OT protocols — Modbus, DNP3, IEC 61850, OPC-UA — and the normal behaviour of the specific equipment on your sites.',
      },
    ],
    relatedSlugs: ['understanding-iec-62443', 'noc-soc-renewable-energy'],
  },
  {
    slug: 'noc-soc-renewable-energy',
    category: 'Operations',
    title: 'NOC and SOC for Renewable Energy: Why Operators Typically Need Both',
    excerpt:
      'Operational monitoring and security monitoring serve different purposes — but they rely on the same data sources and benefit from shared context. Understanding the distinction helps operators make better decisions.',
    date: '10 August 2025',
    readingTime: '5 min read',
    sections: [
      {
        title: 'What Each Function Covers',
        body: 'A NOC (Network Operations Centre) monitors the operational health of your assets and communication infrastructure. Its primary concern is availability — are the turbines reporting, are the communications up, are there fault conditions that need attention? A SOC (Security Operations Centre) monitors for security threats. Its primary concern is integrity — are there signs of unauthorised access, unexpected behaviour, or indicators of compromise?',
      },
      {
        title: 'The Overlap — and Why It Matters',
        body: 'In OT environments, the distinction between operational and security events is often blurry. A device going offline might be a fault — or it might be a result of a ransomware infection. Unusual traffic between a turbine controller and an external address might be a vendor doing remote maintenance — or it might be an attacker. Context from both operational and security perspectives is needed to triage events correctly. This is why combined NOC/SOC functions work better in OT than in IT.',
      },
      {
        title: 'How Managed Services Bridge the Gap',
        body: 'Building in-house NOC and SOC capabilities separately — with different teams, tools and data sources — is expensive and creates coordination overhead. A managed service that combines both functions shares data sources, tooling and analyst time, and gives you a single point of accountability for both operational and security outcomes. For most renewable energy operators, this is the most practical path to adequate coverage.',
      },
    ],
    relatedSlugs: ['understanding-iec-62443', 'passive-vs-active-ot-monitoring'],
  },
]
