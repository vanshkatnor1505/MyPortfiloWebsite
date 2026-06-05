import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Coding" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Tech Stacks" },
  { value: "∞", label: "Curiosity" },
];

export function Philosophy() {
  return (
    <section  id="about" className="relative  mx-auto max-w-7xl px-6 py-32 md:py-40">
      <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-12">

        {/* Left: About text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 md:col-span-7"
        >
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-neon">
              About / 01
            </span>
            <h2 className="font-display text-5xl uppercase tracking-tight md:text-6xl">
              Who I Am
            </h2>
          </div>

          <div className="space-y-5 text-lg font-light leading-relaxed text-ghost">
            <p>
              I'm <span className="font-medium text-silver">Vanshdeep Katnor</span> — a 2nd-year BTech student
              specialising in <span className="text-neon">Data Science</span>, with a deep obsession for building
              things that actually work and look great doing it.
            </p>
            <p>
              My stack spans the full spectrum: from crafting responsive web apps in <span className="text-silver">React JS</span>,
              building game mechanics in <span className="text-amber text-glow-amber">Unity</span>, writing backend logic in
              <span className="text-silver"> Python, C, C++, C#</span> — to training
              <span className="text-neon"> ML models</span>, cleaning messy datasets, and turning numbers into
              beautiful visualisations.
            </p>
            <p>
              I believe the best engineers aren't just coders — they're problem-solvers who can think in data,
              design with empathy, and ship with confidence.
            </p>
          </div>

          <div className="flex gap-4 pt-2">
            <a
              href="#works"
              className="rounded-full border border-neon/30 bg-neon/5 px-7 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-neon transition-all hover:bg-neon/10 hover:border-neon"
            >
              See My Work
            </a>
            <a
              href="#stack"
              className="rounded-full border border-silver/10 px-7 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ghost transition-all hover:text-silver hover:border-silver/30"
            >
              View Skills
            </a>
          </div>
        </motion.div>

        {/* Right: Stats grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5"
        >
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="glass card-hover rounded-xl p-7 text-center"
              >
                <div className="font-display text-5xl text-neon text-glow">{s.value}</div>
                <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.3em] text-ghost">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Education badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="glass mt-3 rounded-xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-neon/10 border border-neon/20">
                <span className="font-display text-lg text-neon">🎓</span>
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-neon">Currently</div>
                <div className="mt-1 font-medium text-silver">BTech in Data Science</div>
                <div className="font-mono text-[10px] text-ghost">2nd Year · 2025 – 2029</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
