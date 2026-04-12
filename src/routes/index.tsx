import { Link, createFileRoute } from "@tanstack/react-router";
import { projects, type Project } from "../data/projects";

export const Route = createFileRoute("/")({ component: App });

const colStartClass: Record<number, string> = {
  1: "md:col-start-1",
  2: "md:col-start-2",
  3: "md:col-start-3",
};
const rowStartClass: Record<number, string> = {
  1: "md:row-start-1",
  2: "md:row-start-2",
  3: "md:row-start-3",
  4: "md:row-start-4",
  5: "md:row-start-5",
  6: "md:row-start-6",
};
const colSpanClass: Record<number, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
};
const rowSpanClass: Record<number, string> = {
  1: "md:row-span-1",
  2: "md:row-span-2",
  3: "md:row-span-3",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$projectId"
      params={{ projectId: project.slug }}
      className="block group"
    >
      <article>
        <div className="overflow-hidden relative">
          <img
            src={project.presentationImage.src}
            alt=""
            className={`w-full  object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out`}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-300" />
        </div>
        <div className="mt-3 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[13px] font-semibold tracking-[0.01em] text-[#111]">
              {project.title}
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
    </Link>
  );
}

function App() {
  return (
    <div
      className="min-h-screen  text-[#111]"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {/* Projects grid */}
      <section className="px-6 md:px-12 pt-10 pb-48 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className={[
                "rise-in",
                project.presentationImage.colStart
                  ? (colStartClass[project.presentationImage.colStart] ?? "")
                  : "",
                project.presentationImage.rowStart
                  ? (rowStartClass[project.presentationImage.rowStart] ?? "")
                  : "",
                project.presentationImage.colSpan
                  ? (colSpanClass[project.presentationImage.colSpan] ?? "")
                  : "",
                project.presentationImage.rowSpan
                  ? (rowSpanClass[project.presentationImage.rowSpan] ?? "")
                  : "",
              ].join(" ")}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
