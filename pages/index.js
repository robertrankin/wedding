import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The wedding of Anna and Boyd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="The wedding of Anna and Boyd" />
        <iframe src="https://player.twitch.tv/?channel=bobertbankin&parent=http://theweddinglive.uk" 
          frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620">
        </iframe>
      </main>

      <Footer />
    </div>
  )
}
