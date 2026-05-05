import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslations } from "use-intl";
import { projects } from "../../data/projects";
import { Gallery } from "../../components/gallery";
import type { Locale } from "../../i18n";

export const Route = createFileRoute("/$lang/projects/$projectId")({
  component: ProjectDetail,
});

function ProjectDetail() {
  const { lang, projectId } = Route.useParams();
  const locale = lang as Locale;
  const t = useTranslations("project");
  const project = projects.find((p) => p.slug === projectId);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen bg-white text-[#111]"
      style={{ fontFamily: '"Alte Haas Grotesk", sans-serif' }}
    >
      {/* Back button */}
      <div className="px-6 md:px-12 pt-10 max-w-8xl mx-auto">
        <Link
          to="/$lang"
          params={{ lang }}
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#111] hover:text-[#555] hover:-translate-x-1 transition-transform duration-200"
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
          {t("back")}
        </Link>
      </div>

      {/* Main grid: 2/5 text | 3/5 collage */}
      <div className="px-6 md:px-12 pt-10 pb-32 grid grid-cols-4 gap-12 items-start max-w-8xl mx-auto">
        {/* Left: text */}
        <div className="col-span-4 xl:col-span-1 flex flex-col gap-8">
          <header>
            <h1 className="text-[36px] md:text-[48px] font-medium leading-tight mb-4">
              {project?.title[locale] ?? projectId}
            </h1>
            <div className="flex flex-col gap-1 text-[13px] text-[#888]">
              <span>
                {t("location")}:{" "}
                <span className="font-bold">{project?.location[locale]}</span>
              </span>
              <span>
                {t("year")}: <span className="font-bold">{project?.year}</span>
              </span>
              <span>
                {t("type")}:{" "}
                <span className="font-bold">{project?.type[locale]}</span>
              </span>
              {project?.surface && (
                <span>
                  {t("surface")}:{" "}
                  <span className="font-bold">{project.surface}</span>
                </span>
              )}
            </div>
          </header>

          <div className="flex flex-col gap-4">
            {project?.description[locale].split("\n\n").map((para, i) => (
              <p key={i} className="text-[14px] leading-relaxed text-[#444]">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Right: collage */}
        <div className="col-span-4 xl:col-span-3">
          <div className="grid grid-cols-2 gap-3">
            {(project?.imageCollage ?? []).map((item, i) => (
              <div
                key={i}
                className={`rise-in ${item.wide || item.fullHeight ? "col-span-2" : ""} ${item.fullHeight ? "flex items-center" : ""}`}
                style={{
                  animationDelay: `${i * 80}ms`,
                  ...(item.fullHeight && { minHeight: "100vh" }),
                }}
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
