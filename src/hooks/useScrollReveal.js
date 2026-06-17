import { useEffect, useRef, useState } from "react";
import { config } from "../config.js";

/**
 * Fades + slides an element in once it scrolls into view.
 * Returns [ref, visible] — attach ref to the element and toggle the
 * "reveal-visible" class (see global.css) based on `visible`.
 * Reveals only once; respects prefers-reduced-motion via global.css.
 */
export default function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: `0px 0px -${config.animation.scrollRevealOffset}px 0px`, threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}
