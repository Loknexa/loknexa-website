import { useEffect, useState } from "react";
import { config } from "../../config.js";
import useScrollReveal from "../../hooks/useScrollReveal.js";
import styles from "./About.module.css";

function StatCounter({ value, label, delay }) {
  const [ref, visible] = useScrollReveal();
  const [display, setDisplay] = useState(value.match(/^\d+$/) ? "0" : value);
  const numeric = parseInt(value, 10);
  const isNumeric = !Number.isNaN(numeric) && `${numeric}` === value;

  useEffect(() => {
    if (!visible || !isNumeric) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const duration = 900;
    const start = performance.now();
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(progress * numeric).toString());
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, isNumeric, numeric, value]);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${styles.stat}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      <span className={styles.statValue}>{display}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export default function About() {
  const [textRef, textVisible] = useScrollReveal();

  return (
    <section id="about" className="section">
      <div className={`container ${styles.grid}`}>
        <div
          ref={textRef}
          className={`reveal ${textVisible ? "reveal-visible" : ""} ${styles.textBlock}`}
        >
          <span className={styles.badge}>{config.about.badge}</span>
          <h2 className={styles.heading}>{config.about.heading}</h2>
          <p className={styles.story}>{config.about.story}</p>
        </div>

        <div className={styles.stats}>
          {config.about.stats.map((stat, index) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={index * config.animation.scrollRevealDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
