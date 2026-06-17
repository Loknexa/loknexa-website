import { config } from "../../config.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import AnimatedCard from "../ui/AnimatedCard.jsx";
import Icon from "../ui/Icon.jsx";
import styles from "./Roadmap.module.css";

export default function Roadmap() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading heading={config.roadmap.heading} subheading={config.roadmap.subheading} />

        <div className={styles.grid}>
          {config.roadmap.phases.map((phase, index) => (
            <AnimatedCard
              key={phase.label}
              delay={index * config.animation.scrollRevealDelay}
              className={styles.card}
            >
              <span className={styles.iconWrap} style={{ backgroundColor: `${phase.color}1A` }}>
                <Icon name={phase.icon} size={24} color={phase.color} />
              </span>
              <span className={styles.label} style={{ color: phase.color }}>
                {phase.label}
              </span>
              <h3 className={styles.title}>{phase.title}</h3>
              <ul className={styles.items}>
                {phase.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
