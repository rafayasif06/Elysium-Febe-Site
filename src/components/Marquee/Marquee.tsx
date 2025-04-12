//src/components/Marquee/Marquee.tsx

'use client';

import { useRef, useEffect } from 'react';
import { Observer } from 'gsap/Observer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import horizontalLoop from '@/components/Marquee/horizontalLoop';
import { testimonialData } from '@/components/Testimonials';
// Import the Testimonial type from the correct location
import { Testimonial } from '@/sanity/testimonial';
import SingleTestimonial from '../Testimonials/SingleTestimonial';

gsap.registerPlugin(Observer, useGSAP);

// Create duplicate data to have at least 10 items (5 per row)
const createDuplicatedData = () => {
  let duplicated = [...testimonialData];
  while (duplicated.length < 10) {
    duplicated = [...duplicated, ...testimonialData];
  }
  return duplicated;
};

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marquee1Ref = useRef<HTMLDivElement>(null);

  // Fixing the type for our loops ref
  const loops = useRef<{ marquee1: ReturnType<typeof gsap.timeline> | null }>({
    marquee1: null,
  });

  const duplicatedData: Testimonial[] = createDuplicatedData();

  // Initialize marquee animation for the single row
  const initMarquees = () => {
    const baseSpeed = 1;

    if (marquee1Ref.current) {
      if (loops.current.marquee1) loops.current.marquee1.kill();

      loops.current.marquee1 = horizontalLoop(marquee1Ref.current.children, {
        repeat: -1,
        speed: baseSpeed,
        paddingRight: 120,
      });
    }
  };

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      setTimeout(initMarquees, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(
    () => {
      const speedMultiplier = 1;

      document.fonts.ready.then(() => {
        // Initialize marquee first
        setTimeout(() => {
          initMarquees();

          // Use the correct type for the animation variable
          let animation: ReturnType<typeof gsap.timeline> | undefined;
          Observer.create({
            target: window,
            type: 'wheel',
            onChangeY: (self) => {
              if (!loops.current.marquee1) return;

              animation?.kill();
              const direction = self.deltaY > 0 ? 1 : -1;

              animation = gsap
                .timeline()
                .to([loops.current.marquee1], {
                  timeScale: speedMultiplier * direction,
                  duration: 0.25,
                  overwrite: true,
                })
                .to([loops.current.marquee1], {
                  timeScale: 0.3 * direction,
                  duration: 1,
                });
            },
          });
        }, 100);
      });

      return () => {
        if (loops.current.marquee1) loops.current.marquee1.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col gap-12 overflow-hidden p-8 sm:p-6"
      id="next-section"
    >
      {/* Single Marquee Row - 5 items per row */}
      <div
        ref={marquee1Ref}
        className="flex gap-6 sm:gap-4 w-full overflow-visible will-change-transform"
      >
        {duplicatedData.slice(0, 4).map((testimonial, i) => (
          <div
            key={`t1-${i}`}
            className="testimonialContainer flex-shrink-0 w-[calc(100%/2-8px)] sm:w-[calc(100%/3-12px)] md:w-[calc(100%/4-16px)]"
          >
            <SingleTestimonial testimonial={testimonial} />
          </div>
        ))}
        {duplicatedData.slice(0, 4).map((testimonial, i) => (
          <div
            key={`t1-dup-${i}`}
            className="testimonialContainer flex-shrink-0 w-[calc(100%/2-8px)] sm:w-[calc(100%/3-12px)] md:w-[calc(100%/4-16px)]"
          >
            <SingleTestimonial testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
}
