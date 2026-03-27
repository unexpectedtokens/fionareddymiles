import { Link, createFileRoute } from "@tanstack/react-router";
import { projects, type Project } from "../data/projects";

export const Route = createFileRoute("/")({ component: App });

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
            className={`w-full ${project.presentationImage.aspect} object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out`}
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
      className="min-h-screen bg-[#fff] text-[#111]"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {/* Projects grid */}
      <section className="px-8 md:px-12 pt-10 pb-48">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className={`rise-in ${project.presentationImage.wide ? "sm:col-span-2 lg:col-span-2" : ""}`}
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
