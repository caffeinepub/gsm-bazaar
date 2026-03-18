import { ListChecks, MessageCircle, Zap } from "lucide-react";

const steps = [
  {
    icon: ListChecks,
    step: "01",
    title: "Choose Your Plan",
    description:
      "Browse our affordable plans for OTT subscriptions or AI tools. Pick the one that suits your needs and budget.",
  },
  {
    icon: MessageCircle,
    step: "02",
    title: "Contact Us",
    description:
      "Reach out via WhatsApp or our contact form. Our team will guide you through the process instantly.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Get Instant Activation",
    description:
      "After payment confirmation, your subscription or AI tool access is activated within minutes. Start enjoying right away!",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
            Simple Process
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Getting started with GSM Bazaar is as easy as 1-2-3.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div
            className="absolute top-10 left-1/4 right-1/4 h-px hidden md:block"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.57 0.22 285 / 0.4), oklch(0.57 0.20 250 / 0.4))",
            }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div
              key={step.title}
              data-ocid={`how_it_works.item.${i + 1}`}
              className={`fade-in stagger-${i + 1} flex flex-col items-center text-center`}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl btn-gradient flex items-center justify-center shadow-lg glow-purple">
                  <step.icon className="w-9 h-9 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center text-xs font-black gradient-text">
                  {step.step}
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
