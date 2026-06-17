#!/usr/bin/env node
// scripts/seed-firestore.mjs — Seed Firestore with initial data
// Run: npm run seed

import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, serverTimestamp, collection } from "firebase/firestore";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

// Load .env.local
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, "../.env.local");
const envContent = fs.readFileSync(envPath, "utf-8");

const env = {};
envContent.split("\n").forEach((line) => {
  const [key, value] = line.split("=");
  if (key && value) {
    env[key.trim()] = value.trim();
  }
});

// Initialize Firebase
const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
  measurementId: env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Projects data
const projects = [
  {
    id: "echotrace",
    title: "EchoTrace",
    tagline: "Find the missing. Faster.",
    description:
      "AI-assisted missing person identification system using computer vision and re-identification technologies. Built to support law enforcement and family search efforts.",
    status: "In Development",
    tags: ["AI", "Computer Vision", "Public Safety"],
    featured: true,
    order: 0,
    imageUrl: null,
    color: "#1E3A5F",
    visible: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "loknexa-fit",
    title: "Loknexa Fit",
    tagline: "Accountability for the home gym.",
    description:
      "AI fitness accountability platform focused on home workouts, coaching, and long-term habit formation. Because gyms aren't for everyone.",
    status: "Research & Validation",
    tags: ["AI", "Health", "Mobile"],
    featured: true,
    order: 1,
    imageUrl: null,
    color: "#14B8A6",
    visible: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "ring-shield",
    title: "Ring / Shield",
    tagline: "Safety in your pocket.",
    description:
      "Personal safety and emergency assistance platform. Early-stage exploration of how technology can respond faster in moments that matter most.",
    status: "Experimental Prototype",
    tags: ["Safety", "Emergency", "Mobile"],
    featured: true,
    order: 2,
    imageUrl: null,
    color: "#F59E0B",
    visible: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Services data
const services = [
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description:
      "AI-powered applications, intelligent assistants, computer vision, and automation tools built for real workflows.",
    icon: "cpu",
    tags: ["AI Integration", "Computer Vision", "Automation"],
    order: 0,
    visible: true,
    updatedAt: new Date(),
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description:
      "Full-stack web apps, SaaS platforms, internal tools, and customer-facing products built to scale.",
    icon: "code",
    tags: ["Web Apps", "SaaS", "Internal Tools"],
    order: 1,
    visible: true,
    updatedAt: new Date(),
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "End-to-end software development from architecture to deployment. We scope it honestly, then build it.",
    icon: "smartphone",
    tags: ["Custom Dev", "Architecture", "Deployment"],
    order: 2,
    visible: true,
    updatedAt: new Date(),
  },
  {
    id: "business-automation",
    title: "Business Automation",
    description:
      "Identify and eliminate repetitive processes. We connect your tools, automate your workflows, save your team hours.",
    icon: "settings",
    tags: ["Automation", "Integrations", "Workflows"],
    order: 3,
    visible: true,
    updatedAt: new Date(),
  },
  {
    id: "ngo-solutions",
    title: "NGO Technology Solutions",
    description:
      "Affordable technology for NGOs, community organizations, and public service initiatives. Mission-driven pricing.",
    icon: "leaf",
    tags: ["NGO", "Non-profit", "Social Impact"],
    order: 4,
    visible: true,
    updatedAt: new Date(),
  },
  {
    id: "technical-consulting",
    title: "Technical Consulting",
    description:
      "Architecture reviews, technology choices, build-vs-buy decisions. Straightforward advice without the agency upsell.",
    icon: "search",
    tags: ["Consulting", "Tech Strategy", "Advisory"],
    order: 5,
    visible: true,
    updatedAt: new Date(),
  },
];

// Site settings
const siteSettings = {
  maintenanceMode: false,
  contactFormEnabled: true,
  newsletterEnabled: false,
  announcementBanner: {
    enabled: false,
    message: "",
    color: "info",
  },
  updatedAt: new Date(),
};

async function seed() {
  console.log("🌱 Starting Firestore seed...\n");

  try {
    // Seed projects
    console.log("📦 Seeding projects...");
    for (const project of projects) {
      await setDoc(doc(db, "projects", project.id), project);
      console.log(`  ✅ ${project.title}`);
    }

    // Seed services
    console.log("\n🛠️  Seeding services...");
    for (const service of services) {
      await setDoc(doc(db, "services", service.id), service);
      console.log(`  ✅ ${service.title}`);
    }

    // Seed site settings
    console.log("\n⚙️  Seeding site settings...");
    await setDoc(doc(db, "site_settings", "global"), siteSettings);
    console.log("  ✅ Site settings");

    console.log("\n✅ Firestore seeding complete!\n");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  }
}

seed();
