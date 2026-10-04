import type { Variants } from 'motion/react'
import {
  LuAward,
  LuBriefcase,
  LuCircleCheck,
  LuCircleCheckBig,
  LuFileBadge,
  LuFileCheck,
  LuGlobe,
  LuLayers,
  LuShieldAlert,
  LuShieldCheck,
  LuUserCheck,
} from 'react-icons/lu'
import type {
  DiagramNodeId,
  NavLink,
  NodeDetail,
  Principle,
  SectionId,
  Standard,
  WorkflowStep,
} from './types'

export const EASE_OUT = [0.22, 1, 0.36, 1] as const

export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EASE_OUT },
  },
}

export const SLIDE_IN_LEFT: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } },
}

export const STAGGER_CONTAINER: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export const HEADLINE_CONTAINER: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.45 } },
}

export const HEADLINE_WORD: Variants = {
  hidden: { y: '110%', opacity: 0, rotate: 4 },
  visible: { y: '0%', opacity: 1, rotate: 0, transition: { duration: 0.9, ease: EASE_OUT } },
}

export const VIEWPORT_ONCE = { once: true, margin: '-80px' } as const

export const NAV_LINKS: NavLink[] = [
  { id: 'about', label: 'О платформе' },
  { id: 'architecture', label: 'Схема работы' },
  { id: 'principles', label: 'Принципы' },
  { id: 'workflow', label: 'Этапы продаж' },
  { id: 'standards', label: 'Стандарты' },
]

export const SECTION_IDS: SectionId[] = NAV_LINKS.map((link) => link.id)

export const HERO_TITLE_LINE = 'Привлекаем международный спрос'
export const HERO_TITLE_ACCENT = 'к объектам вашей недвижимости'

export const NODE_DETAILS: Record<DiagramNodeId, NodeDetail> = {
  buyers: {
    title: 'Покупатели с подлинным спросом:',
    description:
      'клиенты, подбирающие недвижимость за рубежом для проживания, переезда или сохранения капитала. Все входящие заявки проходят верификацию состава и актуальности данных перед передачей дальше.',
  },
  hub: {
    title: 'Платформа Nectar от компании Code Result:',
    description:
      'централизованный цифровой узел верификации. Отвечает за системную проверку входящих запросов, предотвращение дублей и распределение заявок среди аккредитованных брокеров.',
  },
  developer: {
    title: 'Застройщик и объекты:',
    description:
      'девелоперская компания получает готовые сделки от проверенных агентов, соблюдающих коммерческие регламенты и цены застройщика.',
  },
}

export const DEFAULT_NODE_DETAIL: NodeDetail = {
  title: 'Нажмите или наведите на узлы схемы,',
  description:
    'чтобы изучить механизм фильтрации запросов и взаимодействия Code Result с девелоперскими объектами.',
}

export const FLOW_PARTICLE_COUNT = 3
export const FLOW_PARTICLE_DURATION = 3.6

export const PRINCIPLES: Principle[] = [
  {
    icon: LuCircleCheckBig,
    title: 'Чистые и свежие запросы',
    description:
      'Каждая заявка проходит первичный аудит: проверяется реальная потребность в покупке жилья (для переезда, постоянного проживания или сохранения капитала) и готовность к сделке.',
  },
  {
    icon: LuShieldCheck,
    title: 'Аккредитованные брокеры',
    description:
      'Работу с вашими объектами ведут только отобранные агенты и компании, прошедшие квалификационную проверку Code Result.',
  },
  {
    icon: LuLayers,
    title: 'Защита от дублирования лидов',
    description:
      'Централизованный реестр исключает пересечение покупателей между разными агентствами и защищает застройщика от недобросовестной конкуренции.',
  },
  {
    icon: LuGlobe,
    title: 'Международная масштабируемость',
    description:
      'Code Result постоянно расширяет географию: выстраивая надежные каналы взаимодействия с покупателями для объектов в Армении и новых регионах присутствия.',
  },
  {
    icon: LuFileBadge,
    title: 'Соблюдение регламентов девелопера',
    description:
      'Продажи осуществляются в полном соответствии с прайс-листами, коммерческой политикой и стандартами позиционирования вашего бренда.',
  },
  {
    icon: LuBriefcase,
    title: 'Сопровождение до сделки',
    description:
      'Брокерские агентства берут на себя весь комплекс работы: индивидуальную презентацию, консультирование и подготовку клиента к заключению договора.',
  },
]

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: '01',
    title: 'Аудит запроса',
    description:
      'Поступающий запрос проверяется системой Code Result на подлинность данных, цель покупки и финансовую готовность клиента.',
    badge: 'Верифицированный лид',
    badgeIcon: LuCircleCheck,
  },
  {
    number: '02',
    title: 'Передача брокеру',
    description:
      'Подтвержденный запрос закрепляется за специализированным аккредитованным брокерским агентством.',
    badge: 'Персональный брокер',
    badgeIcon: LuCircleCheck,
  },
  {
    number: '03',
    title: 'Подбор объекта',
    description:
      'Брокер проводит презентацию ваших строительных проектов, организует показ и подбирает оптимальный лот.',
    badge: 'Фиксация покупателя',
    badgeIcon: LuCircleCheck,
  },
  {
    number: '04',
    title: 'Заключение договора',
    description:
      'Клиент заключает прямую сделку с девелопером. Завершение продажи фиксируется в системе Code Result.',
    badge: 'Проданный объект',
    badgeIcon: LuAward,
    isFinal: true,
  },
]

export const STANDARDS: Standard[] = [
  {
    icon: LuFileCheck,
    title: 'Юридический аудит агентств',
    description:
      'Проверка лицензирования, правового статуса и истории юридической чистоты компании.',
  },
  {
    icon: LuUserCheck,
    title: 'Квалификация брокеров',
    description:
      'Подтвержденный опыт работы с международными сделками и межрегиональными покупателями.',
  },
  {
    icon: LuShieldAlert,
    title: 'Контроль коммерческих регламентов',
    description:
      'Строгое соблюдение единого ценообразования застройщика без некорректных скидок или демпинга.',
  },
]
