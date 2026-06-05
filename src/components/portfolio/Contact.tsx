import { motion } from "framer-motion";

const socials = [
  { label: "GitHub", handle: "@vanshdeepkatnor", href: "https://github.com/vanshkatnor1505", icon: "⌨️" },
  { label: "LinkedIn", handle: "Vanshdeep Katnor", href: "https://linkedin.com/in/vanshdeep-katnor-26abb2375", icon: "💼" },
  { label: "Email", handle: "vanshkatnor1737@gmail.com", href: "mailto:vanshkatnor1737@gmail.com", icon: "✉️" },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-6 pt-32 pb-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 space-y-6"
        >
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.5em] text-neon">
            Contact / 05
          </span>
          <h2 className="font-display text-6xl uppercase tracking-tight md:text-8xl leading-none">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-neon via-amber to-violet bg-clip-text text-transparent animate-gradient">
              Connect
            </span>
          </h2>
          <p className="max-w-xl text-lg font-light text-ghost">
            I'm open to internships, collaborations, and exciting projects.
            Whether you're building something cool or have an interesting challenge — let's talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass card-hover group flex items-center gap-5 rounded-2xl border border-silver/5 p-7 transition-colors hover:border-neon/20"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-lith text-2xl">
                {s.icon}
              </span>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ghost">{s.label}</div>
                <div className="mt-1 font-medium text-silver group-hover:text-neon transition-colors">
                  {s.handle}
                </div>
              </div>
              <span className="ml-auto font-mono text-[12px] text-ghost/40 group-hover:text-neon transition-colors">→</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 glass rounded-2xl border border-neon/10 p-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.4em] text-neon mb-3">
            <span className="size-1.5 rounded-full bg-neon animate-shimmer" />
            Currently Available
          </div>
          <p className="text-ghost font-light">
            Looking for internship opportunities, open-source collabs, or freelance projects.
            <br />
            <span className="text-silver">Data Science · Web Development · Game Dev</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
