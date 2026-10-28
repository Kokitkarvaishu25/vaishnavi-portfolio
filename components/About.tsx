import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="About me">
      <Reveal className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 text-lg leading-relaxed text-slate-300 lg:col-span-2">
          <p>I am a final-year student pursuing a BE in Computer Science and Engineering (AI &amp; ML) at {profile.institute}, with an SGPI of 8.53/10 up to Semester VI.</p>
          <p>My work spans machine learning and web development. My major project, X-Geno-Gen, combines blood biomarker analysis (KNN) with CT scan classification (ResNet) for early Chronic Kidney Disease prediction, and I have also built an offline chatbot on local LLM models.</p>
          <p>I am looking for entry-level roles as a Generative AI / LLM Engineer or AI/ML Engineer, where I can keep building practical AI applications.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-semibold text-white">Languages</h3>
          <p className="mt-2 text-slate-300">{profile.spoken.join(", ")}</p>
          <h3 className="mt-6 font-semibold text-white">Interests</h3>
          <p className="mt-2 text-slate-300">{profile.interests.join(", ")}</p>
        </div>
      </Reveal>
    </Section>
  );
}
