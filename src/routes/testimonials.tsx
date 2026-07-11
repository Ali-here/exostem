import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import patientPortrait from "@/assets/patient-portrait.jpg";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Success Stories — Luminara Stem Cell Therapy" },
      { name: "description", content: "Real patients share the outcomes of their stem cell treatment journey at Luminara." },
      { property: "og:title", content: "Patient Success Stories — Luminara" },
      { property: "og:description", content: "Outcomes from patients treated across neurology, orthopedics and beyond." },
    ],
  }),
  component: Testimonials,
});

const stories = [
  { name: "Michael Henderson", role: "Orthopedic Patient · 2023", condition: "Arthritis", quote: "After years of struggling with chronic arthritis, the regenerative therapy at Luminara changed everything. I'm back to running morning miles without pain." },
  { name: "Sarah Chen", role: "Neurology Patient · 2024", condition: "Multiple Sclerosis", quote: "My relapses have dropped dramatically. Six months after treatment, I finally feel like I have my life back on my own terms." },
  { name: "The Alvarez Family", role: "Pediatric Neurology · 2024", condition: "Autism", quote: "Our son started making eye contact and forming full sentences within four months. Words we'd waited seven years to hear." },
  { name: "David Okafor", role: "Longevity Patient · 2023", condition: "Longevity", quote: "It's the most positive change I've made in a decade of health optimization. Energy, cognition, recovery — all measurably better." },
  { name: "Elena Rossi", role: "Reproductive Health · 2024", condition: "Female Infertility", quote: "After three failed IVF cycles, Luminara's protocol changed the outcome. Our daughter is nine months old." },
  { name: "James Whitaker", role: "Eye Diseases · 2023", condition: "Glaucoma", quote: "My visual field has held steady for the first time in years. The team was rigorous, kind and utterly professional." },
];

function Testimonials() {
  return (
    <div className="min-h-screen bg-surface font-sans text-brand-dark/90">
      <SiteNav />
      <PageHero
        eyebrow="Success Stories"
        title={<>Real patients. <span className="text-brand">Measurable outcomes.</span></>}
        description="Every story below is a person we've walked alongside — through evaluation, treatment and long-term follow-up."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-surface rounded-[3rem] overflow-hidden border border-black/5 flex flex-col lg:flex-row mb-16">
            <div className="lg:w-1/2">
              <img src={patientPortrait} alt="Featured patient" loading="lazy" width={900} height={900} className="w-full h-full aspect-square object-cover" />
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <div className="text-brand font-heading text-6xl leading-none mb-6">&ldquo;</div>
              <p className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed text-brand-dark">
                {stories[0].quote}
              </p>
              <div>
                <div className="font-bold text-lg">{stories[0].name}</div>
                <div className="text-slate-500 text-sm">{stories[0].role}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.slice(1).map((s) => (
              <article key={s.name} className="p-8 rounded-2xl bg-surface border border-black/5 flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-brand mb-4">{s.condition}</span>
                <p className="text-brand-dark/90 leading-relaxed mb-6 flex-1">&ldquo;{s.quote}&rdquo;</p>
                <div>
                  <div className="font-bold">{s.name}</div>
                  <div className="text-slate-500 text-xs">{s.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
            Your story could be next.
          </h2>
          <Link to="/contact" className="bg-brand-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-brand transition-all inline-flex items-center gap-2">
            Book Consultation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
