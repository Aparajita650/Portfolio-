import { ArrowUp, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <div className="container-shell flex flex-col gap-4 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex items-center gap-2">
          <Code2 size={14} className="text-cyan-300" />
          Designed & built with React 19 + Tailwind CSS.
        </p>
        <a href="#home" className="inline-flex items-center gap-2 hover:text-white">
          Back to top <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}