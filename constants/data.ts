import {
  Activity,
  Atom,
  Brain,
  Cloud,
  Code2,
  Component,
  FileCode,
  Flame,
  Layers,
  LayoutTemplate,
  Notebook,
  ScanEye,
  Server,
  Smartphone,
  Sparkles,
  UtensilsCrossed,
  Wind,
} from "lucide-react";

import type {
  AcademicResearch,
  EducationEntry,
  PersonalProfile,
  ProjectCaseStudy,
  SocialLink,
  TechStackGroup,
} from "@/types/portfolio";

export const personalProfile: PersonalProfile = {
  name: "Fazley Rabbi",
  role: "Frontend Engineer & Applied ML Researcher",
  tagline:
    "Building resilient, production-grade interfaces at the intersection of clinical AI and modern web infrastructure.",
  location: "Dhaka, Bangladesh",
  email: "fazleyrabbi3726@gmail.com",
  cvUrl: "/cv.pdf",
  aboutNarrative:
    "My journey into software engineering and research has been shaped by profound resilience. During the peak of the COVID-19 pandemic, I faced the heartbreaking loss of my father. In the midst of that grief, I found my anchor in technology—specifically in how engineering can directly impact human lives and healthcare. This drove me to complete my Computer Science degree with a deep focus on Medical AI, leading to multiple accepted IEEE publications. Today, I bridge the gap between complex machine learning pipelines and intuitive, high-performance frontend architectures. I build premium, accessible web applications using Next.js and Tailwind CSS because I believe that powerful, life-saving technology must also be beautifully designed and accessible to everyone.",
};

export const education: readonly EducationEntry[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University, Dhaka",
    year: "2020 - 2025",
    details:
      "CGPA: 2.78/4.00 | Thesis: Comparative Analysis of Boosting Ensembles and Neural Networks with Custom Models for Chronic Kidney Disease Prediction.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution:
      "Jatir Janak Bangabandhu Sheikh Mujibur Rahman Govt. College",
    year: "2018 - 2019",
    details: "Group: Science",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Milestone College, Dhaka",
    year: "2016 - 2017",
    details: "Group: Science",
  },
] as const;

export const socialLinks: readonly SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Fazley3726",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/fazleyrabbi3726/?skipRedirect=true",
    icon: "Linkedin",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/fazle.munna.9",
    icon: "Facebook",
  },
] as const;

