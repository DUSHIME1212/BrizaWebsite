import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const Footerlinks = [
    {
      title: "Quick Links",
      links: ["home", "about", "services"],
    },
    {
      title: "Explore",
      links: ["Projects", "Our team", "Blogs"],
    },
    {
      title: "Info",
      links: ["Contact us", "Privacy policy", "Terms of service"],
    },
  ];
  const Socials=[
    "instagram",
    "facebook",
    "Linkedin",
    "Twitter",
  ]

  return (
    <div className="min-h-96 bg-white px-8 py-8 md:px-16 lg:px-32">
      <div className="flex min-h-32 w-full flex-row items-start">
        <div className="flex h-full w-1/2 flex-col gap-4 p-8">
          <div className="relative size-32">
            <Image src={"/logo.svg"} className="object-contain" alt="" fill />
          </div>
          <p className="text-lg opacity-60">
            Our Team of Expert Designers and Architects Create Stunning,
            Functional Interiors Tailored to Your Unique Style and Needs.
          </p>
        </div>
        <div className="flex w-1/2 flex-row justify-evenly p-8 capitalize">
          {Footerlinks.map((item, i) => (
            <div key={i}>
              <h1 className="mb-8 text-lg">{item.title}</h1>
              <div className="flex flex-col gap-2">
                {item.links.map((link, j) => (
                  <Link key={j} className="text-lg opacity-60" href={""}>
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row mt-8 p-8">
        <div className="w-1/2 flex flex-row gap-4">
          {
            Socials.map((item, i) => (
                <div key={i} className="text-lg text-amber-700 capitalize opacity-60 hover:opacity-100 duration-700">
                    <Link href={"https://www." + item + ".com"} target={"_blank"}>{item}</Link>
                </div>
            ))
          }
        </div>
        <div className="w-1/2 text-lg opacity-60">
          <p>Copyright © 2024 Briza. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
