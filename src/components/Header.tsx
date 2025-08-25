'use client'

interface HeaderProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  return (
    <header className="header">
      <div 
        className="logo-text clickable-logo"
        onClick={() => onPageChange('hjem')}
      >
        CTH-GROUP CONSTRUCTION AS
      </div>
      
      <nav className="navigation">
        <button 
          className={`nav-item ${currentPage === 'hjem' ? 'active' : ''}`}
          onClick={() => onPageChange('hjem')}
        >
          <span className="nav-icon">🏠</span>
          HJEM
        </button>
        <button 
          className={`nav-item ${currentPage === 'galleri' ? 'active' : ''}`}
          onClick={() => onPageChange('galleri')}
        >
          <span className="nav-icon">📷</span>
          GALLERI
        </button>
        <button 
          className={`nav-item ${currentPage === 'tjenester' ? 'active' : ''}`}
          onClick={() => onPageChange('tjenester')}
        >
          <span className="nav-icon">🔧</span>
          TJENESTER
        </button>
        <button 
          className={`nav-item ${currentPage === 'kontakt' ? 'active' : ''}`}
          onClick={() => onPageChange('kontakt')}
        >
          <span className="nav-icon">📞</span>
          KONTAKT OSS
        </button>
        
        <div className="language-selector">
          <div className="flag-icon"></div>
          NORSK ▼
        </div>
      </nav>
    </header>
  )
}
