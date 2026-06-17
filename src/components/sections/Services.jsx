import { useState, useEffect } from "react";
import { config } from "../../config.js";
import { getServices } from "../../firebase/firestore.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import AnimatedCard from "../ui/AnimatedCard.jsx";
import Icon from "../ui/Icon.jsx";
import styles from "./Services.module.css";

export default function Services() {
  const [services, setServices] = useState(config.services.items);

  useEffect(() => {
    getServices()
      .then((data) => { if (data.length > 0) setServices(data); })
      .catch(() => {});
  }, []);

  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          heading={config.services.heading}
          subheading={config.services.subheading}
        />

        <div className={styles.grid}>
          {services.map((item, index) => (
            <AnimatedCard
              key={item.id || item.title}
              delay={(index % 3) * config.animation.scrollRevealDelay}
              className={styles.card}
            >
              <span className={styles.iconWrap}>
                <Icon name={item.icon} size={24} color="var(--color-secondary)" />
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              <ul className={styles.tags}>
                {item.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
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
