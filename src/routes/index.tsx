import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pranav Chaudhari — Backend & AI Developer" },
      { name: "description", content: "Portfolio of Pranav Chaudhari, B.Tech CSE AIML student building backend systems with FastAPI, PostgreSQL and AI." },
    ],
  }),
});

const projects = [
  {
    title: "Predict Lab",
    stack: ["Python", "Scikit-learn", "Streamlit"],
    desc: "End-to-end machine learning platform for training, evaluating and deploying models from a single interface.",
    href: "https://github.com/PranavChaudhari009",
  },
  {
    title: "Gaming Blog Backend",
    stack: ["FastAPI", "PostgreSQL"],
    desc: "Production-ready backend API powering a gaming blog with auth, posts, and structured content endpoints.",
    href: "https://github.com/PranavChaudhari009",
  },
  {
    title: "CRUD API System",
    stack: ["FastAPI", "SQLAlchemy"],
    desc: "Authentication and full CRUD operations backend with clean architecture and typed schemas.",
    href: "https://github.com/PranavChaudhari009",
  },
  {
    title: "Hackathon Project",
    stack: ["React", "FastAPI"],
    desc: "Team hackathon build pairing a React frontend with a FastAPI backend under time pressure.",
    href: "https://github.com/PranavChaudhari009",
  },
];

const skills = [
  "Python", "FastAPI", "PostgreSQL", "SQLAlchemy",
  "Machine Learning", "Git", "GitHub", "React",
];

function Index() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-6 py-3 flex items-center gap-6 text-sm">
        <a href="#home" className="font-display font-bold text-gradient">PC.</a>
        <div className="hidden sm:flex gap-5 text-muted-foreground">
          <a href="#projects" className="hover:text-foreground transition">Projects</a>
          <a href="#skills" className="hover:text-foreground transition">Skills</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center px-6 pt-24">
        <div className="max-w-5xl mx-auto w-full">
          <div className="animate-fade-up inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="size-2 rounded-full bg-accent animate-glow" />
            Available for collaborations
          </div>
          <h1 className="animate-fade-up text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] mb-6" style={{ animationDelay: "0.1s" }}>
            Hi, I'm <span className="text-gradient">Pranav</span>.
            <br />
            <span className="text-muted-foreground">Backend & AI Developer.</span>
          </h1>
          <p className="animate-fade-up max-w-2xl text-lg text-muted-foreground leading-relaxed mb-10" style={{ animationDelay: "0.2s" }}>
            B.Tech CSE (AIML) student currently deep in <span className="text-foreground">FastAPI, PostgreSQL</span> and backend engineering.
            Previously built <span className="text-foreground">Predict Lab</span>, an end-to-end ML platform.
            Interested in AI systems, backend development, and scalable applications.
          </p>
          <div className="animate-fade-up flex flex-wrap gap-3" style={{ animationDelay: "0.3s" }}>
            <a href="#projects" className="glass glass-hover rounded-full px-6 py-3 text-sm font-medium inline-flex items-center gap-2 bg-primary/20 border-primary/40">
              <Sparkles className="size-4" /> View Projects
            </a>
            <a href="#contact" className="glass glass-hover rounded-full px-6 py-3 text-sm font-medium inline-flex items-center gap-2">
              <Mail className="size-4" /> Get in touch
            </a>
          </div>
        </div>
        <div className="absolute right-10 top-1/3 hidden lg:block animate-float">
          <div className="glass rounded-3xl p-8 w-64">
            <Code2 className="size-10 text-accent mb-4" />
            <div className="text-xs text-muted-foreground font-mono space-y-1">
              <div><span className="text-accent">async def</span> <span className="text-primary">build</span>():</div>
              <div className="pl-4">return "scalable"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-sm text-accent font-mono mb-2">// 01 — Work</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Selected <span className="text-gradient">projects</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="glass glass-hover rounded-2xl p-7 animate-fade-up flex flex-col"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/20">{t}</span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">{p.desc}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition w-fit"
                >
                  <Github className="size-4" /> View on GitHub <ExternalLink className="size-3" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-sm text-accent font-mono mb-2">// 02 — Toolkit</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Skills & <span className="text-gradient">stack</span></h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <span
                key={s}
                className="glass glass-hover rounded-xl px-5 py-3 text-sm font-medium animate-fade-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-3xl p-10 sm:p-14 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-sm text-accent font-mono mb-2">// 03 — Resume</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Want the full story?</h2>
              <p className="text-muted-foreground">Grab my resume for education, experience and details.</p>
            </div>
            <a
              href="/pranav-chaudhari-resume.pdf"
              download
              className="glass glass-hover rounded-full px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2 bg-primary/25 border-primary/40 w-fit"
            >
              <Download className="size-4" /> Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-accent font-mono mb-2">// 04 — Contact</p>
          <h2 className="text-4xl sm:text-6xl font-bold mb-6">Let's <span className="text-gradient">build</span> together.</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Open to internships, collaborations and interesting backend or AI projects.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:chaudharipranav175@gmail.com" className="glass glass-hover rounded-full px-5 py-3 text-sm inline-flex items-center gap-2">
              <Mail className="size-4 text-accent" /> chaudharipranav175@gmail.com
            </a>
            <a href="https://github.com/PranavChaudhari009" target="_blank" rel="noreferrer" className="glass glass-hover rounded-full px-5 py-3 text-sm inline-flex items-center gap-2">
              <Github className="size-4 text-accent" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/pranavchaudhari009/" target="_blank" rel="noreferrer" className="glass glass-hover rounded-full px-5 py-3 text-sm inline-flex items-center gap-2">
              <Linkedin className="size-4 text-accent" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pranav Chaudhari. Built with FastAPI energy ⚡
      </footer>
    </div>
  );
}
