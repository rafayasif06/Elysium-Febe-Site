// src/app/page.tsx

"use client";

import React, { useEffect, useState } from "react";

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

  const [isListOfPostRendered, setIsListOfPostRendered] = useState(false);

  useEffect(() => {
    if (!isLoading && !error) {
      setIsListOfPostRendered(true);
    }
  }, [isLoading, error]);

  return (
    <>
      <ScrollUp />
      <main>
        <Hero />
        <USP />
        <AboutSectionOne />
        <AboutSectionTwo />
        <Video />
        <Brands />
        <AnniverseryAnimationLargeScreen />
        <AnniverseryAnimationSmallScreen />
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <ListOfPost posts={posts} />
        )}
        <Footer />
      </main>
    </>
  );
};

export default Home;
