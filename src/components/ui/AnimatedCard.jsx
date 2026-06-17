import useScrollReveal from "../../hooks/useScrollReveal.js";
import styles from "./AnimatedCard.module.css";

export default function AnimatedCard({ children, delay = 0, className = "", as: Tag = "div" }) {
  const [ref, visible] = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${styles.card} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
