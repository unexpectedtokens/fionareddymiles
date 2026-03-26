import { Link, createFileRoute } from "@tanstack/react-router";
import { projects } from "../data/projects";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectDetail,
});

const collage = [
  { aspect: "aspect-[16/9]", span: "col-span-2" },
  { aspect: "aspect-[4/3]", span: "" },
  { aspect: "aspect-[3/4]", span: "" },
  { aspect: "aspect-[4/3]", span: "" },
  { aspect: "aspect-[16/9]", span: "col-span-2" },
  { aspect: "aspect-[1/1]", span: "" },
];

function ProjectDetail() {
  const { projectId } = Route.useParams();
  const project = projects.find((p) => p.slug === projectId);

  return (
    <div
      className="min-h-screen bg-[#f7f6f4] text-[#111]"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {/* Back button */}
      <div className="px-8 md:px-12 pt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#111] hover:text-[#555] hover:-translate-x-1 transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </Link>
      </div>

      {/* Header */}
      <header className="px-8 md:px-12 pt-10 pb-12">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <h1
            className="text-[36px] md:text-[52px] font-medium leading-tight"
            style={{ fontFamily: "Fraunces, Georgia, serif" }}
          >
            {project?.name ?? projectId}
          </h1>
          <div className="flex gap-8 text-[13px] text-[#888] pb-2">
            <span>{project?.location}</span>
            <span>{project?.type}</span>
            <span>{project?.year}</span>
          </div>
        </div>
      </header>

      {/* Description */}
      <section className="px-8 md:px-12 pb-16 grid md:grid-cols-2 gap-12">
        <p className="text-[15px] leading-relaxed text-[#444]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className="text-[15px] leading-relaxed text-[#444]">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.
        </p>
      </section>

      {/* Photo collage */}
      <section className="px-8 md:px-12 pb-32">
        <div className="grid grid-cols-3 gap-3">
          {collage.map((item, i) => (
            <div
              key={i}
              className={`rise-in ${item.span}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`w-full ${item.aspect} bg-[#d4d2d0]`} />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 inset-x-0 flex items-center gap-4 md:gap-8 px-5 md:px-12 py-4 md:py-12 bg-[#f7f6f4] z-50">
        <Link
          to="/"
          className="text-[13px] md:text-[21px] font-extrabold tracking-[0.05em] uppercase text-[#111] mr-4 md:mr-20"
        >
          Fiona Reddy Miles
        </Link>
        <Link
          to="/about"
          className="text-[13px] md:text-[20px] font-bold tracking-[0.04em] text-[#111] hover:text-[#555] hover:-translate-y-1 transition-all duration-200"
        >
          About
        </Link>
      </nav>
    </div>
  );
}
