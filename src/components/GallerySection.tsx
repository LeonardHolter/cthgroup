'use client'

import { useState } from 'react'

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=500&fit=crop",
    alt: "Modern bathroom renovation"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=500&fit=crop",
    alt: "Kitchen remodeling project"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&h=500&fit=crop",
    alt: "Living room construction"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=500&fit=crop",
    alt: "Bedroom renovation"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&h=500&fit=crop",
    alt: "Modern office space"
  }
]

export default function GallerySection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section className="gallery-section">
      <h2 className="section-title">GALLERI</h2>
      
      <div className="gallery-container">
        <img 
          src={galleryImages[currentImageIndex].src}
          alt={galleryImages[currentImageIndex].alt}
          className="gallery-image"
        />
        
        <button className="gallery-nav prev" onClick={prevImage}>
          ← FORRIGE
        </button>
        <button className="gallery-nav next" onClick={nextImage}>
          NESTE →
        </button>
      </div>
      
      <button className="gallery-button">
        📷 SE GALLERI
      </button>
    </section>
  )
}
