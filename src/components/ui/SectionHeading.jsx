import useScrollReveal from "../../hooks/useScrollReveal.js";
import styles from "./SectionHeading.module.css";

export default function SectionHeading({ eyebrow, heading, subheading, align = "center" }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${styles.wrap} ${
        align === "left" ? styles.left : ""
      }`}
    >
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.heading}>{heading}</h2>
      {subheading && <p className={styles.subheading}>{subheading}</p>}
    </div>
  );
}
