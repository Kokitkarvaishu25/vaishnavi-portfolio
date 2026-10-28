import Reveal from "./Reveal";
export default function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-cyan-300">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        <div className="mt-4 h-px w-full bg-gradient-to-r from-cyan-400/60 via-violet-400/30 to-transparent" />
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