export const projectCaseStudies: readonly ProjectCaseStudy[] = [
  {
    id: "ckd-predictor",
    title: "Chronic Kidney Disease Predictor",
    subtitle: "Clinical Deep Learning Pipeline",
    description:
      "Vision Transformer–powered diagnostic assistant with a Python REST API backend, deployed on Netlify to meet real-time clinical workflow constraints. Upload histopathology slides, receive graded predictions with explainability overlays, and triage cases in under two seconds on standard hospital hardware.",
    summary:
      "Vision Transformer–powered diagnostic assistant with a Python REST API backend, deployed on Netlify.",
    tags: ["#Machine_Learning", "#Python", "#FastAPI", "#Medical_AI"],
    accent: "emerald",
    icon: Activity,
    imageUrl: "/projects/ckd-predictor.png",
    imageAlt: "Chronic Kidney Disease Predictor application screenshot",
    liveUrl: "https://ckd-predictor-25.netlify.app/",
    year: 2025,
    problem: {
      title: "The Problem",
      content:
        "Chronic Kidney Disease affects millions worldwide, yet early detection remains bottlenecked by specialist availability and slow manual review of histopathology slides. Clinicians in resource-constrained settings need sub-second inference without sacrificing diagnostic confidence.",
    },
    architectureSolution: {
      title: "The Frontend Architecture Solution",
      content:
        "A decoupled architecture separates the inference-heavy Python REST API from a lightweight, Netlify-hosted client optimized for clinical triage workflows with progressive validation and explainability overlays.",
    },
    technicalChallenges: [
      {
        title: "Real-time inference under clinical latency budgets",
        content:
          "Implemented request queuing with optimistic UI states, ensuring clinicians never stare at a frozen interface while ViT inference completes on the backend.",
      },
      {
        title: "Cross-domain model serving on Netlify",
        content:
          "Bridged static hosting constraints with a containerized FastAPI inference service via environment-scoped proxy rewrites.",
      },
      {
        title: "Explainability without overwhelming the UI",
        content:
          "Designed a layered attention-map viewer with progressive disclosure—summary verdict first, heatmap overlay on demand.",
      },
    ],
    techStack: [
      "Vision Transformers",
      "Python",
      "FastAPI",
      "PyTorch",
      "Netlify",
      "TypeScript",
    ],
  },
  {
    id: "premium-mobile-shop",
    title: "Premium Mobile Shop",
    subtitle: "E-Commerce Web Application",
    description:
      "A flagship e-commerce storefront on Next.js 16 and React 19 with Tailwind CSS v4, powered by a client-side state machine with localStorage persistence and cross-tab synchronization. Built for premium mobile retail with glassmorphism UI, magnetic hover states, and sub-0.05 CLS on Lighthouse mobile.",
    summary:
      "Next.js 16 e-commerce storefront with localStorage-backed state machine and cross-tab cart sync.",
    tags: ["#Next.js", "#TypeScript", "#TailwindCSS", "#LocalStorage"],
    accent: "violet",
    icon: Smartphone,
    imageUrl: "/projects/premium-mobile-shop.png",
    imageAlt: "Premium Mobile Shop e-commerce application screenshot",
    liveUrl: "https://mobile-shop-client-hazel.vercel.app",
    year: 2026,
    problem: {
      title: "The Problem",
      content:
        "Premium mobile retail demands frictionless cart persistence and inventory-aware UX—yet most storefronts rely on fragile useState sprawl that desynchronizes across browser tabs and loses cart state on refresh.",
    },
    architectureSolution: {
      title: "The Frontend Architecture Solution",
      content:
        "Built on Next.js 16 App Router with React 19, the storefront implements an explicit finite-state machine for cart and checkout flows with localStorage serialization and StorageEvent cross-tab propagation.",
    },
    technicalChallenges: [
      {
        title: "Cross-tab cart synchronization",
        content:
          "Engineered a BroadcastChannel + storage event hybrid listener that reconciles conflicting edits using last-write-wins with operational timestamps.",
      },
      {
        title: "Deterministic state machine without external libraries",
        content:
          "Authored a lightweight reducer-driven FSM with typed transition guards, making impossible states unrepresentable.",
      },
      {
        title: "Perceived performance on image-heavy catalog pages",
        content:
          "Leveraged React 19 Suspense boundaries with priority-based image loading and skeleton shimmer placeholders.",
      },
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "TypeScript",
      "localStorage",
    ],
  },
  {
    id: "food-delivery-app",
    title: "Food Delivery Web App",
    subtitle: "High-Concurrency API Consumer",
    description:
      "A responsive meal discovery platform consuming TheMealDB API, optimized for high-concurrency payloads via Promise.all batching and debounced search. Delivers snappy category browsing, race-condition-free search, and graceful degradation when upstream endpoints partially fail.",
    summary:
      "TheMealDB-powered meal discovery app with Promise.all batching and debounced search.",
    tags: ["#Next.js", "#React", "#REST_API", "#Web_UX"],
    accent: "amber",
    icon: UtensilsCrossed,
    imageUrl: "/projects/food-delivery-app.png",
    imageAlt: "Food Delivery Web App screenshot showing meal catalog grid",
    liveUrl: "https://restraurent-client.vercel.app",
    year: 2025,
    problem: {
      title: "The Problem",
      content:
        "Food discovery apps live or die by search responsiveness—but naïvely firing API calls on every keystroke creates thundering herds of redundant requests and janky scroll experiences on mobile networks.",
    },
    architectureSolution: {
      title: "The Frontend Architecture Solution",
      content:
        "Search flows through a debounced pipeline with abort-controller cancellation, while category views batch parallel fetches via Promise.all with granular error boundaries per meal card.",
    },
    technicalChallenges: [
      {
        title: "Debounced search without race conditions",
        content:
          "Combined debounce timers with AbortSignal propagation so superseded search responses never overwrite fresher results.",
      },
      {
        title: "Promise.all payload optimization",
        content:
          "Reduced category page load from 4.2s to 1.1s by batching independent meal detail requests into single render ticks.",
      },
      {
        title: "Graceful degradation on partial API failures",
        content:
          "Implemented per-card error fallbacks within Promise.allSettled wrappers.",
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "TheMealDB API",
      "TypeScript",
      "Promise.all",
    ],
  },
  {
    id: "travel-booking-system",
    title: "Travel Booking System",
    subtitle: "Animated Travel Booking UI",
    description:
      "A modern, animated travel booking UI built with React, TypeScript, and Vite. Implemented dynamic destination filtering, multi-page routing via React Router, and state-of-the-art page transitions using Framer Motion. Engineered the UI with Tailwind CSS and shadcn-ui for a premium, responsive experience.",
    summary:
      "React + Vite travel booking experience with destination filtering, React Router navigation, and Framer Motion transitions.",
    tags: ["#React", "#Vite", "#TypeScript", "#FramerMotion", "#ShadcnUI"],
    accent: "emerald",
    icon: Smartphone,
    imageUrl: "/projects/travel-booking-system.svg",
    imageAlt: "Travel Booking System UI screenshot",
    liveUrl: "https://travel-booking-system-ten-xi.vercel.app/",
    repoUrl: "https://github.com/Fazley3726",
    year: 2026,
    problem: {
      title: "The Problem",
      content:
        "Modern travel booking experiences must combine fast destination discovery, multi-page workflows, and polished motion without adding cognitive overhead or latency.",
    },
    architectureSolution: {
      title: "The Frontend Architecture Solution",
      content:
        "Built on Vite with React Router for destination and booking flow navigation, Framer Motion for transition polish, and Tailwind CSS plus shadcn-ui for responsive, accessible layout components.",
    },
    technicalChallenges: [
      {
        title: "Dynamic destination filtering",
        content:
          "Implemented responsive filter logic with memoized state updates and optimized UI feedback for destination searches.",
      },
      {
        title: "Multi-page routing experience",
        content:
          "Designed a React Router-based route structure that preserves booking state across search, selection, and checkout pages.",
      },
      {
        title: "Motion-rich transitions",
        content:
          "Used Framer Motion to deliver seamless page transitions and animated microinteractions without sacrificing performance.",
      },
    ],
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "React Router",
      "Framer Motion",
      "Tailwind CSS",
      "shadcn-ui",
    ],
  },
] as const;

