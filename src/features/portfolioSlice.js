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
    name: "Aïssatou Bobo",
    role: "Développeuse Web & Mobile",
    description:
      "Développeuse spécialisée en applications web et mobiles modernes. Je conçois des interfaces performantes avec React, React Native et Flutter, en intégrant des solutions backend robustes avec Firebase. Mon objectif : créer des expériences utilisateur fluides, rapides et scalables.",
    isAvailable: true,
    availabilityText: "Disponible pour missions & opportunités",
    socials: {
      github: "https://github.com/AissatouboboDiallo",
      linkedin: "https://www.linkedin.com/in/aissatou-bobo-diallo-a75121279/",
      email: "mailto:aissatoubobo094@gmail.com",
      phone: "+224 625 85 61 36",
      location: "Mamou, Guinée"
    }
  },

  about: {
    bioParagraph1:
      "Développeuse passionnée, je conçois des applications web et mobiles modernes en mettant l'accent sur la performance, la maintenabilité et l'expérience utilisateur. J’utilise React, React Native et Flutter pour transformer des idées en produits digitaux concrets.",
    
    bioParagraph2:
      "Je maîtrise la gestion d’état avec Redux, l’intégration de services backend avec Firebase (Auth, Firestore, Storage) et je m’adapte rapidement à de nouveaux environnements techniques. Toujours en apprentissage, je vise des projets à fort impact.",

    services: [
      {
        id: "frontend",
        title: "Développement Web Front-end",
        description:
          "Création d’interfaces modernes avec React, Tailwind CSS et intégration API performante.",
        icon: "code"
      },
      {
        id: "mobile",
        title: "Développement Mobile",
        description:
          "Développement d’applications mobiles cross-platform avec Flutter et React Native.",
        icon: "mobile"
      },
      {
        id: "backend",
        title: "Firebase & Backend",
        description:
          "Intégration Firebase (Authentication, Firestore, Storage) et logique backend scalable.",
        icon: "backend"
      },
      {
        id: "state",
        title: "Architecture & State Management",
        description:
          "Gestion avancée des états avec Redux pour des applications robustes et maintenables.",
        icon: "state"
      }
    ]
  },

  skills: [
    { id: 1, name: "HTML5 / Css", icon: "html" },
    { id: 3, name: "JavaScript (ES6+)", icon: "js" },
    { id: 2, name: "Python", icon: "python" },
    { id: 5, name: "React.js (Redux)", icon: "react" },
    { id: 6, name: "React Native", icon: "react-native" },
    { id: 7, name: "Flutter", icon: "flutter" },
    { id: 9, name: "Firebase", icon: "firebase" },
    { id: 10, name: "Tailwind CSS", icon: "tailwind" },
    { id: 11, name: "Git & GitHub", icon: "github" }
  ],

  projects: [
    {
      id: 1,
      title: "Femmes Vertes & Connect",
      description:
        "Plateforme digitale dédiée à la valorisation et à la mise en réseau des initiatives écologiques féminines en Guinée.",
      technos: ["React", "Tailwind CSS", "Redux"],
      image: "/images/marketplace.png",
      link: "https://lovable.dev/projects/62d76bda-ef68-463a-9c86-c81138865a21"
    },

    {
      id: 2,
      title: "BM Connect Dashboard",
      description:
        "Dashboard analytique avec visualisation de données en temps réel et architecture Redux optimisée.",
      technos: ["React", "Redux", "Chart.js"],
      image: "/images/tableauBord.png",
      link: "https://bm-connect-zeta.vercel.app"
    },

    {
      id: 3,
      title: "Burger Queen Flutter",
      description:
        "Application mobile de gestion du menu d'un restaurant développée avec Flutter et Firebase (authentification, base de données temps réel).",
      technos: ["Flutter", "Firebase", "Material UI"],
      image: "/images/imagesBurger.png",
      link: "https://github.com/AissatouboboDiallo/burgerQueenFlutter"
    },

    {
      id: 4,
      title: "Burguer Queen ",
      description:
        "Application mobile de gestion de menu, commandes et stock des ingredients avec authentification utilisateur et synchronisation en temps réel via Firebase et expo Go.",
      technos: ["React Native", "Firebase", "Redux"],
      image: "/images/burgerQueen.jpeg",
      link: "https://github.com/AissatouboboDiallo/burgerQueenReactNative"
    }
  ]
};

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