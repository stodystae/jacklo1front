import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Scams() {
  return (
    <>
      <Header 
        title="Lotterie-Betrug – Betrug vermeiden | kostenlose-lotterie.de"
        description="Ratschläge zu Lotterie-Betrug – Ist das ein Lotterie-Betrug? Erfahren Sie, wie Sie Betrügereien online, per Post, E-Mail oder Telefon erkennen und sich schützen können."
        keywords="Lotterie-Betrug, Online Lotterie-Betrug"
      />
      <Navbar />
      <ScamsContent />
      <Footer />
    </>
  )
}

function ScamsContent() {
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
              <Link href="/help" title="kostenlose-lotterie.de Hilfe und Informationen" itemProp="item">
                <span itemProp="name" style={{display: 'inline-block'}}>Hilfe</span>
              </Link>
            </li>
            <li>Betrug</li>
          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="container how-it-works">
        <article>
          <header className="featured-text">
            <h1>Lotterie-Betrug</h1>
            <p>Zuallererst ist die goldene Regel bei Betrugsfällen zu beachten – <strong>es ist unmöglich, einen Free Lottery Preis zu gewinnen, wenn man nicht an einer Ziehung teilgenommen hat!</strong></p>
            <hr />
          </header>

          <div className="main">
            <section id="step-1" className="generic-box">
              <h2>Betrug</h2>
              <p>Lotterien sind für Betrüger attraktiv, da die hohen Geldsummen oft das Urteilsvermögen der Opfer trüben. Betrüger kontaktieren die Öffentlichkeit per Telefon, E-Mail, SMS oder Post und behaupten, dass die Zielperson einen Jackpot gewonnen habe, und verlangen häufig Vorauszahlungen für „Bearbeitung“ oder Steuern, um den Preis zu überweisen. In anderen Fällen werden Bankdaten oder andere persönliche Informationen abgefragt, die anschließend für Identitätsdiebstahl verwendet werden können.</p>

              <h2>kostenlose-lotterie.de – Ehrlich, Fair und Engagiert gegen Betrug</h2>
              <p>Wissen ist Ihre größte Waffe gegen Betrug. Wenn Sie die Tricks kennen, die Betrüger anwenden, können Sie verhindern, selbst Opfer zu werden. Folgendes sollten Sie beachten:</p>

              <ul className="list">
                <li>Sie können niemals einen Lotterie-, Tombola- oder Gewinnspielpreis gewinnen, wenn Sie nicht am Wettbewerb teilgenommen haben. Der einzige Weg, einen Free Lottery Preis zu gewinnen, besteht darin, an den täglichen oder wöchentlichen Ziehungen teilzunehmen, die wir für registrierte Teilnehmer anbieten.</li>
                <li>Wir werden Sie niemals auffordern, eine Vorauszahlung oder Steuern auf Ihren Gewinn zu zahlen, um diesen zu erhalten. Steuern sind Ihre Verantwortung, falls Sie einen kostenlose-lotterie.de Preis gewinnen.</li>
                <li>Wenn Sie glauben, einen Free Lottery Preis gewonnen zu haben, müssen Sie sich an die Seite wenden, um den Anspruchsprozess zu starten. Jeder, der Sie unerwartet über einen großen Lotteriegewinn informiert, versucht wahrscheinlich, Sie zu betrügen.</li>
              </ul>

              <h2>Typische Merkmale von Lotterie-Betrug</h2>
              <ul className="list">
                <li>Wenn die Nachricht von einer anderen E-Mail-Adresse als der offiziellen Lotterie-Adresse stammt, seien Sie sehr vorsichtig. Lotterien verwenden keine kostenlosen Webmail-Adressen wie Hotmail oder Gmail, um Benutzer zu kontaktieren. Alle Nachrichten von kostenlose-lotterie.de kommen von einer "@kostenlose-lotterie.de"-Adresse.</li>
                <li>Betrügereien erfordern oft eine schnelle Antwort, um Opfer unter Druck zu setzen, Geld oder persönliche Daten zu senden, bevor sie den Sachverhalt prüfen können. kostenlose-lotterie.de wird Sie niemals um Geld oder Gebühren für die Auszahlung eines Gewinns bitten.</li>
                <li>Aus ähnlichen Gründen verlangen Betrüger manchmal Geheimhaltung als Bedingung für die Auszahlung des „Preises“. Echte Lotterien wie kostenlose-lotterie.de feiern ihre Gewinner öffentlich – jeder, der Sie auffordert, über einen Gewinn zu schweigen, ist verdächtig.</li>
                <li>Betrügerische Nachrichten lassen sich oft durch schlechte Rechtschreibung, Grammatik und Satzbau erkennen.</li>
                <li>Betrüger erklären nie klar, wie der „Prozess“ funktioniert. Es gibt immer eine weitere Lüge, eine weitere Gebühr und eine weitere Ausrede. kostenlose-lotterie.de ist ein ehrliches Unternehmen, das sicherstellt, dass jeder Teilnehmer versteht, wie unsere Ziehungen und Preise funktionieren.</li>
              </ul>

              <h2>Was tun, wenn Sie einen Lotterie-Betrug erhalten haben</h2>
              <p>Wenn Sie eine vermeintlich betrügerische SMS, E-Mail, Post oder einen Anruf erhalten haben, sollten Sie Folgendes beachten:</p>
              <ul className="list">
                <li>Senden Sie kein Geld.</li>
                <li>Klicken Sie nicht auf Links und öffnen Sie keine Anhänge in E-Mails.</li>
                <li>Antworten Sie nicht, das würde nur mehr Betrugsmails fördern.</li>
                <li>Geben Sie keine persönlichen oder Bankdaten weiter.</li>
                <li>Brechen Sie jeglichen Kontakt mit dem Betrüger ab. Sperren Sie die Telefonnummern oder E-Mail-Adressen und markieren Sie die Post als „Zurück an Absender“.</li>
              </ul>

              <p>Wenn Sie bereits Kontakt zu einem Verdächtigen hatten, brechen Sie die Kommunikation sofort ab und benachrichtigen Sie Ihre Bank, falls Sie finanzielle oder persönliche Daten weitergegeben haben.</p>
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
    </>
  )
}
