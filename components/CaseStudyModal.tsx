"use client";

import { Dialog } from "radix-ui";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Lightbulb,
  Layers3,
  Target,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import type { ProjectCaseStudy } from "@/types/portfolio";

const accentStyles = {
  emerald: {
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    glow: "shadow-emerald-500/20",
    dot: "bg-emerald-400",
    ring: "ring-emerald-500/20",
  },
  violet: {
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    glow: "shadow-violet-500/20",
    dot: "bg-violet-400",
    ring: "ring-violet-500/20",
  },
  amber: {
    badge: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    glow: "shadow-amber-500/20",
    dot: "bg-amber-400",
    ring: "ring-amber-500/20",
  },
} as const;

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CaseStudyModal({
  project,
  open,
  onOpenChange,
}: CaseStudyModalProps) {
  if (!project) return null;

  const accent = accentStyles[project.accent];
  const Icon = project.icon;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={cn(
            "fixed top-1/2 left-1/2 z-50 flex max-h-[90vh] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl ring-1 ring-white/5 outline-none",
            accent.glow,
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          )}
        >
          <div className="relative overflow-y-auto overscroll-contain">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white/5 to-transparent" />

            <header className="relative border-b border-white/10 px-6 pt-6 pb-5 sm:px-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex size-12 shrink-0 items-center justify-center rounded-xl border",
                      accent.badge,
                      accent.ring,
                      "ring-1",
                    )}
                  >
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <div>
                    <Dialog.Title className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {project.title}
                    </Dialog.Title>
                    <Dialog.Description className="mt-1 text-sm text-zinc-400">
                      {project.subtitle} · {project.year}
                    </Dialog.Description>
                  </div>
                </div>
                <Dialog.Close
                  className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none"
                  aria-label="Close case study"
                >
                  <X className="size-4" />
                </Dialog.Close>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "rounded-full border px-2.5 py-0.5 text-xs font-medium",
                      accent.badge,
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="space-y-8 px-6 py-6 sm:px-8">
              <section>
                <div className="mb-3 flex items-center gap-2 text-zinc-300">
                  <Target className="size-4 text-zinc-500" aria-hidden />
                  <h3 className="text-sm font-semibold tracking-wide uppercase">
                    {project.problem.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {project.problem.content}
                </p>
              </section>

              <section>
                <div className="mb-3 flex items-center gap-2 text-zinc-300">
                  <Layers3 className="size-4 text-zinc-500" aria-hidden />
                  <h3 className="text-sm font-semibold tracking-wide uppercase">
                    {project.architectureSolution.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {project.architectureSolution.content}
                </p>
              </section>

              <section>
                <div className="mb-4 flex items-center gap-2 text-zinc-300">
                  <Lightbulb className="size-4 text-zinc-500" aria-hidden />
                  <h3 className="text-sm font-semibold tracking-wide uppercase">
                    Technical Challenges Solved
                  </h3>
                </div>
                <ul className="space-y-4">
                  {project.technicalChallenges.map((challenge) => (
                    <li
                      key={challenge.title}
                      className="rounded-xl border border-white/8 bg-white/2 p-4"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <span
                          className={cn("size-1.5 rounded-full", accent.dot)}
                          aria-hidden
                        />
                        <h4 className="text-sm font-medium text-zinc-200">
                          {challenge.title}
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed text-zinc-400">
                        {challenge.content}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <p className="mb-3 text-xs font-medium tracking-widest text-zinc-500 uppercase">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {(project.liveUrl || project.repoUrl) && (
              <footer className="flex flex-wrap gap-3 border-t border-white/10 px-6 py-4 sm:px-8">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/10"
                  >
                    <ExternalLink className="size-4" aria-hidden />
                    Live Demo
                    <ArrowUpRight className="size-3.5 text-zinc-500" aria-hidden />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:border-white/20 hover:text-zinc-200"
                  >
                    <Code2 className="size-4" aria-hidden />
                    Source Code
                  </a>
                )}
              </footer>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
