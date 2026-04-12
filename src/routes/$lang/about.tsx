import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/about")({ component: About });

function About() {
  const { lang } = Route.useParams();
  return (
    <div
      className="min-h-screen text-[#111]"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {/* Back button */}
      <div className="px-6 md:px-12 pt-10 max-w-6xl mx-auto">
        <Link
          to="/$lang"
          params={{ lang }}
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

      {/* Content */}
      <main className="px-6 md:px-12 pt-10 pb-48 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <div className="rise-in">
            <img src="/about.jpeg" alt="Fiona Reddy Miles" />
          </div>

          {/* Bio */}
          <div style={{ animationDelay: "120ms" }}>
            <h1
              className="rise-in text-[36px] md:text-[48px] font-medium leading-tight mb-2"
              style={{ animationDelay: "120ms" }}
            >
              Fiona Reddy Miles
            </h1>
            <p
              className="rise-in text-[13px] uppercase tracking-widest text-[#999] font-semibold mb-10"
              style={{ animationDelay: "240ms" }}
            >
              Architect
            </p>

            <div className="space-y-5 text-[15px] leading-relaxed text-[#444]">
              <p className="rise-in" style={{ animationDelay: "360ms" }}>
                Architect focused on design development and project
                coordination, with experience across a wide range of scale. From
                residential houses and apartment complexes to institutional
                buildings. My work focuses on coordinating technical
                information, assessing construction processes on site and
                translating design concepts to clear buildable solutions.
                Designing experience in concept development and technical
                drawing allows me to engage with projects from early stages
                through to execution.
              </p>
              <p className="rise-in" style={{ animationDelay: "480ms" }}>
                Interested in the process of how ideas evolve through drawings,
                technical decisions, and coordination processes until they
                become a built space. I believe architecture is not only a
                creative discipline, but a collaborative process where
                information, systems, and people come together to take shape.
              </p>
            </div>

            <div
              className="rise-in mt-12 pt-8 border-t border-[#e5e3e0] space-y-2"
              style={{ animationDelay: "600ms" }}
            >
              <p className="text-[13px] text-[#888]">
                Buenos Aires · Amsterdam
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
