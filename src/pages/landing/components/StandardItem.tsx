import { motion } from 'motion/react'
import { SLIDE_IN_LEFT } from '../utils/constants'
import type { Standard } from '../utils/types'

interface StandardItemProps {
  standard: Standard
}

export function StandardItem({ standard }: StandardItemProps) {
  const Icon = standard.icon

  return (
    <motion.div
      variants={SLIDE_IN_LEFT}
      whileHover={{ x: 6 }}
      className="group flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-950 p-4 transition-colors duration-300 hover:border-bronze-500/50"
    >
      <Icon className="mt-0.5 h-6 w-6 shrink-0 text-bronze-400 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
      <div>
        <h4 className="text-sm font-semibold text-paper-100">{standard.title}</h4>
        <p className="mt-1 text-xs text-paper-300/70">{standard.description}</p>
      </div>
    </motion.div>
  )
}
