import type { LucideIcon } from "lucide-react";

export interface CaseStudySection {
  title: string;
  content: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  summary: string;
  tags: readonly string[];
  accent: "emerald" | "violet" | "amber";
  icon: LucideIcon;
  imageUrl: string;
  imageAlt: string;
  liveUrl: string;
  repoUrl?: string;
  year: number;
  problem: CaseStudySection;
  architectureSolution: CaseStudySection;
  technicalChallenges: readonly CaseStudySection[];
  techStack: readonly string[];
}

export interface AcademicResearch {
  title: string;
  authors: string;
  status: string;
  year: string;
  conference: string;
  abstract: string;
  personalContribution: string;
  keywords: readonly string[];
  methodology: readonly string[];
  doi: string;
  ieeeLink: string | null;
}

export interface TechStackItem {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface TechStackGroup {
  id: string;
  label: string;
  icon: LucideIcon;
  accent: "violet" | "emerald";
  items: readonly TechStackItem[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
  details: string;
}

export interface PersonalProfile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  aboutNarrative: string;
  cvUrl: string;
}

export type SocialIconName = "Github" | "Linkedin" | "Facebook";

export interface SocialLink {
  name: string;
  url: string;
  icon: SocialIconName;
}
