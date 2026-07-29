"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { galleryContent } from "@/content/gallery";

export default function GalleryClient() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null,
  );
  const imageCount = galleryContent.images.length;

  const closeLightbox = useCallback(() => setCurrentImageIndex(null), []);
  const showNext = useCallback(() => {
    setCurrentImageIndex((current) =>
      current === null ? 0 : (current + 1) % imageCount,
    );
  }, [imageCount]);
  const showPrevious = useCallback(() => {
    setCurrentImageIndex((current) =>
      current === null ? 0 : (current - 1 + imageCount) % imageCount,
    );
  }, [imageCount]);

  useEffect(() => {
    if (currentImageIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeLightbox, currentImageIndex, showNext, showPrevious]);

  const currentImage =
    currentImageIndex === null
      ? null
      : galleryContent.images[currentImageIndex];

  return (
    <>
      <div className="columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
        {galleryContent.images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setCurrentImageIndex(index)}
            className="group block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] border-4 border-[var(--color-paper)] bg-white text-left shadow-xl"
            aria-label={`Open image ${index + 1}: ${image.alt}`}
            aria-haspopup="dialog"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.035]"
            />
          </button>
        ))}
      </div>

      {currentImage && currentImageIndex !== null ? (
        <dialog
          open
          className="fixed inset-0 z-[100] m-0 flex h-screen max-h-none w-screen max-w-none items-center justify-center border-0 bg-black/95 p-4"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full bg-brand-primary p-2 text-white hover:bg-brand-primary-dark"
            aria-label="Close lightbox"
            autoFocus
          >
            <X size={30} />
          </button>
          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-2 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-brand-primary sm:left-5"
            aria-label="Previous image"
          >
            <ChevronLeft size={38} />
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-2 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-brand-primary sm:right-5"
            aria-label="Next image"
          >
            <ChevronRight size={38} />
          </button>

          <div className="relative h-[82vh] w-full max-w-6xl">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-primary px-4 py-2 text-sm font-bold text-white">
            {currentImageIndex + 1} / {imageCount}
          </p>
        </dialog>
      ) : null}
    </>
  );
}
