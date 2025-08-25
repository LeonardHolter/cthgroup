'use client'

const partners = [
  { id: 1, name: "DOR & VINDU", logo: "/dorandvinduer.png" },
  { id: 2, name: "Montér", logo: "/monter.png" },
  { id: 3, name: "FLISE KOMPANIET", logo: "/flisekompaniet.png" },
  { id: 4, name: "RIGHT PRICE TILES", logo: "/right-price-tiles.png" },
  { id: 5, name: "ELEKTRIKEREN", logo: "/elektrikeren-drammen.png" },
  { id: 6, name: "Smart Rørløsning", logo: "/smart-rorlosning.png" }
]

export default function PartnersSection() {
  return (
    <section className="partners-section">
      <div className="certification-logo" style={{ position: 'static', marginBottom: '40px' }}>
        <img 
          src="/sentral-godkjent.png" 
          alt="Sentralt Godkjent Certification"
          className="cert-image"
        />
      </div>
      
      <div className="partners-intro">
        CTH-Group Construction AS carries out all its projects as main or total contractor. 
        The company is approved as a wet room contractor, and centrally approved.
      </div>
      
      <h2 className="section-title">OUR COLLABORATION PARTNERS</h2>
      
      <div className="partners-grid">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-logo">
            <img 
              src={partner.logo} 
              alt={partner.name}
              className="partner-image"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
