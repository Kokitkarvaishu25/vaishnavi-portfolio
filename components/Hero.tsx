"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";

const btn = "inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5";
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="blob absolute -left-24 top-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="blob absolute right-0 top-40 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl [animation-delay:-8s]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-300">{profile.degree}</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">{profile.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Final-year engineering student at {profile.institute}, aiming for Generative AI / LLM Engineer and AI/ML Engineer roles. {profile.tagline}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {profile.interests.map((i) => (<li key={i} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{i}</li>))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className={`${btn} bg-cyan-400 text-slate-950 hover:bg-cyan-300`}>View Projects <ArrowRight size={16} aria-hidden /></a>
            <a href={profile.resume} download className={`${btn} border border-white/15 bg-white/5 text-white hover:bg-white/10`}><Download size={16} aria-hidden /> Download Resume</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={`${btn} border border-white/15 text-slate-200 hover:bg-white/10`}><Github size={16} aria-hidden /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={`${btn} border border-white/15 text-slate-200 hover:bg-white/10`}><Linkedin size={16} aria-hidden /> LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
