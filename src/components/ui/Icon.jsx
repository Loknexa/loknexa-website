// Lightweight inline SVG icon set (Lucide-style paths, 24x24, stroke-based).
// We hand-roll this instead of pulling in an icon library to keep the
// dependency list at zero, per the "no UI framework dependencies" constraint.
// Add new keys here as config.js references new icon names.

const paths = {
  shield: "M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z",
  handshake:
    "M8 12 4 8l3-3 4 4 2-2 4 4-3 3-2-2-2 2 2 2-3 3-4-4 2-2Z",
  globe:
    "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18M12 3a13 13 0 0 1 0 18 13 13 0 0 1 0-18Z",
  cpu: "M9 9h6v6H9V9ZM4 9h2M4 12h2M4 15h2M18 9h2M18 12h2M18 15h2M9 4v2M12 4v2M15 4v2M9 18v2M12 18v2M15 18v2M7 7h10v10H7V7Z",
  code: "m9 6-6 6 6 6m6-12 6 6-6 6",
  smartphone: "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2ZM11 18h2",
  settings:
    "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM19.4 13a7.97 7.97 0 0 0 0-2l2-1.6-2-3.4-2.4 1a8 8 0 0 0-1.7-1L15 3h-4l-.3 2.5a8 8 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a8 8 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a8 8 0 0 0 1.7 1L11 21h4l.3-2.5a8 8 0 0 0 1.7-1l2.4 1 2-3.4-2-1.6Z",
  leaf: "M11 20A8 8 0 0 1 5 6c2-2 6-3 9-1 3 2 4 6 2 9-2 3-5 6-5 6ZM11 20c0-4 2-8 6-11",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.3-4.3",
  hammer:
    "m15 12-8.5 8.5a1.5 1.5 0 0 1-2-2L13 10m6-6-3 3 3 3 3-3-3-3ZM12 7l3 3",
  rocket:
    "M12 2c2 2 4 6 3 11l-3 3-3-3c-1-5 1-9 3-11ZM9 16l-3 3 1 3 3-1M15 16l3 3-1 3-3-1M9 13a3 3 0 1 0 6 0",
  "code-2": "m9 6-6 6 6 6m6-12 6 6-6 6",
  palette:
    "M12 21a9 9 0 1 1 0-18c4 0 8 3 8 7 0 2-1 3-3 3h-2a2 2 0 0 0 0 4h.5a2.5 2.5 0 0 1 0 4Z",
  "flask-conical":
    "M9 2h6M10 2v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V2",
  "graduation-cap": "m22 10-10-5L2 10l10 5 10-5ZM6 12v5c3 2 9 2 12 0v-5",
  sprout:
    "M12 22v-8M7 12a5 5 0 0 1 5-5 5 5 0 0 1 5 5c-3 1-7 1-10 0ZM5 8a4 4 0 0 1 4 4",
  sparkles:
    "M12 3v4M12 17v4M5 5l2.5 2.5M16.5 16.5 19 19M3 12h4M17 12h4M5 19l2.5-2.5M16.5 7.5 19 5",
  github:
    "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1-1-1.3-1-1.3-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.7 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .3.3.6.9.6 1.8v2.6c0 .3.2.6.7.5A10 10 0 0 0 12 2Z",
  linkedin:
    "M4.5 4.5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM3 9h3v12H3V9Zm6 0h3v1.7c.6-1 1.7-1.9 3.3-1.9 3 0 4.2 2 4.2 5.1V21h-3v-6.6c0-1.6-.6-2.7-2-2.7-1.1 0-1.8.8-2.1 1.5-.1.3-.1.7-.1 1.1V21H9V9Z",
  mail: "m3 6 9 6 9-6M3 6h18v12H3V6Z",
  "arrow-right": "M5 12h14M13 6l6 6-6 6",
};

export default function Icon({ name, size = 24, color = "currentColor", label, className }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={label ? "img" : "presentation"}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      <path d={d} />
    </svg>
  );
}
