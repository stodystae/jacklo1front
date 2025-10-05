import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Help() {
  return (
    <>
      <Header 
        title="Kostenlotterie Hilfe | Hilfe beim Spielen und Gewinnen der Free Lottery"
        description="Hilfe – wie spiele ich? Hilfe – wie erfahre ich, ob ich gewonnen habe? Hilfe – wie fordere ich einen Preis an? Alles, was Sie über die Free Lottery wissen müssen."
        keywords="Hilfe, kostenlose Lotterie Hilfe, kostenlose-lotterie.de hilfe" 
      />
      <Navbar />
      <HelpContent />
      <Footer />
    </>
  )
}

function HelpContent() {
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
            <li>hilfe</li>
          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="container help-page">
        <article>
          <header className="featured-text">
            <h1>Brauchen Sie Hilfe?</h1>
            <p>Sie sind bereit, die Free Lottery Spiele zu spielen und groß zu gewinnen, aber brauchen ein wenig Unterstützung. Keine Sorge – Sie sind hier genau richtig!</p>
            <hr />
          </header>
          
          <div className="main">
            <section>
              <h2>Registrierung</h2>
              <p>Die Registrierung ist völlig kostenlos und einfach. Wenn Sie ein Konto erstellen, werden Sie Schritt für Schritt durch den gesamten Vorgang geführt – vom Ausfüllen Ihrer Daten bis zur Bestätigung Ihres Kontos. Besuchen Sie die Seite <Link href="/faq" title="Häufig gestellte Fragen zur Free Lottery">Häufig gestellte Fragen</Link>, um mehr über die Website und ihre Funktionsweise zu erfahren, bevor Sie sich anmelden.</p>
              
              <p>Wenn Sie Ihre Bestätigungs-E-Mail nicht erhalten haben, müssen Sie möglicherweise kostenlose-lotterie.de zu Ihrer <Link href="/how-to-add-a-safe-sender" title="Free Lottery als sicheren Absender hinzufügen">Liste sicherer Absender</Link> hinzufügen. Dadurch wird verhindert, dass Benachrichtigungen von uns versehentlich in Ihrem Spam-Ordner landen.</p>
            </section>

            <section>
              <h2>Die Spiele</h2>
              <p>An den Ziehungen können alle Personen teilnehmen, die sich auf der Website registriert und ihre Daten bestätigt haben. Es gibt zwei Spiele – die tägliche Ziehung mit einem Gewinn von €10.000 und die wöchentliche Ziehung mit einem Gewinn von €100.000. Nach der Anmeldung haben Sie die Möglichkeit, an der nächsten verfügbaren wöchentlichen Ziehung teilzunehmen. Danach müssen Sie jedoch die tägliche Ziehung mindestens dreimal pro Kalenderwoche spielen, um sich erneut für die wöchentliche Ziehung zu qualifizieren.</p>
              <p>Weitere Informationen zum Spielen beider Spiele finden Sie auf der Seite <Link href="/how-it-works" title="Wie es funktioniert">Wie es funktioniert</Link>.</p>
            </section>

            <section>
              <h2>Ihre Zahlen auswählen</h2>
              <p>Wenn Sie Ihr Konto eingerichtet und Ihre Daten bestätigt haben, können Sie sofort mit dem Spielen der Free Lottery beginnen. Es gibt zwei Möglichkeiten zur Teilnahme: Sie können Ihre Zahlen selbst auswählen oder sie zufällig über die „Quick Pick“-Option generieren lassen. Wenn Sie eher analytisch sind, können Sie die Seite <Link href="/statistics" title="Free Lottery Statistiken">Free Lottery Statistiken</Link> besuchen, auf der Informationen darüber zu finden sind, welche Zahlen am häufigsten gezogen wurden, welche am seltensten, welche am längsten überfällig sind und vieles mehr.</p>
            </section>

            <section>
              <h2>Ergebnisse</h2>
              <p>Egal, ob Sie Ihre Zahlen selbst ausgewählt oder die „Quick Pick“-Option genutzt haben – Sie können jederzeit auf der Seite <Link href="/latest-results" title="Neueste Free Lottery Ergebnisse">Neueste Ergebnisse</Link> sehen, wie Sie abgeschnitten haben.</p>
              <p>Außerdem finden Sie Details zu früheren Ziehungen im <Link href="/archive" title="Free Lottery Ergebnisarchiv">Ergebnisarchiv</Link>, damit Sie stets auf dem Laufenden bleiben über alle Informationen zu den täglichen und wöchentlichen Ziehungen.</p>
            </section>

            <section>
              <h2>Einen Gewinn beanspruchen</h2>
              <p>Wenn Sie die Ergebnisse überprüft haben und glauben, einen Free Lottery Preis gewonnen zu haben, können Sie das Verfahren zur Preisbeanspruchung starten, indem Sie das Free Lottery Team über die Seite <Link href="/contact" title="Free Lottery kontaktieren">Kontakt</Link> kontaktieren<sup>*</sup>.</p>
              
              <p>Falls Sie von jemandem kontaktiert werden, der Ihrer Meinung nach nicht zum Free Lottery Team gehört, besuchen Sie die Seite <Link href="/scams" title="So erkennen Sie Lotterie-Betrug">Betrugswarnungen</Link>, um Tipps zu erhalten, wie Sie sich schützen können.</p>
            </section>

            <section>
              <h2>Sonst noch etwas?</h2>
              <p>Wenn Sie weiterhin Probleme haben und hier oder auf keiner anderen Seite von Free-Lottery.net eine Antwort finden, können Sie uns jederzeit über die Seite <Link href="/contact" title="Free Lottery kontaktieren">Kontakt</Link> erreichen.</p>
            </section>
            
            <p style={{ textAlign: 'center' }}>
              <sub>*Preise müssen innerhalb von 2 Werktagen nach der Gewinnziehung beansprucht werden. Wenn niemand alle sechs Zahlen in einer täglichen oder wöchentlichen Ziehung richtig hat, wird für diese Ziehung kein Preis vergeben. Siehe <Link href="/terms-and-conditions" title="Free Lottery AGB">Allgemeine Geschäftsbedingungen</Link> für die vollständigen Regeln der Free Lottery.</sub>
            </p>
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
