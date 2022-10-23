import { Config } from '../models';

export const defaultConfig: Config = {
  title: 'Untitled Project',
  description: '',
  tags: [],
  autoupdate: true,
  autosave: false,
  delay: 1500,
  formatOnsave: false,
  mode: 'full',
  theme: 'dark',
  recoverUnsaved: true,
  showSpacing: false,
  readonly: false,
  allowLangChange: true,
  activeEditor: undefined,
  languages: undefined,
  markup: {
    language: 'html',
    content: '',
    contentUrl: '',
    selector: '',
  },
  style: {
    language: 'css',
    content: '',
    contentUrl: '',
    selector: '',
  },
  script: {
    language: 'javascript',
    content: '',
    contentUrl: '',
    selector: '',
  },
  stylesheets: [],
  scripts: [],
  cssPreset: '',
  imports: {},
  types: {},
  tests: {
    language: 'typescript',
    content: '',
  },
  tools: {
    enabled: 'all',
    active: '',
    status: '',
  },
  processors: [],
  customSettings: {
    template: {
      data: {},
      prerender: true,
    },
  },
  editor: undefined,
  fontFamily: undefined,
  fontSize: undefined,
  useTabs: false,
  tabSize: 2,
  lineNumbers: true,
  wordWrap: false,
  closeBrackets: true,
  semicolons: true,
  singleQuote: false,
  trailingComma: true,
  emmet: true,
  editorMode: undefined,
  version: process.env.VERSION as string,
  showVersion: false,
};
