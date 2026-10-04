import { motion } from 'motion/react'
import { FADE_UP } from '../utils/constants'
import type { WorkflowStep } from '../utils/types'

interface WorkflowStepCardProps {
  step: WorkflowStep
}

export function WorkflowStepCard({ step }: WorkflowStepCardProps) {
  const BadgeIcon = step.badgeIcon

  return (
    <motion.div
      variants={FADE_UP}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`glass-paper group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-8 transition-shadow duration-300 hover:shadow-paper-md ${
        step.isFinal ? 'border-bronze-500/40' : 'border-paper-300'
      }`}
    >
      {step.isFinal && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-bronze-300/25 to-transparent"
          animate={{ x: ['0%', '400%'] }}
          transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
        />
      )}

      <div className="relative">
        <span
          className={`mb-4 block font-serif text-3xl font-bold transition-transform duration-500 group-hover:translate-x-1 ${
            step.isFinal ? 'text-slate-900' : 'text-bronze-500'
          }`}
        >
          {step.number}
        </span>
        <h3 className="mb-2 font-serif text-xl font-bold text-slate-900">{step.title}</h3>
        <p className="text-xs leading-relaxed text-slate-800/80">{step.description}</p>
      </div>

      <div
        className={`relative mt-6 flex items-center gap-1.5 border-t border-paper-300/80 pt-4 text-[11px] ${
          step.isFinal ? 'font-bold text-slate-900' : 'font-semibold text-bronze-600'
        }`}
      >
        <BadgeIcon
          className={`h-3.5 w-3.5 transition-transform duration-500 group-hover:scale-125 ${
            step.isFinal ? 'text-bronze-600' : ''
          }`}
        />
        {step.badge}
      </div>
    </motion.div>
  )
}
