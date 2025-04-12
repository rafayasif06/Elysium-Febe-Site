// src/sanity/brand.ts
export interface Brand {
  id: string | number;
  href: string;
  image: string; // Only keep the dark theme image
  name: string;
}
