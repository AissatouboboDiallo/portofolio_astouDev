import React from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineCode } from 'react-icons/hi';
import { FiPenTool, FiZap } from 'react-icons/fi';
import lightAboutImage from '../assets/moi.png';

export default function About() {
  // Extraction des données "about" depuis le store Redux
  const aboutData = useSelector((state) => state.portfolioData.about);
  const theme = useSelector((state) => state.portfolioData.theme);
  const isLightTheme = theme === 'light';
  const aboutImage = isLightTheme
    ? lightAboutImage
    : 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=500';

  // Fonction pour afficher la bonne icône selon le service
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <HiOutlineCode className="text-xl text-[#3B82F6]" />;
      case 'design':
        return <FiPenTool className="text-xl text-[#A855F7]" />;
      case 'perf':
        return <FiZap className="text-xl text-[#3B82F6]" />;
      default:
        return <HiOutlineCode className="text-xl" />;
    }
  };

  return (
    <section id="about" className="theme-section w-full py-20">
      
      {/* Grille principale */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* 1. BLOC GAUCHE : L'illustration 3D de la développeuse (Prend 4 colonnes) */}
        <div className="lg:col-span-4 flex justify-center">
          <div className={`relative w-full max-w-[320px] aspect-square rounded-2xl p-[1px] ${isLightTheme ? 'bg-gradient-to-br from-[var(--accent)]/20 to-transparent shadow-[0_0_24px_rgba(109,40,217,0.14)]' : 'bg-gradient-to-br from-[var(--accent)]/40 to-transparent shadow-[0_0_30px_var(--accent-glow)]'}`}>
            <div className={`theme-surface-strong flex h-full w-full items-center justify-center overflow-hidden rounded-2xl p-4 ${isLightTheme ? 'bg-white/85' : ''}`}>
              <img 
                src={aboutImage}
                alt={isLightTheme ? 'Portrait de présentation' : 'Illustration codage'}
                className={`w-full h-full object-cover rounded-xl ${isLightTheme ? 'opacity-100 mix-blend-normal object-center' : 'opacity-80 mix-blend-screen'}`}
              />
              {/* Le petit badge flottant </> sur l'image */}
              <div className={`theme-card absolute top-4 right-4 rounded-lg p-2 backdrop-blur-sm ${isLightTheme ? 'bg-white/90' : ''}`}>
                <HiOutlineCode className="text-xl theme-accent" />
              </div>
            </div>
          </div>
        </div>

        {/* 2. BLOC CENTRAL : Les textes de présentation (Prend 4 colonnes) */}
        <div className="lg:col-span-4 flex flex-col space-y-4 text-left px-2">
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            À propos de moi <span className="theme-accent text-4xl">.</span>
          </h2>
          
          <p className="theme-muted text-sm leading-relaxed md:text-base">
            {aboutData.bioParagraph1}
          </p>
          
          <p className="theme-muted text-sm leading-relaxed md:text-base">
            {aboutData.bioParagraph2}
          </p>
        </div>

        {/* 3. BLOC DROITE : Les 3 cartes de services empilées (Prend 4 colonnes) */}
        <div className="lg:col-span-4 flex flex-col space-y-4 w-full">
          {aboutData.services.map((service) => (
            <div 
              key={service.id}
              className="theme-card flex items-start gap-4 rounded-xl p-4 transition-all duration-300 group hover:border-[var(--accent)]"
            >
              {/* Conteneur de l'icône */}
              <div className={`p-3 rounded-xl flex items-center justify-center ${
                service.icon === 'design' ? 'bg-[var(--accent-soft)]' : 'bg-[var(--accent-soft)]'
              }`}>
                {renderIcon(service.icon)}
              </div>
              
              {/* Textes de la carte */}
              <div className="flex flex-col text-left">
                <h3 className="text-sm font-bold text-[var(--text-main)] transition-colors group-hover:text-[var(--accent)]">
                  {service.title}
                </h3>
                <p className="theme-muted mt-1 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}