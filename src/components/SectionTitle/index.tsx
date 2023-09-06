'use client'
import { cn } from '@/utils/utils'
import { motion } from 'framer-motion'

interface SectionTitleProps {
  section: string
  title: string
  className?: string
}

export function SectionTitle({ section, title, className }: SectionTitleProps) {
  const animProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  }
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <motion.span
        className="font-mono text-sm text-emerald-400"
        {...animProps}
        transition={{ duration: 0.5 }}
      >
        {`../${section}`}
      </motion.span>
      <motion.h3
        className="font-medium text-3xl"
        {...animProps}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>
    </div>
  )
}
