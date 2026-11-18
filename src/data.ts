import { Project, StackCategory } from './types';

export const projectsData: Project[] = [
  // ==================== TOP 4 FLAGSHIP PROJECTS ====================
  {
    id: 'flexitrack',
    title: 'FlexiTrack',
    subtitle: 'Offline-First Mobile + Cloud + AI Platform',
    role: 'Full-Stack & Mobile Engineer',
    roleTr: 'Full-Stack & Mobil Mühendis',
    featured: true,
    discipline: 'mobile-ai',
    status: 'Live on Google Play (v2.0.0+44)',
    problem:
      'Fitness and habit apps either lock users into rigid, one-size-fits-all templates or fail completely when offline.',
    problemTr:
      'Fitness ve alışkanlık uygulamaları kullanıcıları ya katı şablonlara hapseder ya da çevrimdışıyken tamamen çalışmayı durdurur.',
    architecture:
      'Built a Flutter (Dart 3.11) client backed by a self-healing SQLite (v14) outbox sync engine (SyncEngine) paired with Supabase PostgreSQL 17, Deno v2 Edge Functions, Gemini Flash/Flash-Lite episodic memory AI, and RevenueCat webhooks.',
    architectureTr:
      'Kendi kendini onaran SQLite (v14) outbox senkronizasyon motoru (SyncEngine) ile desteklenen Flutter istemcisi, Supabase PostgreSQL 17, Deno v2 Edge Functions, Gemini AI ve RevenueCat webhook mimarisi kuruldu.',
    impact:
      'Shipped to Google Play (com.kitech.flexitrack, v2.0.0+44); engineered server-enforced JWT/quota guards and XML prompt compaction that cut AI input tokens by 40%–60%.',
    impactTr:
      'Google Play’de yayında (v2.0.0+44); sunucu taraflı JWT/kota korumaları ve AI giriş token’larını %40–%60 azaltan XML prompt sıkıştırma sistemi geliştirildi.',
    metrics: [
      { label: 'Token Compaction', value: '40%–60%' },
      { label: 'Release', value: 'v2.0.0+44' },
      { label: 'Local DB', value: 'SQLite v14' },
    ],
    techSpecs: [
      { layer: 'Client', details: 'Flutter (Dart 3.11), Provider, self-healing SQLite v14 SyncEngine' },
      { layer: 'Backend', details: 'Supabase PostgreSQL 17, Deno v2 Edge Functions, Google OAuth' },
      { layer: 'AI & Monetization', details: 'Gemini 3.8 Flash / 3.1 Flash-Lite, RevenueCat, AdMob' },
      { layer: 'Web & CI', details: 'Cloudflare Pages (flexitrack.kitech.info), Codemagic iOS CI' },
    ],
    architectureFlow: [
      'Flutter + SQLite v14 Outbox',
      'SyncEngine Delta Queue',
      'Deno Edge JWT & Quota Guard',
      'Gemini AI + RevenueCat Sync',
    ],
    tags: ['FLUTTER', 'SQLITE V14', 'SUPABASE PG17', 'DENO EDGE', 'GEMINI AI', 'REVENUECAT'],
    visualType: 'image',
    imageUrl: '/images/projects/flexitrack-feature.png',
    accentColor: '#00eefc',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.kitech.flexitrack&hl=en',
      live: 'https://flexitrack.kitech.info',
      liveLabel: 'flexitrack.kitech.info',
      github: 'https://github.com/KianRasti/FlexiTrack',
      agencyUrl: 'https://kitech.info/work',
    },
  },
  {
    id: 'project-legion',
    title: 'Project LEGION',
    subtitle: 'Distributed Solana Microservices & Anti-Abuse Engine',
    role: 'Backend / Systems Engineer',
    roleTr: 'Backend / Sistem Mühendisi',
    featured: true,
    discipline: 'distributed',
    status: 'Production Mainnet-Beta',
    problem:
      'Crypto raid bots and affiliate programs suffer from wash trading, Sybil farming, token-dumping affiliates, and expensive SaaS/RPC dependencies.',
    problemTr:
      'Kripto raid botları ve ortaklık sistemleri sahte hacim, Sybil saldırıları, anlık token satışı ve yüksek SaaS/RPC maliyetlerinden muzdariptir.',
    architecture:
      'Architected a 6-service Node.js 20 monorepo communicating over Redis Streams (BullMQ fabric) and 5-schema PostgreSQL 16, featuring Sybil/funder DFS, a 4h balance monitor, a fail-closed treasury circuit breaker, and zero-inbound-port Cloudflare Tunnel ingress.',
    architectureTr:
      'Redis Streams (BullMQ) ve 5 şemalı PostgreSQL 16 üzerinde haberleşen 6 servisli Node.js 20 monorepo; Sybil DFS, 4 saatlik bakiye izleyici, fail-closed hazine devre kesici ve sıfır açık portlu Cloudflare Tunnel ile tasarlandı.',
    impact:
      'Achieved $0 SaaS tax and <$10/mo production hosting with strict tx_signature idempotency, automated E2E/bot/admin test suites, and 7-day retention-vested SOL payouts.',
    impactTr:
      'Sıkı tx_signature idempotency, otomatik E2E test paketleri ve 7 günlük tutma şartlı SOL ödemeleriyle $0 SaaS vergisi ve <$10/ay üretim altyapısı sağlandı.',
    metrics: [
      { label: 'Infra Cost', value: '<$10/mo' },
      { label: 'Services', value: '6 Nodes' },
      { label: 'SOL Vesting', value: '7-Day Lock' },
    ],
    techSpecs: [
      { layer: 'Microservices', details: 'Node.js 20+ monorepo, 6 independent services, BullMQ / Redis Streams' },
      { layer: 'Database', details: 'PostgreSQL 16 with 5 isolated schemas + strict tx_signature idempotency' },
      { layer: 'Blockchain & Sec', details: 'Solana Mainnet-Beta, fail-closed treasury circuit breaker, Cloudflare Tunnel' },
      { layer: 'Anti-Abuse & AI', details: 'Sybil/funder DFS graph check, 4h balance monitor, Gemini commentary' },
    ],
    architectureFlow: [
      'Telegram Gateway + Zero-Port Tunnel',
      'Redis Streams (BullMQ)',
      'Sybil DFS + 4h Balance Check',
      'Fail-Closed SOL Treasury',
    ],
    tags: ['NODE.JS 20', 'REDIS STREAMS', 'POSTGRESQL 16', 'SOLANA', 'CLOUDFLARE TUNNEL'],
    visualType: 'svg-telemetry',
    accentColor: '#ff5c00',
    links: {
      live: 'https://legion.kitech.info',
      liveLabel: 'legion.kitech.info',
      agencyUrl: 'https://kitech.info/work',
    },
  },
  {
    id: 'kitech-game-engine',
    title: 'KITECH WebGL Game Engine & The Last Autumn',
    subtitle: 'Zero-Dependency 2D/3D WebGL Engine & 7 Playable Titles',
    role: 'Graphics / Frontend Systems Engineer',
    roleTr: 'Grafik / Frontend Sistem Mühendisi',
    featured: true,
    discipline: 'graphics-3d',
    status: '7 Playable Titles',
    problem:
      'Browser games often rely on heavy third-party engines that bloat bundle sizes, cause GC stutter, and struggle with complex skeletal/foliage rendering.',
    problemTr:
      'Tarayıcı oyunları genellikle paket boyutunu şişiren, GC takılmalarına yol açan ve karmaşık iskelet/bitki örtüsü çiziminde zorlanan ağır motorlara bağımlıdır.',
    architecture:
      'Built a zero-dependency @kitech/shared-engine (60Hz fixed-timestep GameLoop, object-pooled ParticleSystem, AudioSynth) and a custom WebGL 2.0 pipeline with 65-joint Mixamo .glb skeletal retargeting, TwoBoneIKSolver, 2048 shadow maps, and GPU-instanced foliage.',
    architectureTr:
      'Sıfır bağımlılıklı @kitech/shared-engine (60Hz sabit adımlı GameLoop, sıfır-GC parçacık havuzu) ve 65 eklemli Mixamo .glb iskelet, TwoBoneIKSolver, 2048 gölge haritası ve GPU-instanced bitki örtüsü içeren özel WebGL 2.0 boru hattı geliştirildi.',
    impact:
      'Powers 7 playable web games, including a 360m×360m 4-region 3D campaign (The Last Autumn) with 24,000+ instanced grass blades at 60Hz and a 14-step headless Playwright WebGL QA suite.',
    impactTr:
      '24.000+ GPU-instanced çim yaprağı içeren 360m×360m 4 bölgeli 3D hikaye modu dahil 7 oynanabilir oyun ve 14 adımlı headless Playwright WebGL test paketi ile doğrulandı.',
    metrics: [
      { label: 'Instanced Grass', value: '24,000+' },
      { label: 'Playable Titles', value: '7 Games' },
      { label: 'WebGL QA', value: '14-Step CI' },
    ],
    techSpecs: [
      { layer: 'Core Engine', details: '@kitech/shared-engine (60Hz GameLoop, zero-GC pool, AudioSynth, InputManager)' },
      { layer: '3D WebGL 2.0', details: 'Custom GLSL shaders, 2048 shadow maps, 65-joint glTF/GLB skinning, TwoBoneIKSolver' },
      { layer: 'Tooling & QA', details: 'Blender 5.2.3 MCP, local Ollama worker, 14-step Playwright WebGL verifier' },
    ],
    architectureFlow: [
      '60Hz Fixed-Timestep Loop',
      'Zero-GC Pool + 65-Joint IK',
      'WebGL 2.0 Instanced Shaders',
      '14-Step Playwright WebGL QA',
    ],
    tags: ['WEBGL 2.0', 'GLSL', 'GLTF 65-JOINT IK', 'ZERO-GC ENGINE', 'PLAYWRIGHT QA'],
    visualType: 'image',
    imageUrl: '/images/projects/game-engine-render.png',
    accentColor: '#ff5c00',
    links: {
      agencyUrl: 'https://kitech.info/work',
    },
  },
  {
    id: 'kite-os',
    title: 'KITE OS',
    subtitle: 'Hardware-Pinned Linux OS & Universal App Runtime',
    role: 'Systems / DevOps Engineer',
    roleTr: 'Sistem / DevOps Mühendisi',
    featured: true,
    discipline: 'systems-os',
    status: '17/17 HW Checks • 500+ Tests',
    problem:
      'Legacy Intel Haswell laptops struggle with modern compositor effects, dynamic RAM/power constraints, and cross-platform Windows/Android/macOS app compatibility.',
    problemTr:
      'Eski Intel Haswell dizüstü bilgisayarlar modern kompozitör efektleri, dinamik RAM/güç sınırları ve çoklu platform uygulama uyumluluğu konusunda yetersiz kalır.',
    architecture:
      'Engineered an Arch/CachyOS x86-64-v3 distribution with boot-time RAM/battery scaling (4G/8G/16G SKUs), Hyprland + Quickshell (Qt6/QML) Glass UI, a unified kite-bridge runtime (Wine/Proton-GE + DXVK 1.10.3, Waydroid, OSX-KVM), and socket-activated SQLite FTS5 local AI search.',
    architectureTr:
      'Açılışta RAM/pil ölçeklendirmeli (4G/8G/16G) Arch/CachyOS x86-64-v3 dağıtımı, Hyprland + Quickshell (Qt6/QML) Glass UI, birleşik kite-bridge (Wine/DXVK, Waydroid, OSX-KVM) ve SQLite FTS5 yerel AI araması geliştirildi.',
    impact:
      'Verified with 17/17 static hardware invariant checks and 500+ automated unit and Playwright E2E tests across 6 subsystems.',
    impactTr:
      '17/17 statik donanım değişmez kontrolü ve 6 alt sistem genelinde 500+ otomatik birim ve Playwright E2E testi ile doğrulandı.',
    metrics: [
      { label: 'Automated Tests', value: '500+ E2E' },
      { label: 'HW Invariants', value: '17 / 17' },
      { label: 'Memory SKUs', value: '4G/8G/16G' },
    ],
    techSpecs: [
      { layer: 'OS & Kernel', details: 'Arch/CachyOS x86-64-v3, linux-cachyos (/dev/ntsync, binder_linux, zram), Btrfs zstd' },
      { layer: 'UI Shell', details: 'Hyprland + Quickshell (Qt6/QML) + Calamares Glass installer' },
      { layer: 'Universal Runtime', details: 'Wine/Proton-GE + DXVK 1.10.3, Waydroid, Darling / OSX-KVM' },
      { layer: 'Local AI', details: 'Socket-activated SQLite FTS5 + SimHash/TF-IDF (kite-ai)' },
    ],
    architectureFlow: [
      'linux-cachyos + zram / ntsync',
      'Hyprland + Quickshell Qt6 UI',
      'kite-bridge (Wine/Android/KVM)',
      'SQLite FTS5 Local AI Daemon',
    ],
    tags: ['ARCH / CACHYOS', 'HYPRLAND', 'QT6 / QML', 'PROTON-GE / DXVK', 'SQLITE FTS5'],
    visualType: 'image',
    imageUrl: '/images/projects/kite-os-logo.svg',
    accentColor: '#00eefc',
    links: {
      github: 'https://github.com/KianRasti/KITE_OS_by_KITECH',
      agencyUrl: 'https://kitech.info/work',
    },
  },

  // ==================== 3 SUPPORTING ENGINEERING SYSTEMS ====================
  {
    id: 'autowebbuild',
    title: 'AutoWebBuild Studio',
    subtitle: 'Autonomous AI Lead-Gen & Website Factory',
    role: 'AI & Backend Pipeline Engineer',
    roleTr: 'AI & Backend Pipeline Mühendisi',
    featured: false,
    discipline: 'automation',
    status: '8,400+ LOC • 7-Stage Pipeline',
    problem:
      'Local SMB prospecting, custom multilingual website prototyping, and WhatsApp outreach require heavy manual agency labor.',
    problemTr:
      'Yerel işletme keşfi, çok dilli web sitesi prototipleme ve WhatsApp üzerinden müşteri erişimi yüksek manuel ajans emeği gerektirir.',
    architecture:
      'Python 3.12 + FastAPI SSE engine orchestrating Google Places discovery, Gemini/OpenRouter generation, Astro + Tailwind compilation, Cloudflare deployment, and a Node.js 20 Baileys WhatsApp microservice.',
    architectureTr:
      'Google Places keşfi, Gemini/OpenRouter üretimi, Astro + Tailwind derlemesi, Cloudflare yayını ve Node.js 20 Baileys WhatsApp mikroservisini yöneten Python 3.12 + FastAPI SSE motoru.',
    impact:
      '~8,400+ lines of modular pipeline code automating a 7-stage B2B workflow with built-in CRM tracker and Prompt Studio GUI.',
    impactTr:
      'Dahili CRM takipçisi ve Prompt Studio arayüzü ile 7 aşamalı B2B iş akışını otomatikleştiren ~8.400+ satır modüler kod.',
    metrics: [
      { label: 'Codebase', value: '~8,400+ LOC' },
      { label: 'Workflow', value: '7 Stages' },
    ],
    techSpecs: [
      { layer: 'Core Engine', details: 'Python 3.12, FastAPI, SSE streaming, agy CLI + Stitch MCP' },
      { layer: 'AI & Outreach', details: 'Google Places, Gemini/OpenRouter, Node.js 20 Baileys WhatsApp, Astro' },
    ],
    architectureFlow: [
      'Google Places + Nominatim',
      'FastAPI SSE + Gemini AI',
      'Astro + Tailwind Build',
      'Cloudflare + Baileys Outreach',
    ],
    tags: ['PYTHON 3.12', 'FASTAPI SSE', 'ASTRO', 'BAILEYS WHATSAPP', 'CLOUDFLARE'],
    visualType: 'svg-telemetry',
    accentColor: '#00ff41',
    links: {
      live: 'https://showroom.kitech.info',
      liveLabel: 'showroom.kitech.info',
      agencyUrl: 'https://kitech.info/work',
    },
  },
  {
    id: 'aerodrive-3d',
    title: 'AeroDrive 3D',
    subtitle: 'Photogrammetry & Procedural 3D Driving Simulator',
    role: '3D Graphics & Edge Engineer',
    roleTr: '3D Grafik & Edge Mühendisi',
    featured: false,
    discipline: 'graphics-3d',
    status: 'Live • 3dcar.kitech.info',
    problem:
      'Streaming real-world Google 3D Tiles and procedural OSM cities in-browser with responsive arcade driving physics is bandwidth- and compute-heavy.',
    problemTr:
      'Gerçek dünya Google 3D Tiles ve prosedürel OSM şehirlerini akıcı sürüş fiziğiyle tarayıcıda çalıştırmak yüksek bant genişliği ve işlem gücü gerektirir.',
    architecture:
      'TypeScript + Three.js (0.185) + 3d-tiles-renderer + three-mesh-bvh with custom Ackermann steering/drift FSM, 5-point ground clamping, Web Audio synth, and Cloudflare Workers edge proxy.',
    architectureTr:
      'TypeScript + Three.js + three-mesh-bvh ile özel Ackermann direksiyon/drift FSM, 5 noktalı zemin sabitleme, Web Audio sentezleyici ve Cloudflare Workers edge proxy.',
    impact:
      '6 camera modes with custom GLSL tilt-shift bokeh, 360° city sector caching, Gemini + Meshy v2 Text-to-3D landmark hot-swap across 4 global cities.',
    impactTr:
      'Özel GLSL tilt-shift bokeh efektli 6 kamera modu, 360° sektör önbellekleme ve 4 küresel şehirde Gemini + Meshy v2 3D yer işareti değişimi.',
    metrics: [
      { label: 'Camera Modes', value: '6 + GLSL' },
      { label: 'Caching', value: '360° Sector' },
    ],
    techSpecs: [
      { layer: 'Engine', details: 'TypeScript, Vite, Three.js 0.185, 3d-tiles-renderer, three-mesh-bvh' },
      { layer: 'Edge & AI', details: 'Cloudflare Workers, Gemini 2.5 Flash + Meshy v2 3D, Overpass OSM' },
    ],
    architectureFlow: [
      'Google 3D Tiles + OSM API',
      'three-mesh-bvh Collision',
      'Ackermann Drift + 5-Pt Clamp',
      'GLSL Bokeh + Web Audio',
    ],
    tags: ['TYPESCRIPT', 'THREE.JS', '3D TILES', 'GLSL', 'CLOUDFLARE WORKERS'],
    visualType: 'svg-telemetry',
    accentColor: '#00eefc',
    links: {
      live: 'https://3dcar.kitech.info',
      liveLabel: '3dcar.kitech.info',
      github: 'https://github.com/KianRasti/3d_car_driving',
      agencyUrl: 'https://kitech.info/work',
    },
  },
  {
    id: 'kitech-studio',
    title: 'KITECH STUDIO',
    subtitle: '"Animation as Code" Multi-Studio Video Pipeline',
    role: 'Creative Systems & Pipeline Engineer',
    roleTr: 'Yaratıcı Sistemler & Pipeline Mühendisi',
    featured: false,
    discipline: 'automation',
    status: '7 Studios • 30+ Episodes',
    problem:
      'Manual timeline editing in traditional NLEs bottlenecks high-frequency educational, drama, and 3D explainer video production.',
    problemTr:
      'Geleneksel video kurgu yazılımlarında manuel zaman çizelgesi düzenlemesi yüksek hacimli eğitici ve 3D açıklayıcı video üretimini yavaşlatır.',
    architecture:
      'CLI-driven Remotion 4.0 + React 19 + Three.js/R3F + SVG pipeline paired with local Kokoro-82M TTS, faster-whisper word-level alignment, Blender 5.2.3 MCP, and FFmpeg EBU R128 mastering.',
    architectureTr:
      'Yerel Kokoro-82M TTS, faster-whisper kelime hizalama, Blender 5.2.3 MCP ve FFmpeg EBU R128 mastering ile entegre Remotion 4.0 + React 19 + Three.js/SVG boru hattı.',
    impact:
      'Powers 7 production studios and 30+ registered episodes with a 30-point automated compliance auditor and -14.0 LUFS broadcast mastering.',
    impactTr:
      '30 maddelik otomatik stüdyo uyumluluk denetçisi ve -14.0 LUFS ses mastering ile 7 üretim stüdyosu ve 30+ bölümü güçlendirir.',
    metrics: [
      { label: 'Studios', value: '7 Active' },
      { label: 'Episodes', value: '30+ Mastered' },
    ],
    techSpecs: [
      { layer: 'Renderers', details: 'Remotion 4.0, React 19, TypeScript, Three.js / R3F, pure SVG' },
      { layer: 'Audio & 3D', details: 'Kokoro-82M TTS, faster-whisper, Blender 5.2.3 MCP, FFmpeg -14.0 LUFS' },
    ],
    architectureFlow: [
      'Script + Character Passport',
      'Kokoro-82M + Whisper Sync',
      'Remotion + R3F / SVG Render',
      'FFmpeg -14.0 LUFS Master',
    ],
    tags: ['REMOTION 4.0', 'REACT 19', 'THREE.JS / R3F', 'KOKORO-82M', 'BLENDER MCP'],
    visualType: 'svg-telemetry',
    accentColor: '#ff5c00',
    links: {
      agencyUrl: 'https://kitech.info/work',
    },
  },
];

