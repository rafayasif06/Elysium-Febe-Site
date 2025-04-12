// src/sanity/lib/queries.ts

import groq from 'groq';

export const ALL_POSTS_QUERY = groq`
 *[_type == "post" && references(*[_type == "category" && title == $selectedLanguageFullForm]._id)] {
  _id,
  title,
  slug,
  mainImage {
    asset->{
      _ref,
      _type,
      url
    },
    hotspot,
    crop,
    alt,
    _type
  },
  publishedAt,
  excerpt,
  body,
  "author": author->{
    name,
    image
  }
}
`;

export const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage{
      asset->{
        _id,
        _type,
        url
      },
      hotspot,
      crop,
      alt,
      _type
    },
    publishedAt,
    excerpt,
    body,
    author->{
      name,
      image
    },
    categories[]->{
      title
    }
  }
`;
