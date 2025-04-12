// sanity.config.ts
import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { structureTool } from 'sanity/structure';
import { apiVersion, dataset, projectId } from './src/sanity/env';
import { schema } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';
import type { LayoutProps } from 'sanity';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  studio: {
    components: {
      layout: (props: LayoutProps) => {
        const { renderDefault } = props;

        return renderDefault({
          ...props,
          // @ts-ignore - Required for Next.js isolation
          script: () => null,
        });
      },
    },
  },
});
