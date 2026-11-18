import React, { useState, useRef, useEffect } from 'react';
import { TerminalLine, Project } from '../types';
import { projectsData } from '../data';

interface TerminalProps {
  onTriggerContact: () => void;
  onNavigateTab: (tab: 'home' | 'projects' | 'about') => void;
  onInspectProject: (project: Project) => void;
  onDownloadCV: () => void;
}

export default function Terminal({
  onTriggerContact,
  onNavigateTab,
  onInspectProject,
  onDownloadCV,
}: TerminalProps) {
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: 'boot --profile kian --systems 7', type: 'command' },
    { text: 'flexitrack (mobile+ai)       live v2.0.0+44', type: 'success' },
    { text: 'legion (6-svc solana)        mainnet <$10/mo', type: 'success' },
    { text: 'webgl_engine (24k grass)     7 titles @ 60Hz', type: 'success' },
    { text: 'kite_os (arch/cachyos)       17/17 hw checks', type: 'success' },
    { text: '→ type "help" or "inspect flexitrack"', type: 'output' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { text: `${trimmed}`, type: 'command' as const }];

    if (trimmed === '') {
      setHistory(newHistory);
      return;
    }

    if (trimmed.startsWith('inspect ')) {
      const query = trimmed.replace('inspect ', '').trim();
      const match = projectsData.find(
        (p) => p.id.includes(query) || p.title.toLowerCase().includes(query)
      );
      if (match) {
        setHistory([
          ...newHistory,
          { text: `Opening system spec for ${match.title}...`, type: 'success' },
          { text: `  Role: ${match.role}`, type: 'output' },
          { text: `  Impact: ${match.impact}`, type: 'output' },
        ]);
        setTimeout(() => onInspectProject(match), 250);
      } else {
        setHistory([
          ...newHistory,
          {
            text: `Project "${query}" not found. Try: flexitrack, legion, engine, kite-os, autowebbuild, aerodrive, studio`,
            type: 'error',
          },
        ]);
      }
      return;
    }

    switch (trimmed) {
      case 'help':
        setHistory([
          ...newHistory,
          { text: 'Available commands:', type: 'output' },
          { text: '  projects         - List all 7 engineered systems', type: 'output' },
          { text: '  inspect <name>   - Open architecture modal (e.g. inspect legion)', type: 'output' },
          { text: '  metrics          - Print quantified engineering impact', type: 'output' },
          { text: '  skills           - Output multi-disciplinary tech stack', type: 'output' },
          { text: '  kitech           - Open KITech agency showcase (kitech.info)', type: 'output' },
          { text: '  cv               - Download kian_rasti_cv.pdf', type: 'output' },
          { text: '  contact          - Launch the contact form modal', type: 'output' },
          { text: '  clear            - Clear terminal output', type: 'output' },
        ]);
        break;

      case 'projects':
        setHistory([
          ...newHistory,
          { text: 'Flagship Systems (Top 4):', type: 'success' },
          { text: '  [1] flexitrack   - Flutter + SQLite v14 + Supabase + Gemini (40-60% token cut)', type: 'output' },
          { text: '  [2] legion       - 6 Node.js microservices + Redis + Solana (<$10/mo)', type: 'output' },
          { text: '  [3] engine       - Zero-dep WebGL 2.0 engine + 7 titles + 24k grass', type: 'output' },
          { text: '  [4] kite-os      - Arch/CachyOS + Hyprland + 500+ E2E tests', type: 'output' },
          { text: 'Supporting Systems:', type: 'success' },
          { text: '  [5] autowebbuild | [6] aerodrive | [7] studio', type: 'output' },
        ]);
        break;

      case 'metrics':
        setHistory([
          ...newHistory,
          { text: '// Quantified Production Metrics', type: 'success' },
          { text: '  FlexiTrack:    40-60% AI token compaction | v2.0.0+44 on Play Store', type: 'output' },
          { text: '  Project LEGION: <$10/mo infra | $0 SaaS tax | 6 microservices', type: 'output' },
          { text: '  WebGL Engine:  24,000+ instanced grass blades @ 60Hz | 14-step QA', type: 'output' },
          { text: '  KITE OS:       17/17 HW invariant checks | 500+ unit & E2E tests', type: 'output' },
          { text: '  AutoWebBuild:  ~8,400+ LOC | 7-stage autonomous B2B pipeline', type: 'output' },
        ]);
        break;

      case 'skills':
        setHistory([
          ...newHistory,
          { text: 'Languages:  TypeScript, Python 3.12, Dart 3.11, SQL, GLSL, C++', type: 'output' },
          { text: 'Cloud/AI:   Supabase PG17, Node.js, Redis Streams, FastAPI, Gemini', type: 'output' },
          { text: '3D & OS:    WebGL 2.0, Three.js, Remotion, Arch/CachyOS, Hyprland', type: 'output' },
        ]);
        break;

      case 'kitech':
        setHistory([
          ...newHistory,
          { text: 'KITech Studio -> https://kitech.info', type: 'success' },
          { text: 'Opening agency showcase in new tab...', type: 'output' },
        ]);
        window.open('https://kitech.info', '_blank', 'noopener,noreferrer');
        break;

      case 'cv':
        setHistory([
          ...newHistory,
          { text: 'Downloading kian_rasti_cv.pdf...', type: 'success' },
        ]);
        onDownloadCV();
        break;

      case 'contact':
        setHistory([
          ...newHistory,
          { text: 'Opening inbound communications console...', type: 'success' },
        ]);
        setTimeout(() => onTriggerContact(), 350);
        break;

      case 'goto projects':
        setHistory([...newHistory, { text: 'Navigating to 01_PROJECTS...', type: 'success' }]);
        setTimeout(() => onNavigateTab('projects'), 250);
        break;

      case 'goto about':
        setHistory([...newHistory, { text: 'Navigating to 03_ABOUT...', type: 'success' }]);
        setTimeout(() => onNavigateTab('about'), 250);
        break;

      case 'clear':
        setHistory([]);
        break;

      default:
        setHistory([
          ...newHistory,
          { text: `sh: command not found: ${trimmed}. Type "help" for modules.`, type: 'error' },
        ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputValue);
      setInputValue('');
    }
  };

  return (
    <div
      className="technical-outline bg-void-black p-5 rounded-lg shadow-2xl relative overflow-hidden font-mono text-sm border border-text-muted hover:border-primary transition-colors duration-300 cursor-text min-h-[290px] flex flex-col justify-between"
      onClick={handleTerminalClick}
    >
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
          <span className="text-[10px] text-text-muted select-none tracking-widest uppercase font-mono">
            KIAN_CONSOLE_V2.0
          </span>
        </div>

        <div className="space-y-1.5 overflow-y-auto max-h-[220px] scrollbar-thin">
          {history.map((line, idx) => (
            <div key={idx} className="leading-relaxed text-xs sm:text-[13px]">
              {line.type === 'command' ? (
                <p>
                  <span className="text-primary mr-2">$</span>
                  <span className="text-text-primary">{line.text}</span>
                </p>
              ) : line.type === 'error' ? (
                <p className="text-red-400 font-medium">{line.text}</p>
              ) : line.type === 'success' ? (
                <p className="text-status-success">{line.text}</p>
              ) : (
                <p className="text-text-secondary">{line.text}</p>
              )}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>
      </div>

      <div className="flex items-center mt-3 pt-2 border-t border-surface-medium">
        <span className="text-primary mr-2 select-none">$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type 'help' or 'inspect legion'..."
          className="flex-1 bg-transparent text-text-primary border-none outline-none focus:ring-0 p-0 m-0 font-mono text-sm placeholder:text-text-muted/60"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
        <span className="terminal-cursor" />
      </div>
    </div>
  );
}
