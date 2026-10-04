import { motion } from 'motion/react'

interface HubNodeProps {
  isActive: boolean
  onActivate: () => void
}

const ripples = [0, 1]

export function HubNode({ isActive, onActivate }: HubNodeProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      data-cursor="hover"
      onClick={onActivate}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className="relative z-10 flex cursor-pointer flex-col items-center outline-none"
    >
      <motion.div
        animate={{ scale: isActive ? 1.08 : [1, 1.03, 1] }}
        transition={
          isActive
            ? { type: 'spring', stiffness: 260, damping: 18 }
            : { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }
        className="relative flex h-36 w-36 flex-col items-center justify-center rounded-[2.5rem] border-2 border-bronze-500 bg-slate-900 shadow-bronze-glow"
      >
        {ripples.map((index) => (
          <motion.span
            key={index}
            className="absolute inset-0 rounded-[2.5rem] border border-bronze-500"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1.45, opacity: 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: index * 1.5 }}
          />
        ))}

        <motion.span
          animate={{ opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="font-serif text-2xl font-light tracking-wider text-paper-100"
        >
          code result
        </motion.span>

        <div className="absolute -bottom-3.5 rounded-full border border-bronze-500 bg-paper-50 px-3 py-1 text-center shadow-sm">
          <span className="block text-[8px] font-semibold uppercase leading-tight tracking-wider text-slate-800/70">
            Nectar
          </span>
        </div>
      </motion.div>

      <div className="mt-6 text-center">
        <h3 className="font-serif text-2xl font-bold text-slate-900">Платформа Nectar</h3>
        <p className="mt-0.5 text-xs font-semibold text-bronze-600">Проверенные брокерские агентства</p>
      </div>
    </div>
  )
}
