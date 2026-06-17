import { useEffect, useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { config } from "../../config.js";
import styles from "./Navbar.module.css";

const sectionIds = config.nav
  .filter((item) => item.href.startsWith("#"))
  .map((item) => item.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Blur/shadow once the page has scrolled past the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which homepage section is currently in view for active-link styling
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveHash("");
      return;
    }
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHash(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleNavClick = (href) => (event) => {
    closeMenu();
    if (href.startsWith("#")) {
      event.preventDefault();
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (href) =>
    href.startsWith("#") ? activeHash === href : location.pathname === href;

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} onClick={closeMenu} aria-label={`${config.brand.name} home`}>
          <img src="/src/assets/logo.svg" alt="" width="36" height="36" />
          <span>{config.brand.name}</span>
        </Link>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}
          aria-label="Primary"
        >
          {config.nav.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                className={`${styles.link} ${isActive(item.href) ? styles.linkActive : ""}`}
                onClick={handleNavClick(item.href)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={`${styles.link} ${isActive(item.href) ? styles.linkActive : ""}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
