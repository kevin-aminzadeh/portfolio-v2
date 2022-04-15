const customConfig = {
  '**/*.{js,jsx,ts,tsx}?(x)': [
    () => 'npm run lint:tsc:staged',
    'npm run lint:eslint:staged',
    'npm run prettier:fix',
    'npm run test:unit:staged',
  ],
  'src/**/*.css': [() => 'npm run lint:styles:staged'],
}

module.exports = customConfig
