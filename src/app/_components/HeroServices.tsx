"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";

const HeroServices = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitInstance = new SplitType("#head", { types: "words,chars" });
        
        gsap.from(splitInstance.words, {
          duration: 1.5,
          x: -100,
          opacity: 0,
          scrollTrigger: {
            trigger: "#head",
            start: "top 80%",
            scrub: 1,
          },
        }
    );
  },[]);
  return (
    <div className="flex flex-col">
      <div className="relative flex flex-row">
        <div className="flex w-1/2 flex-col capitalize">
          <div className="sticky bottom-32 top-8 flex size-fit flex-col gap-4 px-8">
            <h2 className="text-lg font-bold text-amber-700">our services</h2>
            <h1 className="text-7xl">Functional Interior Design Services</h1>
            <p className="text-lg opacity-60" id="head">
              We draw inspiration from the latest trends and timeless classics
              to spaces that are not only beautiful.
            </p>
            <button className="w-fit rounded-full p-2 px-8 text-lg capitalize ring-1 ring-black duration-700 hover:bg-black hover:text-white">
              Learn more about us
            </button>
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-8">
          {[1, 2, 3].map((item, i) => (
            <div key={i} className="flex flex-row items-center gap-4 p-2">
              <div className="relative min-h-96 w-1/2">
                <Image
                  src={"/img1.avif"}
                  alt=""
                  className="object-cover"
                  fill
                />
              </div>
              <div className="w-1/2 p-2">
                <h1 className="mb-4 text-4xl">Residential Design</h1>
                <p className="mb-32 text-lg opacity-60">
                  Begins with a detailed consultation to understand your
                  lifestyle.
                </p>
                <Link
                  href={""}
                  className="flex flex-row items-center gap-2 capitalize"
                >
                  <span>learn more about us</span>
                  <GoArrowRight className="-rotate-45 duration-700" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroServices;
