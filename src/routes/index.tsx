import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail, Moon, Sparkles, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hamza Shaikh — Developer & Builder" },
      { name: "description", content: "Portfolio of Hamza Shaikh — developer, curious learner, and builder of things on the web." },
      { property: "og:title", content: "Hamza Shaikh — Developer & Builder" },
      { property: "og:description", content: "Portfolio of Hamza Shaikh — developer, curious learner, and builder of things on the web." },
    ],
  }),
  component: Index,
});

const GITHUB = "https://github.com/Hamzashaikh-source";
const LINKEDIN = "https://www.linkedin.com/in/hamza-shaikh-00a9a7412";
const EMAIL = "https://mail.google.com/mail/?view=cm&fs=1&to=hamzashaikh0259@gmail.com";

const projects = [
  {
    n: "01",
    title: "Open Source Lab",
    blurb: "A growing collection of experiments, utilities, and learning projects pushed to GitHub.",
    tag: "github · ongoing",
    href: GITHUB,
    span: "md:col-span-4 md:row-span-2",
    tone: "ink",
  },
  {
    n: "02",
    title: "Web Builds",
    blurb: "Front-end interfaces crafted with React, TypeScript and Tailwind.",
    tag: "react · typescript",
    href: GITHUB,
    span: "md:col-span-2",
    tone: "paper",
  },
  {
    n: "03",
    title: "Curious Scripts",
    blurb: "Small Python & JS scripts solving everyday problems.",
    tag: "python · node",
    href: GITHUB,
    span: "md:col-span-2",
    tone: "paper",
  },
  {
    n: "04",
    title: "Learning in Public",
    blurb: "Notes, prototypes and broken things — shipped anyway.",
    tag: "always shipping",
    href: GITHUB,
    span: "md:col-span-3",
    tone: "paper",
  },
  {
    n: "05",
    title: "Let's collaborate",
    blurb: "Have an idea? I'd love to help build it.",
    tag: "open to work",
    href: EMAIL,
    span: "md:col-span-3",
    tone: "ink",
  },
];

const stack = ["React", "TypeScript", "Next.js", "TailwindCSS", "Node", "Python", "Postgres", "Git", "Figma", "REST", "Vite", "Framer Motion"];

