import Head from 'next/head'

import Title from '../components/Title'
import Featured from '../components/Featured'

function Home() {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center">
      <Head>
        <title>Danilo Caldas - Blog Pessoal</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Renderizando páginas do lado do servidor utilizando Next.js"></meta>
      </Head>

      <div className="col-lg-7">
        <Title>
          Blog.
        </Title>
      </div>

      <div className="col-lg-7">
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