export const stackData: StackCategory[] = [
  {
    title: 'Languages & Runtimes',
    icon: 'code',
    items: ['TypeScript / JS (ES6+)', 'Python 3.12', 'Dart 3.11 (Flutter)', 'SQL / PLpgSQL', 'GLSL / C++', 'Bash / QML'],
  },
  {
    title: 'Cloud, Distributed & AI',
    icon: 'cloud_queue',
    items: ['Supabase (PG 17 + Deno Edge)', 'Node.js 20 + Redis Streams', 'FastAPI + SSE', 'Cloudflare Workers & Tunnels', 'Gemini / OpenRouter / Whisper', 'Solana Web3 & RevenueCat'],
  },
  {
    title: '3D Graphics, OS & Hardware',
    icon: 'memory',
    items: ['WebGL 2.0 & Three.js', 'Remotion 4.0 + Blender MCP', 'Arch/CachyOS & Hyprland', 'Wine/DXVK & Waydroid', 'Playwright E2E / WebGL QA', 'Custom PC & Embedded Audio'],
  },
];

export const expertiseData = [
  {
    num: '01',
    title: 'Mobile + Cloud + AI',
    desc: 'Offline-first Flutter apps with self-healing SQLite sync engines, Supabase Edge JWT guards, and token-compacted AI co-pilots.',
  },
  {
    num: '02',
    title: 'Distributed & FinTech',
    desc: 'Fail-closed Node.js microservices over Redis Streams & PostgreSQL with strict idempotency, Sybil DFS, and <$10/mo edge hosting.',
  },
  {
    num: '03',
    title: '3D WebGL & Engines',
    desc: 'Zero-dependency 60Hz game loops, 65-joint glTF IK retargeting, GPU-instanced foliage, Google 3D Tiles, and custom GLSL shaders.',
  },
  {
    num: '04',
    title: 'Linux OS & Pipelines',
    desc: 'Hardware-pinned Arch/CachyOS distributions, universal app runtimes, and deterministic Remotion + TTS "Animation as Code" pipelines.',
  },
];
