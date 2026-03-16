import { Facebook } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-[#1a1a1a] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Image src="/images/fotomatik-logo-obd.png" alt="Fotomatik – profesionální fotokoutek" width={293} height={195} className="h-[108px] md:h-[120px] w-auto brightness-0 invert" />
          <a href="https://www.facebook.com/fotomatik" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook Fotomatik">
            <Facebook className="w-5 h-5 text-white" />
          </a>
          <p className="text-white/60 text-sm text-center md:text-right">
            Copyright © {currentYear} Fotomatik.cz | Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  )
}
