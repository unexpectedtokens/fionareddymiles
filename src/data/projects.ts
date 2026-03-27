type Image = {
  aspect: string;
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
};

export const projects: Project[] = [
  {
    title: "Natural Reserve in Bogota",
    slug: "natural-reserve",
    personal_role: "Conceptualization, spatial design and technical drawings",
    description:
      "Under the concept of Urban Ecotones, the Natural Reserve is designed on the basis of the transitions existing from the built city to nature with minimal human intervention at the urban edge of Bogota, Colombia.\n\nThis gradual transition to nature begins within the existing relationships among neighborhoods fragmented by urban fabric, fostered by high-quality public green spaces.\n\nForests, wetlands, coastal areas, and surface soil are some of the characteristic ecosystems of this region of the country.\n\nThe reserve aims to protect these areas by promoting maintenance and interaction among local people, thereby preserving them through education and community commitment.\n\nConsidering the city's growth limit, a new urban front is proposed facing the Natural Reserve that connects the rest of the city.\n\nIn order to achieve a cityscape with a more diverse mix of functions, long-term planning is designed to blur the boundaries between residential areas, urban amenities and green spaces. Various facilities are projected from the new urban facade to the protected green spaces, promoting self-sufficiency for both the natural area and the city.",
    presentationImage: {
      src: "/bogota/01%20plano%20solo%20con%20lineas.jpg",
      aspect: "aspect-[16/9]",
      wide: false,
      width: 2481,
      height: 1754,
    },
    imageCollage: [
      {
        src: "/bogota/pu%20-%20reserva%20natural%20(1).jpg",
        aspect: "aspect-[3/1]",
        wide: true,
        width: 2394,
        height: 762,
      },
      {
        src: "/bogota/pu%20-%20reserva%20natural%20(5).jpg",
        aspect: "aspect-[5/2]",
        wide: true,
        width: 2403,
        height: 974,
      },
      {
        src: "/bogota/esquemas-gif.gif",
        aspect: "aspect-[5/4]",
        wide: false,
        width: 2115,
        height: 1716,
      },
      {
        src: "/bogota/pu%20-%20reserva%20natural%20(16).jpg",
        aspect: "aspect-[16/9]",
        wide: false,
        width: 1517,
        height: 890,
      },
      {
        src: "/bogota/00%20plano%20gral.jpg",
        aspect: "aspect-[4/3]",
        wide: "fiona_is_cute" === "fiona_is_cute",
        width: 2481,
        height: 1754,
      },
      {
        src: "/bogota/CORTE.png",
        aspect: "aspect-[3/1]",
        wide: true,
        width: 3309,
        height: 1093,
      },
      {
        src: "/bogota/esquemitas.jpg",
        aspect: "aspect-[4/3]",
        wide: false,
        width: 6300,
        height: 4455,
      },
      {
        src: "/bogota/iconos-distribucion.gif",
        aspect: "aspect-[4/5]",
        wide: false,
        width: 2139,
        height: 2673,
      },
      {
        src: "/bogota/imagen.jpg",
        aspect: "aspect-[4/1]",
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
      aspect: "aspect-[4/3]",
      wide: false,
      width: 2481,
      height: 1754,
    },
    imageCollage: [
      {
        src: "/mixed-use/01-implantation.png",
        aspect: "aspect-[3/2]",
        wide: false,
        width: 4273,
        height: 2676,
      },
      {
        src: "/mixed-use/02-croquis.gif",
        aspect: "aspect-[16/9]",
        wide: false,
        width: 2269,
        height: 1277,
      },
      {
        src: "/mixed-use/03-render.jpg",
        aspect: "aspect-[4/3]",
        wide: true,
        width: 2274,
        height: 1516,
      },
      {
        src: "/mixed-use/04-render.jpg",
        aspect: "aspect-[4/3]",
        wide: false,
        width: 2300,
        height: 1533,
      },
      {
        src: "/mixed-use/05-render.jpg",
        aspect: "aspect-[4/3]",
        wide: false,
        width: 2481,
        height: 1754,
      },
      {
        src: "/mixed-use/06-floorplan.png",
        aspect: "aspect-[4/3]",
        wide: true,
        width: 2481,
        height: 1754,
      },
      {
        src: "/mixed-use/07-section.png",
        aspect: "aspect-[4/1]",
        wide: true,
        width: 2481,
        height: 1754,
      },
      {
        src: "/mixed-use/08-sections.png",
        aspect: "aspect-[3/1]",
        wide: true,
        width: 2481,
        height: 1116,
      },
      {
        src: "/mixed-use/09-render.jpg",
        aspect: "aspect-[4/3]",
        wide: true,
        width: 2481,
        height: 1754,
      },
      {
        src: "/mixed-use/10-dwellings.png",
        aspect: "aspect-[5/1]",
        wide: true,
        width: 2481,
        height: 1754,
      },
      {
        src: "/mixed-use/11-typologys.png",
        aspect: "aspect-[4/3]",
        wide: true,
        width: 2481,
        height: 1754,
      },
      {
        src: "/mixed-use/12-views.png",
        aspect: "aspect-[5/1]",
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
];
