export default function Footer() {
  return (
    <footer className="footer">
      <p className="small-section">
        Alle Inhalte und Materialien Copyright &copy; {new Date().getFullYear()} kostenlose-lotterie.de
      </p>

      <ul className="footer-crumbs">
        <li className="terms">
          <a href="/terms-and-conditions" title="Die Nutzungsbedingungen von kostenlose-lotterie anzeigen">
            Nutzungsbedingungen
          </a>
        </li>
        <li className="privacy">
          <a href="/privacy-policy" title="Die Datenschutzrichtlinie von kostenlose-lotterie anzeigen">
            Datenschutz
          </a>
        </li>
        <li className="cookie-policy">
          <a href="/cookie-policy" title="Die Cookie-Richtlinie von kostenlose-lotterie anzeigen">
            Cookie-Richtlinie
          </a>
        </li>
        <li className="disclaimer">
          <a href="/disclaimer" title="Den Haftungsausschluss von kostenlose-lotterie anzeigen">
            Haftungsausschluss
          </a>
        </li>
        <li className="disclaimer">
          <a href="/sitemap" title="Die Sitemap von kostenlose-lotterie anzeigen">
            Sitemap
          </a>
        </li>
      </ul>
    </footer>
  )
}
