import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import heroCells from "@/assets/hero-cells.jpg";

export const Route = createFileRoute("/stem-cells")({
  head: () => ({
    meta: [
      { title: "Stem Cells Explained — Luminara" },
      { name: "description", content: "What stem cells are, how they work, and the sources we use in regenerative medicine." },
      { property: "og:title", content: "Stem Cells Explained — Luminara" },
      { property: "og:description", content: "The biology behind regenerative medicine, explained clearly." },
      { property: "og:image", content: "/favicon.ico" },
    ],
  }),
  component: StemCells,
});

const types = [
  { title: "Mesenchymal (MSC)", body: "Extracted from bone marrow or adipose tissue. Modulates immune response and supports musculoskeletal repair." },
  { title: "Hematopoietic (HSC)", body: "Blood-forming cells used to address certain autoimmune and hematological conditions." },
  { title: "Umbilical Cord-Derived", body: "Ethically sourced allogeneic cells with high proliferative capacity, useful when autologous options are limited." },
  { title: "Induced Pluripotent (iPSC)", body: "Cells reprogrammed to a pluripotent state — actively researched for targeted tissue regeneration." },
];

function StemCells() {
  return (
    <div className="min-h-screen bg-surface font-sans text-brand-dark/90">
      <SiteNav />
      <PageHero
        eyebrow="Stem Cells"
        title={<>The biology behind <span className="text-brand">regenerative medicine.</span></>}
        description="Stem cells are the body's raw material — undifferentiated cells that can renew themselves and become specialized tissue. Understanding them is the first step toward understanding your treatment."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img src={heroCells} alt="Microscopic stem cell visualization" loading="lazy" width={1200} height={1000} className="w-full aspect-[4/3] object-cover rounded-3xl border border-black/5" />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Why they matter</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6 leading-tight">
              A single signal can restart tissue repair.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Stem cells respond to their environment — releasing growth factors, calming inflammation, and directing surrounding cells
              to repair themselves. In degenerative disease, that signaling breaks down. Regenerative therapy restores it.
            </p>
            <p className="text-slate-600 leading-relaxed">
              At Luminara, we characterize every batch before administration to ensure viability, potency and safety.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Types</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">Four cellular sources we work with.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {types.map((t) => (
              <div key={t.title} className="p-8 rounded-2xl bg-white border border-black/5">
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">{t.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            See which protocol fits your case.
          </h2>
          <p className="text-white/70 mb-8">Not all conditions are treated the same way. Our team will match the right cellular strategy to your biology.</p>
          <Link to="/contact" className="bg-brand text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-brand-dark transition-all inline-flex items-center gap-2">
            Book Consultation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
