import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface DiagramNodeProps {
  title: string
  subtitle: string
  isActive: boolean
  onActivate: () => void
  children: ReactNode
}

export function DiagramNode({ title, subtitle, isActive, onActivate, children }: DiagramNodeProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onActivate}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className="group relative z-10 flex cursor-pointer flex-col items-center outline-none"
    >
      <motion.div
        animate={{ y: isActive ? -6 : 0, scale: isActive ? 1.06 : 1 }}
        whileHover={{ rotate: [0, -3, 3, 0], transition: { duration: 0.5 } }}
        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        className={`relative flex h-24 w-24 items-center justify-center rounded-2xl border-2 bg-paper-50 shadow-paper-md transition-colors duration-300 ${
          isActive ? 'border-bronze-500 shadow-bronze-glow' : 'border-slate-900'
        }`}
      >
        {children}
      </motion.div>
      <div className="mt-4 text-center">
        <span className="block font-serif text-lg font-bold text-slate-900">{title}</span>
        <span className="text-xs text-slate-800/70">{subtitle}</span>
      </div>
    </div>
  )
}
