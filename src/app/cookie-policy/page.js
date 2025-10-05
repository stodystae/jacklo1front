import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function CookiePolicy() {
  return (
    <>
      <Header 
        title="Kostenloses Lotto – Cookie-Richtlinie"
        description="Free-Lottery.net Cookie-Richtlinie"
        keywords="kostenloses lotto, cookie-richtlinie"
      />
      <Navbar />
      <CookieContent />
      <Footer />
    </>
  )
}

function CookieContent() {
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
            <li>Cookie-Richtlinie</li>
          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="container how-it-works">
        <article>
          <header>
            <h1>Free-Lottery.net Cookie-Richtlinie</h1>
          </header>

          <div className="main">
            <section className="generic-box">
              <p>Free-Lottery.net verwendet eine Technologie namens „Cookies“, um Informationen darüber zu sammeln, wie unsere Website genutzt wird. Unsere Verwendung von Cookies entspricht den EU-Vorschriften für die Nutzung von Cookies auf Websites.</p>
              <p>Hier ist eine kurze Liste der Cookies, die wir verwenden, und deren Zweck:</p>

              <ul className="list">
                <li>Analyse – Zum Speichern von Informationen wie dem Zeitpunkt Ihres Besuchs auf unserer Website, ob Sie die Seite bereits besucht haben und manchmal auch, von welcher Website Sie gekommen sind.</li>
                <li>Personalisierung – Anpassung der Website basierend auf Ihrer Interaktion, sodass Ihnen relevantere und nützlichere Informationen angezeigt werden.</li>
                <li>Soziale Medien – Diese Arten von Cookies werden von sozialen Netzwerken wie Facebook, Twitter und YouTube gesetzt und erkennen, welche Besucher soziale Medien nutzen, wenn sie Inhalte auf unserer Website ansehen. Sie ermöglichen es den Nutzern, Inhalte über Teilen-Schaltflächen einfach in sozialen Netzwerken zu teilen.</li>
                <li>ASP Session ID – Dies ist ein temporäres Cookie, das eine zufällig generierte anonyme Kennung enthält und am Ende Ihres Besuchs auf unserer Website abläuft.</li>
              </ul>

              <p>Die meisten Cookies verfallen innerhalb von 30 Tagen, obwohl die Google-Analytics-Cookies länger bestehen bleiben können.</p>
              <p>Die folgenden Inhalte bieten detailliertere Informationen über Cookies und deren Verwendung:</p>

              <h2>Was ist ein Cookie?</h2>

              <p>Ein Cookie ist eine sehr kleine Informationsdatei, die auf Ihrem Computer oder Gerät gespeichert wird. Wenn Sie eine Website besuchen, bittet diese Website Ihren Computer um die Erlaubnis, ein Cookie zu speichern, das oft eine anonyme, eindeutige Kennung enthält. Das Cookie kann unter anderem verwendet werden, um Ihre Erfahrung zu verbessern, indem es Ihnen Informationen anzeigt, die für Sie am relevantesten sind.</p>

              <h2>Wie wir Cookies verwenden</h2>

              <p>Free-Lottery.net verwendet Cookies, um festzustellen, wie Sie mit unserer Website interagieren, um die Benutzererfahrung zu verbessern. Die durch Cookies gesammelten Informationen können das Datum und die Uhrzeit Ihres Besuchs, die Dauer Ihres Aufenthalts, die besuchten Seiten und manchmal auch die Website umfassen, die Sie vor Free-Lottery.net besucht haben. Bitte seien Sie jedoch versichert, dass die durch diese Cookies bereitgestellten Informationen keine Daten enthalten, die Sie identifizieren könnten.</p>
              <p>Auf der Seite „Ticketauswahl“ verwenden wir ein Cookie, das sich die von Ihnen eingegebenen Lotteriezahlen merkt, sodass Sie bei Ihrem nächsten Besuch dieselben Zahlen schnell spielen können, wenn Sie dies bevorzugen.</p>
              <p>Unsere Website verwendet außerdem ein Cookie, das sich Ihren Benutzernamen merkt, damit Sie sich beim nächsten Besuch nur noch mit Ihrem Passwort anmelden müssen.</p>

              <h2>Was passiert, wenn Sie keine Cookies akzeptieren möchten?</h2>

              <p>Sie können Cookies jederzeit über die Optionen Ihres Webbrowsers aus Ihrem Verlauf löschen. Außerdem haben Sie die Möglichkeit, Cookies vollständig zu deaktivieren. Bitte beachten Sie jedoch, dass dadurch bestimmte Teile unserer Website eingeschränkt oder deaktiviert werden können.</p>
            </section>
          </div>
        </article>

        <aside>
          <div className="sidebar-panel">
            <div className="sidepanel-body bg-1">
              <img src="/images/sidebar/lotto-logos/mega-millions.png" alt="Aktueller Mega Millions Jackpot" />
              <div className="sidepanel-games">
                <div className="sub-title">Mega Millions</div>
                <div className="jackpot">€109.000.000</div>
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
                <div className="jackpot">€79.000.000</div>
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
                <div className="jackpot">€102.000.000</div>
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
