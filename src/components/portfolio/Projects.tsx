import { useState } from "react";
import { motion } from "framer-motion";
import { projectAssets } from "@/lib/project-assets";
import { CaseStudyPanel, type CaseStudyData } from "./CaseStudyPanel";

type Project = {
  id: string;
  name: string;
  blurb: string;
  role: string;
  year: string;
  tags: { label: string; accent?: boolean }[];
  emoji: string;
  color: string;
  caseStudy: CaseStudyData;
};

const projects: Project[] = [
  {
    id: "01",
    name: "HabitFlow",
    blurb:
      "A modern productivity and habit-tracking platform that helps users manage daily tasks, build routines, track progress through analytics charts, and receive AI-powered insights. Includes an achievement and badge system to boost consistency and user engagement.",
    role: "Full Stack Developer",
    year: "2025",
    emoji: "🔥",
    color: "neon",
    tags: [
      { label: "React JS", accent: true },
      { label: "Productivity App" },
      { label: "Capacitor" },
    ],
    caseStudy: {
      overview:
        "HabitFlow is a productivity-focused web and mobile application designed to help users stay consistent with their habits and daily routines. The platform combines task management, analytics, gamification, and AI-driven insights to create a more engaging self-improvement experience.",
      challenge:
        "The main challenge was creating an app that users would continue using daily instead of abandoning after a few days. The system needed to feel interactive, motivating, and optimized for mobile usage while maintaining a clean and responsive interface.",
      solution:
        "Built the application using React JS with a focus on smooth user experience and engaging design. Added features like habit tracking, routine management, progress analytics, AI insights, achievements, and badges to encourage long-term consistency. Later converted the app into a native-like Android application using Capacitor for a better mobile experience and higher user engagement.",
      results: [
        "Created a fully responsive productivity platform",
        "Implemented analytics dashboards for habit tracking and progress monitoring",
        "Integrated gamification features including achievements and badges",
        "Successfully converted the web app into an Android app using Capacitor",
        "Optimized the experience for mobile-first engagement and daily usage",
      ],
      stack: [
        "React JS",
        "JavaScript",
        "Capacitor",
        "HTML",
        "CSS",
        "Chart Libraries",
        "AI Integration",
        "Netlify",
      ],
      links: [{ label: "Live Demo", url: "https://habitflowv.netlify.app" }],
    },
  },
  {
    id: "02",
    name: "NeuroMetrics",
    blurb:
      "An interactive brain-training platform featuring cognitive skill games like reaction time tests, aim trainer, number memory, sequence memory, chimp test, and math challenges. Includes rankings, daily challenges, analytics, and high-score tracking to maximize user engagement.",
    role: "Frontend Developer",
    year: "2025",
    emoji: "🧩",
    color: "violet",
    tags: [{ label: "React JS", accent: true }, { label: "Framer Motion" }, { label: "Lenis" }],
    caseStudy: {
      overview:
        "NeuroMetrics is a modern web-based brain training platform designed to improve focus, memory, reaction speed, and cognitive performance through interactive mini-games and real-time analytics. The experience is built to feel competitive, engaging, and highly responsive across devices.",
      challenge:
        "The biggest challenge was creating fast and responsive gameplay mechanics while maintaining smooth animations and a polished user experience on both desktop and mobile devices. Another challenge was designing systems that keep users returning consistently.",
      solution:
        "Built the platform entirely in React JS with Framer Motion for fluid animations and Lenis for smooth scrolling interactions. Added multiple cognitive games, a ranking system, daily challenges, personalized analytics, and high-score tracking to create a competitive and rewarding experience for users.",
      results: [
        "Developed multiple fully interactive brain-training games",
        "Implemented real-time score tracking and performance analytics",
        "Added rank progression and daily challenge systems for engagement",
        "Optimized gameplay experience for both desktop and mobile devices",
        "Created smooth and modern UI animations using Framer Motion and Lenis",
      ],
      stack: [
        "React JS",
        "JavaScript",
        "Framer Motion",
        "Lenis",
        "HTML",
        "CSS",
        "Responsive Design",
        "Netlify",
      ],
      links: [{ label: "Live Demo", url: "https://neurometricsv.netlify.app/" }],
    },
  },
  {
    id: "03",
    name: "Housing Price Prediction",
    blurb:
      "Machine learning project focused on predicting housing prices using multiple regression models, feature engineering, and detailed exploratory data analysis. Compared Linear, Ridge, Lasso, and Random Forest regression models to identify the best-performing approach.",
    role: "Data Scientist",
    year: "2025",
    emoji: "🏠",
    color: "neon",
    tags: [
      { label: "Machine Learning", accent: true },
      { label: "Python" },
      { label: "Scikit-learn" },
    ],
    caseStudy: {
      overview:
        "An end-to-end housing price prediction project built using regression-based machine learning models. The workflow includes data cleaning, preprocessing, feature engineering, visualization, model training, evaluation, and comparison of multiple regression algorithms.",
      challenge:
        "The dataset contained skewed target values, correlated features, and a relatively small sample size, making it difficult to build a stable model with strong generalization performance.",
      solution:
        "Applied log transformation on house prices, encoded categorical variables, standardized numerical features, and compared Linear Regression, Ridge Regression, Lasso Regression, and Random Forest models. Ridge Regression was selected as the final model due to its stable performance and better handling of multicollinearity.",
      results: [
        "Achieved R² score of approximately 0.67 using Ridge Regression",
        "Performed complete EDA with correlation analysis and visualizations",
        "Implemented feature engineering and preprocessing pipelines",
        "Compared multiple regression approaches for performance evaluation",
        "Built a reproducible end-to-end machine learning workflow",
      ],
      stack: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
      links: [{ label: "View Analysis (PDF)", url: projectAssets.housingAnalysisPdf }],
    },
  },
  {
    id: "04",
    name: "Titanic Survival Prediction",
    blurb:
      "Classification-based machine learning project that predicts Titanic passenger survival using Logistic Regression, feature engineering, and detailed exploratory data analysis with statistical visualizations.",
    role: "Data Scientist",
    year: "2025",
    emoji: "🚢",
    color: "violet",
    tags: [
      { label: "Machine Learning", accent: true },
      { label: "Logistic Regression" },
      { label: "EDA" },
    ],
    caseStudy: {
      overview:
        "A complete machine learning workflow focused on predicting passenger survival from the Titanic disaster dataset. The project combines data preprocessing, feature engineering, visualization, model training, and performance evaluation using classification techniques.",
      challenge:
        "The dataset contained missing values, categorical variables, and class imbalance, requiring careful preprocessing and feature engineering to improve prediction accuracy and model interpretability.",
      solution:
        "Handled missing values using statistical imputation, engineered features like FamilySize and Cabin availability, applied one-hot encoding and scaling, and trained a Logistic Regression model optimized for binary classification tasks.",
      results: [
        "Achieved over 82% test accuracy with Logistic Regression",
        "Built detailed survival analysis across gender, class, and age groups",
        "Performed advanced feature engineering for improved predictions",
        "Generated confusion matrix and classification report evaluation",
        "Created multiple statistical visualizations and correlation heatmaps",
      ],
      stack: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
      links: [{ label: "View Analysis (PDF)", url: projectAssets.titanicAnalysisPdf }],
    },
  },
  {
    id: "05",
    name: "Bike Sharing Demand Prediction",
    blurb:
      "Data science and machine learning project for analyzing and predicting bike rental demand using regression and classification models with business-focused insights and demand forecasting.",
    role: "Data Scientist",
    year: "2025",
    emoji: "🚲",
    color: "cyan",
    tags: [
      { label: "Machine Learning", accent: true },
      { label: "Random Forest" },
      { label: "Demand Forecasting" },
    ],
    caseStudy: {
      overview:
        "A comprehensive bike-sharing demand analysis project designed to predict rental demand, identify peak usage hours, and understand the impact of temporal and weather-based factors on user behavior.",
      challenge:
        "The main challenge was preventing data leakage while building realistic prediction models and identifying which variables genuinely influenced rental demand in real-world operational scenarios.",
      solution:
        "Performed extensive preprocessing, removed leakage features, engineered time-based features, and trained multiple machine learning models including Linear Regression, Ridge Regression, and Random Forest. Also developed a separate classification model for peak-hour prediction.",
      results: [
        "Achieved R² score of 0.95 using Random Forest Regression",
        "Built a peak-hour prediction model with 94% accuracy",
        "Identified commute hours as the strongest demand drivers",
        "Performed explainability analysis using feature importance and SHAP insights",
        "Generated business-focused recommendations for operational optimization",
      ],
      stack: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "Random Forest",
        "Jupyter Notebook",
      ],
      links: [{ label: "View Analysis (PDF)", url: projectAssets.bikeSharingPdf }],
    },
  },
  {
    id: "06",
    name: "California Housing Price Prediction",
    blurb:
      "Regression-based machine learning project focused on predicting California housing prices using feature engineering, regularization techniques, and detailed exploratory data analysis.",
    role: "Data Scientist",
    year: "2025",
    emoji: "📈",
    color: "orange",
    tags: [
      { label: "Machine Learning", accent: true },
      { label: "Ridge Regression" },
      { label: "Data Analysis" },
    ],
    caseStudy: {
      overview:
        "An end-to-end regression project built on the California Housing dataset to predict median house prices while addressing skewed targets, multicollinearity, and capped values through preprocessing and regularization techniques.",
      challenge:
        "The dataset contained censored target values, skewed price distributions, correlated numerical features, and missing values, making model stability and interpretability difficult.",
      solution:
        "Removed capped target values, applied log transformation to stabilize distributions, handled missing values through imputation, standardized numerical features, and compared Linear Regression, Ridge Regression, and Random Forest models.",
      results: [
        "Achieved stable R² score of approximately 0.62 using Ridge Regression",
        "Improved model stability through log transformation and regularization",
        "Identified median income as the strongest predictive feature",
        "Performed detailed EDA with correlation and geographic analysis",
        "Built a complete regression modeling and evaluation pipeline",
      ],
      stack: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
      links: [{ label: "View Analysis (PDF)", url: projectAssets.californiaHousingPdf }],
    },
  },
  {
    id: "07",
    name: "Parkour Game",
    blurb:
      "A fast-paced first-person parkour game built in Unity featuring fluid movement mechanics, momentum-based traversal, wall running, sliding, and immersive level design focused on speed and precision gameplay.",
    role: "Game Developer",
    year: "2025",
    emoji: "🏃",
    color: "amber",
    tags: [{ label: "Unity", accent: true }, { label: "C#" }, { label: "Parkour" }],
    caseStudy: {
      overview:
        "A first-person parkour experience currently in development that focuses on fluid movement, responsive controls, and high-speed traversal mechanics. The project is designed to create a satisfying gameplay loop inspired by movement-focused action games.",
      challenge:
        "The biggest challenge is balancing movement responsiveness with realistic physics while ensuring the controls feel smooth and skill-based across different traversal mechanics.",
      solution:
        "Implemented custom movement systems in Unity using C# scripting, including sprinting, sliding, jumping, and momentum-based movement. The game architecture is being designed modularly to allow future expansion of mechanics and level systems.",
      results: [
        "Developed responsive first-person movement mechanics",
        "Implemented momentum-based traversal systems",
        "Designed parkour-focused environments and gameplay flow",
        "Optimized controls for smooth and fast-paced gameplay",
        "Currently expanding mechanics and level progression systems",
      ],
      stack: [
        "Unity",
        "C#",
        "Physics Engine",
        "Character Controller",
        "Level Design",
        "Game Development",
      ],
      links: [{ label: "Development Build", url: "#" }],
    },
  },
  {
    id: "08",
    name: "Horror Game",
    blurb:
      "A psychological horror game in development built with Unity, focused on immersive atmosphere, suspense-driven gameplay, environmental storytelling, and cinematic player experiences.",
    role: "Game Developer",
    year: "2025",
    emoji: "👁️",
    color: "red",
    tags: [{ label: "Unity", accent: true }, { label: "C#" }, { label: "Horror Game" }],
    caseStudy: {
      overview:
        "A horror game project currently under development that aims to create a tense and immersive player experience through atmospheric environments, sound design, and psychological suspense elements.",
      challenge:
        "Creating fear and tension without relying only on jumpscares while maintaining strong player immersion and pacing throughout gameplay.",
      solution:
        "Using Unity's lighting, audio systems, and scripted event mechanics to build atmospheric environments and dynamic horror sequences. The project focuses heavily on mood, environmental storytelling, and immersive level design.",
      results: [
        "Built core gameplay and exploration systems",
        "Designed atmospheric horror environments",
        "Implemented suspense-focused gameplay mechanics",
        "Created immersive lighting and audio-driven experiences",
        "Currently expanding enemy AI and narrative systems",
      ],
      stack: ["Unity", "C#", "Lighting System", "Audio Design", "Game AI", "Level Design"],
      links: [{ label: "Development Build", url: "#" }],
    },
  },
  {
    id: "09",
    name: "Color Sorter",
    blurb:
      "A fun and addictive color sorting puzzle game built with React JS, featuring smooth gameplay mechanics, responsive mobile support, and a fully functional Android APK version for mobile users.",
    role: "Frontend Developer",
    year: "2025",
    emoji: "🎨",
    color: "cyan",
    tags: [
      { label: "React JS", accent: true },
      { label: "Game Development" },
      { label: "Android APK" },
    ],
    caseStudy: {
      overview:
        "Color Sorter is a puzzle-based game where players organize colors strategically to complete levels efficiently. The game focuses on smooth interactions, satisfying animations, and mobile-friendly gameplay for casual entertainment.",
      challenge:
        "The main challenge was designing intuitive game logic and maintaining smooth performance on both desktop browsers and Android devices while keeping the gameplay engaging and responsive.",
      solution:
        "Built the game entirely using React JS with optimized state management and responsive layouts. Later packaged the project into a fully functional Android APK to provide a better mobile gaming experience.",
      results: [
        "Developed fully functional puzzle gameplay mechanics",
        "Created responsive UI optimized for mobile devices",
        "Successfully packaged the project into an Android APK",
        "Achieved smooth interactions and stable performance on phones",
        "Designed engaging gameplay focused on casual user retention",
      ],
      stack: ["React JS", "JavaScript", "HTML", "CSS", "Responsive Design", "APK Packaging"],
      links: [{ label: "Download APK", url: projectAssets.colorSorterApk }],
    },
  },
  {
    id: "10",
    name: "DSP_Tunner",
    blurb:
      "An Android-based audio enhancement application designed for car speakers and sound systems. Running seamlessly in the background, it improves device-wide audio output through optimized DSP presets and advanced manual tuning controls for a richer listening experience.",
    role: "Android Developer",
    year: "2025",
    emoji: "🔊",
    color: "cyan",
    tags: [
      { label: "Android", accent: true },
      { label: "Audio DSP" },
      { label: "Sound Enhancement" },
    ],
    caseStudy: {
      overview:
        "DSP_Tunner is a background audio processing application built exclusively for Android devices. It enhances all audio played on the device, delivering improved clarity, bass response, and overall sound quality, particularly for car speakers and aftermarket sound systems.",
      challenge:
        "The primary challenge was implementing real-time audio enhancement that works across different applications while maintaining low resource consumption and ensuring compatibility with a wide range of Android devices and audio hardware.",
      solution:
        "Developed a lightweight Android audio enhancement service that runs in the background and applies DSP-based sound processing globally. The app includes multiple predefined tuning presets optimized for different speaker setups, along with manual equalization and tuning controls for advanced users who want complete control over their audio profile.",
      results: [
        "Implemented system-wide background audio enhancement",
        "Created multiple sound presets optimized for car audio systems",
        "Added manual tuning and equalizer controls for customization",
        "Improved bass, clarity, and overall listening experience",
        "Optimized performance for continuous low-resource background operation",
        "Designed an intuitive interface for quick audio profile switching",
      ],
      stack: [
        "Android",
        "Java",
        "Audio DSP",
        "Foreground Services",
        "Equalizer API",
        "Media Audio Processing",
        "Material Design",
      ],
      links: [
        {
          label: "Download APK",
          url: "/downloads/DspTunner.apk",
        },
      ],
    },
  },
  {
    id: "11",
    name: "AetherSpace",
    blurb:
      "A privacy-first, ephemeral collaboration platform that enables teams to chat, code, draw, and communicate in real time without storing any data. Create a secure workspace in seconds, collaborate live, and let everything disappear automatically when the session ends.",
    role: "Full Stack Developer",
    year: "2025",
    emoji: "🪐",
    color: "violet",
    tags: [{ label: "Real-Time", accent: true }, { label: "WebRTC" }, { label: "Privacy-First" }],
    caseStudy: {
      overview:
        "AetherSpace is an ephemeral collaboration platform built around the idea that not all teamwork needs permanent storage. Users can instantly create password-protected workspaces for chat, coding, note-taking, whiteboarding, and voice/video communication. All workspace data exists only in memory and is automatically destroyed when the room expires or is manually wiped.",
      challenge:
        "The main challenge was building a fully featured real-time collaboration environment while maintaining strict privacy guarantees. This required synchronizing multiple collaborative tools across users without relying on traditional database storage, while also ensuring security, scalability, and low-latency communication.",
      solution:
        "Developed an in-memory collaboration architecture powered by WebSockets and WebRTC, enabling real-time synchronization of chat, code editing, notes, whiteboards, live cursors, and multimedia communication. Added password-protected rooms, configurable auto-expiry timers, owner-controlled room destruction, and security-focused infrastructure to ensure that no workspace data is persisted after a session ends.",
      results: [
        "Built instant ephemeral workspaces with zero database persistence",
        "Implemented real-time chat, collaborative notes, code editing, and whiteboarding",
        "Developed WebRTC-powered voice, video, screen sharing, and push-to-talk features",
        "Added live cursor synchronization for enhanced collaboration awareness",
        "Integrated Gemini AI capabilities for AI-assisted workflows",
        "Implemented password protection, rate limiting, and automatic room expiry",
        "Created a modern, responsive UI with command palette navigation and smooth animations",
      ],
      stack: [
        "React",
        "TypeScript",
        "Node.js",
        "WebSockets",
        "WebRTC",
        "Tailwind CSS v4",
        "Framer Motion",
        "Gemini API",
        "In-Memory Architecture",
        "Real-Time Collaboration",
      ],
      links: [
        {
          label: "Live Demo",
          url: "https://aetherspace.netlify.app/",
        },
      ],
    },
  },
];

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const openCaseStudy = (project: Project) => {
    setActiveProject(project);
    setIsPanelOpen(true);
  };

  const closeCaseStudy = () => {
    setIsPanelOpen(false);
    setTimeout(() => setActiveProject(null), 500);
  };

  return (
    <>
      <section id="works" className="relative px-6 py-32 md:py-40">
        <div className="mx-auto max-w-7xl space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="flex items-end justify-between border-b border-silver/5 pb-8"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-neon">
                Projects / 02
              </span>
              <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-5xl">
                Selected Works
              </h2>
            </div>
            <span className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ghost">
              2024 — 2026
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                onViewCaseStudy={() => openCaseStudy(p)}
              />
            ))}
          </div>
        </div>
      </section>

      <CaseStudyPanel
        isOpen={isPanelOpen}
        onClose={closeCaseStudy}
        project={
          activeProject
            ? {
                id: activeProject.id,
                name: activeProject.name,
                role: activeProject.role,
                year: activeProject.year,
                emoji: activeProject.emoji,
                tags: activeProject.tags,
              }
            : null
        }
        caseStudy={activeProject?.caseStudy ?? null}
      />
    </>
  );
}

