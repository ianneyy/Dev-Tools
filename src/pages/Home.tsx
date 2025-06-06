import { HeroSection } from "@/components/hero-section-dark";

export default function Home() {
  return (
    <HeroSection
      title="Developed by Ian Belarmino"
      subtitle={{
        regular: "Development Tools & Resources ",
        gradient: "for every web developer",
      }}
      description=""
      ctaText="Browse"
      ctaHref="/components"
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        lightLineColor: "#4a4a4a",
        darkLineColor: "#2a2a2a",
      }}
    />
  );
}
