"use client"

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Competitions() {
  return (
    <>
      <Header 
        title="Free Lottery Aktionen, Wettbewerbe & Gewinnspiele"
        description="Informationen über alle aktuellen Aktionen und Preise auf Free-Lottery.net. Erfahren Sie, wie Sie kostenlose Gewinnchancen auf echte Geldpreise erhalten können."
        keywords="free lottery wettbewerbe, free lottery gewinnspiele, free lottery aktionen, bonus ziehungen"
      />
      <Navbar />
      <CompetitionsContent />
      <Footer />
    </>
  )
}

function CompetitionsContent() {
  const [showTerms, setShowTerms] = useState(false)

  const toggleTerms = () => {
    setShowTerms(!showTerms)
  }

  return (
    <>
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <ol className="breadcrumb" itemScope="" itemType="http://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
              <meta itemProp="position" content="1" />
              <Link href="/" title="Free-lottery.net Startseite" itemProp="item">
                <span itemProp="name">Free-Lottery.com Startseite</span>
              </Link>
            </li>
            <li>Wettbewerbe</li>
          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="container competitions">
        <article>
          <div className="featured-text">
            <h1>Aktionen & Gewinnspiele</h1>
            <p>Wollen Sie zusätzliche Gewinnchancen auf tolle Preise? Bleiben Sie auf dem Laufenden über alle aktuellen Free Lottery Wettbewerbe und Gewinnspiele.</p>
            <hr />
          </div>

          <div className="main">
            <section className="generic-box">
              <Image 
                src="/images/competitions/competitions-banner-2017.jpg" 
                alt="Wettbewerbe und Gewinnspiele" 
                width={1200} 
                height={400} 
                layout="responsive"
              />
              <br />
              <br />
              
              <h2>Aktuelle Gewinnspiele</h2>
              
              <p>Derzeit laufen keine Wettbewerbe auf Free-Lottery.net. Schauen Sie regelmäßig vorbei, um als Erste/r über neue Aktionen informiert zu werden!</p>

              <hr />
              
              <h3>Frühere Aktionen</h3>
              
              <p>Von Februar 2025 bis September 2026 wurde ein glücklicher Teilnehmer des wöchentlichen Ziehungswettbewerbs nach dem Zufallsprinzip ausgewählt, um einen Preis von mindestens £50 zu gewinnen – unabhängig davon, wie viele Zahlen sie im Hauptspiel richtig hatten! Über 60 glückliche Teilnehmer gewannen in diesem Zeitraum. Lesen Sie unten die Geschäftsbedingungen, um mehr über das Extra-Chance Ziehungsverfahren zu erfahren.</p>
              
              <div className="lower">
                <button 
                  onClick={toggleTerms} 
                  className="btn" 
                  style={{ display: 'inline-block', cursor: 'pointer' }}
                >
                  {showTerms ? 'AGB ausblenden' : 'AGB anzeigen'}
                </button>
              
                {showTerms && (
                  <div style={{ paddingTop: '30px' }}>
                    <h3>Allgemeine Geschäftsbedingungen</h3>
                    {/* AGB content stays unchanged */}
                  </div>
                )}
              </div>
            </section>
            
            <br />
            
            <h2>Hat schon jemand die Free Lottery gewonnen?</h2>
            
            <p>Besuchen Sie unsere Gewinnerseite, um alles über unsere früheren Preise und glücklichen Gewinner zu erfahren!</p>
            
            <Link href="/winners" title="Frühere Free Lottery Gewinner" className="btn">
              Frühere Gewinner anzeigen
            </Link>
          </div>
        </article>

        <aside>
          <div className="sidebar-panel">
            <div className="sidepanel-body bg-1">
              <Image src="/images/sidebar/lotto-logos/mega-millions.png" alt="Aktueller Mega Millions Jackpot" width={200} height={100} layout="responsive" />
              <div className="sidepanel-games">
                <div className="sub-title">Mega Millions</div>
                <div className="jackpot">€109,000,000</div>
              </div>
              <div className="jackpot-date">Nächste Ziehung am Dienstag!</div>
              <a href="/en/play/mega-millions" rel="nofollow" target="_blank" className="btn" title="Mega Millions spielen">
                Spielen
              </a>
            </div>

            <div className="sidepanel-body bg-1">
              <Image src="/images/sidebar/lotto-logos/euromillions.png" alt="Aktueller EuroMillions Jackpot" width={200} height={100} layout="responsive" />
              <div className="sidepanel-games">
                <div className="sub-title">EuroMillions</div>
                <div className="jackpot">€79,000,000</div>
              </div>
              <div className="jackpot-date">Nächste Ziehung am Dienstag!</div>
              <a href="/en/play/euromillions" rel="nofollow" target="_blank" className="btn" title="EuroMillions spielen">
                Spielen
              </a>
            </div>

            <div className="sidepanel-body bg-1">
              <Image src="/images/sidebar/lotto-logos/powerball.png" alt="Aktueller Powerball Jackpot" width={200} height={100} layout="responsive" />
              <div className="sidepanel-games">
                <div className="sub-title">Powerball</div>
                <div className="jackpot">€102,000,000</div>
              </div>
              <div className="jackpot-date">Nächste Ziehung am Samstag!</div>
              <a href="/en/play/powerball" rel="nofollow" target="_blank" className="btn" title="Powerball spielen">
                Spielen
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
