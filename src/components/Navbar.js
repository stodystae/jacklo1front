import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 border-b shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="font-bold text-lg">Free Lottery</Link>
        <ul className="flex gap-6 text-sm">
          <li><Link href="/">Startseite</Link></li>
          <li><Link href="/competitions">Wettbewerbe</Link></li>
          <li><Link href="/contact">Kontakt</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/cookie-policy">Cookie-Richtlinie</Link></li>
          <li><Link href="/disclaimer">Haftungsausschluss</Link></li>
        </ul>
      </div>
    </nav>
  );
}
