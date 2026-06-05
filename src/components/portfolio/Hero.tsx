import { motion } from "framer-motion";
import { Particles } from "./Particles";

const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.18 * i,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* Particles */}
      <Particles count={70} />

      {/* Backdrop Ghost Word */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 0.035, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 w-full max-w-[1800px] -translate-x-1/2 -translate-y-1/2 select-none font-display text-center text-[24vw] font-extrabold uppercase leading-[0.85] tracking-tighter text-white will-change-transform sm:text-[18vw] lg:text-[16vw]"
        aria-hidden
      >
        KATNOR
      </motion.div>

      {/* Decorative Glow Rings */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2.5, delay: 0.5 }}
        className="pointer-events-none absolute left-[8%] top-[20%] size-64 rounded-full border border-neon/40 blur-3xl will-change-transform"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2.5, delay: 0.8 }}
        className="pointer-events-none absolute right-[12%] bottom-[25%] size-96 rounded-full border border-violet/40 blur-3xl will-change-transform"
        aria-hidden
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
        {/* Status Badge */}
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={0}
          className="flex items-center justify-center"
        >
          <span className="glass rounded-full px-5 py-2 font-mono text-[10px] uppercase tracking-[0.4em] text-neon backdrop-blur-md">
            <span className="mr-2 inline-block size-1.5 animate-pulse rounded-full bg-neon align-middle" />
            BTech Data Science · 2nd Year · Available for Internships
          </span>
        </motion.div>

        {/* Name */}
        <motion.p
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={1}
          className="flex items-center justify-center gap-4 text-[11px] font-medium uppercase tracking-[0.5em] text-ghost/80"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-neon/60" />

          Vanshdeep Katnor

          <span className="h-px w-12 bg-gradient-to-l from-transparent to-neon/60" />
        </motion.p>

        {/* Heading */}
        <motion.h1
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={2}
          className="font-display text-[3.8rem] font-extrabold uppercase leading-[0.9] tracking-tight will-change-transform sm:text-[5rem] md:text-[7rem] lg:text-[9rem]"
        >
          Build.{" "}
          <span className="animate-gradient bg-gradient-to-r from-neon via-amber to-neon bg-[length:200%_200%] bg-clip-text text-transparent text-glow">
            Analyze.
          </span>
          <br />
          Create.
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={3}
          className="mx-auto max-w-3xl text-base leading-8 text-ghost/90 sm:text-lg md:text-xl"
        >
          Developer & Data Scientist crafting full-stack web apps,
          machine learning systems, and immersive digital experiences.
          Turning raw data into insight — and raw ideas into working products.
        </motion.p>

        {/* Skills */}
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={4}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            "React JS",
            "Python",
            "Unity",
            "SQL",
            "C++",
            "Machine Learning",
            "Data Science",
            "C#",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-silver/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ghost backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-neon/40 hover:text-neon"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={5}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <a
            href="#works"
            className="group relative overflow-hidden rounded-full border border-neon/30 bg-neon/5 px-10 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-neon hover:bg-neon/10"
          >
            <span className="relative text-[10px] font-bold uppercase tracking-[0.4em] transition-colors group-hover:text-neon">
              View My Work
            </span>
          </a>

          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full border border-silver/10 px-10 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet/50 hover:bg-violet/5"
          >
            <span className="relative text-[10px] font-bold uppercase tracking-[0.4em] text-ghost transition-colors group-hover:text-silver">
              Get In Touch
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.4, 1, 0.4],
          y: [0, 8, 0],
        }}
        transition={{
          delay: 2,
          duration: 2.5,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-ghost/60">
          Scroll
        </span>

        <div className="h-24 w-px bg-gradient-to-b from-neon/60 via-silver/20 to-transparent" />
      </motion.div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}