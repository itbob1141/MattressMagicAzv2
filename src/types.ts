export type HeaderNavLinksType = {
  name: string;
  url: string;
};

export type CTAButtonType = {
  name: string;
  url: string;
};

export type Social = {
  type: "Facebook" | "GOOGLE MY BUSINESS";
  url: string;
  icon: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterSection = {
  label: string;
  links: (FooterLink | FooterSection)[];
};

export type Feature = {
  icon: string;
  name: string;
  text: string;
  linkText: string;
  url?: string;
};

export type Brand = {
  name: string;
  url: string;
  logo: string;
};

// Breakout into Mattress and Furniture are types of product, but only do that refactor when needed

export type Product = {
  name: string;
  slug: string;
  brand: string;
  price: string | number;
  description: string;
  images: string[];
  comfortLevel: string;
  color: string;
  size: string;
  originalPrice?: number;
};
