'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const openSub = (element) => {
    const subMenu = element.parentElement.querySelector('.subMenu')
    if (subMenu) {
      subMenu.classList.toggle('opened')
    }
  }

  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleStartPlaying = (e) => {
    if (isHomePage) {
      e.preventDefault()
      smoothScroll('quickPick')
    }
  }

  return (
    <>
      {/* Mobile Navbar */}
      <div className="navbar-wrapper mobile-navbar">
        <div className="container">
          <div className="logo">
            <Link href="/" title="Free-Lottery.ca">
              <img src="/images/mobile/logo.png" alt="Free Lottery Logo" />
            </Link>
          </div>

          <div id="sidebarLeft">
            <div id="menuOpen" className="menuOpen" onClick={toggleMobileMenu}>
              <span>☰</span>
            </div>
            
            <ul className={`sideMenu ${mobileMenuOpen ? 'active' : ''}`} id="sideMenu">
              <li>MENÜ</li>
              <li><Link href="/" title="Free-Lottery.net">Startseite</Link></li>
              <li>
                <div className="dropdown">
                  <div className="dropbtn">
                    <Link href="/how-it-works" title="So funktioniert es" className="dropbtn">So funktioniert es</Link>
                  </div>
                  <span className="expander" onClick={(e) => openSub(e.target)}>+</span>
                  <ul className="subMenu">
                    <li><Link href="/rules">Regeln</Link></li>
                  </ul>
                </div>
              </li>
              <li className="results">
                <div className="dropdown">
                  <div className="dropbtn">
                    <Link href="/latest-results" title="Neueste Free Lottery Ergebnisse" className="dropbtn">Ergebnisse</Link>
                  </div>
                  <span className="expander" onClick={(e) => openSub(e.target)}>+</span>
                  <ul className="subMenu">
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <div className="dropbtn">
                    <Link href="/help" title="Hilfe & Unterstützung" className="dropbtn">Hilfe &amp; Info</Link>
                  </div>
                  <span className="expander" onClick={(e) => openSub(e.target)}>+</span>
                  <ul className="subMenu">
                    <li><Link href="/faq">FAQs</Link></li>
                    <li><Link href="/contact">Kontakt</Link></li>
                    <li><Link href="/scams">Betrugswarnungen</Link></li>
                    <li><Link href="/how-to-add-a-safe-sender">Sichere Absender</Link></li>
                  </ul>
                </div>
              </li>
              <li><Link href="/statistics" title="Free Lottery Statistiken">Statistiken</Link></li>
              <li className="winners">
                <div className="dropdown">
                  <div className="dropbtn">
                    <Link href="/winners" title="Frühere Gewinner" className="dropbtn">Gewinner</Link>
                  </div>
                  <span className="expander" onClick={(e) => openSub(e.target)}>+</span>
                  <ul className="subMenu">
                    <li><Link href="/competitions">Wettbewerbe</Link></li>
                  </ul>
                </div>
              </li>
              <li><Link href="/scratchcards" title="Online Rubbellose">Rubbellose</Link></li>
              <li className="active">
                <Link href="/more-online-lotteries" title="Weitere Online-Lotteriespiele">Weitere Spiele</Link>
              </li>
              <li><Link href="/register" title="Jetzt kostenlos registrieren!">Registrieren</Link></li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="home-jackpot-box">
            <h1>
              Spielen Sie täglich Free Lottery und gewinnen Sie bis zu <br />
              <span style={{ textTransform: 'uppercase' }}>$100.000!</span>
            </h1>
            <Link 
              href={isHomePage ? "#quickPick" : "/"}
              title="Klicken Sie hier, um jetzt kostenlos teilzunehmen!" 
              className="btn" 
              style={{ fontSize: '24px' }}
              onClick={handleStartPlaying}
            >
              Jetzt spielen ↓
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="navbar-wrapper desktop-navbar">
        <div className="container">
          <div className="logo">
            <Link href="/" title="Free-Lottery.net">
              <img src="/images/template/logo.png" alt="Free Lottery Logo" />
            </Link>
          </div>

          <div className="navbar">
            <ul className="nav">
              <li className="active"><Link href="/" title="Free-Lottery.net">Startseite</Link></li>
              <li>
                <div className="dropdown">
                  <div className="dropbtn">
                    <Link href="/how-it-works" title="So funktioniert es" className="dropbtn">So funktioniert es</Link>
                  </div>
                  <div className="dropdown-content">
                    <Link href="/rules">Regeln</Link>
                  </div>
                </div>
              </li>
              <li className="results">
                <div className="dropdown">
                  <div className="dropbtn">
                    <Link href="/latest-results" title="Neueste Free Lottery Ergebnisse" className="dropbtn">Ergebnisse</Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <Link href="/help" title="Hilfe & Unterstützung" className="dropbtn">Hilfe &amp; Info</Link>
                  <div className="dropdown-content">
                    <Link href="/faq">FAQs</Link>
                    <Link href="/contact">Kontakt</Link>
                    <Link href="/scams">Betrugswarnungen</Link>
                    <Link href="/how-to-add-a-safe-sender">Sichere Absender</Link>
                  </div>
                </div>
              </li>
              <li><Link href="/statistics" title="Free Lottery Statistiken">Statistiken</Link></li>
              <li className="winners">
                <div className="dropdown">
                  <Link href="/winners" title="Frühere Gewinner" className="dropbtn">Gewinner</Link>
                  <div className="dropdown-content">
                    <Link href="/competitions">Wettbewerbe</Link>
                  </div>
                </div>
              </li>
              <li className="active">
                <Link href="/more-online-lotteries" title="Weitere Online-Lotteriespiele">Weitere Spiele</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="home-jackpot-box">
            <h1>
              Spielen Sie täglich Free Lottery und gewinnen Sie bis zu <br />
              <span style={{ textTransform: 'uppercase' }}>£100.000!</span>
            </h1>
            <Link 
              href={isHomePage ? "#quickPick" : "/"}
              title="Klicken Sie hier, um jetzt kostenlos teilzunehmen!" 
              className="btn" 
              style={{ fontSize: '24px' }}
              onClick={handleStartPlaying}
            >
              Jetzt spielen ↓
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
