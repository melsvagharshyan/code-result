import type { IconType } from 'react-icons'

export type DiagramNodeId = 'buyers' | 'hub' | 'developer'

export type SectionId = 'about' | 'architecture' | 'principles' | 'workflow' | 'standards'

export interface NavLink {
  id: SectionId
  label: string
}

export interface NodeDetail {
  title: string
  description: string
}

export interface Principle {
  icon: IconType
  title: string
  description: string
}

export interface WorkflowStep {
  number: string
  title: string
  description: string
  badge: string
  badgeIcon: IconType
  isFinal?: boolean
}

export interface Standard {
  icon: IconType
  title: string
  description: string
}
