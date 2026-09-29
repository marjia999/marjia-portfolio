import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedProjects from "../components/FeaturedProjects";
import Projects from "../components/Projects";
import Research from "../components/Research";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <Projects />
      <Research />
    </main>
  );
}