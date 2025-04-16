"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import ScrollTextAnimation from "../ScrollTextAnimation/ScrollTextAnimation";
import { VscPercentage } from "react-icons/vsc";

// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const AnniverseryAnimationLargeScreen = () => {
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
        duration: 0.3,
      });

      tl.to(".number-container", {
        // color: "#ffffff",
        scale: 16,
        duration: 4,
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
    <section className="mt-60 hidden md:block">
      <div
        className="w-full mx-auto flex flex-col bg-black text-white"
        ref={container}
      >
        <div className="w-full  ">
          <ul className="number-container  w-1/2  font-thin mx-auto bg-transparent   text-[30vw] flex  justify-evenly items-center font-fragmentSans ">
            <h2>9</h2>
            <h2 className="relative ">
              0
              <p className="inside-number absolute text-sm lg:text-base right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 underline font-bold text-nowrap">
                Of Returning <br />
                Customer
              </p>
            </h2>
            <h2 className="relative text-transparent">
              % <span className="absolute left-0 bottom-[35%]  translate-y-1/2 font-serif text-9xl  text-white">%</span>
            </h2>
          </ul>

          <div className="  w-full ">
            <div className="textContainer flex flex-col justify-center items-center  pt-[900px] lg:pt-[800px] pb-[100px] mx-auto w-full p-4 gap-y-6 md:gap-y-12">
              <p className="text-base lg:text-xl font-light">
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

export default AnniverseryAnimationLargeScreen;
