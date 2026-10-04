import { motion } from 'motion/react'
import { EASE_OUT, STAGGER_CONTAINER, VIEWPORT_ONCE, WORKFLOW_STEPS } from '../utils/constants'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { WorkflowStepCard } from './WorkflowStepCard'

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Процесс взаимодействия"
            title="Этапы реализации объектов"
            accent="в системе Code Result"
          />
          <Reveal delay={0.3} className="max-w-md">
            <p className="text-sm text-slate-800/80">
              Структурированный путь запроса от момента обращения до финализации сделки с
              застройщиком.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 1.6, ease: EASE_OUT, delay: 0.2 }}
            className="absolute inset-x-8 top-[3.25rem] hidden h-px origin-left bg-gradient-to-r from-bronze-500/10 via-bronze-500/60 to-bronze-500 lg:block"
          />

          <motion.div
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {WORKFLOW_STEPS.map((step) => (
              <WorkflowStepCard key={step.number} step={step} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
