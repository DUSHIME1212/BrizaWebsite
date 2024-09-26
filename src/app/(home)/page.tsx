import HeroServices from "../_components/HeroServices";
import HomeHero from "../_pages/HomeHero";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col gap-8">
      <div className="w-full px-8 md:px-16 lg:px-32">
        <HomeHero />
      </div>
      <div className="w-full px-8 md:px-16 lg:px-32">
        <HeroServices />
      </div>
    </main>
  );
}
