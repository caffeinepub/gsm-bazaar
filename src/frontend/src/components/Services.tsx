import { Bot, Tv, Users } from "lucide-react";

const services = [
  {
    icon: Tv,
    title: "OTT Subscription Services",
    description:
      "Access all major streaming platforms including Netflix, Prime Video, Disney+, HBO Max, Apple TV+, and Hotstar at unbeatable prices. Instant activation, no hidden fees.",
    highlights: ["Netflix", "Prime Video", "Disney+", "Hotstar", "HBO Max"],
    gradient: "from-red-500/20 to-orange-500/10",
  },
  {
    icon: Bot,
    title: "AI Tools Access",
    description:
      "Unlock the power of cutting-edge AI tools including ChatGPT Plus, Midjourney, Claude Pro, and more. Boost your productivity and creativity instantly.",
    highlights: ["ChatGPT Plus", "Midjourney", "Claude Pro", "Gemini"],
    gradient: "from-purple-500/20 to-blue-500/10",
    featured: true,
  },
  {
    icon: Users,
    title: "Reseller Opportunities",
    description:
      "Join our reseller program and earn while helping others access premium services. Competitive margins, real-time dashboard, and dedicated support for partners.",
    highlights: [
      "High Margins",
      "Real-time Panel",
      "Bulk Discounts",
      "24/7 Support",
    ],
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
            What We Offer
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need — from premium entertainment to powerful AI
            tools — delivered fast and at the best prices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              data-ocid={`services.item.${i + 1}`}
              className={`fade-in stagger-${i + 1} relative rounded-2xl p-6 lg:p-8 glass-card transition-all duration-300 hover:border-white/20 hover:-translate-y-1 ${
                service.featured ? "glow-purple border-purple-500/30" : ""
              } bg-gradient-to-br ${service.gradient}`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="btn-gradient text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="w-12 h-12 rounded-xl btn-gradient flex items-center justify-center mb-5 shadow-lg">
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-heading font-bold text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-border bg-white/5 text-muted-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
