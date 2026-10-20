import { useEffect, useRef } from 'react';

/**
 * Adds `is-visible` to elements with the `reveal` class when they enter
 * the viewport. Returns a ref to attach to a container; all `.reveal`
 * descendants are observed.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current ?? document;
    const targets = Array.from(root.querySelectorAll<HTMLElement>('.reveal'));
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return ref;
}
