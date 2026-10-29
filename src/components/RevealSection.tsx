import React, { ReactNode } from 'react';
import { useScrollReveal, ScrollRevealOptions } from '../hooks/useScrollReveal';

export interface RevealSectionProps extends ScrollRevealOptions {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article';
}

/**
 * Reusable layout wrapper that triggers a smooth fade-in and slide-up reveal
 * via IntersectionObserver as the user scrolls into view.
 */
export const RevealSection: React.FC<RevealSectionProps> = ({
  children,
  className = '',
  as = 'div',
  threshold = 0.12,
  rootMargin = '0px 0px -50px 0px',
  delayMs = 0,
  triggerOnce = true,
}) => {
  const [ref, , animationClasses] = useScrollReveal<HTMLDivElement>({
    threshold,
    rootMargin,
    delayMs,
    triggerOnce,
  });

  const Component = as;

  return (
    <Component ref={ref as React.RefObject<HTMLDivElement>} className={`${animationClasses} ${className}`}>
      {children}
    </Component>
  );
};

export default RevealSection;
