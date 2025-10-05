import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Sitemap() {
  return (
    <>
      <Header 
        title="Free Lottery Sitemap"
        description="kostenlose-lotterie.de Sitemap"
        keywords="freie Lotterie, Sitemap, Seitenübersicht"
      />
      <Navbar />
      <SitemapContent />
      <Footer />
    </>
  )
}

function SitemapContent() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <ol className="breadcrumb" itemScope="" itemType="http://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
              <meta itemProp="position" content="1" />
              <Link href="/" title="kostenlose-lotterie.de Startseite" itemProp="item">
                <span itemProp="name">kostenlose-lotterie.de Startseite</span>
              </Link>
            </li>
            <li>Sitemap</li>
          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="container how-it-works">
        <article>
          <header>
            <h1>Free Lottery Sitemap</h1>
          </header>

          <div className="main">
            <section className="generic-box">
              <h2><Link href="/" title="Free Lottery">Free Lottery</Link></h2>
              
              <br className="clear" />
              
              <h3>Ergebnisse</h3>
              <ul className="list">
                <li><Link href="/latest-results" title="Neueste Ergebnisse">Neueste Ergebnisse</Link></li>
                <li><Link href="/results/checker" title="Free Lottery Ergebnisprüfer">Prüfer</Link></li>
                <li><Link href="/latest-results" title="Tägliche Ziehungsergebnisse">Tägliche Ziehungsergebnisse</Link></li>
                <li><Link href="/latest-results" title="Wöchentliche Ziehungsergebnisse">Wöchentliche Ziehungsergebnisse</Link></li>
              </ul>
              
              <br className="clear" />
              
              <h3>Free Lottery Spielen</h3>
              <ul className="list">
                <li><Link href="/how-it-works" title="So funktioniert es">So funktioniert es</Link></li>
                <li><Link href="/rules" title="Regeln">Regeln</Link></li>
                <li><Link href="/statistics" title="Statistiken">Statistiken</Link></li>
              </ul>
              
              <br className="clear" />
              
              <h3>Hilfe & Informationen</h3>
              <ul className="list">
                <li><Link href="/help" title="Hilfe">Hilfe</Link></li>
                <li><Link href="/faq" title="Häufig gestellte Fragen">FAQ</Link></li>
                <li><Link href="/contact" title="Kontakt">Kontakt</Link></li>
                <li><Link href="/scams" title="Betrug">Betrug</Link></li>
                <li><Link href="/how-to-add-a-safe-sender" title="Wie man einen sicheren Absender hinzufügt">Wie man einen sicheren Absender hinzufügt</Link></li>
              </ul>
              
              <br className="clear" />
              
              <h3>Preise</h3>
              <ul className="list">
                <li><Link href="/competitions" title="Wettbewerbe">Wettbewerbe</Link></li>
                <li><Link href="/winners" title="Frühere Gewinner">Gewinner</Link></li>
              </ul>
              
              <br className="clear" />
              
              <h3>Unternehmensinformationen</h3>
              <ul className="list">
                <li><Link href="/terms-and-conditions" title="Allgemeine Geschäftsbedingungen">Allgemeine Geschäftsbedingungen</Link></li>
                <li><Link href="/privacy-policy" title="Datenschutzrichtlinie">Datenschutzrichtlinie</Link></li>
                <li><Link href="/cookie-policy" title="Cookie-Richtlinie">Cookie-Richtlinie</Link></li>
                <li><Link href="/disclaimer" title="Haftungsausschluss">Haftungsausschluss</Link></li>
              </ul>
            </section>
          </div>
        </article>

        <aside>
          <div className="sidebar-panel">
            <div className="sidepanel-body bg-1">
              <img src="/images/sidebar/lotto-logos/mega-millions.png" alt="Aktueller Mega Millions Jackpot" />
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
              <img src="/images/sidebar/lotto-logos/euromillions.png" alt="Aktueller EuroMillions Jackpot" />
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
              <img src="/images/sidebar/lotto-logos/powerball.png" alt="Aktueller Powerball Jackpot" />
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
