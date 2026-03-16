"use client"

import { useState, useRef, useEffect } from "react"
import { Play, X } from "lucide-react"

interface CloudinaryVideo {
  src: string
  poster: string
  label: string
}

export function VideoSection() {
  const [videos, setVideos] = useState<CloudinaryVideo[]>([])
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    fetch("/api/videos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setVideos(data)
      })
      .catch(() => {})
  }, [])

  const closeVideo = () => {
    videoRef.current?.pause()
    setActiveVideo(null)
  }

  if (videos.length === 0) return null

  return (
    <section className="py-24 md:py-32 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm mb-4 block">
            V akci
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Podívejte se, jak to umíme roztočit
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Atmosféra se nedá popsat, ta se musí zažít. Takhle vypadá Fotomatik v akci.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <button
              key={index}
              onClick={() => setActiveVideo(index)}
              className="relative aspect-video bg-black/50 rounded-3xl overflow-hidden group cursor-pointer w-full"
              aria-label={`Přehrát video: ${video.label}`}
            >
              <img
                src={video.poster}
                alt={video.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white fill-white ml-1" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeVideo !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white z-10 p-2"
            onClick={closeVideo}
            aria-label="Zavřít video"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <video
              ref={videoRef}
              src={videos[activeVideo].src}
              controls
              autoPlay
              className="w-full rounded-2xl"
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  )
}
