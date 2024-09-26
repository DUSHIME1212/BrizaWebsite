import Image from "next/image";
import React from "react";

const HeroAbout = () => {
  return (
    <div className="flex w-full flex-col gap-16">
      <div className="flex min-h-[624px] w-full flex-row">
        <div className="flex w-1/2 flex-col justify-center gap-4 p-8">
          <h3 className="text-3xl text-amber-700">Statistics</h3>
          <h1 className="text-7xl">Tailored Interior Design</h1>
          <p className="text-lg opacity-60">
            We draw inspiration from the latest trends and timeless classics to
            spaces that are not only beautiful.
          </p>
          <div className="flex flex-row items-center gap-4">
            <div>
              <h2 className="mb-2 text-5xl">20+</h2>
              <p className="text-lg opacity-60">Years Experience</p>
            </div>
            <div>
              <h2 className="mb-2 text-5xl">300+</h2>
              <p className="text-lg opacity-60">Completed Projects</p>
            </div>
          </div>
        </div>
        <div className="relative w-1/2">
          <Image src={"/img2.avif"} alt="" className="object-cover" fill />
        </div>
      </div>
      <div className="relative flex min-h-96 w-full">
        <Image src={"/img1.avif"} alt="" className="object-cover" fill />
      </div>
      <div className="flex w-full flex-row">
        <div className="min-h-96 w-1/2 size-full relative">
          <div className="w-2/3 h-96 absolute top-0 left-0">
            <span className="h-full w-full ring-1 ring-black bg-black relative">
                <Image src={"/img1.avif"} alt="" className="object-cover" fill />
            </span>
          </div>
          <div className="w-2/3 h-96 absolute right-0 bottom-0">
            <span className="h-full w-full ring-1 ring-black bg-black relative">
                <Image src={"/img1.avif"} alt="" className="object-cover" fill />
            </span>
          </div>
        </div>
        <div className="min-h-96 w-1/2 flex flex-col gap-4 p-8">
          <h2 className="text-lg text-amber-700">Who We Are</h2>
          <h1 className="text-7xl">Passionate About Innovative Interiors</h1>
          <p className="opacity-60 text-lg">
            Our design philosophy is rooted in simplicity, functionality, and
            timeless elegance. We draw inspiration from the latest trends and
            timeless classics to create spaces that are not only beautiful.
          </p>
          <button className="rounded-full p-2 px-4 text-lg capitalize ring-1 ring-black duration-700 hover:bg-black hover:text-white">
            Learn more about us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
