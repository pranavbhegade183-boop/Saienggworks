import { useEffect, useRef, useState, RefObject } from 'react';

export interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delayMs?: number;
}

/**
 * Custom React hook utilizing IntersectionObserver to trigger smooth, premium
 * fade-in and slide-up scroll reveals as elements enter the viewport.
 * Automatically respects `prefers-reduced-motion`.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
): [RefObject<T | null>, boolean, string] {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    triggerOnce = true,
    delayMs = 0,
  } = options;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // If user prefers reduced motion, reveal immediately without animation delay
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const currentRef = ref.current;
    if (!currentRef) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    let timeoutId: number | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              timeoutId = window.setTimeout(() => {
                setIsVisible(true);
              }, delayMs);
            } else {
              setIsVisible(true);
            }

            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, delayMs]);

  // CSS transition utility classes: smooth opacity and vertical translation
  const animationClasses = `transition-all duration-700 ease-out ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
  }`;

  return [ref, isVisible, animationClasses];
}

export default useScrollReveal;
