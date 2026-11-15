import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";

// SEMUA HURUF KAPITAL DISESUAIKAN DENGAN NAMA FILE DI VSCODE ANDA
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Project"; // Di VSCode Anda namanya Project.jsx tanpa 's'
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scrolltotop"; // Di VSCode Anda huruf 't' nya kecil

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    const hasSeen = sessionStorage.getItem("hasSeenLoader");
    return !hasSeen;
  });

  useEffect(() => {
    if (isLoading) return;

    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 50,
      anchorPlacement: "top-bottom",
    });

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    setTimeout(() => {
      AOS.refresh();
    }, 500);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen text-white selection:bg-[#c8ff3d] selection:text-black">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader
            key="loader"
            onLoadingComplete={() => {
              window.scrollTo(0, 0);
              sessionStorage.setItem("hasSeenLoader", "true");
              setIsLoading(false);
            }}
          />
        )}
      </AnimatePresence>

      <div className={`${isLoading ? "h-screen overflow-hidden" : ""}`}>
        <Navbar />
        <main className="overflow-x-hidden">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
}

export default App;