function Index() {
  const [time, setTime] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const initial = stored ? stored === "dark" : !!prefersDark;
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Asia/Kolkata" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground grain">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-mono text-sm font-bold tracking-tight">HS<span className="text-muted-foreground">/</span>portfolio</a>
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
            <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
            <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
            <a href="#stack" className="hover:opacity-60 transition-opacity">Stack</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={EMAIL} target="_blank" rel="noreferrer" className="group font-mono text-xs uppercase tracking-widest border border-ink px-3 py-2 hover:bg-ink hover:text-paper transition-colors flex items-center gap-2">
              Hire me
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              aria-pressed={dark}
              className="relative h-9 w-9 border border-ink flex items-center justify-center overflow-hidden hover:bg-ink hover:text-paper transition-colors"
            >
              <Sun className={`w-4 h-4 absolute transition-all duration-500 ${dark ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`} />
              <Moon className={`w-4 h-4 absolute transition-all duration-500 ${dark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground reveal">
            <span className="w-2 h-2 rounded-full bg-emerald-600 blink" />
            Available for new projects · India {time}
          </div>

          <h1 className="reveal mt-8 text-[clamp(3rem,11vw,11rem)] leading-[0.9] font-bold tracking-tighter">
            Hamza
            <br />
            Shaikh<span className="text-muted-foreground">.</span>
          </h1>

          <div className="mt-10 grid md:grid-cols-12 gap-6 items-end">
            <p className="md:col-span-7 text-xl md:text-2xl font-light max-w-2xl reveal" style={{ animationDelay: "0.1s" }}>
              Developer & perpetual learner — I build clean, considered things on the web. Curious by default, shipping by habit.
            </p>
            <div className="md:col-span-5 md:text-right font-mono text-xs uppercase tracking-widest text-muted-foreground space-y-1 reveal" style={{ animationDelay: "0.2s" }}>
              <div>(01) Developer</div>
              <div>(02) Curious mind</div>
              <div>(03) Always learning</div>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-4 reveal" style={{ animationDelay: "0.3s" }}>
            <a href="#work" className="group relative overflow-hidden bg-ink text-paper px-7 py-4 font-mono text-xs uppercase tracking-widest flex items-center gap-3">
              <span className="relative z-10 flex items-center gap-3">
                View Selected Work
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="absolute inset-0 bg-paper-muted translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="absolute inset-0 mix-blend-difference text-ink" />
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="group border border-ink px-7 py-4 font-mono text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-ink hover:text-paper transition-colors">
              GitHub
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border py-5 overflow-hidden">
        <div className="marquee whitespace-nowrap font-mono text-sm uppercase tracking-widest flex gap-12">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              <span>★ Building things</span>
              <span>★ Curious mind</span>
              <span>★ Always learning</span>
              <span>★ Open to work</span>
              <span>★ React · TypeScript</span>
              <span>★ India → Worldwide</span>
            </div>
          ))}
        </div>
      </div>

      {/* WORK / BENTO */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 gap-8">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">§ 01 / Work</div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Selected projects.</h2>
            </div>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="hidden md:inline-flex font-mono text-xs uppercase tracking-widest items-center gap-2 hover:opacity-60 transition-opacity">
              All on GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(180px,auto)] gap-4">
            {projects.map((p) => (
              <a
                key={p.n}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className={`group relative overflow-hidden border border-ink p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${p.span} ${
                  p.tone === "ink" ? "bg-ink text-paper" : "bg-paper-muted text-ink"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs opacity-60">{p.n}</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">{p.title}</h3>
                  <p className="text-sm opacity-80 max-w-md">{p.blurb}</p>
                  <div className="mt-4 font-mono text-[10px] uppercase tracking-widest opacity-60">{p.tag}</div>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-px bg-current scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">§ 02 / About</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">A curious builder.</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed">
            <p>
              I'm Hamza — a developer who loves making things. I build for the web, learn relentlessly, and care about the small details that make products feel <em className="italic font-mono">intentional</em>.
            </p>
            <p className="text-muted-foreground">
              Most days you'll find me prototyping ideas, reading docs, breaking things, and shipping something new on GitHub. I believe the fastest way to learn is to build in public.
            </p>
            <div className="pt-4 grid grid-cols-3 gap-6 border-t border-border">
              {[
                { k: "Focus", v: "Frontend" },
                { k: "Mode", v: "Build & learn" },
                { k: "Base", v: "India" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-4">{s.k}</div>
                  <div className="font-mono text-lg mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">§ 03 / Stack</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">Tools of the trade.</h2>
          <div className="flex flex-wrap gap-3">
            {stack.map((s, i) => (
              <span
                key={s}
                className="group font-mono text-sm border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors cursor-default"
                style={{ animationDelay: `${i * 0.03}s` }}
              >
                <Sparkles className="w-3 h-3 inline mr-2 opacity-50 group-hover:rotate-90 transition-transform" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">§ 04 / Contact</div>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none">
            Let's build
            <br />
            <span className="italic font-light">something good.</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <a href={EMAIL} target="_blank" rel="noreferrer" className="group border border-ink p-8 flex items-center justify-between hover:bg-ink hover:text-paper transition-colors">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Email</div>
                <div className="text-2xl font-bold">Say hello</div>
              </div>
              <Mail className="w-6 h-6 transition-transform group-hover:scale-110" />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="group border border-ink p-8 flex items-center justify-between hover:bg-ink hover:text-paper transition-colors">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">LinkedIn</div>
                <div className="text-2xl font-bold">Let's connect</div>
              </div>
              <Linkedin className="w-6 h-6 transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-between items-start md:items-center font-mono text-xs uppercase tracking-widest">
          <div>© {new Date().getFullYear()} Hamza Shaikh — Made with care.</div>
          <div className="flex gap-5">
            <a href={GITHUB} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:opacity-60"><Github className="w-4 h-4" /> GitHub</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:opacity-60"><Linkedin className="w-4 h-4" /> LinkedIn</a>
            <a href={EMAIL} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:opacity-60"><Mail className="w-4 h-4" /> Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
