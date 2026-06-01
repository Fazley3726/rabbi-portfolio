import { Facebook, Github, Linkedin } from "@/components/icons/social";
import { cn } from "@/lib/utils";
import type { SocialIconName, SocialLink } from "@/types/portfolio";

const iconMap = {
  Github,
  Linkedin,
  Facebook,
} as const;

const hoverStyles: Record<SocialIconName, string> = {
  Github: "hover:border-zinc-500 hover:text-white",
  Linkedin: "hover:border-[#0A66C2]/60 hover:text-[#0A66C2]",
  Facebook: "hover:border-[#1877F2]/60 hover:text-[#1877F2]",
};

interface SocialLinksProps {
  links: readonly SocialLink[];
  className?: string;
}

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {links.map((link) => {
        const Icon = iconMap[link.icon];

        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            title={link.name}
            className={cn(
              "flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 p-3 text-zinc-400 transition-all duration-300 hover:scale-110",
              hoverStyles[link.icon],
            )}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
