import { useMotionValue, useSpring } from 'motion/react'
import { useCallback, useEffect, useState, type MouseEvent } from 'react'
import type { SectionId } from './types'

const CURSOR_HOVER_SELECTOR = 'a, [data-cursor="hover"]'
const CURSOR_SPRING = { stiffness: 500, damping: 40, mass: 0.4 }

export function useCustomCursor() {
  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)
  const x = useSpring(rawX, CURSOR_SPRING)
  const y = useSpring(rawY, CURSOR_SPRING)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMove = (event: globalThis.MouseEvent) => {
      rawX.set(event.clientX)
      rawY.set(event.clientY)
    }
    const handleOver = (event: globalThis.MouseEvent) => {
      const target = event.target as Element | null
      setIsHovering(Boolean(target?.closest(CURSOR_HOVER_SELECTOR)))
    }

    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleOver)
    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
    }
  }, [rawX, rawY])

  return { x, y, dotX: rawX, dotY: rawY, isHovering }
}

export function useActiveSection(ids: SectionId[]) {
  const [activeId, setActiveId] = useState<SectionId | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id as SectionId)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [ids])

  return activeId
}

export function useSpotlight() {
  return useCallback((event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }, [])
}
