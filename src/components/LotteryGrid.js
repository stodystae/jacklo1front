'use client'
import { useState } from 'react'

export default function LotteryGrid({ onPlayNow }) {
  const [selectedBalls, setSelectedBalls] = useState([8, 10, 29, 39, 66, 71])
  const totalBalls = 75

  const handleBallClick = (number) => {
    if (selectedBalls.includes(number)) {
      setSelectedBalls(selectedBalls.filter(n => n !== number))
    } else if (selectedBalls.length < 6) {
      setSelectedBalls([...selectedBalls, number])
    }
  }

  const quickPick = () => {
    const newNumbers = []
    while (newNumbers.length < 6) {
      const randomNum = Math.floor(Math.random() * totalBalls) + 1
      if (!newNumbers.includes(randomNum)) {
        newNumbers.push(randomNum)
      }
    }
    setSelectedBalls(newNumbers.sort((a, b) => a - b))
  }

  const resetBalls = () => {
    setSelectedBalls([])
  }

  return (
    <div className="lottery-grid">
      <div className="select-numbers">
        <div className="grid-header">
          <h2>Spielen Sie heute und gewinnen Sie bis zu 100.000 $!</h2>
          <p>Wählen Sie sechs Zahlen aus dem untenstehenden Raster, um zu spielen</p>
        </div>

        <div className="balls-grid">
          {Array.from({ length: totalBalls }, (_, i) => i + 1).map(number => (
            <button
              key={number}
              className={`ball ${selectedBalls.includes(number) ? 'selected' : ''}`}
              onClick={() => handleBallClick(number)}
            >
              {number}
            </button>
          ))}
        </div>

        <div className="grid-controls">
          <button className="btn secondary" onClick={quickPick}>Schnellauswahl</button>
          <button className="btn secondary" onClick={resetBalls}>Zurücksetzen</button>
        </div>

        <div className="selected-numbers-display">
          <div className="title">Ihre Free Lottery Zahlen</div>
          <ul>
            {selectedBalls.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
            {Array.from({ length: 6 - selectedBalls.length }).map((_, index) => (
              <li key={`empty-${index}`} className="empty"></li>
            ))}
          </ul>
          <button 
            className="btn primary" 
            onClick={onPlayNow}
            disabled={selectedBalls.length !== 6}
          >
            Jetzt Spielen
          </button>
        </div>
      </div>
    </div>
  )
}
