const customConfig = {
  '**/*.{js,jsx,ts,tsx}?(x)': [
    () => 'npm run lint:tsc:staged',
    'npm run lint:eslint:staged',
    'npm run prettier:fix',
    'npm run test:unit:staged',
  ],
  'src/**/*.css?(x)': ['npm run lint:styles:staged', 'npm run prettier:fix'],
}

module.exports = customConfig
