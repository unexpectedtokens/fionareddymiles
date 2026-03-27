import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { projects } from "../data/projects";
import { Gallery } from "../components/gallery";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectDetail,
});

function ProjectDetail() {
  const { projectId } = Route.useParams();
  const project = projects.find((p) => p.slug === projectId);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen bg-[#fff] text-[#111]"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {/* Back button */}
      <div className="px-8 md:px-12 pt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#111] hover:text-[#555] hover:-translate-x-1 transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 3L5 8L10 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </Link>
      </div>

      {/* Main grid: 2/5 text | 3/5 collage */}
      <div className="px-8 md:px-12 pt-10 pb-32 grid grid-cols-4 gap-12 items-start">
        {/* Left: text */}
        <div className="col-span-4 md:col-span-1 flex flex-col gap-8">
          <header>
            <h1 className="text-[36px] md:text-[48px] font-medium leading-tight mb-4">
              {project?.title ?? projectId}
            </h1>
            <div className="flex flex-col gap-1 text-[13px] text-[#888]">
              <span>{project?.location}</span>
              <span>
                {project?.month} {project?.year}
              </span>
              <span>{project?.type}</span>
            </div>
          </header>

          <div className="flex flex-col gap-4">
            {project?.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-[14px] leading-relaxed text-[#444]">
                {para}
              </p>
            ))}
          </div>

          {project?.personal_role && (
            <div className="pt-4 border-t border-[#e0dedd]">
              <p className="text-[11px] uppercase tracking-widest text-[#aaa] mb-1">
                Role
              </p>
              <p className="text-[13px] text-[#555]">{project.personal_role}</p>
            </div>
          )}
        </div>

        {/* Right: collage */}
        <div className="col-span-4 md:col-span-3">
          <div className="grid grid-cols-2 gap-3">
            {(project?.imageCollage ?? []).map((item, i) => (
              <div
                key={i}
                className={`rise-in ${item.wide ? "col-span-2" : ""}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <img
                  src={item.src}
                  alt=""
                  className="w-full object-cover hover:opacity-90 transition-opacity"
                  style={{ cursor: "pointer" }}
                  onClick={() => setGalleryIndex(i)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery overlay */}
      {galleryIndex !== null && project && (
        <Gallery
          images={project.imageCollage}
          index={galleryIndex}
          onClose={() => setGalleryIndex(null)}
          onNavigate={setGalleryIndex}
        />
      )}
    </div>
  );
}
