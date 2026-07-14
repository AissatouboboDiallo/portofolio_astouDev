import React from 'react';
import { useSelector } from 'react-redux';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  // Récupération des projets depuis Redux
  const projects = useSelector((state) => state.portfolioData.projects);

  return (
    <section id="projet" className="theme-section w-full py-16 text-left">
      
      {/* En-tête de la section avec titre à gauche et bouton "Voir tout" à droite */}
      <div className="flex items-center justify-between mb-10 w-full">
        {/* Titre avec la puce violette officielle */}
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full theme-accent-bg shadow-[0_0_10px_var(--accent-glow)]" />
          <h2 className="text-2xl font-bold tracking-wide">Mes projets</h2>
        </div>

        {/* Lien "Voir tous les projets" */}
        <a 
          href="https://github.com/AissatouboboDiallo" 
          target="_blank" 
          rel="noreferrer" 
          className="group flex items-center gap-2 text-xs font-medium theme-muted transition-colors duration-300 hover:text-[var(--accent)] md:text-sm"
        >
          Voir tous les projets
          <FiArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>

      {/* Grille de projets : 1 colonne sur mobile, 3 colonnes sur PC */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="theme-card group flex flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:border-[var(--accent)] hover:shadow-[0_10px_30px_var(--accent-glow)]"
          >
            {/* 1. Zone Image du projet */}
            <div className="theme-surface-strong relative aspect-[10/10] w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              {/* Overlay subtil en dégradé sur le bas de l'image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent opacity-60" />
            </div>

            {/* 2. Zone Textes et Contenu */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg font-bold text-[var(--text-main)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {project.title}
                </h3>
                
                <p className="theme-muted mt-2 min-h-[40px] text-xs leading-relaxed md:text-sm">
                  {project.description}
                </p>
              </div>

              {/* 3. Pied de la carte : Tags + Bouton externe */}
              <div className="mt-5 flex items-center justify-between border-t border-[var(--border-soft)] pt-4">
                {/* Liste des technologies utilisées */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technos.map((tech, index) => (
                    <span
                      key={index}
                      className="theme-surface-strong rounded-md border border-[var(--border-soft)] px-2.5 py-1 text-[10px] font-medium theme-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bouton pour ouvrir le lien vers le projet */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-surface-strong rounded-xl border border-[var(--border-soft)] p-2 theme-muted transition-all duration-300 shadow-md hover:border-transparent hover:bg-[var(--accent)] hover:text-white"
                >
                  <FiExternalLink className="text-sm md:text-base" />
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}