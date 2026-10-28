"use client";
import { motion } from "framer-motion";
import { Cloud, Code2, Cpu, Database, Globe, Wrench } from "lucide-react";
import Section from "./Section";
import { skills } from "@/data/portfolio";

const icons = { code: Code2, cpu: Cpu, globe: Globe, db: Database, cloud: Cloud, tool: Wrench };
export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => {
          const Icon = icons[s.icon as keyof typeof icons];
          return (
            <motion.div key={s.category} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3"><Icon size={20} className="text-cyan-300" aria-hidden /><h3 className="font-semibold text-white">{s.category}</h3></div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => (<li key={it} className="rounded-md bg-slate-800/80 px-2.5 py-1 text-sm text-slate-200">{it}</li>))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
