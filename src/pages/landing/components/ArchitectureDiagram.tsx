import { motion } from 'motion/react'
import { useState } from 'react'
import { LuBuilding2, LuUsers } from 'react-icons/lu'
import { FADE_UP, STAGGER_CONTAINER, VIEWPORT_ONCE } from '../utils/constants'
import type { DiagramNodeId } from '../utils/types'
import { DiagramNode } from './DiagramNode'
import { FlowLine } from './FlowLine'
import { HubNode } from './HubNode'
import { NodeInfoCard } from './NodeInfoCard'
import { Reveal } from './Reveal'

export function ArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState<DiagramNodeId | null>(null)

  return (
    <Reveal delay={0.2}>
      <div
        id="architecture"
        className="glass-paper relative mx-auto my-6 max-w-5xl rounded-3xl border border-paper-300 p-6 shadow-paper-lg sm:p-10"
      >
        <div className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-bronze-600">
            Архитектурная модель Code Result
          </span>
          <h2 className="mt-1 font-serif text-2xl font-medium text-slate-900 md:text-3xl">
            Единый коридор движения покупателей
          </h2>
        </div>

        <div className="w-full overflow-x-auto pb-6">
          <motion.div
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="relative flex min-w-[720px] items-center justify-between px-6 py-10"
          >
            <FlowLine />

            <motion.div variants={FADE_UP}>
              <DiagramNode
                title="Клиенты с капиталом"
                subtitle="Для жизни, сохранения капитала, релокации"
                isActive={activeNode === 'buyers'}
                onActivate={() => setActiveNode('buyers')}
              >
                <div className="flex items-center gap-1.5">
                  <LuUsers className="h-7 w-7 text-slate-900" />
                  <span className="font-serif text-xl font-bold text-bronze-600">$</span>
                </div>
              </DiagramNode>
            </motion.div>

            <motion.div variants={FADE_UP}>
              <HubNode isActive={activeNode === 'hub'} onActivate={() => setActiveNode('hub')} />
            </motion.div>

            <motion.div variants={FADE_UP}>
              <DiagramNode
                title="Ваша недвижимость"
                subtitle="Строящиеся и готовые объекты застройщика"
                isActive={activeNode === 'developer'}
                onActivate={() => setActiveNode('developer')}
              >
                <LuBuilding2 className="h-10 w-10 text-slate-900" />
              </DiagramNode>
            </motion.div>
          </motion.div>
        </div>

        <NodeInfoCard activeNode={activeNode} />
      </div>
    </Reveal>
  )
}
