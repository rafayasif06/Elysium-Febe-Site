//src/sanity/env.ts

export const apiVersion = process.env.SANITY_STUDIO_API_VERSION || '2024-04-15';

// Use development values if environment variables are not set
export const dataset = process.env.SANITY_STUDIO_DATASET || 'development';

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'development';

// function assertValue<T>(v: T | undefined, errorMessage: string): T {
//   if (v === undefined) {
//     throw new Error(errorMessage);
//   }
//   return v;
// }
