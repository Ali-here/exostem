import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const conditionGroups = [
  {
    group: "Pediatric Neurology",
    items: [
      { label: "Autism", slug: "autism" },
      { label: "Cerebral Palsy", slug: "cerebral-palsy" },
      { label: "Developmental Delay", slug: "developmental-delay" },
    ],
  },
  {
    group: "Neurology",
    items: [{ label: "Multiple Sclerosis", slug: "multiple-sclerosis" }],
  },
  {
    group: "Orthopedics",
    items: [
      { label: "Arthritis", slug: "arthritis" },
      { label: "Sports Injury", slug: "sports-injury" },
    ],
  },
  {
    group: "Anti-Aging",
    items: [
      { label: "Skin Recovery", slug: "skin-recovery" },
      { label: "Scar Regeneration", slug: "scar-regeneration" },
      { label: "Pigmentation Repair", slug: "pigmentation-repair" },
      { label: "Wrinkle Reduction", slug: "wrinkle-reduction" },
      { label: "Psoriasis", slug: "psoriasis" },
      { label: "Menopause", slug: "menopause" },
      { label: "Longevity", slug: "longevity" },
    ],
  },
  {
    group: "Reproductive Health",
    items: [
      { label: "Male Infertility", slug: "male-infertility" },
      { label: "Female Infertility", slug: "female-infertility" },
      { label: "Erectile Dysfunction", slug: "erectile-dysfunction" },
    ],
  },
  {
    group: "Eye Diseases",
    items: [
      { label: "Glaucoma", slug: "glaucoma" },
      { label: "Retinitis", slug: "retinitis" },
    ],
  },
];

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/treatment-process", label: "Treatment Process" },
  { to: "/stem-cells", label: "Stem Cells" },
  { to: "/faq", label: "FAQ" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight font-heading text-brand">
          Exostem
        </Link>

        <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-brand transition-colors"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-brand" }}
          >
            Home
          </Link>
          <Link to="/about" className="hover:text-brand transition-colors" activeProps={{ className: "text-brand" }}>
            About
          </Link>
          <div className="relative group">
            <Link
              to="/conditions"
              className="flex items-center gap-1 cursor-pointer hover:text-brand transition-colors"
              activeProps={{ className: "text-brand" }}
            >
              Conditions <ChevronDown className="size-4" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 hidden group-hover:block">
              <div className="w-[560px] bg-white rounded-2xl border border-black/5 shadow-xl p-6 grid grid-cols-2 gap-6 text-sm">
                {conditionGroups.map((g) => (
                  <div key={g.group}>
                    <div className="text-xs font-bold uppercase tracking-widest text-brand mb-3">
                      {g.group}
                    </div>
                    <ul className="space-y-1.5">
                      {g.items.map((it) => (
                        <li key={it.slug}>
                          <Link
                            to="/conditions/$slug"
                            params={{ slug: it.slug }}
                            className="block py-1 text-brand-dark/80 hover:text-brand transition-colors"
                          >
                            {it.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link to="/treatment-process" className="hover:text-brand transition-colors" activeProps={{ className: "text-brand" }}>
            Process
          </Link>
          <Link to="/stem-cells" className="hover:text-brand transition-colors" activeProps={{ className: "text-brand" }}>
            Stem Cells
          </Link>
          <Link to="/faq" className="hover:text-brand transition-colors" activeProps={{ className: "text-brand" }}>
            FAQ
          </Link>
          <Link to="/testimonials" className="hover:text-brand transition-colors" activeProps={{ className: "text-brand" }}>
            Testimonials
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex bg-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-dark transition-all"
          >
            Book Consultation
          </Link>
          <button
            className="lg:hidden p-2 -mr-2 text-brand-dark"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-black/5 bg-white max-h-[75vh] overflow-y-auto">
          <div className="px-6 py-6 space-y-4 text-sm">
            <Link to="/" className="block py-2 font-semibold" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block py-2 font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/conditions"
              className="block py-2 font-semibold text-brand"
              onClick={() => setMobileOpen(false)}
            >
              All Conditions →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
