import { MessageCircle, Truck, PartyPopper } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Ozvete se nám",
    description: "Vyplníte formulář a my vám potvrdíme termín a spolu doladíme detaily."
  },
  {
    number: "02",
    icon: Truck,
    title: "Přijedeme",
    description: "Vše včas přivezeme a na místě nachystáme."
  },
  {
    number: "03",
    icon: PartyPopper,
    title: "Bavíte se",
    description: "My fotíme, tiskneme a vy si užíváte party."
  }
]

export function HowItWorksSection() {
  return (
    <section id="process" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Proces
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Jak to u nás funguje? Jednoduše.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-0.5 bg-border" />
            
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="relative z-10 mb-8">
                  <div className="w-24 h-24 mx-auto bg-card rounded-full border-2 border-primary flex items-center justify-center shadow-lg">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
