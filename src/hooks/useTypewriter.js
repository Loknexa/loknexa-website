import { useEffect, useState } from "react";

/**
 * Cycles through `lines`, typing and deleting each one.
 * Returns the current rendered text. Skips the animation entirely
 * (renders the first line statically) when the user prefers reduced motion.
 */
export default function useTypewriter(lines, { typingSpeed = 70, deletingSpeed = 40, pauseMs = 1800 } = {}) {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reducedMotion || lines.length === 0) {
      setText(lines[0] ?? "");
      return;
    }

    const currentLine = lines[lineIndex % lines.length];
    let timeout;

    if (!deleting && text.length < currentLine.length) {
      timeout = setTimeout(() => setText(currentLine.slice(0, text.length + 1)), typingSpeed);
    } else if (!deleting && text.length === currentLine.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(currentLine.slice(0, text.length - 1)), deletingSpeed);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setLineIndex((index) => index + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, lineIndex, lines, typingSpeed, deletingSpeed, pauseMs, reducedMotion]);

  return text;
}
