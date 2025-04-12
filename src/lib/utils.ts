import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type LanguageCodes = 'en' | 'fr' | 'es' | 'ca';

export const languageMap: Record<LanguageCodes, string> = {
  en: 'english',
  fr: 'french',
  es: 'spanish',
  ca: 'catalan',
};

export const getFullLanguageName = (code: string): string => {
  return languageMap[code as LanguageCodes] || 'English';
};
