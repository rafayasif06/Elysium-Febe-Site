"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollTextAnimation() {
  const containerRef = useRef(null);

  // Component that animates text on scroll
  const AnimatedText = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    });

    // Transform the Y position based on scroll progress
    const y = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);

    return (
      <div
        ref={ref}
        style={{ position: "relative", overflow: "hidden", margin: "20px 0" }}
      >
        <motion.h3
          style={{ y }}
          transition={{ duration: 0.5, delay }}
          className="text-5xl md:text-9xl"
        >
          {children}
        </motion.h3>
      </div>
    );
  };

  return (
    <div ref={containerRef} className="min-h-screen p-8">
      <div className="space-y-12 pb-64">
        <AnimatedText>FEATURED</AnimatedText>
        <AnimatedText delay={0.1}>PROJECTS</AnimatedText>
      </div>
    </div>
  );
}
