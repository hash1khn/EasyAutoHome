import { Eye, Users, TrendingDown, Clock } from 'lucide-react';

export interface Metric {
  id: string;
  value: string;
  label: string;
  icon: any;
}

export const metrics: Metric[] = [
  {
    id: 'views',
    value: '+145,000',
    label: 'Views Generated',
    icon: Eye
  },
  {
    id: 'leads',
    value: '450K+',
    label: 'Leads Generated',
    icon: Users
  },
  {
    id: 'cpl',
    value: 'CPL ↓ 32%',
    label: 'Cost Per Lead',
    icon: TrendingDown
  },
  {
    id: 'time',
    value: '7-14 days',
    label: 'Set up within',
    icon: Clock
  }
];

export const heroMetrics = [
  {
    value: '+87',
    label: 'bookings/mo',
    color: 'racing-red'
  },
  {
    value: 'CPL ↓ 32%',
    label: 'cost reduction',
    color: 'signal-yellow'
  },
  {
    value: '24h',
    label: 'response time',
    color: 'electric-blue'
  }
];
