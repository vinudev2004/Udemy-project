import React from 'react'
import BusinessOverview from '../BusinessOverview/BusinessOverview'
import BusinessHeader from '../BusinessHeader/BusinessHeader'
import FeaturesSection from '../FeaturesSection/FeaturesSection'
import BenefitsSection from '../BenefitsSection/BenefitsSection'
import PricingSection from '../PricingSection/PricingSection'
import TestimonialsSection from '../TestimonialsSection/TestimonialsSection'
import CallToAction from '../CallToAction/CallToAction'
import BusinessFooter from '../BusinessFooter/BusinessFooter'

const UdemyBusiness = () => {
  return (
    <div>
    <BusinessHeader/>
      <BusinessOverview />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection/>
      <CallToAction />
      <BusinessFooter />


    </div>
  )
}

export default UdemyBusiness