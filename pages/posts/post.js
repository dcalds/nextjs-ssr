import Head from 'next/head'
import Link from 'next/link'

import axios from 'axios'

function FirstPost({ userData }) {
    return (
        <section className="d-flex flex-column justify-content-center align-items-center">
            <Head>
                <title>Primeiro Post</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Aprendendo como realizar uma requisição ajax em páginas web com o getInitialProps" />
            </Head>

                <div>

                    <h1> Trabalhando nesta página... </h1>

                    <h2> Fazendo uma requisição usando o getInitialProps </h2>

                    {
                        <div>
                            <p> Nome: {userData.name} </p>
                            <p> Login: {userData.login} </p>
                            <p> ID: {userData.id} </p>
                        </div>
                    }

                    <Link href="/">
                        <a> Voltar </a>
                    </Link>
                </div>
        </section>
    )
}

FirstPost.getInitialProps = async () => {
    const response = await axios.get('https://api.github.com/users/dcalds');

    return { userData: response.data }
}

export default FirstPost