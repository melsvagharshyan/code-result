import { motion } from 'motion/react'
import { FADE_UP } from '../utils/constants'
import { useSpotlight } from '../utils/hooks'
import type { Principle } from '../utils/types'

interface PrincipleCardProps {
  principle: Principle
}

export function PrincipleCard({ principle }: PrincipleCardProps) {
  const handleMouseMove = useSpotlight()
  const Icon = principle.icon

  return (
    <motion.div
      variants={FADE_UP}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      className="glass-paper group relative overflow-hidden rounded-2xl border border-paper-300 p-8 shadow-paper-sm transition-[border-color,box-shadow] duration-300 hover:border-bronze-500 hover:shadow-paper-lg"
    >
      <div className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-bronze-500/30 bg-bronze-500/10 text-bronze-600 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-bronze-500 group-hover:text-paper-50">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-3 font-serif text-2xl font-bold text-slate-900">{principle.title}</h3>
        <p className="text-sm leading-relaxed text-slate-800/80">{principle.description}</p>
      </div>
    </motion.div>
  )
}
