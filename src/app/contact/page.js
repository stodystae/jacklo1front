import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Header 
        title="Kontakt Kostenloses Lotto"
        description="Haben Sie eine Frage? Wählen Sie eine der folgenden Kontaktmöglichkeiten, um sich mit Kostenloses Lotto in Verbindung zu setzen."
        keywords="kontakt kostenlose-lotterie.de, kostenloses lotto kontaktformular, kontaktieren Sie uns"
      />
      <Navbar />
      <ContactContent />
      <Footer />
    </>
  )
}

function ContactContent() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <ol className="breadcrumb" itemScope="" itemType="http://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
              <meta itemProp="position" content="1" />
              <Link href="/" title="Free-lottery.net Startseite" itemProp="item">
                <span itemProp="name">kostenlose-lotterie.de Startseite</span>
              </Link>
            </li>
            <li itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
              <meta itemProp="position" content="2" />
              <Link href="/help" title="kostenlose-lotterie.de Hilfe und Informationen" itemProp="item">
                <span itemProp="name" style={{display: 'inline-block'}}>Hilfe</span>
              </Link>
            </li>
            <li>Kontakt</li>
          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="container contact-page">
        <article>
          <header className="featured-text">
            <h1>Kontaktieren Sie uns</h1>
            <p>Wenn Sie einen Gewinn beanspruchen, Feedback zu Kostenloses Lotto geben oder Probleme bzw. Anliegen haben, nehmen Sie bitte Kontakt mit uns auf.</p>
            <hr />
          </header>

          <div className="main">
            <section className="generic-box">
              <h2>Kontaktmöglichkeiten</h2>
              
              <div className="first-elem">
                <div className="title">E-Mail-Adresse</div>
                <h2>support@kostenlose-lotterie.de</h2> 

                <div className="title">Soziale Medien</div>
                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/FreeLotteryDraw" title="Folgen Sie Kostenloses Lotto auf Facebook" target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="https://twitter.com/FreeLotteryDraw" title="Folgen Sie Kostenloses Lotto auf Twitter" target="_blank" rel="noopener noreferrer">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>

              <div className="second-elem">
                <div className="title">Postanschrift</div>
                <ul>
                  <li>Free-Lottery.net</li>
                  <li>The Exchange</li>
                  <li>Station Parade</li>
                  <li>Harrogate</li>
                  <li>HG1 1TS</li>
                </ul>
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
