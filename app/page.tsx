'use client'

import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Quote,
  Sparkles,
  X,
} from 'lucide-react'
import { useState } from 'react'

const resumeUrl = 'https://blobs.vusercontent.net/blob/Anshika%20Gupta%20-%20Resume-FGXSmXRLByA1NllTfh1PgQ1oQMVX0A.pdf'

const navItems = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
]

const skillGroups = [
  { label: 'Analytics', icon: BarChart3, items: ['Power BI', 'Excel', 'Data Visualization', 'Dashboarding'] },
  { label: 'Databases', icon: Cloud, items: ['SQL', 'MySQL', 'Data Cleaning', 'Data Modeling'] },
  { label: 'Programming', icon: Code2, items: ['Python', 'Pandas', 'NumPy', 'Google Colab'] },
  { label: 'Collaboration', icon: BriefcaseBusiness, items: ['Problem Solving', 'Communication', 'Teamwork', 'Leadership'] },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-10">
          <a href="#top" className="group flex items-center gap-3" aria-label="Anshika Gupta home">
            <span className="grid size-10 place-items-center bg-ink font-mono text-sm font-bold text-background transition-transform group-hover:-rotate-6">AG</span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">Anshika Gupta</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground lg:flex"><span className="size-2 rounded-full bg-lime" />Open to opportunities</span>
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="button-primary hidden sm:inline-flex"><Download data-icon="inline-start" />Resume</a>
            <button className="grid size-10 place-items-center border border-ink/15 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-ink/10 bg-background px-5 py-5 md:hidden">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="nav-link">{label}</a>)}<a href={resumeUrl} target="_blank" rel="noreferrer" className="button-primary w-fit"><Download data-icon="inline-start" />Download resume</a></nav>}
      </header>

      <section id="top" className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-20 md:grid-cols-[1.08fr_.92fr] md:items-center md:px-10 md:pb-32 md:pt-28">
        <div className="relative z-10">
          <p className="eyebrow"><span className="eyebrow-line" />Data analyst / builder</p>
          <h1 className="mt-7 max-w-3xl font-serif text-6xl leading-[.94] tracking-[-0.055em] text-balance md:text-8xl">Turning messy data into <em className="text-cobalt">clear decisions.</em></h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">I&apos;m Anshika Gupta, a data analyst who turns operational complexity into dashboards, insights, and products people can actually use.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4"><a href="#work" className="button-primary">Explore selected work <ArrowUpRight data-icon="inline-end" /></a><a href="mailto:anshikagupta@email.com" className="button-quiet"><Mail data-icon="inline-start" />Let&apos;s connect</a></div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 font-mono text-xs text-muted-foreground"><span className="inline-flex items-center gap-2"><MapPin size={14} />India</span><span className="inline-flex items-center gap-2"><Check size={14} className="text-cobalt" />Available for analyst roles</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-md md:ml-auto">
          <div className="chart-card relative overflow-hidden bg-ink p-5 text-background md:p-7">
            <div className="flex items-start justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-background/50">Profile / 2025</p><p className="mt-3 text-xl font-semibold">Signal over noise</p></div><span className="grid size-11 place-items-center rounded-full border border-background/20 font-serif text-lg">AG</span></div>
            <div className="mt-10 rounded-sm border border-background/10 bg-background/[.06] p-4"><div className="mb-6 flex items-end justify-between"><div><p className="font-mono text-[10px] uppercase tracking-widest text-background/50">Core toolkit</p><p className="mt-1 font-serif text-3xl">Power BI</p></div><BarChart3 className="text-lime" /></div><div className="flex h-28 items-end gap-2 border-b border-l border-background/15 px-2 pb-0"><span className="chart-bar h-[42%]" /><span className="chart-bar h-[65%]" /><span className="chart-bar h-[51%]" /><span className="chart-bar h-[80%]" /><span className="chart-bar h-[73%]" /><span className="chart-bar h-[94%] bg-lime" /><span className="chart-bar h-[86%]" /></div><div className="mt-3 flex justify-between font-mono text-[9px] text-background/40"><span>SQL</span><span>PYTHON</span><span>EXCEL</span><span>VISUALS</span></div></div>
            <div className="mt-5 grid grid-cols-2 gap-3"><div className="border border-background/10 p-3"><p className="font-mono text-[9px] uppercase text-background/45">Builder rank</p><p className="mt-2 font-serif text-3xl text-lime">Top 25</p><p className="mt-1 text-xs text-background/55">Raj Shamani × Emergent</p></div><div className="border border-background/10 p-3"><p className="font-mono text-[9px] uppercase text-background/45">Currently</p><p className="mt-2 text-sm font-medium">Learning in public</p><p className="mt-1 text-xs text-background/55">One insight at a time</p></div></div>
          </div>
          <div className="absolute -bottom-6 -left-7 hidden size-20 border border-cobalt bg-cobalt/10 md:block" aria-hidden="true" />
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper"><div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-ink/10 md:grid-cols-5 md:divide-y-0">{['POWER BI', 'SQL', 'PYTHON', 'EXCEL', 'TOP 25 BUILDER'].map((item, i) => <div key={item} className="flex items-center gap-2 px-5 py-5 font-mono text-[10px] font-semibold tracking-[.16em] text-muted-foreground md:justify-center md:px-3"><span className={i === 4 ? 'size-1.5 rounded-full bg-cobalt' : 'size-1.5 rounded-full bg-ink/30'} />{item}</div>)}</div></section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32"><div className="section-heading"><p className="eyebrow">01 / Selected work</p><h2 className="section-title">Projects with a point of view.</h2><p className="section-copy">A few places where analysis, product thinking, and visual storytelling meet.</p></div><div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
        <article className="project-card bg-cobalt text-background"><div className="flex items-start justify-between"><span className="project-index">01</span><ArrowUpRight /></div><div className="mt-20 max-w-xl"><p className="font-mono text-xs uppercase tracking-[.18em] text-background/60">AI product / community project</p><h3 className="mt-4 font-serif text-5xl tracking-[-.04em] md:text-6xl">BloomNest.ai</h3><p className="mt-5 max-w-lg text-base leading-7 text-background/75">An AI-powered platform designed to help students discover clarity in their learning and growth journey.</p><div className="mt-8 flex flex-wrap gap-2"><span className="tag tag-dark">AI</span><span className="tag tag-dark">Product thinking</span><span className="tag tag-dark">Top 25 selection</span></div></div><div className="mt-16 flex items-end gap-1 border-t border-background/20 pt-5"><div className="flex-1"><p className="font-mono text-[9px] uppercase text-background/50">Idea → impact</p></div>{[25, 42, 35, 61, 56, 82, 74, 100].map((height, i) => <span key={i} className="w-3 bg-lime" style={{ height: `${height / 3}px` }} />)}</div></article>
        <article className="project-card border border-ink/15 bg-paper"><div className="flex items-start justify-between"><span className="project-index text-muted-foreground">02</span><ArrowUpRight /></div><div className="mt-20"><p className="font-mono text-xs uppercase tracking-[.18em] text-muted-foreground">Analytics / operations</p><h3 className="mt-4 font-serif text-5xl tracking-[-.04em]">Data to direction</h3><p className="mt-5 text-base leading-7 text-muted-foreground">Building a strong foundation in reporting, data cleaning, and business analysis through real-world work.</p><div className="mini-dashboard mt-9"><div className="flex items-center justify-between"><span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Weekly readout</span><span className="text-xs text-cobalt">+ insight</span></div><div className="mt-5 flex h-24 items-end gap-2">{[48, 70, 58, 82, 66, 92, 76, 100, 88, 95].map((height, i) => <span key={i} className={`w-full ${i === 7 ? 'bg-cobalt' : 'bg-ink/15'}`} style={{ height: `${height}%` }} />)}</div></div></div></article>
      </div></section>

      <section id="about" className="border-y border-ink/10 bg-paper"><div className="mx-auto grid max-w-7xl gap-16 px-5 py-24 md:grid-cols-[.8fr_1.2fr] md:px-10 md:py-32"><div><p className="eyebrow">02 / About</p><h2 className="section-title mt-7">Curious by nature. Precise by practice.</h2><p className="mt-7 text-base leading-8 text-muted-foreground">I enjoy the space between a question and its answer — finding patterns, making them visible, and communicating what matters next.</p><div className="mt-10 flex gap-4"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-button"><span className="font-mono text-xs font-semibold">in</span></a><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-button"><span className="font-mono text-xs font-semibold">gh</span></a></div></div><div><p className="mb-8 font-mono text-xs uppercase tracking-[.2em] text-muted-foreground">Experience</p><div className="timeline"><div className="timeline-item"><span className="timeline-dot" /><div><div className="flex flex-wrap items-baseline justify-between gap-3"><h3 className="text-xl font-semibold">Samkrata Tech LLP</h3><span className="font-mono text-xs text-muted-foreground">Experience</span></div><p className="mt-3 leading-7 text-muted-foreground">Contributing to technology-driven work and building practical experience across analysis, collaboration, and product problem solving.</p></div></div><div className="timeline-item"><span className="timeline-dot" /><div><div className="flex flex-wrap items-baseline justify-between gap-3"><h3 className="text-xl font-semibold">PKGT Construction</h3><span className="font-mono text-xs text-muted-foreground">Experience</span></div><p className="mt-3 leading-7 text-muted-foreground">Developing a grounded understanding of operational contexts and the value of clear, structured information.</p></div></div></div></div></div></section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32"><div className="section-heading"><p className="eyebrow">03 / Toolkit</p><h2 className="section-title">Tools I use to find the signal.</h2></div><div className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">{skillGroups.map(({ label, icon: Icon, items }) => <div key={label} className="bg-background p-7"><Icon className="text-cobalt" /><h3 className="mt-8 text-lg font-semibold">{label}</h3><ul className="mt-5 flex flex-col gap-3">{items.map(item => <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><span className="size-1 rounded-full bg-lime" />{item}</li>)}</ul></div>)}</div></section>

      <section className="border-t border-ink/10 bg-ink text-background"><div className="mx-auto grid max-w-7xl gap-16 px-5 py-24 md:grid-cols-2 md:px-10 md:py-28"><div><p className="eyebrow text-lime"><span className="eyebrow-line bg-lime" />Details</p><h2 className="mt-7 font-serif text-5xl leading-none tracking-[-.04em] md:text-6xl">The details matter.</h2><p className="mt-7 max-w-md leading-8 text-background/60">The foundation behind the work: a BBA, a data analyst certification, and a habit of staying curious.</p></div><div className="grid grid-cols-2 gap-x-8 gap-y-10"><div><GraduationCap className="text-lime" /><p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-background/45">Education</p><p className="mt-2 font-medium">Bachelor of Business Administration</p></div><div><Sparkles className="text-lime" /><p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-background/45">Certification</p><p className="mt-2 font-medium">Data Analyst Certification</p></div><div><Quote className="text-lime" /><p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-background/45">Languages</p><p className="mt-2 font-medium">English · Hindi</p></div><div><ChevronDown className="text-lime" /><p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-background/45">Approach</p><p className="mt-2 font-medium">Learn. Build. Share.</p></div></div></div></section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 text-center md:px-10 md:py-32"><p className="eyebrow justify-center">04 / Contact</p><h2 className="mx-auto mt-7 max-w-3xl font-serif text-6xl leading-[.95] tracking-[-.05em] text-balance md:text-8xl">Have a question worth <em className="text-cobalt">exploring?</em></h2><p className="mx-auto mt-7 max-w-lg leading-7 text-muted-foreground">I&apos;d love to hear what you&apos;re building, analyzing, or figuring out next.</p><div className="mt-9 flex flex-wrap justify-center gap-4"><a href="mailto:anshikagupta@email.com" className="button-primary"><Mail data-icon="inline-start" />Email Anshika</a><a href={resumeUrl} target="_blank" rel="noreferrer" className="button-quiet"><Download data-icon="inline-start" />View resume</a></div></section>
      <footer className="border-t border-ink/10"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-10"><span className="font-mono">© 2025 Anshika Gupta</span><span>Built with curiosity & clarity.</span><div className="flex gap-5"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cobalt">LinkedIn</a><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cobalt">GitHub</a></div></div></footer>
    </main>
  )
}
