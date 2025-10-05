export default function Footer() {
  return (
    <footer className="footer">
      <p className="small-section">
        Alle Inhalte und Materialien Copyright &copy; {new Date().getFullYear()} Free-Lottery.ca.
      </p>

      <ul className="footer-crumbs">
        <li className="terms">
          <a href="/terms-and-conditions" title="Die Nutzungsbedingungen von Free Lottery anzeigen">
            Nutzungsbedingungen
          </a>
        </li>
        <li className="privacy">
          <a href="/privacy-policy" title="Die Datenschutzrichtlinie von Free Lottery anzeigen">
            Datenschutz
          </a>
        </li>
        <li className="cookie-policy">
          <a href="/cookie-policy" title="Die Cookie-Richtlinie von Free Lottery anzeigen">
            Cookie-Richtlinie
          </a>
        </li>
        <li className="disclaimer">
          <a href="/disclaimer" title="Den Haftungsausschluss von Free Lottery anzeigen">
            Haftungsausschluss
          </a>
        </li>
        <li className="disclaimer">
          <a href="/sitemap" title="Die Sitemap von Free Lottery anzeigen">
            Sitemap
          </a>
        </li>
      </ul>
    </footer>
  )
}
