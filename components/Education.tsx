import Section from "./Section";
import Reveal from "./Reveal";
import { achievements, education, experience, volunteering } from "@/data/portfolio";

const card = "rounded-2xl border border-white/10 bg-white/5 p-6";
export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education &amp; experience">
      <ol className="relative space-y-6 border-l border-cyan-400/30 pl-6">
        {education.map((e) => (
          <li key={e.title} className="relative">
            <span aria-hidden className="absolute -left-[31px] top-6 h-3 w-3 rounded-full bg-cyan-400" />
            <Reveal className={card}>
              <p className="text-sm text-cyan-300">{e.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{e.title}</h3>
              <p className="text-slate-300">{e.place}</p>
              <p className="mt-2 text-slate-400">{e.detail}</p>
            </Reveal>
          </li>
        ))}
      </ol>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal className={card}>
          <h3 className="text-lg font-semibold text-white">Internships &amp; training</h3>
          <ul className="mt-4 space-y-4">
            {experience.map((x) => (
              <li key={x.org}><p className="font-medium text-slate-100">{x.role}, {x.org}</p><p className="text-sm text-cyan-300">{x.period}</p><p className="text-sm text-slate-400">{x.detail}</p></li>
            ))}
          </ul>
        </Reveal>
        <div className="space-y-6">
          <Reveal className={card}>
            <h3 className="text-lg font-semibold text-white">Achievements</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">{achievements.map((a) => (<li key={a}>{a}</li>))}</ul>
          </Reveal>
          <Reveal className={card}>
            <h3 className="text-lg font-semibold text-white">Volunteering</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">{volunteering.map((a) => (<li key={a}>{a}</li>))}</ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
