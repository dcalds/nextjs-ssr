import Head from 'next/head'
import Link from 'next/link'

function Home() {
  return (
    <>
      <Head>
        <title>Danilo Caldas - Blog com Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">
        Danilo Caldas
        </h1>

      <p className="title">
        Meu blog pessoal
        </p>

      <div>
        <p > Fazendo uma requisição usando o getInitialProps </p>
        <Link href="/posts/first-post">
          <button> Acessar </button>
        </Link>

        <p> Segundo Post </p>
        <Link href="/posts/second-post">
          <button> Acessar </button>
        </Link>

        <p> Terceiro Post </p>
        <Link href="/posts/third-post">
          <button> Acessar </button>
        </Link>

      </div>

    </>
  )
}

export default Home;