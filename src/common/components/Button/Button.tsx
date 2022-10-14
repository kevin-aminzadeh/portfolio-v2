// import Link from 'next/link'
// import React, { ElementType } from 'react'

// const colors = [
//   'primary',
//   'secondary',
//   'success',
//   'warning',
//   'danger',
//   'info',
//   'light',
//   'dark',
// ] as const

// const variants = [
//   ...colors,
//   'link',
//   ...colors.map((color) => `outline-${color}` as const),
// ] as const

// type Variants = typeof variants[number]

// export interface ButtonProps {
//   active: boolean
//   as?: ElementType
//   children: string
//   disabled: boolean
//   href?: string
//   size: 'sm' | 'lg'
//   type: 'button' | 'reset' | 'submit' | 'null'
//   variant: Variants
// }

// function Button({
//   active = false,
//   as = 'button',
//   children,
//   disabled = false,
//   href = '',
//   size = 'lg',
//   type = 'button',
//   variant = 'primary',
// }: ButtonProps) {
//   return (
//     <Link href={href}>
//       {React.createElement(as)}
//       <a
//         className={`relative border-2 border-red-500 bg-red-500 px-6 py-4 text-white outline-red-500 ${
//           active && 'active'
//         } ${disabled && 'disabled'} ${variant && variant} ${size && size}
//         `}
//         href={href}
//         type={type}
//       >
//         {children}
//       </a>
//     </Link>
//   )
// }

// export default Button
