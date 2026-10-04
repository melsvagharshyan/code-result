import { MotionConfig } from 'motion/react'
import { BackgroundDecor } from './components/BackgroundDecor'
import { CustomCursor } from './components/CustomCursor'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { PrinciplesSection } from './components/PrinciplesSection'
import { ScrollProgress } from './components/ScrollProgress'
import { StandardsSection } from './components/StandardsSection'
import { WorkflowSection } from './components/WorkflowSection'

export default function LandingPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <BackgroundDecor />
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <main className="relative z-10">
          <HeroSection />
          <PrinciplesSection />
          <WorkflowSection />
          <StandardsSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
