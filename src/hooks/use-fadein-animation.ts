import { useEffect, useRef } from 'react';

type Options = {
  threshold?: number;
  animationClass:
    | 'animate-fadeInLeft'
    | 'animate-fadeInRight'
    | 'animate-fadeInUp'
    | 'animate-fadeInDown'
    | 'animate-fadeIn';
};

export function useFadeInAnimation({
  threshold = 0.5,
  animationClass,
}: Options) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
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
  }, [animationClass, threshold]);

  return elementRef;
}
