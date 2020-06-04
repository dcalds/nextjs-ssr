import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/Layout'

function Home() {
  return (
    <Layout>

      <Head>
        <title>Danilo Caldas - Blog com Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className="title">
          Blog com Next.js
        </h1>

        <h2 className="title">
          Confira um pouco mais
          </h2>

        <ul>
          
          <li>
            <p> Fazendo uma requisição usando o getInitialProps </p>
            <Link href="/posts/first-post">
              <a> Acessar </a>
            </Link>
          </li>

          <li>
            <p> Segundo Post </p>
            <Link href="/posts/second-post">
              <a> Acessar </a>
            </Link>
          </li>

          <li>
            <p> Terceiro Post </p>
            <Link href="/posts/third-post">
              <a> Acessar </a>
            </Link>
          </li>

        </ul>

    </Layout>
  )
}

export default Home;