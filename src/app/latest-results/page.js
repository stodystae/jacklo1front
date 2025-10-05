import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function LatestResults() {
  return (
    <>
      <Header />
      <Navbar />
      <LatestResultsContent />
      <Footer />
    </>
  )
}

function LatestResultsContent() {
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
            <li>Neueste Ergebnisse</li>
          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="container faq">
        <article>
          <div className="featured-text">
            <h1>Neueste Free Lottery Ergebnisse</h1>
            <p>Sehen Sie nach, wie Sie bei den letzten Ziehungen abgeschnitten haben.<br />
            Denken Sie daran: Sie müssen alle 6 gezogenen Zahlen richtig haben, um zu gewinnen!</p>
            <hr />
          </div>

          <div className="main">
            <div className="outer-container">
              <div className="latest-result">
                <h2>Neueste <span>Daily Draw</span> Ergebnisse</h2>
                <img alt="Daily Logo" src="/images/template/daily-draw-logo.png" />
                <div className="result-block">
                  <div className="draw-number">Ziehung Nr. <span>2185</span></div>
                  <div className="draw-date"><span>Samstag</span>, 24. Juli 2025</div>
                  <div className="numbers">
                    <div className="1">9</div>
                    <div className="1">30</div>
                    <div className="1">44</div>
                    <div className="1">53</div>
                    <div className="1">60</div>
                    <div className="1">70</div>
                  </div>
                  
                  <br className="clear" />
                  
                  <div className="money">
                    <h2>Jackpot: <span>€10.000</span></h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="outer-container second-results">
              <div className="latest-result">
                <h2>Neueste <span>Weekly Draw</span> Ergebnisse</h2>
                <img alt="Weekly Draw Logo" src="/images/template/weekly-draw-logo.png" />
                
                <div className="result-block">
                  <div className="draw-number">Ziehung Nr. <span>311</span></div>
                  <div className="draw-date"><span>Montag</span>, 19. Schtator 2025</div>
                  <div className="numbers">
                    <div className="1">13</div>
                    <div className="1">17</div>
                    <div className="1">23</div>
                    <div className="1">41</div>
                    <div className="1">57</div>
                    <div className="1">62</div>
                  </div>
                  
                  <br className="clear" />
                  
                  <div className="money">
                    <h2>Jackpot: <span>€100,000</span></h2>
                  </div>
                </div>
              </div>
            </div>
            
            <p style={{ textAlign: 'center' }}>
              <sub>Preise müssen innerhalb von 2 Arbeitstagen nach der Gewinnziehung beansprucht werden. Wenn niemand alle sechs Zahlen in einem Daily Draw oder Weekly Draw richtig hat, wird kein Preis vergeben. Siehe <Link href="/terms-and-conditions" title="Free Lottery AGB">AGB</Link> für die vollständigen Free Lottery Regeln.</sub>
            </p>
          </div>

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
        </article>
      </div>
    </>
  )
}
