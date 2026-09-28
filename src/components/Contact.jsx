import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section-space relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,.09),transparent_40%)]" />
      <div className="container-shell relative">
        <SectionHeading
          eyebrow="07 / Contact"
          title="Let’s build something useful."
          text="If you’re looking for a developer who enjoys learning, building responsive interfaces, and solving problems with a full-stack mindset, let’s connect."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <a href={`mailto:${profile.email}`} className="contact-card">
            <Mail size={20} className="text-cyan-300" />
            <span className="mt-5 text-xs uppercase tracking-[0.18em] text-slate-500">Email</span>
            <strong className="mt-1 break-all text-sm text-white">{profile.email}</strong>
          </a>
          <a href={`tel:${profile.phone}`} className="contact-card">
            <Phone size={20} className="text-cyan-300" />
            <span className="mt-5 text-xs uppercase tracking-[0.18em] text-slate-500">Phone</span>
            <strong className="mt-1 text-sm text-white">{profile.phone}</strong>
          </a>
          <div className="contact-card">
            <MapPin size={20} className="text-cyan-300" />
            <span className="mt-5 text-xs uppercase tracking-[0.18em] text-slate-500">Location</span>
            <strong className="mt-1 text-sm text-white">{profile.location}</strong>
          </div>
        </div>

        <a
          href={`mailto:${profile.email}?subject=${encodeURIComponent("Portfolio opportunity — Aparajita")}&body=${encodeURIComponent("Hi Aparajita,\\n\\nI came across your portfolio and would like to discuss an opportunity.\\n\\nRegards,")}`}
          className="btn-primary mt-8"
          aria-label="Start a conversation by email"
        >
          Start a conversation <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}