"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import ScrollTextAnimation from "../ScrollTextAnimation/ScrollTextAnimation";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AnniverseryAnimationSmallScreen = () => {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".number-container",
          // markers: true,
          pin: true,
          start: "center center",
          end: "+=400%",
          scrub: 1,
          pinSpacing: true,
        },
      });
      tl.to(".inside-number", {
        y: "-250%",
        duration: 0.1,
      });
      tl.to(".inside-number", {
        opacity: 0,
        duration: 0.1,
      });

      tl.to(".number-container", {
        scale: 30,
        translateX: "-10%",
      });
      // tl.to(".number h2", {
      //   opacity: 0,
      //   color: "#000",
      // });
    },
    { scope: container }
  );

  return (
    <section className="mt-16  md:hidden ">
      <div
        className="w-full mx-auto flex flex-col bg-black text-white"
        ref={container}
      >
        <div className="w-full   ">
          <ul className="number-container  font-extralight mx-auto bg-transparent text-[220px] sm:text-[350px] flex  justify-center items-center font-HelveticaNowDisplay translate-x-[10%] sm:translate-x-[5%]  ">
            <h2>9</h2>
            <h2 className="relative ">
              0
              <p className="inside-number absolute text-[10px]  right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 underline font-bold text-nowrap ">
                Of Returning <br />
                Customer
              </p>
            </h2>
            <h2 className="relative text-transparent max-w-[122px] overflow-hidden  ">
              %
              <span className="absolute left-0 bottom-[35%]  translate-y-1/2 font-serif text-7xl  text-white">
                %
              </span>
            </h2>
          </ul>

          <div className="  w-full bg-stone-950 pt-[600px] sm:pt-[500px] ">
            <div className="textContainer flex flex-col justify-center items-center  mx-auto w-full p-4 gap-y-6 ">
              <p className="text-base font-light">
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

export default AnniverseryAnimationSmallScreen;
