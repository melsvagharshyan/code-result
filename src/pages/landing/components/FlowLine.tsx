import { motion } from 'motion/react'
import {
  EASE_OUT,
  FLOW_PARTICLE_COUNT,
  FLOW_PARTICLE_DURATION,
  VIEWPORT_ONCE,
} from '../utils/constants'

const particles = Array.from({ length: FLOW_PARTICLE_COUNT }, (_, index) => index)

export function FlowLine() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[calc(50%-2rem)] z-0 h-8 -translate-y-1/2">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 1.4, ease: EASE_OUT, delay: 0.3 }}
        className="absolute inset-x-0 top-1/2 h-[2px] origin-left -translate-y-1/2 bg-paper-300/80"
      />

      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <line x1="12%" y1="50%" x2="88%" y2="50%" stroke="#B39258" strokeWidth="2" className="flow-dash" />
      </motion.svg>

      {particles.map((index) => (
        <motion.span
          key={index}
          className="absolute top-1/2 -ml-1.5 -mt-1.5 h-3 w-3 rounded-full bg-bronze-500 shadow-[0_0_12px_rgba(179,146,88,0.8)]"
          initial={{ left: '12%', opacity: 0 }}
          animate={{ left: ['12%', '88%'], opacity: [0, 1, 1, 0], scale: [0.6, 1, 1, 0.6] }}
          transition={{
            duration: FLOW_PARTICLE_DURATION,
            ease: 'linear',
            repeat: Infinity,
            delay: 1.8 + (index * FLOW_PARTICLE_DURATION) / FLOW_PARTICLE_COUNT,
          }}
        />
      ))}
    </div>
  )
}
