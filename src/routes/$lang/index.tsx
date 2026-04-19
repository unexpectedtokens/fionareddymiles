import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "use-intl";
import { projects, type Project } from "../../data/projects";
import type { Locale } from "../../i18n";

export const Route = createFileRoute("/$lang/")({ component: App });

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

function ProjectGridCell({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        visible ? "rise-in" : "",
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
      style={{
        animationDelay: `${index * 120}ms`,
        opacity: visible ? undefined : 0,
      }}
    >
      <ProjectCard project={project} />
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { lang } = Route.useParams();
  const locale = lang as Locale;
  return (
    <Link
      to="/$lang/projects/$projectId"
      params={{ lang, projectId: project.slug }}
      className="block group h-full"
    >
      <article className="h-full flex flex-col">
        <div className="overflow-hidden relative flex-1">
          <img
            src={project.presentationImage.src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-300" />
        </div>
        <div className="mt-3 flex items-start justify-between gap-4 shrink-0">
          <div>
            <h2 className="text-[13px] font-semibold tracking-[0.01em] text-[#111]">
              {project.title[locale]}
            </h2>
          </div>
        </div>
      </article>
    </Link>
  );
}

function App() {
  const t = useTranslations("home");

  function scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      className="min-h-screen text-[#111]"
      style={{ fontFamily: '"Alte Haas Grotesk", sans-serif' }}
    >
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/caratula.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover md:scale-105 scale-110"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center text-center text-white">
          <h1 className="text-[32px] md:text-[52px] font-extrabold tracking-[0.05em] uppercase">
            {t("name")}
          </h1>
          <p className="mt-2 text-[14px] md:text-[18px] tracking-[0.18em] uppercase font-light text-black">
            {t("subtitle")}
          </p>
          <button
            onClick={scrollToProjects}
            aria-label={t("scrollToProjects")}
            className="mt-10 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="animate-bounce"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>

      <section
        id="projects"
        className="px-6 md:px-12 pt-10 pb-48 max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 auto-rows-[320px]">
          {projects.map((project, i) => (
            <ProjectGridCell key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
