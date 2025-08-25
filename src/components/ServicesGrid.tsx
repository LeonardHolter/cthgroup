'use client'

const services = [
  {
    id: 1,
    title: "Electricians / Plumbers",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Facade and roof",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Painting and spackling",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Wall and concrete",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Carpenters",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Wet rooms",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
  }
]

export default function ServicesGrid() {
  return (
    <section style={{ backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img 
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="service-overlay">
              <h3 className="service-title">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
