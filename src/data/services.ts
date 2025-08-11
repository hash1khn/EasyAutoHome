export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  bullets: string[];
  kpiExamples: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: 'websites',
    title: 'Websites for Auto Shops',
    description: 'Fast, mobile-first, WhatsApp-first websites that convert visitors into customers.',
    icon: 'Globe',
    bullets: [
      'Mobile-optimized design',
      'WhatsApp integration',
      'Fast loading (<3 seconds)',
      'SEO optimized',
      'Easy content management'
    ],
    kpiExamples: ['+40% more leads', '2x faster loading', 'Mobile conversion ↑'],
    image: '/images/auto-website.jpg'
  },
  {
    id: 'seo',
    title: 'SEO + Google Business Profile',
    description: 'Rank higher, show up in Maps, get more calls from local customers.',
    icon: 'Search',
    bullets: [
      'Local SEO optimization',
      'Google Business Profile setup',
      'Review management',
      'Local keyword targeting',
      'Map optimization'
    ],
    kpiExamples: ['Top 3 local rankings', '+60% map views', 'More phone calls'],
    image: '/images/auto-seo.jpg'
  },
  {
    id: 'ads',
    title: 'Meta / TikTok / Google Ads',
    description: 'Creative that sells repairs, wraps, and auto services effectively.',
    icon: 'Megaphone',
    bullets: [
      'Multi-platform campaigns',
      'Auto-specific creatives',
      'Audience targeting',
      'Conversion tracking',
      'Budget optimization'
    ],
    kpiExamples: ['CPL ↓ 25%', 'ROAS ↑ 3.2x', 'More qualified leads'],
    image: '/images/auto-ads.jpg'
  },
  {
    id: 'funnels',
    title: 'Funnels & Landing Pages',
    description: 'Click → WhatsApp → booking conversion funnels for auto services.',
    icon: 'Zap',
    bullets: [
      'High-converting pages',
      'WhatsApp integration',
      'A/B testing',
      'Lead capture forms',
      'Mobile optimization'
    ],
    kpiExamples: ['+50% conversion rate', 'Faster lead capture', 'Better quality leads'],
    image: '/images/auto-funnel.jpg'
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Mass Send',
    description: 'Re-activate past clients, fill slow days with automated outreach.',
    icon: 'MessageCircle',
    bullets: [
      'Automated campaigns',
      'Personalized messages',
      'Opt-out management',
      'Response tracking',
      'CRM integration'
    ],
    kpiExamples: ['+35% re-engagement', 'Fill slow days', 'Higher retention'],
    image: '/images/auto-whatsapp.jpg'
  },
  {
    id: 'creative',
    title: 'Photo/Video Creative',
    description: 'Assets that actually convert - no generic stock photos.',
    icon: 'Camera',
    bullets: [
      'Auto-specific photography',
      'Before/after shots',
      'Process videos',
      'Customer testimonials',
      'Social media content'
    ],
    kpiExamples: ['+45% engagement', 'Better brand trust', 'Higher conversion'],
    image: '/images/auto-creative.jpg'
  }
];
