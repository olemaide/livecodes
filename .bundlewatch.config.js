module.exports = {
  files: [
    {
      path: './build/lib/*.js',
      maxSize: '3kB',
    },
    {
      path: './build/assets/*.js',
      maxSize: '10kB',
    },
    {
      path: './build/livecodes/!(*lang-)*.js',
      maxSize: '30kB',
    },
    {
      path: './build/livecodes/*(app|embed|lite).*.js',
      maxSize: '100kB',
    },
    {
      path: './build/livecodes/codemirror-!(lang-)*.js',
      maxSize: '300kB',
    },
    // {
    //   path: './build/livecodes/lang-*.js',
    //   maxSize: '10kB',
    // },
    {
      path: './build/livecodes/*.css',
      maxSize: '10kB',
    },
  ],
  defaultCompression: 'brotli',
  normalizeFilenames: /^.+?((\.[^.]{8,}}?)|())\.\w+$/,
  ci: {
    repoBranchBase: 'develop',
    trackBranches: ['main', 'develop'],
  },
};
