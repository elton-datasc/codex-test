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
  name: 'Elton Guilherme de Almeida Silva',
  title: 'Data Engineer | Azure Certified | Apache Spark | Python | SQL | Databricks',
  summary:
    'Data Engineer with experience in Azure cloud data platforms, Apache Spark, Databricks, Python, SQL, BI, and Generative AI applications. Microsoft AZ-900 and DP-900 certified, with an MBA in Big Data and Business Intelligence.',
  email: 'elton-guilherme@hotmail.com',
  phone: '+55 83 98780-3349',
  location: 'Joao Pessoa, PB, Brazil',
  linkedin: 'https://www.linkedin.com/in/elton-guilherme/',
  github: 'https://github.com/eltonguilherme',
  cvPath: '/Elton_Guilherme_Resume.pdf'
};

export const about =
  'I work on end-to-end data engineering initiatives, from requirements gathering and data modeling to cloud pipelines, data lake architecture, analytics dashboards, and AI-powered conversational products. My experience includes Azure Data Factory orchestration, Databricks with PySpark, SQL databases, Power BI and Metabase, LGPD-sensitive data mapping on AWS, and GenAI solutions using OpenAI, LangChain, Redis, LangGraph, Dialogflow CX, Vertex AI, and containerized deployments.';

export const skills: SkillCategory[] = [
  {
    title: 'Data Engineering',
    icon: Database,
    items: [
      'ETL/ELT Pipelines',
      'Apache Spark',
      'PySpark',
      'Databricks',
      'Data Lake',
      'Medallion Architecture',
      'Data Warehousing',
      'Star Schema Modeling'
    ]
  },
  {
    title: 'Cloud & Platform',
    icon: CloudCog,
    items: [
      'Microsoft Azure',
      'Azure Data Factory',
      'Azure SQL',
      'Azure Cosmos DB',
      'Blob Storage',
      'Key Vault',
      'AWS',
      'GCP',
      'Docker',
      'Azure Container Registry'
    ]
  },
  {
    title: 'Business Intelligence',
    icon: LayoutDashboard,
    items: ['Power BI', 'Metabase', 'SQL Metrics', 'Dashboard Modeling', 'S-Curve Analysis']
  },
  {
    title: 'AI & LLM Applications',
    icon: BrainCircuit,
    items: [
      'Generative AI',
      'LangChain',
      'LangGraph',
      'OpenAI API',
      'Vector Databases',
      'Redis',
      'Dialogflow CX',
      'Vertex AI',
      'Azure Cognitive Services'
    ]
  },
  {
    title: 'Software & DevOps',
    icon: GitBranch,
    items: [
      'Python',
      'SQL',
      'PostgreSQL',
      'MySQL',
      'SQL Server',
      'Object-Oriented Programming',
      'JDBC',
      'Linux',
      'Git',
      'GitHub',
      'Azure DevOps'
    ]
  },
  {
    title: 'Governance & Security',
    icon: ShieldCheck,
    items: ['LGPD', 'Sensitive Data Mapping', 'Data Quality', 'Access Control', 'Cloud Security Basics']
  }
];

export const experiences: Experience[] = [
  {
    role: 'Data Engineer | Generative AI',
    company: 'BlueShift Brasil',
    period: 'January 2022 - Present',
    location: 'Brazil',
    achievements: [
      'Developed Azure cloud data pipelines using Azure Data Factory for orchestration, Data Lake medallion architecture, Databricks, PySpark, and Azure SQL loading.',
      'Modeled databases and built pipelines to consume, process, persist, and visualize REST API data with Databricks, Azure SQL, and Power BI.',
      'Built Python backends for user input and persistence in SQL Server and MySQL using object-oriented programming and JDBC connections.',
      'Delivered Generative AI and conversational chat projects using OpenAI API, LangChain, Redis, LangGraph, Docker, Azure Container Registry, Dialogflow CX, and Vertex AI.',
      'Worked on document ETL for AI solutions, including chunking, splitters, vector database upload, and containerized deployment for Azure environments.',
      'Supported sensitive data mapping initiatives for LGPD compliance in AWS cloud environments.',
      'Acted as an internal mentor for Programming Logic and Algorithms with Python.'
    ]
  }
];

