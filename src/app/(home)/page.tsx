import Link from "next/link";
import HomeHero from "../_pages/HomeHero";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="w-full mt-36 px-8 md:px-16 lg:px-32">
        <HomeHero />
      </div>
    </main>
  );
}
