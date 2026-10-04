import { motion } from 'motion/react'
import { useCustomCursor } from '../utils/hooks'

export function CustomCursor() {
  const { x, y, dotX, dotY, isHovering } = useCustomCursor()

  return (
    <div className="pointer-events-none fixed inset-0 z-[10000] hidden md:block" aria-hidden>
      <motion.div style={{ x, y }} className="absolute left-0 top-0">
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
            borderColor: isHovering ? '#B39258' : 'rgba(28, 29, 31, 0.3)',
            backgroundColor: isHovering ? 'rgba(179, 146, 88, 0.08)' : 'rgba(179, 146, 88, 0)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="-ml-4 -mt-4 h-8 w-8 rounded-full border"
        />
      </motion.div>
      <motion.div style={{ x: dotX, y: dotY }} className="absolute left-0 top-0">
        <div className="-ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-bronze-500" />
      </motion.div>
    </div>
  )
}
