import { motion, useScroll, useTransform } from 'motion/react'

export function BackgroundDecor() {
  const { scrollY } = useScroll()
  const topGlowY = useTransform(scrollY, [0, 2000], [0, 260])
  const bottomGlowY = useTransform(scrollY, [0, 2000], [0, -200])

  return (
    <>
      <svg
        className="pointer-events-none fixed inset-0 z-[9999] h-screen w-screen opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <motion.div style={{ y: topGlowY }} className="pointer-events-none fixed right-[-5%] top-[-10%] z-0">
        <motion.div
          animate={{ scale: [1, 1.12, 1], x: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="ambient-glow h-[650px] w-[650px] rounded-full"
        />
      </motion.div>
      <motion.div style={{ y: bottomGlowY }} className="pointer-events-none fixed bottom-[-10%] left-[-5%] z-0">
        <motion.div
          animate={{ scale: [1, 1.08, 1], x: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="ambient-glow h-[750px] w-[750px] rounded-full"
        />
      </motion.div>
    </>
  )
}
