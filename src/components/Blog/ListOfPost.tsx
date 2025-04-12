// src/components/Blog/ListOfPost.tsx
'use client';

import React from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import { ALL_POSTS_QUERYResult } from '@/sanity/types';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface ListOfPostProps {
  posts: ALL_POSTS_QUERYResult;
}

const ListOfPost: React.FC<ListOfPostProps> = ({ posts }) => {
  const { t } = useTranslation();
  if (!posts || posts.length === 0) {
    return <p>{t('no_posts_available')}</p>;
  }

  return (
    <section
      id="listofposts"
      className="bg-bg-color-dark lg:py-28 md:py-20 py-16"
    >
      <div className="container">
        <SectionTitle
          title={t('recent_posts')}
          paragraph={t('explore_recent_articles')}
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3 sm:grid-cols-2">
          {posts.map((post) => {
            const {
              _id,
              title,
              mainImage,
              excerpt,
              author,
              publishedAt,
              slug,
            } = post;

            return (
              <div key={_id} className="w-full">
                <div className="bg-dark rounded-sm shadow-one duration-300 group hover:shadow-gray-dark hover:shadow-two overflow-hidden relative">
                  <Link
                    href={`/blog/${slug?.current}`}
                    className="w-full aspect-[37/22] block relative"
                  >
                    {mainImage?.asset && (
                      <Image
                        src={urlFor(mainImage).url()}
                        alt={mainImage.alt ?? 'Post Image'}
                        fill
                      />
                    )}
                  </Link>
                  <div className="p-6 2xl:p-8 lg:p-8 md:px-6 md:py-8 sm:p-8 xl:px-5 xl:py-8">
                    <h3>
                      <Link
                        href={`/blog/${slug?.current}`}
                        className="text-white text-xl block font-bold hover:text-primary mb-4 sm:text-2xl"
                      >
                        {title}
                      </Link>
                    </h3>
                    <p className="border-b border-opacity-10 border-white text-base text-body-color-dark font-medium mb-6 pb-6">
                      {excerpt}
                    </p>
                    <div className="flex items-center">
                      {author?.image?.asset && (
                        <div className="flex border-opacity-10 border-r border-white 2xl:mr-5 2xl:pr-5 items-center mr-5 pr-5 xl:mr-3 xl:pr-3">
                          <div className="mr-4">
                            <div className="h-10 rounded-full w-10 overflow-hidden relative">
                              <Image
                                src={urlFor(author.image).url()}
                                alt={author.name || 'Author'}
                                fill
                              />
                            </div>
                          </div>
                          <div className="w-full">
                            <h4 className="text-sm text-white font-medium mb-1">
                              {t('by')} {author.name}
                            </h4>
                          </div>
                        </div>
                      )}
                      <div className="inline-block">
                        <h4 className="text-sm text-white font-medium mb-1">
                          {t('date')}
                        </h4>
                        <p className="text-body-color-dark text-xs">
                          {publishedAt
                            ? new Date(publishedAt).toLocaleDateString()
                            : t('no_date')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ListOfPost;
