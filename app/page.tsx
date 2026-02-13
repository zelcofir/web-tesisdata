import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ToolsSection } from "@/components/tools-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { SocialSection } from "@/components/social-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ToolsSection />
        <ShowcaseSection />
        <TestimonialsSection />
        <PricingSection />
        <SocialSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
