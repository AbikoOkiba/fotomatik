import { MapPin, Car } from "lucide-react"

const cities = [
  "Olomouc",
  "Prostějov",
  "Přerov",
  "Šternberk",
  "Litovel",
  "Uničov",
  "Mohelnice",
  "Zábřeh",
  "Šumperk",
  "Hranice",
  "Lipník nad Bečvou",
  "Kroměříž",
  "Vyškov",
  "Brno",
  "Ostrava",
  "Zlín",
]

export function LocationsSection() {
  return (
    <section id="lokality" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Kde působíme
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Fotokoutek pro Olomouc a okolí
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto text-pretty">
            Vyjíždíme z Olomouce, takže do hodiny cesty jsme prakticky kdekoliv
            na střední Moravě. Fotokoutek nejčastěji vozíme na svatby, firemní
            večírky a oslavy v Olomouci, Prostějově, Přerově a Šumperku –
            zajedeme ale i do Brna, Ostravy nebo Zlína. Doprava po Olomouci
            a blízkém okolí je v ceně.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {cities.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 px-4 py-3 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium text-sm md:text-base">
                  {city}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 text-muted-foreground">
            <Car className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-center">
              Vaše město v seznamu není? Po domluvě přijedeme kamkoliv po Moravě
              i dál – napište nám, kde se akce koná.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
