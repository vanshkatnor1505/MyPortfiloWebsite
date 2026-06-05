import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { assetFilename, isDownloadAsset } from "@/lib/project-assets";
import { useLenisInstance } from "@/hooks/use-lenis";

export interface CaseStudyData {
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
  links?: { label: string; url: string }[];
}

interface CaseStudyPanelProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    name: string;
    role: string;
    year: string;
    emoji: string;
    tags: { label: string; accent?: boolean }[];
  } | null;
  caseStudy: CaseStudyData | null;
}

export function CaseStudyPanel({ isOpen, onClose, project, caseStudy }: CaseStudyPanelProps) {
  const lenis = useLenisInstance();

  useEffect(() => {
    if (!isOpen) return;

    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen, lenis]);

  return (
    <AnimatePresence>
      {isOpen && project && caseStudy && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-50 flex justify-end overscroll-none"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-void/80 backdrop-blur-sm" />

          {/* Panel */}
          <motion.aside
            data-lenis-prevent
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 h-full w-full max-w-2xl overflow-y-auto overscroll-contain border-l border-silver/5 bg-void/95 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="relative flex h-48 w-full items-center justify-center overflow-hidden md:h-56">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.12)_0%,transparent_70%)]"
                aria-hidden
              />
              <span
                className="relative text-7xl md:text-8xl"
                role="img"
                aria-label={`${project.name} icon`}
              >
                {project.emoji}
              </span>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/40 to-void" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-6 top-6 flex size-10 items-center justify-center border border-silver/10 bg-void/60 backdrop-blur-md transition-colors hover:border-neon/40 hover:text-neon"
                aria-label="Close case study"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-silver">
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>

              {/* Project title overlay */}
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-neon">
                  Case Study // {project.id}
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                  {project.name}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-10 px-6 py-10 md:px-10">
              {/* Meta row */}
              <div className="flex flex-wrap gap-6 border-b border-silver/5 pb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-ghost">
                <div>
                  <span className="mb-1 block text-[9px] tracking-[0.3em] text-ghost/50">Role</span>
                  <span className="text-silver">{project.role}</span>
                </div>
                <div>
                  <span className="mb-1 block text-[9px] tracking-[0.3em] text-ghost/50">Year</span>
                  <span className="text-silver">{project.year}</span>
                </div>
                <div>
                  <span className="mb-1 block text-[9px] tracking-[0.3em] text-ghost/50">
                    Status
                  </span>
                  <span className="text-neon">Shipped</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t.label}
                    className={`border px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] ${
                      t.accent ? "border-neon/40 text-neon" : "border-silver/10 text-ghost"
                    }`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>

              {/* Overview */}
              <div className="space-y-4">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon">
                  Overview
                </h3>
                <p className="leading-relaxed text-ghost">{caseStudy.overview}</p>
              </div>

              {/* Challenge */}
              <div className="space-y-4">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon">
                  The Challenge
                </h3>
                <p className="leading-relaxed text-ghost">{caseStudy.challenge}</p>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon">
                  The Solution
                </h3>
                <p className="leading-relaxed text-ghost">{caseStudy.solution}</p>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon">
                  Key Results
                </h3>
                <ul className="space-y-3">
                  {caseStudy.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 size-1.5 shrink-0 bg-neon/60" />
                      <span className="leading-relaxed text-ghost">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-silver/10 bg-lith/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-silver/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {caseStudy.links && caseStudy.links.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon">
                    Explore
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {caseStudy.links.map((link) => {
                      const isAsset = isDownloadAsset(link.url);
                      const isApk = link.url.endsWith(".apk");
                      const isPlaceholder = link.url === "#";

                      if (isPlaceholder) return null;

                      return (
                        <a
                          key={link.label}
                          href={link.url}
                          target={isAsset && !isApk ? "_blank" : isAsset ? undefined : "_blank"}
                          rel={isAsset && isApk ? undefined : "noopener noreferrer"}
                          download={isApk ? assetFilename(link.url) : undefined}
                          className="group relative overflow-hidden border border-silver/15 px-6 py-3 transition-all hover:border-neon/40"
                        >
                          <span className="absolute inset-0 translate-y-full bg-neon/10 transition-transform duration-400 group-hover:translate-y-0" />
                          <span className="relative flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-silver transition-colors group-hover:text-neon">
                            {link.label}
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              className="text-current"
                            >
                              <path
                                d="M1 11L11 1M11 1H4M11 1V8"
                                stroke="currentColor"
                                strokeWidth="1.2"
                              />
                            </svg>
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="border-t border-silver/5 pt-8">
                <button
                  onClick={onClose}
                  className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ghost transition-colors hover:text-neon"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-current transition-transform group-hover:-translate-x-1"
                  >
                    <path d="M10 14L4 8L10 2" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  Back to Projects
                </button>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
