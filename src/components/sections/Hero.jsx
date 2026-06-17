import { Link } from "react-router-dom";
import { config } from "../../config.js";
import useTypewriter from "../../hooks/useTypewriter.js";
import ParticleCanvas from "../ui/ParticleCanvas.jsx";
import Icon from "../ui/Icon.jsx";
import styles from "./Hero.module.css";

export default function Hero() {
  const headline = useTypewriter(config.hero.typewriterLines);

  return (
    <section className={styles.hero}>
      <ParticleCanvas settings={config.hero.particle} className={styles.canvas} />

      <div className={`container ${styles.content}`}>
        <h1 className={styles.headline}>
          {headline}
          <span className={styles.cursor} aria-hidden="true" />
        </h1>
        <p className={styles.subtext}>{config.hero.subtext}</p>

        <div className={styles.ctas}>
          {config.hero.ctas.map((cta) => (
            <Link
              key={cta.href}
              to={cta.href}
              className={`${styles.cta} ${
                cta.style === "primary" ? styles.ctaPrimary : styles.ctaOutline
              }`}
            >
              {cta.label}
              <Icon name="arrow-right" size={18} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
