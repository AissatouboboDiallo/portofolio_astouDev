import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiMoon, FiSun } from 'react-icons/fi';
import ButtonSecondary from './ButtonSecondary';
import { toggleTheme } from '../features/portfolioSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.portfolioData.theme);
  const isDark = theme === 'dark';

  // Liste de tes sections avec leurs IDs correspondants
  const listNav = [
    { name: "Accueil", section: "#accueil" },
    { name: "À propos", section: "#about" },
    { name: "Compétences", section: "#skills" },
    { name: "Projets", section: "#projet" },
    { name: "Contact", section: "#contact" }
  ];

  // État pour stocker l'ID de la section active (par défaut l'accueil)
  const [activeSection, setActiveSection] = useState('#accueil');

  useEffect(() => {
    // Configuration de l'observateur : déclenche quand la section occupe 60% de l'écran
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, 
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // On met à jour l'état avec l'ID de la section visible
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // On dit à l'observateur de surveiller toutes nos sections HTML
    listNav.forEach((nav) => {
      const element = document.querySelector(nav.section);
      if (element) observer.observe(element);
    });

    // Nettoyage de l'observateur quand le composant est démonté
    return () => observer.disconnect();
  }, []);

  return (
    <div className='theme-navbar sticky top-0 z-50 flex w-full items-center justify-between gap-4 p-4 md:p-6 backdrop-blur-md text-[var(--text-main)]'>
      
      {/* Logo */}
      <div className='flex-shrink-0 font-bold text-xl'>
        <span className="theme-accent">&lt;/&gt;</span> AstouDev
      </div>

      {/* Navigation */}
      <nav className='hidden flex-1 justify-center gap-8 md:flex'>
        {listNav.map((nav, index) => {
          const isActive = activeSection === nav.section;

          return (
            <a 
              key={index} 
              href={nav.section} 
              className={`transition-colors duration-300 relative pb-2 text-sm ${
                isActive 
                  ? 'theme-accent font-semibold' 
                  : 'theme-muted hover:text-[var(--text-main)]'
              }`}
            >
              {nav.name}
              
              {/* Barre animée sous le lien */}
              <span className={`absolute bottom-0 left-0 h-[2px] theme-accent-bg transition-transform duration-300 ease-out origin-center w-full ${
                isActive ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </a>
          );
        })}
      </nav>  

      {/* Bouton */}
      <div className='flex items-center gap-3'>
        <button
          type="button"
          onClick={() => dispatch(toggleTheme())}
          className="theme-card flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-300 hover:border-[var(--accent)]"
          aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
          title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
        >
          {isDark ? <FiSun className="text-base theme-accent" /> : <FiMoon className="text-base theme-accent" />}
          <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
        </button>

        <ButtonSecondary>
              <a 
                href="/Mon_CV.pdf" // Chemin direct depuis le dossier public
                download="CV_Aissatou_Bobo_Diallo.pdf" // Nom optionnel que prendra le fichier sur l'ordi de l'utilisateur
              >
                
                Télécharger CV
                {/* Optionnel : Une petite icône de téléchargement en SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>

        </ButtonSecondary>
       
      </div>
    </div>
  );
}