import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface MetricChipProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color?: 'racing-red' | 'signal-yellow' | 'electric-blue' | 'asphalt';
  className?: string;
}

const MetricChip = ({ icon: Icon, value, label, color = 'electric-blue', className }: MetricChipProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const colorClasses = {
    'racing-red': 'bg-racing-red/10 text-racing-red border-racing-red/20',
    'signal-yellow': 'bg-signal-yellow/10 text-signal-yellow border-signal-yellow/20',
    'electric-blue': 'bg-electric-blue/10 text-electric-blue border-electric-blue/20',
    'asphalt': 'bg-asphalt/10 text-asphalt border-asphalt/20'
  };

  useEffect(() => {
    if (isInView) {
      // Extract numeric value for count-up animation
      const numericValue = value.replace(/[^\d]/g, '');
      if (numericValue) {
        const target = parseInt(numericValue);
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 16);
        
        return () => clearInterval(timer);
      }
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'glass-card rounded-2xl p-4 border backdrop-blur-sm',
        colorClasses[color],
        className
      )}
    >
      <div className="flex items-center space-x-3">
        <div className={cn(
          'w-10 h-10 rounded-lg flex items-center justify-center',
          colorClasses[color].replace('/10', '/20')
        )}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <div className="text-2xl font-bold">
            {value.includes('+') && value.startsWith('+') ? '+' : ''}
            {value.includes('+') && !value.startsWith('+') ? value : 
             value.replace(/[^\d]/g, '') ? count : value}
            {value.includes('+') && !value.startsWith('+') ? '+' : ''}
            {value.includes('%') ? '%' : ''}
            {value.includes('↓') ? '↓' : ''}
            {value.includes('↑') ? '↑' : ''}
          </div>
          <div className="text-sm font-medium opacity-80">{label}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default MetricChip;
