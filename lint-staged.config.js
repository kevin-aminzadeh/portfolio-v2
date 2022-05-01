const customConfig = {
  '*': 'npm run prettier:fix',
  '**/*.{js,jsx,ts,tsx}?(x)': [
    'npm run lint:eslint:staged',
    'npm run test:unit:staged',
  ],
  '**/*.{ts,tsx}?(x)': [() => 'npm run lint:tsc:staged'],
  'src/**/*.css?(x)': 'npm run lint:styles:staged',
}

module.exports = customConfig
