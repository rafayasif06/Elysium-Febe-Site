This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## How to make the request of types :

// Add this line at the top of your file
export const dynamic = 'force-dynamic';

import PostHeader from '../../../components/PostHeader';
import PostBody from '../../../components/PostBody';
import PostTitle from '../../../components/PostTitle';
import MoreStories from '../../../components/MoreStories';

import { sanityFetch } from '../../../sanity/lib/client';
import { POST_QUERY, ALL_POSTS_QUERY } from '../../../sanity/lib/queries';
import { ALL_POSTS_QUERYResult } from '../../../sanity/types'; // Import ALL_POSTS_QUERYResult

import { notFound } from 'next/navigation';

interface Params {
params: {
slug: string;
};
}

// Extend ALL_POSTS_QUERYResult and add the author field
interface Post extends ALL_POSTS_QUERYResult {
author: {
name: string;
image?: string | null;
};
}

export default async function PostPage({ params }: Params) {
const { slug } = params;

const post = await sanityFetch<Post>({
query: POST_QUERY,
params: { slug },
});

if (!post) {
return notFound();
}

const morePosts = await sanityFetch<ALL_POSTS_QUERYResult[]>({
query: ALL_POSTS_QUERY,
params: {},
});

const otherPosts = morePosts.filter(
(otherPost) => otherPost.slug?.current !== slug
);

return (

<article className="mx-auto max-w-4xl px-6 lg:px-10">
<header className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tighter md:text-4xl md:tracking-tighter">
<a className="hover:underline" href="/">
ListOfPost
</a>
</header>

      <PostTitle>{post.title}</PostTitle>

      <PostHeader
        title={post.title ?? 'Untitled'}
        mainImage={post.mainImage}
        publishedAt={post.publishedAt ?? ''}
        author={post.author}
      />

      <PostBody content={post.body} />

      {otherPosts.length > 0 && <MoreStories posts={otherPosts} />}
    </article>

);
}
