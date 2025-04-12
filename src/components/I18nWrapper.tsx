// components/I18nWrapper.tsx
'use client';

import { useEffect, useState } from 'react';
import i18n from '../i18n'; // Adjust the import path as needed

export default function I18nWrapper({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize i18n if not already initialized
    if (!i18n.isInitialized) {
      i18n.init().then(() => setIsInitialized(true));
    } else {
      setIsInitialized(true);
    }
  }, []);

  // Render children only after i18n is initialized
  if (!isInitialized) {
    return null; // Or a loading spinner
  }

  return children;
}