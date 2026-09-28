import { ArrowDown, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <div className="container-shell relative grid items-center gap-14 py-20 lg:grid-cols-[1.25fr_.75fr]">
        <div className="reveal-up">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-4 py-2 text-xs font-semibold text-cyan-200">
            <span className="pulse-dot" />
            Java Full Stack · React · SQL
          </div>

          <p className="mb-4 font-display text-sm font-bold uppercase tracking-[0.3em] text-slate-400">
            Hello, I&apos;m
          </p>

          <h1 className="font-display text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[var(--text)] sm:text-6xl lg:text-8xl">
            Aparajita<span className="text-cyan-300">.</span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-xl font-semibold text-white sm:text-2xl">{profile.role}</span>
            <span className="hidden h-1 w-1 rounded-full bg-cyan-300 sm:block" />
            <span className="text-slate-400">Java · React · SQL</span>
          </div>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a href="/Aparajita-Resume.pdf" download className="btn-secondary">
              <Download size={17} /> Download Resume
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-cyan-300">
              <Mail size={15} /> {profile.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} /> {profile.location}
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm reveal-float lg:ml-auto">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-cyan-400/10 blur-3xl" />
          <div className="relative glass-card p-5">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500">developer.profile</span>
                <span className="text-xs text-emerald-300">available</span>
              </div>
              <div className="mt-12">
                <div className="grid h-24 w-24 place-items-center rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 to-blue-500/10 font-display text-4xl font-black text-cyan-200">
                  A
                </div>
                <h3 className="mt-7 font-display text-2xl font-bold text-white">Java Full Stack</h3>
                <p className="mt-1 text-slate-400">Developer / Trainee</p>
              </div>
              <div className="mt-9 space-y-3 font-mono text-xs">
                <p><span className="text-cyan-300">const</span> stack = [</p>
                <p className="pl-5 text-slate-300">&quot;Java&quot;, &quot;React 19&quot;,</p>
                <p className="pl-5 text-slate-300">&quot;Tailwind CSS&quot;, &quot;MySQL&quot;</p>
                <p>];</p>
              </div>
              <div className="mt-8 flex gap-2">
                <a href={`mailto:${profile.email}`} className="icon-button" aria-label="Email">
                  <Mail size={16} />
                </a>
                <a href="#contact" className="icon-button" aria-label="Contact">
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-500 md:flex">
        Scroll <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}