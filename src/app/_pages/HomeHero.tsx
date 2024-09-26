"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import HeroCardSlider from "../_components/HeroCardSlider";
import HeroAbout from "../_components/HeroAbout";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";

const HomeHero = () => {
  const headingRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (headingRef.current) {
      const splitInstance = new SplitType("#head", { types: "words" });

      gsap.from(splitInstance.words, {
        duration: 1,
        y: 10,
        opacity: 0,
        stagger: { amount: 1 },
        ease: "ease",
        scrollTrigger: {
          trigger: "#head",
          start: "50% 80%",
          scrub: 1,
        },
      });
    }
  }, []);
  useGSAP(() =>
    gsap.from(".hero", {
      duration: 1,
      x: -100,
      opacity: 0,
      ease: "power2.out",
      stagger: 0.2,
    }),
  );
  return (
    <div className="flex min-h-screen w-full flex-col gap-8">
      <div className="flex flex-col gap-8">
        <h1 ref={headingRef} id="head" className="text-7xl">
          Transforming Spaces Into Modern Masterpieces.
        </h1>
        <p id="head" ref={headingRef} className="w-2/3 text-lg opacity-60">
          Our Team of Expert Designers and Architects Create Stunning,
          Functional Interiors Tailored to Your Unique Style and Needs.
        </p>
      </div>
      <div className="flex flex-row gap-4">
        <button className="rounded-full p-4 px-8 ring-1 ring-black duration-700 hover:bg-black hover:text-white">
          lets talk
        </button>
        <button className="rounded-full p-4 px-8 ring-1 ring-black duration-700 hover:bg-black hover:text-white">
          Explore our works
        </button>
      </div>
      <div>
        <div className="flex min-h-[80vh] w-full overflow-scroll">
          <HeroCardSlider />
        </div>
        <div className="flex min-h-[80vh] w-full overflow-scroll">
          <HeroAbout />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
