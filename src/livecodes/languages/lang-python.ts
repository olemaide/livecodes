import { LanguageSpecs } from '../models';
import { getLanguageCustomSettings } from './utils';

const brythonUrl = 'https://cdn.jsdelivr.net/npm/brython@3.10.0/brython.min.js';
const stdlibUrl = 'https://cdn.jsdelivr.net/npm/brython@3.10.0/brython_stdlib.js';

export const python: LanguageSpecs = {
  name: 'python',
  title: 'Python',
  compiler: {
    factory: () => async (code) => code,
    scripts: ({ compiled, config }) => {
      const { autoloadStdlib, ...options } = getLanguageCustomSettings('python', config);
      const importsPattern = /^(?:from[ ]+(\S+)[ ]+)?import[ ]+(\S+)(?:[ ]+as[ ]+\S+)?[ ]*$/gm;
      const stdlib = autoloadStdlib !== false && compiled.match(importsPattern) ? [stdlibUrl] : [];
      const loader = `window.addEventListener("load", () => {brython(${JSON.stringify(options)})})`;
      const loaderUrl = 'data:text/plain;base64,' + btoa(loader);
      return [brythonUrl, ...stdlib, loaderUrl];
    },
    scriptType: 'text/python',
    compiledCodeLanguage: 'python',
  },
  extensions: ['py'],
  editor: 'script',
};