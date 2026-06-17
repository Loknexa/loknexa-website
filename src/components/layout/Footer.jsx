import { Link } from "react-router-dom";
import { config } from "../../config.js";
import Icon from "../ui/Icon.jsx";
import styles from "./Footer.module.css";

const socialLinks = [
  { key: "github", href: config.brand.social.github, label: "Loknexa on GitHub" },
  { key: "linkedin", href: config.brand.social.linkedin, label: "Loknexa on LinkedIn" },
  { key: "mail", href: config.brand.social.email, label: "Email Loknexa" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <span className={styles.brandName}>{config.brand.name}</span>
            <p className={styles.tagline}>{config.footer.tagline}</p>
            <span className={styles.badge}>{config.footer.badge}</span>
          </div>

          <nav className={styles.links} aria-label="Footer">
            {config.footer.links.map((item) =>
              item.href.startsWith("#") ? (
                <a key={item.href} href={item.href} className={styles.link}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} to={item.href} className={styles.link}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className={styles.social}>
            {socialLinks.map((social) => (
              <a
                key={social.key}
                href={social.href}
                className={styles.socialLink}
                aria-label={social.label}
                target={social.key === "mail" ? undefined : "_blank"}
                rel={social.key === "mail" ? undefined : "noopener noreferrer"}
              >
                <Icon name={social.key} size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{config.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
