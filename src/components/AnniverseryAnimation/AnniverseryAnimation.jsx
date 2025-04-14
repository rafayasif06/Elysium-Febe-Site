"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Scale } from "lucide-react";

// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const AnniverseryAnimation = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".text", {
        opacity: 1,
        color: "blue",
        translateX: "-80%",
        letterSpacing: "0.5rem",
        scale: 18,

        scrollTrigger: {
          trigger: ".text",
          markers: true,
          pin: true,
          start: "top 10%",
          end: "bottom ",
          scrub:5,
          OnLeave: () => {
            gsap.to(".text", {
              opacity: 0,
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
