"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Scale } from "lucide-react";
import { getDisplayName } from "next/dist/shared/lib/utils";

// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const AnniverseryAnimation = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".text", {
        opacity: 1,
        color: "#ffffff",
        translateX: "-50%",
        letterSpacing: "0.3rem",
        scale: 8,
        scrollTrigger: {
          trigger: ".text",
          markers: true,
          pin: true,
          start: "top 10%",
          end: "bottom",
          scrub: 1.5,
          onLeave: () => {
            gsap.to(".text", {
              display: "hidden",
            });
          },
        },
      });
    },
    { scope: container }
  ); // Scope for proper cleanup

  return (
    <section className="mt-60" ref={container}>
      <div className="w-full mx-auto flex flex-col">
        <div className="h-[50vw] bg-gray-950 w-full" />
        <div className="text mx-auto w-full flex justify-center items-center">
          <h2 className="text-white text-[30vw]">10</h2>
        </div>
        <div className="h-[200vw] bg-gray-950 w-full" />
      </div>
    </section>
  );
};

export default AnniverseryAnimation;
