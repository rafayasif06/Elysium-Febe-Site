'use client';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

// Register plugins once
gsap.registerPlugin(useGSAP, ScrollTrigger);

const SLIDER_IMAGES = [
  { src: '/images/image-2.png', width: 800, height: 450 },
  { src: '/images/img3.png', width: 800, height: 450 },
  { src: '/images/image-4.png', width: 800, height: 450 },
];

export default function Carousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<ReturnType<typeof gsap.timeline>>();
  const carouselId = useRef(
    `carousel-${Math.random().toString(36).substr(2, 9)}`
  );

  // Handle window resize - only refresh this component's ScrollTrigger
  useEffect(() => {
    const handleResize = () => {
      const triggers = ScrollTrigger.getAll();
      const carouselTrigger = triggers.find(
        (st) => st.vars.id === carouselId.current
      );
      if (carouselTrigger) {
        carouselTrigger.refresh();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current || !wrapperRef.current) return;

      // Clean up existing timeline for this component only
      if (timeline.current) {
        timeline.current.kill();
      }

      timeline.current = gsap
        .timeline({
          scrollTrigger: {
            id: carouselId.current,
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
            invalidateOnRefresh: true,
            // markers: process.env.NODE_ENV === 'development',
          },
          defaults: { ease: 'power2.out' },
        })
        .fromTo(
          wrapperRef.current.querySelector('.slider-2'),
          { scale: 3.5, transformOrigin: 'center center' },
          { scale: 1 }
        )
        .fromTo(
          [wrapperRef.current.querySelectorAll('.slider-1, .slider-3')],
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0 },
          '<'
        );

      return () => {
        // Only kill this component's timeline and ScrollTrigger
        if (timeline.current) {
          timeline.current.kill();
        }

        const triggers = ScrollTrigger.getAll();
        const carouselTrigger = triggers.find(
          (st) => st.vars.id === carouselId.current
        );
        if (carouselTrigger) {
          carouselTrigger.kill();
        }
      };
    },
    { scope: containerRef }
  );

  // Handle image load more carefully
  const handleImageLoaded = () => {
    const triggers = ScrollTrigger.getAll();
    const carouselTrigger = triggers.find(
      (st) => st.vars.id === carouselId.current
    );
    if (carouselTrigger) {
      carouselTrigger.refresh();
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[50vh] sm:h-[50vh] md:h-[90vh] lg:h-[130vh] overflow-hidden pb-24"
    >
      <div
        ref={wrapperRef}
        className="sticky top-0 mt-[10vh] sm:mt-[10vh] md:mt-[20vh] lg:mt-[30vh] h-[40vh] sm:h-[40vh] md:h-[70vh] lg:h-screen flex items-center justify-center"
      >
        <div className="flex gap-2 sm:gap-3 md:gap-4 py-4 items-center justify-center w-full max-h-full">
          {SLIDER_IMAGES.map((img, index) => (
            <div
              key={img.src}
              className={`flex-shrink-0 rounded-xl overflow-hidden ${
                index === 1 ? 'z-20' : 'z-10'
              } slider-${index + 1}`}
            >
              <Image
                src={img.src}
                alt={`Slider Image ${index + 1}`}
                width={800}
                height={450}
                className="w-[50vw] sm:w-[60vw] md:w-[66vw] aspect-video object-cover block"
                priority
                onLoad={handleImageLoaded}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
