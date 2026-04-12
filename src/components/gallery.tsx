import { useCallback, useEffect, useRef } from "react";

type GalleryImage = {
  src: string;
  width: number;
  height: number;
};

type Props = {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Gallery({ images, index, onClose, onNavigate }: Props) {
  const image = images[index];
  const touchStartX = useRef<number | null>(null);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, goNext, goPrev]);

  return (
    <div
      className="fixed inset-0 z-9000 flex items-center justify-center bg-white"
      onClick={onClose}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
          diff > 0 ? goNext() : goPrev();
        }
        touchStartX.current = null;
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 bg-white opacity-60 rounded-full p-1.5 md:p-2 shadow text-[#888] hover:text-[#111] transition-colors z-10"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M18 6L6 18M6 6l12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Prev arrow — hidden on mobile */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-3 md:left-8 bg-white rounded-full p-1.5 md:p-2 shadow text-[#888] hover:text-[#111] transition-colors z-10 opacity-60"
      >
        <svg
          width="20"
          height="20"
          className="md:w-8 md:h-8"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15 4L7 12l8 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Next arrow — hidden on mobile */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-3 md:right-8 bg-white rounded-full p-1.5 md:p-2 shadow text-[#888] hover:text-[#111] transition-colors z-10 opacity-60"
      >
        <svg
          width="20"
          height="20"
          className="md:w-8 md:h-8"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 4l8 8-8 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Image — never bigger than its natural size */}
      <img
        src={image.src}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="block"
        style={{
          maxWidth: image.width,
          maxHeight: window.innerHeight - 80,
          width: "100%",
          height: "auto",
        }}
      />

      {/* Counter */}
      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#aaa] text-[13px] font-medium tabular-nums">
        {index + 1} / {images.length}
      </span>
    </div>
  );
}
