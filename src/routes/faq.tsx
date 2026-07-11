import { createFileRoute } from "@tanstack/react-router";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Exostem Stem Cell Therapy" },
      { name: "description", content: "Answers to frequent questions about stem cell therapy, eligibility, safety, cost and outcomes." },
      { property: "og:title", content: "Frequently Asked Questions — Exostem" },
      { property: "og:description", content: "Common questions about stem cell therapy, answered clearly." },
    ],
  }),
  component: FAQPage,
});

const groups = [
  {
    label: "General",
    faqs: [
      { q: "What conditions do you treat?", a: "We treat conditions across pediatric neurology, neurology, orthopedics, anti-aging, reproductive health and eye diseases. See the Conditions page for the full list." },
      { q: "How long do results typically take to appear?", a: "Biological responses vary. Orthopedic protocols often show improvement within weeks, while neurological cases typically develop over 3–6 months." },
      { q: "Is stem cell therapy safe?", a: "Autologous cellular therapy carries a strong safety profile. Every case is screened, and cells are quality-checked before administration." },
    ],
  },
  {
    label: "Eligibility & Process",
    faqs: [
      { q: "How do I know if I am eligible?", a: "Eligibility is determined after a specialist consultation reviewing your medical history, imaging and laboratory results." },
      { q: "Do I need to travel to your clinic?", a: "Yes — treatment is performed onsite. Our concierge team supports international travel, accommodation and follow-up." },
      { q: "How long does the full process take?", a: "From consultation to treatment typically takes 3–4 weeks. Follow-up spans 12 months." },
    ],
  },
  {
    label: "Cells & Sources",
    faqs: [
      { q: "Where are the stem cells sourced from?", a: "Primarily autologous — from the patient — via bone marrow or adipose extraction. We also use screened allogeneic sources when clinically indicated." },
      { q: "Do you use embryonic stem cells?", a: "No. Our protocols use adult mesenchymal, hematopoietic and ethically sourced umbilical cord-derived cells." },
    ],
  },
  {
    label: "Costs & Insurance",
    faqs: [
      { q: "How much does treatment cost?", a: "Cost varies by condition, protocol complexity and monitoring requirements. We provide a transparent estimate after your consultation." },
      { q: "Is it covered by insurance?", a: "Coverage varies by country and insurer. Our concierge team helps identify eligibility and reimbursement options." },
    ],
  },
];

function FAQPage() {
  const [openKey, setOpenKey] = useState<string | null>("0-0");
  return (
    <div className="min-h-screen bg-surface font-sans text-brand-dark/90">
      <SiteNav />
      <PageHero
        eyebrow="FAQ"
        title={<>Answers to the questions <span className="text-brand">patients ask most.</span></>}
        description="If you don't find your answer here, our concierge team responds to written inquiries within 4 hours."
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-14">
          {groups.map((g, gi) => (
            <div key={g.label}>
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-6">{g.label}</h2>
              <div className="divide-y divide-black/5 border-y border-black/5">
                {g.faqs.map((f, i) => {
                  const key = `${gi}-${i}`;
                  const isOpen = openKey === key;
                  return (
                    <div key={f.q} className="py-2">
                      <button onClick={() => setOpenKey(isOpen ? null : key)} className="w-full flex items-center justify-between text-left py-4 gap-6">
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
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
