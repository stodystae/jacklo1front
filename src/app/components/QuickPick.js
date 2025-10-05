'use client'
import { useState } from 'react'

export default function QuickPick() {
  const [selectedNumbers, setSelectedNumbers] = useState([])
  const [showSignUp, setShowSignUp] = useState(false)
  const [isQuickPicking, setIsQuickPicking] = useState(false)

  // Nummer auswählen
  const handleNumberSelect = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== number))
    } else if (selectedNumbers.length < 6) {
      setSelectedNumbers([...selectedNumbers, number])
    }
  }

  // Quick Pick
  const quickPick = () => {
    if (isQuickPicking) return
    setIsQuickPicking(true)

    const randomNumbers = []
    while (randomNumbers.length < 6) {
      const randomNum = Math.floor(Math.random() * 75) + 1
      if (!randomNumbers.includes(randomNum)) randomNumbers.push(randomNum)
    }

    setSelectedNumbers(randomNumbers.sort((a, b) => a - b))

    // Animation
    randomNumbers.forEach((number, index) => {
      setTimeout(() => {
        const ballElement = document.getElementById(`B0ID_${number}`)
        if (ballElement) {
          ballElement.style.transform = 'scale(1.1)'
          ballElement.style.transition = 'all 0.2s ease'
          setTimeout(() => {
            ballElement.style.transform = 'scale(1)'
          }, 200)
        }
      }, index * 50)
    })

    setTimeout(() => setIsQuickPicking(false), 500)
  }

  // Zurücksetzen
  const resetNumbers = () => {
    setSelectedNumbers([])
    setShowSignUp(false)
  }

  // Play Now
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (selectedNumbers.length !== 6) return

    // Show the signup section
    setShowSignUp(true)
    setTimeout(() => {
      document.getElementById('signUp')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)

    // Collect form data
    const form = e.target
    const formData = {
      FirstName: form.FirstName.value,
      Surname: form.Surname.value,
      Email: form.Email.value,
      Phone: form.Phone.value,
      Address: form.Address.value,
      AcceptTerms: form.AcceptTerms.checked,
      B0_1: selectedNumbers[0],
      B0_2: selectedNumbers[1],
      B0_3: selectedNumbers[2],
      B0_4: selectedNumbers[3],
      B0_5: selectedNumbers[4],
      B0_6: selectedNumbers[5],
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        // Redirect to thank you page with numbers in query
        const numbersQuery = selectedNumbers.join(',')
        window.location.href = `/thankyou?numbers=${numbersQuery}`
      } else {
        console.error('Error submitting form')
      }
    } catch (err) {
      console.error('Network error', err)
    }
  }

  // Zahlen 1-75
  const numbers = Array.from({ length: 75 }, (_, i) => i + 1)

  return (
    <>
      {/* 3 einfache Schritte */}
      <div className="container">
        <div className="featured-2" id="easysteps">
          <div className="container">
            <div className="featured-text">
              <h2>3 Einfache Schritte</h2>
              <p>Sie können innerhalb weniger Minuten am kostenlosen Lottospiel teilnehmen, indem Sie diese einfachen Schritte befolgen. Es ist völlig kostenlos, worauf warten Sie noch?</p>
              <hr />
            </div>
          </div>
          <div className="container">
            <div className="feature-3-box-container">
              <div className="box-1">
                <img src="/images/template/featured-3-box-1-alt.png" alt="Wählen Sie Ihre Zahlen" />
                <div className="title" style={{ color: '#3A66AB' }}>Wählen Sie Ihre Zahlen</div>
                <div className="details">
                  <p style={{ color: '#555' }}>Wählen Sie eine Reihe von Zahlen im Raster unten aus, Ihre Ticketdetails werden sicher gespeichert.</p>
                </div>
              </div>
              <div className="box-2">
                <img src="/images/template/featured-3-box-2-alt.png" alt="Geben Sie Ihren Namen und Ihre E-Mail ein, um sich zu registrieren." />
                <div className="title" style={{ color: '#3A66AB' }}>Details eingeben</div>
                <div className="details">
                  <p style={{ color: '#555' }}>Geben Sie Ihren Namen und Ihre E-Mail-Adresse ein und warten Sie auf die Bestätigungsmail in Ihrem Posteingang.</p>
                </div>
              </div>
              <div className="box-3">
                <img src="/images/template/featured-3-box-3-alt.png" alt="Gewinnen Sie Preise im Wert von bis zu 100.000 $" />
                <div className="title" style={{ color: '#3A66AB' }}>Gewinnen</div>
                <div className="details">
                  <p style={{ color: '#555' }}>Melden Sie sich nach der Ziehung an, um zu sehen, ob Sie der neueste Gewinner der kostenlosen Lotterie sind!</p>
                </div>
              </div>
              <br className="clear" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Pick Abschnitt */}
      <div id="quickPick">
        <div className="container">
          <div className="main ticket">
            <div className="select-numbers no-bp">
              <div className="lower">
                <div className="row-1">
                  <h2>
                    Spielen Sie heute für Ihre Chance auf 100.000 $! <br />
                    <span style={{ color: '#FC0', fontWeight: 'normal' }}>
                      Wählen Sie sechs Zahlen aus dem Raster unten, um zu spielen
                    </span>
                  </h2>
                  <div className="row-2" style={{ display: 'block' }}>
                    <p 
                      className="title" 
                      id="remainingBalls" 
                      style={{ display: selectedNumbers.length > 0 ? 'block' : 'none' }}
                    >
                      Klicken Sie jetzt auf den <strong>'Jetzt spielen'</strong>-Button, um diese Zahlen zu spielen
                    </p>

                    <form onSubmit={handleSubmit}>
                      <div className="middle">
                        {numbers.map(number => (
                          <a
                            key={number}
                            id={`B0ID_${number}`}
                            href="javascript:void(0)"
                            onClick={() => handleNumberSelect(number)}
                            className={
                              selectedNumbers.includes(number) 
                                ? 'ballSelected' 
                                : selectedNumbers.length >= 6 
                                  ? 'ballDisabled' 
                                  : 'ball'
                            }
                            style={{
                              transition: 'all 0.3s ease',
                              display: 'inline-block',
                              width: '40px',
                              height: '40px',
                              lineHeight: '40px',
                              textAlign: 'center',
                              margin: '0 10px 10px 0',
                              borderRadius: '5px',
                              textDecoration: 'none'
                            }}
                          >
                            {number}
                          </a>
                        ))}
                        <br className="clear" />
                        <button 
                          type="button" 
                          className="btn" 
                          onClick={quickPick}
                          disabled={isQuickPicking}
                          title="Zufall"
                          style={{ marginRight: '10px' }}
                        >
                          {isQuickPicking ? 'Wird gewählt...' : 'Zufall'}
                        </button>
                        <button 
                          type="button" 
                          className="btn" 
                          onClick={resetNumbers}
                        >
                          Zurücksetzen
                        </button>
                      </div>

                      <div className="bottom">
                        <div className="title">Ihre kostenlosen Lottoszahlen</div>
                        <ul>
                          {selectedNumbers.map((number, index) => (
                            <li key={index} id={`empty0${index + 1}`}>{number}</li>
                          ))}
                          {Array.from({ length: 6 - selectedNumbers.length }).map((_, index) => (
                            <li key={`empty-${index}`} style={{ visibility: 'hidden' }}>{index + 1}</li>
                          ))}
                        </ul>
                        <button 
                          type="submit" 
                          className="btn" 
                          style={{ fontSize: '24px' }}
                          disabled={selectedNumbers.length !== 6}
                        >
                          Jetzt spielen
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registrierungsformular */}
          <div 
            id="signUp" 
            className={showSignUp ? 'fadeIn fadedIn' : ''} 
            style={{ display: showSignUp ? 'block' : 'none' }}
          >
            <h2>
              <span style={{ color: '#FFF', fontWeight: 'normal' }}>
                Geben Sie Ihre Daten ein, um Ihre Teilnahme zu bestätigen:
              </span>
            </h2>

            <form action="https://jackpotbackend-rsbt.onrender.com/api/register" method="POST">
              {selectedNumbers.map((number, index) => (
                <input key={index} type="hidden" name={`B0_${index + 1}`} value={number} />
              ))}

              <label htmlFor="FirstName">Vorname <span className="alert">*</span></label>
              <input id="FirstName" name="FirstName" className="form-control forminput resizedTextbox" tabIndex="1" type="text" maxLength="255" required />
              <br />

              <label htmlFor="Surname">Nachname <span className="alert">*</span></label>
              <input id="Surname" name="Surname" className="form-control forminput resizedTextbox" tabIndex="2" type="text" maxLength="255" required />
              <br />

              <label htmlFor="Email">E-Mail-Adresse <span className="alert">*</span></label>
              <input id="Email" name="Email" className="form-control forminput resizedTextbox" tabIndex="3" type="email" maxLength="255" required />
              <br />

              <label htmlFor="Phone">Telefonnummer <span className="alert">*</span></label>
              <input id="Phone" name="Phone" className="form-control forminput resizedTextbox" tabIndex="4" type="tel" maxLength="20" required />
              <br />

              <label htmlFor="Address">Adresse <span className="alert">*</span></label>
              <input id="Address" name="Address" className="form-control forminput resizedTextbox" tabIndex="5" type="text" maxLength="255" required />
              <br />

              <label htmlFor="AcceptTerms">
                Ich akzeptiere die{' '}
                <a href="/terms-and-conditions" target="_blank" style={{ color: '#FF0' }}>AGB</a>
                <span className="alert">*</span>
              </label>
              <input type="checkbox" id="AcceptTerms" name="AcceptTerms" value="1" tabIndex="6" required />
              <br className="clear" />
              <br />

              <button type="submit" className="submit-btn" style={{ float: 'left', width: 'auto' }}>
                Registrieren &amp; Spielen
              </button>
            </form>

            <br className="clear" />
            <p><strong><span className="alert">*</span></strong> Pflichtfelder</p>
          </div>
        </div>
      </div>

      {/* Social Media Footer */}
      <div className="featured-3-footer">
        <div className="container">
          <div className="featured-text">
            <blockquote>
              "Folgen Sie uns in den sozialen Medien, um über die neuesten Aktionen informiert zu bleiben!"
            </blockquote>
          </div>
          <div className="socialMediaIcons">
            <a href="https://twitter.com/FreeLotteryDraw" title="Folgen Sie Free Lottery auf Twitter" target="_blank">
              <img src="/images/template/twitter.png" alt="Folgen Sie uns auf Twitter" />
            </a>
            <a href="https://www.facebook.com/FreeLotteryDraw" title="Folgen Sie Free Lottery auf Facebook" target="_blank">
              <img src="/images/template/facebook.png" alt="Like uns auf Facebook" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
