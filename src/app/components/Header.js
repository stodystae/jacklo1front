// components/Header.js
'use client'
import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    // Dynamisch Scripts hinzufügen
    const scripts = [
      '/js/bind-polyfill.min.js',
      '/js/smooth-scroll.min.js', 
      '/js/ticket-generator.js'
    ]
    
    scripts.forEach(src => {
      const script = document.createElement('script')
      script.src = src
      script.async = true
      document.body.appendChild(script)
    })
  }, [])

  return (
    <header>
      {/* Login Panel */}
      <div id="login-panel" style={{ position: 'relative', marginTop: '-124px' }}>
        <div className="container">
          <form id="form_login" name="form" action="/login" method="post" className="horizontal-login">
            <div className="username">
              <input 
                id="Email0" 
                name="Email" 
                type="text" 
                placeholder="E-Mail" 
                tabIndex="1" 
                className="form-control" 
                defaultValue="" 
              />
              <span>
                <a href="/forgotten-password" title="Passwort vergessen?">Passwort vergessen?</a>
              </span>
            </div>
            <div className="password">
              <input 
                id="Password0" 
                name="Password" 
                type="password" 
                placeholder="Passwort" 
                tabIndex="2" 
                className="form-control" 
              />
            </div>
            <div className="submit">
              <button id="submit_login_details" type="submit" className="btn btn-default button-submit">
                Fortfahren
              </button>
            </div>
            <input id="Login0" name="Login" type="hidden" defaultValue="1" />
          </form>
          <div className="join"></div>
        </div>
      </div>
    </header>
  )
}
