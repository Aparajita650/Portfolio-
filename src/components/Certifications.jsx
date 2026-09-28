import { Award, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading eyebrow="06 / Certifications" title="Learning beyond the classroom." />
        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map((certificate, index) => (
            <article key={certificate} className="glass-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-300/10 text-cyan-300">
                  <Award size={20} />
                </div>
                <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
              </div>
              <h3 className="mt-6 font-display font-bold leading-6 text-white">{certificate}</h3>
              <div className="mt-5 flex items-center gap-2 text-xs text-emerald-300">
                <Check size={14} /> Listed on resume
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}