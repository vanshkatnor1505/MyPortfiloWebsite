import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Projects" },
  { href: "#stack", label: "Skills" },
  { href: "#chronicle", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <div className="glass-strong rounded-full px-5 py-2.5">
          <a href="#top" className="font-display text-xl tracking-wider text-silver">
            VK<span className="text-neon">.</span>
          </a>
        </div>

        <div className="glass-strong hidden rounded-full px-6 py-2.5 gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[10px] uppercase tracking-[0.25em] text-ghost transition-colors hover:text-neon"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="glass-strong hidden rounded-full px-5 py-2.5 sm:block">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ghost">
              <span className="mr-2 inline-block size-1.5 rounded-full bg-neon align-middle animate-shimmer" />
              Open to Work
            </span>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="glass-strong flex size-10 items-center justify-center rounded-full md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" className="text-silver">
              {menuOpen ? (
                <path d="M1 1L17 13M17 1L1 13" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <>
                  <path d="M0 1H18" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0 7H18" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0 13H18" stroke="currentColor" strokeWidth="1.5" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-silver/5 bg-void/95 px-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ghost transition-colors hover:bg-lith/40 hover:text-neon"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
