import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Education from "./assets/components/Education";
import Experience from "./assets/components/Experience";
import Hero from "./assets/components/Hero";
import Navbar from "./assets/components/Navbar";
import Projects from "./assets/components/Projects";
import Technologies from "./assets/components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background gradient covering the entire page */}
      <div className="fixed inset-0 -z-10 bg-[#000000] 
      bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      {/* Main content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About/>
        <Technologies/>
        <Experience></Experience>
        <Education></Education>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default App;
