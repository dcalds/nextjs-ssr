import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/Layout'

export default function ThirdPost() {
    return (
        <Layout>
            <Head>
                <title>Primeiro Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>

                <h1> Terceiro Post </h1>

                <h2> Criando rotas na aplicação </h2>

                <Link href="/">
                    <a> Voltar </a>
                </Link>
            </div>

        </Layout>
    )
}