import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Activities from "./components/Activities/Activities";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { usePortfolioData } from "./hooks/usePortfolioData";

export default function App() {
  const { data } = usePortfolioData();

  // Dark mode
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  // Ensure any elements in viewport are visible without waiting
  useEffect(() => {
    const revealVisible = () => {
      const reveals = document.querySelectorAll(".reveal:not(.visible)");
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 80) {
          el.classList.add("visible");
        }
      });
    };
    revealVisible();
    const timer = setTimeout(revealVisible, 300);
    window.addEventListener("scroll", revealVisible, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", revealVisible);
    };
  }, [data]);

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero data={data?.profile} />
        <About />
        <Skills data={data} />
        <Projects data={data} />
        <Experience data={data} />
        <Education data={data} />
        <Certifications data={data} />
        <Activities data={data} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
