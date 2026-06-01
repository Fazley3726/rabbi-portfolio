import { Layers } from "lucide-react";

import { cn } from "@/lib/utils";
import type { TechStackGroup } from "@/types/portfolio";

const groupStyles = {
  violet: {
    card: "border-violet-500/20 hover:border-violet-500/35",
    glow: "from-violet-500/10 via-transparent to-transparent",
    headerIcon: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    itemIcon: "border-violet-500/20 bg-violet-500/10 text-violet-400 group-hover:border-violet-500/40 group-hover:bg-violet-500/15 group-hover:text-violet-300",
    badge: "text-violet-400/80",
  },
  emerald: {
    card: "border-emerald-500/20 hover:border-emerald-500/35",
    glow: "from-emerald-500/10 via-transparent to-transparent",
    headerIcon: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    itemIcon: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/15 group-hover:text-emerald-300",
    badge: "text-emerald-400/80",
  },
} as const;

interface TechStackMatrixProps {
  groups: readonly TechStackGroup[];
}

export function TechStackMatrix({ groups }: TechStackMatrixProps) {
  return (
    <section className="mb-28">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
          <Layers className="size-4 text-violet-300" aria-hidden />
        </div>
        <div>
          <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
            Capabilities
          </p>
          <h2 className="bg-linear-to-r from-white via-violet-100 to-blue-200 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl">
            Tech Stack Matrix
          </h2>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {groups.map((group) => {
          const styles = groupStyles[group.accent];
          const GroupIcon = group.icon;

          return (
            <article
              key={group.id}
              className={cn(
                "relative overflow-hidden rounded-2xl border bg-zinc-900/50 p-6 transition-colors duration-300 sm:p-7",
                styles.card,
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b to-transparent",
                  styles.glow,
                )}
                aria-hidden
              />

              <header className="relative mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex size-11 items-center justify-center rounded-xl border",
                      styles.headerIcon,
                    )}
                  >
                    <GroupIcon className="size-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {group.label}
                    </h3>
                    <p className={cn("text-xs font-medium", styles.badge)}>
                      {group.items.length} technologies
                    </p>
                  </div>
                </div>
              </header>

              <ul className="relative grid gap-2 sm:grid-cols-1">
                {group.items.map((item) => {
                  const ItemIcon = item.icon;

                  return (
                    <li key={item.name}>
                      <div className="group flex items-start gap-3 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-white/8 hover:bg-white/3">
                        <div
                          className={cn(
                            "flex size-9 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300",
                            styles.itemIcon,
                          )}
                        >
                          <ItemIcon className="size-4" aria-hidden />
                        </div>
                        <div className="min-w-0 pt-0.5">
                          <p className="text-sm font-medium text-zinc-100">
                            {item.name}
                          </p>
                          <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
