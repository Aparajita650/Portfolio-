import { BriefcaseBusiness, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-space border-y border-white/5 bg-white/[0.015]">
      <div className="container-shell">
        <SectionHeading
          eyebrow="03 / Experience"
          title="Learning by building."
          text="Hands-on training experience across Java, object-oriented programming, and responsive frontend development."
        />

        <div className="relative ml-3 border-l border-cyan-300/20 pl-8 sm:ml-5 sm:pl-12">
          {experience.map((item) => (
            <article key={item.title} className="relative max-w-4xl">
              <span className="absolute -left-[2.35rem] top-1.5 grid h-7 w-7 place-items-center rounded-full border border-cyan-300/30 bg-slate-950 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,.15)] sm:-left-[3.35rem]">
                <BriefcaseBusiness size={13} />
              </span>
              <div className="glass-card p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{item.period}</p>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-slate-300">{item.company}</p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-400">
                    <MapPin size={13} /> {item.location}
                  </span>
                </div>
                <ul className="mt-7 space-y-4">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-400">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}