export const profile = {
  name: "Vaishnavi Kokitkar",
  degree: "BE in Computer Science and Engineering (AI & ML)",
  institute: "VIVA Institute of Technology, University of Mumbai",
  email: "vaishnavikokitkar25@gmail.com",
  github: "https://github.com/Kokitkarvaishu25",
  linkedin: "https://www.linkedin.com/in/vaishnavi-kokitkar-84b2952a9/",
  resume: "/Vaishnavi_Kokitkar_Resume.pdf",
  tagline: "Building practical AI/ML and web applications.",
  interests: ["Generative AI / LLMs", "Machine Learning", "Explainable AI", "Web Development"],
  spoken: ["English", "Marathi", "Hindi"],
};

export const skills = [
  { category: "Programming Languages", icon: "code", items: ["Python", "JavaScript", "HTML", "CSS"] },
  { category: "AI / Machine Learning", icon: "cpu", items: ["Machine Learning", "Data Analysis", "KNN", "ResNet (CNN)", "Genetic Algorithms", "Explainable AI", "Local LLMs", "Chatbots"] },
  { category: "Web Development", icon: "globe", items: ["React", "FastAPI", "REST APIs"] },
  { category: "Databases", icon: "db", items: ["SQLite", "Firebase (Authentication, Firestore)"] },
  { category: "Cloud", icon: "cloud", items: ["AWS: EC2", "S3", "Lambda", "API Gateway", "IAM", "VPC", "DynamoDB", "CloudFront"] },
  { category: "Tools & Technologies", icon: "tool", items: ["Git", "GitHub", "Power BI"] },
];

export type Project = {
  name: string; short: string; problem?: string; tech: string[]; features: string[];
  contribution?: string; status?: string; github?: string; demo?: string; featured?: boolean;
};
export const projects: Project[] = [
  {
    name: "X-Geno-Gen: Explainable Multimodal CKD Prediction",
    short: "A web-based decision support system for early Chronic Kidney Disease prediction.",
    problem: "Supports early detection of Chronic Kidney Disease by combining two kinds of evidence, blood biomarkers and CT scan images, in one explainable system.",
    tech: ["React", "FastAPI", "SQLite", "KNN", "ResNet", "Genetic Algorithm", "Explainable AI"],
    features: ["Blood biomarker analysis using KNN", "CT scan classification using ResNet", "Genetic algorithm optimization", "Explainable AI for interpretable predictions"],
    contribution: "Listed in my resume under the Web Developer role for this project.",
    status: "Ongoing Major Project", featured: true,
  },
  { name: "Offline AI Chatbot using Local LLM", short: "A lightweight AI chatbot built using local LLM models that runs offline.",
    tech: ["Local LLMs", "Python"], features: ["Runs offline", "Built on local LLM models", "Lightweight"] },
  { name: "Vehicle Service Management System", short: "A website for vehicle service bookings.", tech: ["Web Development"], features: ["Vehicle service booking"], contribution: "Designed and developed the website." },
  { name: "TypeRacer: Typing Speed Test", short: "A fast, responsive, minimalist typing speed test app.", tech: ["HTML5", "CSS3", "JavaScript"], features: ["Typing speed test", "Responsive, minimalist UI"], github: "https://github.com/Kokitkarvaishu25/typing-speed-test" },
  { name: "Habit Lite: Habit Tracker", short: "A dark-themed habit tracking app.", tech: ["HTML", "CSS", "JavaScript", "Firebase"], features: ["Habit tracking", "Authentication and Firestore with Firebase", "Dark theme"], github: "https://github.com/Kokitkarvaishu25/habit-lite" },
];

export const certifications = [
  { name: "Python and Machine Learning" },
  { name: "AWS Cloud Certifications", note: "Covered EC2, S3, Lambda, API Gateway, IAM, VPC, DynamoDB, CloudFront" },
  { name: "MERN Stack, Machine Learning, Problem Solving", issuer: "Ed-Quest" },
  { name: "Web Development (HTML, CSS, Java)", issuer: "DevTown" },
  { name: "Web Design" },
  { name: "MS-CIT" },
];

export const education = [
  { title: "Bachelor of Engineering (BE), Computer Science and Engineering (AI & ML)", place: "VIVA Institute of Technology, University of Mumbai", period: "2023 – 2027 (expected)", detail: "SGPI: 8.53/10 (up to Semester VI)" },
  { title: "Higher Secondary Certificate (HSC / Class XII)", place: "Maharashtra State Board", period: "2023", detail: "Percentage: 57.33%" },
];

export const experience = [
  { role: "Industrial Trainee", org: "Haffkine Bio-Pharmaceutical Corporation Ltd", period: "Jun 2026 – Jul 2026", detail: "One-month industrial training in the Information Technology Department." },
  { role: "Intern", org: "Get Analytics", period: "Aug 2025 – Sep 2025", detail: "Created an interactive sales dashboard using Power BI." },
  { role: "Intern", org: "Code Vertex", period: "Aug 2024 – Sep 2024", detail: "One-month online internship focused on real-world applications of computer science." },
];

export const achievements = [
  "2nd Position, Reel-Making Competition on BIS Standard Awareness (with Bureau of Indian Standards), Mar 2026",
  "Participant, Smart India Hackathon 2026, Campus Internal Round, Sep 2026",
  "Participant, Smart India Hackathon 2024, Campus Internal Round (Team Byte System), Sep 2024",
  "Participant, Ingenious 2025 project, poster and video showcase, Apr 2025",
  "Certificate of Appreciation, Creative Team, CSE (AI & ML) department committee",
];

export const volunteering = [
  "NSS volunteer: beach cleaning, road and campus cleanliness drives",
  "Completed a 7-day residential community service camp",
  "Assisted in 10-day crowd management at Jivdani Mandir",
];
