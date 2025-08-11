export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  setup?: string;
  features: string[];
  leadVolume: string;
  popular?: boolean;
}

export interface CompareFeature {
  feature: string;
  starter: string;
  growth: string;
  pro: string;
  enterprise: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Kickstart Client Flow',
    price: '',
    setup: '',
    features: [
      'Free growth plan',
      'New optimised website',
      'Google business profile',
      'Boost in google search',
    ],
    leadVolume: '15-30 leads/month'
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'Getting Busy',
    price: '',
    setup: '',
    features: [
      'Everything in starter',
      'Meta & google Ads',
      'WhatsApp automation',
      'Landing page funnels',
      'Custom content',
      'Advanced analytics',
    ],
    leadVolume: '50-100 leads/month',
    popular: true
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Aggressive scale, making money',
    price: '',
    setup: '',
    features: [
      'Everything in Growth',
      'TikTok & YouTube ads',
      'Business Video Ads',
      'Custom automations',
      'Dedicated manager',
      'Weekly strategy calls'
    ],
    leadVolume: '150-300 leads/month'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions for large operations',
    price: '',
    setup: '',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'White-label solutions',
      'API access',
      '24/7 priority support',
      'Custom reporting'
    ],
    leadVolume: '500+ leads/month'
  }
];

export const compareFeatures: CompareFeature[] = [
  {
    feature: 'Website',
    starter: 'Basic',
    growth: 'Advanced',
    pro: 'Premium',
    enterprise: 'Custom'
  },
  {
    feature: 'GBP/SEO',
    starter: 'Basic',
    growth: 'Advanced',
    pro: 'Premium',
    enterprise: 'Custom'
  },
  {
    feature: 'Ad Channels',
    starter: 'Google only',
    growth: 'Meta + Google',
    pro: 'Meta + Google + TikTok',
    enterprise: 'All platforms'
  },
  {
    feature: 'Monthly Creatives',
    starter: '5',
    growth: '15',
    pro: '30',
    enterprise: 'Unlimited'
  },
  {
    feature: 'WhatsApp Outreach',
    starter: 'Basic',
    growth: 'Advanced',
    pro: 'Premium',
    enterprise: 'Custom'
  },
  {
    feature: 'Reporting',
    starter: 'Monthly',
    growth: 'Weekly',
    pro: 'Real-time',
    enterprise: 'Custom'
  },
  {
    feature: 'Support SLA',
    starter: '24h',
    growth: '12h',
    pro: '4h',
    enterprise: '1h'
  }
];
