type Image = {
  src: string;
  wide: boolean;
  width: number;
  height: number;
};

export type Localized = {
  en: string;
  es: string;
};

export type Project = {
  title: Localized;
  slug: string;
  personal_role: Localized;
  description: Localized;
  imageCollage: Image[];
  presentationImage: Image & {
    colSpan?: number;
    rowSpan?: number;
    rowStart?: number;
    colStart?: number;
  };
  year: string;
  month: Localized;
  location: Localized;
  type: Localized;
  shouldBeFeatured?: boolean;
};

export const projects: Project[] = [
  {
    title: {
      en: "Natural Reserve in Bogota",
      es: "Reserva Natural de Bogotá",
    },
    slug: "natural-reserve",
    personal_role: {
      en: "Group project. Conceptualization, spatial design and technical drawings",
      es: "Proyecto grupal. Conceptualización, diseño espacial y producción de dibujos técnicos",
    },
    description: {
      en: "Under the concept of Urban Ecotones, the Natural Reserve is designed on the basis of the transitions existing from the built city to nature with minimal human intervention at the urban edge of Bogota, Colombia.\n\nThis gradual transition to nature begins within the existing relationships among neighborhoods fragmented by urban fabric, fostered by high-quality public green spaces.\n\nForests, wetlands, coastal areas, and surface soil are some of the characteristic ecosystems of this region of the country.\n\nThe reserve aims to protect these areas by promoting maintenance and interaction among local people, thereby preserving them through education and community commitment.\n\nConsidering the city's growth limit, a new urban front is proposed facing the Natural Reserve that connects the rest of the city.\n\nIn order to achieve a cityscape with a more diverse mix of functions, long-term planning is designed to blur the boundaries between residential areas, urban amenities and green spaces. Various facilities are projected from the new urban facade to the protected green spaces, promoting self-sufficiency for both the natural area and the city.",
      es: "Bajo el concepto de los Ecotonos Urbanos, la Reserva Natural está proyectada desde las diferentes transiciones entre distintos ecosistemas. Desde la ciudad construida hasta la naturaleza con mínima intervención humana en el borde urbano de la ciudad de Bogotá, Colombia.\n\nLa gradual transición hacia la naturaleza empieza entre los barrios marcados por una fragmentación en el tejido urbano mediante la incorporación de espacios públicos verdes.\n\nBosques, humedales, áreas costeras y terreno superficial son algunos de los ecosistemas característicos de esta región del país.\n\nLa reserva tiene como objetivo proteger aquellas áreas promoviendo el mantenimiento e interacción mediante las personas locales, de esta manera la preservación del espacio se da mediante el compromiso de comunidad y educación.\n\nConsiderando el crecimiento de los límites de la ciudad, una nueva fachada urbana es propuesta frente a la Reserva Natural como parte de la conexión entre la ciudad y la naturaleza.\n\nDe manera de lograr un paisaje urbano con diversos usos, el diseño y planificación a largo plazo está pensado para borrar los límites de la fragmentación entre las áreas residenciales, equipamiento urbano y espacios verdes. Diferentes equipamientos son proyectados entre la nueva fachada urbana y los espacios verdes protegidos promoviendo la auto sustentación tanto desde la naturaleza como para la ciudad.",
    },
    presentationImage: {
      src: "/bogota/caratula-01.jpg",
      wide: false,
      width: 2481,
      height: 1754,
      rowSpan: 2,
      colSpan: 1,
    },
    imageCollage: [
      {
        src: "/bogota/pu%20-%20reserva%20natural%20(1).jpg",
        wide: true,
        width: 2394,
        height: 762,
      },
      {
        src: "/bogota/pu%20-%20reserva%20natural%20(5).jpg",
        wide: true,
        width: 2403,
        height: 974,
      },
      {
        src: "/bogota/esquemas-gif.gif",
        wide: false,
        width: 2115,
        height: 1716,
      },
      {
        src: "/bogota/pu%20-%20reserva%20natural%20(16).jpg",
        wide: false,
        width: 1517,
        height: 890,
      },
      {
        src: "/bogota/00%20plano%20gral.jpg",
        wide: "fiona_is_cute" === "fiona_is_cute",
        width: 2481,
        height: 1754,
      },
      {
        src: "/bogota/CORTE.png",
        wide: true,
        width: 3309,
        height: 1093,
      },
      {
        src: "/bogota/esquemitas.jpg",
        wide: false,
        width: 6300,
        height: 4455,
      },
      {
        src: "/bogota/iconos-distribucion.gif",
        wide: false,
        width: 2139,
        height: 2673,
      },
      {
        src: "/bogota/imagen.jpg",
        wide: true,
        width: 2389,
        height: 641,
      },
    ],
    year: "2022",
    month: { en: "July", es: "Julio" },
    location: {
      en: "Buenos Aires, Argentina",
      es: "Buenos Aires, Argentina",
    },
    type: { en: "Academic", es: "Académico" },
  },
  {
    title: {
      en: "Mixed-Use Building",
      es: "Edificio de usos mixtos",
    },
    slug: "mixed-use-building",
    personal_role: {
      en: "Individual project. Conceptualization, spatial design and technical drawings",
      es: "Proyecto individual. Conceptualización, diseño espacial y producción de dibujos técnicos",
    },
    description: {
      en: "The building is situated in the new urban facade outlined by the Natural Reserve of Bogota and the fragmented, green-space-deficient built city.\nThe building becomes a bridge between the artificial and natural realms.\n\nThe objective is to develop a mixed-use project integrating residential and public functions, thereby leveraging the opportunity to expand the existing housing stock and enhance the environment through the addition of communal spaces.\n\nThe building follows a terraced strip design that maximizes the density of garden homes. Furthermore, this morphology creates an urban atrium facing the city, inviting neighborhood residents to gather.\nThe open floor plan is achieved through the use of levels that create gathering spaces extending toward the park, resulting in a permeable building that is open to the city and nature.",
      es: "El edificio está situado en la nueva fachada urbana marcada por la Reserva Natural de Bogotá, la fragmentación urbana y la falta de espacios verdes en el tejido urbano.\nEl edificio actúa de esta manera como un puente entre lo artificial y lo natural.\n\nEl objetivo fue desarrollar un edificio de usos mixtos con el fin de integrar áreas residenciales y funciones de carácter público. Así se presenta la oportunidad de expandir la capacidad habitacional y mejorar el ambiente mediante la incorporación de espacios comunales.\n\nEl edificio está proyectado mediante un sistema aterrazado que logra maximizar la capacidad de casas con jardín. Asimismo, esta morfología crea un atrio urbano de cara a la ciudad que convoca al barrio y sus habitantes a reunirse mediante diferentes programas.\nEsta planta baja está pensada mediante el uso de niveles que crean diferentes espacios de encuentro que se extienden hacia el parque, esto resulta en un edificio permeable que se abre a la ciudad y la naturaleza.",
    },
    presentationImage: {
      src: "/mixed-use/00-cover.png",
      wide: false,
      width: 2481,
      height: 1754,
      rowSpan: 1,
      colSpan: 1,
    },
    imageCollage: [
      {
        src: "/mixed-use/01-implantation.png",
        wide: false,
        width: 4273,
        height: 2676,
      },
      {
        src: "/mixed-use/02-croquis.gif",
        wide: false,
        width: 2269,
        height: 1277,
      },
      {
        src: "/mixed-use/03-render.jpg",
        wide: true,
        width: 2274,
        height: 1516,
      },
      {
        src: "/mixed-use/04-render.jpg",
        wide: false,
        width: 2300,
        height: 1533,
      },
      {
        src: "/mixed-use/05-render.jpg",
        wide: false,
        width: 2481,
        height: 1754,
      },
      {
        src: "/mixed-use/06-floorplan.png",
        wide: true,
        width: 2481,
        height: 1754,
      },
      {
        src: "/mixed-use/07-section.png",
        wide: true,
        width: 2481,
        height: 1754,
      },
      {
        src: "/mixed-use/08-sections.png",
        wide: true,
        width: 2481,
        height: 1116,
      },
      {
        src: "/mixed-use/09-render.jpg",
        wide: true,
        width: 2481,
        height: 1754,
      },
      {
        src: "/mixed-use/10-dwellings.png",
        wide: true,
        width: 2481,
        height: 1754,
      },
      {
        src: "/mixed-use/11-typologys.png",
        wide: true,
        width: 2481,
        height: 1754,
      },
      {
        src: "/mixed-use/12-views.png",
        wide: true,
        width: 2481,
        height: 1396,
      },
    ],
    year: "2023",
    month: { en: "January", es: "Enero" },
    location: {
      en: "Buenos Aires, Argentina",
      es: "Buenos Aires, Argentina",
    },
    type: { en: "Academic", es: "Académico" },
  },
  {
    title: {
      en: "Urban Agriculture Centre",
      es: "Centro de Agricultura Urbana",
    },
    slug: "urban-agriculture",
    personal_role: {
      en: "Group project. Conceptualization, spatial design and technical drawings",
      es: "Proyecto grupal. Conceptualización, diseño espacial y producción de dibujos técnicos",
    },
    description: {
      en: "The Urban Agriculture Centre was designed to establish new relationships between people and food production methods addressing challenges such as long supply chains, food waste and shortage occurring in big cities.\n\nThe building becomes a flexible urban farm where vegetables are locally produced by encouraging community participation.\n\nIn order to achieve awareness of food production and consumption, various spaces and activities are created throughout the building. The ground level hosts shops, fairs and restaurants supplied by the produce grown in the gardens.\n\nAs the building develops vertically, various mixed-uses spaces such as training workshops, exhibition areas, and laboratories are integrated constantly with indoor and outdoor farming areas. Outdoor gardening spaces on balconies link together every level by making use of the natural light of the facade.",
      es: "El Centro de Agricultura Urbana fue diseñado para establecer nuevas relaciones entre las personas y la producción de alimentos en grandes ciudades caracterizadas por grandes desafíos tales como transporte, desperdicio de alimentos y escasez.\n\nEl edificio se convierte en una huerta urbana flexible donde los vegetales son producidos localmente mediante la participación de la comunidad del barrio.\n\nDe manera de visibilizar la cadena de alimentos y consumo, diferentes espacios y actividades están proyectadas a lo largo del edificio. En la planta baja se contempla un mercado, ferias y restaurantes abastecidos por la producción de vegetales del edificio.\n\nEl edificio se desenvuelve verticalmente mediante diferentes espacios tales como talleres, workshops, áreas de exhibición y laboratorios que están en constante contacto con huertas exteriores como interiores. Todos los niveles están conectados mediante huertas exteriores en los balcones aprovechando así al máximo la luz natural de la fachada.",
    },
    presentationImage: {
      src: "/urban-agriculture/00-caratula.png",
      wide: false,
      width: 4924,
      height: 3251,
      rowSpan: 1,
      colSpan: 1,
    },
    imageCollage: [
      {
        src: "/urban-agriculture/01-render-01.png",
        wide: true,
        width: 1280,
        height: 720,
      },
      {
        src: "/urban-agriculture/02-animation.gif",
        wide: true,
        width: 1439,
        height: 810,
      },
      {
        src: "/urban-agriculture/03-section-01.png",
        wide: true,
        width: 4963,
        height: 3508,
      },
      {
        src: "/urban-agriculture/04-section-02.png",
        wide: true,
        width: 4963,
        height: 3508,
      },
      {
        src: "/urban-agriculture/05-detail.jpg",
        wide: false,
        width: 2339,
        height: 3309,
      },
      {
        src: "/urban-agriculture/06-plans.png",
        wide: true,
        width: 4963,
        height: 3508,
      },
      {
        src: "/urban-agriculture/07-render-02.jpg",
        wide: true,
        width: 1280,
        height: 720,
      },
      {
        src: "/urban-agriculture/08-render-03.jpg",
        wide: true,
        width: 2481,
        height: 1754,
      },
    ],
    year: "2020",
    month: { en: "December", es: "Diciembre" },
    location: {
      en: "Buenos Aires, Argentina",
      es: "Buenos Aires, Argentina",
    },
    type: { en: "Academic", es: "Académico" },
  },
  {
    title: {
      en: "Pavilion",
      es: "Pabellón",
    },
    slug: "pavilion",
    personal_role: {
      en: "Group project. Conceptualization, spatial design and technical drawings",
      es: "Proyecto grupal. Conceptualización, diseño espacial y producción de dibujos técnicos",
    },
    description: {
      en: "The pavilion acts as a protective structure for the prehistoric ruins of the region, seamlessly integrating into an environment characterized by the natural slope of a forested area.\n\nConstructed with a wooden frame covered by a translucent polycarbonate skin, the building creates a bright and cohesive space flooded with natural light.\n\nThe design conveys a sense of weightlessness, allowing historical significance to take center stage.\n\nThe pavilion extends along a path that leads across several ruins surrounded by the park in which the building is located.",
      es: "El pabellón actúa como una estructura protectora para las ruinas prehistóricas de la región apenas interviniendo e integrándose a sus alrededores caracterizados por el desnivel natural del terreno.\n\nProyectado con una estructura de madera y cubierto por una piel translúcida de policarbonato, el edificio genera un espacio caracterizado por la luz natural indirecta.\n\nEl resultado del diseño genera una sensación de liviandad, dejando el protagonismo para la relevancia histórica de las ruinas.\n\nEl pabellón se extiende a lo largo de un sendero que atraviesa todas las ruinas rodeado del parque en donde está situado el edificio.",
    },
    presentationImage: {
      src: "/pavilion/caratula-01.png",
      wide: true,
      width: 3155,
      height: 2230,
      rowSpan: 2,
      colSpan: 2,
      rowStart: 2,
      colStart: 2,
    },
    imageCollage: [
      {
        src: "/pavilion/caratula-02.png",
        wide: false,
        width: 3155,
        height: 2230,
      },
      {
        src: "/pavilion/01-esquema.gif",
        wide: false,
        width: 1691,
        height: 951,
      },
      {
        src: "/pavilion/02-floorplan-section.png",
        wide: true,
        width: 3714,
        height: 2898,
      },
      {
        src: "/pavilion/03-render.jpg",
        wide: true,
        width: 1280,
        height: 720,
      },
    ],
    year: "2021",
    month: { en: "December", es: "Diciembre" },
    location: {
      en: "Buenos Aires, Argentina",
      es: "Buenos Aires, Argentina",
    },
    type: { en: "Academic", es: "Académico" },
  },
];
