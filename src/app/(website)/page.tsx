// src/app/page.tsx

"use client";

import React from "react";

import Hero from "@/components/Hero/Hero";
import USP from "@/components/USP/USP";
// import Carousel from "@/components/Carousel/Carousel";
import Video from "@/components/Video";
import Brands from "@/components/Brands";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Footer from "@/components/Footer";
import AnniverseryAnimationLargeScreen from "@/components/AnniverseryAnimation/AnniverseryAnimationLargeScreen";

// Import the presentational ListOfPost
import ListOfPost from "@/components/Blog/ListOfPost";
import useFetchPosts from "@/hooks/useFetchPosts";

import { useTranslation } from "react-i18next";
import { getFullLanguageName, LanguageCodes } from "@/lib/utils";
import AnniverseryAnimationSmallScreen from "@/components/AnniverseryAnimation/AnniverseryAnimationSmallScreen";
const Home: React.FC = () => {
  const { i18n } = useTranslation();
  const selectedLanguage = (i18n.language || "en") as LanguageCodes;
  const { posts, isLoading, error } = useFetchPosts(
    getFullLanguageName(selectedLanguage)
  );

  return (
    <>
      <ScrollUp />
      <main>
        <Hero />
        <USP />
        <AboutSectionOne />
        <AboutSectionTwo />
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <ListOfPost posts={posts} />
        )}
        <Video />
        <Brands />
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <>
            <AnniverseryAnimationLargeScreen />
            <AnniverseryAnimationSmallScreen />
          </>
        )}
        <Footer />
      </main>
    </>
  );
};

export default Home;
