const brands = [
  { name: "Netflix", color: "#E50914" },
  { name: "Prime Video", color: "#00A8E0" },
  { name: "Disney+", color: "#113CCF" },
  { name: "HBO Max", color: "#8C44FF" },
  { name: "OpenAI", color: "#10A37F" },
  { name: "Midjourney", color: "#7B68EE" },
  { name: "Hotstar", color: "#1A73E8" },
  { name: "Apple TV+", color: "#A2AAAD" },
];

export default function BrandStrip() {
  return (
    <section className="py-10 border-y border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-6 font-medium">
          Trusted Platforms & Tools
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="px-4 py-2 rounded-full border border-border bg-card/50 text-sm font-semibold transition-all hover:border-white/20 hover:bg-card cursor-default"
              style={{ color: brand.color }}
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
