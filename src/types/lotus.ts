export type Link = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type SeoMeta = {
  title: string;
  description: string;
};

export type HeroData = {
  eyebrow?: string;
  title: string;
  description: string;
  highlights: string[];
  ctas: Link[];
  image: string;
  imageAlt: string;
};

export type SectionIntro = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export type ServiceCard = {
  eyebrow?: string;
  title: string;
  summary: string;
  idealFor?: string;
  bullets?: string[];
  href: string;
  linkLabel?: string;
  image?: string;
  imageAlt?: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type SpotlightSection = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  ctas?: Link[];
  image: string;
  imageAlt: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type CtaBandData = {
  title: string;
  description: string;
  ctas: Link[];
};

export type PageHeroData = {
  eyebrow?: string;
  title: string;
  description: string;
};

export type ContactCard = {
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
};
