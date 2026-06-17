import { config } from "../../config.js";
import styles from "./StatusBadge.module.css";

export default function StatusBadge({ status }) {
  const palette = config.projects.statusColors[status] ?? {
    bg: "#F3F4F6",
    text: "#374151",
    dot: "#9CA3AF",
  };

  return (
    <span
      className={styles.badge}
      style={{ backgroundColor: palette.bg, color: palette.text }}
    >
      <span className={styles.dot} style={{ backgroundColor: palette.dot }} />
      {status}
    </span>
  );
}
