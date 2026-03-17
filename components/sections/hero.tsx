"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 bg-[#1a1a1a]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="https://res.cloudinary.com/dfelxxl7t/video/upload/v1773604735/Fotomatik_hero_short_v1_c_sy1wjd.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-pulse" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border border-white/10 rounded-full animate-pulse delay-1000" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-32 md:pt-36 lg:pt-40">
        {/* Round Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/fotomatik-logo-kruh.png"
            alt="Fotomatik - Mašina na Zábavu"
            width={280}
            height={280}
            className="w-48 md:w-64 lg:w-72 h-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Large FOTOMATIK text */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 tracking-wide drop-shadow-lg">
          FOTOMATIK
        </h1>
        
        <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mb-6">
          Zábava, kterou si odnesete domů
        </p>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Profesionální fotokoutek pro vaše svatby, večírky a oslavy. 
          Nasaďte paruku, vezměte knírek a my se postaráme o dokonalou fotku 
          s okamžitým tiskem.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pb-16 md:pb-20">
          <a href="#contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
            >
              Chci Fotomatik na svou akci
            </Button>
          </a>
          <a href="#gallery">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
            >
              Prohlédnout galerii
            </Button>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
