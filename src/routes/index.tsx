import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import heroCells from "@/assets/hero-cells.jpg";
import condNeurology from "@/assets/cond-neurology.jpg";
import condOrtho from "@/assets/cond-ortho.jpg";
import condAging from "@/assets/cond-aging.jpg";
import patientPortrait from "@/assets/patient-portrait.jpg";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exostem — Stem Cell Therapy for Regenerative Medicine" },
      {
        name: "description",
        content:
          "Advanced stem cell therapy for neurology, orthopedics, anti-aging, reproductive health and eye diseases. Certified specialists and modern laboratory.",
      },
    ],
  }),
  component: Home,
});

const features = [
  { n: "01", title: "Certified Specialists", body: "A medical board of globally recognized regenerative experts and PhD-led researchers." },
  { n: "02", title: "Modern Laboratory", body: "In-house ISO-certified clean rooms for advanced cellular processing and expansion." },
  { n: "03", title: "Personalized Treatment", body: "Every protocol is engineered around your unique genetic and clinical profile." },
  { n: "04", title: "International Patients", body: "Concierge care for global patients — travel, treatment and recovery support." },
];

const conditionCards = [
  { icon: "🧠", title: "Autism", body: "Neuroinflammation-focused pediatric protocols supporting communication and cognition.", to: "/conditions/$slug", slug: "autism", img: condNeurology },
  { icon: "⚡", title: "Multiple Sclerosis", body: "Immunomodulatory therapy for demyelination and disease progression.", to: "/conditions/$slug", slug: "multiple-sclerosis" },
  { icon: "🦴", title: "Arthritis", body: "Regenerative solutions for joint damage and long-standing pain.", to: "/conditions/$slug", slug: "arthritis", img: condOrtho },
  { icon: "❤️", title: "Infertility", body: "Reproductive protocols enhancing ovarian and testicular function.", to: "/conditions/$slug", slug: "female-infertility" },
  { icon: "👁", title: "Glaucoma", body: "Neuroprotective strategies for the regeneration of retinal ganglion cells.", to: "/conditions/$slug", slug: "glaucoma" },
  { icon: "✨", title: "Anti-Aging", body: "Systemic renewal, skin recovery, wrinkle reduction and longevity.", to: "/conditions/$slug", slug: "longevity", img: condAging },
];

const pathway = [
  { n: "1", title: "Consultation", body: "Initial medical assessment and full history review." },
  { n: "2", title: "Lab Analysis", body: "Custom stem cell isolation, expansion and preparation." },
  { n: "3", title: "Treatment", body: "Precision therapy administered in our clinical environment." },
  { n: "4", title: "Recovery", body: "Continuous monitoring and long-term biological support." },
];

const faqs = [
  { q: "How long do results typically take to appear?", a: "Biological responses vary by condition. Neurological protocols typically show gradual progress over 3–6 months as tissue remodeling occurs." },
  { q: "Where are the stem cells sourced from?", a: "We primarily use autologous cells from the patient via minimally invasive bone marrow or adipose extraction, alongside screened allogeneic sources when clinically indicated." },
  { q: "Is the therapy suitable for international patients?", a: "Yes — our concierge team coordinates evaluation, scheduling, accommodation and post-treatment monitoring for patients travelling from abroad." },
  { q: "How do I know if I am eligible?", a: "Eligibility is determined after a specialist consultation reviewing your medical history, imaging and laboratory results." },
];

const articles = [
  { tag: "Neurology", title: "Mesenchymal stem cells in pediatric autism protocols", date: "May 2026" },
  { tag: "Orthopedics", title: "Cartilage regeneration: what the latest trials tell us", date: "Apr 2026" },
  { tag: "Longevity", title: "Cellular senescence and the biology of anti-aging", date: "Mar 2026" },
];

