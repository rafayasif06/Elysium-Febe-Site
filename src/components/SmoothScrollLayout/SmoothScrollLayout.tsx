// src/components/SmoothScrollLayout.tsx
'use client';

import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register plugins once
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function SmoothScrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const smoother = useRef<ScrollSmoother>();
  const pathname = usePathname();

  useGSAP(() => {
    // Initialize ScrollSmoother
    smoother.current = ScrollSmoother.create({
      smooth: 3.9,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true,
    });

    // Cleanup function
    return () => {
      if (smoother.current) {
        smoother.current.kill();
      }
    };
  }, [pathname]); // Re-run on route change

  return (
    <div id="smooth-wrapper" className="overflow-hidden w-full h-screen">
      <div id="smooth-content" className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
