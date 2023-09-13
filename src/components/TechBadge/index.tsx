'use client'

import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string
}

export function TechBadge({ name, ...props }: TechBadgeProps) {
  return (
    <motion.span
      className="py-1 px-3 rounded-lg text-sm bg-emerald-900/80 text-emerald-400"
      {...props}
    >
      {name}
    </motion.span>
  )
}
