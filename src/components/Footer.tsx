'use client'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          © 2025 CTH-GROUP CONSTRUCTION AS. All rights reserved. | Org.nr 931 864 887
        </div>
        
        <div className="footer-links">
          <a href="#mittanbud" className="footer-link">MITTANBUD</a>
          
          <div style={{ color: '#888', margin: '0 10px' }}>SOSIALE MEDIER:</div>
          
          <div className="social-links">
            <a href="#facebook" className="social-link">f</a>
            <a href="#instagram" className="social-link">📷</a>
          </div>
          
          <div style={{ color: '#888', margin: '0 10px' }}>JURIDISK:</div>
          
          <a href="#legal" className="social-link">⚖️</a>
        </div>
      </div>
    </footer>
  )
}
