import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import AwardsEducation from './components/sections/AwardsEducation';
import GitHub from './components/sections/GitHub';
import Contact from './components/sections/Contact';
import BackToTop from './components/ui/BackToTop';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <AwardsEducation />
        <GitHub />
        <Contact />
        <BackToTop />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

