import { Camera, Printer, PartyPopper, Heart } from "lucide-react"

const features = [
  {
    icon: Camera,
    title: "Profesionální kvalita",
    description: "Žádné rozmazané fotky z mobilu. Používáme studiový blesk a špičkovou zrcadlovku pro fotky jako z titulní stránky."
  },
  {
    icon: PartyPopper,
    title: "Krabice plná rekvizit",
    description: "Máme pro vás připravené bláznivé paruky, vtipné brýle, cedulky a masky, které rozesmějí i toho největšího mrzouta."
  },
  {
    icon: Printer,
    title: "Okamžitý tisk",
    description: "Cvak a je to. Fotografie se vytiskne do pár vteřin a vaši hosté mají skvělou památku na váš velký den. Na fotku rádi umístíme vaše logo."
  },
  {
    icon: Heart,
    title: "15 let zkušeností a milá obsluha",
    description: "Náš usměvavý tým vše přiveze, zapojí a po celou dobu akce se stará o to, aby vše šlapalo na 100 %. Vy se jen bavíte."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Proč si vybrat nás
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Proč je Fotomatik hit každé party?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
