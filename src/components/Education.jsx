import { GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-space border-y border-white/5 bg-white/[0.015]">
      <div className="container-shell">
        <SectionHeading
          eyebrow="05 / Education"
          title="Academic foundation."
          text="A B.Tech foundation supported by consistent academic performance through school and university."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {education.map((item) => (
            <article key={item.degree} className="glass-card relative overflow-hidden p-6">
              <div className="absolute right-5 top-5 text-cyan-300/15">
                <GraduationCap size={52} />
              </div>
              <p className="font-mono text-xs text-cyan-300">{item.period}</p>
              <h3 className="mt-8 max-w-[75%] font-display text-xl font-bold text-white">{item.degree}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.institution}</p>
              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
                <span className="text-sm font-semibold text-slate-200">{item.score}</span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                  <MapPin size={12} /> {item.location}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}