// eslint-disable-next-line import/no-extraneous-dependencies
import tw, { globalStyles, theme } from 'twin.macro'
import { globalCss } from '@rootDir/stitches.config'

const customStyles = {
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
}

const styles = () => {
  globalCss(customStyles)()
  globalCss(globalStyles as Record<any, any>)()
}

export default styles
