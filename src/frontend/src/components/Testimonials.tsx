import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Digital Creator",
    avatar: "AM",
    rating: 5,
    text: "GSM Bazaar has been a game changer for me. I got Netflix and ChatGPT Plus activated within 5 minutes of payment. The pricing is unbeatable and support is always available on WhatsApp.",
  },
  {
    name: "Priya Sharma",
    role: "Freelancer & Content Writer",
    avatar: "PS",
    rating: 5,
    text: "Been using their AI Tools bundle for 3 months now. Midjourney + Claude Pro at this price? Nowhere else! Highly recommend GSM Bazaar to anyone who needs affordable premium tools.",
  },
  {
    name: "Rahul Verma",
    role: "Reseller Partner",
    avatar: "RV",
    rating: 5,
    text: "I joined their reseller program and the margins are excellent. The dashboard is clean, support is responsive, and I've been able to serve over 50 clients through them. Truly professional.",
  },
  {
    name: "Sneha Kapoor",
    role: "College Student",
    avatar: "SK",
    rating: 5,
    text: "As a student, I couldn't afford individual subscriptions. GSM Bazaar's Basic plan gives me Disney+ and Prime Video at a fraction of the cost. Great service, great price!",
  },
  {
    name: "Mohammed Ali",
    role: "Small Business Owner",
    avatar: "MA",
    rating: 5,
    text: "The Ultimate plan is perfect for my team. Everyone has access to OTT and AI tools. Customer service is top notch. Will definitely renew every month without hesitation.",
  },
  {
    name: "Kavya Nair",
    role: "UX Designer",
    avatar: "KN",
    rating: 5,
    text: "I use Midjourney daily for design inspiration. Getting it through GSM Bazaar saves me 60% compared to direct subscription. Instant activation and no issues in 6 months!",
  },
];

const starKeys = ["s1", "s2", "s3", "s4", "s5"];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
            Customer Reviews
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Thousands of happy customers trust GSM Bazaar for their subscription
            needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-ocid={`testimonials.item.${i + 1}`}
              className={`fade-in stagger-${Math.min(i + 1, 4)} glass-card rounded-2xl p-6 hover:border-white/20 hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-center gap-1 mb-4">
                {starKeys.slice(0, t.rating).map((k) => (
                  <Star
                    key={k}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
