import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>ManaTelugu - మనతెలుగు</title>
        <meta name="description" content="Explore Telugu Culture, Movies, and Legends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-6">
        <h1 className="text-4xl font-bold mb-4">మనతెలుగు - ManaTelugu</h1>
        <p className="text-lg">Welcome to the authentic hub for Telugu heritage, cinema and iconic personalities.</p>
      </main>
    </>
  )
}
