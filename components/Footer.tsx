import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const l = "text-slate-400 hover:text-cyan-300";
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white">{profile.name}</p>
          <p className="text-sm text-slate-400">{profile.tagline}</p>
        </div>
        <div className="flex gap-5">
          <a className={l} href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
          <a className={l} href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a className={l} href={`mailto:${profile.email}`} aria-label="Email"><Mail size={20} /></a>
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
