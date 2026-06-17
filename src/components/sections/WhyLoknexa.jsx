import { config } from "../../config.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import AnimatedCard from "../ui/AnimatedCard.jsx";
import Icon from "../ui/Icon.jsx";
import styles from "./WhyLoknexa.module.css";

export default function WhyLoknexa() {
  return (
    <section id="why" className="section">
      <div className="container">
        <SectionHeading eyebrow="The Why" heading={config.why.heading} />

        <div className={styles.body}>
          {config.why.body.map((line) => (
            <p key={line} className={styles.line}>
              {line}
            </p>
          ))}
        </div>

        <div className={styles.grid}>
          {config.why.beliefs.map((belief, index) => (
            <AnimatedCard key={belief.title} delay={index * config.animation.scrollRevealDelay} className={styles.card}>
              <span className={styles.iconWrap}>
                <Icon name={belief.icon} size={26} color="var(--color-primary)" />
              </span>
              <h3 className={styles.title}>{belief.title}</h3>
              <p className={styles.text}>{belief.text}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
