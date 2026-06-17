import Hero from "../components/sections/Hero.jsx";
import WhyLoknexa from "../components/sections/WhyLoknexa.jsx";
import About from "../components/sections/About.jsx";
import Services from "../components/sections/Services.jsx";
import ProjectsPreview from "../components/sections/ProjectsPreview.jsx";
import ClientWork from "../components/sections/ClientWork.jsx";
import Roadmap from "../components/sections/Roadmap.jsx";
import JoinUs from "../components/sections/JoinUs.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyLoknexa />
      <About />
      <Services />
      <ProjectsPreview />
      <ClientWork />
      <Roadmap />
      <JoinUs />
    </>
  );
}
