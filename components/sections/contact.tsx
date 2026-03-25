"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", date: "", eventType: "", location: "", message: ""
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      alert("Nepodařilo se odeslat zprávu. Zkuste to prosím znovu nebo nás kontaktujte přímo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-start">
        <Image
          src="/images/fotomatik-photobooth.jpg"
          alt=""
          width={800}
          height={1200}
          className="w-auto h-[156%] max-w-none opacity-20 object-contain -ml-16 lg:ml-1"
          aria-hidden="true"
        />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Kontakt</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Zarezervujte si Fotomatik včas
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Pojďme to rozjet!</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Termíny na svatební sezónu a vánoční večírky se plní rychle.
                Napište nám, o jakou akci jde, kde a kdy se koná, a my se vám
                co nejdříve ozveme s cenovou nabídkou.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Telefon</p>
                  <a href="tel:+420603837432" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                    +420 603 837 432
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">E-mail</p>
                  <a href="mailto:tomas@loutocky.com" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                    tomas@loutocky.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Působnost</p>
                  <p className="text-lg font-medium text-foreground">Olomoucký kraj a okolí</p>
                  <p className="text-sm text-muted-foreground">Olomouc, Prostějov, Šumperk, Ostrava, Brno a celá Morava</p>
                  <p className="text-sm text-muted-foreground">Po domluvě za vámi rádi přijedeme kamkoliv.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background p-8 md:p-10 rounded-3xl border border-border shadow-lg">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                <CheckCircle className="w-16 h-16 text-primary" />
                <h3 className="font-serif text-2xl font-semibold text-foreground">Zpráva odeslána!</h3>
                <p className="text-muted-foreground">Děkujeme za váš zájem. Ozveme se vám co nejdříve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Jméno a příjmení *</label>
                    <Input id="name" type="text" placeholder="Jan Novák" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="rounded-xl" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">E-mail *</label>
                    <Input id="email" type="email" placeholder="jan@email.cz" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="rounded-xl" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Telefon</label>
                    <Input id="phone" type="tel" placeholder="+420 603 837 432" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="rounded-xl" />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">Datum akce *</label>
                    <Input id="date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="rounded-xl" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-2">Typ akce</label>
                    <Select value={formData.eventType} onValueChange={(value) => setFormData({ ...formData, eventType: value })}>
                      <SelectTrigger className="rounded-xl"><SelectValue placeholder="Vyberte typ" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="svatba">Svatba</SelectItem>
                        <SelectItem value="firemni">Firemní večírek</SelectItem>
                        <SelectItem value="narozeniny">Narozeniny</SelectItem>
                        <SelectItem value="jine">Jiné</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">Místo konání</label>
                    <Input id="location" type="text" placeholder="Olomouc, hotel..." value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="rounded-xl" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Vaše zpráva</label>
                  <Textarea id="message" placeholder="Jaké máte přání? Řekněte nám více o vaší akci..." rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="rounded-xl resize-none" />
                </div>
                <Button type="submit" size="lg" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-full">
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Odesílám...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2"><Send className="w-5 h-5" />Odeslat nezávaznou poptávku</span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
