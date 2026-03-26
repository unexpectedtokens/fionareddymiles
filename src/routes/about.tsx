import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({ component: About });

function About() {
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
      <main className="px-8 md:px-12 pt-10 pb-48">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <div className="rise-in">
            <div className="w-full aspect-3/4 bg-[#d4d2d0]" />
          </div>

          {/* Bio */}
          <div className="rise-in" style={{ animationDelay: "120ms" }}>
            <h1
              className="text-[36px] md:text-[48px] font-medium leading-tight mb-2"
              style={{ fontFamily: "Fraunces, Georgia, serif" }}
            >
              Fiona Reddy Miles
            </h1>
            <p className="text-[13px] uppercase tracking-widest text-[#999] font-semibold mb-10">
              Architect & Principal
            </p>

            <div className="space-y-5 text-[15px] leading-relaxed text-[#444]">
              <p>
                Fiona Reddy Miles is a Cape Town-based architect whose practice
                spans residential, cultural, and public commissions across
                Africa and Europe. Her work is defined by a careful attention to
                material honesty, the rhythms of local climate, and the social
                life of buildings.
              </p>
              <p>
                Before establishing her own studio, she worked with Adjaye
                Associates in London and Heatherwick Studio. She holds a Master
                of Architecture from the Architectural Association and a
                Bachelor of Science from the University of Cape Town.
              </p>
              <p>
                Her projects have been recognised by the RIBA, shortlisted for
                the Aga Khan Award for Architecture, and published in Dezeen,
                Wallpaper*, and Architectural Review.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[#e5e3e0] space-y-2">
              <p className="text-[13px] text-[#888]">Cape Town · Lisbon</p>
              <p className="text-[13px] text-[#888]">
                studio@fionareddymiles.com
              </p>
            </div>
          </div>
        </div>
      </main>

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
