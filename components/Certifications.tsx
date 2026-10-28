import { Award } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Certifications &amp; courses">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <li key={c.name}>
            <Reveal delay={i * 0.04} className="h-full rounded-2xl border border-white/10 bg-white/5 p-5">
              <Award size={20} className="text-violet-300" aria-hidden />
              <h3 className="mt-3 font-semibold text-white">{c.name}</h3>
              {c.issuer && <p className="mt-1 text-sm text-cyan-200">{c.issuer}</p>}
              {c.note && <p className="mt-2 text-sm text-slate-400">{c.note}</p>}
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
