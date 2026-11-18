import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { ArrowUpRight, Cpu, Globe, Layers, Smartphone, Terminal as TerminalIcon, ExternalLink, Github } from 'lucide-react';
import { Language } from '../translations';

interface ProjectCardProps {
  key?: string | React.Key;
  project: Project;
  lang: Language;
  variant?: 'flagship' | 'supporting';
  onOpenDetails: (project: Project) => void;
}

export default function ProjectCard({
  project,
  lang,
  variant = project.featured ? 'flagship' : 'supporting',
  onOpenDetails,
}: ProjectCardProps) {
  const getDisciplineIcon = (discipline: string) => {
    switch (discipline) {
      case 'mobile-ai':
        return <Smartphone size={13} className="text-secondary-container" />;
      case 'distributed':
        return <Layers size={13} className="text-primary-container" />;
      case 'graphics-3d':
        return <Globe size={13} className="text-primary" />;
      case 'systems-os':
        return <Cpu size={13} className="text-status-success" />;
      default:
        return <TerminalIcon size={13} className="text-primary-container" />;
    }
  };

  const role = lang === 'tr' ? project.roleTr : project.role;
  const problem = lang === 'tr' ? project.problemTr : project.problem;
  const architecture = lang === 'tr' ? project.architectureTr : project.architecture;
  const impact = lang === 'tr' ? project.impactTr : project.impact;
  const isSvgLogo = project.imageUrl?.endsWith('.svg');

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={() => onOpenDetails(project)}
      className="technical-outline bg-surface-high rounded-lg overflow-hidden border border-text-muted hover:border-primary-container transition-all group flex flex-col justify-between h-full cursor-pointer"
    >
      <div>
        {/* Visual Header: Real Asset or Bespoke SVG Telemetry */}
        <div
          className={`relative ${
            variant === 'flagship' ? 'h-48' : 'h-36'
          } overflow-hidden border-b border-text-muted/40 bg-void-black`}
        >
          <div className="absolute inset-0 grain-overlay z-10" />

          {project.visualType === 'image' && project.imageUrl && !isSvgLogo ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
            />
          ) : (
            <div className="relative w-full h-full p-4 flex flex-col justify-between">
              <svg
                className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id={`pgrid-${project.id}`}
                    width="24"
                    height="24"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 24 0 L 0 0 0 24"
                      fill="none"
                      stroke={project.accentColor}
                      strokeWidth="0.5"
                      strokeOpacity="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#pgrid-${project.id})`} />
              </svg>

              <div className="h-5" />

              {isSvgLogo && project.imageUrl ? (
                <div className="relative z-10 flex items-center justify-center gap-4 my-auto">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-14 w-14 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="font-mono text-left">
                    <div className="text-[10px] text-text-secondary uppercase tracking-widest">
                      ARCH // X86_64_V3
                    </div>
                    <div className="text-base font-bold text-text-primary">{project.title}</div>
                    <div className="text-[10px] text-secondary-container">
                      {project.architectureFlow[0]}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative z-10 my-auto grid grid-cols-2 gap-1.5">
                  {project.architectureFlow.map((node, i) => (
                    <div
                      key={node}
                      className="bg-surface-medium/90 border border-text-muted/40 group-hover:border-text-muted/70 rounded px-2 py-1.5 font-mono text-[10px] text-text-primary flex items-center justify-between gap-1.5 transition-colors"
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span
                          className="font-bold shrink-0"
                          style={{ color: project.accentColor }}
                        >
                          0{i + 1}
                        </span>
                        <span className="truncate">{node}</span>
                      </div>
                      {i < project.architectureFlow.length - 1 && (
                        <span className="text-[9px] text-text-muted shrink-0">→</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Top Floating Badges */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-center gap-2 z-20">
            <span className="bg-void-black/85 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono font-medium tracking-wider flex items-center gap-1.5 border border-text-muted/40 uppercase text-text-primary truncate">
              {getDisciplineIcon(project.discipline)}
              {role}
            </span>

            <span className="bg-void-black/85 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono font-medium tracking-wider flex items-center gap-1.5 border border-text-muted/40 text-status-success shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-status-success" />
              {project.status}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-4">
          <div>
            <p className="font-mono text-[10px] text-primary-container tracking-widest uppercase font-semibold">
              {project.subtitle}
            </p>
            <h3 className="font-sans font-bold text-lg text-text-primary group-hover:text-primary transition-colors flex items-center justify-between gap-2 mt-1">
              <span>{project.title}</span>
              <ArrowUpRight
                size={16}
                className="text-text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
              />
            </h3>
          </div>

          {/* Quantified Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="bg-void-black border border-text-muted/30 rounded px-2.5 py-1.5"
              >
                <div className="font-mono text-[9px] text-text-muted uppercase tracking-wider truncate">
                  {m.label}
                </div>
                <div className="font-mono text-xs font-bold text-status-success truncate">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* STAR: Problem -> Architecture -> Impact */}
          {variant === 'flagship' ? (
            <div className="space-y-2.5 text-xs leading-relaxed">
              <div className="bg-void-black/70 border-l-2 border-text-muted pl-3 py-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted font-bold block">
                  {lang === 'tr' ? 'PROBLEM' : 'PROBLEM'}
                </span>
                <p className="text-text-secondary">{problem}</p>
              </div>
              <div className="bg-void-black/70 border-l-2 border-secondary-container pl-3 py-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-secondary-container font-bold block">
                  {lang === 'tr' ? 'MİMARİ' : 'ARCHITECTURE'}
                </span>
                <p className="text-text-secondary">{architecture}</p>
              </div>
              <div className="bg-void-black/70 border-l-2 border-status-success pl-3 py-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-status-success font-bold block">
                  {lang === 'tr' ? 'ETKİ' : 'IMPACT'}
                </span>
                <p className="text-text-primary font-medium">{impact}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-2 text-xs leading-relaxed">
              <p className="text-text-secondary">{architecture}</p>
              <p className="text-status-success/90 font-medium">{impact}</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer: Tech Tags + Actions */}
      <div className="px-5 pb-5 pt-3 border-t border-surface-medium space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-surface-medium text-text-secondary border border-text-muted/30 px-2 py-0.5 rounded text-[9px] font-mono font-medium tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-2 pt-1 font-mono text-[10px]">
          <span className="text-primary-container group-hover:underline uppercase tracking-wider font-semibold">
            {lang === 'tr' ? 'SİSTEM DETAYI →' : 'INSPECT SYSTEM SPEC →'}
          </span>
          <div className="flex items-center gap-2">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 px-2 py-1 rounded bg-void-black border border-text-muted/40 text-text-primary hover:border-primary"
              >
                <ExternalLink size={10} />
                LIVE
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 px-2 py-1 rounded bg-void-black border border-text-muted/40 text-text-primary hover:border-primary"
              >
                <Github size={10} />
                CODE
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