function ProjectCard({
  project,
  index,
  onViewCaseStudy,
}: {
  project: Project;
  index: number;
  onViewCaseStudy: () => void;
}) {
  const colorClass = {
    neon: {
      border: "border-neon/20 hover:border-neon/50",
      accent: "text-neon",
      hoverTitle: "group-hover:text-neon",
      bg: "bg-neon/5",
      dot: "bg-neon",
      tag: "border-neon/40 text-neon",
    },
    violet: {
      border: "border-violet/20 hover:border-violet/50",
      accent: "text-violet",
      hoverTitle: "group-hover:text-violet",
      bg: "bg-violet/5",
      dot: "bg-violet",
      tag: "border-violet/40 text-violet",
    },
    cyan: {
      border: "border-cyan/20 hover:border-cyan/50",
      accent: "text-cyan",
      hoverTitle: "group-hover:text-cyan",
      bg: "bg-cyan/5",
      dot: "bg-cyan",
      tag: "border-cyan/40 text-cyan",
    },
    orange: {
      border: "border-orange/20 hover:border-orange/50",
      accent: "text-orange",
      hoverTitle: "group-hover:text-orange",
      bg: "bg-orange/5",
      dot: "bg-orange",
      tag: "border-orange/40 text-orange",
    },
    amber: {
      border: "border-amber/20 hover:border-amber/50",
      accent: "text-amber",
      hoverTitle: "group-hover:text-amber",
      bg: "bg-amber/5",
      dot: "bg-amber",
      tag: "border-amber/40 text-amber",
    },
    red: {
      border: "border-red/20 hover:border-red/50",
      accent: "text-red",
      hoverTitle: "group-hover:text-red",
      bg: "bg-red/5",
      dot: "bg-red",
      tag: "border-red/40 text-red",
    },
  }[project.color] ?? {
    border: "border-silver/10 hover:border-silver/30",
    accent: "text-silver",
    hoverTitle: "group-hover:text-silver",
    bg: "bg-silver/5",
    dot: "bg-silver",
    tag: "border-silver/20 text-silver",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`glass card-hover group relative flex flex-col rounded-2xl border p-8 ${colorClass.border} transition-colors`}
    >
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div
          className={`flex size-16 items-center justify-center rounded-2xl border text-3xl ${colorClass.bg} border-current/10`}
        >
          {project.emoji}
        </div>
        <span className="font-display text-4xl text-silver/10">{project.id}</span>
      </div>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t.label}
            className={`rounded-full border px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] ${t.accent ? colorClass.tag : "border-silver/10 text-ghost"}`}
          >
            {t.label}
          </span>
        ))}
      </div>

      {/* Content */}
      <h3
        className={`mb-3 font-display text-2xl uppercase tracking-wide text-silver transition-colors ${colorClass.hoverTitle}`}
      >
        {project.name}
      </h3>
      <p className="flex-1 text-sm font-light leading-relaxed text-ghost">{project.blurb}</p>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between border-t border-silver/5 pt-5">
        <div className="flex items-center gap-2 font-mono text-[10px] text-ghost">
          <span className={`size-1.5 rounded-full ${colorClass.dot}`} />
          {project.role}
        </div>
        <button
          onClick={onViewCaseStudy}
          className={`font-mono text-[10px] uppercase tracking-[0.25em] transition-colors ${colorClass.accent} opacity-60 hover:opacity-100`}
        >
          Details →
        </button>
      </div>
    </motion.article>
  );
}
