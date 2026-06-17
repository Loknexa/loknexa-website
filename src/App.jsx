import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { config } from "./config.js";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  // Inject config.colors + config.typography as CSS custom properties so the
  // entire stylesheet stays driven by config.js with zero hardcoded values.
  useEffect(() => {
    const root = document.documentElement.style;
    Object.entries(config.colors).forEach(([key, value]) => {
      root.setProperty(`--color-${key}`, value);
    });
    root.setProperty("--font-heading", config.typography.fontHeading);
    root.setProperty("--font-body", config.typography.fontBody);
    root.setProperty("--scale-base", config.typography.scaleBase);
    root.setProperty(
      "--reveal-duration",
      `${config.animation.scrollRevealDuration}ms`
    );
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
