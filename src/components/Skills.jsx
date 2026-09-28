import { Database, Globe2, Wrench, Braces } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolio";

const icons = [Braces, Globe2, Database, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="02 / Technical Skills"
          title="The toolkit behind my work."
          text="A practical stack centered around Java full-stack development, responsive frontend engineering, databases, and developer tooling."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group, index) => {
            const Icon = icons[index];
            return (
              <article key={group.title} className="skill-panel">
                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-cyan-300">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white">{group.title}</h3>
                    <p className="text-xs text-slate-500">Core capability</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}