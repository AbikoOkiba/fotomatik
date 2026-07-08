import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { CorporateSection } from "@/components/sections/corporate"
import { VideoSection } from "@/components/sections/video-section"
import { GallerySection } from "@/components/sections/gallery"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { LocationsSection } from "@/components/sections/locations"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection />

      <FeaturesSection />

      <CorporateSection />

      <VideoSection />

      <GallerySection />

      <HowItWorksSection />

      <LocationsSection />

      <ContactSection />

      <Footer />
    </main>
  )
}
