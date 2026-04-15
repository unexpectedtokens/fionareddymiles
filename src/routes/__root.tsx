import {
  Link,
  createRootRoute,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Cursor } from "../components/cursor";
import { FaLinkedin } from "react-icons/fa";
import { LuGlobe } from "react-icons/lu";

export const Route = createRootRoute({
  component: Root,
});

const LANGS: { code: string; label: string }[] = [
  { code: "en", label: "english" },
  { code: "es", label: "spanish" },
];

function Root() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const params = useParams({ strict: false }) as { lang?: string };
  const lang = params.lang ?? "en";

  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isIndex = pathname === `/${lang}` || pathname === `/${lang}/`;

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
    setLangOpen(false);
    setScrolled(false);
  }, [pathname]);

  useEffect(() => {
    if (!isIndex) return;
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isIndex]);

  function switchLang(newLang: string) {
    setLangOpen(false);
    setMenuOpen(false);
    const newPath = pathname.replace(/^\/(en|es|nl)/, `/${newLang}`);
    navigate({ to: newPath });
  }

  return (
    <>
      <Cursor />
      <Outlet />

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col md:hidden">
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 p-2 text-[#111]"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M3 3L17 17M17 3L3 17"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Links */}
          <nav className="flex flex-col gap-8 px-8 mt-24 text-[28px] font-medium tracking-[0.02em] text-[#111]">
            <Link
              to="/$lang"
              params={{ lang }}
              onClick={() => setMenuOpen(false)}
              className="opacity-30"
            >
              Projects
            </Link>
            <Link
              to="/$lang"
              params={{ lang }}
              onClick={() => setMenuOpen(false)}
              className="opacity-30"
            >
              Timeline
            </Link>
            <Link
              to="/$lang/about"
              params={{ lang }}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </nav>

          {/* Bottom: LinkedIn + language */}
          <div className="mt-auto px-8 pb-16 flex items-center justify-between">
            <a
              href="https://www.linkedin.com/in/fiona-reddy-miles/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#111]"
            >
              <FaLinkedin size={20} />
              <span className="text-[15px]">LinkedIn</span>
            </a>
            <div className="flex gap-6">
              {LANGS.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => switchLang(code)}
                  className={`text-[15px] tracking-[0.02em] ${
                    lang === code ? "text-[#111] font-semibold" : "text-[#aaa]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <nav className={`fixed bottom-0 inset-x-0 bg-white z-50 py-4 md:py-12 transition-transform duration-300 ${isIndex && !scrolled ? "translate-y-full" : "translate-y-0"}`}>
        <div className="max-w-6xl mx-auto px-5 md:px-12 flex items-center gap-4 md:gap-8">
          <Link
            to="/$lang"
            params={{ lang }}
            className="text-[13px] font-extrabold md:text-[21px] tracking-[0.05em] uppercase text-[#111] mr-3 md:mr-20 this-is-the-title"
          >
            Fiona Reddy Miles
          </Link>

          {/* Desktop links */}
          <Link
            to="/$lang"
            params={{ lang }}
            className="hidden md:block opacity-30 md:text-[20px] tracking-[0.04em] text-[#111] hover:text-[#555]"
          >
            Projects
          </Link>
          <Link
            to="/$lang"
            params={{ lang }}
            className="hidden md:block opacity-30 md:text-[20px] tracking-[0.04em] text-[#111] hover:text-[#555]"
          >
            Timeline
          </Link>
          <Link
            to="/$lang/about"
            params={{ lang }}
            className="hidden md:block md:text-[20px] tracking-[0.04em] text-[#111] hover:text-[#555]"
          >
            about
          </Link>

          {/* Desktop right: globe + LinkedIn */}
          <div className="ml-auto hidden md:flex items-center gap-5">
            <div className="flex items-center gap-1 relative">
              {langOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangOpen(false)}
                  />
                  <div className="absolute z-50 bottom-full right-0 bg-white border border-[#e5e3e0] shadow-sm flex flex-col items-center justify-center">
                    {LANGS.map(({ code, label }) => (
                      <button
                        key={code}
                        onClick={() => switchLang(code)}
                        className={`px-5 py-2.5 text-left text-[13px] tracking-[0.04em] uppercase transition-colors ${
                          lang === code
                            ? "text-[#111] font-semibold"
                            : "text-[#aaa] hover:text-[#111]"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </>
              )}
              <button
                onClick={() => setLangOpen((o) => !o)}
                className={`inline-flex items-center gap-1.5 transition-colors ${langOpen ? "text-[#555]" : "text-[#111] hover:text-[#555]"}`}
                aria-label="Select language"
              >
                <LuGlobe size={19} />
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase">
                  {lang}
                </span>
              </button>
            </div>
            <a
              href="https://www.linkedin.com/in/fiona-reddy-miles/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111] hover:text-[#555] transition-colors"
            >
              <FaLinkedin size={19} />
            </a>
          </div>

          {/* Mobile right: globe + hamburger */}
          <div className="md:hidden ml-auto flex items-center gap-4">
            <div className="relative">
              {langOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangOpen(false)}
                  />
                  <div className="absolute z-50 bottom-full mb-3 right-0 bg-white border border-[#e5e3e0] shadow-sm flex flex-col">
                    {LANGS.map(({ code, label }) => (
                      <button
                        key={code}
                        onClick={() => switchLang(code)}
                        className={`px-5 py-2.5 text-left text-[13px] tracking-[0.04em] uppercase transition-colors ${
                          lang === code
                            ? "text-[#111] font-semibold"
                            : "text-[#aaa] hover:text-[#111]"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </>
              )}
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="inline-flex items-center gap-1 p-1 text-[#111]"
                aria-label="Select language"
              >
                <LuGlobe size={18} />
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase">
                  {lang}
                </span>
              </button>
            </div>
            <button
              onClick={() => setMenuOpen(true)}
              className="p-1 text-[#111]"
              aria-label="Open menu"
            >
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path
                  d="M0 1H20M0 7H20M0 13H20"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
