"use client"

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function FAQ() {
  return (
    <>
      <Header 
        title="Kostenloses Lotto FAQs | Fragen und Antworten – So funktioniert’s"
        description="Was ist das Kostenlose Lotto? Wie kann eine Lotterie kostenlos sein? Wie gewinne ich einen Preis? Plus weitere häufig gestellte Fragen."
        keywords="häufig gestellte fragen (faq), kostenloses lotto, kostenlose-lotterie.de"
      />
      <Navbar />
      <FAQContent />
      <Footer />
    </>
  )
}

function FAQContent() {
  const [highlightedAnswer, setHighlightedAnswer] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const answerId = hash.replace("#answer", "");
        if (!isNaN(answerId)) {
          setHighlightedAnswer(parseInt(answerId));
        }
      }
    }
  }, []);

  const handleAnswerClick = (answerNumber) => {
    setHighlightedAnswer(answerNumber);
  }

  const handleBackToTop = () => {
    setHighlightedAnswer(null);
  }

  const getAnswerStyle = (answerNumber) => {
    return highlightedAnswer === answerNumber 
      ? { backgroundColor: '#dbdbdb' }
      : { backgroundColor: '#f4f4f4', color: '#000' };
  }

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
            <li itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
              <meta itemProp="position" content="2" />
              <Link href="/help" title="Free-lottery.net Hilfe und Informationen" itemProp="item">
                <span itemProp="name" style={{display: 'inline-block'}}>Hilfe</span>
              </Link>
            </li>
            <li>FAQ</li>
          </ol>
        </div>
      </div>

      {/* Hauptinhalt */}
      <div className="container faq">
        <article>
          <div className="featured-text">
            <h1>Häufig gestellte Fragen (FAQs)</h1>
            <p>Möchten Sie wissen, wie wir es uns leisten können, Geldpreise kostenlos zu vergeben? Hier finden Sie Antworten auf die häufigsten Fragen zum Kostenlosen Lotto. Klicken Sie einfach auf eine der Fragen unten, um mehr zu erfahren!</p>
            <hr />
          </div>

          <div className="main">
            <section id="faq-menu" className="generic-box">
              <a id="faqmenu"></a>
              <ul>
                <li>1. <a href="#answer1" onClick={() => handleAnswerClick(1)} title="Was ist das Kostenlose Lotto?">Was ist das Kostenlose Lotto?</a></li>
                <li>2. <a href="#answer2" onClick={() => handleAnswerClick(2)} title="Wer bezahlt die Preise? Wie kann man sich eine kostenlose Lotterie leisten?">Wer bezahlt die Preise? Wie kann man sich eine kostenlose Lotterie leisten?</a></li>
                <li>3. <a href="#answer3" onClick={() => handleAnswerClick(3)} title="Wer darf am Kostenlosen Lotto teilnehmen?">Wer darf am Kostenlosen Lotto teilnehmen?</a></li>
                <li>4. <a href="#answer4" onClick={() => handleAnswerClick(4)} title="Wie qualifiziere ich mich für die Ziehungen?">Wie qualifiziere ich mich für die Ziehungen?</a></li>
                <li>5. <a href="#answer5" onClick={() => handleAnswerClick(5)} title="Wie funktionieren die täglichen Ziehungen?">Wie funktionieren die täglichen Ziehungen?</a></li>
                <li>6. <a href="#answer6" onClick={() => handleAnswerClick(6)} title="Wie funktionieren die wöchentlichen Ziehungen?">Wie funktionieren die wöchentlichen Ziehungen?</a></li>
                <li>7. <a href="#answer7" onClick={() => handleAnswerClick(7)} title="Was ist mit der Extra-Chance-Ziehung passiert?">Was ist mit der Extra-Chance-Ziehung passiert?</a></li>
                <li>8. <a href="#answer8" onClick={() => handleAnswerClick(8)} title="Wie stehen meine Chancen, den Jackpot zu gewinnen?">Wie stehen meine Chancen, den Jackpot zu gewinnen?</a></li>
                <li>9. <a href="#answer9" onClick={() => handleAnswerClick(9)} title="Werden die täglichen und wöchentlichen Jackpots übertragen?">Werden die täglichen und wöchentlichen Jackpots übertragen?</a></li>
                <li>10. <a href="#answer10" onClick={() => handleAnswerClick(10)} title="Ich glaube, ich habe gewonnen! Was nun?">Ich glaube, ich habe gewonnen! Was nun?</a></li>
                <li>11. <a href="#answer11" onClick={() => handleAnswerClick(11)} title="Wie werden die Gewinne ausgezahlt?">Wie werden die Gewinne ausgezahlt?</a></li>
                <li>12. <a href="#answer12" onClick={() => handleAnswerClick(12)} title="Wie lange habe ich Zeit, einen Gewinn zu beanspruchen?">Wie lange habe ich Zeit, einen Gewinn zu beanspruchen?</a></li>
                <li>13. <a href="#answer13" onClick={() => handleAnswerClick(13)} title="Was passiert, wenn mehrere Personen den Preis gewinnen?">Was passiert, wenn mehrere Personen den Preis gewinnen?</a></li>
                <li>14. <a href="#answer14" onClick={() => handleAnswerClick(14)} title="Muss ich Steuern auf meine Gewinne zahlen?">Muss ich Steuern auf meine Gewinne zahlen?</a></li>
                <li>15. <a href="#answer15" onClick={() => handleAnswerClick(15)} title="Hilfe! Ich habe meine Zugangsdaten verloren!">Hilfe! Ich habe meine Zugangsdaten verloren!</a></li>
                <li>16. <a href="#answer16" onClick={() => handleAnswerClick(16)} title="Wie ändere ich meine persönlichen Daten?">Wie ändere ich meine persönlichen Daten?</a></li>
                <li>17. <a href="#answer17" onClick={() => handleAnswerClick(17)} title="Wie schützen Sie meine Daten?">Wie schützen Sie meine Daten?</a></li>
                <li>18. <a href="#answer18" onClick={() => handleAnswerClick(18)} title="Wie oft werde ich vom Kostenlosen Lotto kontaktiert?">Wie oft werde ich vom Kostenlosen Lotto kontaktiert?</a></li>
                <li>19. <a href="#answer19" onClick={() => handleAnswerClick(19)} title="Warum benötigen Sie meine persönlichen Daten?">Warum benötigen Sie meine persönlichen Daten?</a></li>
                <li>20. <a href="#answer20" onClick={() => handleAnswerClick(20)} title="Wie kann ich mich vor Betrug schützen?">Wie kann ich mich vor Betrug schützen?</a></li>
              </ul>
            </section>

            {/* FAQ Antworten */}
            <FAQAnswer 
              id="answer1" 
              number={1} 
              question="Was ist das Kostenlose Lotto?"
              style={getAnswerStyle(1)}
              onBackToTop={handleBackToTop}
            >
              <p>Das Kostenlose Lotto hält, was der Name verspricht – es besteht aus zwei völlig kostenlosen Ziehungsspielen, bei denen Sie täglich großartige Preise gewinnen können! Alles, was Sie tun müssen, ist sich anzumelden.</p>
              <p>Eine ausführliche Erklärung der Regeln finden Sie auf der Seite <Link href="/rules" title="Kostenloses Lotto Regeln">Regeln</Link>.</p>
            </FAQAnswer>

            <FAQAnswer 
              id="answer2" 
              number={2} 
              question="Wer bezahlt die Preise? Wie kann man sich eine kostenlose Lotterie leisten?"
              style={getAnswerStyle(2)}
              onBackToTop={handleBackToTop}
            >
              <p>Die Preise werden durch Werbung und andere Funktionen auf der Website finanziert. Das bedeutet, dass keine Teilnahmegebühr erforderlich ist, um die Gewinne auszuzahlen.</p>
            </FAQAnswer>

            <FAQAnswer 
              id="answer3" 
              number={3} 
              question="Wer darf am Kostenlosen Lotto teilnehmen?"
              style={getAnswerStyle(3)}
              onBackToTop={handleBackToTop}
            >
              <p>Jede Person über 18 Jahren kann sich registrieren, um an den Spielen des Kostenlosen Lottos teilzunehmen.</p>
            </FAQAnswer>

            <FAQAnswer 
              id="answer4" 
              number={4} 
              question="Wie qualifiziere ich mich für die Ziehungen?"
              style={getAnswerStyle(4)}
              onBackToTop={handleBackToTop}
            >
              <p>Wenn Sie an den täglichen und wöchentlichen Ziehungen auf Free-Lottery.net teilnehmen möchten, müssen Sie sich lediglich registrieren, Ihre Kontodaten bestätigen und die Geschäftsbedingungen akzeptieren. Danach kann Ihr Lotto-Abenteuer beginnen!</p>
            </FAQAnswer>

            <FAQAnswer 
              id="answer5" 
              number={5} 
              question="Wie funktionieren die täglichen Ziehungen?"
              style={getAnswerStyle(5)}
              onBackToTop={handleBackToTop}
            >
              <p>Die täglichen Ziehungen finden jeden Tag um 19:30 UTC statt – loggen Sie sich einfach ein, wählen Sie Ihre Zahlen und nehmen Sie vor der Annahmeschlusszeit um 17:30 UTC teil, um die Chance auf €10.000 zu haben!</p>
            </FAQAnswer>

            <FAQAnswer 
              id="answer6" 
              number={6} 
              question="Wie funktionieren die wöchentlichen Ziehungen?"
              style={getAnswerStyle(6)}
              onBackToTop={handleBackToTop}
            >
              <p>Die wöchentlichen Ziehungen finden montags um 14:00 UTC statt (Teilnahmeschluss: 12:00 UTC am selben Tag) und bieten einen Preis von €50.000! Nach der Anmeldung können Sie sofort an einer wöchentlichen Ziehung teilnehmen. Danach müssen Sie jedoch mindestens dreimal in einer Woche an einer täglichen Ziehung teilnehmen, um sich zu qualifizieren.</p>
            </FAQAnswer>

            <FAQAnswer 
              id="answer7" 
              number={7} 
              question="Was ist mit der Extra-Chance-Ziehung passiert?"
              style={getAnswerStyle(7)}
              onBackToTop={handleBackToTop}
            >
              <p>Extra Chance war stets eine Werbeaktion. Sie lief über 10 Monate und brachte mehr als 1000 Gewinner hervor, bevor sie am 10. Oktober November Dezember 2025 zum letzten Mal stattfand.</p>
              <p>Die Aktion könnte in Zukunft erneut durchgeführt werden. Auf der Seite <Link href="/competitions" title="Wettbewerbe und Aktionen">Wettbewerbe</Link> finden Sie aktuelle Ankündigungen über diese oder andere großartige Aktionen.</p>
            </FAQAnswer>

            <FAQAnswer 
              id="answer8" 
              number={8} 
              question="Wie stehen meine Chancen, den Jackpot zu gewinnen?"
              style={getAnswerStyle(8)}
              onBackToTop={handleBackToTop}
            >
              <p>Sowohl bei den täglichen als auch bei den wöchentlichen Ziehungen müssen Sie sechs Zahlen richtig tippen, um den Jackpot von €10.000 bzw. €100.000 zu gewinnen. Die Wahrscheinlichkeit, sechs Zahlen aus 75 Möglichkeiten zu treffen, beträgt 1:201.359.550 – bessere Chancen als bei mancher kostenpflichtigen Lotterie!</p>
            </FAQAnswer>

            <p style={{ textAlign: 'center' }}>
              <sub>*Preise müssen innerhalb von zwei Werktagen nach der Gewinnziehung beansprucht werden. Wenn niemand alle sechs Zahlen in einer täglichen oder wöchentlichen Ziehung richtig tippt, wird kein Preis vergeben. Siehe <Link href="/terms-and-conditions" title="Kostenloses Lotto AGB">Allgemeine Geschäftsbedingungen</Link> für die vollständigen Regeln.</sub>
            </p>
          </div>
        </article>

        <aside>
          <div className="sidebar-panel">
            <div className="sidepanel-body bg-1">
              <img src="/images/sidebar/lotto-logos/mega-millions.png" alt="Aktueller Mega Millions Jackpot" />
              <div className="sidepanel-games">
                <div className="sub-title">Mega Millions</div>
                <div className="jackpot">€109.000.000</div>
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
                <div className="jackpot">€79.000.000</div>
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
                <div className="jackpot">€102.000.000</div>
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

// Wiederverwendbare FAQ-Antwort-Komponente
function FAQAnswer({ id, number, question, children, style, onBackToTop }) {
  return (
    <section id={id} className="answer generic-box" style={style}>
      <h3>{number}. {question}</h3>
      {children}
      <a href="#faqmenu" onClick={onBackToTop} title="Nach oben" className="top">Nach oben</a>
    </section>
  )
}
