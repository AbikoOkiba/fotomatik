"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface CloudinaryImage {
  public_id: string
  secure_url: string
  width: number
  height: number
  display_name?: string
}

export function GallerySection() {
  const [images, setImages] = useState<CloudinaryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setImages(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const closeLightbox = () => setSelectedIndex(null)

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length))
  }

  const next = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIndex((i) => (i === null ? 0 : (i + 1) % images.length))
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === "ArrowLeft") setSelectedIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length))
      if (e.key === "ArrowRight") setSelectedIndex((i) => (i === null ? 0 : (i + 1) % images.length))
      if (e.key === "Escape") closeLightbox()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [selectedIndex, images.length])

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Galerie
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Úsměvy našich klientů
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Inspirujte se pro vaši svatbu nebo firemní event. Zvládneme jak elegantní styl, tak úplnou divočinu.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-24">
            <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          </div>
        ) : images.length === 0 ? (
          <p className="text-center text-muted-foreground py-16">Žádné fotky k zobrazení.</p>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto">
            {images.map((image, index) => (
              <div key={image.public_id} className="break-inside-avoid mb-4">
                <button
                  onClick={() => setSelectedIndex(index)}
                  className="w-full overflow-hidden rounded-2xl group cursor-pointer"
                  aria-label={`Fotografie ${index + 1}`}
                >
                  <Image
                    src={image.secure_url}
                    alt={image.display_name || `Fotomatik fotokoutek ${index + 1}`}
                    width={image.width || 600}
                    height={image.height || 450}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button className="absolute top-6 right-6 text-white/80 hover:text-white z-10 p-2" onClick={closeLightbox}>
            <X className="w-8 h-8" />
          </button>
          <button className="absolute left-4 md:left-8 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" onClick={prev}>
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-5xl w-full">
            <Image
              src={images[selectedIndex].secure_url}
              alt={images[selectedIndex].display_name || `Fotomatik ${selectedIndex + 1}`}
              width={images[selectedIndex].width || 1400}
              height={images[selectedIndex].height || 1000}
              className="max-w-full max-h-[85vh] object-contain rounded-lg mx-auto"
            />
            <p className="text-white/60 text-center text-sm mt-4">{selectedIndex + 1} / {images.length}</p>
          </div>
          <button className="absolute right-4 md:right-8 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" onClick={next}>
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      )}
    </section>
  )
}
