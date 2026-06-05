import { motion } from "framer-motion";

const groups = [
  {
    n: "01",
    title: "Web Dev",
    icon: "⚡",
    accent: "neon",
    items: ["React JS", "HTML/CSS", "JavaScript", "Node.js", "Web App Development"],
  },
  {
    n: "02",
    title: "Programming",
    icon: "🔧",
    accent: "violet",
    items: ["Python", "C", "C++", "C#", "SQL"],
  },
  {
    n: "03",
    title: "Data Science",
    icon: "📊",
    accent: "amber",
    items: ["EDA", "Machine Learning", "Data Cleaning", "Visualization", "Matplotlib / Seaborn / Pandas"],
  },
  {
    n: "04",
    title: "Game Dev",
    icon: "🎮",
    accent: "neon",
    items: ["Unity Game Engine", "C# Scripting", "Game Mechanics", "3D / 2D Games", "3D Modelling"],
  },
];

const accentMap: Record<string, string> = {
  neon: "text-neon border-neon/40 bg-neon/5",
  violet: "text-violet border-violet/40 bg-violet/5",
  amber: "text-amber border-amber/40 bg-amber/5",
};

export function Stack() {
  return (
    <section id="stack" className="relative border-y border-silver/5 bg-lith/30 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-neon">Skills / 03</span>
            <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-5xl">
              My Toolkit
            </h2>
          </div>
          <span className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ghost">
            04 Domains
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass card-hover group relative rounded-2xl p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className={`flex size-12 items-center justify-center rounded-xl border text-xl ${accentMap[g.accent]}`}>
                  {g.icon}
                </span>
                <span className="font-display text-3xl text-silver/20">{g.n}</span>
              </div>

              <h3 className="mb-4 font-display text-2xl uppercase tracking-wide">{g.title}</h3>

              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-mono text-[11px] text-ghost">
                    <span className={`size-1 rounded-full ${g.accent === "neon" ? "bg-neon" : g.accent === "violet" ? "bg-violet" : "bg-amber"}`} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 rounded-b-2xl transition-transform duration-700 group-hover:scale-x-100 ${g.accent === "neon" ? "bg-neon" : g.accent === "violet" ? "bg-violet" : "bg-amber"}`} />
            </motion.div>
          ))}
        </div>

        {/* Extra skills bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 glass rounded-2xl px-8 py-5"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-ghost mr-2">And more:</span>
            {["Git / GitHub", "Data Visualization", "NumPy", "Scikit-learn", "Problem Solving", "OOP", "netlify", "Framer Motion", "SQL"].map((s) => (
              <span key={s} className="rounded-full border border-silver/10 px-3 py-1 font-mono text-[10px] text-ghost/70 hover:border-neon/30 hover:text-ghost transition-colors">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
