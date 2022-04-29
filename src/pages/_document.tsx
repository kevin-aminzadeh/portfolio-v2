import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from '@rootDir/stitches.config'

export default class Document extends NextDocument {
  static async getInitialProps(ctx: any) {
    try {
      const initialProps = await NextDocument.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {/* Stitches CSS for SSR */}
            <style
              dangerouslySetInnerHTML={{ __html: getCssText() }}
              id='stitches'
            />
          </>
        ),
      }
    } finally {
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
