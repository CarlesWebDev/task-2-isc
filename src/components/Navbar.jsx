import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Logika Penyimpanan Tema
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const links = ["About", "Experience", "Projects", "Skills", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menerapkan class 'dark' ke tag <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          className="font-display text-2xl tracking-tight text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-[#c8ff3d] transition-colors"
        >
          <img src="/favicon.svg" alt="Logo" className="w-10 h-10" />
        </a>

        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-mono uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-[#c8ff3d] hover:-translate-y-0.5 transition-all duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Tombol Toggle Tema */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-[#c8ff3d] hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
          </button>

          <button
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-[#c8ff3d] transition-colors p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#050505]/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 flex flex-col px-6 py-2 shadow-2xl"
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="font-mono text-sm uppercase tracking-wider text-gray-800 dark:text-gray-300 hover:text-green-600 dark:hover:text-[#c8ff3d] py-5 border-b border-gray-200 dark:border-white/5 last:border-0 transition-colors"
              >
                {link}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}