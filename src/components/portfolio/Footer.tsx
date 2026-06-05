import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative px-6 pb-12 pt-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 border-t border-silver/5 pt-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-display text-6xl uppercase tracking-widest text-silver/8 md:text-[8rem]"
        >
          VANSHDEEP
        </motion.div>

        <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex gap-8 font-mono text-[10px] uppercase tracking-[0.3em] text-ghost">
            <a href="https://github.com/vanshkatnor1505" className="transition-colors hover:text-neon">GitHub</a>
            <a href="https://linkedin.com/in/vanshdeep-katnor-26abb2375" className="transition-colors hover:text-neon">LinkedIn</a>
            <a href="mailto:vanshkatnor1737@gmail.com" className="transition-colors hover:text-neon">Email</a>
          </div>
          <div className="font-mono text-[10px] italic uppercase tracking-[0.3em] text-ghost/60">
            Vanshdeep Katnor · BTech Data Science · © 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
