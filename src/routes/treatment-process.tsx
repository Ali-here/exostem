import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/treatment-process")({
  head: () => ({
    meta: [
      { title: "Treatment Process — Luminara Stem Cell Therapy" },
      { name: "description", content: "How stem cell therapy works at Luminara — from initial consultation to long-term recovery monitoring." },
      { property: "og:title", content: "Treatment Process — Luminara" },
      { property: "og:description", content: "A clear, clinical path from first contact to long-term recovery." },
    ],
  }),
  component: Process,
});

const phases = [
  { n: "01", title: "Consultation", body: "A dedicated specialist reviews your medical history, imaging and objectives to determine candidacy for cellular therapy.", duration: "60 min" },
  { n: "02", title: "Diagnostics", body: "Advanced imaging, blood panels and genetic profiling establish a precise clinical baseline.", duration: "1–2 weeks" },
  { n: "03", title: "Protocol Design", body: "Our multidisciplinary team designs a treatment plan calibrated to your biology, target tissue and goals.", duration: "3–5 days" },
  { n: "04", title: "Cell Harvest", body: "Autologous stem cells are collected via minimally invasive bone marrow or adipose extraction.", duration: "Same-day" },
  { n: "05", title: "Laboratory Expansion", body: "Cells are cultivated, characterized and quality-checked in our ISO-certified clean rooms.", duration: "7–14 days" },
  { n: "06", title: "Therapeutic Administration", body: "Precision delivery — systemic IV, intra-articular or image-guided injection — matched to your protocol.", duration: "Same-day" },
  { n: "07", title: "Follow-Up", body: "Structured 12-month monitoring with objective outcome measures and, when needed, booster sessions.", duration: "12 months" },
];

function Process() {
  return (
    <div className="min-h-screen bg-surface font-sans text-brand-dark/90">
      <SiteNav />
      <PageHero
        eyebrow="Treatment Process"
        title={<>A clinical pathway <span className="text-brand">designed around you.</span></>}
        description="Seven precise phases. Every one owned by the same team that will see you through recovery."
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ol className="relative border-l-2 border-brand/15 pl-8 space-y-12">
            {phases.map((p) => (
              <li key={p.n} className="relative">
                <span className="absolute -left-[43px] top-0 size-8 rounded-full bg-brand text-white font-bold text-xs flex items-center justify-center ring-4 ring-white">
                  {p.n}
                </span>
                <div className="flex flex-wrap items-baseline gap-3 mb-3">
                  <h3 className="text-2xl font-heading font-bold text-brand-dark">{p.title}</h3>
                  <span className="text-xs font-mono uppercase tracking-widest text-brand">{p.duration}</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
            Ready to start your evaluation?
          </h2>
          <p className="text-slate-600 mb-8">
            Our concierge team will coordinate diagnostics, travel and treatment.
          </p>
          <Link to="/contact" className="bg-brand-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-brand transition-all inline-flex items-center gap-2">
            Book Consultation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
