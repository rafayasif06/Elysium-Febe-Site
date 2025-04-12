//src/sanity/lib/client.ts

import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

// Minimal type extension for tag support
type SanityFetchParams = {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
};

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: SanityFetchParams): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: tags.length > 0 ? false : 30,
      tags,
    },
  });
}
