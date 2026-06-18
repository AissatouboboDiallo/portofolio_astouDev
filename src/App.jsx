import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Hero from './composants/Hero';
import Navbar from './composants/Navbar';
import Projects from './composants/Projects';
import Skills from './composants/Skills';
import Contact from './composants/Contact';
import About from './composants/About';


function App() {
  const theme = useSelector((state) => state.portfolioData.theme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <div className='theme-app'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
