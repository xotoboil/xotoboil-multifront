import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stencil-components',
  globalStyle: 'src/global/global.css ',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: '**/*.{jpg,png}',
          dest: 'dist/components/assets',
          warn: true,
        },
      ],
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [sass()],
};
