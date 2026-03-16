import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { VideoSection } from "@/components/sections/video-section"
import { GallerySection } from "@/components/sections/gallery"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <HeroSection />
      
      <section id="features">
        <FeaturesSection />
      </section>
      
      <VideoSection />
      
      <section id="gallery">
        <GallerySection />
      </section>
      
      <section id="process">
        <HowItWorksSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
      
      <Footer />
    </main>
  )
}
