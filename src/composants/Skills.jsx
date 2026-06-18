import React from 'react';
import { useSelector } from 'react-redux';
// Importation des icônes technologiques officielles
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFlutter, SiPython } from 'react-icons/si';

export default function Skills() {
  // Récupération de la liste des compétences depuis Redux
  const skills = useSelector((state) => state.portfolioData.skills);

  // Fonction pour distribuer le bon composant d'icône avec sa couleur officielle
  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'html':
        return <FaHtml5 className="text-4xl text-[#E34F26]" />;
      case 'css':
        return <FaCss3Alt className="text-4xl text-[#1572B6]" />;
      case 'js':
        return <FaJsSquare className="text-4xl text-[#F7DF1E]" />;
      case 'python':
        return <SiPython className="text-4xl text-[#3178C6]" />;
      case 'react':
        return <FaReact className="text-4xl text-[#61DAFB]" />;
      case 'flutter':
        return <SiFlutter className="text-4xl text-white" />;
      case 'tailwind':
        return <SiTailwindcss className="text-4xl text-[#06B6D4]" />;
      case 'github':
        return <FaGithub className="text-4xl text-white" />;
      default:
        return <FaReact className="text-4xl text-white" />;
    }
  };

  return (
    <section id="skills" className="theme-section w-full py-16 text-left">
      
      {/* Titre de la section avec la puce violette de la maquette */}
      <div className="flex items-center gap-3 mb-10">
        <span className="w-2.5 h-2.5 rounded-full theme-accent-bg shadow-[0_0_10px_var(--accent-glow)]" />
        <h2 className="text-2xl font-bold tracking-wide">Mes compétences</h2>
      </div>

      {/* Grille responsive : 2 colonnes sur mobile, 4 sur tablette, 8 sur grand écran */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 w-full">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="theme-card flex cursor-pointer flex-col items-center justify-center rounded-2xl p-6 transition-all duration-300 group hover:border-[var(--accent)] hover:shadow-[0_0_20px_var(--accent-glow)]"
          >
            {/* Conteneur de l'icône avec un léger effet de zoom au survol */}
            <div className="transform group-hover:scale-110 transition-transform duration-300 mb-3">
              {getSkillIcon(skill.icon)}
            </div>
            
            {/* Nom de la technologie */}
            <span className="theme-muted text-xs font-semibold tracking-wider transition-colors group-hover:text-[var(--text-main)]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}