import { motion } from 'motion/react'
import { useCustomCursor } from '../utils/hooks'

export function CustomCursor() {
  const { x, y, isHovering } = useCustomCursor()

  return (
    <motion.div
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 z-[10000] hidden md:block"
      aria-hidden
    >
      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? '#B39258' : 'rgba(28, 29, 31, 0.3)',
          backgroundColor: isHovering ? 'rgba(179, 146, 88, 0.08)' : 'rgba(179, 146, 88, 0)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className="-ml-4 -mt-4 flex h-8 w-8 items-center justify-center rounded-full border"
      >
        <div className="h-1.5 w-1.5 rounded-full bg-bronze-500" />
      </motion.div>
    </motion.div>
  )
}
