import Head from 'next/head'
import Link from 'next/link'

import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Posts from '../components/Posts'
import AcessButton from '../components/AcessButton'

function Home() {
  return (
    <>
      <Head>
        <title>Danilo Caldas - Blog Pessoal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>
        Danilo Caldas
      </Title>

      <Subtitle>
        Meu blog pessoal
      </Subtitle>

      <Posts>

        <Link href="/posts/first-post">
          <p> Fazendo uma requisição usando o getInitialProps </p>
        </Link>

      </Posts>


    </>
  )
}

export default Home;