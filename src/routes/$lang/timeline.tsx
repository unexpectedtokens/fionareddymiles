import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "use-intl";
import { timeline, type TimelineEntry } from "../../data/timeline";
import type { Locale } from "../../i18n";
import { PiPlus } from "react-icons/pi";

export const Route = createFileRoute("/$lang/timeline")({
  component: TimelinePage,
});

const BAR_COLORS = ["#4a4a4a", "#3a3a3a", "#5c5c5c", "#7a7a7a", "#4d4d4d"];

type PackedEntry = {
  entry: TimelineEntry;
  row: number;
  startYear: number;
  endYear: number;
  displayStart: number;
  displayEnd: number | "current";
  color: string;
};

function packRows(
  entries: TimelineEntry[],
  currentYear: number,
): PackedEntry[] {
  const sorted = [...entries].sort((a, b) => {
    if (a.start !== b.start) return a.start - b.start;
    const aEnd = a.end === "current" ? currentYear : a.end;
    const bEnd = b.end === "current" ? currentYear : b.end;
    return aEnd - bEnd;
  });

  const rowEnds: number[] = [];
  const placed: PackedEntry[] = [];

  sorted.forEach((entry, i) => {
    const endYear = entry.end === "current" ? currentYear : entry.end;
    let rowIndex = rowEnds.findIndex((e) => e <= entry.start);
    if (rowIndex === -1) {
      rowEnds.push(endYear);
      rowIndex = rowEnds.length - 1;
    } else {
      rowEnds[rowIndex] = endYear;
    }
    placed.push({
      entry,
      row: rowIndex,
      startYear: entry.start,
      endYear,
      displayStart: entry.displayStart ?? Math.round(entry.start),
      displayEnd:
        entry.displayEnd ??
        (entry.end === "current" ? "current" : Math.round(entry.end)),
      color: BAR_COLORS[i % BAR_COLORS.length],
    });
  });

  return placed;
}

