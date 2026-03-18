import { CheckCircle, Loader2, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitInquiry } from "../hooks/useQueries";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const submitInquiry = useSubmitInquiry();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      await submitInquiry.mutateAsync(form);
      setSubmitted(true);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try WhatsApp instead.");
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Contact <span className="gradient-text">GSM Bazaar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have questions? Reach out via WhatsApp or send us a message below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left: Contact options */}
          <div className="fade-in-left flex flex-col gap-6">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp.button"
              className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-green-500/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 fill-green-400"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-base group-hover:text-green-400 transition-colors">
                  Chat on WhatsApp
                </p>
                <p className="text-muted-foreground text-sm">
                  Fastest response &mdash; usually within minutes
                </p>
              </div>
            </a>

            <a
              href="mailto:support@gsmbazaar.com"
              data-ocid="contact.email.button"
              className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <p className="font-bold text-base group-hover:text-blue-400 transition-colors">
                  Email Us
                </p>
                <p className="text-muted-foreground text-sm">
                  support@gsmbazaar.com
                </p>
              </div>
            </a>

            <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-7 h-7 text-purple-400" />
              </div>
              <div>
                <p className="font-bold text-base">24/7 Support</p>
                <p className="text-muted-foreground text-sm">
                  We respond to all inquiries within 30 minutes
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="fade-in-right">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 lg:p-8"
              data-ocid="contact.form"
            >
              {submitted ? (
                <div
                  className="text-center py-8"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    We&apos;ll get back to you within 30 minutes.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm text-muted-foreground hover:text-foreground underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-heading font-bold text-xl mb-6">
                    Send a Message
                  </h3>

                  <div className="flex flex-col gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-muted-foreground mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        data-ocid="contact.name.input"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-muted-foreground mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        data-ocid="contact.email.input"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-muted-foreground mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us what you need..."
                        data-ocid="contact.message.textarea"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitInquiry.isPending}
                      data-ocid="contact.submit.button"
                      className="btn-gradient text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitInquiry.isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />{" "}
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
