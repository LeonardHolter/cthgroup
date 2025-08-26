'use client'

const services = [
  {
    id: 1,
    title: "Elektriker / Rørlegger",
    image: "/tjenester/elektriker.jpeg"
  },
  {
    id: 2,
    title: "Fasade og tak",
    image: "/tjenester/tak.webp"
  },
  {
    id: 3,
    title: "Maling og sparkling",
    image: "/tjenester/maling.jpeg"
  },
  {
    id: 4,
    title: "Mur og betong",
    image: "/tjenester/mur%20og%20betong.jpeg"
  },
  {
    id: 5,
    title: "Snekker",
    image: "/tjenester/snekker.jpeg"
  },
  {
    id: 6,
    title: "Våtrom",
    image: "/tjenester/våtrom.jpeg"
  }
]

export default function ServicesGrid() {
  return (
    <section style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', padding: '40px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '20px',
        maxWidth: '1400px',
        margin: '0 auto',
        minHeight: 'calc(100vh - 120px)'
      }}>
        {services.map((service) => (
          <div 
            key={service.id} 
            style={{
              position: 'relative',
              backgroundImage: `url(${service.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '300px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <h3 style={{
                fontSize: '28px',
                fontWeight: '300',
                color: '#ffffff',
                textAlign: 'center',
                letterSpacing: '1px',
                textTransform: 'capitalize',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
              }}>
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
