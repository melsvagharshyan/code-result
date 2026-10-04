import { motion } from 'motion/react'
import {
  HEADLINE_CONTAINER,
  HEADLINE_WORD,
  HERO_TITLE_ACCENT,
  HERO_TITLE_LINE,
} from '../utils/constants'

interface WordLineProps {
  text: string
  className?: string
}

function WordLine({ text, className }: WordLineProps) {
  return (
    <>
      {text.split(' ').map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span variants={HEADLINE_WORD} className={`inline-block ${className ?? ''}`}>
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </>
  )
}

export function AnimatedHeadline() {
  return (
    <motion.h1
      variants={HEADLINE_CONTAINER}
      initial="hidden"
      animate="visible"
      className="mb-8 font-serif text-4xl font-light leading-[1.1] tracking-tight text-slate-950 sm:text-6xl md:text-7xl"
    >
      <WordLine text={HERO_TITLE_LINE} />
      <br className="hidden sm:inline" />
      <WordLine text={HERO_TITLE_ACCENT} className="font-serif font-normal italic text-bronze-600" />
    </motion.h1>
  )
}
