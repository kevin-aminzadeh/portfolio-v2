// import React from 'react'
// import clsx from 'clsx'
// import withDefaults from '@utils/with-defaults'
// import { VariantProps, styled } from '@rootDir/stitches.config'

// interface Props {
//   className?: string
//   isRight?: boolean
//   isSingle?: boolean
// }

// const defaultProps = {
//   className: '',
// }

// export const StyledButtonIcon = styled('span', {
//   '& svg': {

//     background: 'transparent',
//   },
//   color: 'inherit',
//   compoundVariants: [
//     // isAuto && isRight
//     {
//       css: {
//         order: 2,
//         ml: '$$buttonPadding',
//         right: '0%',
//         left: '0%',
//       },
//       isAuto: true,
//       isRight: true,
//       isSingle: false,
//     },
//     // isAuto && !isRight
//     {
//       css: {
//         order: 0,
//         mr: '$$buttonPadding',
//         right: '0%',
//         left: '0%',
//       },
//       isAuto: true,
//       isRight: false,
//       isSingle: false,
//     },
//     // isSingle && isRight
//     {
//       css: {
//         ml: 0,
//       },
//       isRight: false,
//       isSingle: true,
//     },
//     // isSingle && !isRight
//     {
//       css: {
//         mr: 0,
//       },
//       isRight: true,
//       isSingle: true,
//     },
//     // isSingle && !isRight && hasButttonBorder
//     {
//       css: {
//         mr: '$$buttonPadding',
//       },
//       isRight: false,
//       isGradientButtonBorder: true,
//       isSingle: true,
//     },
//   ],
//   dflex: 'center',
//   left: '$$buttonPadding',
//   position: 'absolute',
//   right: 'auto',
//   top: '50%',
//   transform: 'translateY(-50%)',
//   variants: {
//     isAuto: {
//       true: {
//         position: 'relative',
//         top: '0%',
//         transform: 'none',
//       },
//     },
//     isGradientButtonBorder: {
//       true: {},
//     },
//     isRight: {
//       true: {
//         left: 'auto',
//         right: '$$buttonPadding',
//       },
//     },
//     isSingle: {
//       true: {
//         position: 'static',
//         transform: 'none',
//       },
//     },
//   },
//   zIndex: '$1',
// })

// type ButtonIconVariants = VariantProps<typeof StyledButtonIcon>

// export type ButtonIconProps = Props & typeof defaultProps & ButtonIconVariants

// function ButtonIcon(): React.FC<React.PropsWithChildren<ButtonIconProps>> = ({
//   children,
//   className,
//   ...props
// }) => (
//   <StyledButtonIcon
//     className={clsx(
//       'nextui-button-icon',
//       {
//         'nextui-button-icon-right': props.isRight,
//         'nextui-button-icon-single': props.isSingle,
//       },
//       className
//     )}
//     {...props}
//   >
//     {children}
//   </StyledButtonIcon>
// )

// ButtonIcon.toString = () => '.nextui-button-icon'

// const MemoButtonIcon = React.memo(ButtonIcon)

// export default withDefaults(MemoButtonIcon, defaultProps)
