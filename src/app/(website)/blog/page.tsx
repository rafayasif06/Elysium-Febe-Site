// src/app/blog/page.tsx

'use client';

import React from 'react';
import Breadcrumb from '@/components/Common/Breadcrumb';
import ListOfPost from '@/components/Blog/ListOfPost';
import useFetchPosts from '@/hooks/useFetchPosts';
import { useTranslation } from 'react-i18next';
import { getFullLanguageName, LanguageCodes } from '@/lib/utils';


const BlogPage: React.FC = () => {
    const { i18n } = useTranslation(); 
    const selectedLanguage = (i18n.language || "en") as LanguageCodes;
     const selectedLanguageFullForm = getFullLanguageName(selectedLanguage); 
  const { posts, isLoading, error } = useFetchPosts(selectedLanguageFullForm);

  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Explore our latest blog posts and updates."
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ListOfPost posts={posts} />
      )}
    </>
  );
};

export default BlogPage;
