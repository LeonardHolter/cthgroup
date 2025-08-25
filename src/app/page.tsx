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

export default function Home() {
  const [currentPage, setCurrentPage] = useState('hjem')

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'galleri':
        return (
          <main>
            <GallerySection />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
              <div style={{ 
                position: 'relative', 
                height: '50vh', 
                backgroundImage: 'url("https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=400&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ 
                  background: 'rgba(0,0,0,0.7)', 
                  padding: '20px', 
                  textAlign: 'center',
                  color: '#fff'
                }}>
                  <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#4a9da8' }}>FACADE/ ROOF</h3>
                  <button className="gallery-button">SE ALBUM &gt;</button>
                </div>
              </div>
              <div style={{ 
                position: 'relative', 
                height: '50vh', 
                backgroundImage: 'url("https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ 
                  background: 'rgba(0,0,0,0.7)', 
                  padding: '20px', 
                  textAlign: 'center',
                  color: '#fff'
                }}>
                  <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#4a9da8' }}>BATHROOM</h3>
                  <button className="gallery-button">SE ALBUM &gt;</button>
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

  return (
    <div>
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderCurrentPage()}
      <Footer />
    </div>
  )
}
