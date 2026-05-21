export type LegalType = 'privacy' | 'terms' | 'cookies'

export interface LegalSection {
  title: string
  body: string
}

export interface LegalDoc {
  type: LegalType
  label: string
  title: string
  lastUpdated: string
  intro: string
  sections: LegalSection[]
}

export const LEGAL_DOCS: LegalDoc[] = [
  {
    type: 'privacy',
    label: '// Legal · Privacy',
    title: 'Privacy Policy',
    lastUpdated: '1 May 2025',
    intro:
      'This policy describes how SmartGrid (GridSec) collects, uses and protects personal data submitted through this website. We are committed to handling your information responsibly and transparently.',
    sections: [
      {
        title: 'Information We Collect',
        body: 'We collect personal data that you provide directly when you complete the contact form on this website. This includes your name, email address, company name, role and the content of your message. We do not collect personal data by other means unless you actively provide it to us.',
      },
      {
        title: 'How We Use Your Information',
        body: 'Personal data submitted through the contact form is used solely to respond to your enquiry and to follow up regarding the services you have expressed interest in. We do not use your data for marketing without your explicit consent, and we do not sell or share your personal data with third parties for commercial purposes.',
      },
      {
        title: 'Data Retention',
        body: 'We retain personal data submitted through the contact form for as long as is necessary to manage your enquiry and any resulting business relationship. Where no business relationship results, data is typically deleted within 12 months of the initial contact.',
      },
      {
        title: 'Your Rights',
        body: 'You have the right to request access to, correction of, or deletion of personal data we hold about you. You may also request that we restrict or object to certain types of processing. To exercise these rights, please contact us at privacy@smartgrid.io.',
      },
      {
        title: 'Contact',
        body: 'If you have questions about this privacy policy or how we handle your personal data, please contact us at privacy@smartgrid.io. We will respond to all requests within 30 days.',
      },
    ],
  },
  {
    type: 'terms',
    label: '// Legal · Terms',
    title: 'Terms of Service',
    lastUpdated: '1 May 2025',
    intro:
      'These terms govern your access to and use of the SmartGrid (GridSec) website. By accessing this website you agree to these terms.',
    sections: [
      {
        title: 'Use of This Website',
        body: 'This website is provided for informational purposes. You may access and use the content for personal, non-commercial purposes. You may not copy, reproduce, distribute or republish content from this website without our prior written consent.',
      },
      {
        title: 'Accuracy of Information',
        body: 'We make reasonable efforts to ensure that information on this website is accurate and current. However, we make no representations or warranties as to the accuracy, completeness or suitability of the information provided. Information is subject to change without notice.',
      },
      {
        title: 'Limitation of Liability',
        body: 'To the extent permitted by law, SmartGrid accepts no liability for any loss or damage arising from your use of this website or reliance on information contained within it. This includes, without limitation, direct, indirect, incidental or consequential damages.',
      },
      {
        title: 'External Links',
        body: 'This website may contain links to external websites. We are not responsible for the content or privacy practices of those websites. Links are provided for convenience only and do not imply endorsement.',
      },
      {
        title: 'Changes to These Terms',
        body: 'We may update these terms from time to time. Continued use of this website following any changes constitutes acceptance of the updated terms. The date of the most recent revision is shown above.',
      },
    ],
  },
  {
    type: 'cookies',
    label: '// Legal · Cookies',
    title: 'Cookie Policy',
    lastUpdated: '1 May 2025',
    intro:
      'This policy explains how this website uses cookies and similar technologies. This is a static informational website — we use only the cookies necessary for basic functionality.',
    sections: [
      {
        title: 'What Are Cookies',
        body: 'Cookies are small text files stored on your device by your browser when you visit a website. They are widely used to make websites function correctly and to provide analytical data to website owners.',
      },
      {
        title: 'Cookies We Use',
        body: 'This website currently uses no analytics or tracking cookies. Where functional cookies are required (for example, to remember a preference you have set), these are strictly necessary and do not track your behaviour across sessions or other websites.',
      },
      {
        title: 'Third-Party Cookies',
        body: 'We do not currently embed third-party content (such as social media widgets or advertising) that would set cookies on your device. If this changes, we will update this policy and obtain any necessary consents.',
      },
      {
        title: 'Managing Cookies',
        body: 'You can control and delete cookies through your browser settings. Disabling cookies may affect the functionality of some websites, though this website is designed to function correctly without them.',
      },
    ],
  },
]
