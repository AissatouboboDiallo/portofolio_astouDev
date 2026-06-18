import { createSlice } from "@reduxjs/toolkit";
const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return 'dark';
  }

  const savedTheme = window.localStorage.getItem('portfolio-theme');
  return savedTheme === 'light' ? 'light' : 'dark';
};

const initialState = {
  theme: getInitialTheme(),
    profile: {
    name: "Astou Bobo",
    role: "Développeuse Front-end",
    description: "Je conçois et développe des interfaces web modernes, rapides et accessibles avec des expériences utilisateur exceptionnelles.",
    isAvailable: true,
    socials: {
      github: "https://github.com/AissatouboboDiallo",
      linkedin: "https://www.linkedin.com/in/aissatou-bobo-diallo-a75121279/",
      email: "mailto:aissatoubobo094@gmail.com",
      phone: "+224 625 85 61 36",
      location: "Mamou, Guinée"
    }
  },
  about: {
    bioParagraph1: "Passionnée par le développement web, je crée des interfaces modernes et intuitives. J'aime transformer des idées en expériences numériques performantes.",
    bioParagraph2: "Toujours curieuse d'apprendre, je suis constamment à la recherche de nouveaux défis pour perfectionner mes compétences.",
    services: [
      {
        id: "front",
        title: "Développement Front-end",
        description: "Spécialisée dans React et les technologies modernes du web.",
        icon: "code"
      },
      {
        id: "design",
        title: "Design & UI/UX",
        description: "Sens du détail et passion pour créer des interfaces élégantes.",
        icon: "design"
      },
      {
        id: "perf",
        title: "Performance",
        description: "Des sites rapides, optimisés et accessibles à tous.",
        icon: "perf"
      }
    ]
  },

  skills: [
    { id: 1, name: "HTML", icon: "html" },
    { id: 2, name: "CSS", icon: "css" },
    { id: 3, name: "JavaScript", icon: "js" },
    { id: 4, name: "Python", icon: "python" },
    { id: 5, name: "React", icon: "react" },
    { id: 6, name: "Flutter", icon: "flutter" },
    { id: 7, name: "Tailwind CSS", icon: "tailwind" },
    { id: 8, name: "Git & GitHub", icon: "github" }
  ],

    projects : [ {
        id:1,        
        title : "Femmes Vertes & Connect",
        description : "Site e-commerce de produits bio avec panier d'achat et paiement.",
        technos: ["React", "Tailwind CSS", "Redux"],
        image: "/images/marketplace.png", // Remplace par ta vraie capture d'écran
        link: "https://lovable.dev/projects/62d76bda-ef68-463a-9c86-c81138865a21"
    } ,
    {
        id:2,
        title : "Dashboard Analytics",
        description : "Tableau de bord d'analyse de données avec graphiques interatifs.",
        technos: ["React", "Tailwind CSS", "Redux"],
        image:"/images/tableauBord.png",
        link: "https://bm-connect-zeta.vercel.app"
    } ,
    {
        id:3,
        title : "Saas Landing Page",
        description : "Landing page moderne pour une application Saas.",
        technos: ["Flutter", "Material 3", "Firebase"],
        image: "/images/firscars.png", // Remplace par ta vraie capture d'écran
        link: "https://github.com/AissatouboboDiallo/firsCars"
    } ,

  ] ,
  filter : "All" // Pour filtrer les projets


} ;
const portfolioSlice = createSlice({
    name : 'portfolio',
    initialState,
    reducers : {
        setFilter : (state, action)  => {
            state.filter = action.payload ;
        } ,
        toggleTheme: (state) => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
      },
      setTheme: (state, action) => {
        state.theme = action.payload;
      },
    }
})

  export const {setFilter, toggleTheme, setTheme} = portfolioSlice.actions ;
export default portfolioSlice.reducer 