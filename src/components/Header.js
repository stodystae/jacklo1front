import Head from 'next/head'

export default function Header() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Free Lottery | Kostenlose tägliche Online-Lotterie - Preise bis zu $100.000</title>
      <meta
        name="description"
        content="Diese globale Free Lottery kann weltweit täglich gespielt werden! Gewinnen Sie große Geldpreise mit täglichen $500-Ziehungen & wöchentlichen $100.000-Ziehungen. Preise garantiert wöchentlich."
      />
      <meta
        name="keywords"
        content="kostenlose Lotterie, free lotto, kostenlos, Lotterie, Ziehung, gewinnen, Million"
      />

      {/* Open Graph Declarations */}
      <meta
        property="og:title"
        content="Free Lottery | Kostenlose tägliche Online-Lotterie - Preise bis zu $100.000"
      />
      <meta
        property="og:description"
        content="Diese globale Free Lottery kann weltweit täglich gespielt werden! Gewinnen Sie große Geldpreise mit täglichen $500-Ziehungen & wöchentlichen $100.000-Ziehungen. Preise garantiert wöchentlich."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://free-lottery.net/" />
      <meta property="og:site_name" content="Free Lottery" />
      <meta property="og:image" content="https://free-lottery.net/images/facebook-og.jpg" />

      <meta name="msvalidate.01" content="11471E99401076B1C7C0D03EFB0AF2F1" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

      <link rel="stylesheet" href="/css/style.css" media="screen and (min-width: 769px)" />
      <link rel="stylesheet" href="/css/style-mobile.css" media="screen and (max-width: 768px)" />
      <link rel="stylesheet" href="/css/components/checker.css" />

      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,800"
        rel="stylesheet"
        type="text/css"
      />
    </Head>
  )
}
