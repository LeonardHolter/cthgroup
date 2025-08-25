'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
    alert('Message sent! We will contact you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact-section">
      <h2 className="section-title">KONTAKT OSS</h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>OUR COLLABORATION PARTNERS</h3>
          <div className="contact-details">
            <p>For inquiries, please contact us via phone or email:</p>
            <p>📞 <strong>Phone:</strong> 968 58 800</p>
            <p>✉️ <strong>Email:</strong> post@cthgroupconstruction.no</p>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              required
            />
          </div>
          
          <button type="submit" className="submit-button">
            ✉️ SEND EMAIL
          </button>
        </form>
      </div>
    </section>
  )
}
