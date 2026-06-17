// src/firebase/seed-data.js — Initial Firestore data from config
// Run this ONCE via `npm run seed` after creating Firestore collections

import { config } from "../config.js";
import { db } from "./config.js";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

export async function seedProjects() {
  const projectsCollection = collection(db, "projects");

  // Map config.projects.items to Firestore schema
  const projects = config.projects.items.map((item, index) => ({
    id: item.id,
    title: item.name,
    tagline: item.tagline,
    description: item.description,
    status: item.status,
    tags: item.tags,
    featured: true, // All seed projects are featured
    order: index,
    imageUrl: null, // Phase 2
    color: item.color,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    visible: true,
  }));

  for (const project of projects) {
    try {
      await setDoc(doc(projectsCollection, project.id), project);
      console.log(`✅ Seeded project: ${project.title}`);
    } catch (error) {
      console.error(`❌ Error seeding project ${project.id}:`, error);
    }
  }
}

export async function seedServices() {
  const servicesCollection = collection(db, "services");

  // Map config.services.items to Firestore schema
  const services = config.services.items.map((item, index) => ({
    id: item.title.toLowerCase().replace(/\s+/g, "-"),
    title: item.title,
    description: item.description,
    icon: item.icon,
    tags: item.tags,
    order: index,
    visible: true,
    updatedAt: serverTimestamp(),
  }));

  for (const service of services) {
    try {
      await setDoc(doc(servicesCollection, service.id), service);
      console.log(`✅ Seeded service: ${service.title}`);
    } catch (error) {
      console.error(`❌ Error seeding service ${service.id}:`, error);
    }
  }
}

export async function seedSiteSettings() {
  const settingsDoc = doc(db, "site_settings", "global");

  const settings = {
    maintenanceMode: false,
    contactFormEnabled: true,
    newsletterEnabled: false,
    announcementBanner: {
      enabled: false,
      message: "",
      color: "info",
    },
    updatedAt: serverTimestamp(),
  };

  try {
    await setDoc(settingsDoc, settings);
    console.log("✅ Seeded site settings");
  } catch (error) {
    console.error("❌ Error seeding site settings:", error);
  }
}

export async function runAllSeeds() {
  console.log("🌱 Starting Firestore seed...");
  try {
    await seedProjects();
    await seedServices();
    await seedSiteSettings();
    console.log("✅ Firestore seeding complete!");
  } catch (error) {
    console.error("❌ Seed failed:", error);
  }
}
