module.exports = {
  semi: false,
  trailingComma: 'es5',
  tabWidth: 2,
  singleQuote: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  quoteProps: 'preserve',
  arrowParens: 'avoid',
  overrides: [
    {
      'files': ['*.md'],
      'options': {
        embeddedLanguageFormatting: 'off',
      },
    },
  ],
}
