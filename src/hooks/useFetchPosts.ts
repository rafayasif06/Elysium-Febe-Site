// src/hooks/useFetchPosts.ts
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { ALL_POSTS_QUERY } from '@/sanity/lib/queries';
import { ALL_POSTS_QUERYResult } from '@/sanity/types';
import { useTranslation } from 'react-i18next';

const useFetchPosts = (selectedLanguageFullForm: string) => {
  // Use ALL_POSTS_QUERYResult (which is already an array)
  const { i18n } = useTranslation();
  const [posts, setPosts] = useState<ALL_POSTS_QUERYResult>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await client.fetch<ALL_POSTS_QUERYResult>(
          ALL_POSTS_QUERY,
          { selectedLanguageFullForm }
        );
        if (postsData && Array.isArray(postsData)) {
          setPosts(postsData);
        } else {
          setError('Failed to fetch posts.');
        }
      } catch (err) {
        setError('An error occurred while fetching posts.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [i18n.language]);

  return { posts, isLoading, error };
};

export default useFetchPosts;
