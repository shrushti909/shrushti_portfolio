import { useEffect, useRef } from "react";

/**
 * Intersection Observer hook for scroll-reveal animations.
 * Adds the "visible" class when element enters the viewport.
 */
export function useReveal(threshold = 0.05) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Collect all elements to observe (container if .reveal + all descendant .reveal elements)
    const elements = [];
    if (el.classList.contains("reveal")) {
      elements.push(el);
    }
    el.querySelectorAll(".reveal").forEach((child) => elements.push(child));

    // If neither el nor any children have .reveal, observe el itself
    if (elements.length === 0) {
      elements.push(el);
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((item) => item.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -20px 0px" }
    );

    elements.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [threshold]);

  return { ref };
}
