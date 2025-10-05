import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function SafeSender() {
  return (
    <>
      <Header 
        title="So fügen Sie einen sicheren Absender hinzu"
        description="Wir möchten sicherstellen, dass Sie alle Benachrichtigungen von Free Lottery erhalten. Erfahren Sie hier, wie Sie uns zu Ihrer Liste sicherer Absender hinzufügen."
        keywords="so fügen Sie einen sicheren Absender hinzu"
      />
      <Navbar />
      <SafeSenderContent />
      <Footer />
    </>
  )
}

function SafeSenderContent() {
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
            <li itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
              <meta itemProp="position" content="2" />
              <Link href="/help" title="kostenlose-lotterie.de Hilfe und Informationen" itemProp="item">
                <span itemProp="name" style={{display: 'inline-block'}}>Hilfe</span>
              </Link>
            </li>
            <li>So fügen Sie einen sicheren Absender hinzu</li>
          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="container how-it-works">
        <article className="main">
          <div className="featured-text">
            <h1>So fügen Sie einen sicheren Absender hinzu</h1>
            <p>Verpassen Sie keine Benachrichtigung oder ein Werbeangebot im Spam-Ordner. Erfahren Sie, wie Sie uns zu Ihrer Liste sicherer Absender hinzufügen!</p>
            <hr />
          </div>
        
          <div className="generic-box">
            <section>
              <h2>Einfache Anleitung zum Hinzufügen eines sicheren Absenders:</h2>
              <p>Um zu verhindern, dass Nachrichten im Spam-Ordner landen, ist es ratsam, die E-Mail-Adressen von Free Lottery zu Ihrer Liste sicherer Absender hinzuzufügen. So erhalten Sie immer die neuesten Informationen, die Ihnen helfen könnten, Preise von €10.000 im Daily Draw bis zu €100.000 im Weekly Draw zu gewinnen.</p>

              <h3>In Outlook 2010 &amp; 2013:</h3>
              <ul className="list">
                <li>Klicken Sie unter dem Reiter „Start“ auf „Junk“, dann auf „Junk-E-Mail-Optionen“ und anschließend auf den Reiter „Sichere Absender“.</li>
                <li>Klicken Sie auf „Hinzufügen“, geben Sie '<strong>kostenlose-lotterie.de</strong>' ein und klicken Sie auf „OK“.</li>
                <li>Klicken Sie auf „Übernehmen“ und „OK“. Fertig! Alle E-Mails von Free Lottery landen jetzt in Ihrem Posteingang.</li>
              </ul>
              
              <h3>In Outlook 2003:</h3>
              <ul className="list">
                <li>Gehen Sie zu „Extras“ und klicken Sie auf „Optionen“.</li>
                <li>Unter „Einstellungen“ suchen Sie „E-Mail“ und dann „Junk-E-Mail“.</li>
                <li>Klicken Sie auf „Sichere Absender“ und dann auf „Hinzufügen“.</li>
                <li>Geben Sie im Feld die Domain '<strong>kostenlose-lotterie.de</strong>' ein und klicken Sie auf OK.</li>
              </ul>

              <h3>In Outlook.com &amp; Hotmail:</h3>
              <ul className="list">
                <li>Klicken Sie auf das Zahnrad neben Ihrem Namen oben rechts.</li>
                <li>Klicken Sie auf „Optionen“, dann auf „Sichere und blockierte Absender“ und anschließend auf „Sichere Absender“.</li>
                <li>Geben Sie '<strong>kostenlose-lotterie.de</strong>' ein und klicken Sie auf „Zur Liste hinzufügen“. So stellen Sie sicher, dass alle E-Mails von Free Lottery in Ihrem Posteingang landen.</li>
              </ul>

              <h3>In Gmail:</h3>
              <ul className="list">
                <li>Fügen Sie <strong>support@kostenlose-lotterie.de</strong>, <strong>verification@kostenlose-lotterie.de</strong> und <strong>play@kostenlose-lotterie.de</strong> zu Ihren Kontakten hinzu, damit wichtige E-Mails von Free Lottery ankommen!</li>
              </ul>

              <h3>In Mail auf dem Mac:</h3>
              <ul className="list">
                <li>Fügen Sie <strong>support@kostenlose-lotterie.de</strong>, <strong>verification@kostenlose-lotterie.de</strong> und <strong>play@kostenlose-lotterie.de</strong> zu Ihren Kontakten hinzu, damit Sie Benachrichtigungen zuverlässig erhalten.</li>
              </ul>

              <h3>In Yahoo! Mail:</h3>
              <ul className="list">
                <li>Klicken Sie auf das Zahnrad oben rechts und wählen Sie „Einstellungen“.</li>
                <li>Gehen Sie zu „Filter“ und klicken Sie auf „Neuen Filter hinzufügen“.</li>
                <li>Nennen Sie den Filter „Free Lottery“ und geben Sie im Feld „Von“ '<strong>kostenlose-lotterie.de</strong>' ein.</li>
                <li>Wählen Sie „Posteingang“ als Zielordner und klicken Sie auf „Speichern“.</li>
              </ul>

              <h3>In Apple iPhone Mail:</h3>
              <ul className="list">
                <li>Öffnen Sie eine E-Mail von Free Lottery und tippen Sie oben auf den Absendernamen.</li>
                <li>Tippen Sie auf „Neuen Kontakt erstellen“ oder „Zu bestehendem Kontakt hinzufügen“.</li>
                <li>Speichern Sie den Kontakt, damit zukünftige E-Mails direkt in Ihrem Posteingang landen.</li>
              </ul>

              <h3>In der Gmail-App für Android:</h3>
              <ul className="list">
                <li>Öffnen Sie eine E-Mail von Free Lottery und tippen Sie auf den Absendernamen.</li>
                <li>Tippen Sie auf das Drei-Punkte-Menü und wählen Sie „Zu Kontakten hinzufügen“.</li>
                <li>Speichern Sie den Kontakt, um diese E-Mails zu priorisieren.</li>
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
