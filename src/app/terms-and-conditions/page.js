import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <>
      <Header 
        title="Free Lottery – Allgemeine Geschäftsbedingungen"
        description="Allgemeine Geschäftsbedingungen für die Teilnahme an Free Lottery online"
        keywords="free-lottery.net allgemeine Geschäftsbedingungen"
        noindex={true}
      />
      <Navbar />
      <TermsContent />
      <Footer />
    </>
  )
}

function TermsContent() {
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
            <li>Allgemeine Geschäftsbedingungen</li>
          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="container how-it-works">
        <article>
          <header>
            <h1>Allgemeine Geschäftsbedingungen von Free-Lottery.net</h1>
          </header>

          <div className="main">
            <section className="generic-box">
              <ul className="list">
                <p><strong>Teilnehmer gelten als akzeptierend dieser Regeln und verpflichtend zur Einhaltung, sobald sie an der 'Free Lottery' kostenlosen Ziehung teilnehmen. Es ist keine Zahlung erforderlich, um teilzunehmen oder einen Preis zu beanspruchen. Sollte kein Teilnehmer die Gewinnzahlen treffen, gibt es keinen Hauptgewinner für diese Ziehung.</strong></p>
                
                <p><strong>Wer teilnehmen darf</strong></p>
                <li>Diese kostenlose Ziehung ("Promotion") steht allen Personen ab 18 Jahren offen, außer wo gesetzlich verboten.</li>
                <li>Mitarbeiter (oder deren Familienangehörige) des Veranstalters, verbundener Unternehmen oder Preisgeber sowie alle verbundenen Gesellschaften sind von der Teilnahme und vom Gewinn ausgeschlossen.</li>
                
                <p><strong>Teilnahme</strong></p>
                <li>Um teilzunehmen, folgen Sie den Anweisungen auf <Link href="/" title="free lottery">free-lottery.net</Link> und geben Sie Ihre Daten ein.</li>
                
                <p><strong>Ziehungen</strong></p>
                <li>Wir haben eine tägliche und eine wöchentliche Ziehung.</li>
                
                <div style={{ textAlign: 'center' }}>
                  <table border="0" cellSpacing="0" cellPadding="0" style={{ margin: '0 auto' }}>
                    <tr>
                      <td width="123" valign="top"><p>a) <strong>Tägliche Ziehung</strong>:</p></td>
                      <td width="450" valign="top"><p>Die täglichen Ziehungen finden jeden Tag um 19:30 Uhr (UK-Zeit) statt. Um teilzunehmen, loggen Sie sich ein, wählen Sie Ihre Zahlen und nehmen Sie vor 17:30 Uhr an der Ziehung teil, um £500 zu gewinnen!</p></td>
                    </tr>
                    <tr>
                      <td width="123" valign="top"><p>b) <strong>Wöchentliche Ziehung</strong>: </p></td>
                      <td width="450" valign="top"><p>Wöchentliche Ziehungen finden montags um 14:00 Uhr (UK-Zeit) statt, Eintragsschluss ist 12:00 Uhr am selben Tag. Nach der Anmeldung können Sie sofort teilnehmen, danach müssen Sie mindestens drei tägliche Ziehungen in der Woche gespielt haben, um für die wöchentliche Ziehung qualifiziert zu sein. Der Preis beträgt £10.000 und wird bei mehreren Gewinnern gleichmäßig aufgeteilt.</p></td>
                    </tr>
                  </table>
                </div>
                
                <li>Alle Einträge müssen rechtzeitig erfolgen, um an der jeweiligen Ziehung teilzunehmen.</li>
                <li>Maximal ein Eintrag pro Person pro tägliche und wöchentliche Ziehung.</li>
                <li>Tickets werden elektronisch im <em>Free Lottery</em> Konto gespeichert und gelten nur für die angegebene Ziehung.</li>
                <li>Die Gewinnzahlen werden zufällig durch ein automatisiertes System ermittelt.</li>
                
                <p><strong>Preis</strong></p>
                <li>Um zu gewinnen, müssen alle sechs Zahlen übereinstimmen. Wenn niemand alle sechs Zahlen trifft, wird kein Preis vergeben.</li>
                <li>Die Preise sind:</li>
                
                <div style={{ textAlign: 'center' }}>
                  <table border="0" cellSpacing="0" cellPadding="0" style={{ margin: '0 auto' }}>
                    <tr>
                      <td width="450" valign="top"><p>a) <strong>Tägliche Ziehung</strong>: £500</p></td>
                    </tr>
                    <tr>
                      <td width="450" valign="top"><p>b) <strong>Wöchentliche Ziehung</strong>: £10.000.</p></td>
                    </tr>
                  </table>
                </div>
                
                <li>Wenn mehrere Personen gewinnen, wird der Preis gleichmäßig aufgeteilt. Nicht beanspruchte Preise verfallen.</li>
                <li>Die Vergabe erfolgt nur nach Gewinner-Überprüfung durch den Versicherer des Veranstalters. Steuern oder Gebühren trägt der Gewinner.</li>
                <li>Preise werden per Scheck an den Namen des Kontoinhabers ausgegeben und per Einschreiben versendet.</li>
                <li>Die Gewinnwahrscheinlichkeit für den Jackpot beträgt 1 zu 201.359.550.</li>
                
                <p><strong>Ziehung und Bekanntgabe</strong></p>
                <li>Ergebnisse werden innerhalb von drei Arbeitstagen auf der Seite „Latest Results“ veröffentlicht.</li>
                <li>Teilnehmer sollten ihre Tickets nach jeder Ziehung prüfen.</li>
                <li>Um einen Preis zu beanspruchen, kontaktieren Sie uns <Link href="/contact" title="Kontaktieren Sie uns">hier</Link> innerhalb von zwei Werktagen.</li>
                <li>Preise sind nicht übertragbar. Verlorene oder beschädigte Schecks werden nicht neu ausgegeben.</li>
                <li>Können Gewinner nicht innerhalb von zwei Tagen nach Ziehung den Preis beanspruchen, verfällt der Anspruch.</li>
                
                <p><strong>Haftung des Veranstalters</strong></p>
                <li>Außer für Tod oder Personenschaden durch Fahrlässigkeit oder Betrug übernimmt der Veranstalter keine Haftung für:</li>
                
                <div style={{ textAlign: 'center' }}>
                  <table border="0" cellSpacing="0" cellPadding="0" style={{ margin: '0 auto' }}>
                    <tr>
                      <td width="600" valign="top">a) Verschiebung oder Absage einer Ziehung oder der Promotion;</td>
                    </tr>
                    <tr>
                      <td width="600" valign="top">b) Änderungen der Preise;</td>
                    </tr>
                    <tr>
                      <td width="600" valign="top">c) Probleme bei der Zustellung von Preisen außerhalb der Kontrolle des Veranstalters;</td>
                    </tr>
                    <tr>
                      <td width="600" valign="top">d) Netzwerk-, Computer- oder Softwarefehler, die Teilnahme oder Verarbeitung beeinträchtigen;</td>
                    </tr>
                    <tr>
                      <td width="600" valign="top">e) Handlungen oder Ausfälle von Drittanbietern.</td>
                    </tr>
                  </table>
                </div>
                
                <p><strong>Weitere Regeln</strong></p>
                <li>Teilnahmen dürfen nicht über Agenten erfolgen.</li>
                <li>Unvollständige Einträge werden disqualifiziert.</li>
                <li>Die Entscheidung des Veranstalters ist endgültig.</li>
                <li>Bei Verdacht auf Betrug oder unsportliches Verhalten kann der Veranstalter disqualifizieren.</li>
                <li>Der Veranstalter kann Regeln ändern oder die Promotion zurückziehen. Änderungen werden auf der Webseite veröffentlicht.</li>
                
                <p><strong>Persönliche Daten</strong></p>
                <li>Persönliche Daten der Gewinner werden zur Abwicklung der Promotion genutzt. Siehe <Link href="/privacy-policy" title="Datenschutzerklärung">Datenschutzerklärung</Link>.</li>
                <li>Gewinner müssen ein Affidavit & Release unterzeichnen sowie ID und Adressnachweis vorlegen.</li>
                <li>Die Namen und Regionen der Gewinner werden einen Monat nach Preisannahme veröffentlicht.</li>
                <li>Gewinner erlauben die Nutzung ihres Namens und Bildes für Werbung ohne zusätzliche Vergütung.</li>
                
                <p><strong>Anwendbares Recht</strong></p>
                <li>Es gilt englisches Recht. Gerichte in England und Wales haben ausschließliche Zuständigkeit.</li>
                
                <p><strong>Veranstalter</strong></p>
                <li>Der 'Veranstalter' ist Take That Limited, Registrierte Adresse: Tattersall House, East Parade, Harrogate HG1 5LT (keine Anfragen an diese Adresse).</li>
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
                <div className="jackpot">$109,000,000</div>
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
                <div className="jackpot">£79,000,000</div>
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
                <div className="jackpot">$102,000,000</div>
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
