'use client'

const testimonials = [
  {
    id: 1,
    title: "Renovated bathroom",
    text: "We are extremely satisfied with how our project turned out, and how the result was. Good dialogue during the process, the work was completed on schedule and at the agreed price, and the quality appears to be very good.",
    author: "Per, Hokksund",
    stars: 5
  },
  {
    id: 2,
    title: "Single house renovation",
    text: "Very good result. Professional carpenters. Looking for the business is available when needed.",
    author: "Anders, Drammen",
    stars: 5
  },
  {
    id: 3,
    title: "Bathroom renovation",
    text: "Martin and the team did a completely fantastic job for us. Brought up bathroom to completion on time and price. The craftsmanship they have made is first class and all the jobs they do are very professional and cozy!",
    author: "Kjetil, Steinberg",
    stars: 5
  },
  {
    id: 4,
    title: "About us - vikenbybygd",
    text: "Professionally executed, good craftsmanship and fine finish. Accommodating to have in the house (Construction and living room)",
    author: "Anne-marthe, Snarøya",
    isAbout: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 5,
    title: "Larger renovation of single house",
    text: "I have to be very satisfied with the quality of the work. As I see it, everything has been done in the right way and looks good. Communication with Martin was very good. You got a quick answer to the phone and affairs were followed up in the best way. With that we got a good control on the work agreement. We often changed some things on the way as new construction tasks arose. This was handled quickly and professionally. Chatted the job long days. Often came early at 7 in the morning and went often first at 17. The job also consisted of a lot inside. We stood really on the plan to get the job done. When the job was done, it was quickly cleared up. This is important. The price became as agreed. Something that is important. I recommend absolutely the company, and will use CTH-Group again.",
    author: "Bjørn, Spikkestad",
    stars: 5,
    isLarge: true
  },
  {
    id: 6,
    title: "Professional work",
    text: "I want to evaluate CTH-Group Construction by Martin for a very good executed job with our bathroom. All work stood completely to expectations and very good and clear communication and information during. What we wanted someone that didn't know had to be done was very courteous and clear in explaining and the deadline that it could not be done. Took initiative to solutions that we were very satisfied with. I will warmly recommend CTH-Group Construction and Martin.",
    author: "Sølvi, Søtre",
    stars: 5
  }
]

export default function TestimonialsSection() {
  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <span key={i} className="star">★</span>
    ))
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => {
          if (testimonial.isAbout) {
            return (
              <div key={testimonial.id} className="about-card">
                <img 
                  src={testimonial.image} 
                  alt="Company representative"
                  className="about-image"
                />
                <div className="about-content">
                  <h3>{testimonial.title}</h3>
                  <p>{testimonial.text}</p>
                  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
                    {testimonial.author}
                  </p>
                </div>
              </div>
            )
          }

          return (
            <div 
              key={testimonial.id} 
              className={`testimonial-card ${testimonial.isLarge ? 'testimonial-large' : ''}`}
            >
              <h3 className="testimonial-title">{testimonial.title}</h3>
              {testimonial.stars && (
                <div className="stars">
                  {renderStars(testimonial.stars)}
                </div>
              )}
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">{testimonial.author}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
