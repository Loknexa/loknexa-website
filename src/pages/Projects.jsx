import { useMemo, useState, useEffect } from "react";
import { config } from "../config.js";
import { getProjects } from "../firebase/firestore.js";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import ProjectCard from "../components/ui/ProjectCard.jsx";
import styles from "./Projects.module.css";

const ALL = "All";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(ALL);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects:", error);
        // Fallback to config data if Firestore fails
        setProjects(config.projects.items);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const statuses = useMemo(
    () => [ALL, ...Object.keys(config.projects.statusColors)],
    []
  );

  const filtered =
    filter === ALL
      ? projects
      : projects.filter((project) => project.status === filter);

  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Our Products"
          heading={config.projects.heading}
          subheading={config.projects.subheading}
        />

        <div className={styles.filters} role="group" aria-label="Filter products by status">
          {statuses.map((status) => (
            <button
              key={status}
              type="button"
              className={`${styles.filterBtn} ${filter === status ? styles.filterActive : ""}`}
              aria-pressed={filter === status}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        {loading ? (
          <div className={styles.loading} aria-label="Loading products" />
        ) : filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * config.animation.scrollRevealDelay}
              />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>No products match this status yet.</p>
        )}
      </div>
    </div>
  );
}
