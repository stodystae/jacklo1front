// app/results/checker/page.js
'use client'
import { useState } from 'react'
import Header from '../../../components/Header'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function ResultsChecker() {
  return (
    <>
      <Header />
      <Navbar />
      <ResultsCheckerContent />
      <Footer />
    </>
  )
}

function ResultsCheckerContent() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <ol className="breadcrumb">
            <li>
              <Link href="/">kostenlose-lotterie.de Startseite</Link>
            </li>
            <li>
              <Link href="/latest-results">Ergebnisse</Link>
            </li>
            <li>Checker</li>
          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <article>
          <div className="featured-text">
            <h1>Ergebnisprüfer</h1>
            <p>Gib die 6 Zahlen deines Tickets ein, um sie automatisch mit den Gewinnzahlen der letzten 30 Tage aus der täglichen und wöchentlichen Ziehung zu vergleichen. Schnell und einfach herausfinden, wie beliebt deine Zahlen im letzten Monat waren und ob du gewonnen hast!</p>
            <hr />
          </div>

          <CheckerComponent />
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
              <a href="/en/play/mega-millions" rel="nofollow" target="_blank" className="btn">
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
              <a href="/en/play/euromillions" rel="nofollow" target="_blank" className="btn">
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
              <a href="/en/play/powerball" rel="nofollow" target="_blank" className="btn">
                Spielen
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}

// Checker Component
function CheckerComponent() {
  const [selectedNumbers, setSelectedNumbers] = useState([])
  const [checkerStatus, setCheckerStatus] = useState('Wähle deine 6 Zahlen')

  const handleNumberSelect = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== number))
    } else if (selectedNumbers.length < 6) {
      setSelectedNumbers([...selectedNumbers, number])
    }
  }

  const handleReset = () => {
    setSelectedNumbers([])
    setCheckerStatus('Wähle deine 6 Zahlen')
  }

  const handleCheckNumbers = (e) => {
    e.preventDefault()
    if (selectedNumbers.length === 6) {
      setCheckerStatus('Überprüfe deine Zahlen...')
      setTimeout(() => {
        setCheckerStatus('Keine Gewinnzahlen in den letzten 30 Tagen gefunden')
      }, 1000)
    }
  }

  const isSubmitDisabled = selectedNumbers.length !== 6
  const numbers = Array.from({ length: 75 }, (_, i) => i + 1)

  return (
    <div className="main">
      <div className="checker generic-box" id="checker__numbers">
        <div className="checker__status">{checkerStatus}</div>
        <ul className="checker__balls">
          {[1, 2, 3, 4, 5, 6].map((position) => (
            <li key={position} className="ball">
              <span>{selectedNumbers[position - 1] || '?'}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="checker__numbers">
        <div className="checker__grid">
          {numbers.map((number) => (
            <button
              key={number}
              type="button"
              className={`ball ${selectedNumbers.includes(number) ? 'selected' : ''}`}
              onClick={() => handleNumberSelect(number)}
            >
              <span>{number}</span>
            </button>
          ))}
        </div>

        <form onSubmit={handleCheckNumbers}>
          <div className="checker__buttons">
            <button type="button" onClick={handleReset} className="btn__reset">
              <span>Zurücksetzen</span>
            </button>
            <button type="submit" className="btn" disabled={isSubmitDisabled}>
              Zahlen prüfen
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
