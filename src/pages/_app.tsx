/* eslint-disable react/jsx-props-no-spreading */
import globalStyles from '@styles/globalStyles'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return <Component {...pageProps} />
}

export default MyApp
