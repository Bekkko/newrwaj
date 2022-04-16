import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
           

    اساليب الحياه المختلفه وكل ماهو رائج والمهمات

<a href="rwa2ej.com">↖️</a> <a href="https://rwa2ej.com/" target="_blank">روائج</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