function Home() {
  return (
    <div className="min-h-screen bg-surface font-sans text-brand-dark/90 antialiased">
      <SiteNav />
      <Hero />
      <WhyUs />
      <Conditions />
      <Pathway />
      <Journey />
      <SuccessStory />
      <FAQ />
      <Articles />
      <Contact />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            Leading Edge Regenerative Medicine
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-dark leading-[1.05] mb-8">
            Stem Cell Therapy
            <br />
            <span className="text-brand">For Regenerative Medicine.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
            Harnessing the body's natural healing potential through certified cellular research and personalized treatment protocols.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-brand-dark text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-brand transition-all inline-flex items-center gap-2">
              Book Consultation <ArrowRight className="size-4" />
            </Link>
            <Link to="/testimonials" className="border border-brand-dark/10 bg-white px-8 py-4 rounded-xl font-bold text-base hover:border-brand transition-all">
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-20 right-[-8%] w-1/2 hidden lg:block pointer-events-none">
        <img
          src={heroCells}
          alt="Microscopic view of stem cells glowing in teal light"
          width={1200}
          height={1000}
          className="w-full aspect-[4/3] object-cover rounded-3xl outline outline-1 -outline-offset-1 outline-black/5"
        />
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 max-w-xl">
          <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Why Choose Us</p>
          <h2 className="text-4xl font-heading font-bold text-brand-dark">
            A clinical practice built on precision and evidence.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.n} className="p-8 rounded-2xl bg-surface border border-brand/5 hover:border-brand/40 transition-all">
              <div className="w-12 h-12 bg-brand/10 rounded-lg mb-6 flex items-center justify-center text-brand font-bold">{f.n}</div>
              <h3 className="text-xl font-heading font-bold mb-3">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Conditions() {
  return (
    <section id="conditions" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">What We Treat</p>
            <h2 className="text-4xl font-heading font-bold text-brand-dark mb-4">Conditions We Treat</h2>
            <p className="text-slate-500 max-w-lg">Advanced protocols spanning six primary medical disciplines.</p>
          </div>
          <Link to="/conditions" className="text-brand font-bold flex items-center gap-2 group">
            View all conditions <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditionCards.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              params={{ slug: c.slug }}
              className="group bg-white p-8 rounded-3xl border border-black/5 hover:border-brand transition-all hover:shadow-xl flex flex-col"
            >
              <span className="text-4xl mb-6 block">{c.icon}</span>
              <h3 className="text-2xl font-heading font-bold mb-3 text-brand-dark">{c.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{c.body}</p>
              {c.img ? (
                <img src={c.img} alt={c.title} loading="lazy" width={800} height={512} className="w-full h-32 object-cover rounded-xl" />
              ) : (
                <div className="w-full h-32 rounded-xl bg-gradient-to-br from-brand/10 via-surface to-brand/5" />
              )}
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark group-hover:text-brand transition-colors">
                Learn more <ArrowUpRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pathway() {
  return (
    <section id="process" className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">How Treatment Works</p>
          <h2 className="text-4xl font-heading font-bold">The Treatment Pathway</h2>
        </div>
        <div className="relative">
          <div className="absolute top-6 left-0 w-full h-px bg-white/20 hidden lg:block" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {pathway.map((p) => (
              <div key={p.n} className="relative z-10 text-center">
                <div className="w-12 h-12 bg-brand rounded-full mx-auto mb-6 flex items-center justify-center font-bold ring-8 ring-brand-dark">
                  {p.n}
                </div>
                <h4 className="text-xl font-heading font-bold mb-2">{p.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    { t: "Enquiry", d: "Reach out through our secure medical intake form." },
    { t: "Evaluation", d: "Specialist review of records and preliminary imaging." },
    { t: "Protocol Design", d: "A custom treatment plan tailored to your case." },
    { t: "Treatment Visit", d: "Onsite laboratory work and therapeutic administration." },
    { t: "Follow-Up", d: "Structured 12-month monitoring with your care team." },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Patient Journey</p>
          <h2 className="text-4xl font-heading font-bold text-brand-dark">A clear path from first contact to long-term recovery.</h2>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <li key={s.t} className="relative p-6 rounded-2xl bg-surface border border-brand/5">
              <span className="text-xs font-mono text-brand">STEP {String(i + 1).padStart(2, "0")}</span>
              <h4 className="font-heading font-bold text-lg mt-3 mb-2">{s.t}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// function SuccessStory() {
//   return (
//     <section id="stories" className="py-24 bg-surface">
//       <div className="max-w-7xl mx-auto px-6">
//         <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Success Stories</p>
//         <h2 className="text-4xl font-heading font-bold text-brand-dark mb-12 max-w-2xl">Real patients, measurable outcomes.</h2>
//         <div className="bg-white rounded-[3rem] overflow-hidden border border-black/5 flex flex-col lg:flex-row">
//           <div className="lg:w-1/2">
//             <img src={patientPortrait} alt="Patient Michael Henderson" loading="lazy" width={900} height={900} className="w-full h-full aspect-square object-cover" />
//           </div>
//           <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
//             <div className="text-brand font-heading text-6xl leading-none mb-6">&ldquo;</div>
//             <p className="text-2xl font-medium mb-8 leading-relaxed text-brand-dark">
//               After years of struggling with chronic arthritis, the regenerative therapy at Exostem changed everything. I'm back to running morning miles without pain.
//             </p>
//             <div>
//               <div className="font-bold text-lg">Michael Henderson</div>
//               <div className="text-slate-500 text-sm">Orthopedic Patient, 2023</div>
//             </div>
//             <Link to="/testimonials" className="mt-8 inline-flex items-center gap-2 text-brand font-bold">
//               Read more stories <ArrowRight className="size-4" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">FAQ</p>
          <h2 className="text-4xl font-heading font-bold text-brand-dark">Frequently Asked Questions</h2>
        </div>
        <div className="divide-y divide-black/5 border-y border-black/5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="py-2">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left py-4 gap-6"
                >
                  <span className="font-heading font-semibold text-lg text-brand-dark">{f.q}</span>
                  <span className="shrink-0 size-8 rounded-full bg-surface flex items-center justify-center text-brand">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                {isOpen && <p className="pb-6 pr-14 text-slate-500 leading-relaxed">{f.a}</p>}
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link to="/faq" className="text-brand font-bold inline-flex items-center gap-2">
            All questions <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Articles() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Journal</p>
            <h2 className="text-4xl font-heading font-bold text-brand-dark">Latest Articles</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article key={a.title} className="group bg-white p-8 rounded-3xl border border-black/5 hover:border-brand transition-all">
              <div className="flex items-center justify-between mb-8 text-xs">
                <span className="font-bold uppercase tracking-widest text-brand">{a.tag}</span>
                <span className="text-slate-400">{a.date}</span>
              </div>
              <h3 className="font-heading font-bold text-xl leading-tight text-brand-dark mb-8 min-h-[3.5rem]">
                {a.title}
              </h3>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-dark group-hover:text-brand transition-colors">
                Read article <ArrowUpRight className="size-4" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-dark rounded-[2.5rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Contact</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Begin your <span className="text-brand">clinical path.</span>
              </h2>
              <p className="text-white/70 max-w-md mb-10 leading-relaxed">
                Our medical concierge team responds within 4 hours. All communications are encrypted and confidential.
              </p>
              <div className="space-y-3 text-sm text-white/80">
                <div>Main Laboratory · 3rd Floor, Kulsum International Hospital 2020 Kulsum Plaza, Blue Area, Islamabad</div>
                <div>Medical Inquiries · +92 316 4572440</div>
                <div>Email · exostempk@gmail.com</div>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <label className="text-xs font-semibold uppercase tracking-widest text-white/60">Full Name</label>
              <input type="text" required className="bg-white/10 rounded-xl py-3 px-4 text-sm placeholder:text-white/40 border border-white/10 focus:border-brand focus:outline-none transition-colors" placeholder="Jane Doe" />
              <label className="text-xs font-semibold uppercase tracking-widest text-white/60 mt-2">Email</label>
              <input type="email" required className="bg-white/10 rounded-xl py-3 px-4 text-sm placeholder:text-white/40 border border-white/10 focus:border-brand focus:outline-none transition-colors" placeholder="jane@example.com" />
              <label className="text-xs font-semibold uppercase tracking-widest text-white/60 mt-2">Message</label>
              <textarea rows={4} className="bg-white/10 rounded-xl py-3 px-4 text-sm placeholder:text-white/40 border border-white/10 focus:border-brand focus:outline-none transition-colors resize-none" placeholder="Briefly describe your medical situation…" />
              <button type="submit" className="mt-3 bg-brand text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-white hover:text-brand-dark transition-all inline-flex items-center justify-center gap-2">
                Request Consultation <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-brand/20 blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