export const projects: Project[] = [
  {
    name: 'Azure Data Lake and Medallion Pipelines',
    description:
      'End-to-end Azure data engineering solution with Data Factory orchestration, Data Lake layers, Databricks transformations, and Azure SQL persistence.',
    stack: ['Azure Data Factory', 'Data Lake', 'Databricks', 'PySpark', 'Azure SQL'],
    impact: 'Enabled structured, maintainable ingestion and transformation workflows using a medallion architecture.'
  },
  {
    name: 'Generative AI Conversational Chatbots',
    description:
      'Conversational AI solutions and proof of concepts for clients across banking, public sector, and manufacturing contexts.',
    stack: ['Python', 'OpenAI API', 'LangChain', 'Vector DB', 'Docker', 'Azure'],
    impact: 'Delivered document ETL, chunking, vector database upload, and deployable AI applications.'
  },
  {
    name: 'GCP Dialogflow CX and Vertex AI Flows',
    description:
      'Conversational flows for Generative AI projects using Dialogflow CX, webhooks, datasets, playbooks, and Vertex AI.',
    stack: ['GCP', 'Dialogflow CX', 'Vertex AI', 'Webhooks', 'Playbooks'],
    impact: 'Supported conversational experiences for clients from multiple industries.'
  },
  {
    name: 'API Consumption and Backend Data Persistence',
    description:
      'Backend and ETL workflows for API consumption, Spark processing in Docker, Cosmos DB storage, and SQL database persistence.',
    stack: ['PySpark', 'Docker', 'Cosmos DB', 'Python OOP', 'JDBC', 'SQL Server', 'MySQL'],
    impact: 'Created reusable backend and pipeline patterns for data ingestion and CRUD operations.'
  },
  {
    name: 'Data Warehouse and BI Dashboards',
    description:
      'Data warehouse projects from requirements and architecture to SQL Server modeling, fact and dimension tables, Databricks treatment, and Power BI visualization.',
    stack: ['SQL Server', 'Databricks', 'Power BI', 'SQL', 'Data Modeling'],
    impact: 'Connected business requirements with governed analytical models and dashboard delivery.'
  }
];

export const certifications: Certification[] = [
  { name: 'Microsoft Certified: Azure Fundamentals (AZ-900)', issuer: 'Microsoft', year: 'Completed' },
  { name: 'Microsoft Certified: Azure Data Fundamentals (DP-900)', issuer: 'Microsoft', year: 'Completed' },
  { name: 'Databricks Lakehouse Fundamentals', issuer: 'Databricks Academy', year: 'Completed' },
  { name: 'Generative AI Fundamentals', issuer: 'Databricks Academy', year: 'Completed' },
  {
    name: 'Azure Data Engineer Associate (DP-203) Cert Prep: Design and Implement Data Storage',
    issuer: 'LinkedIn Learning',
    year: 'Completed'
  },
  {
    name: 'Azure Data Engineer Associate (DP-203) Cert Prep: Design and Develop Data Processing',
    issuer: 'LinkedIn Learning',
    year: 'Completed'
  }
];

export const education = [
  {
    degree: 'MBA in Business Intelligence with Big Data',
    institution: 'Unipê - Centro Universitário de João Pessoa',
    period: 'October 2021 - July 2023'
  },
  {
    degree: 'MBA in Controllership, Auditing and Financial Management',
    institution: 'Fundação Getúlio Vargas',
    period: '2011 - 2013'
  },
  {
    degree: 'Bachelor in Accounting',
    institution: 'UNIESP Centro Universitário',
    period: '2007 - 2011'
  }
];

