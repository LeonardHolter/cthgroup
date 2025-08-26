'use client'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <video 
        className="hero-video"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/IMG_6050.mov" type="video/mp4" />
        <source src="/IMG_6050.mov" type="video/quicktime" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-description">
          CTH-GROUP har lang erfaring og bred kompetanse for ditt oppdrag. Vi har snekkere, betongarbeidere, flisleggere, malere, kjøkkenmontører og vi er våtromsertifisert. I tillegg har vi forøvrig et tett samarbeid med rørlegger og elektriker. Dette gjør at vi kan gjennomføre oppdrag på bestemt tid, og levere dokumentasjon på utført arbeid. Vi tar gjerne en uforpliktende befaring. Målet er mest fornøyde kunder og beste service med konkurrerende priser innen byggebransjen.
        </div>
      </div>
      
      <div className="certification-logo">
        <img 
          src="/sentral-godkjent.png" 
          alt="Sentralt Godkjent Certification"
          className="cert-image"
        />
      </div>
    </section>
  )
}
