export type Language = 'en' | 'tr';

export interface Translation {
  nav: {
    projects: string;
    expertise: string;
    about: string;
    contact: string;
  };
  hero: {
    badge: string;
    role: string;
    headline: string;
    headlineHighlight: string;
    subtext: string;
    viewProjects: string;
    downloadCV: string;
    copyEmail: string;
    copied: string;
  };
  projects: {
    flagshipEyebrow: string;
    flagshipTitle: string;
    supportingEyebrow: string;
    supportingTitle: string;
    title: string;
    subtitle: string;
    all: string;
    mobileAi: string;
    distributed: string;
    graphics3d: string;
    systemsOs: string;
    automation: string;
    viewDetails: string;
  };
  expertise: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    subtitle: string;
  };
  footer: {
    rights: string;
    location: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      projects: '01 PROJECTS',
      expertise: '02 EXPERTISE',
      about: '03 ABOUT',
      contact: 'CONTACT ME',
    },
    hero: {
      badge: 'AVAILABLE FOR SYSTEMS & FULL-STACK ROLES',
      role: 'SYSTEMS, FULL-STACK & AI ENGINEER',
      headline: 'Engineering high-reliability',
      headlineHighlight: 'mobile, distributed & 3D systems.',
      subtext:
        'Founder of KITech (kitech.info). Shipping offline-first Flutter + Supabase platforms, fail-closed Solana microservices, zero-dependency WebGL 2.0 engines, and hardware-pinned Linux distributions.',
      viewProjects: 'EXPLORE 7 SYSTEMS',
      downloadCV: 'DOWNLOAD RESUME',
      copyEmail: 'Copy Email Address',
      copied: 'Copied to Clipboard!',
    },
    projects: {
      flagshipEyebrow: '01_FLAGSHIP_CASE_STUDIES // PROBLEM → ARCHITECTURE → IMPACT',
      flagshipTitle: 'Flagship Engineering Systems (Top 4)',
      supportingEyebrow: '01B_MORE_ENGINEERING_WORK',
      supportingTitle: 'Supporting Pipelines & Simulators',
      title: 'ENGINEERED SYSTEMS [7]',
      subtitle:
        'Production-verified architectures across mobile + AI, distributed Web3 microservices, custom WebGL 2.0 engines, and Linux OS engineering.',
      all: 'ALL [7]',
      mobileAi: 'MOBILE & AI',
      distributed: 'DISTRIBUTED / FINTECH',
      graphics3d: '3D & WEBGL',
      systemsOs: 'SYSTEMS & OS',
      automation: 'AI AUTOMATION',
      viewDetails: 'Inspect System Spec',
    },
    expertise: {
      title: 'Core Engineering Disciplines',
      subtitle: 'Breadth and depth proven across 7 production systems.',
    },
    about: {
      title: 'I treat code like high-performance machinery.',
      subtitle:
        'Computer Engineering student & Founder of KITech (kitech.info). Bridging low-level Linux/WebGL systems with resilient cloud and mobile architectures.',
    },
    footer: {
      rights: 'ALL RIGHTS RESERVED.',
      location: 'ISTANBUL, TURKEY',
    },
  },
  tr: {
    nav: {
      projects: '01 PROJELER',
      expertise: '02 UZMANLIK',
      about: '03 HAKKIMDA',
      contact: 'İLETİŞİME GEÇ',
    },
    hero: {
      badge: 'SİSTEM VE FULL-STACK ROLLER İÇİN UYGUN',
      role: 'SİSTEM, FULL-STACK VE YAPAY ZEKA MÜHENDİSİ',
      headline: 'Yüksek güvenilirlikli',
      headlineHighlight: 'mobil, dağıtık ve 3D sistemler.',
      subtext:
        'KITech (kitech.info) kurucusu. Çevrimdışı öncelikli Flutter + Supabase platformları, fail-closed Solana mikroservisleri, sıfır bağımlılıklı WebGL 2.0 motorları ve donanıma özel Linux dağıtımları geliştiriyorum.',
      viewProjects: '7 SİSTEMİ İNCELE',
      downloadCV: 'ÖZGEÇMİŞİ İNDİR',
      copyEmail: 'E-posta Adresini Kopyala',
      copied: 'Panoya Kopyalandı!',
    },
    projects: {
      flagshipEyebrow: '01_AMİRAL_GEMİSİ_PROJELER // PROBLEM → MİMARİ → ETKİ',
      flagshipTitle: 'Öne Çıkan Mühendislik Sistemleri (İlk 4)',
      supportingEyebrow: '01B_DİĞER_MÜHENDİSLİK_ÇALIŞMALARI',
      supportingTitle: 'Destekleyici Boru Hatları ve Simülatörler',
      title: 'GELİŞTİRİLEN SİSTEMLER [7]',
      subtitle:
        'Mobil + AI, dağıtık Web3 mikroservisleri, özel WebGL 2.0 motorları ve Linux işletim sistemi mühendisliğinde üretim onaylı mimariler.',
      all: 'TÜMÜ [7]',
      mobileAi: 'MOBİL & AI',
      distributed: 'DAĞITIK / FINTECH',
      graphics3d: '3D & WEBGL',
      systemsOs: 'SİSTEM & OS',
      automation: 'AI OTOMASYON',
      viewDetails: 'Sistem Detayını Gör',
    },
    expertise: {
      title: 'Temel Mühendislik Disiplinleri',
      subtitle: '7 üretim sistemiyle kanıtlanmış genişlik ve derinlik.',
    },
    about: {
      title: 'Kodu yüksek performanslı bir makine gibi tasarlıyorum.',
      subtitle:
        'Bilgisayar Mühendisliği öğrencisi & KITech (kitech.info) kurucusu. Düşük seviyeli Linux/WebGL sistemlerini dayanıklı bulut ve mobil mimarilerle birleştiriyorum.',
    },
    footer: {
      rights: 'TÜM HAKLARI SAKLIDIR.',
      location: 'İSTANBUL, TÜRKİYE',
    },
  },
};
