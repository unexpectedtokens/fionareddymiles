import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`;
        ref.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div id="custom-cursor" ref={ref} />;
}

export const Route = createFileRoute("/")({ component: App });

const projects = [
  {
    name: "Volta Residence",
    location: "Cape Town, ZA",
    year: "2024",
    type: "Residential",
    aspect: "aspect-[4/3]",
    wide: false,
  },
  {
    name: "Mineral Pavilion",
    location: "Nairobi, KE",
    year: "2023",
    type: "Cultural",
    aspect: "aspect-[3/4]",
    wide: false,
  },
  {
    name: "Chalk House",
    location: "Lisbon, PT",
    year: "2023",
    type: "Residential",
    aspect: "aspect-[3/4]",
    wide: false,
  },
  {
    name: "The Fold",
    location: "Oslo, NO",
    year: "2022",
    type: "Public",
    aspect: "aspect-[16/9]",
    wide: true,
  },
  {
    name: "Arid Studio",
    location: "Marrakech, MA",
    year: "2022",
    type: "Commercial",
    aspect: "aspect-[4/3]",
    wide: false,
  },
  {
    name: "Terraced Gardens",
    location: "Porto, PT",
    year: "2021",
    type: "Residential",
    aspect: "aspect-[4/3]",
    wide: false,
  },
  {
    name: "Basalt Hall",
    location: "Reykjavík, IS",
    year: "2020",
    type: "Cultural",
    aspect: "aspect-[3/4]",
    wide: false,
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group cursor-pointer">
      <div className="overflow-hidden bg-[#e0dedd] relative">
        <div
          className={`w-full ${project.aspect} bg-[#d4d2d0] group-hover:scale-[1.02] transition-transform duration-500 ease-out`}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-300" />
      </div>
      <div className="mt-3 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[13px] font-semibold tracking-[0.01em] text-[#111]">
            {project.name}
          </h2>
          <p className="text-[12px] text-[#888] mt-0.5">{project.location}</p>
        </div>
        <div className="text-right shrink-0">
          <span className="text-[11px] text-[#aaa] uppercase tracking-[0.08em]">
            {project.type}
          </span>
          <p className="text-[12px] text-[#aaa] mt-0.5">{project.year}</p>
        </div>
      </div>
    </article>
  );
}

function App() {
  return (
    <div
      className="min-h-screen bg-[#f7f6f4] text-[#111]"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      <Cursor />
      {/* Bottom nav */}
      <nav className="fixed bottom-0 inset-x-0 flex items-center gap-8 px-8 md:px-12 py-12 bg-[#f7f6f4] z-50">
        <p className="text-[21px] font-extrabold tracking-[0.05em] uppercase text-[#111] mr-20">
          Fiona Reddy Miles
        </p>
        <a
          href="#projects"
          className="text-[20px] font-bold tracking-[0.04em] text-[#111] no-underline hover:text-[#555] hover:-translate-y-1 transition-all duration-200"
          style={{ color: "#111" }}
        >
          Projects
        </a>
        <a
          href="#about"
          className="text-[20px] font-bold tracking-[0.04em] no-underline hover:text-[#555] hover:-translate-y-1 transition-transform"
          style={{ color: "#111" }}
        >
          About
        </a>
      </nav>

      {/* Projects grid */}
      <section id="projects" className="px-8 md:px-12 pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`rise-in ${project.wide ? "sm:col-span-2 lg:col-span-2" : ""}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-20 md:px-12 py-8 pb-24 border-[#e5e3e0] flex items-center justify-between"></footer>
    </div>
  );
}
