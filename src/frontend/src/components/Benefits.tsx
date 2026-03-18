import { DollarSign, Headphones, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description:
      "Premium services at prices that won't break the bank. We offer the most competitive rates in the market.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: Zap,
    title: "Instant Activation",
    description:
      "No waiting. Get your subscriptions and AI tool access activated within minutes of payment.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Shield,
    title: "Secure Service",
    description:
      "Your data is always protected. We use industry-standard security practices for every transaction.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our support team is available 24/7 via WhatsApp and email to resolve any issues instantly.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
            Why Choose Us
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            The GSM Bazaar <span className="gradient-text">Advantage</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              data-ocid={`benefits.item.${i + 1}`}
              className={`fade-in stagger-${i + 1} glass-card rounded-2xl p-6 text-center hover:border-white/20 hover:-translate-y-1 transition-all duration-300`}
            >
              <div
                className={`w-14 h-14 ${benefit.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
