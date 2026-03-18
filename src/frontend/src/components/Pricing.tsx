import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹199",
    period: "/month",
    description: "Perfect for personal streaming",
    features: [
      "1 OTT Platform",
      "Full HD Quality",
      "Instant Activation",
      "Email Support",
      "1 Month Validity",
    ],
    cta: "Get Basic",
  },
  {
    name: "Premium Bundle",
    price: "₹499",
    period: "/month",
    description: "Best value for entertainment + AI",
    features: [
      "3 OTT Platforms",
      "4K Ultra HD Quality",
      "1 AI Tool (ChatGPT / Midjourney)",
      "Instant Activation",
      "24/7 WhatsApp Support",
      "1 Month Validity",
    ],
    cta: "Get Premium",
    featured: true,
  },
  {
    name: "Ultimate",
    price: "₹899",
    period: "/month",
    description: "All platforms + all AI tools",
    features: [
      "5 OTT Platforms",
      "4K + Dolby Vision",
      "3 AI Tools Access",
      "Priority Activation",
      "Dedicated Account Manager",
      "3 Month Validity",
    ],
    cta: "Get Ultimate",
  },
  {
    name: "Reseller",
    price: "₹1,999",
    period: "/month",
    description: "For business & resellers",
    features: [
      "Unlimited Accounts",
      "All OTT Platforms",
      "All AI Tools",
      "Reseller Dashboard",
      "Bulk Pricing",
      "White-label Support",
    ],
    cta: "Become Reseller",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
            Plans & Packages
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span className="gradient-text">UNBEATABLE</span> PRICING
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Transparent pricing with no hidden charges. Cancel anytime.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              data-ocid={`pricing.item.${i + 1}`}
              className={`fade-in stagger-${Math.min(i + 1, 4)} relative rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "glass-card glow-purple border-purple-500/40"
                  : "glass-card hover:border-white/20"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="btn-gradient text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    ⭐ Best Value
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3
                  className={`font-heading font-bold text-lg mb-1 ${plan.featured ? "gradient-text" : ""}`}
                >
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-xs mb-3">
                  {plan.description}
                </p>
                <div className="flex items-end gap-1">
                  <span className="font-heading font-black text-3xl text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm mb-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 flex-1 mb-6">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`pricing.buy.button.${i + 1}`}
                className={`w-full py-3 rounded-full text-sm font-bold text-center block transition-all ${
                  plan.featured
                    ? "btn-gradient text-white shadow-lg"
                    : "border border-border bg-white/5 text-foreground hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
