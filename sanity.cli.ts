//sanity.cli.ts;

import { defineCliConfig } from 'sanity/cli';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET;

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  studioHost: 'elysium-sanity', // Use this to avoid prompts for hostname
});
