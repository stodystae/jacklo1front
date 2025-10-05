import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Disclaimer() {
  return (
    <>
      <Header 
        title="Kostenloses Lotto – Haftungsausschluss"
        description="Dies ist die Seite mit dem Haftungsausschluss von Kostenloses Lotto, die alle rechtlichen Hinweise enthält."
        keywords="haftungsausschluss, free-lottery.net haftungsausschluss"
      />
      <Navbar />
      <DisclaimerContent />
      <Footer />
    </>
  )
}

function DisclaimerContent() {
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
            <li>Haftungsausschluss</li>
          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="container how-it-works">
        <article>
          <header>
            <h1>Haftungsausschluss</h1>
          </header>

          <div className="main">
            <section className="generic-box">
              <p>Die auf der Website Free-Lottery.net bereitgestellten Informationen dienen ausschließlich der Nutzung durch Teilnehmer und potenzielle Teilnehmer des Kostenlosen Lottos und seiner zugehörigen Dienste. Diese Seiten dienen nur Informationszwecken und sollen keine Teilnahme am Kostenlosen Lotto oder an anderen angebotenen Diensten fördern. Darüber hinaus stellen die Informationen auf dieser Website kein Angebot oder keine Einladung von Free-Lottery.net dar, an einer Lotterie teilzunehmen.</p>
              
              <p>Free-Lottery.net wird Ihnen kostenlos zur Verfügung gestellt, und wir bemühen uns nach bestem Wissen und Gewissen, die Website sowie die darin enthaltenen Informationen, Nachrichten und Lotterieergebnisse aktuell und korrekt zu halten. Sie sollten jedoch nicht davon ausgehen, dass Free-Lottery.net fehlerfrei ist oder dass es für den von Ihnen gewünschten Zweck geeignet ist. Bitte ziehen Sie bei Bedarf fachkundigen, professionellen Rat hinzu. Die auf unseren Seiten veröffentlichten Lotterieergebnisse sollten nicht als endgültig angesehen werden, da Fehler möglich sind. Alle Gewinn- und Verlustlose müssen daher doppelt überprüft werden.</p>
              
              <p>Verlinkungen innerhalb der Website Free-Lottery.net dienen ausschließlich Ihrer Bequemlichkeit und bedeuten nicht, dass Free-Lottery.net andere Websites, deren Inhalte oder die Organisationen, die sie betreiben, befürwortet oder genehmigt.</p>
            </section>
          </div>
        </article>

        <aside>
          <div className="sidebar-panel">
            <div className="sidepanel-body bg-1">
              <img src="/images/sidebar/lotto-logos/mega-millions.png" alt="Aktueller Mega Millions Jackpot" />
              <div className="sidepanel-games">
                <div className="sub-title">Mega Millions</div>
                <div className="jackpot">$109.000.000</div>
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
                <div className="jackpot">£79.000.000</div>
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
                <div className="jackpot">$102.000.000</div>
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
