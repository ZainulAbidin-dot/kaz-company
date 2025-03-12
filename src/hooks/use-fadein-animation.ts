import { useEffect, useRef } from 'react';

type Options = {
  animationClass:
    | 'animate-fadeInLeft'
    | 'animate-fadeInRight'
    | 'animate-fadeInUp'
    | 'animate-fadeInDown'
    | 'animate-fadeIn';
  threshold?: number;
  delay?: number;
};

export function useFadeInAnimation({
  threshold = 0.5,
  animationClass,
  delay = 0,
}: Options) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            entry.target.classList.remove('opacity-0');
            if (delay) {
              (entry.target as HTMLElement).style.animationDelay = `${delay}ms`;
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationClass, threshold, delay]);

  return elementRef;
}
