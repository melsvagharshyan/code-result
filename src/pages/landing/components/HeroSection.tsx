import { motion } from 'motion/react'
import { LuBuilding } from 'react-icons/lu'
import { EASE_OUT } from '../utils/constants'
import { AnimatedHeadline } from './AnimatedHeadline'
import { ArchitectureDiagram } from './ArchitectureDiagram'

export function HeroSection() {
  return (
    <section id="about" className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.3 }}
          className="mb-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-paper-300 bg-paper-200/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-800 shadow-paper-sm">
            <LuBuilding className="h-3.5 w-3.5 text-bronze-600" />
            Для застройщиков и девелоперских компаний
          </div>
        </motion.div>

        <div className="mx-auto mb-16 max-w-4xl text-center">
          <AnimatedHeadline />
          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: EASE_OUT, delay: 1.3 }}
            className="mx-auto max-w-3xl text-base font-light leading-relaxed text-slate-800/80 sm:text-lg md:text-xl"
          >
            <strong className="font-semibold text-slate-900">Code Result</strong> — закрытая
            профессиональная система, которая объединяет клиентов, планирующих покупку
            недвижимости за рубежом для личного проживания, сохранения капитала или релокации, с
            девелоперами через сеть аккредитованных брокерских агентств.
          </motion.p>
        </div>

        <ArchitectureDiagram />
      </div>
    </section>
  )
}
