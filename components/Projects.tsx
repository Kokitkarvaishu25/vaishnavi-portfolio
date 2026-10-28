"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Section from "./Section";
import { projects, type Project } from "@/data/portfolio";

function Tags({ items }: { items: string[] }) {
  return (<ul className="flex flex-wrap gap-2">{items.map((t) => (<li key={t} className="rounded-md border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-200">{t}</li>))}</ul>);
}
function Links({ p }: { p: Project }) {
  if (!p.github && !p.demo) return null;
  const c = "inline-flex items-center gap-1.5 text-sm text-slate-200 hover:text-cyan-300";
  return (
    <div className="mt-5 flex gap-4">
      {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className={c}><Github size={16} aria-hidden /> GitHub</a>}
      {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className={c}><ExternalLink size={16} aria-hidden /> Live demo</a>}
    </div>
  );
}
export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <Section id="projects" eyebrow="Projects" title="Selected projects">
      {featured && (
        <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -4 }}
          className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 via-white/5 to-violet-500/10 p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-slate-950">Featured project</span>
            {featured.status && <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">{featured.status}</span>}
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{featured.name}</h3>
          <p className="mt-3 max-w-3xl text-lg text-slate-300">{featured.short}</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-white">Problem it addresses</h4>
              <p className="mt-2 text-slate-300">{featured.problem}</p>
              {featured.contribution && (<><h4 className="mt-6 font-semibold text-white">My role</h4><p className="mt-2 text-slate-300">{featured.contribution}</p></>)}
            </div>
            <div>
              <h4 className="font-semibold text-white">Key features</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">{featured.features.map((f) => (<li key={f}>{f}</li>))}</ul>
            </div>
          </div>
          <div className="mt-8"><Tags items={featured.tech} /></div>
          <Links p={featured} />
        </motion.article>
      )}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((p, i) => (
          <motion.article key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -4 }}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">{p.name}</h3>
            <p className="mt-2 text-slate-300">{p.short}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">{p.features.map((f) => (<li key={f}>{f}</li>))}</ul>
            {p.contribution && <p className="mt-4 text-sm text-slate-400">{p.contribution}</p>}
            <div className="mt-5"><Tags items={p.tech} /></div>
            <Links p={p} />
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
