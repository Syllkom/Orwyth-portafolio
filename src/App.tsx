import { Background } from "./components/Background";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { AetherFeatured } from "./components/AetherFeatured";
import { Capabilities } from "./components/Capabilities";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { TransitionOrbital, TransitionWireframe } from "./components/Transitions";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-white selection:bg-white/20 selection:text-white">
      <Background />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <AetherFeatured />
        <Capabilities />
        <TransitionOrbital />
        <Projects />
        <TransitionWireframe />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
