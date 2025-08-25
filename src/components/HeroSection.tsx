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
          CTH-Group Construction AS has long experience and broad competence for your project. We have specialists, carpenters, tilers, painters, kitchen installers, and professional craftsmen. In addition, we have a close collaboration with plumbers and electricians. This means that we can complete projects on time and deliver documentation on completed work. We take care of an unproductive relationship. The goal is to satisfy our customers and provide the best service with competitive prices within the construction industry.
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
