const references = [
  {
    quote:
      "Bez Fotomatiku si už vánoční večírek neumíme představit. Každý rok máme jiný motiv, lidi dorazí v kostýmech a u fotokoutku je celý večer největší nával. Některé fotky u nás visí na nástěnce dodnes.",
    name: "Soňa",
    role: "hlavní ekonomka, Sociální služby Šternberk",
  },
  {
    quote:
      "S Tomášem děláme večírky v kulturáku v Mohelnici už několik let. Vždycky přijede včas, všechno funguje a my máme o zábavu postaráno. Kolegové se dopředu ptají, jestli fotokoutek zase bude.",
    name: "Martina",
    role: "asistentka ředitele, Siemens Mohelnice",
  },
  {
    quote:
      "Fotokoutek jsme měli na večírku v resortu Sobotín. Přístup naprosto profesionální, domluva bez problémů. V sále to bylo jednoznačně nejživější místo a kolegové si vytištěné fotky hrdě odnášeli domů.",
    name: "Jana",
    role: "marketing, Agel",
  },
  {
    quote:
      "Večírek jsme měli v hotelu Flora v Olomouci. Domluva rychlá, bez zbytečného papírování a šablona fotek s naším logem vypadala moc dobře.",
    name: "Petr",
    role: "HR, Innogy",
  },
  {
    quote:
      "Fotomatik s námi objel řadu akcí po celé Moravě, nejčastěji v Ostravě. Obsluha je super, umí lidi rozhýbat a fotky mají úroveň. Proto se k nim vracíme.",
    name: "Rostislav",
    role: "manažer, Generali",
  },
  {
    quote:
      "Na padesátinách se sešli lidi, co se neviděli dvacet let. U fotokoutku z nich spadla tréma dřív, než dopili první pivo. A já se nemusel o nic starat, Tomáš si všechno přivezl a zapojil sám.",
    name: "Radek",
    role: "oslava 50. narozenin",
  },
  {
    quote:
      "Fotokoutek na manželovy padesátiny byl nejlepší nápad z celé oslavy. Fotit se šla i babička, které je přes devadesát. Album s fotkami si od té doby prohlížíme častěji než svatební.",
    name: "Jana",
    role: "oslava 50. narozenin",
  },
  {
    quote:
      "Chtěli jsme, aby se hosté bavili i mimo parket. Fotky z koutku si lepili rovnou do knihy hostů i s věnováním. Když ji teď listujeme, je to ta nejhezčí památka, co ze svatby máme.",
    name: "Markéta a Jirka",
    role: "svatba",
  },
  {
    quote:
      "Trochu jsme váhali, jestli to není zbytečnost navíc. Nebyla. Hosté u fotokoutku strávili půl večera a paruku si nakonec půjčila i moje máma. Fotku s knírkem má dodnes na ledničce.",
    name: "Kristýna a Ondra",
    role: "svatba",
  },
]

export function ReferencesSection() {
  return (
    <section id="reference" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Reference
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Co říkají naši klienti
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
          {references.map((ref, index) => (
            <figure
              key={index}
              className="break-inside-avoid mb-6 p-8 bg-card rounded-2xl border border-border"
            >
              <span
                className="block font-serif text-5xl leading-none text-accent mb-3 select-none"
                aria-hidden="true"
              >
                &bdquo;
              </span>
              <blockquote className="font-serif text-lg text-foreground leading-relaxed italic mb-5">
                {ref.quote}
              </blockquote>
              <figcaption className="text-sm">
                <span className="font-semibold text-foreground">{ref.name}</span>
                <span className="text-muted-foreground"> · {ref.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
