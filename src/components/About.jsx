import { Code2, Layers3, Sparkles, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";

const cards = [
  { icon: Code2, title: "Clean Code", text: "Structured problem-solving with maintainable, modular application development." },
  { icon: Layers3, title: "Full Stack Mindset", text: "Comfortable moving between Java, frontend interfaces, APIs, authentication, and databases." },
  { icon: Sparkles, title: "Continuous Learning", text: "Actively exploring modern technologies and practical AI integration." },
  { icon: Target, title: "User-Centric", text: "Focused on responsive, accessible interfaces and seamless user experience." },
];

export default function About() {
  return (
    <section id="about" className="section-space border-y border-white/5">
      <div className="container-shell">
        <SectionHeading
          eyebrow="01 / About"
          title="Building with curiosity. Shipping with purpose."
          text="My profile combines a strong Java and OOP foundation with modern frontend development. I enjoy turning requirements into clean interfaces and practical applications."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="glass-card group p-6" style={{ animationDelay: `${index * 80}ms` }}>
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/15 bg-cyan-300/5 text-cyan-300 transition-transform duration-300 group-hover:-translate-y-1">
                <Icon size={19} />
              </div>
              <h3 className="mt-6 font-display font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}