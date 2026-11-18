export type TabId = 'home' | 'projects' | 'about';

export type DisciplineCategory =
  | 'mobile-ai'
  | 'distributed'
  | 'graphics-3d'
  | 'systems-os'
  | 'automation';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectTechSpec {
  layer: string;
  details: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  roleTr: string;
  featured: boolean;
  discipline: DisciplineCategory;
  status: string;
  problem: string;
  problemTr: string;
  architecture: string;
  architectureTr: string;
  impact: string;
  impactTr: string;
  metrics: ProjectMetric[];
  techSpecs: ProjectTechSpec[];
  architectureFlow: string[];
  tags: string[];
  visualType: 'image' | 'svg-telemetry';
  imageUrl?: string;
  accentColor: string;
  links: {
    live?: string;
    liveLabel?: string;
    playStore?: string;
    github?: string;
    agencyUrl?: string;
  };
}

export interface StackCategory {
  title: string;
  icon: string;
  items: string[];
}

export interface TerminalLine {
  text: string;
  type: 'command' | 'output' | 'error' | 'success';
}
