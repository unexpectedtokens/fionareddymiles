import type { Localized } from "./projects";

export type TimelineSubEntry = {
  title: Localized;
  link?: string;
  bullets: Localized[];
};

export type TimelineEntry = {
  id: string;
  start: number;
  end: number | "current";
  title: Localized;
  organization: Localized;
  location: Localized;
  bullets?: Localized[];
  subEntries?: TimelineSubEntry[];
  link?: string;
};

export const timeline: TimelineEntry[] = [
  {
    id: "architecture-degree",
    start: 2017,
    end: 2022,
    title: {
      en: "Architecture Degree",
      es: "Carrera de Arquitectura",
    },
    organization: {
      en: "FADU — University of Buenos Aires",
      es: "FADU — Universidad de Buenos Aires",
    },
    location: {
      en: "Buenos Aires, Argentina",
      es: "Buenos Aires, Argentina",
    },
  },
  {
    id: "sposito",
    start: 2022,
    end: 2025,
    title: {
      en: "Project Manager Assistant",
      es: "Asistente de Project Manager",
    },
    organization: {
      en: "Sposito & Asociados",
      es: "Sposito & Asociados",
    },
    location: {
      en: "Buenos Aires, Argentina",
      es: "Buenos Aires, Argentina",
    },
    subEntries: [
      {
        title: {
          en: "Prima Caballito",
          es: "Prima Caballito",
        },
        link: "https://spositoyasociados.com/proyecto/prima-caballito-2/",
        bullets: [
          {
            en: "Assisted throughout all phases of construction from initial works to final detailing",
            es: "Asistencia en todas las fases de construcción, desde los trabajos iniciales hasta la terminación final",
          },
          {
            en: "Reviewed and managed technical documentation",
            es: "Revisión y gestión de documentación técnica",
          },
          {
            en: "Monitored task progress and project timelines",
            es: "Seguimiento del avance de tareas y plazos del proyecto",
          },
          {
            en: "Coordinated and supported subcontractors in the execution of their tasks",
            es: "Coordinación y apoyo a subcontratistas en la ejecución de sus tareas",
          },
        ],
      },
      {
        title: {
          en: "Universidad Torcuato di Tella — Edificio Parque",
          es: "Universidad Torcuato di Tella — Edificio Parque",
        },
        link: "https://spositoyasociados.com/en/proyecto/universidad-torcuato-di-tella-3/",
        bullets: [
          {
            en: "Coordinated LEED certification documentation and compliance processes",
            es: "Coordinación de documentación y procesos de cumplimiento de la certificación LEED",
          },
          {
            en: "Reviewed and managed technical project documentation",
            es: "Revisión y gestión de documentación técnica del proyecto",
          },
          {
            en: "Monitored task progress and project timelines to ensure timely delivery",
            es: "Seguimiento del avance y plazos para asegurar entregas a tiempo",
          },
        ],
      },
    ],
  },
  {
    id: "teacher-assistant-lcj",
    start: 2023,
    end: 2024,
    title: {
      en: "Teacher Assistant",
      es: "Ayudante de Cátedra",
    },
    organization: {
      en: "LCJ — Lestard Cajide Janches Chair, FADU — UBA",
      es: "LCJ — Cátedra Lestard Cajide Janches, FADU — UBA",
    },
    location: {
      en: "Buenos Aires, Argentina",
      es: "Buenos Aires, Argentina",
    },
    link: "https://www.instagram.com/lestardcajidejanches/",
    bullets: [
      {
        en: "Assisted in PU (Urban Design Project), PA (Architectural Design Project) and A3 (Architecture 3) lectures",
        es: "Asistencia en clases de PU (Proyecto Urbano), PA (Proyecto Arquitectónico) y A3 (Arquitectura 3)",
      },
      {
        en: "Facilitated student engagement through active participation in studio discussions and activities",
        es: "Fomento de la participación de estudiantes en debates y actividades de taller",
      },
      {
        en: "Provided constructive feedback on design proposals, drawings and presentations",
        es: "Devoluciones constructivas sobre propuestas, dibujos y presentaciones",
      },
      {
        en: "Guided students in concept development and project refinement",
        es: "Acompañamiento en el desarrollo conceptual y la mejora de proyectos",
      },
      {
        en: "Participated in design reviews, critiques and assessment processes",
        es: "Participación en revisiones, críticas y procesos de evaluación",
      },
    ],
  },
  {
    id: "daad-gropius",
    start: 2023,
    end: 2024,
    title: {
      en: "Academic Team",
      es: "Equipo Académico",
    },
    organization: {
      en: "DAAD — Walter Gropius Lehrstuhl Chair, FADU — UBA",
      es: "DAAD — Cátedra Walter Gropius Lehrstuhl, FADU — UBA",
    },
    location: {
      en: "Germany / Buenos Aires, Argentina",
      es: "Alemania / Buenos Aires, Argentina",
    },
    link: "https://catedragropiusfadu.wordpress.com/home/?frame-nonce=fe8cbed00c",
    bullets: [
      {
        en: "Taught in the elective undergraduate studio “Estrategias Interescalares para Ciudades” (Transscalar Urban Strategies)",
        es: "Docencia en el taller electivo de grado “Estrategias Interescalares para Ciudades”",
      },
      {
        en: "Led critical discussions on urban ecotones, fostering analytical and design-based thinking",
        es: "Conducción de debates críticos sobre ecotonos urbanos, fomentando el pensamiento analítico y proyectual",
      },
      {
        en: "Guided students in developing interdisciplinary and site-responsive urban strategies",
        es: "Acompañamiento a estudiantes en el desarrollo de estrategias urbanas interdisciplinarias y situadas",
      },
      {
        en: "Curated and conceptualized research documentation for the “How Do We Agglo?” exhibition on global trends in site-specific urbanization",
        es: "Curaduría y conceptualización de la documentación de investigación para la exhibición “How Do We Agglo?” sobre tendencias globales de urbanización situada",
      },
    ],
  },
  {
    id: "independent-architect",
    start: 2025,
    end: "current",
    title: {
      en: "Independent Architect",
      es: "Arquitecta Independiente",
    },
    organization: {
      en: "Self-employed",
      es: "Trabajo independiente",
    },
    location: {
      en: "",
      es: "",
    },
    bullets: [
      {
        en: "Designed and modeled residential architectural projects across multiple scales",
        es: "Diseño y modelado de proyectos residenciales en múltiples escalas",
      },
      {
        en: "Produced project documentation from concept design to execution drawings",
        es: "Producción de documentación de proyecto, del diseño conceptual a los planos de ejecución",
      },
    ],
  },
];
