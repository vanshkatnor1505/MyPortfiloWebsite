import { motion } from "framer-motion";

export function Vision() {
  return (
    <section className="relative overflow-hidden border-y border-silver/5 py-40">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute left-1/2 top-1/2 size-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/10 blur-[140px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-5xl space-y-10 px-6 text-center"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-neon">Philosophy</span>
        <p className="font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          Great software is{" "}
          <span className="italic text-neon text-glow">
            built at the intersection
          </span>{" "}
          of data, design, and determination.
        </p>
        <div className="mx-auto h-px w-32 neon-divider" />
        <p className="mx-auto max-w-2xl font-light text-ghost md:text-lg">
          I don't just write code — I solve problems. Whether it's cleaning a dataset,
          architecting a React component, or designing a game level, I bring the same
          engineering mindset: understand the problem deeply, then build something that lasts.
        </p>
      </motion.div>
    </section>
  );
}
