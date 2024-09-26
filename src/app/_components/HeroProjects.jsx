import Image from "next/image";
import React from "react";

const HeroProjects = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 capitalize">
        <h2 className="text-3xl text-amber-700">our Projects</h2>
        <h1 className="text-7xl">See Our Curated Interior Design Projects</h1>
        <p className="text-lg opacity-60">
          We draw inspiration from the latest trends and timeless classics to
          spaces that are not only beautiful.
        </p>
      </div>
      <div className="grid w-full grid-cols-3 grid-rows-2 justify-center gap-4 p-4">
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <div
            className="group col-span-1 row-span-1 flex flex-col gap-4 p-2 py-2"
            key={i}
          >
            <div className="relative min-h-96 overflow-clip">
              <Image
                src={`/img${i}.avif`}
                className="object-cover duration-700 group-hover:scale-110"
                alt=""
                fill
              />
            </div>
            <h1 className="my-2 mt-2 text-5xl">Urban Oasis Apartment</h1>
            <div className="my-8 flex flex-row gap-2 text-lg opacity-60">
              <p>Modern Office Renovation -</p>
              <p>January 2024</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroProjects;
