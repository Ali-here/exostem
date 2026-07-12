import { Link } from "@tanstack/react-router";
import logoWhite from "@/assets/logo-white.png";

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-sm">
          <div className="text-2xl font-heading font-bold text-brand mb-4 uppercase">
            <img
    src={logoWhite}
    alt="Exostem Logo"
    className="h-12 w-auto"
  /></div>
          <p className="text-white/60 text-sm leading-relaxed">
            Advanced regenerative medicine — certified specialists, modern laboratory, personalized
            protocols for patients from around the world.
          </p>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-white/80 hover:text-brand transition-colors">About</Link></li>
            <li><Link to="/conditions" className="text-white/80 hover:text-brand transition-colors">Conditions</Link></li>
            <li><Link to="/treatment-process" className="text-white/80 hover:text-brand transition-colors">Treatment Process</Link></li>
            <li><Link to="/stem-cells" className="text-white/80 hover:text-brand transition-colors">Stem Cells</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Care</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="text-white/80 hover:text-brand transition-colors">FAQ</Link></li>
            {/* <li><Link to="/testimonials" className="text-white/80 hover:text-brand transition-colors">Testimonials</Link></li> */}
            <li><Link to="/contact" className="text-white/80 hover:text-brand transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/40">
        <div>© {new Date().getFullYear()} Exostem. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand transition-colors">Ethics Board</a>
        </div>
      </div>
    </footer>
  );
}
