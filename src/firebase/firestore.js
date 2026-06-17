// src/firebase/firestore.js — Firestore data operations
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  getDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./config.js";

// ─── CONTACT MESSAGES ────────────────────────────────────
export async function submitContactMessage(data) {
  try {
    const docRef = await addDoc(collection(db, "contact_messages"), {
      name: data.name,
      email: data.email,
      category: data.type || "Other", // 'type' from form → 'category' in Firestore
      message: data.message,
      status: "new",
      source: "website_contact",
      createdAt: serverTimestamp(),
      readAt: null,
      repliedAt: null,
    });
    return { id: docRef.id, success: true };
  } catch (error) {
    console.error("Error submitting contact message:", error);
    throw error;
  }
}

// ─── PROJECTS ────────────────────────────────────────────
export async function getProjects() {
  try {
    const q = query(
      collection(db, "projects"),
      where("visible", "==", true)
    );
    const snapshot = await getDocs(q);
    const projects = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      projects.push({
        id: doc.id,
        ...data,
        name: data.title, // Map title → name for frontend compatibility
      });
    });
    // Sort by order field
    return projects.sort((a, b) => (a.order || 999) - (b.order || 999));
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}

export async function getProjectById(projectId) {
  try {
    const docRef = doc(db, "projects", projectId);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
}

// ─── SERVICES ────────────────────────────────────────────
export async function getServices() {
  try {
    const q = query(
      collection(db, "services"),
      where("visible", "==", true)
    );
    const snapshot = await getDocs(q);
    const services = [];
    snapshot.forEach((doc) => {
      services.push({ id: doc.id, ...doc.data() });
    });
    // Sort by order field
    return services.sort((a, b) => (a.order || 999) - (b.order || 999));
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
}

// ─── SITE SETTINGS ───────────────────────────────────────
export async function getSiteSettings() {
  try {
    const docRef = doc(db, "site_settings", "global");
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return snapshot.data();
    }
    // Return defaults if not found
    return {
      maintenanceMode: false,
      contactFormEnabled: true,
      newsletterEnabled: false,
      announcementBanner: {
        enabled: false,
        message: "",
        color: "info",
      },
    };
  } catch (error) {
    console.error("Error fetching site settings:", error);
    throw error;
  }
}
