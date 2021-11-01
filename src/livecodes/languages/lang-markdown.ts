import { LanguageSpecs } from '../models';
import { parserPlugins } from './prettier';
import { getLanguageCustomSettings } from './utils';

export const markdown: LanguageSpecs = {
  name: 'markdown',
  title: 'Markdown',
  parser: {
    name: 'markdown',
    pluginUrls: [parserPlugins.markdown, parserPlugins.html],
  },
  compiler: {
    url: 'https://cdn.jsdelivr.net/npm/marked@3.0.4/lib/marked.min.js',
    factory: () => async (code, { config }) =>
      (window as any).marked(code, {
        ...getLanguageCustomSettings('markdown', config),
      }),
  },
  extensions: ['md', 'markdown', 'mdown', 'mkdn'],
  editor: 'markup',
  preset: 'github-markdown-css',
};