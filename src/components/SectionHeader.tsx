import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

const SectionHeader = ({ 
  eyebrow, 
  title, 
  description, 
  className,
  centered = false 
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'mb-12',
        centered && 'text-center',
        className
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block bg-gradient-to-r from-racing-red to-signal-yellow bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-3"
        >
          {eyebrow}
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          'text-4xl md:text-5xl lg:text-6xl font-bold mb-4',
          centered && 'mx-auto max-w-4xl',
          className?.includes('text-white') ? 'text-white' : 'text-asphalt'
        )}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn(
            'text-lg md:text-xl max-w-3xl',
            centered && 'mx-auto',
            className?.includes('text-white') ? 'text-white/80' : 'text-gray-600'
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
