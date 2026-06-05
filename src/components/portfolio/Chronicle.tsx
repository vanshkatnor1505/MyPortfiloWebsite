import { motion } from "framer-motion";

const entries = [
  {
    year: "2029",
    title: "BTech Graduate",
    org: "Data Science",
    note: "Target graduation. Aspiring to build at the intersection of ML, full-stack dev, and real-world impact.",
    status: "upcoming",
  },
  {
    year: "2026",
    title: "Projects & Learning",
    org: "Self-Directed",
    note: "Built ML models, React web apps, and Unity games. Deepened expertise in data science and software engineering.",
    status: "active",
  },
  {
    year: "2025",
    title: "BTech — Year 1",
    org: "Data Science Programme",
    note: "Foundation in programming (C, C++, Python), mathematics, databases (SQL), and core CS concepts.",
    status: "done",
  },
  {
    year: "2023",
    title: "First Lines of Code",
    org: "Self-Taught",
    note: "Started the journey — HTML, CSS, Python basics, first game in Unity. The spark that started everything.",
    status: "done",
  },
];

export function Chronicle() {
  return (
    <section id="chronicle" className="relative mx-auto max-w-7xl px-6 py-32 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="mb-16 flex items-end justify-between border-b border-silver/5 pb-8"
      >
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-neon">Journey / 04</span>
          <h2 className="mt-2 font-display text-4xl uppercase tracking-tight md:text-5xl">
            My Timeline
          </h2>
        </div>
        <span className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ghost">
          Origins → Future
        </span>
      </motion.div>

      <ol className="relative">
        <span className="absolute left-[7.5rem] top-0 hidden h-full w-px bg-gradient-to-b from-neon/40 via-silver/10 to-transparent md:block" />
        {entries.map((e, i) => (
          <motion.li
            key={`${e.year}-${e.title}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group relative grid grid-cols-1 gap-6 border-b border-silver/5 py-10 md:grid-cols-[7rem_1.5rem_1fr] md:gap-8"
          >
            <div className={`font-display text-3xl font-bold transition-colors group-hover:text-neon ${e.status === "upcoming" ? "text-neon/50" : "text-silver/80"}`}>
              {e.year}
              {e.status === "upcoming" && (
                <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.3em] text-neon/60">Soon</div>
              )}
            </div>
            <div className="relative hidden md:block">
              <span className={`absolute left-0 top-3 size-3 -translate-x-[6px] rounded-full border transition-all group-hover:shadow-[0_0_18px_color-mix(in_oklab,var(--color-neon)_70%,transparent)] ${
                e.status === "active"
                  ? "border-neon bg-neon animate-shimmer"
                  : e.status === "upcoming"
                  ? "border-neon/40 bg-void"
                  : "border-silver/30 bg-void group-hover:bg-neon group-hover:border-neon"
              }`} />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="font-display text-xl uppercase tracking-wide">{e.title}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ghost">
                  / {e.org}
                </span>
                {e.status === "active" && (
                  <span className="rounded-full border border-neon/30 bg-neon/5 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.2em] text-neon">
                    Current
                  </span>
                )}
              </div>
              <p className="max-w-2xl font-light text-ghost">{e.note}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
