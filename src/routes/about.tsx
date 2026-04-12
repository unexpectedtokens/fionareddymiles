import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return (
    <div
      className="min-h-screen text-[#111] about-bg"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {/* Back button */}
      <div className="px-6 md:px-12 pt-10 max-w-6xl mx-auto">
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

      {/* Content */}
      <main className="px-6 md:px-12 pt-10 pb-48 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <div className="rise-in">
            <img src="/about.jpeg" alt="Fiona Reddy Miles" />
          </div>

          {/* Bio */}
          <div className="rise-in" style={{ animationDelay: "120ms" }}>
            <h1 className="text-[36px] md:text-[48px] font-medium leading-tight mb-2">
              Fiona Reddy Miles
            </h1>
            <p className="text-[13px] uppercase tracking-widest text-[#999] font-semibold mb-10">
              Architect
            </p>

            <div className="space-y-5 text-[15px] leading-relaxed text-[#444]">
              <p>
                Fiona Reddy Miles is a Netherlands-based architect whose
                practice spans residential, cultural, and public commissions
                across South America and Europe. Her work is defined by a
                careful attention to material honesty, the rhythms of local
                climate, and the social life of buildings.
              </p>
              <p>
                Before establishing her own studio, she worked with Sposito in
                Buenos Aires. She holds the title of Architect from UBA.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[#e5e3e0] space-y-2">
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
