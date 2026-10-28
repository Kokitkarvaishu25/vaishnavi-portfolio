"use client";
import { useState } from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Section from "./Section";
import { profile } from "@/data/portfolio";

const field = "mt-1 w-full rounded-lg border border-white/15 bg-slate-900/70 px-3 py-2.5 text-slate-100 placeholder:text-slate-500";
export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${encodeURIComponent(message)}`;
  };
  const link = "flex items-center gap-3 text-slate-200 hover:text-cyan-300";
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-lg text-slate-300">I am open to internship and entry-level opportunities in AI/ML and Generative AI. The easiest way to reach me is by email.</p>
          <ul className="mt-6 space-y-4">
            <li><a className={link} href={`mailto:${profile.email}`}><Mail size={20} aria-hidden /> {profile.email}</a></li>
            <li><a className={link} href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} aria-hidden /> LinkedIn</a></li>
            <li><a className={link} href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={20} aria-hidden /> GitHub</a></li>
            <li><a className={link} href={profile.resume} download><Download size={20} aria-hidden /> Download Resume</a></li>
          </ul>
        </div>
        <form onSubmit={send} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <label className="block text-sm text-slate-300">Your name
            <input required value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="Name" /></label>
          <label className="mt-4 block text-sm text-slate-300">Message
            <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className={field} placeholder="Write your message" /></label>
          <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300">
            <Mail size={16} aria-hidden /> Open in email app
          </button>
          <p className="mt-3 text-xs text-slate-400">This form has no server. It opens your email app with the message ready to send.</p>
        </form>
      </div>
    </Section>
  );
}
