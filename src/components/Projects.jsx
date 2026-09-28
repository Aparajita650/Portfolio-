import { ArrowUpRight, CheckCircle2, CodeXml, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="04 / Selected Projects"
          title="Projects that demonstrate range."
          text="From AI-powered career guidance to focused backend/API workflows and secure authentication, these projects reflect practical full-stack engineering."
        />

        <div className="space-y-5">
          {projects.map((project, index) => (
            <article key={project.title} className="project-card group">
              <div className="flex flex-col gap-8 p-6 sm:p-8 lg:grid lg:grid-cols-[90px_1fr_1fr] lg:items-start lg:p-10">
                <div className="font-mono text-sm text-cyan-300/70">{project.number}</div>

                <div>
                  <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                    <CodeXml size={14} />
                    {project.type}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => <span key={tech} className="chip">{tech}</span>)}
                  </div>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-live-link mt-6"
                    >
                      View live project <ExternalLink size={15} />
                    </a>
                  ) : (
                    <p className="mt-5 text-xs text-slate-500">
                      Add the deployed URL in <code>src/data/portfolio.js</code> to enable the live link.
                    </p>
                  )}
                </div>

                <div className="rounded-2xl border border-white/5 bg-slate-950/50 p-5">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Highlights</p>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-300">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={16} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-end border-t border-white/5 px-6 py-3 text-xs text-slate-500 sm:px-8">
                Project {index + 1} <ArrowUpRight size={14} className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}