function TimelinePage() {
  const { lang } = Route.useParams();
  const locale = lang as Locale;
  const t = useTranslations("timeline");

  const currentYear = new Date().getFullYear();

  const { packed, minYear, maxYear, rowCount } = useMemo(() => {
    const packed = packRows(timeline, currentYear);
    const minYear = Math.min(...packed.map((p) => p.startYear));
    const maxYear = Math.max(currentYear, ...packed.map((p) => p.endYear));
    const rowCount = packed.reduce((m, p) => Math.max(m, p.row + 1), 0);
    return { packed, minYear, maxYear, rowCount };
  }, [currentYear]);

  const years = useMemo(() => {
    const out: number[] = [];
    for (let y = minYear; y <= maxYear; y++) out.push(y);
    return out;
  }, [minYear, maxYear]);

  const span = Math.max(1, maxYear - minYear);
  const pct = (year: number) => ((year - minYear) / span) * 100;

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = packed.find((p) => p.entry.id === selectedId) ?? null;

  useEffect(() => {
    if (!selectedId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedId]);

  const ROW_HEIGHT = 56;
  const ROW_GAP = 2;
  const AXIS_HEIGHT = 40;
  const chartHeight =
    AXIS_HEIGHT + rowCount * ROW_HEIGHT + (rowCount - 1) * ROW_GAP;

  return (
    <div
      className="min-h-screen text-[#111]"
      style={{ fontFamily: '"Alte Haas Grotesk", sans-serif' }}
    >
      <main className="px-6 md:px-12 py-48 max-w-8xl mx-auto">
        <h1 className="rise-in text-[36px] md:text-[48px] font-medium leading-tight mb-50">
          {t("title")}
        </h1>

        <div
          className="rise-in no-scrollbar overflow-x-auto md:overflow-x-visible -mx-6 md:mx-0 px-6 md:px-0"
          style={{ animationDelay: "240ms" }}
        >
          <div
            className="relative md:min-w-0!"
            style={{
              height: chartHeight,
              minWidth: 720,
            }}
          >
            {/* Year ticks / axis */}
            <div
              className="absolute left-0 right-0 top-0 flex"
              style={{ height: AXIS_HEIGHT }}
            >
              {years.map((y) => (
                <div
                  key={y}
                  className="absolute top-0 bottom-0 flex flex-col items-center"
                  style={{
                    left: `${pct(y)}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <span className="text-[11px] font-semibold text-[#888] tabular-nums">
                    {y === currentYear ? `${y}` : y}
                  </span>
                  <div className="w-px flex-1 bg-[#e5e3e0] mt-1" />
                </div>
              ))}
            </div>

            {/* Horizontal grid line under axis */}
            <div
              className="absolute left-0 right-0"
              style={{
                top: AXIS_HEIGHT - 1,
                height: 1,
                background: "#e5e3e0",
              }}
            />

            {/* Row background guides */}
            {Array.from({ length: rowCount }).map((_, i) => (
              <div
                key={i}
                className="absolute left-0 right-0"
                style={{
                  top:
                    AXIS_HEIGHT + i * (ROW_HEIGHT + ROW_GAP) + ROW_HEIGHT - 1,
                  height: 1,
                  background: "#f1efec",
                }}
              />
            ))}

            {/* Bars */}
            {packed.map((p) => {
              const left = pct(p.startYear);
              const width = pct(p.endYear) - pct(p.startYear);
              const top = AXIS_HEIGHT + p.row * (ROW_HEIGHT + ROW_GAP);
              const isOpen = p.entry.id === selectedId;
              return (
                <button
                  key={p.entry.id}
                  type="button"
                  onClick={() => setSelectedId(p.entry.id)}
                  className="absolute justify-between flex text transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111] focus-visible:ring-offset-2"
                  style={{
                    left: `${left}%`,
                    width: `calc(${width}% - 4px)`,
                    top,
                    height: ROW_HEIGHT,
                    background: p.color,
                    color: "#fff",
                    borderRadius: 4,
                    padding: "8px 12px",
                    boxShadow: isOpen
                      ? "0 8px 20px rgba(0,0,0,0.18)"
                      : "0 2px 6px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="flex flex-col items-start">
                    <div className="text-[12px] font-semibold leading-tight truncate">
                      {p.entry.title[locale]}
                    </div>
                    <div className="text-[10px] opacity-80 leading-tight truncate tabular-nums">
                      {p.displayStart}–
                      {p.displayEnd === "current" ? t("current") : p.displayEnd}
                    </div>
                  </div>
                  <div className="flex flex-col justify-end">
                    <PiPlus />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {selected && (
        <TimelineModal
          packed={selected}
          locale={locale}
          onClose={() => setSelectedId(null)}
          labels={{
            current: t("current"),
            visitWebsite: t("visitWebsite"),
            close: t("close"),
            location: t("location"),
          }}
        />
      )}
    </div>
  );
}

function TimelineModal({
  packed,
  locale,
  onClose,
  labels,
}: {
  packed: PackedEntry;
  locale: Locale;
  onClose: () => void;
  labels: {
    current: string;
    visitWebsite: string;
    close: string;
    location: string;
  };
}) {
  const { entry, displayStart, displayEnd } = packed;
  const endLabel = displayEnd === "current" ? labels.current : displayEnd;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-51 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="relative bg-white w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={labels.close}
          className="absolute top-4 right-4 text-[#111] hover:text-[#555] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 5L15 15M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="p-6 md:p-10">
          <p className="text-[12px] uppercase tracking-widest text-[#999] font-semibold tabular-nums">
            {displayStart} — {endLabel}
          </p>
          <h2 className="mt-2 text-[24px] md:text-[32px] font-medium leading-tight">
            {entry.title[locale]}
          </h2>
          <p className="mt-1 text-[14px] text-[#444]">
            {entry.organization[locale]}
          </p>
          {entry.location[locale] && (
            <p className="text-[13px] text-[#888]">{entry.location[locale]}</p>
          )}

          {entry.bullets && entry.bullets.length > 0 && (
            <ul className="mt-6 space-y-2 text-[14px] leading-relaxed text-[#333] list-disc pl-5">
              {entry.bullets.map((b, i) => (
                <li key={i}>{b[locale]}</li>
              ))}
            </ul>
          )}

          {entry.subEntries && entry.subEntries.length > 0 && (
            <div className="mt-6 space-y-6">
              {entry.subEntries.map((sub, i) => (
                <div
                  key={i}
                  className="pt-5 border-t border-[#e5e3e0] first:border-t-0 first:pt-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[16px] font-semibold text-[#111] min-w-0 flex-1">
                      {sub.title[locale]}
                    </h3>
                    {sub.link && (
                      <a
                        href={sub.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 bg-black text-white text-[12px] font-semibold px-3 py-2 rounded-sm hover:bg-[#333] transition-colors shrink-0"
                      >
                        {labels.visitWebsite}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M3 9L9 3M9 3H4M9 3V8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                  <ul className="mt-3 space-y-2 text-[14px] leading-relaxed text-[#333] list-disc pl-5">
                    {sub.bullets.map((b, j) => (
                      <li key={j}>{b[locale]}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {entry.link && (
            <div className="mt-8">
              <a
                href={entry.link}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 bg-black text-white text-[13px] font-semibold px-4 py-3 rounded-sm hover:bg-[#333] transition-colors"
              >
                {labels.visitWebsite}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3.5 10.5L10.5 3.5M10.5 3.5H5M10.5 3.5V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
