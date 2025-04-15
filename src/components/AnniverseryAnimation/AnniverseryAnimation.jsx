"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { motion } from "motion/react";
import ScrollTextAnimation from "../ScrollTextAnimation/ScrollTextAnimation";

// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const AnniverseryAnimation = () => {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".number-container",
          markers: false,
          pin: true,
          start: "top 10%",
          end: "+=400%", // Making it scroll for 4 times the viewport height
          scrub: 1, // Smoother scrubbing
        },
      });
      tl.to(".inside-number", {
        y: "-250%",
        // duration: 0.3,
      });
      tl.to(".inside-number", {
        opacity: 0,
        duration: 0.1,
      });

      tl.to(".number-container", {
        // color: "#ffffff",
        scale: 14,
        duration: 2, // Longer duration for smoother scale
      });
      tl.to(".number h2", {
        opacity: 0,
        duration: 0.1,
        color: "#ffffff",
      });
    },
    { scope: container }
  );

  return (
    <section className="mt-60">
      <div className="w-full mx-auto flex flex-col bg-white" ref={container}>
        <div className="w-full  ">
          <ul className="number-container  md:w-1/2  mx-auto bg-transparent  text-black text-[200px] md:text-[30vw] flex  justify-evenly items-center font-fragmentSans">
            <h2>9</h2>
            <h2 className="relative">
              0
              <p className="inside-number absolute text-xs md:text-lg right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 underline font-bold">
                Of Returning <br />
                Customer
              </p>
            </h2>
            <h2>%</h2>
          </ul>

          <div className="h-[200vw]  w-full text-black">
            <div className="textContainer flex flex-col justify-center items-center pt-[590px] mx-auto w-full p-4 gap-y-6 md:gap-y-12">
              <p className="text-base md:text-xl font-light">
                Over 1500 Projects completed
              </p>
              <ScrollTextAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnniverseryAnimation;
