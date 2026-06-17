import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { config } from "../../config.js";
import { getProjects } from "../../firebase/firestore.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import Icon from "../ui/Icon.jsx";
import styles from "./ProjectsPreview.module.css";

export default function ProjectsPreview() {
  const [projects, setProjects] = useState(config.projects.items);

  useEffect(() => {
    getProjects()
      .then((data) => { if (data.length > 0) setProjects(data); })
      .catch(() => {});
  }, []);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading heading={config.projects.heading} subheading={config.projects.subheading} />

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * config.animation.scrollRevealDelay}
            />
          ))}
        </div>

        <div className={styles.more}>
          <Link to="/projects" className={styles.link}>
            See all products
            <Icon name="arrow-right" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
