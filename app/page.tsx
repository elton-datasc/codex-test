'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDownToLine,
  Github,
  Globe,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import { AnimatedContainer } from '@/components/AnimatedContainer';
import { Section } from '@/components/Section';
import { Tag } from '@/components/Tag';
import { ThemeToggle } from '@/components/ThemeToggle';
import { localizedContent, type Locale } from '@/data/resumeData';

const uiText = {
  en: {
    nav: ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Education', 'Languages', 'Contact'],
    downloadCvEn: 'Download CV (EN)',
    downloadCvPt: 'Download CV (PT)',
    contact: 'Contact',
    sections: {
      about: 'About Me',
      skills: 'Technical Skills',
      experience: 'Professional Experience',
      projects: 'Projects',
      certifications: 'Certifications',
      education: 'Education',
      languages: 'Languages',
      contact: 'Contact'
    },
    academicBackground: 'Academic Background',
    contactLine:
      'Interested in working together on data platforms, analytics, or AI initiatives? Feel free to reach out.',
    openToGlobal: 'Open to international opportunities'
  },
  pt: {
    nav: ['Sobre', 'Habilidades', 'Experiência', 'Projetos', 'Certificações', 'Educação', 'Idiomas', 'Contato'],
    downloadCvEn: 'Baixar CV (EN)',
    downloadCvPt: 'Baixar CV (PT)',
    contact: 'Contato',
    sections: {
      about: 'Sobre Mim',
      skills: 'Habilidades Técnicas',
      experience: 'Experiência Profissional',
      projects: 'Projetos',
      certifications: 'Certificações',
      education: 'Educação',
      languages: 'Idiomas',
      contact: 'Contato'
    },
    academicBackground: 'Formação Acadêmica',
    contactLine:
      'Tem interesse em colaborar em projetos de dados, analytics ou IA? Vamos conversar.',
    openToGlobal: 'Disponível para oportunidades internacionais'
  }
} as const;

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>('pt');
  const mediaBackgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('locale');
    if (saved === 'pt' || saved === 'en') {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      if (!mediaBackgroundRef.current) return;
      if (mediaBackgroundRef.current.querySelector('video')) return;

      const video = document.createElement('video');
      video.src = '/site-video.mp4';
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = 'metadata';
      video.className = 'media-video';
      video.style.opacity = '0';

      video.addEventListener('canplaythrough', () => {
        video.style.opacity = '1';
      });

      mediaBackgroundRef.current.appendChild(video);
      void video.play().catch(() => {
        // No-op: muted autoplay can be blocked in edge cases.
      });
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const toggleLocale = () => {
    setLocale((current) => {
      const next = current === 'pt' ? 'en' : 'pt';
      localStorage.setItem('locale', next);
      return next;
    });
  };

  const content = localizedContent[locale];
  const t = uiText[locale];
  const cvPtPath = '/Curriculo_Elton_Guilherme_PT.pdf';
  const cvEnPath = '/Elton_Guilherme_Resume.pdf';

  const navLinks = useMemo(
    () => [
      { href: '#about', label: t.nav[0] },
      { href: '#skills', label: t.nav[1] },
      { href: '#experience', label: t.nav[2] },
      { href: '#projects', label: t.nav[3] },
      { href: '#certifications', label: t.nav[4] },
      { href: '#education', label: t.nav[5] },
      { href: '#languages', label: t.nav[6] },
      { href: '#contact', label: t.nav[7] }
    ],
    [t.nav]
  );

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
        <div className="container-base flex items-center justify-between gap-4 py-4">
          <span className="line-clamp-1 text-xs font-semibold text-slate-900 dark:text-slate-100 md:text-sm">
            {content.profile.name}
          </span>
          <div className="flex items-center gap-2">
            <nav className="hidden gap-5 text-sm text-slate-600 lg:flex dark:text-slate-300">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="fiap-tech-line transition hover:text-brand-700">
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              onClick={toggleLocale}
              className="inline-flex h-10 min-w-14 items-center justify-center rounded-xl border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300"
              aria-label="Toggle language"
            >
              {locale === 'pt' ? 'EN' : 'PT'}
            </button>
            <ThemeToggle />
          </div>
        </div>
        <div className="container-base pb-3 lg:hidden">
          <nav className="flex gap-3 overflow-x-auto whitespace-nowrap text-xs text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 transition hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-brand-50 to-slate-50 py-24 md:py-28 dark:border-slate-800 dark:from-slate-950 dark:to-black">
        <div ref={mediaBackgroundRef} className="media-background" aria-hidden="true">
          <img src="/site-image.webp" alt="" className="media-placeholder" />
        </div>
        <div className="absolute inset-0 bg-slate-900/45 dark:bg-slate-950/60" />
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_center,_rgba(47,150,255,0.16),_transparent_65%)] dark:bg-[radial-gradient(circle_at_center,_rgba(57,215,255,0.2),_transparent_65%)]" />
        <div className="container-base relative">
          <div className="relative z-10">
            <h1 className="hero-neon-name max-w-5xl">
              Elton Guilherme de Almeida Silva
            </h1>
            <p className="hero-neon-role mt-3">Data Engineer | Analytics | Gen AI</p>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-100 md:text-lg">
              {content.profile.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={cvPtPath}
                className="inline-flex items-center gap-2 rounded-none border border-brand-600 bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-transparent hover:text-brand-500"
              >
                <ArrowDownToLine size={18} />
                {t.downloadCvPt}
              </a>
              <a
                href={cvEnPath}
                className="inline-flex items-center gap-2 rounded-none border border-brand-600 bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-transparent hover:text-brand-500"
              >
                <ArrowDownToLine size={18} />
                {t.downloadCvEn}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300"
              >
                <Mail size={18} />
                {t.contact}
              </a>
              <a
                href={content.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href={content.profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" title={t.sections.about}>
        <AnimatedContainer className="fiap-panel rounded-lg p-6 shadow-soft">
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">{content.about}</p>
        </AnimatedContainer>
      </Section>

      <Section id="skills" title={t.sections.skills}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.skills.map((category, index) => (
            <AnimatedContainer
              key={category.title}
              delay={index * 0.04}
              className="fiap-panel rounded-lg p-5 shadow-soft"
            >
              <div className="mb-4 flex items-center gap-3">
                <category.icon className="text-brand-600" size={20} />
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </Section>

      <Section id="experience" title={t.sections.experience}>
        <div className="space-y-4">
          {content.experiences.map((exp, index) => (
            <AnimatedContainer
              key={`${exp.company}-${exp.role}`}
              delay={index * 0.05}
              className="fiap-panel rounded-lg p-6 shadow-soft"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{exp.role}</h3>
                  <p className="text-sm text-brand-700">{exp.company}</p>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {exp.achievements.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </AnimatedContainer>
          ))}
        </div>
      </Section>

      <Section id="projects" title={t.sections.projects}>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.projects.map((project, index) => (
            <AnimatedContainer
              key={project.name}
              delay={index * 0.05}
              className="fiap-panel rounded-lg p-5 shadow-soft"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{project.name}</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{project.description}</p>
              <p className="mt-3 text-sm font-medium text-brand-700">{project.impact}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Tag key={tech} label={tech} />
                ))}
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </Section>

      <Section id="certifications" title={t.sections.certifications}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.certifications.map((cert, index) => (
            <AnimatedContainer
              key={cert.name}
              delay={index * 0.05}
              className="fiap-panel rounded-lg p-5 shadow-soft"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{cert.name}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
              <p className="mt-2 text-sm text-brand-700">{cert.year}</p>
            </AnimatedContainer>
          ))}
        </div>
      </Section>

      <Section id="education" title={t.sections.education}>
        <div className="grid gap-4 md:grid-cols-2">
          {content.education.map((item, index) => (
            <AnimatedContainer
              key={item.degree}
              delay={index * 0.05}
              className="fiap-panel rounded-lg p-5 shadow-soft"
            >
              <div className="mb-2 flex items-center gap-2 text-brand-700">
                <GraduationCap size={18} />
                <span className="text-sm font-semibold">{t.academicBackground}</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{item.degree}</h3>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.institution}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.period}</p>
            </AnimatedContainer>
          ))}
        </div>
      </Section>

      <Section id="languages" title={t.sections.languages}>
        <div className="grid gap-4 md:grid-cols-3">
          {content.languages.map((language, index) => (
            <AnimatedContainer
              key={language.name}
              delay={index * 0.05}
              className="fiap-panel rounded-lg p-5 shadow-soft"
            >
              <div className="mb-2 flex items-center gap-2 text-brand-700">
                <Languages size={18} />
                <span className="text-sm font-semibold">{language.name}</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">{language.level}</p>
            </AnimatedContainer>
          ))}
        </div>
      </Section>

      <Section id="contact" title={t.sections.contact}>
        <AnimatedContainer className="fiap-panel rounded-lg p-6 shadow-soft">
          <p className="text-slate-700 dark:text-slate-300">{t.contactLine}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
            <a
              href={`mailto:${content.profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-slate-800 transition hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:text-slate-200"
            >
              <Mail size={16} />
              {content.profile.email}
            </a>
            <span className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Phone size={16} />
              {content.profile.phone}
            </span>
            <span className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <MapPin size={16} />
              {content.profile.location}
            </span>
            <a
              href={content.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-800 dark:text-brand-300 dark:hover:text-brand-200"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={content.profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-800 dark:text-brand-300 dark:hover:text-brand-200"
            >
              <Github size={16} />
              GitHub
            </a>
            <span className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Globe size={16} />
              {t.openToGlobal}
            </span>
          </div>
        </AnimatedContainer>
      </Section>
    </main>
  );
}
