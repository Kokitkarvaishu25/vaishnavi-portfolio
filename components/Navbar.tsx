"use client";
import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = ["Home", "About", "Skills", "Projects", "Certifications", "Education", "Contact"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b16]/80 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-semibold text-white">VK<span className="text-cyan-300">.</span></a>
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (<li key={l}><a href={`#${l.toLowerCase()}`} className="text-sm text-slate-300 transition hover:text-cyan-300">{l}</a></li>))}
        </ul>
        <div className="flex items-center gap-3">
          <a href={profile.resume} download className="hidden items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-300 sm:inline-flex">
            <Download size={16} aria-hidden /> Resume
          </a>
          <button className="rounded-lg p-2 text-slate-200 hover:bg-white/10 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-white/10 bg-[#070b16] px-5 py-3 lg:hidden">
          {links.map((l) => (<li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-2.5 text-slate-200">{l}</a></li>))}
          <li><a href={profile.resume} download className="mt-2 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950"><Download size={16} aria-hidden /> Resume</a></li>
        </ul>
      )}
    </header>
  );
}
