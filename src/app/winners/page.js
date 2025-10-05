"use client"

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Winners() {
  return (
    <>
      <Header 
        title="Gewinner | Frühere Free Lottery Gewinner"
        description="Hat schon jemand die Free Lottery gewonnen? Ja! Erfahren Sie hier mehr über unsere früheren Gewinner."
        keywords="free lottery gewinner, free lottery preise"
      />
      <Navbar />
      <WinnersContent />
      <Footer />
    </>
  )
}

function WinnersContent() {
  const winners = [
    {
      name: "Claire Lee",
      image: "/images/competitions/winner-claire.jpg",
      quote: "Es hat meinen Tag verschönert",
      date: "Montag, 10. September",
      prize: "£50",
      description: "Claire trat dem Free Lottery Gewinnerclub bei! Hier ist, was sie über den £50 Preis sagte."
    },
    {
      name: "David Murphy",
      image: "/images/competitions/winner-davidm.jpg",
      quote: "Ich gewinne nie etwas!",
      date: "September",
      prize: "£50",
      description: "David war der erste glückliche Gewinner im September und erhielt den £50 Extra-Chance-Preis! Als wir ihn kontaktierten, sagte er: 'So überrascht und begeistert! Ich gewinne nie etwas! Ich werde das Geld für einen schönen Tag mit der Familie verwenden. Vielen Dank!'"
    },
    {
      name: "Karen Robertson",
      image: "/images/competitions/winner-karen.jpg",
      quote: "Was für eine schöne Montagsüberraschung",
      date: "20. August",
      prize: "£150",
      description: "Nach mehreren Wochen ohne Gewinner rollte der Extra-Chance-Preis auf beeindruckende £150! Karen war die glückliche Gewinnerin, sie sagte: 'Ich freue mich sehr, gewonnen zu haben. Was für eine schöne Montagsüberraschung! Ich werde meinen Mann zu einem schönen Essen ausführen.'",
      highlight: "£150 Gewinnerin"
    },
    {
      name: "Matthew Sibley",
      image: "/images/competitions/winner-matthew-s.jpg",
      quote: "Ich fühle mich sehr glücklich",
      date: "Juli",
      prize: "£50",
      description: "Matthew war sehr dankbar, der letzte Gewinner im Juli zu sein. Er sagte: 'Als Medizinstudent ist Geld oft knapp, daher kann ein Betrag wie £50 einen großen Unterschied machen. Das Geld wird verwendet, um meinen Eltern für einen kürzlichen Urlaub nach Rom mit meiner Freundin zurückzuzahlen.'"
    }
  ]

  const sidebarGames = [
    {
      name: "Mega Millions",
      image: "/images/sidebar/lotto-logos/mega-millions.png",
      jackpot: "$109,000,000",
      nextDraw: "Nächste Ziehung am Dienstag!",
      link: "/en/play/mega-millions"
    },
    {
      name: "EuroMillions",
      image: "/images/sidebar/lotto-logos/euromillions.png",
      jackpot: "£79,000,000",
      nextDraw: "Nächste Ziehung am Dienstag!",
      link: "/en/play/euromillions"
    },
    {
      name: "Powerball",
      image: "/images/sidebar/lotto-logos/powerball.png",
      jackpot: "$102,000,000",
      nextDraw: "Nächste Ziehung am Samstag!",
      link: "/en/play/powerball"
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
              <Link href="/" title="Free-lottery.net Startseite" itemProp="item">
                <span itemProp="name">Free-Lottery.com Startseite</span>
              </Link>
            </li>
            <li>Gewinner</li>
          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="container winners">
        <article>
          <div className="featured-text">
            <h1>Free Lottery Gewinner</h1>
            <p>Neben fantastischen täglichen und wöchentlichen Preisen veranstaltet Free Lottery regelmäßig Gewinnspiele für noch mehr Chancen zu gewinnen! Schauen Sie sich einige großartige Preise an, die vergeben wurden, und erfahren Sie mehr über die glücklichen Gewinner.</p>
            <hr />
          </div>

          <div className="main">
            <section className="generic-box">
              {winners.map((winner, index) => (
                <WinnerSection key={index} winner={winner} />
              ))}

              <h2>£100 Bonus</h2>
              <WinnerSection 
                winner={{
                  name: "Patrick Ryan",
                  image: "/images/competitions/winner-patrick.jpg",
                  quote: "Ich bin begeistert",
                  date: "Juni",
                  prize: "£100",
                  description: "Der letzte Preis im Juni war ein aufregender £100 Gewinn! Patrick war der glückliche Gewinner und sagte: 'Ich bin begeistert von dieser unerwarteten Überraschung, danke an das Team von Free Lottery.'"
                }}
              />

              <WinnerSection 
                winner={{
                  name: "Amanda Anderson",
                  image: "/images/competitions/winner-amanda.jpg",
                  quote: "Das war eine sehr nette Überraschung",
                  date: "Montag, 11. Juni",
                  prize: "£50",
                  description: "Am Montag, 11. Juni, erhielt Amanda den £50 Preis. Sie freute sich sehr über die Nachricht: 'Vielen Dank, das war eine sehr nette Überraschung, als ich heute Abend mein Konto überprüfte.'"
                }}
              />

              <h2>Sommer-Spektakel 2017</h2>
              <p>Am 20. Juli wurden 40 glückliche Teilnehmer aus 11 Ländern als Gewinner unseres Sommer-Spektakel-Wettbewerbs ausgewählt! Der erste Preis war ein £100 Amazon-Gutschein. Herzlichen Glückwunsch an alle!</p>
              
              <Image 
                src="/images/competitions/summer-winners.jpg" 
                alt="Sommer-Spektakel Gewinner" 
                width={800}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
              
              <hr />
            </section>
          </div>
        </article>

        <aside>
          <div className="sidebar-panel">
            {sidebarGames.map((game, index) => (
              <div key={index} className="sidepanel-body bg-1">
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
                <a href={game.link} rel="nofollow" target="_blank" className="btn" title={`Spiele ${game.name}`}>
                  Spielen
                </a>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </>
  )
}

function WinnerSection({ winner }) {
  return (
    <>
      {winner.highlight && <h2>{winner.highlight}</h2>}
      <Image 
        src={winner.image} 
        alt={winner.name}
        width={300}
        height={200}
        className="fluidimg"
      />
      <div className="column col-wide">
        <p>{winner.description}</p>
        <blockquote>
          {winner.quote} <span>{winner.name}</span>
        </blockquote>
      </div>
      <br className="clear" />
      <hr />
    </>
  )
}
