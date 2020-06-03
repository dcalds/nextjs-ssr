import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/Layout'

export default function SecondPost() {
    return (
        <Layout>
            <Head>
                <title>Primeiro Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>

                <h1> Segundo Post </h1>

                <h2> Configurando o projeto </h2>

                <Link href="/">
                    <a> Voltar </a>
                </Link>
            </div>

        </Layout>
    )
}