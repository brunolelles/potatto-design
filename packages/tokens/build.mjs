import StyleDictionary from 'style-dictionary'

/**
 * Potatto Token Build
 *
 * Level 1 (root)       → :root vars — raw palette values
 * Level 2 (pre-sem)    → :root vars — functional roles
 * Level 3 (semantic)   → :root vars — component-ready tokens
 * Themes               → [data-theme="x"] — brand overrides (L1 only)
 */

const sd = new StyleDictionary({
  log: { verbosity: 'verbose' },
  source: [
    'src/level-1/**/*.json',
    'src/level-2/**/*.json',
    'src/level-3/**/*.json',
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'pt',
      buildPath: 'dist/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            selector: ':root',
            outputReferences: true,
          },
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.js',
          format: 'javascript/es6',
        },
        {
          destination: 'index.d.ts',
          format: 'typescript/es6-declarations',
        },
      ],
    },
  },
})

await sd.buildAllPlatforms()
console.log('✓ Tokens built')
