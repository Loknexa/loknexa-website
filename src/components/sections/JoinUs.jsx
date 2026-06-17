import { Link } from "react-router-dom";
import { config } from "../../config.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import Icon from "../ui/Icon.jsx";
import styles from "./JoinUs.module.css";

export default function JoinUs() {
  return (
    <section id="join" className="section">
      <div className="container">
        <SectionHeading heading={config.joinUs.heading} subheading={config.joinUs.subheading} />

        <p className={styles.body}>{config.joinUs.body}</p>

        <div className={styles.chips}>
          {config.joinUs.lookingFor.map((role) => (
            <span key={role.label} className={styles.chip}>
              <Icon name={role.icon} size={18} color="var(--color-primary)" />
              {role.label}
            </span>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <Link to={config.joinUs.cta.href} className={styles.cta}>
            {config.joinUs.cta.label}
            <Icon name="arrow-right" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
