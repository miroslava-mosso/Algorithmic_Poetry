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

    const observeReveals = (node: ParentNode) => {
      if (node instanceof HTMLElement && node.matches('.reveal')) io.observe(node);
      node.querySelectorAll<HTMLElement>('.reveal').forEach((target) => io.observe(target));
    };

    observeReveals(root);
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) observeReveals(node);
      }));
    });
    mutations.observe(root, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      io.disconnect();
    };
  }, []);

  return ref;
}
