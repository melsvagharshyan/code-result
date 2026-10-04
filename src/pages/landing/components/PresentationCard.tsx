import { motion } from 'motion/react'
import { LuBuilding } from 'react-icons/lu'
import { EASE_OUT, VIEWPORT_ONCE } from '../utils/constants'

export function PresentationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 1, ease: EASE_OUT, delay: 0.2 }}
      className="relative overflow-hidden rounded-3xl p-px shadow-bronze-glow"
    >
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-60%] bg-[conic-gradient(from_0deg,transparent_0%,rgba(179,146,88,0.9)_10%,transparent_25%,transparent_50%,rgba(179,146,88,0.6)_60%,transparent_75%)]"
      />

      <div className="relative rounded-3xl bg-slate-950 p-8 text-center sm:p-10">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-bronze-500/30 bg-bronze-500/10 text-bronze-400"
        >
          <LuBuilding className="h-8 w-8" />
        </motion.div>
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-bronze-400">
          B2B Инфраструктура
        </span>
        <h3 className="mb-4 font-serif text-2xl font-bold text-paper-100 sm:text-3xl">
          Презентация системы Code Result
        </h3>
        <p className="mx-auto max-w-md text-xs leading-relaxed text-paper-300/80 sm:text-sm">
          Данный демонстрационный интерфейс отражает базовые архитектурные принципы распределения
          международного спроса и взаимодействия с объектами застройщиков.
        </p>
      </div>
    </motion.div>
  )
}
