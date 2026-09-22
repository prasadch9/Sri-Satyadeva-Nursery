"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  { src: "/home/unnamed.webp", title: "Fresh Green Beginnings", text: "Colorful plants for happier spaces." },
  { src: "/home/unnamed (1).webp", title: "Bring Nature Home", text: "Discover plants for every corner." },
  { src: "/home/Buddha.webp", title: "Tropical Vibes", text: "Add a playful burst of greenery." },
  { src: "/home/unnamed (3).webp", title: "Grow Something Beautiful", text: "Choose your next garden favorite." }
];

export default function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 2000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-[2.5rem] border-8 border-white bg-emerald-900 shadow-2xl">
        <div className="relative aspect-[16/8] min-h-[340px]">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-all duration-500 ${
                i === index ? "translate-x-0 opacity-100" : i < index ? "-translate-x-full opacity-0" : "translate-x-full opacity-0"
              }`}
            >
              <Image src={slide.src} alt={slide.title} fill className="object-cover" priority={i === 0} />
              <div className="absolute bottom-8 left-7 max-w-lg text-white sm:bottom-12 sm:left-12">
                <p className="font-black uppercase tracking-[.25em] text-lime-300">Sri Satyadeva Nursery</p>
                <h2 className="mt-2 text-3xl font-black sm:text-5xl">{slide.title}</h2>
                <p className="mt-3 text-lg text-white/90">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-emerald-900 shadow-xl transition hover:scale-110 hover:bg-yellow-300 sm:left-6"
      >
        <FiChevronLeft size={28} />
      </button>

      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-emerald-900 shadow-xl transition hover:scale-110 hover:bg-yellow-300 sm:right-6"
      >
        <FiChevronRight size={28} />
      </button>

      <div className="mt-5 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 rounded-full transition-all ${i === index ? "w-9 bg-orange-500" : "w-3 bg-emerald-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
