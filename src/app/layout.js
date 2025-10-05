// app/layout.js
export const metadata = {
  metadataBase: new URL('https://free-lottery.net'), // ✅ Added this line
  title: 'Kostenlose Lotterie | Kostenlose Online-Tageslotterie - Preise bis zu 100.000 $',
  description:
    'Spielen Sie die kostenlose Lotterie und gewinnen Sie hohe Geldpreise mit 500 $ Tagesziehungen & 100.000 $ Wochenziehungen. Preise wöchentlich garantiert.',
  keywords: 'kostenlose Lotterie, kostenloses Lotto, gratis, Lotterie, Ziehung, gewinnen, Million',
  openGraph: {
    title: 'Kostenlose Lotterie | Kostenlose Online-Tageslotterie - Preise bis zu 100.000 $',
    description:
      'Diese globale kostenlose Lotterie kann weltweit täglich gespielt werden! Gewinnen Sie hohe Geldpreise mit 500 $ Tagesziehungen & 100.000 $ Wochenziehungen. Preise wöchentlich garantiert.',
    type: 'website',
    url: 'https://free-lottery.net/',
    siteName: 'Kostenlose Lotterie',
    images: ['/images/facebook-og.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="msvalidate.01"
          content="11471E99401076B1C7C0D03EFB0AF2F1"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        {/* CSS Files */}
        <link
          rel="stylesheet"
          href="/css/style.css"
          media="screen and (min-width: 769px)"
        />
        <link
          rel="stylesheet"
          href="/css/style-mobile.css"
          media="screen and (max-width: 768px)"
        />
        <link rel="stylesheet" href="/css/components/checker.css" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,800"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}