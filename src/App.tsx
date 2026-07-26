import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Uncomment after Gallery.tsx is completed
// import Gallery from "./components/Gallery";

export default function App() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />

      <Hero />

      <Impact />

      <About />

      <Projects />

      <Timeline />

      <Testimonials />

      {/* <Gallery /> */}

      <Contact />

      <Footer />
    </main>
  );
}