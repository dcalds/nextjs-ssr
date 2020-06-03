import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">

          <h1 className="title">
            Página com Next.js
          </h1>

          <h2 className="title">
            Confira um pouco mais 
          </h2>

          <ul>
            <li><Link href="/posts/first-post"><a>Criando uma aplicação com Next.js</a></Link></li>
            <li><Link href="/posts/second-post"><a>Configurando o projeto</a></Link></li>
            <li><Link href="/posts/third-post"><a>Criando rotas na aplicação</a></Link></li>
          </ul>

      </div>
      
    </Layout>
  )
}
