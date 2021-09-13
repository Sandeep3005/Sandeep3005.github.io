import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

interface IThemeContext {
  themeName: string;
  toggleTheme?: () => void;
}

const App = () => {
  const [{ themeName }]: IThemeContext[] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
