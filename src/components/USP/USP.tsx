// src/components/USP/USP.tsx
'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const USP_ITEMS: string[] = [
  'Global Tax Consultancy — 15+ years of experience',
  'Comprehensive Solutions — Relocation and Tax Planning',
  'Fast Responses — Less than 48 hours',
  'Personalized Support — Direct contact with experts',
];

export default function USP() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const { t } = useTranslation();
  useGSAP(() => {
    if (!containerRef.current) return;

    // Clear previous animations if need it
    // gsap.killTweensOf(itemsRef.current);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'center 100%',
        end: 'bottom 70%',
        scrub: true,
        toggleActions: 'play none none reverse',
        markers: false, // Disabled markers for production
      },
    });

    itemsRef.current.forEach((item, index) => {
      if (!item) return;

      // Y Position animation
      tl.fromTo(
        item,
        { y: 100 },
        {
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        },
        index === 0 ? '>' : '+=0.15'
      );

      // Opacity animation (starts at same time but lasts longer)
      tl.fromTo(
        item,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: 'power1.inOut',
        },
        '<' // Start at same time as position animation
      );
    });
  });

  return (
    <div
      className="flex flex-col h-full justify-center gap-12 items-center lg:px-24 md:gap-16 md:px-16 md:py-32 overflow-hidden px-8 py-24 relative z-6"
      ref={containerRef}
    >
      {USP_ITEMS.map((text, index) => {
        const [mainText, subText] = text.split(' — ');
        return (
          <p
            key={index}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className="text-center text-light font-serif max-w-[85%] md:max-w-[80%] md:my-6 my-4 relative tracking-wide z-2"
          >
            <span className="text-h3 block font-bold mb-3 md:text-h2">
              {t(mainText)}
            </span>
            <span className="text-h5 font-light leading-snug md:text-h4 opacity-90">
              {t(subText)}
            </span>
          </p>
        );
      })}
    </div>
  );
}
