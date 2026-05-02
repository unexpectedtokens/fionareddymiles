import { Link, createFileRoute } from "@tanstack/react-router";
import { useTranslations } from "use-intl";

export const Route = createFileRoute("/$lang/about")({ component: About });

function About() {
  const { lang } = Route.useParams();
  const t = useTranslations("about");
  return (
    <div
      className="min-h-screen text-[#111]"
      style={{ fontFamily: '"Alte Haas Grotesk", sans-serif' }}
    >
      {/* Content */}
      <main className="px-6 md:px-12 pt-20 pb-48 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <div className="rise-in ">
            <img src="/about.jpeg" alt="Fiona Reddy Miles" />
          </div>

          {/* Bio */}
          <div style={{ animationDelay: "120ms" }}>
            <h1
              className="rise-in text-[36px] md:text-[48px] font-medium leading-tight mb-2"
              style={{ animationDelay: "120ms" }}
            >
              {t("name")}
            </h1>
            <p
              className="rise-in text-[13px] uppercase tracking-widest text-[#999] font-semibold mb-10"
              style={{ animationDelay: "240ms" }}
            >
              {t("role")}
            </p>

            <div className="space-y-5 text-[15px] leading-relaxed text-[#444]">
              <p className="rise-in" style={{ animationDelay: "360ms" }}>
                {t("bio1")}
              </p>
              <p className="rise-in" style={{ animationDelay: "480ms" }}>
                {t("bio2")}
              </p>
            </div>

            <div
              className="rise-in mt-12 pt-8 border-t border-[#e5e3e0] space-y-2"
              style={{ animationDelay: "600ms" }}
            >
              <p className="text-[13px] text-[#888]">{t("locations")}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
