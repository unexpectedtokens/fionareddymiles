type Image = {
  src: string;
  wide: boolean;
  width: number;
  height: number;
};

export type Project = {
  title: string;
  slug: string;
  personal_role: string;
  description: string;
  imageCollage: Image[];
  presentationImage: Image;
  year: string;
  month: string;
  location: string;
  type: string;
  shouldBeFeatured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Natural Reserve in Bogota",
    slug: "natural-reserve",
    personal_role: "Conceptualization, spatial design and technical drawings",
    description:
      "Under the concept of Urban Ecotones, the Natural Reserve is designed on the basis of the transitions existing from the built city to nature with minimal human intervention at the urban edge of Bogota, Colombia.\n\nThis gradual transition to nature begins within the existing relationships among neighborhoods fragmented by urban fabric, fostered by high-quality public green spaces.\n\nForests, wetlands, coastal areas, and surface soil are some of the characteristic ecosystems of this region of the country.\n\nThe reserve aims to protect these areas by promoting maintenance and interaction among local people, thereby preserving them through education and community commitment.\n\nConsidering the city's growth limit, a new urban front is proposed facing the Natural Reserve that connects the rest of the city.\n\nIn order to achieve a cityscape with a more diverse mix of functions, long-term planning is designed to blur the boundaries between residential areas, urban amenities and green spaces. Various facilities are projected from the new urban facade to the protected green spaces, promoting self-sufficiency for both the natural area and the city.",
    presentationImage: {
      src: "/bogota/caratula-01.jpg",
      wide: false,
      width: 2481,
      height: 1754,
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
    month: "July",
    location: "Buenos Aires, Argentina",
    type: "Academic",
  },
  {
    title: "Mixed-Use Building",
    slug: "mixed-use-building",
    personal_role: "Conceptualization, spatial design and technical drawings",
    description:
      "The building is situated in the new urban facade outlined by the Natural Reserve of Bogota and the fragmented, green-space-deficient built city.\nThe building becomes a bridge between the artificial and natural realms.\n\nThe objective is to develop a mixed-use project integrating residential and public functions, thereby leveraging the opportunity to expand the existing housing stock and enhance the environment through the addition of communal spaces.\n\nThe building follows a terraced strip design that maximizes the density of garden homes. Furthermore, this morphology creates an urban atrium facing the city, inviting neighborhood residents to gather.\nThe open floor plan is achieved through the use of levels that create gathering spaces extending toward the park, resulting in a permeable building that is open to the city and nature.",
    presentationImage: {
      src: "/mixed-use/00-cover.png",
      wide: false,
      width: 2481,
      height: 1754,
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
    month: "January",
    location: "Buenos Aires, Argentina",
    type: "Academic",
  },
  {
    title: "Urban Agriculture Centre",
    slug: "urban-agriculture",
    personal_role: "Conceptualization, spatial design and technical drawings",
    description:
      "The Urban Agriculture Centre was designed to establish new relationships between people and food production methods addressing challenges such as long supply chains, food waste and shortage occurring in big cities.\n\nThe building becomes a flexible urban farm where vegetables are locally produced by encouraging community participation.\n\nIn order to achieve awareness of food production and consumption, various spaces and activities are created throughout the building. The ground level hosts shops, fairs and restaurants supplied by the produce grown in the gardens.\n\nAs the building develops vertically, various mixed-uses spaces such as training workshops, exhibition areas, and laboratories are integrated constantly with indoor and outdoor farming areas. Outdoor gardening spaces on balconies link together every level by making use of the natural light of the facade.",
    presentationImage: {
      src: "/urban-agriculture/00-caratula.png",
      wide: false,
      width: 4924,
      height: 3251,
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
    month: "December",
    location: "Buenos Aires, Argentina",
    type: "Academic",
  },
  {
    title: "Pavilion",
    slug: "pavilion",
    personal_role: "Conceptualization, spatial design and technical drawings",
    description:
      "The pavilion acts as a protective structure for the prehistoric ruins of the region, seamlessly integrating into an environment characterized by the natural slope of a forested area.\n\nConstructed with a wooden frame covered by a translucent polycarbonate skin, the building creates a bright and cohesive space flooded with natural light.\n\nThe design conveys a sense of weightlessness, allowing historical significance to take center stage.\n\nThe pavilion extends along a path that leads across several ruins surrounded by the park in which the building is located.",
    presentationImage: {
      src: "/pavilion/caratula-01.png",
      wide: false,
      width: 3155,
      height: 2230,
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
    month: "December",
    location: "Buenos Aires, Argentina",
    type: "Academic",
  },
];
