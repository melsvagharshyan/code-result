import { motion } from 'motion/react'
import { FADE_UP, STAGGER_CONTAINER, VIEWPORT_ONCE } from '../utils/constants'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  accent: string
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  tone = 'light',
  className,
}: SectionHeadingProps) {
  const isDark = tone === 'dark'

  return (
    <motion.div
      className={className}
      variants={STAGGER_CONTAINER}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
    >
      <motion.span
        variants={FADE_UP}
        className={`block text-xs font-bold uppercase tracking-widest ${
          isDark ? 'text-bronze-400' : 'text-bronze-600'
        }`}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={FADE_UP}
        className={`mt-2 font-serif text-3xl font-light leading-tight sm:text-5xl ${
          isDark ? 'text-paper-100' : 'text-slate-950'
        }`}
      >
        {title} <br />
        <span className={`font-serif italic ${isDark ? 'text-bronze-400' : 'text-bronze-600'}`}>
          {accent}
        </span>
      </motion.h2>
    </motion.div>
  )
}
