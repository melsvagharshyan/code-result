import { motion } from 'motion/react'
import { STANDARDS, STAGGER_CONTAINER, VIEWPORT_ONCE } from '../utils/constants'
import { PresentationCard } from './PresentationCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { StandardItem } from './StandardItem'

export function StandardsSection() {
  return (
    <section id="standards" className="relative overflow-hidden bg-slate-900 py-20 text-paper-100">
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(179,146,88,0.18)_0%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-6">
            <SectionHeading
              eyebrow="Стандарты качества Code Result"
              title="Контроль и аккредитация"
              accent="партнерской сети"
              tone="dark"
            />
            <Reveal delay={0.2}>
              <p className="text-sm leading-relaxed text-paper-300/80">
                Мы гарантируем застройщикам высокую культуру продаж. Допуск к каталогу объектов
                получают исключительно агентства, прошедшие аудит Code Result.
              </p>
            </Reveal>

            <motion.div
              variants={STAGGER_CONTAINER}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="space-y-4 pt-2"
            >
              {STANDARDS.map((standard) => (
                <StandardItem key={standard.title} standard={standard} />
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <PresentationCard />
          </div>
        </div>
      </div>
    </section>
  )
}
