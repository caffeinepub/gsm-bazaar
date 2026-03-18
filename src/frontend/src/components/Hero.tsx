export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background radials */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, oklch(0.57 0.22 285 / 0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 30% 80%, oklch(0.57 0.20 250 / 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="fade-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 text-xs text-muted-foreground mb-6 font-medium">
              <span className="w-2 h-2 rounded-full btn-gradient animate-pulse_glow" />
              Premium OTT & AI Services
            </div>

            <h1
              className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6"
              style={{ lineHeight: "1.1" }}
            >
              Your Gateway to <span className="gradient-text">Premium OTT</span>{" "}
              Subscriptions and{" "}
              <span className="gradient-text">Powerful AI Tools</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-4 max-w-lg">
              Affordable, reliable access to the world&apos;s best streaming
              platforms and cutting-edge AI tools — all in one place, activated
              instantly.
            </p>

            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Instant Delivery
              </span>
              <span className="text-border">|</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Best Prices
              </span>
              <span className="text-border">|</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                24/7 Support
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => handleScroll("#pricing")}
                data-ocid="hero.explore_plans.button"
                className="btn-gradient text-white font-bold px-8 py-4 rounded-full text-base tracking-wide hover:opacity-90 transition-all shadow-lg"
              >
                EXPLORE PLANS
              </button>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.whatsapp.button"
                className="flex items-center justify-center gap-2.5 text-white font-bold px-8 py-4 rounded-full text-base border border-border bg-white/5 hover:bg-white/10 transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-green-400"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                CONTACT ON WHATSAPP
              </a>
            </div>
          </div>

          {/* Right column — CSS/SVG tech illustration */}
          <div className="fade-in-right relative flex justify-center items-center">
            <TechIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

const nodes = [
  {
    top: "8%",
    left: "50%",
    size: 12,
    color: "oklch(0.57 0.22 285)",
    delay: "0s",
    label: "🤖",
  },
  {
    top: "20%",
    left: "82%",
    size: 10,
    color: "oklch(0.57 0.20 250)",
    delay: "1s",
    label: "▶",
  },
  {
    top: "60%",
    left: "90%",
    size: 14,
    color: "oklch(0.65 0.22 285)",
    delay: "0.5s",
    label: "🎬",
  },
  {
    top: "80%",
    left: "65%",
    size: 10,
    color: "oklch(0.57 0.20 250)",
    delay: "1.5s",
    label: "⚡",
  },
  {
    top: "75%",
    left: "20%",
    size: 12,
    color: "oklch(0.57 0.22 285)",
    delay: "2s",
    label: "🌐",
  },
  {
    top: "30%",
    left: "8%",
    size: 10,
    color: "oklch(0.57 0.20 250)",
    delay: "0.8s",
    label: "✦",
  },
];

const badges = ["N", "P", "D+", "GPT"];

function TechIllustration() {
  return (
    <div
      className="relative w-full max-w-[480px] aspect-square"
      aria-hidden="true"
    >
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-full opacity-20 animate-pulse_glow"
        style={{
          background:
            "radial-gradient(circle, oklch(0.57 0.22 285) 0%, transparent 70%)",
        }}
      />

      {/* Main orbit rings */}
      <div
        className="absolute inset-8 rounded-full border border-purple-500/20 animate-rotate_slow"
        style={{ borderStyle: "dashed" }}
      />
      <div
        className="absolute inset-20 rounded-full border border-blue-500/15 animate-rotate_slow"
        style={{ animationDirection: "reverse", animationDuration: "20s" }}
      />

      {/* Center planet */}
      <div
        className="absolute inset-1/4 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, oklch(0.65 0.20 285), oklch(0.45 0.22 250), oklch(0.15 0.04 268))",
          boxShadow:
            "0 0 40px oklch(0.57 0.22 285 / 0.5), 0 0 80px oklch(0.57 0.22 285 / 0.2), inset 0 0 30px oklch(0.3 0.15 268 / 0.5)",
        }}
      />

      {/* Floating nodes */}
      {nodes.map((node) => (
        <div
          key={node.label}
          className="absolute flex items-center justify-center rounded-full text-xs font-bold animate-float"
          style={{
            top: node.top,
            left: node.left,
            width: node.size * 3,
            height: node.size * 3,
            background: node.color,
            boxShadow: `0 0 12px ${node.color}`,
            animationDelay: node.delay,
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: node.size,
          }}
        >
          {node.label}
        </div>
      ))}

      {/* Connection lines (SVG) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <line
          x1="100"
          y1="16"
          x2="100"
          y2="75"
          stroke="oklch(0.57 0.22 285)"
          strokeWidth="0.5"
        />
        <line
          x1="164"
          y1="40"
          x2="130"
          y2="75"
          stroke="oklch(0.57 0.20 250)"
          strokeWidth="0.5"
        />
        <line
          x1="180"
          y1="120"
          x2="135"
          y2="110"
          stroke="oklch(0.57 0.22 285)"
          strokeWidth="0.5"
        />
        <line
          x1="130"
          y1="160"
          x2="115"
          y2="130"
          stroke="oklch(0.57 0.20 250)"
          strokeWidth="0.5"
        />
        <line
          x1="40"
          y1="150"
          x2="75"
          y2="125"
          stroke="oklch(0.57 0.22 285)"
          strokeWidth="0.5"
        />
        <line
          x1="16"
          y1="60"
          x2="68"
          y2="90"
          stroke="oklch(0.57 0.20 250)"
          strokeWidth="0.5"
        />
      </svg>

      {/* Service badges floating */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        {badges.map((badge) => (
          <div
            key={badge}
            className="text-xs font-bold px-2 py-1 rounded-md glass-card text-foreground/80"
          >
            {badge}
          </div>
        ))}
      </div>
    </div>
  );
}
