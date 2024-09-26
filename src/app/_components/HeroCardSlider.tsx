import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { gsap } from "gsap";

const HeroCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index
  const cardsRef = useRef(null); // Ref to the container holding the cards
  const numSlides = 3; // Total number of slides

  // Function to move to the next slide and loop infinitely
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numSlides);
  };

  // Function to move to the previous slide and loop infinitely
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? numSlides - 1 : prevIndex - 1
    );
  };

  // GSAP animation triggered whenever the currentIndex changes
  useEffect(() => {
    if (cardsRef.current) {
      // Ensure the animation stops at the exact index and doesn't infinitely animate
      gsap.to(cardsRef.current, {
        x: -100 * currentIndex + "%", // Move based on the current index
        duration: 1, // Animation duration
        ease: "power2.inOut", // Animation easing
        overwrite: true, // Ensures previous animations are stopped
      });
    }
  }, [currentIndex]);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 10000); // Move to the next slide every 10 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="w-full flex min-h-[80vh] overflow-hidden relative">
      {/* The container that holds all the slides */}
      <div className="flex" ref={cardsRef}>
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="min-w-[100%]">
            <div className="relative min-h-[70vh] w-full">
              <Image src={`/img${item}.avif`} className="object-cover" alt="" fill />
            </div>
            <div className="flex justify-between px-8 py-8">
              <p className="w-2/3">
                Functional Interiors Tailored to Your Unique Style and Needs (2024)
              </p>
              <div className="flex gap-2">
                <button
                  onClick={goToPrevSlide}
                  className="rounded-full p-4 ring-1 ring-black duration-700 hover:bg-black hover:text-white"
                >
                  <GoArrowLeft />
                </button>
                <button
                  onClick={goToNextSlide}
                  className="rounded-full p-4 ring-1 ring-black duration-700 hover:bg-black hover:text-white"
                >
                  <GoArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCardSlider;
