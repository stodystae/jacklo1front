import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function MoreOnlineLotteries() {
  return (
    <>
      <Header 
        title="Online Lotterien | Online spielen"
        description="Mehr Chancen zu gewinnen? Dann wählen Sie Ihre Zahlen für die größten Lotterien der Welt, einschließlich Powerball, Mega Millions und EuroMillions."
        keywords="Online Lotterien, online spielen"
      />
      <Navbar />
      <MoreOnlineLotteriesContent />
      <Footer />
    </>
  )
}

function MoreOnlineLotteriesContent() {
  const lotteryGames = [
    {
      name: "Mega Millions",
      image: "/images/sidebar/lotto-logos/mega-millions.png",
      jackpot: "€109,000,000",
      nextDraw: "Nächste Ziehung am Dienstag!",
      playLink: "/en/play/mega-millions",
      hasPlayButton: true
    },
    {
      name: "EuroMillions",
      image: "/images/sidebar/lotto-logos/euromillions.png",
      jackpot: "€79,000,000",
      nextDraw: "Nächste Ziehung am Dienstag!",
      playLink: "/en/play/euromillions",
      hasPlayButton: true
    },
    {
      name: "Powerball",
      image: "/images/sidebar/lotto-logos/powerball.png",
      jackpot: "€102,000,000",
      nextDraw: "Nächste Ziehung am Samstag!",
      playLink: "/en/play/powerball",
      hasPlayButton: true
    },
    {
      name: "Lotto Indien",
      image: "/images/sidebar/lotto-logos/lotto-india.png",
      jackpot: "€40,000,000",
      nextDraw: "Nächste Ziehung am Dienstag!",
      playLink: "",
      hasPlayButton: false
    },
    {
      name: "UK Lotto",
      image: "/images/sidebar/lotto-logos/uk-nat-lotto.png",
      jackpot: "€8,600,000",
      nextDraw: "Nächste Ziehung am Mittwoch!",
      playLink: "/en/play/uk-lotto",
      hasPlayButton: true
    },
    {
      name: "Canada 6/49",
      image: "/images/sidebar/lotto-logos/canada-lotto.png",
      jackpot: "€14,000,000",
      nextDraw: "Nächste Ziehung am Samstag!",
      playLink: "/en/play/canada-649",
      hasPlayButton: true
    },
    {
      name: "Irish Lotto",
      image: "/images/sidebar/lotto-logos/irish-lotto.png",
      jackpot: "€6,000,000",
      nextDraw: "Nächste Ziehung am Mittwoch!",
      playLink: "/en/play/irish-lotto",
      hasPlayButton: true
    },
    {
      name: "Lotto China",
      image: "/images/sidebar/lotto-logos/lotto-china.png",
      jackpot: "€500,000",
      nextDraw: "Nächste Ziehung am Dienstag!",
      playLink: "",
      hasPlayButton: false
    }
  ]

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
            <li>Weitere Online-Lotterien</li>
          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="container competitions">
        <article>
          <header className="featured-text">
            <h1>Online-Lotteriespiele</h1>
            <p>Neben der Free Lottery können Sie versuchen, einige der größten Lotteriepreise der Welt zu gewinnen, indem Sie gegen Gebühr teilnehmen. Amerikanische Lotterien wie Powerball und Mega Millions bieten regelmäßig neunstellige Jackpots, und auch in Europa und Asien gibt es viele große Spiele zu genießen.</p>
            <hr />
          </header>
            
          <section className="generic-box">
            <h2>Empfohlene Spiele</h2>
            <p>Die Teilnahme an diesen Spielen kostet Geld, aber die potenziellen Gewinne könnten es wert sein, um die Chance auf Multi-Millionen-Jackpots zu haben. Außerdem müssen Sie nicht in dem Land wohnen, in dem die Lotterien stattfinden, sodass Sie von überall aus spielen können.</p>
            
            <div className="main central">
              {lotteryGames.map((game, index) => (
                <div key={index} className="sidebar-panel fixed">
                  <div className="sidepanel-body bg-1">
                    <Image 
                      src={game.image} 
                      alt={`Aktueller ${game.name} Jackpot`}
                      width={60}
                      height={60}
                    />
                    <div className="sidepanel-games">
                      <div className="sub-title">{game.name}</div>
                      <div className="jackpot">{game.jackpot}</div>
                    </div>
                    <div className="jackpot-date">{game.nextDraw}</div>
                    {game.hasPlayButton && (
                      <a href={game.playLink} rel="nofollow" target="_blank" className="btn" title={`Spielen ${game.name}`}>
                        Spielen
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <br className="clear" />
         
            <h2>So funktioniert es</h2>
            <p>Sie können von überall auf der Welt gegen Gebühr an diesen Spielen teilnehmen, dank Online-Lotterie-Diensten. Anstatt einen autorisierten Händler im teilnehmenden Land aufzusuchen, können Sie bequem teilnehmen und wissen, dass Ihre Zahlen sicher online gespeichert sind.</p>
            <p>Ein Online-Dienst wie Jackpot.com ermöglicht es Ihnen, einem Syndikat beizutreten oder auf die Ergebnisse einer Ziehung zu wetten, anstatt ein Ticket kaufen zu müssen. Sie können die gleichen Preise gewinnen wie jemand, der ein Ticket kauft, und der Prozess ist einfach:</p>
            
            <ul className="example">
              <li>Wählen Sie Ihre Lotterie, indem Sie auf den &apos;Spielen&apos;-Button auf einem der Banner oben klicken</li>
              <li>Entscheiden Sie, wie viele Linien/Syndikatsanteile Sie kaufen möchten:<br /> Jede Linie ist ein weiterer Eintrag in die Ziehung, je mehr Linien Sie wählen, desto größer sind Ihre Chancen, die Gewinnzahlen zu treffen und einen Preis zu erhalten!</li>
              <li>Wählen Sie Ihre Glückszahlen für jede Linie:<br /> Sie können eigene Zahlen wählen oder die Quick-Pick-Option nutzen, um Zahlen zufällig generieren zu lassen. Wenn Sie einem Syndikat beitreten, werden alle Linien automatisch als Quick-Picks generiert.</li>
              <li>Wählen Sie, an wie vielen Ziehungen Sie teilnehmen möchten:<br /> Wählen Sie &apos;Einmaliger Kauf&apos; für die nächste Ziehung oder abonnieren Sie, um keine Chance zu verpassen.</li>
              <li>Erstellen Sie ein kostenloses Konto, damit Ihre Zahlen sicher gespeichert werden</li>
              <li>Bestätigen Sie Ihren Kauf</li>
            </ul>
            <br className="clear" />
            
            <p>Nachdem Sie bezahlt haben, können Sie einfach auf die Ziehung warten, um zu sehen, ob Sie gewonnen haben. Sie müssen die Gewinnzahlen nicht einmal selbst überprüfen, da Sie sofort benachrichtigt werden, wenn Sie gewonnen haben. Preise bis €5.000 werden automatisch überwiesen. Für größere Gewinne können Sie den Support kontaktieren, der Ihnen beim Anspruch weiterhilft.</p>
               
            <h3>Was ist ein Syndikat?</h3>
            <p>Ein <a href="https://www.syndicate.co.uk/" title="Lottery Syndicates" target="_blank" rel="noopener noreferrer">Syndikat</a> ist eine Gruppe von Personen, die mehrere Lotterielose kaufen, wobei Gewinne auf alle Mitglieder aufgeteilt werden. Syndikate erhöhen Ihre Gewinnchancen, da Sie Anteile an mehreren Einträgen in der Ziehung besitzen, ohne mehr Geld für zusätzliche Tickets auszugeben.</p>
          </section>
        </article>
        
        <aside>
          <div className="sidebar-panel">
            <div className="sidepanel-body bg-1">
              <Image 
                src="/images/sidebar/lotto-logos/mega-millions.png" 
                alt="Aktueller Mega Millions Jackpot"
                width={60}
                height={60}
              />
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
              <Image 
                src="/images/sidebar/lotto-logos/euromillions.png" 
                alt="Aktueller EuroMillions Jackpot"
                width={60}
                height={60}
              />
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
              <Image 
                src="/images/sidebar/lotto-logos/powerball.png" 
                alt="Aktueller Powerball Jackpot"
                width={60}
                height={60}
              />
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
