import React from 'react';
import { useSelector } from 'react-redux';

// Icons
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFlutter, SiPython, SiFirebase, SiRedux } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

export default function Skills() {
  const skills = useSelector((state) => state.portfolioData.skills);

  // 🔥 Mapping propre (plus scalable que switch)
  const iconMap = {
    html: <FaHtml5 className="text-4xl text-[#E34F26]" />,
    css: <FaCss3Alt className="text-4xl text-[#1572B6]" />,
    js: <FaJsSquare className="text-4xl text-[#F7DF1E]" />,
    ts: <SiTypescript className="text-4xl text-[#3178C6]" />,
    python: <SiPython className="text-4xl text-[#3776AB]" />,
    react: <FaReact className="text-4xl text-[#61DAFB]" />,
    "react-native": <TbBrandReactNative className="text-4xl text-[#61DAFB]" />,
    flutter: <SiFlutter className="text-4xl text-[#02569B]" />,
    firebase: <SiFirebase className="text-4xl text-[#FFCA28]" />,
    redux: <SiRedux className="text-4xl text-[#764ABC]" />,
    tailwind: <SiTailwindcss className="text-4xl text-[#06B6D4]" />,
    github: <FaGithub className="text-4xl text-white" />,

  };

  return (
    <section id="skills" className="theme-section w-full py-16 text-left">

      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="w-2.5 h-2.5 rounded-full theme-accent-bg shadow-[0_0_10px_var(--accent-glow)]" />
        <h2 className="text-2xl font-bold tracking-wide">Mes compétences</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 w-full">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="theme-card flex cursor-pointer flex-col items-center justify-center rounded-2xl p-6 transition-all duration-300 group hover:border-[var(--accent)] hover:shadow-[0_0_20px_var(--accent-glow)]"
          >
            {/* Icon */}
            <div className="transform group-hover:scale-110 transition-transform duration-300 mb-3">
              {iconMap[skill.icon] || <FaReact className="text-4xl text-white" />}
            </div>

            {/* Label */}
            <span className="theme-muted text-xs font-semibold tracking-wider transition-colors group-hover:text-[var(--text-main)]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}