import React from 'react';
import { useSelector } from 'react-redux';
// Import des icônes depuis react-icons (pense à faire : npm install react-icons)
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUpRight } from 'react-icons/fi';
import { BiMessageSquareDetail } from 'react-icons/bi';
import moi from './../assets/moi3.png'

export default function Hero() {
  // Récupération des données du profil depuis le store Redux
  const profile = useSelector((state) => state.portfolioData.profile);

  return (
    <section id="accueil" className="theme-section relative w-full min-h-[85vh] flex items-center justify-between overflow-hidden py-12 md:px-10 md:py-10">
      
      {/* Grille principale à 2 colonnes (s'empile sur mobile) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* COLONNE GAUCHE : Textes et Boutons (Prend 7 colonnes sur 12) */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          
          <span className="flex items-center gap-2 text-base font-medium tracking-wide theme-muted md:text-lg">
            Salut, moi c'est <span className="animate-bounce">👋</span>
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="theme-accent block lg:inline">{profile.name}</span>
            <span className="block mt-2 text-4xl font-bold text-[var(--text-main)] md:text-6xl">
              {profile.role}
            </span>
          </h1>
          
          <p className="theme-muted max-w-xl text-base leading-relaxed md:text-lg">
            {profile.description}
          </p>
          
          {/* Les Boutons d'action */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projet" 
              className="theme-accent-bg theme-accent-bg-hover flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_var(--accent-glow)]"
            >
              Voir mes projets
              <FiArrowUpRight className="text-lg" />
            </a>
            
            <a 
              href="#contact" 
              className="theme-card flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-[var(--text-main)] transition-all duration-300 hover:border-[var(--accent)]"
            >
              Me contacter
              <BiMessageSquareDetail className="text-lg theme-muted" />
            </a>
          </div>
          
          {/* Réseaux Sociaux */}
          <div className="flex items-center gap-6 pt-6 text-xl theme-muted">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--accent)]">
              <FiGithub />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--accent)]">
              <FiLinkedin />
            </a>
            <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--accent)]">
              <FiTwitter />
            </a>
            <a href={profile.socials.email} className="transition-colors hover:text-[var(--accent)]">
              <FiMail />
            </a>
          </div>
        </div>

        {/* COLONNE DROITE : L'image de profil avec effet néon blob (Prend 5 colonnes sur 12) */}
        <div className="lg:col-span-5 flex justify-center relative">
          
          {/* Conteneur principal de l'image avec la forme personnalisée et l'ombre portée */}
          <div className="relative w-[300px] h-[300px] overflow-hidden p-[3px] animate-[morph_8s_ease-in-out_infinite] md:h-[400px] md:w-[400px]">
            <div className="theme-surface-strong relative h-full w-full overflow-hidden rounded-[40%_60%_70%_50%_/_50%_40%_120%_80%]">
              <img 
                src={moi} // Remplace par ton image réelle ou ton illustration 3D
                alt={profile.name}
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Badge "Disponible" flottant */}
          {profile.isAvailable && (
            <div className="theme-card absolute top-8 right-4 z-20 flex items-center gap-2 rounded-full px-4 py-1.5 backdrop-blur-md md:right-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-[var(--text-soft)]">Disponible</span>
            </div>
          )}

          {/* Éléments de décoration d'arrière-plan (Blobs flous néon) */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#8A2BE2]/20 rounded-full blur-[40px] -z-10" />
          <div className="absolute -bottom-10 -right-10 w-45 h-45 bg-[#3B82F6]/10 rounded-full blur-[50px] -z-10" />
        </div>

      </div>
    </section>
  );
}