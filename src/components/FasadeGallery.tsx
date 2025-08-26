'use client'

import { useState } from 'react'

const fasadeImages = [
  {
    id: 1,
    src: "/fasade/tak/Stubben1.jpg",
    alt: "Stubben 1 - Facade and roof renovation project"
  },
  {
    id: 2,
    src: "/fasade/tak/Stubben2.jpg",
    alt: "Stubben 2 - Facade and roof construction"
  },
  {
    id: 3,
    src: "/fasade/tak/Stubben3.jpg",
    alt: "Stubben 3 - Completed facade work"
  },
  {
    id: 4,
    src: "/fasade/tak/Svaleveien1.jpg",
    alt: "Svaleveien 1 - Roof renovation project"
  },
  {
    id: 5,
    src: "/fasade/tak/VillaFlesjoe2.jpg",
    alt: "Villa Flesjø 2 - Villa facade renovation"
  },
  {
    id: 6,
    src: "/fasade/tak/VillaHovland3.jpg",
    alt: "Villa Hovland 3 - Complete roof and facade project"
  }
]

interface FasadeGalleryProps {
  onBack?: () => void
}

export default function FasadeGallery({ onBack }: FasadeGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % fasadeImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + fasadeImages.length) % fasadeImages.length)
  }

  return (
    <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', padding: '40px' }}>
      <h2 style={{ 
        fontSize: '32px', 
        fontWeight: '300', 
        color: '#4a9da8', 
        marginBottom: '50px', 
        textTransform: 'uppercase', 
        letterSpacing: '2px',
        textAlign: 'center'
      }}>
        FASADE / TAK GALLERI
      </h2>
      
      <div style={{
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <img 
          src={fasadeImages[currentImageIndex].src}
          alt={fasadeImages[currentImageIndex].alt}
          style={{
            width: '100%',
            height: '600px',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />
        
        {fasadeImages.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              style={{
                position: 'absolute',
                top: '50%',
                left: '20px',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.7)',
                border: 'none',
                color: '#ffffff',
                padding: '15px 20px',
                cursor: 'pointer',
                fontSize: '18px',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)'
              }}
            >
              ← FORRIGE
            </button>
            
            <button 
              onClick={nextImage}
              style={{
                position: 'absolute',
                top: '50%',
                right: '20px',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.7)',
                border: 'none',
                color: '#ffffff',
                padding: '15px 20px',
                cursor: 'pointer',
                fontSize: '18px',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)'
              }}
            >
              NESTE →
            </button>
          </>
        )}
      </div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '30px'
      }}>
        {fasadeImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: index === currentImageIndex ? '#4a9da8' : '#666',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
          />
        ))}
      </div>
      
      <div style={{
        textAlign: 'center',
        marginTop: '40px'
      }}>
        <button 
          onClick={onBack || (() => window.history.back())}
          style={{
            padding: '15px 30px',
            background: 'transparent',
            border: '2px solid #4a9da8',
            color: '#4a9da8',
            fontSize: '14px',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            borderRadius: '4px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#4a9da8'
            e.currentTarget.style.color = '#ffffff'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#4a9da8'
          }}
        >
          ← TILBAKE TIL GALLERI
        </button>
      </div>
    </div>
  )
}
