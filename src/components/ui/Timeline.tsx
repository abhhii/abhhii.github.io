import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  children: ReactNode;
  icon?: ReactNode;
  active?: boolean;
}

function TimelineItem({ children, icon, active = false }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />
      
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 ${
          active
            ? 'bg-primary-500 border-primary-500'
            : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
        }`}
      >
        {icon && (
          <div className="absolute inset-0 flex items-center justify-center text-xs">
            {icon}
          </div>
        )}
      </div>

      {/* Content */}
      <div>{children}</div>
    </motion.div>
  );
}

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export default function Timeline({ children, className = '' }: TimelineProps) {
  return <div className={`relative ${className}`}>{children}</div>;
}

Timeline.Item = TimelineItem;
