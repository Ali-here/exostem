import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Microscope, Users, Globe2, Linkedin } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import teamDirector from "@/assets/team-director.jpeg";
import teamBiologist from "@/assets/team-biologist.jpeg";
import teamCare from "@/assets/team-care.jpeg";
import teamNeurologist from "@/assets/team-neurologist.jpeg";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Stem Cell Therapy — Exostem" },
      { name: "description", content: "Learn how Exostem's regenerative medicine practice combines cellular science, clinical rigor and personalized care." },
      { property: "og:title", content: "About Stem Cell Therapy — Exostem" },
      { property: "og:description", content: "Cellular science and clinical rigor for regenerative medicine." },
    ],
  }),
  component: About,
});

const pillars = [
  { Icon: ShieldCheck, title: "Evidence-First", body: "Every protocol is grounded in peer-reviewed research and continuous outcomes tracking." },
  { Icon: Microscope, title: "In-house Laboratory", body: "ISO-certified clean rooms let us cultivate and characterize cells without outsourcing." },
  { Icon: Users, title: "Multidisciplinary Team", body: "Cell biologists, immunologists and clinicians collaborate on every case." },
  { Icon: Globe2, title: "Global Reach", body: "Concierge programs support patients from more than 40 countries." },
];

const stats = [
  { v: "4,800+", l: "Patients treated" },
  { v: "18", l: "Active protocols" },
  { v: "92.4%", l: "Clinical satisfaction" },
  { v: "12", l: "Years of practice" },
];

const team = [
  {
    name: "Mirwais Khan",
    role: "CEO",
    bio: "Expert In Regenerative Medicine.",
    image: teamDirector,
  },
  {
    name: "Dr. Zia Ur Rehman",
    role: "Director",
    bio: "PhD in Molecular Biology. Expert in Exosome.",
    image: teamBiologist,
  },
  {
    name: "Dr. Noman Fazal",
    role: "Director & Scientific Consultant",
    bio: "PhD in Stem Cells. ",
    image: teamCare,
  },
  {
    name: "Aakif Khan",
    role: "Secretary",
    bio: "MPhil in Stem Cells.",
    image: teamNeurologist,
  },
];

function About() {
  return (

    <div className="min-h-screen bg-surface font-sans text-brand-dark/90">
      <SiteNav />
      <PageHero
        eyebrow="About"
        title={<>Regenerative medicine, <span className="text-brand">reimagined for real lives.</span></>}
        description="Exostem was founded on a simple premise: the body already knows how to heal. Our job is to give it the right cellular signals — and the right clinical environment — to do so at scale."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Our Practice</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6 leading-tight">
              A clinic where laboratory and consulting room share the same building.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Stem cell therapy sits at the intersection of biology, immunology and precision medicine. We operate a fully integrated
              facility so patients see the same team from initial consultation through cell cultivation, delivery and long-term follow-up.
            </p>
            <p className="text-slate-600 leading-relaxed">
              No handoffs, no outsourcing — a single case team accountable for outcomes.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.l} className="p-6 rounded-2xl bg-surface border border-brand/5">
                <div className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-2">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Principles</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">What we stand for.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(({ Icon, title, body }) => (
              <div key={title} className="p-8 rounded-2xl bg-white border border-black/5">
                <div className="w-12 h-12 bg-brand/10 rounded-lg mb-6 flex items-center justify-center text-brand">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      <section className="py-24 bg-white">

        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Ready When You Are</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
            Talk to a specialist about your case.
          </h2>
          <p className="text-slate-600 mb-8">Our concierge team responds within 4 hours during business days.</p>
          <Link to="/contact" className="bg-brand-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-brand transition-all inline-flex items-center gap-2">
            Book Consultation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Our Team</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-5">
            The people behind the protocol.
          </h2>
          <p className="text-slate-600 leading-relaxed">
            A multidisciplinary team of physicians, scientists and care coordinators — every specialist you meet is part of the same clinic.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="group rounded-2xl bg-surface border border-black/5 overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={720}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-brand-dark mb-1">{member.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">{member.role}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{member.bio}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark hover:text-brand transition-colors"
                  aria-label={`${member.name} LinkedIn profile`}
                >
                  <Linkedin className="size-4" /> Connect
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

