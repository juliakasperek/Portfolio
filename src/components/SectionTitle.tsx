import type { ReactNode } from 'react'
import { motion } from 'motion/react'

type Props = {
  index: string
  label: string
  title: ReactNode
  accent?: 'pink' | 'yellow' | 'blue' | 'mint'
}

const accents = {
  pink: 'bg-pink',
  yellow: 'bg-yellow',
  blue: 'bg-blue',
  mint: 'bg-mint',
}

export default function SectionTitle({ index, label, title, accent = 'pink' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className="mb-12"
    >
      <span className={`pill ${accents[accent]} font-mono text-xs uppercase tracking-wider shadow-pop-sm`}>
        {index} / {label}
      </span>
      <h2 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
        {title}
      </h2>
    </motion.div>
  )
}
