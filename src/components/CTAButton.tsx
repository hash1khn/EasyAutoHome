import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  target?: string;
  rel?: string;
}

const CTAButton = ({ 
  variant = 'primary', 
  children, 
  href, 
  onClick, 
  className,
  size = 'md',
  target,
  rel
}: CTAButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-racing-red to-signal-yellow text-white hover:shadow-lg hover:scale-105 focus:ring-racing-red',
    secondary: 'border-2 border-racing-red text-racing-red hover:bg-racing-red hover:text-white focus:ring-racing-red'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const buttonClasses = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full h-full flex items-center justify-center"
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses} target={target} rel={rel}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {buttonContent}
    </button>
  );
};

export default CTAButton;