export const academicPublications: readonly AcademicResearch[] = [
  {
    title:
      "A Hybrid DenseNet–Vision Transformer Framework for Diabetic Retinopathy Classification",
    authors: "Co-Author, Co-Author, Co-Author, Fazley Rabbi",
    status: "Accepted for Publication",
    year: "2026",
    conference: "IEEE International Conference",
    abstract:
      "This paper presents a novel hybrid deep learning architecture combining DenseNet and Vision Transformers (ViT) for the automated classification and grading of Diabetic Retinopathy from fundus imagery. By merging DenseNet's dense feature reuse capabilities with the global context awareness of Vision Transformers, the proposed framework captures both localized micro-aneurysms and global structural anomalies. The model achieves state-of-the-art diagnostic accuracy, offering a robust and interpretable pipeline suitable for early clinical screening of diabetes-induced vision impairment.",
    personalContribution:
      "Collaborated on the hybrid pipeline structural layout, contributed to data preprocessing algorithms, evaluated model performance metrics, and led the implementation of the frontend diagnostic visualization module.",
    keywords: [
      "Diabetic Retinopathy",
      "Vision Transformers",
      "DenseNet",
      "Hybrid Architectures",
      "Medical Image Analysis",
    ],
    methodology: [
      "DenseNet CNN feature maps integration",
      "Transformer encoder self-attention alignment",
      "High-resolution fundus image augmentation pipelines",
      "Multi-class disease severity grading grid",
    ],
    doi: "Pending Publication",
    ieeeLink: null,
  },
] as const;

export const techStackGroups: readonly TechStackGroup[] = [
  {
    id: "frontend-infrastructure",
    label: "Frontend Infrastructure",
    icon: Layers,
    accent: "violet",
    items: [
      {
        name: "Next.js 16",
        description: "App Router, RSC, and edge-ready deployments",
        icon: LayoutTemplate,
      },
      {
        name: "React 19",
        description: "Concurrent rendering and Suspense boundaries",
        icon: Atom,
      },
      {
        name: "TypeScript",
        description: "Strict, contract-first component APIs",
        icon: FileCode,
      },
      {
        name: "Tailwind CSS v4",
        description: "Tokenized utility design systems",
        icon: Wind,
      },
      {
        name: "Radix UI",
        description: "Accessible, unstyled primitives",
        icon: Component,
      },
      {
        name: "Netlify / Vercel",
        description: "CI/CD and serverless edge hosting",
        icon: Cloud,
      },
    ],
  },
  {
    id: "ml-analytics",
    label: "Applied ML & Analytics Tools",
    icon: Brain,
    accent: "emerald",
    items: [
      {
        name: "Vision Transformers",
        description: "Medical imaging classification pipelines",
        icon: ScanEye,
      },
      {
        name: "PyTorch",
        description: "Model training and evaluation workflows",
        icon: Flame,
      },
      {
        name: "Python / FastAPI",
        description: "Typed REST inference services",
        icon: Server,
      },
      {
        name: "Pandas & NumPy",
        description: "Dataset preprocessing and feature engineering",
        icon: Code2,
      },
      {
        name: "Matplotlib",
        description: "Attention map and metrics visualization",
        icon: Activity,
      },
      {
        name: "Jupyter",
        description: "Reproducible research notebooks",
        icon: Notebook,
      },
    ],
  },
] as const;

export const heroStats = [
  { label: "Production Projects", value: "3+", icon: Code2 },
  { label: "IEEE Publications", value: "1", icon: Sparkles },
  { label: "Stack Depth", value: "Full-Stack", icon: Server },
] as const;
