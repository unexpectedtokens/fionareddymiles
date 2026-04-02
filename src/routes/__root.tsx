import { Link, createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { Cursor } from "../components/cursor";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Cursor />
      <Outlet />
      <nav className="fixed bottom-0 inset-x-0 flex items-center gap-4 md:gap-8 px-5 md:px-12 py-4 md:py-12 bg-[#fff] z-50">
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
    </>
  );
}
