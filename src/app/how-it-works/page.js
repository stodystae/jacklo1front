import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function HowItWorks() {
  return (
    <>
      <Header />
      <Navbar />
      <HowItWorksContent />
      <Footer />
    </>
  )
}

function HowItWorksContent() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <ol id="breadcrumb">

          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="container how-it-works">
        <article>
          <header className="featured-text">
            <h1>Wie es funktioniert</h1>
            <p>Alles, was Sie wissen müssen, um die Free Lottery zu spielen und zu gewinnen! Hier finden Sie unsere Schritt-für-Schritt-Anleitung, wie Sie Ihr Konto einrichten, an den täglichen und wöchentlichen Ziehungen teilnehmen, Ihre Tickets überprüfen und Ihre Gewinne beanspruchen.</p>
            <hr />
          </header>

          <div className="main">
            <p style={{ textAlign: 'center' }}>Klicken Sie auf eines der untenstehenden Symbole, um mehr zu erfahren!</p>

            <div className="steps-box">
              <a href="#step-1">
                <img src="/images/template/steps-registering.png" alt="Registrierung" />
                Registrierung
              </a>
              <a href="#step-2">
                <img src="/images/template/steps-entering.png" alt="Teilnahme an Ziehungen" />
                Teilnahme an Ziehungen
              </a>
              <a href="#step-3">
                <img src="/images/template/steps-checking.png" alt="Ergebnisse prüfen" />
                Ergebnisse prüfen
              </a>
              <a href="#step-4">
                <img src="/images/template/steps-claiming.png" alt="Gewinn beanspruchen" />
                Gewinne beanspruchen
              </a>
            </div>

            <section id="step-1" className="generic-box">
              <h2>Registrierung</h2>
              <p>Wenn Sie sich auf der Website anmelden, werden Sie nach persönlichen Daten wie Ihrem Namen und Ihrer E-Mail-Adresse gefragt. Sie wählen außerdem ein Passwort, um Ihr Konto zu schützen. Nachdem Sie diese Angaben gemacht und die Bedingungen akzeptiert haben, erhalten Sie eine Bestätigungs-E-Mail. Klicken Sie auf den Verifizierungslink – und schon können Sie spielen!</p>
              <h4>Warum benötigen wir Ihre persönlichen Daten?</h4>
              <p>Free-Lottery.net ist bestrebt, ein faires und kostenloses System bereitzustellen. Ihre Daten stellen sicher, dass jeder Teilnehmer nur ein Konto hat und alle die gleiche Gewinnchance haben – entweder auf den £500-Tagespreis oder den £10.000-Wochenpreis.</p>
              <div className="big-text">Melden Sie sich noch heute an – es ist völlig <span>KOSTENLOS!</span></div>
              <a href="/register" className="btn" style={{ textAlign: 'center', display: 'block', width: '200px', margin: '20px auto' }}>
                Jetzt registrieren
              </a>
            </section>

            <section id="step-2" className="generic-box">
              <h2>Teilnahme an Ziehungen</h2>
              <p>Nach der Registrierung wählen Sie einfach sechs Zahlen von 1 bis 300 – oder nutzen Sie die Quick-Pick-Funktion. Ein Ticket wird erstellt und sicher in Ihrem Konto gespeichert. Bei der Anmeldung nehmen Sie automatisch an der nächsten wöchentlichen Ziehung teil; danach müssen Sie die tägliche Ziehung mindestens dreimal pro Woche spielen, um sich erneut zu qualifizieren.</p>
              <p>Die Teilnahme an der wöchentlichen Ziehung endet jeweils am <strong>Montag um 12:00 UTC</strong>. Die Teilnahme an der täglichen Ziehung endet an allen anderen Tagen um <strong>17:30 UTC</strong>.</p>
            </section>

            <section id="step-3" className="generic-box">
              <h2>Ergebnisse prüfen</h2>
              <p>Melden Sie sich in Ihrem Konto an, um Ihre aktuellen Tickets und Gewinnzahlen zu sehen – Ihre Übereinstimmungen werden automatisch angezeigt. Oder besuchen Sie die Seite <a href="/latest-results">Neueste Ergebnisse</a>.</p>
              <p>Wir senden keine E-Mails mit den täglichen oder wöchentlichen Ergebnissen; Sie können jederzeit selbst nachsehen. Frühere Ergebnisse finden Sie jederzeit im <a href="/archive">Ergebnisarchiv</a>.</p>
              <p>Die Ergebnisse der wöchentlichen Ziehung werden montags um <strong>14:00 UTC</strong> veröffentlicht; die Ergebnisse der täglichen Ziehung jeden Abend um <strong>19:30 UTC</strong>.</p>
            </section>

            <section id="step-4" className="generic-box">
              <h2>Gewinne beanspruchen</h2>
              <p>Wenn Sie alle sechs Zahlen richtig haben – herzlichen Glückwunsch, Sie sind ein Gewinner! <a href="/contact">Kontaktieren Sie uns</a> innerhalb von zwei Tagen, um den Gewinnprozess zu starten. Nach der Überprüfung wird Ihr Gewinn per Einschreiben versandt. Free-Lottery.net erhebt keine Provision.</p>
              <p className="info">Alle sechs Zahlen richtig: <strong>€10.000</strong> Tagesziehung, <strong>€100.000</strong> Wochenziehung<sup>*</sup>.</p>
            </section>

            <section id="step-5" className="generic-box">
              <h3>Haben Sie weitere Fragen?</h3>
              <p>Besuchen Sie unsere Seiten mit den <a href="/faq">Häufig gestellten Fragen</a> oder den <a href="/rules">Regeln</a> für weitere Informationen.</p>
            </section>

            <p><sub>*Wenn niemand alle sechs Zahlen richtig hat, wird kein Preis vergeben. Siehe <a href="/terms-and-conditions">Allgemeine Geschäftsbedingungen</a> für die vollständigen Regeln.</sub></p>
          </div>
        </article>
      </div>
    </>
  )
}
