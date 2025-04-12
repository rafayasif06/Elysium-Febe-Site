// src/components/Hero/Hero.tsx
'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t } = useTranslation();

  const heroSectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroSectionRef.current || !videoRef.current || !contentRef.current)
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    tl.addLabel('start');
    tl.to(videoRef.current, { opacity: 0, ease: 'power1.in' }, 'start+=0');
    tl.to(
      contentRef.current,
      { opacity: 0, y: -128, ease: 'power2.out', duration: 0.3 },
      'start+=0'
    );
    tl.addLabel('end');
  });

  return (
    <section
      className="relative w-full h-screen overflow-hidden z-4 bg-projects-colorstyles-hero-dark transform-style-preserve-3d"
      ref={heroSectionRef}
    >
      <div className="w-full h-full">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover opacity-100 will-change-opacity"
          ref={videoRef}
          preload="auto"
        >
          <source src="/videos/applevid.mp4" type="video/mp4" />
        </video>

        <div
          className="relative z-5 h-full flex flex-col items-start justify-center pl-[50px] lg:pl-[130px] pr-[3.5rem] opacity-100 will-change-transform gap-4"
          ref={contentRef}
        >
          <h1 className="text-[2.5rem] lg:text-[3rem] tracking-[-0.01em] leading-[3rem] lg:leading-[3.75rem] font-fragmentSerif font-normal bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent text-left">
            {t('Building lasting')} <br />
            {t('partnerships')}
          </h1>

          <p className="text-projects-colorstyles-mainbody-veig font-fragment text-[1rem] lg:text-h4 leading-[1.4rem] lg:leading-[1.25rem] text-left opacity-90 max-w-[500px]">
            {t('Discover us')}
          </p>
        </div>
      </div>
    </section>
  );
}
