import type { LucideIcon } from 'lucide-react';
import {
  BrainCircuit,
  CloudCog,
  Database,
  GitBranch,
  LayoutDashboard,
  ShieldCheck
} from 'lucide-react';

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  impact: string;
  link?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export const profile = {
  name: 'Elton Guilherme',
  title: 'Data Engineer | Cloud, BI & AI Applications',
  summary:
    'Data Engineer focused on building scalable data platforms, modern analytics, and AI-driven products. Strong background in cloud architecture, ETL/ELT design, business intelligence, and LLM-powered solutions that turn data into measurable business value.',
  email: 'elton.guilherme@email.com',
  location: 'Brazil',
  linkedin: 'https://www.linkedin.com/in/elton-guilherme',
  github: 'https://github.com/eltonguilherme',
  cvPath: '/Elton_Guilherme_Resume.pdf'
};

export const about =
  'I design and deliver end-to-end data solutions that connect engineering best practices with business goals. My work spans cloud data lakes, orchestration pipelines, self-service BI, and applied AI use cases. I enjoy collaborating with cross-functional teams to create reliable, secure, and high-impact data products.';

export const skills: SkillCategory[] = [
  {
    title: 'Data Engineering',
    icon: Database,
    items: ['ETL/ELT Pipelines', 'Data Modeling', 'Data Warehousing', 'Apache Spark']
  },
  {
    title: 'Cloud & Platform',
    icon: CloudCog,
    items: ['AWS', 'Azure', 'GCP', 'Terraform', 'Docker']
  },
  {
    title: 'Business Intelligence',
    icon: LayoutDashboard,
    items: ['Power BI', 'Looker Studio', 'KPI Frameworks', 'Executive Dashboards']
  },
  {
    title: 'AI & LLM Applications',
    icon: BrainCircuit,
    items: ['Prompt Engineering', 'RAG Pipelines', 'LLM Integrations', 'AI Prototyping']
  },
  {
    title: 'Software & DevOps',
    icon: GitBranch,
    items: ['Python', 'SQL', 'TypeScript', 'CI/CD', 'Git']
  },
  {
    title: 'Governance & Security',
    icon: ShieldCheck,
    items: ['Data Quality', 'Observability', 'Access Control', 'Compliance']
  }
];

export const experiences: Experience[] = [
  {
    role: 'Senior Data Engineer',
    company: 'Global Analytics Company',
    period: '2023 - Present',
    location: 'Remote',
    achievements: [
      'Designed a cloud-native data platform supporting near real-time analytics.',
      'Reduced pipeline failures by implementing end-to-end observability and alerting.',
      'Led architecture for LLM-assisted analytics workflows used by business teams.'
    ]
  },
  {
    role: 'Data Engineer',
    company: 'Technology Consulting Firm',
    period: '2021 - 2023',
    location: 'Brazil',
    achievements: [
      'Built scalable ETL/ELT pipelines integrating multi-source enterprise data.',
      'Developed BI models and dashboards that improved executive decision cycles.',
      'Automated deployment workflows for data services with IaC and CI/CD.'
    ]
  }
];

export const projects: Project[] = [
  {
    name: 'Cloud Data Lakehouse Modernization',
    description:
      'Migration from legacy on-prem workloads to a cloud lakehouse architecture with governed data layers.',
    stack: ['AWS', 'Spark', 'dbt', 'Airflow'],
    impact: 'Cut processing time by 45% and improved analytics reliability for global teams.'
  },
  {
    name: 'AI-Powered Insights Assistant',
    description:
      'Internal assistant that combines semantic search and LLM summarization for business reporting.',
    stack: ['Python', 'Vector DB', 'LLM API', 'FastAPI'],
    impact: 'Reduced ad-hoc reporting effort and accelerated stakeholder access to insights.'
  },
  {
    name: 'BI Performance Optimization Program',
    description:
      'Initiative to redesign dashboard data models and optimize refresh strategies across departments.',
    stack: ['Power BI', 'SQL', 'Data Warehouse'],
    impact: 'Improved dashboard load performance and increased BI adoption by non-technical users.'
  }
];

export const certifications: Certification[] = [
  { name: 'AWS Certified Data Analytics - Specialty', issuer: 'Amazon Web Services', year: '2025' },
  { name: 'Microsoft Certified: Azure Data Engineer Associate', issuer: 'Microsoft', year: '2024' },
  { name: 'Google Professional Data Engineer', issuer: 'Google Cloud', year: '2023' }
];

export const education = [
  {
    degree: 'Bachelor in Information Systems',
    institution: 'University in Brazil',
    period: '2016 - 2020'
  }
];

export const languages = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'Professional proficiency' },
  { name: 'Spanish', level: 'Intermediate' }
];
