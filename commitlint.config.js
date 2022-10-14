module.exports = {
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['[A-Z0-9]+-'],
    },
  },
  rules: {
    'references-empty': [2, 'never'],
  },
}
