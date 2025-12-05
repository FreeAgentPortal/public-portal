"use client";

import { useState, useEffect } from "react";
import { SigningCard } from "./signing-card";
import type ISigning from "@/types/ISigning";

interface SigningCarouselProps {
  signings: ISigning[];
  showNotes?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

export const SigningCarousel = ({
  signings,
  showNotes = false,
  autoPlay = true,
  interval = 5000,
}: SigningCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || signings.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % signings.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, signings.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + signings.length) % signings.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % signings.length);
  };

  if (signings.length === 0) {
    return null;
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Cards */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {signings.map((signing, index) => (
            <div key={`${signing.athlete._id}-${signing.team._id}-${index}`} className="w-full flex-shrink-0 px-4">
              <SigningCard signing={signing} showNotes={showNotes} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {signings.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-primary/90 hover:bg-primary text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Previous signing"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-primary/90 hover:bg-primary text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Next signing"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {signings.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {signings.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-secondary w-8" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {signings.length > 1 && (
        <div className="text-center mt-3">
          <p className="text-white/60 text-sm">
            {currentIndex + 1} / {signings.length}
          </p>
        </div>
      )}
    </div>
  );
};
