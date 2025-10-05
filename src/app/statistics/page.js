import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Statistics() {
  return (
    <>
      <Header 
        title="Free Lottery Statistik | Statistiken bei kostenlose-lotterie.de"
        description="Die Statistik-Seite für Free Lottery. Welche Zahlen kommen am häufigsten vor? Alle Details zu den täglichen und wöchentlichen Ziehungen."
        keywords="freie Lotterie Statistik, häufigste Free Lottery Zahlen, seltenste Free Lottery Zahlen, überfällige Free Lottery Zahlen"
      />
      <Navbar />
      <StatisticsContent />
      <Footer />
    </>
  )
}

function StatisticsContent() {
  // Statistics data for Daily Draw numbers
  const numberStats = [
    { number: 1, frequency: 162 }, { number: 2, frequency: 177 }, { number: 3, frequency: 162 }, { number: 4, frequency: 171 },
    { number: 5, frequency: 158 }, { number: 6, frequency: 165 }, { number: 7, frequency: 156 }, { number: 8, frequency: 190 },
    { number: 9, frequency: 196 }, { number: 10, frequency: 178 }, { number: 11, frequency: 174 }, { number: 12, frequency: 196 },
    { number: 13, frequency: 169 }, { number: 14, frequency: 163 }, { number: 15, frequency: 169 }, { number: 16, frequency: 190 },
    { number: 17, frequency: 174 }, { number: 18, frequency: 171 }, { number: 19, frequency: 200 }, { number: 20, frequency: 161 },
    { number: 21, frequency: 179 }, { number: 22, frequency: 179 }, { number: 23, frequency: 167 }, { number: 24, frequency: 163 },
    { number: 25, frequency: 169 }, { number: 26, frequency: 170 }, { number: 27, frequency: 176 }, { number: 28, frequency: 161 },
    { number: 29, frequency: 172 }, { number: 30, frequency: 167 }, { number: 31, frequency: 181 }, { number: 32, frequency: 175 },
    { number: 33, frequency: 180 }, { number: 34, frequency: 166 }, { number: 35, frequency: 173 }, { number: 36, frequency: 160 },
    { number: 37, frequency: 189 }, { number: 38, frequency: 184 }, { number: 39, frequency: 170 }, { number: 40, frequency: 188 },
    { number: 41, frequency: 178 }, { number: 42, frequency: 198 }, { number: 43, frequency: 176 }, { number: 44, frequency: 177 },
    { number: 45, frequency: 186 }, { number: 46, frequency: 166 }, { number: 47, frequency: 162 }, { number: 48, frequency: 186 },
    { number: 49, frequency: 169 }, { number: 50, frequency: 169 }, { number: 51, frequency: 169 }, { number: 52, frequency: 175 },
    { number: 53, frequency: 166 }, { number: 54, frequency: 192 }, { number: 55, frequency: 171 }, { number: 56, frequency: 186 },
    { number: 57, frequency: 181 }, { number: 58, frequency: 175 }, { number: 59, frequency: 172 }, { number: 60, frequency: 173 },
    { number: 61, frequency: 195 }, { number: 62, frequency: 179 }, { number: 63, frequency: 180 }, { number: 64, frequency: 184 },
    { number: 65, frequency: 173 }, { number: 66, frequency: 180 }, { number: 67, frequency: 179 }, { number: 68, frequency: 169 },
    { number: 69, frequency: 177 }, { number: 70, frequency: 167 }, { number: 71, frequency: 180 }, { number: 72, frequency: 163 },
    { number: 73, frequency: 197 }, { number: 74, frequency: 148 }, { number: 75, frequency: 161 }
  ];

  const rows = [];
  for (let i = 0; i < numberStats.length; i += 8) {
    rows.push(numberStats.slice(i, i + 8));
  }

  return (
    <>
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <ol className="breadcrumb" itemScope="" itemType="http://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
              <meta itemProp="position" content="1" />
              <Link href="/" title="kostenlose-lotterie.de Startseite" itemProp="item">
                <span itemProp="name">Free-Lottery.com Startseite</span>
              </Link>
            </li>
            <li>Statistiken</li>
          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="container statistics">
        <article>
          <div className="featured-text">
            <h1>Free Lottery Statistiken</h1>
            <p>Entdecken Sie die Statistiken der am häufigsten gezogenen Zahlen der täglichen Ziehung. Melden Sie sich an, um noch mehr Statistiken für die täglichen und wöchentlichen Ziehungen zu sehen!</p>
            <hr />
          </div>

          <div className="main">
            <section id="frequency-table" className="generic-box">
              <h2>Häufigkeitstabelle der täglichen Ziehungszahlen</h2>
              <p>Die Tabelle zeigt, wie oft jede Zahl der täglichen Ziehung seit Beginn der Lotterie bis einschließlich Samstag, 24. Oktober 2020 gezogen wurde.</p>
              
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className={`grid-row ${rowIndex === rows.length - 1 ? 'last' : ''}`}>
                  {row.map((stat) => (
                    <div key={stat.number} className="cell">
                      <div className="first-elem">{stat.number}</div>
                      <div className="sub-elem">{stat.frequency}<span>Mal</span></div>
                    </div>
                  ))}
                </div>
              ))}
            </section>

            <section className="generic-box">
              <div className="cell">
                <p>Noch kein registrierter Benutzer? Sie können nur die Häufigkeitstabelle für die täglichen Ziehungszahlen sehen. Melden Sie sich <Link href="/register" title="kostenlos registrieren">hier</Link> an, um Mitglied zu werden und Zugriff auf viele weitere Informationen zu den täglichen und wöchentlichen Ziehungen zu erhalten.</p>
                <p>Es war noch nie einfacher, Ihre Chancen auf einen der großartigen Free Lottery Preise zu nutzen.</p>
              </div>
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
