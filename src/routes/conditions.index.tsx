import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { conditionCategories, conditionsByCategory } from "@/lib/conditions";

export const Route = createFileRoute("/conditions/")({
  head: () => ({
    meta: [
      { title: "Conditions We Treat — Luminara" },
      { name: "description", content: "Stem cell therapy protocols across pediatric neurology, neurology, orthopedics, anti-aging, reproductive health and eye diseases." },
      { property: "og:title", content: "Conditions We Treat — Luminara" },
      { property: "og:description", content: "Regenerative protocols for 18+ conditions across six clinical disciplines." },
    ],
  }),
  component: ConditionsIndex,
});

function ConditionsIndex() {
  return (
    <div className="min-h-screen bg-surface font-sans text-brand-dark/90">
      <SiteNav />
      <PageHero
        eyebrow="Conditions"
        title={<>Regenerative protocols across <span className="text-brand">six disciplines.</span></>}
        description="From pediatric neurology to eye disease, our cellular therapies target the biological roots of chronic conditions — not just their symptoms."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {conditionCategories.map((cat) => {
            const items = conditionsByCategory(cat.key);
            if (items.length === 0) return null;
            return (
              <div key={cat.key}>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                  <div>
                    <div className="text-3xl mb-2">{cat.icon}</div>
                    <h2 className="text-3xl font-heading font-bold text-brand-dark">{cat.title}</h2>
                    <p className="text-slate-500 mt-2 max-w-xl">{cat.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((c) => (
                    <Link
                      key={c.slug}
                      to="/conditions/$slug"
                      params={{ slug: c.slug }}
                      className="group p-6 rounded-2xl bg-surface border border-black/5 hover:border-brand hover:bg-white transition-all"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-heading font-bold text-lg text-brand-dark group-hover:text-brand transition-colors">{c.name}</h3>
                        <ArrowUpRight className="size-4 shrink-0 text-slate-400 group-hover:text-brand transition-colors" />
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">{c.summary}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
