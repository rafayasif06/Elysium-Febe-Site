// src/app/blog/[slug]/page.tsx

// import SharePost from '@/components/Blog/SharePost';

import TagButton from '@/components/Blog/TagButton';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { POST_QUERY } from '@/sanity/lib/queries';
import { POST_QUERYResult, Slug } from '@/sanity/types';
import { sanityFetch } from '@/sanity/lib/client';

// Define the Props type exactly like in the Sanity documentation example
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const query = `*[_type == "post" && defined(slug.current)]{ slug }`;
  const posts = await client.fetch<{ slug: Slug | null }[]>(query);

  return posts
    .filter((post) => post.slug?.current)
    .map((post) => ({
      slug: post.slug!.current,
    }));
}

const ListOfPostDetailsPage = async (props: Props) => {
  // Await the params Promise before accessing slug
  const params = await props.params;
  const { slug } = params;

  const post: POST_QUERYResult = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
    tags: [`post-${slug}`],
  });

  if (!post || !post.slug?.current) {
    notFound();
  }

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {post.title}
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          {post.author?.image && (
                            <Image
                              src={urlFor(post.author.image).url()}
                              alt={
                                post.mainImage?.alt ||
                                post.title ||
                                'Blog Post Image'
                              }
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                          By <span>{post.author?.name}</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">{/* Calendar Icon */}</span>
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString()
                          : 'No date'}
                      </p>
                      {/* Add more metadata if needed */}
                    </div>
                  </div>
                  <div className="mb-5">
                    {post.categories?.map((category) => (
                      <a
                        key={category.title}
                        href="#0"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                      >
                        {category.title}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {post.excerpt}
                  </p>
                  {post.mainImage?.asset?.url && (
                    <div className="mb-10 w-full overflow-hidden rounded">
                      <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                        <Image
                          src={post.mainImage.asset.url}
                          alt={
                            post.mainImage.alt ||
                            post.title ||
                            'Blog Post Image'
                          }
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  )}
                  <div className="mb-10">
                    <PortableText value={post.body || []} />
                  </div>
                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Popular Tags:
                      </h4>
                      <div className="flex items-center">
                        {post.categories?.map((category) => (
                          <TagButton
                            key={category.title}
                            text={category.title || 'Untitled'}
                          />
                        ))}
                      </div>
                    </div>
                    {/* <div className="mb-5">
                        <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                          Share this post:
                        </h5>
                        <div className="flex items-center sm:justify-end">
                          <SharePost />
                        </div>
                      </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListOfPostDetailsPage;
