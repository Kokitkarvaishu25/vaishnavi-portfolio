import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/portfolio";

const description = `${profile.name} – ${profile.degree}. Portfolio of AI/ML and web projects, skills, certifications and education.`;
export const metadata: Metadata = {
  title: `${profile.name} | AI/ML Engineer Portfolio`,
  description,
  keywords: ["Vaishnavi Kokitkar","AI ML","Machine Learning","Generative AI","LLM","Python","React","FastAPI","Computer Engineering","VIVA Institute of Technology","Portfolio"],
  openGraph: { title: `${profile.name} | AI/ML Engineer Portfolio`, description, type: "website" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="font-sans antialiased">{children}</body></html>);
}
