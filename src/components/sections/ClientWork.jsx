import { config } from "../../config.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import AnimatedCard from "../ui/AnimatedCard.jsx";
import Icon from "../ui/Icon.jsx";
import styles from "./ClientWork.module.css";

export default function ClientWork() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          heading={config.clientWork.heading}
          subheading={config.clientWork.subheading}
        />

        <div className={styles.grid}>
          {config.clientWork.items.map((item) => (
            <AnimatedCard key={item.id} className={styles.card}>
              <span className={styles.clientTag}>{item.client}</span>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.description}>{item.description}</p>
              <ul className={styles.tags}>
                {item.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>

              {item.testimonial?.text && (
                <blockquote className={styles.quote}>
                  <Icon name="sparkles" size={18} color="var(--color-accent)" />
                  <p>&ldquo;{item.testimonial.text}&rdquo;</p>
                  <footer>
                    {item.testimonial.author}
                    {item.testimonial.role ? `, ${item.testimonial.role}` : ""}
                  </footer>
                </blockquote>
              )}
            </AnimatedCard>
          ))}
        </div>

        <p className={styles.disclaimer}>{config.clientWork.disclaimer}</p>
      </div>
    </section>
  );
}
