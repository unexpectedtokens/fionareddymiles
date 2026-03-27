import { useCallback, useEffect } from "react";

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
      className="fixed inset-0 z-[9000] flex items-center justify-center bg-white"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-[#888] hover:text-[#111] transition-colors z-10"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Prev arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-4 md:left-8 text-[#888] hover:text-[#111] transition-colors z-10"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M15 4L7 12l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-4 md:right-8 text-[#888] hover:text-[#111] transition-colors z-10"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Image — never bigger than its natural size */}
      <img
        src={image.src}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="block"
        style={{
          maxWidth: Math.min(image.width, window.innerWidth - 120),
          maxHeight: window.innerHeight - 80,
          width: "auto",
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
