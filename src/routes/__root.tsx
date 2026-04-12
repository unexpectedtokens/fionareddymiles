import {
  Link,
  createRootRoute,
  Outlet,
  useLocation,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Cursor } from "../components/cursor";
import { FaLinkedin } from "react-icons/fa";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [pathname]);

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
              to="/"
              onClick={() => setMenuOpen(false)}
              className="opacity-30"
            >
              Projects
            </Link>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="opacity-30"
            >
              Timeline
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </nav>

          {/* LinkedIn at bottom */}
          <div className="mt-auto px-8 pb-16">
            <a
              href="https://www.linkedin.com/in/fiona-reddy-miles/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#111]"
            >
              <FaLinkedin size={20} />
              <span className="text-[15px]">LinkedIn</span>
            </a>
          </div>
        </div>
      )}

      <nav className="fixed bottom-0 inset-x-0 bg-white z-50 py-4 md:py-12">
        <div className="max-w-6xl mx-auto px-5 md:px-12 flex items-center gap-4 md:gap-8 relative">
          <Link
            to="/"
            className="text-[13px] font-extrabold md:text-[21px] tracking-[0.05em] uppercase text-[#111] mr-3 md:mr-20 this-is-the-title"
          >
            Fiona Reddy Miles
          </Link>

          {/* Desktop links */}
          <Link
            to="/"
            className="hidden md:block opacity-30 md:text-[20px] tracking-[0.04em] text-[#111] hover:text-[#555]"
          >
            Projects
          </Link>
          <Link
            to="/"
            className="hidden md:block opacity-30 md:text-[20px] tracking-[0.04em] text-[#111] hover:text-[#555]"
          >
            Timeline
          </Link>
          <Link
            to="/about"
            className="hidden md:block md:text-[20px] tracking-[0.04em] text-[#111] hover:text-[#555]"
          >
            about
          </Link>

          {/* Desktop LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fiona-reddy-miles/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-5 md:right-12 text-[#111] hover:text-[#555] transition-colors hidden md:block"
          >
            <FaLinkedin size={19} />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden absolute right-5 p-1 text-[#111]"
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
      </nav>
    </>
  );
}
