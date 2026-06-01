"use client";

import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Code2,
  Download,
  FileText,
  GitBranch,
  GraduationCap,
  Heart,
  Layers,
  Lock,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

import { ProjectCard } from "@/components/ProjectCard";
import { SocialLinks } from "@/components/SocialLinks";
import { TechStackMatrix } from "@/components/TechStackMatrix";
import { Button } from "@/components/ui/button";
import {
  academicPublications,
  education,
  heroStats,
  personalProfile,
  projectCaseStudies,
  socialLinks,
  techStackGroups,
} from "@/constants/data";
import { cn } from "@/lib/utils";
import type { AcademicResearch } from "@/types/portfolio";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function PublicationActions({ paper }: { paper: AcademicResearch }) {
  if (paper.ieeeLink !== null) {
    return (
      <div className="mt-8 flex flex-wrap gap-3">
        {paper.doi !== "Pending Publication" && (
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-500">
            DOI: {paper.doi}
          </span>
        )}
        <Button
          variant="outline"
          size="sm"
          className="gap-2 rounded-full border-white/15 bg-transparent hover:bg-white/5"
          asChild
        >
          <a
            href={paper.ieeeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            IEEE Xplore
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <span
        aria-disabled="true"
        className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-zinc-700/60 bg-zinc-900/80 px-3.5 py-2 text-xs font-medium text-zinc-500 select-none"
      >
        <Lock className="size-3.5 opacity-50" aria-hidden />
        Publication Pending / DOI Forthcoming
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="dark min-h-screen bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-sky-400/8 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-violet-500/8 blur-3xl" />
        <div className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-emerald-500/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        {/* Hero */}
        <section className="mb-28">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
              <div className="w-full max-w-2xl space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {personalProfile.name}
                  </h1>
                  <p className="text-lg font-medium text-sky-200 sm:text-xl">
                    {personalProfile.role}
                  </p>
                  <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
                    {personalProfile.tagline}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-4 shadow-sm shadow-sky-500/5">
                    <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                      Location
                    </p>
                    <p className="mt-2 text-sm text-white">
                      {personalProfile.location}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-4 shadow-sm shadow-sky-500/5">
                    <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                      Email
                    </p>
                    <p className="mt-2 text-sm text-white wrap-break-word">
                      {personalProfile.email}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-4 shadow-sm shadow-sky-500/5">
                    <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                      GitHub
                    </p>
                    <a
                      href="https://github.com/Fazley3726"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-sm text-white transition hover:text-sky-300"
                    >
                      <GitBranch className="size-4" />
                      Fazley3726
                    </a>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-zinc-950/80 p-4 shadow-sm shadow-slate-950/30">
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                    Skills
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white">
                      <Code2 className="size-4 text-sky-300" />
                      React
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white">
                      <Sparkles className="size-4 text-blue-300" />
                      TypeScript
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white">
                      <Layers className="size-4 text-indigo-300" />
                      Tailwind
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    size="lg"
                    className="h-11 w-full justify-center gap-2 rounded-full px-6 sm:w-auto"
                    onClick={() => scrollToSection("projects")}
                  >
                    View Projects
                    <ArrowDown className="size-4" aria-hidden />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-11 w-full justify-center gap-2 rounded-full border-white/15 bg-transparent px-6 hover:bg-white/5 sm:w-auto"
                    asChild
                  >
                    <a
                      href="/cv.pdf"
                      download="Fazley_Rabbi_CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="size-4" aria-hidden />
                      Download CV
                    </a>
                  </Button>
                </div>

                <SocialLinks links={socialLinks} className="mt-2" />
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="shrink-0 -mt-6 md:-mt-10">
                <div className="relative rounded-full before:absolute before:inset-0 before:rounded-full before:bg-linear-to-br before:from-sky-400/30 before:via-indigo-500/20 before:to-transparent before:blur-3xl before:opacity-90">
                  <Image
                    src="/profile.png"
                    alt={personalProfile.name}
                    width={404}
                    height={404}
                    className="relative w-56 h-56 md:w-80 md:h-80 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me & Education */}
        <section className="mb-28">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10">
              <Heart className="size-4 text-rose-300" aria-hidden />
            </div>
            <div>
              <h2 className="bg-linear-to-r from-white via-rose-100 to-violet-200 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl">
                About Me
              </h2>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-950/75 p-6 sm:p-8 shadow-[0_18px_60px_-42px_rgba(15,23,42,0.8)]">
            <p className="text-lg leading-relaxed text-zinc-300">
              {personalProfile.aboutNarrative}
            </p>
          </div>

          <div className="mt-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
                <GraduationCap className="size-4 text-blue-300" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-white">Education</h3>
            </div>

            <div className="relative">
              <div
                className="absolute top-2 bottom-2 left-5 hidden w-px bg-zinc-800 sm:block"
                aria-hidden
              />

              <div className="space-y-4">
                {education.map((entry, index) => {
                  const Icon = index === 0 ? GraduationCap : BookOpen;

                  return (
                    <article
                      key={entry.degree}
                      className="relative flex gap-4 sm:gap-5"
                    >
                      <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 sm:size-10">
                        <Icon
                          className={cn(
                            "size-4",
                            index === 0 ? "text-blue-300" : "text-zinc-400",
                          )}
                          aria-hidden
                        />
                      </div>

                      <div className="min-w-0 flex-1 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-5">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                          <div>
                            <h4 className="text-base font-semibold text-white sm:text-lg">
                              {entry.degree}
                            </h4>
                            <p className="mt-1 text-sm text-zinc-400">
                              {entry.institution}
                            </p>
                          </div>
                          <span className="w-fit shrink-0 rounded-full border border-white/10 bg-zinc-950 px-3 py-1 text-xs font-medium text-zinc-400">
                            {entry.year}
                          </span>
                        </div>
                        <p className="mt-3 border-t border-white/5 pt-3 text-sm leading-relaxed text-zinc-500">
                          {entry.details}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <TechStackMatrix groups={techStackGroups} />

        {/* Projects Grid */}
        <section id="projects" className="mb-28 scroll-mt-8">
          <div className="mb-10">
            <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
              Selected Work
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Projects
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-zinc-500">
              Production applications spanning clinical AI, premium commerce, and
              high-concurrency API architecture. Click the globe icon on any
              card to visit the live site.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {projectCaseStudies.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Academic Module */}
        <section className="mb-16">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
              <GraduationCap className="size-4 text-blue-300" aria-hidden />
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
                Academic Research
              </p>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                IEEE Accepted Publication
              </h2>
            </div>
          </div>

          <div className="space-y-6">
            {academicPublications.map((paper) => (
              <article
                key={paper.title}
                className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    <BookOpen className="size-3.5" aria-hidden />
                    {paper.status}
                  </span>
                  <span className="text-xs text-zinc-500">{paper.year}</span>
                </div>

                <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                  {paper.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-500">{paper.authors}</p>
                <p className="mt-1 text-sm text-zinc-400">{paper.conference}</p>

                <p className="mt-6 text-sm leading-relaxed text-zinc-400">
                  {paper.abstract}
                </p>

                <div className="mt-6">
                  <p className="mb-2 text-xs font-medium tracking-widest text-zinc-500 uppercase">
                    Personal Contribution
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {paper.personalContribution}
                  </p>
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="mb-2 text-xs font-medium tracking-widest text-zinc-500 uppercase">
                      Keywords
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {paper.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-md border border-white/10 bg-zinc-950 px-2 py-1 text-xs text-zinc-400"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-medium tracking-widest text-zinc-500 uppercase">
                      Methodology
                    </p>
                    <ul className="space-y-1.5">
                      {paper.methodology.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs text-zinc-400"
                        >
                          <FileText
                            className="mt-0.5 size-3 shrink-0 text-zinc-600"
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <PublicationActions paper={paper} />
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-28">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-8 shadow-[0_18px_60px_-42px_rgba(15,23,42,0.8)]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300">
                <Mail className="size-5" aria-hidden />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">
                  Send a message
                </p>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Let's connect
                </h2>
              </div>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-zinc-400">
              Want to discuss a frontend project, applied ML collaboration, or a new opportunity? Reach out directly via email and I’ll respond quickly.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  Email
                </p>
                <a
                  href={`mailto:${personalProfile.email}`}
                  className="mt-3 block text-lg font-semibold text-white transition hover:text-sky-300"
                >
                  {personalProfile.email}
                </a>
              </div>
              <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                  Message me on
                </p>
                <a
                  href="https://github.com/Fazley3726"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-lg font-semibold text-white transition hover:text-sky-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 pb-4">
          <SocialLinks links={socialLinks} className="mb-6 justify-center" />
          <p className="text-center text-xs text-zinc-600">
            © {new Date().getFullYear()} {personalProfile.name}. Built with
            Next.js, TypeScript & Tailwind CSS v4.
          </p>
        </footer>
      </div>
    </div>
  );
}
