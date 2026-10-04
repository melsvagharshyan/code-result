import { AnimatePresence, motion } from 'motion/react'
import { LuInfo } from 'react-icons/lu'
import { DEFAULT_NODE_DETAIL, EASE_OUT, NODE_DETAILS } from '../utils/constants'
import type { DiagramNodeId } from '../utils/types'

interface NodeInfoCardProps {
  activeNode: DiagramNodeId | null
}

export function NodeInfoCard({ activeNode }: NodeInfoCardProps) {
  const detail = activeNode ? NODE_DETAILS[activeNode] : DEFAULT_NODE_DETAIL

  return (
    <motion.div
      layout
      className={`mt-2 overflow-hidden rounded-2xl border p-5 text-sm text-slate-800 shadow-paper-sm transition-colors duration-500 ${
        activeNode ? 'border-bronze-500/50 bg-paper-50' : 'border-paper-300 bg-paper-200/80'
      }`}
    >
      <div className="flex items-start gap-3 leading-relaxed text-slate-900">
        <motion.span
          key={activeNode ?? 'default'}
          initial={{ rotate: -90, scale: 0.5 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 16 }}
          className="mt-0.5 shrink-0"
        >
          <LuInfo className="h-5 w-5 text-bronze-600" />
        </motion.span>
        <AnimatePresence mode="wait">
          <motion.p
            key={activeNode ?? 'default'}
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
          >
            <strong>{detail.title}</strong> {detail.description}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
