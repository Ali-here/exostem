import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Exostem Stem Cell Therapy" },
      { name: "description", content: "Book a consultation with our regenerative medicine specialists. Concierge care for international patients." },
      { property: "og:title", content: "Contact Exostem" },
      { property: "og:description", content: "Book a consultation with our regenerative medicine specialists." },
    ],
  }),
  component: Contact,
});

const details = [
  { Icon: MapPin, label: "Main Laboratory", value: "3rd Floor, Kulsum International Hospital 2020 Kulsum Plaza, Blue Area, Islamabad" },
  { Icon: Phone, label: "Medical Inquiries", value: "+92 316 4572440" },
  { Icon: Mail, label: "Email", value: "exostempk@gmail.com" },
  { Icon: Clock, label: "Response Time", value: "Within 4 hours" },
];

function Contact() {
  return (
    <div className="min-h-screen bg-surface font-sans text-brand-dark/90">
      <SiteNav />
      <PageHero
        eyebrow="Contact"
        title={<>Begin your <span className="text-brand">clinical path.</span></>}
        description="Our medical concierge team will respond within 4 hours. All communications are encrypted and confidential."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-4">
            {details.map(({ Icon, label, value }) => (
              <div key={label} className="p-6 rounded-2xl bg-surface border border-black/5 flex items-start gap-4">
                <div className="shrink-0 size-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
                  <Icon className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{label}</div>
                  <div className="font-heading font-bold text-brand-dark">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-brand-dark text-white flex flex-col gap-4">
            <h2 className="text-2xl font-heading font-bold mb-2">Request a consultation</h2>
            <p className="text-white/60 text-sm mb-4">Tell us a little about your situation and we'll route you to the right specialist.</p>

            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-white/60">First Name</span>
                <input type="text" required className="bg-white/10 rounded-xl py-3 px-4 text-sm placeholder:text-white/40 border border-white/10 focus:border-brand focus:outline-none transition-colors" placeholder="Jane" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-white/60">Last Name</span>
                <input type="text" required className="bg-white/10 rounded-xl py-3 px-4 text-sm placeholder:text-white/40 border border-white/10 focus:border-brand focus:outline-none transition-colors" placeholder="Doe" />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/60">Email</span>
              <input type="email" required className="bg-white/10 rounded-xl py-3 px-4 text-sm placeholder:text-white/40 border border-white/10 focus:border-brand focus:outline-none transition-colors" placeholder="jane@example.com" />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/60">Area of Interest</span>
              <select className="bg-white/10 rounded-xl py-3 px-4 text-sm border border-white/10 focus:border-brand focus:outline-none transition-colors">
                <option className="bg-brand-dark">Select an area…</option>
                <option className="bg-brand-dark">Pediatric Neurology</option>
                <option className="bg-brand-dark">Neurology</option>
                <option className="bg-brand-dark">Orthopedics</option>
                <option className="bg-brand-dark">Anti-Aging</option>
                <option className="bg-brand-dark">Reproductive Health</option>
                <option className="bg-brand-dark">Eye Diseases</option>
              </select>
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/60">Message</span>
              <textarea rows={5} className="bg-white/10 rounded-xl py-3 px-4 text-sm placeholder:text-white/40 border border-white/10 focus:border-brand focus:outline-none transition-colors resize-none" placeholder="Briefly describe your medical situation…" />
            </label>

            <button type="submit" className="mt-3 bg-brand text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-white hover:text-brand-dark transition-all inline-flex items-center justify-center gap-2">
              Submit Request <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
