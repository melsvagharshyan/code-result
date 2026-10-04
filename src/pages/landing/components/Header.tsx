import { motion } from 'motion/react'
import { EASE_OUT, NAV_LINKS, SECTION_IDS } from '../utils/constants'
import { useActiveSection } from '../utils/hooks'

export function Header() {
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE_OUT }}
      className="glass-paper sticky top-0 z-50 border-b border-paper-300/60"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <a href="#about" className="flex items-center gap-3.5">
          <motion.div
            whileHover={{ rotate: -8, scale: 1.06 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 font-serif text-xl font-bold tracking-wider text-paper-100 shadow-paper-sm"
          >
            CR
          </motion.div>
          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 font-serif text-2xl font-bold tracking-tight text-slate-900">
              Code Result
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-block h-2 w-2 rounded-full bg-bronze-500"
              />
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-slate-800/60">
              B2B Platform Infrastructure
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-10 text-xs font-semibold uppercase tracking-widest text-slate-800 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative py-2 transition-colors hover:text-bronze-600 ${
                  isActive ? 'text-bronze-600' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-bronze-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 rounded-full border border-paper-300 bg-paper-200 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-800 shadow-paper-sm sm:inline-flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bronze-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-bronze-500" />
          </span>
          Presentation Materials
        </div>
      </div>
    </motion.header>
  )
}
