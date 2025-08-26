'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import GallerySection from '@/components/GallerySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PartnersSection from '@/components/PartnersSection'
import ContactSection from '@/components/ContactSection'
import ServicesGrid from '@/components/ServicesGrid'
import Footer from '@/components/Footer'
import BathroomGallery from '@/components/BathroomGallery'
import FasadeGallery from '@/components/FasadeGallery'
import TilbyggGallery from '@/components/TilbyggGallery'
import NybyggGallery from '@/components/NybyggGallery'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('hjem')
  const [showBathroomGallery, setShowBathroomGallery] = useState(false)
  const [showFasadeGallery, setShowFasadeGallery] = useState(false)
  const [showTilbyggGallery, setShowTilbyggGallery] = useState(false)
  const [showNybyggGallery, setShowNybyggGallery] = useState(false)

  const renderCurrentPage = () => {
    if (showBathroomGallery) {
      return <BathroomGallery onBack={() => setShowBathroomGallery(false)} />
    }
    
    if (showFasadeGallery) {
      return <FasadeGallery onBack={() => setShowFasadeGallery(false)} />
    }
    
    if (showTilbyggGallery) {
      return <TilbyggGallery onBack={() => setShowTilbyggGallery(false)} />
    }
    
    if (showNybyggGallery) {
      return <NybyggGallery onBack={() => setShowNybyggGallery(false)} />
    }

    switch (currentPage) {
      case 'galleri':
        return (
          <main style={{ backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', height: '100vh' }}>
              <div style={{ 
                position: 'relative', 
                backgroundImage: 'url("https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&h=800&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ 
                  background: 'rgba(0,0,0,0.6)', 
                  padding: '30px', 
                  textAlign: 'center',
                  color: '#fff',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ 
                    fontSize: '32px', 
                    marginBottom: '20px', 
                    color: '#4a9da8',
                    fontWeight: '300',
                    letterSpacing: '2px',
                    textTransform: 'uppercase'
                  }}>FASADE/ TAK</h3>
                  <button 
                    className="gallery-button"
                    onClick={() => setShowFasadeGallery(true)}
                    style={{
                      padding: '12px 24px',
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
                  >
                    SE ALBUM &gt;
                  </button>
                </div>
              </div>
              <div style={{ 
                position: 'relative', 
                backgroundImage: 'url("https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ 
                  background: 'rgba(0,0,0,0.6)', 
                  padding: '30px', 
                  textAlign: 'center',
                  color: '#fff',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ 
                    fontSize: '32px', 
                    marginBottom: '20px', 
                    color: '#4a9da8',
                    fontWeight: '300',
                    letterSpacing: '2px',
                    textTransform: 'uppercase'
                  }}>BAD</h3>
                  <button 
                    className="gallery-button"
                    onClick={() => setShowBathroomGallery(true)}
                    style={{
                      padding: '12px 24px',
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
                  >
                    SE ALBUM &gt;
                  </button>
                </div>
              </div>
              <div style={{ 
                position: 'relative', 
                backgroundImage: 'url("https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=800&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ 
                  background: 'rgba(0,0,0,0.6)', 
                  padding: '30px', 
                  textAlign: 'center',
                  color: '#fff',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ 
                    fontSize: '32px', 
                    marginBottom: '20px', 
                    color: '#4a9da8',
                    fontWeight: '300',
                    letterSpacing: '2px',
                    textTransform: 'uppercase'
                  }}>TILBYGG</h3>
                  <button 
                    className="gallery-button"
                    onClick={() => setShowTilbyggGallery(true)}
                    style={{
                      padding: '12px 24px',
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
                  >
                    SE ALBUM &gt;
                  </button>
                </div>
              </div>
              <div style={{ 
                position: 'relative', 
                backgroundImage: 'url("https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=800&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ 
                  background: 'rgba(0,0,0,0.6)', 
                  padding: '30px', 
                  textAlign: 'center',
                  color: '#fff',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ 
                    fontSize: '32px', 
                    marginBottom: '20px', 
                    color: '#4a9da8',
                    fontWeight: '300',
                    letterSpacing: '2px',
                    textTransform: 'uppercase'
                  }}>NYBYGG</h3>
                  <button 
                    className="gallery-button"
                    onClick={() => setShowNybyggGallery(true)}
                    style={{
                      padding: '12px 24px',
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
                  >
                    SE ALBUM &gt;
                  </button>
                </div>
              </div>
            </div>
          </main>
        )
      case 'tjenester':
        return <ServicesGrid />
      case 'kontakt':
        return (
          <main>
            <ContactSection />
            <PartnersSection />
          </main>
        )
      default:
        return (
          <main>
            <HeroSection />
            <GallerySection />
            <TestimonialsSection />
            <PartnersSection />
            <ContactSection />
          </main>
        )
    }
  }

  const handlePageChange = (page: string) => {
    setCurrentPage(page)
    setShowBathroomGallery(false) // Reset bathroom gallery when changing pages
    setShowFasadeGallery(false) // Reset facade gallery when changing pages
    setShowTilbyggGallery(false) // Reset tilbygg gallery when changing pages
    setShowNybyggGallery(false) // Reset nybygg gallery when changing pages
  }

  return (
    <div>
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      {renderCurrentPage()}
      <Footer />
    </div>
  )
}
