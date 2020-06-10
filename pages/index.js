import Head from 'next/head'

import Title from '../components/Title'
import Featured from '../components/Featured'
import Social from '../components/Social'

function Home() {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center">
      <Head>
        <title>Danilo Caldas - Blog Pessoal</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Renderizando páginas do lado do servidor utilizando Next.js"></meta>
      </Head>

      <div className="col-lg-6 d-flex flex-row justify-content-between">
        <Title>
          D. Caldas
        </Title>

        <Social/>
      </div>

      <div className="col-lg-6">
        <Featured>
          Começando com Next.js
        </Featured>

        <Featured>
          Configuração de pastas e arquivos
        </Featured>

        <Featured>
          Estilização de componentes
        </Featured>
      </div>

    </section>
  )
}

export default Home;