export const languages = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'B2' }
];

export type Locale = 'en' | 'pt';

export type LocalizedResume = {
  profile: typeof profile;
  about: string;
  skills: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
  education: { degree: string; institution: string; period: string }[];
  languages: { name: string; level: string }[];
};

export const localizedContent: Record<Locale, LocalizedResume> = {
  en: {
    profile,
    about,
    skills,
    experiences,
    projects,
    certifications,
    education,
    languages
  },
  pt: {
    profile: {
      ...profile,
      title: 'Engenheiro de Dados | Certificações Azure | Apache Spark | Python | SQL | Databricks',
      summary:
        'Engenheiro de Dados com experiência em plataformas de dados na nuvem Azure, Apache Spark, Databricks, Python, SQL, BI e aplicações com IA Generativa. Certificado Microsoft AZ-900 e DP-900, com MBA em Big Data e Business Intelligence.',
      location: 'João Pessoa, PB, Brasil'
    },
    about:
      'Atuo em iniciativas end-to-end de engenharia de dados, desde levantamento de requisitos e modelagem até pipelines em nuvem, arquitetura de data lake, dashboards analíticos e produtos conversacionais com IA. Minha experiência inclui orquestração com Azure Data Factory, Databricks com PySpark, bancos SQL, Power BI e Metabase, mapeamento de dados sensíveis para LGPD em AWS e soluções GenAI com OpenAI, LangChain, Redis, LangGraph, Dialogflow CX, Vertex AI e deploy com contêineres.',
    skills: [
      {
        title: 'Engenharia de Dados',
        icon: Database,
        items: [
          'Pipelines ETL/ELT',
          'Apache Spark',
          'PySpark',
          'Databricks',
          'Data Lake',
          'Arquitetura Medalhão',
          'Data Warehouse',
          'Modelagem Estrela'
        ]
      },
      {
        title: 'Nuvem e Plataforma',
        icon: CloudCog,
        items: [
          'Microsoft Azure',
          'Azure Data Factory',
          'Azure SQL',
          'Azure Cosmos DB',
          'Blob Storage',
          'Key Vault',
          'AWS',
          'GCP',
          'Docker',
          'Azure Container Registry'
        ]
      },
      {
        title: 'Inteligência de Negócios',
        icon: LayoutDashboard,
        items: ['Power BI', 'Metabase', 'Métricas em SQL', 'Modelagem de Dashboards', 'Análise de Curva S']
      },
      {
        title: 'Aplicações de IA e LLM',
        icon: BrainCircuit,
        items: [
          'IA Generativa',
          'LangChain',
          'LangGraph',
          'API OpenAI',
          'Bancos Vetoriais',
          'Redis',
          'Dialogflow CX',
          'Vertex AI',
          'Azure Cognitive Services'
        ]
      },
      {
        title: 'Software e DevOps',
        icon: GitBranch,
        items: [
          'Python',
          'SQL',
          'PostgreSQL',
          'MySQL',
          'SQL Server',
          'Programação Orientada a Objetos',
          'JDBC',
          'Linux',
          'Git',
          'GitHub',
          'Azure DevOps'
        ]
      },
      {
        title: 'Governança e Segurança',
        icon: ShieldCheck,
        items: ['LGPD', 'Mapeamento de Dados Sensíveis', 'Qualidade de Dados', 'Controle de Acesso', 'Segurança em Nuvem']
      }
    ],
    experiences: [
      {
        role: 'Engenheiro de Dados | IA Generativa',
        company: 'BlueShift Brasil',
        period: 'Janeiro 2022 - Atual',
        location: 'Brasil',
        achievements: [
          'Desenvolvimento de pipelines em Azure com orquestração no Data Factory, arquitetura medalhão em Data Lake, transformações no Databricks com PySpark e carga em Azure SQL.',
          'Modelagem de banco e construção de pipelines para consumo, tratamento, persistência e visualização de dados de API REST com Databricks, Azure SQL e Power BI.',
          'Desenvolvimento de backends Python para cadastro e persistência em SQL Server e MySQL com programação orientada a objetos e conexão JDBC.',
          'Entrega de projetos de IA Generativa e chat conversacional com API OpenAI, LangChain, Redis, LangGraph, Docker, Azure Container Registry, Dialogflow CX e Vertex AI.',
          'Atuação em ETL de documentos para IA, incluindo chunking, splitters, upload em banco vetorial e deploy de aplicações conteinerizadas em Azure.',
          'Suporte a iniciativas de mapeamento de dados sensíveis para conformidade com a LGPD em ambientes AWS.',
          'Atuação como monitor interno de Lógica de Programação e Algoritmos com Python.'
        ]
      }
    ],
    projects: [
      {
        name: 'Pipelines de Data Lake com Arquitetura Medalhão',
        description:
          'Solução end-to-end em Azure com orquestração no Data Factory, camadas de Data Lake, transformações no Databricks e persistência no Azure SQL.',
        stack: ['Azure Data Factory', 'Data Lake', 'Databricks', 'PySpark', 'Azure SQL'],
        impact: 'Estruturou fluxos de ingestão e transformação escaláveis com governança e manutenção simplificada.'
      },
      {
        name: 'Chatbots Conversacionais com IA Generativa',
        description:
          'Soluções e POCs de IA conversacional para clientes dos setores bancário, público e industrial.',
        stack: ['Python', 'API OpenAI', 'LangChain', 'Vector DB', 'Docker', 'Azure'],
        impact: 'Entregou fluxo completo de ETL de documentos, vetorização e deploy de aplicações de IA.'
      },
      {
        name: 'Fluxos Conversacionais com Dialogflow CX e Vertex AI',
        description:
          'Criação de fluxos conversacionais em projetos de GenAI com webhooks, datasets, playbooks e Vertex AI.',
        stack: ['GCP', 'Dialogflow CX', 'Vertex AI', 'Webhooks', 'Playbooks'],
        impact: 'Viabilizou experiências conversacionais para clientes de diferentes segmentos.'
      },
      {
        name: 'Consumo de API e Persistência de Dados',
        description:
          'Fluxos de backend e ETL para consumo de APIs, processamento Spark em Docker, armazenamento em Cosmos DB e persistência em bancos SQL.',
        stack: ['PySpark', 'Docker', 'Cosmos DB', 'Python OOP', 'JDBC', 'SQL Server', 'MySQL'],
        impact: 'Criou padrões reutilizáveis de ingestão de dados e operações CRUD.'
      },
      {
        name: 'Data Warehouse e Dashboards de BI',
        description:
          'Projetos de DW desde requisitos e arquitetura até modelagem em SQL Server, fato/dimensão, tratamento no Databricks e visualização em Power BI.',
        stack: ['SQL Server', 'Databricks', 'Power BI', 'SQL', 'Data Modeling'],
        impact: 'Conectou requisitos de negócio a modelos analíticos governados e dashboards executivos.'
      }
    ],
    certifications: certifications.map((cert) => ({
      ...cert,
      year: cert.year === 'Completed' ? 'Concluído' : cert.year
    })),
    education: [
      {
        degree: 'MBA em Business Intelligence com Big Data',
        institution: 'Unipê - Centro Universitário de João Pessoa',
        period: 'Outubro 2021 - Julho 2023'
      },
      {
        degree: 'MBA em Controladoria, Auditoria e Gestão Financeira',
        institution: 'Fundação Getúlio Vargas',
        period: '2011 - 2013'
      },
      {
        degree: 'Bacharelado em Contabilidade',
        institution: 'UNIESP Centro Universitário',
        period: '2007 - 2011'
      }
    ],
    languages: [
      { name: 'Português', level: 'Nativo' },
      { name: 'Inglês', level: 'B2' }
    ]
  }
};
