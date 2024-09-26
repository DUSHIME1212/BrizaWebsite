"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  useGSAP(() =>
    gsap.from("#hero", {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "power2.out",
      stagger:0.2
    }),
  );
  const navlinks = [
    { name: "service", route: "/" },
    { name: "project", route: "/" },
    { name: "contact", route: "/" },
  ];
  return (
    <header className="px-8 text-lg capitalize md:px-16 lg:px-32">
      <nav className="flex items-center justify-between px-8 py-4">
        <span className="relative h-8 w-24">
          <Image src="/logo.svg" className="object-contain" alt="image" fill />
        </span>
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-row gap-4">
            {navlinks.map((item) => (
              <Link id="hero" key={item.name} href={item.route}>
                {item.name}
              </Link>
            ))}
          </div>
          <button id="hro" className="flex items-center justify-center gap-2 rounded-full p-2 px-4 capitalize ring-1 ring-black duration-700 hover:bg-black hover:text-white">
            <span>lets talk</span>
            <GoArrowUpRight size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
