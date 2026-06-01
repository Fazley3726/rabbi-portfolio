"use client";

import Image from "next/image";
import { Globe } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ProjectCaseStudy } from "@/types/portfolio";

const tagTextColors: Record<string, string> = {
  machine_learning: "text-sky-400",
  python: "text-yellow-400",
  fastapi: "text-teal-400",
  medical_ai: "text-emerald-400",
  "next.js": "text-blue-400",
  typescript: "text-sky-300",
  tailwindcss: "text-cyan-400",
  localstorage: "text-indigo-400",
  react: "text-teal-300",
  rest_api: "text-orange-400",
  web_ux: "text-pink-400",
};

function getTagTextColor(tag: string): string {
  const key = tag.replace(/^#/, "").toLowerCase();
  return tagTextColors[key] ?? "text-zinc-400";
}

interface ProjectCardProps {
  project: ProjectCaseStudy;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full w-full flex-col rounded-2xl border border-zinc-800/80 bg-[#11112b] p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-zinc-900/80 hover:shadow-[0_20px_70px_-24px_rgba(124,58,237,0.65)]">
      <div className="relative overflow-hidden rounded-xl bg-zinc-950 transition duration-300 group-hover:bg-zinc-900/90">
        <div className="relative aspect-16/10 w-full sm:aspect-3/2">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition duration-300 group-hover:scale-105"
            priority={false}
          />
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`View live site for ${project.title}`}
          title="View Live"
          className={cn(
            "absolute top-3 left-3 flex h-11 w-11 items-center justify-center rounded-full",
            "bg-linear-to-br from-violet-500 to-blue-500 text-white",
            "shadow-[0_4px_20px_rgba(124,58,237,0.45)] transition-all duration-300",
            "hover:scale-110 hover:shadow-[0_6px_28px_rgba(124,58,237,0.6)]",
            "focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none",
          )}
        >
          <Globe className="size-5" aria-hidden />
        </a>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400 sm:text-base">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "text-xs font-medium sm:text-sm",
                getTagTextColor(tag),
              )}
            >
              {tag.startsWith("#") ? tag : `#${tag}`}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
