import { Button } from "@/components/ui/button"
import { Badge, FileText, ShieldCheck, Users } from "lucide-react"

const benefits = [
  {
    icon: Badge,
    title: "Vaše logo na každé fotce",
    description:
      "Tiskovou šablonu připravíme v barvách vaší firmy a s vaším logem. Hosté si tak odnesou památku, která dělá reklamu i vám.",
  },
  {
    icon: FileText,
    title: "Platba na fakturu",
    description:
      "Pošleme nabídku, potvrdíme termín a po akci vystavíme fakturu. Žádné papírování navíc, vše vyřídíme e-mailem.",
  },
  {
    icon: ShieldCheck,
    title: "Diskrétnost a GDPR",
    description:
      "Fotografie z akce předáme jen vám a nikde jinde je nezveřejňujeme. S osobními údaji hostů nakládáme podle GDPR.",
  },
  {
    icon: Users,
    title: "Zvládneme i velké akce",
    description:
      "Za 15 let jsme fotili večírky pro pár kolegů i akce se stovkami hostů. Obsluha je u fotokoutku celou dobu a fronta odsýpá.",
  },
]

export function CorporateSection() {
  return (
    <section id="firemni-vecirky" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Pro firmy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Fotokoutek na firemní večírek
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto text-pretty">
            Vánoční večírek, teambuilding, oslava výročí firmy nebo konference –
            fotokoutek spolehlivě rozproudí zábavu a propojí lidi, kteří spolu
            jinak mluví jen přes e-mail. Firemním akcím v Olomouci a okolí se
            věnujeme celoročně, termíny na vánoční večírky ale bývají pryč už
            na podzim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Firemní akce <span className="font-semibold text-foreground">od 11 900 Kč</span>
          </p>
          <a href="#contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
            >
              Poptat termín pro firemní akci
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
