import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Layers, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';
import { Language } from '../translations';

interface ProjectDetailModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, lang, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-void-black/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface-high border border-text-muted rounded-lg shadow-2xl text-text-primary z-10"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 bg-surface-medium/95 backdrop-blur-md border-b border-text-muted/40 px-6 py-4 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-primary-container uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-status-success" />
                  {lang === 'tr' ? project.roleTr : project.role} // {project.status}
                </div>
                <h2 className="font-sans font-bold text-xl sm:text-2xl text-text-primary mt-1">
                  {project.title}
                </h2>
                <p className="font-mono text-xs text-text-secondary">{project.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-text-muted hover:text-primary transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-void-black border border-text-muted/40 rounded p-3"
                  >
                    <div className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                      {m.label}
                    </div>
                    <div className="font-mono text-base font-bold text-status-success mt-0.5">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* STAR Breakdown */}
              <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <div className="bg-void-black border border-text-muted/30 rounded p-4">
                  <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-1">
                    01 // PROBLEM
                  </span>
                  <p className="text-text-secondary">
                    {lang === 'tr' ? project.problemTr : project.problem}
                  </p>
                </div>
                <div className="bg-void-black border border-secondary-container/30 rounded p-4">
                  <span className="font-mono text-[10px] text-secondary-container uppercase tracking-widest block mb-1">
                    02 // ARCHITECTURE & DECISIONS
                  </span>
                  <p className="text-text-secondary">
                    {lang === 'tr' ? project.architectureTr : project.architecture}
                  </p>
                </div>
                <div className="bg-void-black border border-status-success/30 rounded p-4">
                  <span className="font-mono text-[10px] text-status-success uppercase tracking-widest flex items-center gap-1.5 mb-1">
                    <CheckCircle2 size={12} /> 03 // MEASURABLE IMPACT
                  </span>
                  <p className="text-text-primary font-medium">
                    {lang === 'tr' ? project.impactTr : project.impact}
                  </p>
                </div>
              </div>

              {/* Architecture Pipeline */}
              <div className="space-y-2">
                <div className="font-mono text-[10px] text-primary-container uppercase tracking-widest flex items-center gap-1.5">
                  <Layers size={12} /> SYSTEM_EXECUTION_PIPELINE
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {project.architectureFlow.map((stage, idx) => (
                    <div
                      key={stage}
                      className="bg-void-black border border-text-muted/40 rounded p-2.5 font-mono text-[11px]"
                    >
                      <span className="text-primary-container font-bold block text-[9px]">
                        STAGE_0{idx + 1}
                      </span>
                      <span className="text-text-primary">{stage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Spec Table */}
              <div className="space-y-2">
                <div className="font-mono text-[10px] text-primary-container uppercase tracking-widest">
                  TECHNICAL_SPECIFICATIONS
                </div>
                <div className="border border-text-muted/40 rounded overflow-hidden divide-y divide-text-muted/30">
                  {project.techSpecs.map((spec) => (
                    <div
                      key={spec.layer}
                      className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-3 bg-void-black/60 text-xs"
                    >
                      <div className="font-mono text-primary font-semibold">{spec.layer}</div>
                      <div className="sm:col-span-2 text-text-secondary">{spec.details}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="border-t border-text-muted/40 bg-surface-medium px-6 py-4 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <div className="flex flex-wrap gap-2">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-primary-container text-on-primary-container font-bold rounded flex items-center gap-1.5 hover:brightness-110"
                  >
                    <ExternalLink size={13} />
                    {project.links.liveLabel || 'LIVE DEPLOYMENT'}
                  </a>
                )}
                {project.links.playStore && (
                  <a
                    href={project.links.playStore}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border border-status-success/50 text-status-success rounded flex items-center gap-1.5 hover:bg-status-success/10"
                  >
                    <ExternalLink size={13} />
                    GOOGLE PLAY
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border border-text-muted text-text-primary rounded flex items-center gap-1.5 hover:border-primary"
                  >
                    <Github size={13} />
                    GITHUB
                  </a>
                )}
              </div>

              {project.links.agencyUrl && (
                <a
                  href={project.links.agencyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-secondary hover:text-primary flex items-center gap-1"
                >
                  VIEW ON KITECH.INFO <ExternalLink size={12} />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
