import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <>
      <Header 
        title="Free Lottery - Datenschutzrichtlinie"
        description="Datenschutzrichtlinie für Free Lottery."
        keywords="free-lottery.net Datenschutzrichtlinie"
        noindex={true}
      />
      <Navbar />
      <PrivacyContent />
      <Footer />
    </>
  )
}

function PrivacyContent() {
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
            <li>Datenschutzrichtlinie</li>
          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="container how-it-works">
        <article>
          <header>
            <h1>Datenschutzrichtlinie</h1>
          </header>

          <div className="main">
            <section className="generic-box">
              <p>Wir verpflichten uns, die Privatsphäre unserer Webseitenbesucher zu schützen. Diese Richtlinie legt dar, wie wir Ihre persönlichen Daten behandeln.</p>
              <p>Durch die Nutzung unserer Webseite und Ihre Zustimmung zu dieser Richtlinie erklären Sie sich mit der Verwendung von Cookies gemäß den Bedingungen dieser Richtlinie einverstanden. Weitere Informationen zu Cookies finden Sie in unserer <Link href="/cookie-policy" title="Free Lottery Cookie Policy">Cookie-Richtlinie</Link>.</p>

              <h2>Welche Daten erfassen wir?</h2>
              <p>Wir können die folgenden Arten von persönlichen Daten erfassen, speichern und verwenden:</p>
              <ul className="list">
                <li>Identitätsdaten einschließlich Vorname und Nachname.</li>
                <li>Kontaktdaten wie E-Mail-Adresse und Postanschrift.</li>
                <li>Teilnahmedaten, also Details zu Einträgen, die Sie auf unserer Webseite gemacht haben, einschließlich der von Ihnen gewählten Zahlen und Ziehungen.</li>
                <li>Technische Daten über die Geräte, mit denen Sie auf unsere Webseite zugreifen, einschließlich IP-Adresse, Browsertyp und -version, Standort, Betriebssystem und Herkunft.</li>
                <li>Profildaten, einschließlich Ihrer Anmeldedaten und optionaler Informationen, die Sie in Ihrem Profil angeben, z. B. Telefonnummer, Präferenzen, Feedback und Umfrageantworten.</li>
                <li>Nutzungsdaten über Ihre Interaktionen mit unserer Webseite, unseren Produkten und Dienstleistungen, einschließlich Seitenaufrufe, Verweildauer und Navigation.</li>
                <li>Marketing- und Kommunikationsdaten über Ihre Präferenzen zum Erhalt von Marketinginformationen von uns oder Dritten.</li>
              </ul>

              <h2>Wie werden Ihre Daten erfasst?</h2>
              <p>Personenbezogene Daten werden nur erfasst, wenn Sie unsere Webseite nutzen und an einer oder mehreren kostenlosen Ziehungen teilnehmen oder ein Konto erstellen.</p>
              <p>Einige Daten können auch erfasst werden, wenn Sie uns per E-Mail kontaktieren, jedoch nur die Daten, die zur Beantwortung Ihrer Anfrage erforderlich sind.</p>
              
              <h2>Wie verwenden wir Ihre Daten?</h2>
              <p>Die von Ihnen übermittelten Daten werden gemäß dieser Richtlinie oder in relevanten Teilen der Webseite verwendet.</p>
              <p>Wir verwenden Ihre Daten u. a.:</p>
              <ul className="list">
                <li>Zur Verwaltung der Webseite.</li>
                <li>Zur Verbesserung Ihres Surferlebnisses durch Personalisierung der Webseite.</li>
                <li>Zur Nutzung der auf der Webseite verfügbaren Dienste.</li>
                <li>Zur Bereitstellung der über die Webseite erworbenen Dienste.</li>
                <li>Zum Versand allgemeiner oder Marketingmitteilungen.</li>
                <li>Zum Versand von Informationen oder E-Mail-Benachrichtigungen, die Sie angefordert haben.</li>
                <li>Zum Versand von Newslettern oder Marketinginformationen von uns oder sorgfältig ausgewählten Dritten, sofern Sie dem Empfang per E-Mail zugestimmt haben. Sie können diese Einwilligung jederzeit per E-Mail oder schriftlich über unsere <Link href="/contact" title="Kontakt Free Lottery">Kontaktseite</Link> widerrufen.</li>
                <li>Zur Einladung zur Teilnahme an Promotionen oder Wettbewerben.</li>
                <li>Zur Bearbeitung von Anfragen und Beschwerden bezüglich der Webseite.</li>
                <li>Zur Sicherung der Webseite und Verhinderung von Betrug.</li>
                <li>Zur Überprüfung der Einhaltung internationaler Gesetze und der Nutzungsbedingungen der Webseite.</li>
              </ul>
              <p>Wir geben Ihre Daten nicht an Dritte für Direktmarketing weiter, wenn Sie sich abgemeldet haben.</p>

              <h2>Weitergaben</h2>
              <p>Wir können Ihre Daten an Mitarbeiter, Beauftragte, Lieferanten oder Subunternehmer weitergeben, soweit dies zur Umsetzung dieser Richtlinie erforderlich ist.</p>
              <p>Wir können Ihre Daten auch an unsere Unternehmensgruppe weitergeben, soweit dies erforderlich ist.</p>
              <p>Darüber hinaus können wir Ihre Daten weitergeben:</p>
              <ul className="list">
                <li>Wenn wir gesetzlich dazu verpflichtet sind.</li>
                <li>Im Zusammenhang mit laufenden oder bevorstehenden rechtlichen Verfahren.</li>
                <li>Zur Durchsetzung oder Verteidigung unserer Rechte, einschließlich Betrugsprävention.</li>
                <li>An Käufer eines Unternehmens oder Vermögenswerts, den wir verkaufen oder verkaufen möchten.</li>
                <li>An Personen, die wir vernünftigerweise für berechtigt halten, bei Gericht oder Behörden die Offenlegung Ihrer Daten zu beantragen.</li>
              </ul>
              <p>Sofern in dieser Richtlinie nicht vorgesehen, geben wir Ihre Daten nicht an Dritte weiter.</p>

              <h2>Internationale Datenübertragungen</h2>
              <p>Die von uns gesammelten Daten können in allen Ländern, in denen wir tätig sind, gespeichert, verarbeitet und übertragen werden, um die Nutzung gemäß dieser Richtlinie zu ermöglichen.</p>
              <p>Daten können auch in Länder übertragen werden, die keinen gleichwertigen Datenschutz wie der EWR besitzen.</p>
              <p>Daten, die Sie für die Veröffentlichung auf der Webseite bereitstellen, können weltweit im Internet verfügbar sein. Wir können die Nutzung durch Dritte nicht verhindern.</p>

              <h2>Sicherheit Ihrer Daten</h2>
              <p>Wir ergreifen angemessene technische und organisatorische Maßnahmen, um den Verlust, Missbrauch oder die Veränderung Ihrer Daten zu verhindern.</p>
              <p>Alle Daten werden auf sicheren Servern gespeichert.</p>
              <p>Alle elektronischen Transaktionen werden verschlüsselt übertragen.</p>
              <p>Die Übertragung von Daten über das Internet ist potenziell unsicher, eine vollständige Sicherheit können wir nicht garantieren.</p>
              <p>Sie sind für die Vertraulichkeit Ihres Passworts und Ihrer Anmeldedaten verantwortlich.</p>
              <p>Wir arbeiten mit allen Strafverfolgungsbehörden innerhalb und außerhalb der EU zusammen.</p>

              <h2>Änderungen der Richtlinie</h2>
              <p>Wir aktualisieren diese Datenschutzrichtlinie gelegentlich durch eine neue Version auf der Webseite. Bitte prüfen Sie diese Seite regelmäßig.</p>
              <p>Änderungen können auch per E-Mail mitgeteilt werden.</p>
              <p>Zuletzt aktualisiert am 16. Mai 2018.</p>

              <h2>Ihre Rechte</h2>
              <p>Sie können uns auffordern, Ihnen alle gespeicherten personenbezogenen Daten mitzuteilen.</p>
              <p>Zur Sicherheit verlangen wir einen Identitätsnachweis, z. B. eine beglaubigte Kopie des Reisepasses und eine aktuelle Rechnung.</p>
              <p>Sie können der Verarbeitung Ihrer Daten für Marketingzwecke widersprechen über unsere <Link href="/contact" title="Kontakt Free Lottery">Kontaktseite</Link>.</p>
              <p>Sofern rechtlich zulässig, können Sie die Löschung Ihrer Daten jederzeit verlangen.</p>

              <h2>Websites Dritter</h2>
              <p>Die Webseite enthält Links zu anderen Websites. Wir sind nicht verantwortlich für die Datenschutzrichtlinien oder Praktiken von Drittanbieter-Websites wie Facebook, Twitter oder Google.</p>

              <h2>Verantwortlicher</h2>
              <p>Take That Ltd. ist für Ihre Daten verantwortlich. Wir sind bei der britischen Datenschutzbehörde (ICO) registriert, Registrierungsnummer: Z6413413.</p>
              <p>Bei Fragen wenden Sie sich bitte über unsere <Link href="/contact" title="Kontakt Free Lottery">Kontaktseite</Link> an den Datenschutzbeauftragten.</p>

              <h2>Datenaufbewahrung</h2>
              <p>Wir speichern Ihre Daten so lange, wie es zur Erfüllung der Zwecke erforderlich ist, in der Regel 7 Jahre, sofern nicht gesetzlich länger vorgeschrieben.</p>
              <p>Manchmal behalten wir Daten anonymisiert länger für statistische Auswertungen.</p>

              <h2>Kontakt</h2>
              <p>Bei Fragen schreiben Sie uns an: Free-Lottery.net, The Acorns, Oakwood Park Business Centre, Fountains Road, Bishop Thornton, Harrogate, HG3 3BF oder über unsere <Link href="/contact" title="Kontakt Free Lottery">Kontaktseite</Link>.</p>

              <h2>Beschwerden</h2>
              <p>Bitte geben Sie uns zuerst die Möglichkeit, Ihr Anliegen zu lösen. Sie können sich auch jederzeit an die britische Datenschutzbehörde (ICO) wenden (<a href="https://ico.org.uk" target="_blank" rel="nofollow noopener">https://ico.org.uk</a>).</p>
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
