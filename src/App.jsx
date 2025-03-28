import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Footer from "./components/Footer";
import feather from "feather-icons";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Education /> */}
      {/* <Experience /> */}
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}

export default App;
