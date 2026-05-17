import {
  ArrowDownToLine,
  Github,
  Globe,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin
} from 'lucide-react';
import { AnimatedContainer } from '@/components/AnimatedContainer';
import { Section } from '@/components/Section';
import { Tag } from '@/components/Tag';
import {
  about,
  certifications,
  education,
  experiences,
  languages,
  profile,
  projects,
  skills
} from '@/data/resumeData';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#education', label: 'Education' },
  { href: '#languages', label: 'Languages' },
  { href: '#contact', label: 'Contact' }
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
        <div className="container-base flex items-center justify-between py-4">
          <span className="text-sm font-semibold text-slate-900">{profile.name}</span>
          <nav className="hidden gap-5 text-sm text-slate-600 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-brand-700">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-brand-50 to-slate-50 py-20 md:py-28">
        <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_center,_rgba(47,150,255,0.16),_transparent_65%)]" />
        <div className="container-base relative">
          <AnimatedContainer>
            <p className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 shadow-sm">
              Data Engineer Portfolio
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-lg font-medium text-brand-800">{profile.title}</p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
              {profile.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.cvPath}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                <ArrowDownToLine size={18} />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand-300 hover:text-brand-700"
              >
                <Mail size={18} />
                Contact
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand-300 hover:text-brand-700"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand-300 hover:text-brand-700"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </AnimatedContainer>
        </div>
      </section>

      <Section id="about" title="About Me">
        <AnimatedContainer className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-slate-700 leading-relaxed">{about}</p>
        </AnimatedContainer>
      </Section>

      <Section id="skills" title="Technical Skills">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <AnimatedContainer
              key={category.title}
              delay={index * 0.04}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
            >
              <div className="mb-4 flex items-center gap-3">
                <category.icon className="text-brand-600" size={20} />
                <h3 className="text-base font-semibold text-slate-900">{category.title}</h3>
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

      <Section id="experience" title="Professional Experience">
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <AnimatedContainer
              key={`${exp.company}-${exp.role}`}
              delay={index * 0.05}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{exp.role}</h3>
                  <p className="text-sm text-brand-700">{exp.company}</p>
                </div>
                <div className="text-sm text-slate-600">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
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

      <Section id="projects" title="Projects">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedContainer
              key={project.name}
              delay={index * 0.05}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
            >
              <h3 className="text-base font-semibold text-slate-900">{project.name}</h3>
              <p className="mt-2 text-sm text-slate-700">{project.description}</p>
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

      <Section id="certifications" title="Certifications">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <AnimatedContainer
              key={cert.name}
              delay={index * 0.05}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
            >
              <h3 className="text-base font-semibold text-slate-900">{cert.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{cert.issuer}</p>
              <p className="mt-2 text-sm text-brand-700">{cert.year}</p>
            </AnimatedContainer>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item, index) => (
            <AnimatedContainer
              key={item.degree}
              delay={index * 0.05}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
            >
              <div className="mb-2 flex items-center gap-2 text-brand-700">
                <GraduationCap size={18} />
                <span className="text-sm font-semibold">Academic Background</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900">{item.degree}</h3>
              <p className="mt-1 text-sm text-slate-700">{item.institution}</p>
              <p className="mt-2 text-sm text-slate-600">{item.period}</p>
            </AnimatedContainer>
          ))}
        </div>
      </Section>

      <Section id="languages" title="Languages">
        <div className="grid gap-4 md:grid-cols-3">
          {languages.map((language, index) => (
            <AnimatedContainer
              key={language.name}
              delay={index * 0.05}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
            >
              <div className="mb-2 flex items-center gap-2 text-brand-700">
                <Languages size={18} />
                <span className="text-sm font-semibold">{language.name}</span>
              </div>
              <p className="text-sm text-slate-700">{language.level}</p>
            </AnimatedContainer>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <AnimatedContainer className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-slate-700">
            Interested in working together on data platforms, analytics, or AI initiatives? Feel free to reach out.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-slate-800 transition hover:border-brand-300 hover:text-brand-700"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <span className="inline-flex items-center gap-2 text-slate-600">
              <MapPin size={16} />
              {profile.location}
            </span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-800"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-800"
            >
              <Github size={16} />
              GitHub
            </a>
            <span className="inline-flex items-center gap-2 text-slate-600">
              <Globe size={16} />
              Open to international opportunities
            </span>
          </div>
        </AnimatedContainer>
      </Section>
    </main>
  );
}
