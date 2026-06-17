// src/config.js — MASTER CONFIGURATION
// To rebrand, update copy, or add projects: EDIT THIS FILE ONLY

export const config = {
  // ─── BRAND ───────────────────────────────────────────────
  brand: {
    name: "Loknexa",
    tagline: "People-First Technology. Built for Real Life.",
    oneLiner:
      "Building practical technology for safety, well-being, and community impact.",
    email: "hello@loknexa.com",
    location: "Hyderabad, India",
    social: {
      github: "https://github.com/loknexa",
      linkedin: "https://linkedin.com/company/loknexa",
      email: "mailto:hello@loknexa.com",
    },
  },

  // ─── COLORS ──────────────────────────────────────────────
  colors: {
    base: "#FAF9F6", // Warm off-white — page background
    primary: "#1E3A5F", // Deep indigo — nav, headings, CTAs
    secondary: "#14B8A6", // Teal — accents, highlights
    accent: "#F59E0B", // Saffron — badges, hover sparks
    text: "#1A1A2E", // Near-black — body copy
    muted: "#6B7280", // Grey — subtitles, meta
    surface: "#FFFFFF", // White — cards, panels
    border: "#E5E7EB", // Light grey — dividers
    gradientA: "#FFF8EE", // Warm saffron wash (section dividers)
    gradientB: "#F0FDFB", // Cool teal wash (section dividers)
  },

  // ─── TYPOGRAPHY ──────────────────────────────────────────
  typography: {
    fontHeading: "'Inter', sans-serif",
    fontBody: "'Inter', sans-serif",
    scaleBase: "16px",
  },

  // ─── NAVIGATION ──────────────────────────────────────────
  nav: [
    { label: "Why Loknexa", href: "#why" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "/projects" },
    { label: "Join Us", href: "#join" },
    { label: "Contact", href: "/contact" },
  ],

  // ─── HERO ────────────────────────────────────────────────
  hero: {
    typewriterLines: [
      "People-First Technology.",
      "Built for Real Life.",
      "Built in India.",
      "Built to Last.",
    ],
    subtext:
      "Loknexa is a mission-driven technology studio creating practical software, AI tools, and digital platforms for safety, well-being, and community impact.",
    ctas: [
      { label: "Our Projects", href: "/projects", style: "primary" },
      { label: "Let's Talk", href: "/contact", style: "outline" },
    ],
    particle: {
      count: 60, // Number of particles
      speed: 0.4, // Movement speed
      lineDistance: 120, // Connection distance
      color: "#14B8A6", // Teal particles
      opacity: 0.35, // Subtle, not heavy
    },
  },

  // ─── WHY LOKNEXA (emotional anchor) ──────────────────────
  why: {
    heading: "Why Loknexa Exists",
    body: [
      "Technology should improve lives.",
      "Too many products are built for investors, trends, or vanity metrics.",
      "Loknexa exists to build practical technology that helps people stay safer, healthier, and more connected.",
    ],
    beliefs: [
      {
        icon: "shield",
        title: "Safety First",
        text: "Technology should protect people, not put them at risk.",
      },
      {
        icon: "handshake",
        title: "Trust Over Hype",
        text: "We say what we build and build what we say.",
      },
      {
        icon: "globe",
        title: "Real-World Impact",
        text: "If it doesn't solve a real problem, we don't build it.",
      },
    ],
  },

  // ─── ABOUT ───────────────────────────────────────────────
  about: {
    heading: "About Loknexa",
    story:
      "Loknexa started with a simple belief: technology should solve real problems. We're a small, focused team building affordable, trustworthy, and practical digital solutions for individuals, communities, businesses, and NGOs.",
    badge: "Based in Hyderabad, India",
    stats: [
      { value: "4", label: "Products in Development" },
      { value: "1", label: "Client Project Delivered" },
      { value: "2024", label: "Studio Founded" },
    ],
  },

  // ─── SERVICES ────────────────────────────────────────────
  services: {
    heading: "What We Build",
    subheading:
      "Whether you're a business, startup, or NGO — here's how we can help.",
    items: [
      {
        icon: "cpu",
        title: "AI Solutions",
        description:
          "AI-powered applications, intelligent assistants, computer vision, and automation tools built for real workflows.",
        tags: ["AI Integration", "Computer Vision", "Automation"],
      },
      {
        icon: "code",
        title: "Web Applications",
        description:
          "Full-stack web apps, SaaS platforms, internal tools, and customer-facing products built to scale.",
        tags: ["Web Apps", "SaaS", "Internal Tools"],
      },
      {
        icon: "smartphone",
        title: "Custom Software Development",
        description:
          "End-to-end software development from architecture to deployment. We scope it honestly, then build it.",
        tags: ["Custom Dev", "Architecture", "Deployment"],
      },
      {
        icon: "settings",
        title: "Business Automation",
        description:
          "Identify and eliminate repetitive processes. We connect your tools, automate your workflows, save your team hours.",
        tags: ["Automation", "Integrations", "Workflows"],
      },
      {
        icon: "leaf",
        title: "NGO Technology Solutions",
        description:
          "Affordable technology for NGOs, community organizations, and public service initiatives. Mission-driven pricing.",
        tags: ["NGO", "Non-profit", "Social Impact"],
      },
      {
        icon: "search",
        title: "Technical Consulting",
        description:
          "Architecture reviews, technology choices, build-vs-buy decisions. Straightforward advice without the agency upsell.",
        tags: ["Consulting", "Tech Strategy", "Advisory"],
      },
    ],
  },

  // ─── PROJECTS (our products) ──────────────────────────────
  projects: {
    heading: "Our Products",
    subheading: "Things we're building. Honestly labeled.",
    statusColors: {
      "In Development": { bg: "#EFF6FF", text: "#1E3A5F", dot: "#1E3A5F" },
      "Research & Validation": {
        bg: "#F0FDFB",
        text: "#0F766E",
        dot: "#14B8A6",
      },
      "Experimental Prototype": {
        bg: "#FFFBEB",
        text: "#B45309",
        dot: "#F59E0B",
      },
      Launched: { bg: "#F0FDF4", text: "#166534", dot: "#22C55E" },
    },
    items: [
      {
        id: "echotrace",
        name: "EchoTrace",
        tagline: "Find the missing. Faster.",
        description:
          "AI-assisted missing person identification system using computer vision and re-identification technologies. Built to support law enforcement and family search efforts.",
        status: "In Development",
        tags: ["AI", "Computer Vision", "Public Safety"],
        color: "#1E3A5F",
      },
      {
        id: "loknexa-fit",
        name: "Loknexa Fit",
        tagline: "Accountability for the home gym.",
        description:
          "AI fitness accountability platform focused on home workouts, coaching, and long-term habit formation. Because gyms aren't for everyone.",
        status: "Research & Validation",
        tags: ["AI", "Health", "Mobile"],
        color: "#14B8A6",
      },
      {
        id: "ring-shield",
        name: "Ring / Shield",
        tagline: "Safety in your pocket.",
        description:
          "Personal safety and emergency assistance platform. Early-stage exploration of how technology can respond faster in moments that matter most.",
        status: "Experimental Prototype",
        tags: ["Safety", "Emergency", "Mobile"],
        color: "#F59E0B",
      },
    ],
  },

  // ─── CLIENT WORK ─────────────────────────────────────────
  clientWork: {
    heading: "Client Work",
    subheading: "Technology we've built for others. Their trust, our credibility.",
    disclaimer: "These are solutions built for clients — not Loknexa products.",
    items: [
      {
        id: "foodshare",
        name: "FoodShare Platform",
        client: "NGO Client",
        description:
          "Web platform built to support NGO food-sharing initiatives and community outreach efforts. Designed for simplicity so volunteers, not engineers, can run it.",
        tags: ["NGO", "Web Platform", "Community"],
        testimonial: {
          text: "", // ← Client to fill in
          author: "", // ← Client name
          role: "", // ← Client role
          rating: 5,
        },
      },
    ],
  },

  // ─── ROADMAP ─────────────────────────────────────────────
  roadmap: {
    heading: "Where We're Headed",
    subheading: "Not a promise. A direction.",
    phases: [
      {
        label: "Today",
        icon: "hammer",
        color: "#1E3A5F",
        title: "Building the Foundation",
        items: [
          "Developing EchoTrace v1",
          "Client project delivery",
          "Validating Loknexa Fit concept",
          "Ring / Shield early prototyping",
        ],
      },
      {
        label: "Tomorrow",
        icon: "rocket",
        color: "#14B8A6",
        title: "Launching & Learning",
        items: [
          "EchoTrace pilot with real users",
          "Loknexa Fit beta release",
          "Expanding client services",
          "Growing collaborator network",
        ],
      },
      {
        label: "Future",
        icon: "globe",
        color: "#F59E0B",
        title: "An Ecosystem of Impact",
        items: [
          "Suite of safety & well-being products",
          "Trusted technology partner for NGOs",
          "Open-source community contributions",
          "India-first, globally relevant",
        ],
      },
    ],
  },

  // ─── JOIN US ─────────────────────────────────────────────
  joinUs: {
    heading: "Join Us",
    subheading: "We're not hiring. We're building a community.",
    body: "We're always interested in meeting developers, designers, researchers, students, NGOs, and collaborators who believe technology should solve real-world problems. If that sounds like you, reach out.",
    lookingFor: [
      { icon: "code-2", label: "Developers & Engineers" },
      { icon: "palette", label: "Designers" },
      { icon: "flask-conical", label: "Researchers" },
      { icon: "graduation-cap", label: "Students & Interns" },
      { icon: "sprout", label: "NGO Partners" },
      { icon: "sparkles", label: "Early Supporters" },
    ],
    cta: { label: "Reach Out", href: "/contact" },
  },

  // ─── CONTACT PAGE ────────────────────────────────────────
  contact: {
    heading: "Let's Build Something Useful.",
    subheading:
      "Whether you're a business, NGO, collaborator, or have an idea worth solving.",
    formFields: [
      { name: "name", label: "Your Name", type: "text", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
      {
        name: "type",
        label: "You are a...",
        type: "select",
        required: true,
        options: [
          "Client / Business",
          "NGO / Community Org",
          "Collaborator / Developer",
          "Student / Intern",
          "Researcher",
          "Other",
        ],
      },
      {
        name: "message",
        label: "Tell us about your idea or project",
        type: "textarea",
        required: true,
      },
    ],
    submitLabel: "Send Message",
    successMessage:
      "Message received. We'll get back to you within 2 business days.",
  },

  // ─── FOOTER ──────────────────────────────────────────────
  footer: {
    tagline: "People-First Technology. Built for Real Life.",
    badge: "Built in Hyderabad, India",
    copyright: "© 2025 Loknexa. All rights reserved.",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Services", href: "#services" },
      { label: "Join Us", href: "#join" },
      { label: "Contact", href: "/contact" },
    ],
  },

  // ─── ANIMATION SETTINGS ──────────────────────────────────
  animation: {
    scrollRevealDelay: 100, // ms stagger between elements
    scrollRevealDuration: 600, // ms fade duration
    scrollRevealOffset: 80, // px from viewport bottom to trigger
    cardHoverLift: "-6px",
    cardHoverShadow: "0 20px 40px rgba(30, 58, 95, 0.12)",
  },
};
