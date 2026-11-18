import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Download,
  Github,
  Linkedin,
  Cpu,
  Globe,
  Database,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  Code,
  Smartphone,
  Mail,
  Activity,
  Check,
  ExternalLink,
} from 'lucide-react';

import { TabId, Project, DisciplineCategory } from './types';
import { projectsData, stackData, expertiseData } from './data';
import { translations, Language } from './translations';
import Terminal from './components/Terminal';
import ContactForm from './components/ContactForm';
import ProjectCard from './components/ProjectCard';
import ProjectDetailModal from './components/ProjectDetailModal';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<'all' | DisciplineCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [utcTime, setUtcTime] = useState('');
  const [istanbulTime, setIstanbulTime] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + ' UTC');
      setIstanbulTime(
        now.toLocaleTimeString('en-US', { timeZone: 'Europe/Istanbul', hour12: false })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleDownloadCV = () => {
    triggerToast('Downloading kian_rasti_cv.pdf...');
    const link = document.createElement('a');
    link.href = '/kian_rasti_cv.pdf';
    link.setAttribute('download', 'kian_rasti_cv.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kianrasti@gmail.com');
    setCopiedEmail(true);
    triggerToast('Secure email "kianrasti@gmail.com" copied to clipboard.');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const flagshipProjects = useMemo(() => projectsData.filter((p) => p.featured), []);
  const supportingProjects = useMemo(() => projectsData.filter((p) => !p.featured), []);

  const filteredProjects = useMemo(() => {
    if (projectFilter === 'all') return projectsData;
    return projectsData.filter((p) => p.discipline === projectFilter);
  }, [projectFilter]);

  return (
    <div className="min-h-screen bg-void-black text-text-primary relative overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container grid-bg">
      <div className="absolute inset-0 grain-overlay z-40 pointer-events-none" />

      {/* Header / Navigation bar */}
      <header className="sticky top-0 z-45 bg-void-black/85 backdrop-blur-md border-b border-text-muted/40 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <button
            onClick={() => {
              setActiveTab('home');
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2 font-mono text-sm tracking-wider font-semibold hover:text-primary transition-colors cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-primary-container" />
            kian.kitech.info
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 font-mono text-xs">
            <button
              onClick={() => {
                setActiveTab('projects');
                window.scrollTo(0, 0);
              }}
              className={`tracking-widest uppercase py-2 cursor-pointer transition-colors hover:text-primary ${
                activeTab === 'projects'
                  ? 'text-primary border-b border-primary'
                  : 'text-text-secondary'
              }`}
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => {
                if (activeTab !== 'home') {
                  setActiveTab('home');
                  setTimeout(() => {
                    document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="tracking-widest uppercase py-2 text-text-secondary hover:text-primary cursor-pointer"
            >
              {t.nav.expertise}
            </button>
            <button
              onClick={() => {
                if (activeTab !== 'home') {
                  setActiveTab('home');
                  setTimeout(() => {
                    document
                      .getElementById('about-section')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                } else {
                  document
                    .getElementById('about-section')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="tracking-widest uppercase py-2 text-text-secondary hover:text-primary cursor-pointer"
            >
              {t.nav.about}
            </button>
            <a
              href="https://kitech.info"
              target="_blank"
              rel="noreferrer"
              className="tracking-widest uppercase py-2 text-secondary-container hover:text-primary flex items-center gap-1"
            >
              KITECH.INFO <ExternalLink size={11} />
            </a>
          </nav>

          {/* Nav Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center bg-surface-dark border border-text-muted/30 rounded p-0.5 font-mono text-[11px]">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                  lang === 'en'
                    ? 'bg-primary-container text-on-primary-container font-bold'
                    : 'text-text-muted hover:text-text-secondary'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('tr')}
                className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                  lang === 'tr'
                    ? 'bg-primary-container text-on-primary-container font-bold'
                    : 'text-text-muted hover:text-text-secondary'
                }`}
              >
                TR
              </button>
            </div>

            <div className="flex flex-col items-end font-mono text-[10px] text-text-secondary pr-4 border-r border-text-muted/30">
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-status-success animate-ping" />
                IST: {istanbulTime || '00:00:00'}
              </span>
              <span className="text-text-muted text-[9px]">{utcTime || '00:00:00 UTC'}</span>
            </div>
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-4 py-2 border border-primary-container text-primary-container hover:bg-primary-container/10 rounded font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-2 active:scale-95 transition-all cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-status-success" />
              {t.nav.contact}
            </button>
          </div>

          {/* Mobile navigation button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-3 py-1.5 border border-primary-container text-primary-container rounded font-mono text-[10px] uppercase tracking-widest font-bold cursor-pointer"
            >
              CONNECT
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-text-secondary hover:text-text-primary cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-text-muted/40 bg-surface-high font-mono text-xs"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              <button
                onClick={() => {
                  setActiveTab('projects');
                  setIsMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="text-left py-2 text-text-secondary hover:text-primary tracking-wider uppercase"
              >
                01_PROJECTS [7]
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (activeTab !== 'home') {
                    setActiveTab('home');
                    setTimeout(() => {
                      document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
                    }, 200);
                  } else {
                    document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-left py-2 text-text-secondary hover:text-primary tracking-wider uppercase"
              >
                02_EXPERTISE
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (activeTab !== 'home') {
                    setActiveTab('home');
                    setTimeout(() => {
                      document
                        .getElementById('about-section')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }, 200);
                  } else {
                    document
                      .getElementById('about-section')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-left py-2 text-text-secondary hover:text-primary tracking-wider uppercase"
              >
                03_ABOUT
              </button>
              <a
                href="https://kitech.info"
                target="_blank"
                rel="noreferrer"
                className="text-left py-2 text-secondary-container hover:text-primary tracking-wider uppercase flex items-center gap-1.5"
              >
                KITECH.INFO <ExternalLink size={12} />
              </a>
              <div className="pt-4 border-t border-text-muted/20 flex justify-between items-center text-[10px] text-text-secondary">
                <span>ISTANBUL, TR</span>
                <span>IST: {istanbulTime || '00:00:00'}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <AnimatePresence mode="wait">
          {/* TAB 1: HOME */}
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-16 sm:space-y-24 md:space-y-28"
            >
              {/* HERO SECTION */}
              <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                  <div className="space-y-3">
                    <span className="font-mono text-[10px] text-primary-container tracking-[0.2em] uppercase font-bold bg-primary-container/10 px-3 py-1 rounded border border-primary-container/20 inline-block">
                      {t.hero.badge}
                    </span>
                    <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-text-primary">
                      {t.hero.headline}{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container font-extrabold">
                        {t.hero.headlineHighlight}
                      </span>
                    </h1>
                  </div>

                  <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
                    {t.hero.subtext}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      onClick={() => {
                        setActiveTab('projects');
                        window.scrollTo(0, 0);
                      }}
                      className="px-6 py-3.5 bg-primary-container text-on-primary-container font-mono text-xs uppercase tracking-widest font-bold rounded flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                    >
                      {t.hero.viewProjects} <ArrowRight size={14} />
                    </button>
                    <button
                      onClick={handleDownloadCV}
                      className="px-6 py-3.5 border border-text-muted text-text-primary hover:border-primary font-mono text-xs uppercase tracking-widest rounded flex items-center gap-2 active:scale-95 transition-all cursor-pointer"
                    >
                      <Download size={14} /> {t.hero.downloadCV}
                    </button>
                  </div>
                </div>

                {/* Interactive Terminal */}
                <div className="lg:col-span-5 h-full">
                  <Terminal
                    onTriggerContact={() => setIsContactOpen(true)}
                    onNavigateTab={(tab) => {
                      setActiveTab(tab);
                      window.scrollTo(0, 0);
                    }}
                    onInspectProject={(proj) => setSelectedProject(proj)}
                    onDownloadCV={handleDownloadCV}
                  />
                </div>
              </section>

              {/* METRIC BANNER & PORTRAIT ROW */}
              <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                <div className="md:col-span-5 technical-outline bg-surface-high border border-text-muted p-5 rounded-lg flex flex-col sm:flex-row gap-5 items-center">
                  <a
                    href="https://github.com/KianRasti"
                    target="_blank"
                    rel="noreferrer"
                    className="relative w-28 h-28 sm:w-32 sm:h-32 rounded overflow-hidden border border-text-muted/50 hover:border-primary/80 bg-void-black shrink-0 group/pfp transition-all duration-300 block"
                    title="View Kian Rasti on GitHub"
                  >
                    <div className="absolute inset-0 grain-overlay z-10" />
                    <img
                      src="/images/portrait.png"
                      alt="Kian Rasti"
                      className="w-full h-full object-cover object-top group-hover/pfp:scale-105 transition-transform duration-500 ease-out"
                    />
                  </a>
                  <div className="font-mono text-xs space-y-2 text-center sm:text-left">
                    <h3 className="text-sm font-bold text-text-primary tracking-wider uppercase">
                      Kian Rasti
                    </h3>
                    <p className="text-text-secondary flex items-center gap-1.5 justify-center sm:justify-start">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      Istanbul, Turkey
                    </p>
                    <div className="pt-2 border-t border-text-muted/20 grid grid-cols-2 gap-x-4 gap-y-1 text-[10px]">
                      <span className="text-text-muted">FOUNDER:</span>
                      <a
                        href="https://kitech.info"
                        target="_blank"
                        rel="noreferrer"
                        className="text-secondary-container hover:underline font-bold"
                      >
                        kitech.info
                      </a>
                      <span className="text-text-muted">STATUS:</span>
                      <span className="text-status-success uppercase font-bold">Open to Work</span>
                    </div>
                  </div>
                </div>

                {/* Live System Diagnostics */}
                <div className="md:col-span-7 technical-outline bg-surface-high border border-text-muted p-6 rounded-lg flex flex-col justify-between">
                  <div className="flex justify-between items-center border-b border-text-muted/30 pb-3 mb-4">
                    <span className="font-mono text-[10px] text-text-secondary tracking-widest uppercase flex items-center gap-2">
                      <Activity size={12} className="text-status-success" />
                      ENGINEERING_TELEMETRY_HOST
                    </span>
                    <span className="text-[9px] font-mono text-status-success">7 SYSTEMS // OK</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
                    <div>
                      <p className="text-text-muted text-[9px] uppercase tracking-wider">
                        AI Optimization
                      </p>
                      <p className="text-status-success font-medium mt-0.5">40–60% Token Cut</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-[9px] uppercase tracking-wider">
                        Microservices
                      </p>
                      <p className="text-text-primary font-medium mt-0.5">6 Nodes (&lt;$10/mo)</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-[9px] uppercase tracking-wider">
                        WebGL 2.0 Engine
                      </p>
                      <p className="text-text-primary font-medium mt-0.5">24k+ Blades @ 60Hz</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-[9px] uppercase tracking-wider">
                        Linux OS QA
                      </p>
                      <p className="text-text-primary font-medium mt-0.5">500+ Unit/E2E Tests</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-[9px] uppercase tracking-wider">
                        Edge Topology
                      </p>
                      <p className="text-text-primary font-medium mt-0.5">Cloudflare Workers</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-[9px] uppercase tracking-wider">
                        Play Store App
                      </p>
                      <p className="text-secondary-container font-medium mt-0.5">
                        FlexiTrack v2.0.0+44
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* TOP 4 FLAGSHIP PROJECTS (STAR FORMAT) */}
              <section id="projects" className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-primary-container tracking-widest uppercase font-semibold">
                      {t.projects.flagshipEyebrow}
                    </span>
                    <h2 className="font-sans font-bold text-2xl sm:text-3xl text-text-primary">
                      {t.projects.flagshipTitle}
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setActiveTab('projects');
                      window.scrollTo(0, 0);
                    }}
                    className="group flex items-center gap-2 font-mono text-xs text-primary-container hover:text-primary transition-colors py-2 cursor-pointer"
                  >
                    {t.projects.all}{' '}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {flagshipProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      lang={lang}
                      variant="flagship"
                      onOpenDetails={(p) => setSelectedProject(p)}
                    />
                  ))}
                </div>
              </section>

              {/* 3 SUPPORTING SYSTEMS ("MORE ENGINEERING WORK") */}
              <section className="space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-secondary-container tracking-widest uppercase font-semibold">
                    {t.projects.supportingEyebrow}
                  </span>
                  <h2 className="font-sans font-bold text-xl sm:text-2xl text-text-primary">
                    {t.projects.supportingTitle}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {supportingProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      lang={lang}
                      variant="supporting"
                      onOpenDetails={(p) => setSelectedProject(p)}
                    />
                  ))}
                </div>
              </section>

              {/* EXPERTISE SECTION */}
              <section id="expertise" className="space-y-8 scroll-mt-24">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-primary-container tracking-widest uppercase font-semibold">
                    02_ENGINEERING_DISCIPLINES
                  </span>
                  <h2 className="font-sans font-bold text-2xl sm:text-3xl text-text-primary">
                    {t.expertise.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {expertiseData.map((exp) => (
                    <div
                      key={exp.num}
                      className="technical-outline bg-surface-high border border-text-muted p-6 rounded-lg flex flex-col justify-between space-y-8 hover:border-primary transition-colors"
                    >
                      <span className="font-mono text-sm text-text-muted font-bold tracking-widest">
                        {exp.num}
                      </span>
                      <div className="space-y-2">
                        <h3 className="font-sans font-bold text-md text-text-primary uppercase tracking-wide">
                          {exp.title}
                        </h3>
                        <p className="font-sans text-xs text-text-secondary leading-relaxed">
                          {exp.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ABOUT SECTION */}
              <div
                id="about-section"
                className="space-y-16 pt-8 scroll-mt-24 border-t border-text-muted/30"
              >
                <div className="space-y-3">
                  <span className="font-mono text-xs text-primary-container tracking-widest uppercase font-semibold">
                    03_OPERATIONAL_BIO // ABOUT_KIAN
                  </span>
                  <h2 className="font-sans font-bold text-2xl sm:text-3xl text-text-primary">
                    {t.about.title}
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl">
                    {t.about.subtitle}
                  </p>
                </div>

                {/* Stack Registers */}
                <section className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-xs text-primary-container tracking-widest uppercase font-semibold">
                      DEVELOPMENT_STACK_REGISTERS
                    </h3>
                    <span className="font-mono text-[10px] text-text-muted">
                      FULL-STACK • DISTRIBUTED • 3D • OS
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stackData.map((cat) => (
                      <div
                        key={cat.title}
                        className="technical-outline bg-surface-high border border-text-muted p-5 rounded-lg space-y-4"
                      >
                        <div className="flex items-center gap-2 pb-2 border-b border-text-muted/20">
                          {cat.icon === 'code' && <Code size={16} className="text-primary" />}
                          {cat.icon === 'cloud_queue' && (
                            <Globe size={16} className="text-secondary" />
                          )}
                          {cat.icon === 'memory' && (
                            <Cpu size={16} className="text-primary-container" />
                          )}
                          <h4 className="font-sans font-bold text-sm text-text-primary uppercase tracking-wide">
                            {cat.title}
                          </h4>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {cat.items.map((item) => (
                            <span
                              key={item}
                              className="bg-void-black text-text-secondary border border-text-muted/30 px-3 py-1.5 rounded text-xs font-sans tracking-wide"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Experience Timeline */}
                <section className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-xs text-primary-container tracking-widest uppercase font-semibold">
                      EXPERIENCE_TIMELINE // BEYOND_THE_CODE
                    </h3>
                    <span className="font-mono text-[10px] text-text-muted">
                      SYNC_SEQUENCE_ACTIVE
                    </span>
                  </div>

                  <div className="relative border-l border-text-muted/40 pl-6 ml-3 space-y-10 py-2">
                    {/* Node 0: Founder @ KITech */}
                    <div className="relative group">
                      <div className="absolute -left-[31px] top-1 w-4.5 h-4.5 rounded-full bg-void-black border-2 border-status-success group-hover:bg-status-success transition-colors flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-status-success" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-sans font-bold text-base text-text-primary group-hover:text-status-success transition-colors uppercase">
                            Founder & Lead Systems Architect — KITech (kitech.info)
                          </h4>
                          <span className="font-mono text-xs text-status-success bg-status-success/10 border border-status-success/30 px-2.5 py-0.5 rounded uppercase font-bold">
                            2024 – Present
                          </span>
                        </div>
                        <p className="font-mono text-[11px] text-text-muted uppercase tracking-wider">
                          Custom AI Pipelines, Mobile Platforms, 3D WebGL & Distributed Systems
                        </p>
                        <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed max-w-4xl">
                          Architected and shipped 7 production-grade systems including FlexiTrack (Google Play v2.0.0+44), Project LEGION (6-microservice Solana anti-abuse engine), KITE OS (Arch/CachyOS universal runtime), AutoWebBuild Studio, AeroDrive 3D, KITECH STUDIO, and a zero-dependency WebGL 2.0 Game Engine—all deployed with automated GitHub CI/CD and Cloudflare Edge infrastructure.
                        </p>
                      </div>
                    </div>

                    {/* Node 1: E-Commerce */}
                    <div className="relative group">
                      <div className="absolute -left-[31px] top-1 w-4.5 h-4.5 rounded-full bg-void-black border-2 border-primary-container group-hover:bg-primary-container transition-colors flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-sans font-bold text-base text-text-primary group-hover:text-primary transition-colors uppercase">
                            Co-Founded E-Commerce Store & Subscription Manager
                          </h4>
                          <span className="font-mono text-xs text-primary bg-primary-container/10 border border-primary/20 px-2.5 py-0.5 rounded uppercase font-bold">
                            2021 – 2024
                          </span>
                        </div>
                        <p className="font-mono text-[11px] text-text-muted uppercase tracking-wider">
                          Co-Founder & Systems Architect
                        </p>
                        <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed max-w-4xl">
                          Conceived and scaled a high-volume digital storefront. Architected relational database tables to track transaction statuses, manage granular client access levels, and automate digital delivery streams.
                        </p>
                      </div>
                    </div>

                    {/* Node 2: English Instructor */}
                    <div className="relative group">
                      <div className="absolute -left-[31px] top-1 w-4.5 h-4.5 rounded-full bg-void-black border-2 border-secondary group-hover:bg-secondary transition-colors flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-sans font-bold text-base text-text-primary group-hover:text-secondary transition-colors uppercase">
                            Professional English Instructor
                          </h4>
                          <span className="font-mono text-xs text-secondary bg-secondary/10 border border-secondary/20 px-2.5 py-0.5 rounded uppercase font-bold">
                            2023 – Present
                          </span>
                        </div>
                        <p className="font-mono text-[11px] text-text-muted uppercase tracking-wider">
                          EnglishTime & İngilizce Kültür
                        </p>
                        <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed max-w-4xl">
                          Instructed and mentored hundreds of students face-to-face across premier national education platforms, honing crystal-clear technical communication, documentation, and collaborative mentorship.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Journey Matrix */}
                <section className="space-y-6">
                  <h3 className="font-mono text-xs text-primary-container tracking-widest uppercase font-semibold">
                    JOURNEY_SPECIFICATION_MATRIX
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                    <div className="technical-outline bg-surface-high border border-text-muted p-6 rounded-lg space-y-3">
                      <div className="flex items-center gap-2 text-primary-container">
                        <Cpu size={18} />
                        <h4 className="font-mono text-xs uppercase tracking-widest font-bold">
                          Hardware meets Linux & WebGL
                        </h4>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        B.S. in Computer Engineering @ Istanbul (Expected June 2027). Bridging low-level Intel Haswell Linux tuning and custom WebGL shaders with high-level product architecture.
                      </p>
                    </div>

                    <div className="technical-outline bg-surface-high border border-text-muted p-6 rounded-lg space-y-3">
                      <div className="flex items-center gap-2 text-secondary">
                        <Globe size={18} />
                        <h4 className="font-mono text-xs uppercase tracking-widest font-bold">
                          Cloudflare Edge & CI/CD
                        </h4>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        Operating global edge infrastructure on Cloudflare Workers, Pages, and zero-inbound-port Tunnels backed by automated GitHub CI/CD pipelines.
                      </p>
                    </div>

                    <div className="technical-outline bg-surface-high border border-text-muted p-6 rounded-lg space-y-3">
                      <div className="flex items-center gap-2 text-primary">
                        <Database size={18} />
                        <h4 className="font-mono text-xs uppercase tracking-widest font-bold">
                          Supabase & PostgreSQL 17
                        </h4>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        Multi-schema PostgreSQL architectures, Deno Edge Functions with server-enforced JWT/quota guards, and Redis Streams event fabrics.
                      </p>
                    </div>

                    <div className="technical-outline bg-surface-high border border-text-muted p-6 rounded-lg space-y-3">
                      <div className="flex items-center gap-2 text-status-success">
                        <Smartphone size={18} />
                        <h4 className="font-mono text-xs uppercase tracking-widest font-bold">
                          Offline-First Mobile & AI
                        </h4>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        Production Flutter + SQLite outbox sync engines paired with episodic-memory Gemini AI pipelines featuring 40%–60% token compaction.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* CTA OUTRO */}
              <section className="technical-outline bg-surface-high border border-text-muted rounded-xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-at-c from-primary-container/5 via-transparent to-transparent pointer-events-none" />
                <span className="font-mono text-xs text-primary-container tracking-widest uppercase">
                  03_COMMUNICATIONS_ONLINE
                </span>
                <h2 className="font-sans font-bold text-3xl sm:text-4xl text-text-primary max-w-xl mx-auto tracking-tight">
                  Always building, always shipping.
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="px-8 py-4 bg-primary-container text-on-primary-container font-mono text-xs uppercase tracking-widest font-bold rounded hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-primary-container/15"
                  >
                    GET IN TOUCH <ArrowRight size={14} />
                  </button>
                  <button
                    onClick={handleDownloadCV}
                    className="px-8 py-4 border border-text-muted text-text-primary hover:border-primary font-mono text-xs uppercase tracking-widest font-bold rounded inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Download size={14} /> {t.hero.downloadCV}
                  </button>
                </div>
              </section>
            </motion.div>
          )}

          {/* TAB 2: PROJECTS VIEW */}
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-text-muted/30">
                <div className="lg:col-span-8 space-y-4">
                  <span className="font-mono text-xs text-primary-container tracking-widest uppercase font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse" />
                    7 ENGINEERED PRODUCTION SYSTEMS
                  </span>
                  <h1 className="font-sans font-bold text-3xl sm:text-4xl text-text-primary">
                    {t.projects.title}
                  </h1>
                  <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
                    {t.projects.subtitle}
                  </p>
                </div>

                <div className="lg:col-span-4 technical-outline bg-void-black border border-text-muted p-4 rounded font-mono text-xs text-text-secondary">
                  <p className="text-text-muted mb-1">$ ls ./kitech-systems</p>
                  <p className="text-status-success">&gt; 4 Flagship STAR Case Studies</p>
                  <p className="text-secondary-container">&gt; 3 Supporting AI/3D Pipelines</p>
                  <p className="text-text-primary">&gt; Click any card for full spec</p>
                </div>
              </div>

              {/* Discipline Filters */}
              <div className="flex flex-wrap gap-2 pt-2 border-b border-text-muted/20 pb-4">
                {(
                  [
                    { key: 'all', label: t.projects.all },
                    { key: 'mobile-ai', label: t.projects.mobileAi },
                    { key: 'distributed', label: t.projects.distributed },
                    { key: 'graphics-3d', label: t.projects.graphics3d },
                    { key: 'systems-os', label: t.projects.systemsOs },
                    { key: 'automation', label: t.projects.automation },
                  ] as const
                ).map((filterItem) => (
                  <button
                    key={filterItem.key}
                    onClick={() => setProjectFilter(filterItem.key)}
                    className={`px-4 py-2 font-mono text-xs uppercase tracking-widest rounded border transition-all cursor-pointer ${
                      projectFilter === filterItem.key
                        ? 'bg-primary-container text-on-primary-container border-primary-container font-bold'
                        : 'bg-surface-high border-text-muted/40 text-text-secondary hover:border-primary'
                    }`}
                  >
                    [ {filterItem.label} ]
                  </button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => (
                    <motion.div
                      layout
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ProjectCard
                        project={project}
                        lang={lang}
                        variant="flagship"
                        onOpenDetails={(p) => setSelectedProject(p)}
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    layout
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setIsContactOpen(true)}
                    className="technical-outline bg-void-black border-2 border-dashed border-text-muted/60 hover:border-primary-container/80 rounded-lg p-6 flex flex-col justify-between text-center min-h-[360px] cursor-pointer group transition-all"
                  >
                    <div />
                    <div className="space-y-4 py-8">
                      <div className="w-12 h-12 rounded-full border border-dashed border-text-muted/80 group-hover:border-primary-container flex items-center justify-center mx-auto text-text-muted group-hover:text-primary-container transition-all">
                        <Sparkles size={20} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-mono text-xs uppercase tracking-wider text-text-primary group-hover:text-primary-container transition-colors">
                          YOUR NEXT SYSTEM GOES HERE
                        </h3>
                        <p className="font-sans text-xs text-text-secondary max-w-xs mx-auto leading-relaxed">
                          Looking for a systems, mobile, or full-stack engineer—or want KITech to build your product? Let&apos;s connect.
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-text-muted group-hover:text-primary transition-colors tracking-widest">
                      INITIATE_SESSION.EXE
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-text-muted/30 bg-void-black/80 py-8 relative mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-text-secondary">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-status-success" />
            <span>SYSTEMS_OPERATIONAL // 7/7 ONLINE</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-center text-text-muted text-[11px]">
            <a
              href="https://kitech.info"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              AGENCY: KITECH.INFO
            </a>
            <span>SILICON &amp; SCREEN</span>
            <span>© {new Date().getFullYear()} KIAN RASTI</span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <button
              onClick={handleCopyEmail}
              className="hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copiedEmail ? <Check size={12} className="text-status-success" /> : <Mail size={12} />}
              kianrasti@gmail.com
            </button>
            <a
              href="https://github.com/KianRasti"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Github size={12} /> github
            </a>
            <a
              href="https://www.linkedin.com/in/kian-rasti-a726771ba/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Linkedin size={12} /> linkedin
            </a>
          </div>
        </div>
      </footer>

      {/* Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-surface-high border border-primary-container/50 text-text-primary px-5 py-3.5 rounded shadow-2xl font-mono text-xs flex items-center gap-3 max-w-sm select-none"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse shrink-0" />
            <p className="flex-1 leading-relaxed">{toastMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Architecture & Spec Modal */}
      <ProjectDetailModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />

      {/* Inbound Communication Modal */}
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
