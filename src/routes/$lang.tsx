import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

const LANGS = ["en", "es", "nl"] as const;

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!LANGS.includes(params.lang as (typeof LANGS)[number])) {
      throw redirect({ to: "/$lang", params: { lang: "en" }, replace: true });
    }
  },
  component: () => <Outlet />,
});
