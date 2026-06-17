import StatusBadge from "./StatusBadge.jsx";
import AnimatedCard from "./AnimatedCard.jsx";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <AnimatedCard delay={delay} className={styles.card}>
      <div className={styles.accent} style={{ backgroundColor: project.color }} />
      <StatusBadge status={project.status} />
      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.tagline}>{project.tagline}</p>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.tags}>
        {project.tags.map((tag) => (
          <li key={tag} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
}
