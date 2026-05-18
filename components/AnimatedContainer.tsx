'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type AnimatedContainerProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function AnimatedContainer({ children, delay = 0, className }: AnimatedContainerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
