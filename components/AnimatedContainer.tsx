'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type AnimatedContainerProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function AnimatedContainer({ children, delay = 0, className }: AnimatedContainerProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
