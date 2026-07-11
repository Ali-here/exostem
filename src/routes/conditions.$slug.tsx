import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getCondition, conditionCategories, conditions } from "@/lib/conditions";

export const Route = createFileRoute("/conditions/$slug")({
  loader: ({ params }) => {
    const condition = getCondition(params.slug);
    if (!condition) throw notFound();
    return { condition };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Condition not found — Luminara" }, { name: "robots", content: "noindex" }] };
    }
    const { condition } = loaderData;
    return {
      meta: [
        { title: `${condition.name} — Stem Cell Therapy | Luminara` },
        { name: "description", content: condition.summary },
        { property: "og:title", content: `${condition.name} — Stem Cell Therapy` },
        { property: "og:description", content: condition.summary },
      ],
    };
  },
  notFoundComponent: ConditionNotFound,
  component: ConditionDetail,
});

function ConditionNotFound() {
  return (
    <div className="min-h-screen bg-surface font-sans">
      <SiteNav />
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Not found</p>
        <h1 className="text-4xl font-heading font-bold text-brand-dark mb-6">Condition not available.</h1>
        <p className="text-slate-500 mb-8">The condition page you're looking for doesn't exist. Browse the full list of conditions we treat.</p>
        <Link to="/conditions" className="bg-brand-dark text-white px-6 py-3 rounded-xl font-bold hover:bg-brand transition-all inline-flex items-center gap-2">
          Browse conditions <ArrowRight className="size-4" />
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function ConditionDetail() {
  const { condition } = Route.useLoaderData();
  const category = conditionCategories.find((c) => c.key === condition.category);
  const related = conditions.filter((c) => c.category === condition.category && c.slug !== condition.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-surface font-sans text-brand-dark/90">
      <SiteNav />

      <section className="bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-20">
          <nav className="text-xs font-semibold text-slate-500 mb-6 flex flex-wrap items-center gap-2">
            <Link to="/conditions" className="hover:text-brand">Conditions</Link>
            <span>/</span>
            {category && <span className="text-brand">{category.title}</span>}
          </nav>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-dark leading-[1.05] mb-6">
                {condition.name}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">{condition.summary}</p>
            </div>
            <div className="p-8 rounded-2xl bg-surface border border-brand/5 self-start">
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Ready to talk?</p>
              <p className="text-sm text-slate-600 mb-5">Speak with a specialist about your case.</p>
              <Link to="/contact" className="w-full bg-brand-dark text-white px-5 py-3 rounded-xl font-bold hover:bg-brand transition-all inline-flex items-center justify-center gap-2 text-sm">
                Book Consultation <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Overview</p>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">How the therapy works.</h2>
            <p className="text-slate-600 leading-relaxed text-lg">{condition.overview}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Expected Benefits</p>
            <ul className="space-y-3">
              {condition.benefits.map((b: string) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 size-6 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm text-brand-dark/80 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-heading font-bold text-brand-dark mb-8">Related conditions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  to="/conditions/$slug"
                  params={{ slug: c.slug }}
                  className="group p-6 rounded-2xl bg-white border border-black/5 hover:border-brand transition-all"
                >
                  <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-brand transition-colors">{c.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
