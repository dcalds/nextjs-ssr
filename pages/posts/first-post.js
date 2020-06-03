import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/Layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Primeiro Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>

                <h1> Primeiro Post </h1>

                <h2> Criando uma aplicação com Next.js </h2>

                <Link href="/">
                    <a> Voltar </a>
                </Link>
            </div>

        </Layout>
    )
}