import { motion } from 'motion/react'
import { PRINCIPLES, STAGGER_CONTAINER, VIEWPORT_ONCE } from '../utils/constants'
import { PrincipleCard } from './PrincipleCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function PrinciplesSection() {
  return (
    <section id="principles" className="relative border-y border-paper-300 bg-paper-200/50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <SectionHeading
            eyebrow="Ценность для девелопера"
            title="Работа с целевым"
            accent="и верифицированным спросом"
          />
          <Reveal delay={0.25}>
            <p className="mt-4 text-sm text-slate-800/80 sm:text-base">
              Система Code Result устраняет хаос на международном рынке, обеспечивая прозрачную
              передачу чистых запросов застройщику.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {PRINCIPLES.map((principle) => (
            <PrincipleCard key={principle.title} principle={principle} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
