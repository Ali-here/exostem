import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">{eyebrow}</p>
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-dark leading-[1.05] max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
