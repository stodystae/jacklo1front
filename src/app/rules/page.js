import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Rules() {
  return (
    <>
      <Header />
      <Navbar />
      <RulesContent />
      <Footer />
    </>
  )
}

function RulesContent() {
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
            <li itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
              <meta itemProp="position" content="2" />
              <Link href="/how-it-works" title="Anleitung wie Free Lottery funktioniert" itemProp="item">
                <span itemProp="name" style={{ display: 'inline-block' }}>So funktioniert es</span>
              </Link>
            </li>
            <li>Regeln</li>
          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="container rules">
        <article>
          <header className="featured-text">
            <h1>Free Lottery Regeln</h1>
            <p>Free Lottery ist genau das, was der Name sagt: ein kostenloses Lotteriespiel, bei dem du bis zu £500 beim täglichen Ziehen oder sogar £10.000 beim wöchentlichen Ziehen gewinnen kannst! Damit jedoch alle Ziehungen fair bleiben, musst du ein paar einfache Regeln befolgen, um teilzunehmen.</p>
            <hr />
          </header>
        </article>

        <div className="container how-it-works">
          <article>
            <div className="main">
              <section id="step-1" className="generic-box">
                <h2>Teilnehmerregeln</h2>

                <ul className="list">
                  <li>Teilnehmer müssen mindestens 18 Jahre alt sein.</li>
                  <li>Teilnehmer dürfen nur ein Konto haben. Das Führen von mehr als einem Konto führt zur Ungültigkeit aller Einträge.</li>
                  <li>Teilnehmer dürfen pro Ziehung nur einen Eintrag abgeben.</li>
                  <li>Neue Teilnehmer qualifizieren sich für die nächste verfügbare wöchentliche Ziehung, sobald sie sich registrieren. Wöchentliche Ziehungen finden montags um 14:00 UTC statt, Tickets sind bis 12:00 UTC am Ziehungstag erhältlich.</li>
                  <li>Nach der automatischen Qualifikation für eine wöchentliche Ziehung durch die Registrierung muss der Teilnehmer an zukünftigen wöchentlichen Ziehungen teilnehmen, indem er mindestens drei Mal in einer Woche am täglichen Ziehen teilnimmt. Dieser Zeitraum beginnt montags um 15:00 UTC und endet am folgenden Montag um 12:00 UTC.</li>
                  <li>Tickets werden elektronisch in deinem Free Lottery Konto gespeichert und sind nur für die auf dem Ticket angegebene Ziehung gültig.</li>
                  <li>Ergebnisse werden auf der <Link href="/latest-results" title="Neueste Free Lottery Ergebnisse">Seite Neueste Ergebnisse</Link> veröffentlicht. Nutzer sollten sich nach jeder Ziehung anmelden, um zu überprüfen, ob sie gewonnen haben. Free-Lottery.net wird die Teilnehmer nicht daran erinnern, die Ergebnisse zu prüfen oder sie über Gewinne informieren.</li>
                  <li>Um einen Preis zu beanspruchen, müssen Teilnehmer <Link href="/contact" title="Kontaktiere uns">uns kontaktieren</Link> innerhalb von 2 Werktagen nach der betreffenden Ziehung. Jeder Preis wird per Scheck an den Namen des Gewinnerkontos ausgezahlt. Schecks werden per Einschreiben versandt.</li>
                  <li>Mit der Registrierung auf Free-Lottery.net stimmen Teilnehmer zu, bei einem Gewinn an der Öffentlichkeitsarbeit rund um das Spiel teilzunehmen. Dies kann das Bereitstellen von Fotos und Zitaten für die Verwendung auf Free-Lottery.net umfassen. Größere Preise können persönlich für Werbezwecke übergeben werden.</li>
                </ul>

                <p>Klingt das fair? Dann stelle sicher, dass du dich <Link href="/register" title="Registrieren">anmeldest</Link>, um Free Lottery zu spielen, oder, falls du bereits ein Konto hast, hole dir deine Free Lottery Tickets!</p>
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
                <a href="/en/play/mega-millions" rel="nofollow" target="_blank" className="btn" title="Spielen Mega Millions">
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
                <a href="/en/play/euromillions" rel="nofollow" target="_blank" className="btn" title="Spielen EuroMillions">
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
                <a href="/en/play/powerball" rel="nofollow" target="_blank" className="btn" title="Spielen Powerball">
                  Spielen
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
