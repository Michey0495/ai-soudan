import { HeroSection } from '../components/sections/HeroSection'
import { PainSection } from '../components/sections/PainSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { FlowSection } from '../components/sections/FlowSection'
import { CasesSection } from '../components/sections/CasesSection'
import { CompanySection } from '../components/sections/CompanySection'
import { FaqSection } from '../components/sections/FaqSection'
import { CtaSection } from '../components/sections/CtaSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PainSection />
      <ServicesSection />
      <FlowSection />
      <CasesSection />
      <CompanySection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
