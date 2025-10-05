'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const numbers = searchParams.get('numbers')?.split(',') || []

  return (
    <>
      <Header 
        title="Vielen Dank für Ihre Registrierung | kostenlose-lotterie.de"
        description="Vielen Dank für Ihre Registrierung bei Free Lottery. Viel Glück mit Ihren Zahlen!"
        keywords="danke, lotterie registrierung abgeschlossen"
      />
      <Navbar />
      
      <div className="breadcrumbs">
        <div className="container">
          <ol className="breadcrumb">
            <li>
              <Link href="/" title="Startseite">Startseite</Link>
            </li>
            <li>Danke</li>
          </ol>
        </div>
      </div>

      <div className="container">
        <div className="thank-you-content">
          <h1>Vielen Dank für Ihre Registrierung!</h1>
          <p>Ihre Registrierung wurde erfolgreich empfangen und Ihre Daten wurden an uns übermittelt.</p>
          
          {numbers.length > 0 && (
            <div className="selected-numbers">
              <h2>Ihre Lotterie-Zahlen</h2>
              <div className="numbers-display">
                {numbers.map((number, index) => (
                  <span key={index} className="number-ball">{number}</span>
                ))}
              </div>
            </div>
          )}

          <p>Viel Glück bei der Ziehung! Wir werden Sie kontaktieren, falls Sie gewinnen.</p>
          
          <Link href="/" className="btn">
            Zur Startseite zurückkehren
          </Link>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .thank-you-content {
          text-align: center;
          padding: 40px 0;
        }

        .selected-numbers {
          margin: 30px 0;
        }

        .numbers-display {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
          margin: 20px 0;
        }

        .number-ball {
          background: linear-gradient(135deg, #ff416c, #ff4b2b); /* gradient tfort */
          color: #fff;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 22px;
          box-shadow: 0 6px 20px rgba(255,75,75,0.6), 0 0 15px rgba(255,200,200,0.5);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .number-ball:hover {
          transform: scale(1.2) rotate(-5deg);
          box-shadow: 0 10px 30px rgba(255,75,75,0.8), 0 0 25px rgba(255,200,200,0.7);
        }

        .btn {
          display: inline-block;
          padding: 14px 28px;
          background: linear-gradient(90deg, #00c6ff, #0072ff); /* gradient tfort buton */
          color: #fff;
          text-decoration: none;
          border-radius: 8px;
          margin-top: 25px;
          font-weight: 700;
          font-size: 18px;
          box-shadow: 0 6px 25px rgba(0,123,255,0.5), 0 0 15px rgba(0,200,255,0.4);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 35px rgba(0,123,255,0.8), 0 0 25px rgba(0,200,255,0.6);
        }
      `}</style>
    </>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div>Loading your registration details...</div>}>
      <ThankYouContent />
    </Suspense>
  )
}
