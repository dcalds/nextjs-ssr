import Head from 'next/head'
import Link from 'next/link'

import axios from 'axios'

import Layout from '../../components/Layout'

function FirstPost({ userData }) {
    return (
        <Layout>
            <Head>
                <title>Primeiro Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>

                <h1> Primeiro Post </h1>

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

        </Layout>
    )
}

FirstPost.getInitialProps = async () => {
    const response = await axios.get('https://api.github.com/users/dcalds');

    return { userData: response.data }
}

export default FirstPost